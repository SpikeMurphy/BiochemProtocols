// js/user/subscription.js
// ------------------------------------
// Runtime subscription state (Supabase)
// ------------------------------------

window.subscription = {
  plan: 'free',
  status: null,
  loaded: false
};

/**
 * Load the current user's subscription from Supabase
 */
async function loadSubscription() {
  const user = await getCurrentUser();

  if (!user) {
    window.subscription.loaded = true;
    return;
  }

  // Admin override
  if (user.app_metadata?.role === 'admin') {
    window.subscription.plan = 'Admin';
    window.subscription.status = 'active';
    window.subscription.loaded = true;
    return;
  }

  const { data, error } = await supabaseClient
    .from('subscriptions')
    .select('plan, status')
    .eq('user_id', user.id)
    .single();

  if (error || !data) {
    window.subscription.loaded = true;
    return;
  }

  window.subscription.plan = data.plan;
  window.subscription.status = data.status;
  window.subscription.loaded = true;
}

// Expose loader
window.loadSubscription = loadSubscription;

// ------------------------------------
// Ready promise (prevents race bugs)
// ------------------------------------

window.subscriptionReady = (async () => {
  try {
    await loadSubscription();
  } catch (err) {
    console.error('Failed to load subscription:', err);
    window.subscription.loaded = true;
  }
})();
