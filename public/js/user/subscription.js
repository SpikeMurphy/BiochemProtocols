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

  // Not logged in → free access
  if (!user) {
    window.subscription.loaded = true;
    return;
  }

  const { data, error } = await supabaseClient
    .from('subscriptions')
    .select('plan, status')
    .eq('user_id', user.id)
    .single();

  if (error || !data) {
    console.warn('Subscription not found, defaulting to free:', error?.message);
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
