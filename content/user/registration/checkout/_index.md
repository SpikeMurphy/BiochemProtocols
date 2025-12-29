+++
title = "Checkout"
required_plan = []
+++

<div id="checkout-status">Starting checkout…</div>

<script>
(async () => {
  // 1. Wait until auth is initialized
  while (!window.auth || !window.auth.initialized) {
    await new Promise(r => setTimeout(r, 50));
  }

  // 2. Get current session
  const { data: sessionData } = await window.supabaseClient.auth.getSession();
  const session = sessionData?.session;

  if (!session) {
    document.getElementById('checkout-status').textContent =
      'You must be logged in to continue.';
    return;
  }

  // 3. Read price_id from URL
  const params = new URLSearchParams(window.location.search);
  const priceId = params.get('price');

  if (!priceId) {
    document.getElementById('checkout-status').textContent =
      'Missing price information.';
    return;
  }

  // 4. Call Supabase Edge Function
  const res = await fetch('/functions/v1/create-checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${session.access_token}`
    },
    body: JSON.stringify({ priceId })
  });

  if (!res.ok) {
    const txt = await res.text();
    document.getElementById('checkout-status').textContent =
      'Checkout error: ' + txt;
    return;
  }

  // 5. Redirect to Stripe Checkout
  const { url } = await res.json();
  window.location.href = url;
})();
</script>


<a href="/BiochemProtocols/user/registration/checkout/?price=price_1AAA111">
  Buy Explore
</a>

<a href="/BiochemProtocols/user/registration/checkout/?price=price_1AAA222">
  Buy Explore (Yearly)
</a>
