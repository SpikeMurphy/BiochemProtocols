// Expose a single global object
window.auth = {
  user: null,
  session: null,
  initialized: false
};

// Initialize auth state ONCE
async function initAuth() {
  const { data, error } = await supabaseClient.auth.getSession();

  if (error) {
    console.error('Auth init error:', error);
    window.auth.initialized = true;
    return;
  }

  window.auth.session = data.session || null;
  window.auth.user = data.session?.user || null;
  window.auth.initialized = true;
}

// Keep auth state in sync
supabaseClient.auth.onAuthStateChange((_event, session) => {
  window.auth.session = session;
  window.auth.user = session?.user || null;
});

// Helper: always returns current user
async function getCurrentUser() {
  if (window.auth.initialized) {
    return window.auth.user;
  }

  const { data } = await supabaseClient.auth.getSession();
  return data.session?.user || null;
}

// Soft guard
async function requireAuth(redirectTo = '/login/') {
  const user = await getCurrentUser();
  if (!user) {
    window.location.href = redirectTo;
    return null;
  }
  return user;
}

// Logout
async function logout() {
  await supabaseClient.auth.signOut();

  // Clear local state explicitly
  window.auth.user = null;
  window.auth.session = null;

  // Optional: redirect to homepage
  window.location.replace('/BiochemProtocols/');
}

// Expose helpers
window.getCurrentUser = getCurrentUser;
window.requireAuth = requireAuth;
window.logout = logout;

// CHANGED281225
function updateLoginButton() {
  const btn = document.querySelector('.btn_login');
  if (!btn) return;
  if (window.auth.user) {
    btn.textContent = 'Logout';
    btn.dataset.state = 'logged-in';
  } else {
    btn.textContent = 'Login';
    btn.dataset.state = 'logged-out';
  }
}
document.addEventListener('DOMContentLoaded', async () => {
  await initAuth();
  updateLoginButton();
});
supabaseClient.auth.onAuthStateChange(() => {
  updateLoginButton();
});
// CHANGED281225