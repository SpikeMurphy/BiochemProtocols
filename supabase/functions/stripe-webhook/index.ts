import { serve } from "https://deno.land/std/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

/* ─────────────────────────────────────────────
   Stripe client
───────────────────────────────────────────── */

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY")!, {
  apiVersion: "2023-10-16",
});

/* ─────────────────────────────────────────────
   Price → Plan mapping (MUST MATCH STRIPE)
───────────────────────────────────────────── */

const PRICE_TO_PLAN: Record<string, string> = {
  // Explore
  "price_1SjHYKRrC5pt0KcWz0XLi9PO": "Explore", // monthly
  "price_1SjLXGRrC5pt0KcWd1sxWiUZ": "Explore", // yearly

  // Prepare
  "price_1SjL9sRrC5pt0KcWvY7lbJtL": "Prepare", // monthly
  "price_1SjLE1RrC5pt0KcWYEHejeeJ": "Prepare", // yearly

  // Execute
  "price_1SjLAlRrC5pt0KcWKmnb6RrI": "Execute", // monthly
  "price_1SjLEQRrC5pt0KcWsaR84PUA": "Execute", // yearly

  // Document
  "price_1SjLB7RrC5pt0KcWcniCIPhU": "Document", // monthly
  "price_1SjLHjRrC5pt0KcW79OoPw5M": "Document", // yearly

  // Optimize
  "price_1SjLBURrC5pt0KcWFTXzDOzt": "Optimize", // monthly
  "price_1SjLFDRrC5pt0KcWltgAgVsA": "Optimize", // yearly
  "price_1SjLGARrC5pt0KcWDsa1EfYG": "Optimize", // one-off

  // Learn
  "price_1SjL64RrC5pt0KcWJw4fkK81": "Learn", // monthly
  "price_1SjLDJRrC5pt0KcWmNDdCHXi": "Learn", // yearly
  "price_1SjLGiRrC5pt0KcWe4FUJLBh": "Learn", // one-off
};

/* ─────────────────────────────────────────────
   Webhook handler
───────────────────────────────────────────── */

serve(async (req) => {
  try {
    const signature = req.headers.get("stripe-signature");

    if (!signature) {
      console.warn("⚠️ Missing stripe-signature");
      return new Response("ok", { status: 200 });
    }

    const body = await req.text();
    let event: Stripe.Event;

    try {
      event = await stripe.webhooks.constructEventAsync(
        body,
        signature,
        Deno.env.get("STRIPE_WEBHOOK_SECRET")!
      );
    } catch (err) {
      console.error("❌ Invalid webhook signature", err);
      return new Response("ok", { status: 200 });
    }

    /* ─────────────────────────────────────────────
       Supabase service-role client
    ───────────────────────────────────────────── */

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SERVICE_ROLE_KEY")!
    );


    console.log("ENV CHECK", {
      hasServiceKey: !!Deno.env.get("SERVICE_ROLE_KEY"),
      hasUrl: !!Deno.env.get("SUPABASE_URL"),
    });

    /* ─────────────────────────────────────────────
       Idempotency protection
    ───────────────────────────────────────────── */

    const eventId = event.id;

    const { data: existing } = await supabase
      .from("stripe_events")
      .select("id")
      .eq("id", eventId)
      .maybeSingle();

    if (existing) {
      console.log("⏭️ Event already processed:", eventId);
      return new Response("ok", { status: 200 });
    }

    await supabase.from("stripe_events").insert({ id: eventId });

    /* ─────────────────────────────────────────────
       Checkout completed
    ───────────────────────────────────────────── */

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      const customerId = session.customer as string | null;
      const subscriptionId = session.subscription as string | null;

      if (!customerId || !subscriptionId) {
        console.warn("⚠️ Missing customer or subscription ID");
        return new Response("ok", { status: 200 });
      }

      // ✅ Prefer session email (Pricing Tables!)
      let email = session.customer_details?.email ?? null;

      if (!email) {
        const customer = await stripe.customers.retrieve(customerId);
        email = (customer as Stripe.Customer).email ?? null;
      }

      if (!email) {
        console.warn("⚠️ No email found for session:", session.id);
        return new Response("ok", { status: 200 });
      }

      // ✅ Find Supabase user by email
      const { data: profile, error } = await supabase
        .from("profiles")
        .select("id")
        .ilike("email", email)
        .single();

      if (error || !profile) {
        console.warn("⚠️ No Supabase profile for email:", email);
        return new Response("ok", { status: 200 });
      }

      const supabaseUserId = profile.id;

      // ✅ Retrieve subscription
      const subscription = await stripe.subscriptions.retrieve(
        subscriptionId
      );

      const priceId = subscription.items.data[0]?.price.id ?? "";
      const plan = PRICE_TO_PLAN[priceId];

      if (!plan) {
        console.error("❌ Unknown priceId:", priceId);
        return new Response("Unknown priceId", { status: 400 });
      }

      // ✅ Update profile with Stripe customer ID
      await supabase
        .from("profiles")
        .update({ stripe_customer_id: customerId })
        .eq("id", supabaseUserId);

      // ✅ Upsert subscription
      await supabase.from("subscriptions").upsert({
        user_id: supabaseUserId,
        stripe_customer_id: customerId,
        stripe_subscription_id: subscription.id,
        plan,
        status: subscription.status,
        current_period_end: new Date(
          subscription.current_period_end * 1000
        ).toISOString(),
        updated_at: new Date().toISOString(),
      });

      console.log("✅ Subscription synced:", {
        user: supabaseUserId,
        email,
        plan,
      });
    }

    /* ─────────────────────────────────────────────
       Subscription updates / cancellation
    ───────────────────────────────────────────── */

    if (
      event.type === "customer.subscription.updated" ||
      event.type === "customer.subscription.deleted"
    ) {
      const subscription = event.data.object as Stripe.Subscription;

      await supabase
        .from("subscriptions")
        .update({
          status: subscription.status,
          current_period_end: new Date(
            subscription.current_period_end * 1000
          ).toISOString(),
          updated_at: new Date().toISOString(),
        })
        .eq("stripe_subscription_id", subscription.id);

      console.log("🔄 Subscription updated:", subscription.id);
    }

    return new Response("ok", { status: 200 });
  } catch (err) {
    console.error("🔥 Unhandled webhook error", err);
    return new Response("ok", { status: 200 });
  }
});
