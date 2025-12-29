document.addEventListener('DOMContentLoaded', async () => {
  // wait for auth
  while (!window.auth?.initialized) {
    await new Promise(r => setTimeout(r, 10));
  }

  // ONLY guard pages that define required_plan
  const requiredAttr = document.body.dataset.requiredPlan;
  if (!requiredAttr) return;

  // NOW require login
  if (!window.auth.user) {
    // Open login modal
    const wrapper = document.querySelector('.wrapper_login');
    const overlay = document.querySelector('.login_overlay');

    if (wrapper && overlay) {
      wrapper.classList.add('active_popup');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    return; // ⛔ stop guard here
  }

  // wait for subscription
  await window.subscriptionReady;

  const allowedPlans = requiredAttr.split(',').map(p => p.trim());
  const allowedStatuses = ['active', 'trialing'];

  if (
    !window.subscription.loaded ||
    !allowedStatuses.includes(window.subscription.status) ||
    !allowedPlans.includes(window.subscription.plan)
  ) {
    window.location.replace('/BiochemProtocols/user/registration/pricing/');
  }
});
