function updatePricingVisibility() {
  const loggedIn = !!window.auth.user;

  document.querySelectorAll('.pricing-logged-in')
    .forEach(el => el.style.display = loggedIn ? 'block' : 'none');

  document.querySelectorAll('.pricing-logged-out')
    .forEach(el => el.style.display = loggedIn ? 'block' : 'none');
}

document.addEventListener('DOMContentLoaded', () => {
  updatePricingVisibility();
});

supabaseClient.auth.onAuthStateChange(() => {
  updatePricingVisibility();
});
