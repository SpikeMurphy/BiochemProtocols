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
  "price_1AAA111": "Execute",
  "price_1AAA222": "Execute-Yearly",
};

/* ─────────────────────────────────────────────
   Webhook handler
───────────────────────────────────────────── */

serve(async (req) => {
  try {
    const signature = req.headers.get("stripe-signature");

    // Stripe sends occasional test calls without signature
    if (!signature) {
      console.warn("⚠️ Missing stripe-signature");
      return new Response("ok", { status: 200 });
    }

    const body = await req.text();
    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(
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

      // Retrieve customer (contains Supabase user ID in metadata)
      const customer = await stripe.customers.retrieve(customerId);
      const supabaseUserId = (customer as Stripe.Customer).metadata
        ?.supabase_user_id;

      if (!supabaseUserId) {
        console.warn("⚠️ Missing supabase_user_id in Stripe metadata");
        return new Response("ok", { status: 200 });
      }

      // Retrieve subscription
      const subscription = await stripe.subscriptions.retrieve(
        subscriptionId
      );

      const priceId =
        subscription.items.data[0]?.price.id ?? "";

      const plan = PRICE_TO_PLAN[priceId] ?? "free";

      // Persist customer ID on profile (optional but useful)
      await supabase
        .from("profiles")
        .update({ stripe_customer_id: customerId })
        .eq("id", supabaseUserId);

      // Upsert subscription (one row per user)
      await supabase.from("subscriptions").upsert({
        user_id: supabaseUserId,
        stripe_customer_id: customerId,
        stripe_subscription_id: subscription.id,
        plan: plan,
        status: subscription.status,
        current_period_end: new Date(
          subscription.current_period_end * 1000
        ).toISOString(),
        updated_at: new Date().toISOString(),
      });

      console.log("✅ Subscription synced:", {
        user: supabaseUserId,
        plan,
        status: subscription.status,
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
