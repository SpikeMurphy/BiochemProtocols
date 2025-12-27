document.addEventListener('DOMContentLoaded', async () => {
  await window.subscriptionReady;

  const requiredAttr = document.body.dataset.requiredPlan;
  if (!requiredAttr) return;

  const allowedPlans = requiredAttr
    .split(',')
    .map(p => p.trim());

  if (!allowedPlans.includes(window.subscription.plan)) {
    window.location.replace('/BiochemProtocols/user/registration/pricing/');
  }
});
