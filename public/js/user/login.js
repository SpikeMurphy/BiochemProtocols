// JS_STREAMLINE
// JS_COMMENTS

const wrapper_login = document.querySelector('.wrapper_login');
const login_link = document.querySelector('.login_link');
const register_link = document.querySelector('.register_link');
const btn_login = document.querySelector('.btn_login');
const icon_close = document.querySelector('.icon_close');
const login_overlay = document.querySelector('.login_overlay');

register_link.addEventListener('click', ()=> {
    wrapper_login.classList.add('active');
});

login_link.addEventListener('click', ()=> {
    wrapper_login.classList.remove('active');
});

// CHANGED281225
btn_login.addEventListener('click', (e) => {
  e.preventDefault();
  if (btn_login.dataset.state === 'logged-in') {
    logout();
    return;
  }
  wrapper_login.classList.add('active_popup');
  login_overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
});
// CHANGED281225

icon_close.addEventListener('click', ()=> {
    wrapper_login.classList.remove('active_popup');
    login_overlay.classList.remove('active');
    document.body.style.overflow = '';
});

login_overlay.addEventListener('click', () => {
    wrapper_login.classList.remove('active_popup');
    login_overlay.classList.remove('active');
    document.body.style.overflow = '';
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && wrapper_login.classList.contains('active_popup')) {
        wrapper_login.classList.remove('active_popup');
        login_overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
});

////////// JS_DONE: up to here //////////

// LOGIN an Supabase anbinden //
const loginForm = document.querySelector('.login_form form');

if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      console.error('LOGIN ERROR:', error);
      alert(error.message);
      return;
    }

    console.log('LOGIN OK:', data);

    // ✅ Close login modal
    wrapper_login.classList.remove('active_popup');
    login_overlay.classList.remove('active');
    document.body.style.overflow = '';
  });
}


// Registrierung anbinden //
const registerForm = document.querySelector('.registration_form form');

if (registerForm) {
  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const firstName = registerForm.querySelector('input[name="first_name"]').value;
    const lastName  = registerForm.querySelector('input[name="last_name"]').value;
    const email     = registerForm.querySelector('input[type="email"]').value;
    const password  = registerForm.querySelector('input[type="password"]').value;

    const { data, error } = await supabaseClient.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo:
          'https://spikemurphy.github.io/BiochemProtocols/user/registration/callback',
        data: {
          first_name: firstName,
          last_name: lastName,
          accepted_terms: true,
          accepted_terms_at: new Date().toISOString()
        }
      }
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert('Confirm your mail address, please.');
  });
}

// registration callback callback //
(async () => {
  const hash = window.location.hash;

  if (!hash || !hash.includes('access_token')) return;

  const { data, error } = await supabaseClient.auth.getSession();

  if (error) {
    console.error('Session error:', error);
    return;
  }

  if (data?.session) {
    console.log('Signup / Magiclink callback detected');

    // Tokens aus der URL entfernen (DSGVO!)
    window.history.replaceState(
      {},
      document.title,
      '/BiochemProtocols/'
    );

    // Weiterleitung
    window.location.href =
      '/BiochemProtocols/user/registration/callback/';
  }
})();
