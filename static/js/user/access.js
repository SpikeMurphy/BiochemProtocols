document.addEventListener("DOMContentLoaded", () => {
  const COOKIE_NAME = "access_ok";
  const COOKIE_DAYS = 7;

  function getCookie(name) {
    return document.cookie
      .split("; ")
      .find(row => row.startsWith(name + "="))
      ?.split("=")[1];
  }

  function setCookie(name, value, days) {
    const expires = new Date();
    expires.setDate(expires.getDate() + days);
    document.cookie =
      `${name}=${encodeURIComponent(value)}; path=/; expires=${expires.toUTCString()}; SameSite=Lax`;
  }

  if (getCookie(COOKIE_NAME) === "true") return;

  /* ================= overlay ================= */
  const overlay = document.createElement("div");
  Object.assign(overlay.style, {
    position: "fixed",
    inset: "0",
    background: "rgba(0,0,0,0.4)",
    backdropFilter: "blur(2px)",
    zIndex: "9998"
  });

  /* ================= popup ================= */
  const popup = document.createElement("div");
  Object.assign(popup.style, {
    position: "fixed",
    inset: "0",
    margin: "auto",
    width: "400px",
    height: "340px",
    background: "linear-gradient(90deg, #1f2937aa, #111827aa)",
    backdropFilter: "blur(5px)",
    boxShadow: "0 2px 6px rgb(116,136,162)",
    borderRadius: "10px",
    padding: "40px",
    zIndex: "9999",
    fontFamily: "system-ui, sans-serif",
    color: "#d2e9ff",
    transform: "scale(0)",
    animation: "accessPop 0.25s ease forwards"
  });

  popup.innerHTML = `
    <h1 class="access_title">BiochemProtocol Web</h1>
    <h2 class="access_title">Restricted Access</h2>

    <div class="access_input_box">
      <span class="access_icon">🔑</span>
      <input id="codeInput" type="text" required>
      <label>Access Code</label>
    </div>

    <button id="checkBtn" class="access_btn">
      Unlock
    </button>

    <p id="message" class="access_message"></p>
  `;

  document.body.appendChild(overlay);
  document.body.appendChild(popup);
  document.body.style.overflow = "hidden";

  /* ================= validation ================= */
  const validCodes = Array.isArray(window.ACCESS_CODES)
    ? window.ACCESS_CODES.map(c => String(c).trim())
    : [];

  function tryCode() {
    const input = document.getElementById("codeInput");
    const msg = document.getElementById("message");
    const code = input.value.trim();

    msg.textContent = "";
    msg.style.color = "#ff6b6b";

    if (!code) {
      msg.textContent = "❌ Please enter an access code.";
      return;
    }

    if (validCodes.includes(code)) {
      setCookie(COOKIE_NAME, "true", COOKIE_DAYS);
      msg.style.color = "#4ade80";
      msg.textContent = "✅ Access granted";

      setTimeout(() => {
        overlay.remove();
        popup.remove();
        document.body.style.overflow = "";
      }, 1000);
    } else {
      msg.textContent = "❌ Invalid access code.";
      input.value = "";
      input.focus();
    }
  }

  popup.querySelector("#checkBtn").addEventListener("click", tryCode);
  popup.querySelector("#codeInput").addEventListener("keydown", e => {
    if (e.key === "Enter") tryCode();
  });

  /* ================= styling (LOGIN MATCH) ================= */
  const style = document.createElement("style");
  style.textContent = `
    @keyframes accessPop {
      to { transform: scale(1); }
    }

    .access_title {
      color: #d2e9ff;
      text-align: center;
      margin-bottom: 30px;
    }

    .access_title h1 {
      font-size: 2em;
      color: #d2e9ff;
    }

    .access_title h2 {
      font-size: 1.5em;
      color: #d2e9ff;
    }

    .access_input_box {
      position: relative;
      width: 100%;
      margin-bottom: 22px;
    }

    .access_input_box input {
      width: 100%;
      padding: 12px 14px 12px 40px;
      background: transparent;
      border: 1px solid #d2e9ff;
      border-radius: 10px;
      color: #d2e9ff;
      font-size: 0.95rem;
      outline: none;
    }

    .access_input_box input:focus {
      border-color: #3b82f6;
    }

    .access_input_box label {
      position: absolute;
      top: 50%;
      left: 40px;
      transform: translateY(-50%);
      color: #9fb4d9;
      font-size: 0.85rem;
      pointer-events: none;
      transition: 0.2s ease;
    }

    .access_input_box input:focus + label,
    .access_input_box input:valid + label {
      top: -8px;
      left: 14px;
      font-size: 0.75rem;
      padding: 0 6px;
      color: #3b82f6;
    }

    .access_icon {
      position: absolute;
      top: 50%;
      left: 12px;
      transform: translateY(-50%);
      color: #d2e9ff;
      font-size: 1.1rem;
    }

    .access_btn {
      background: transparent;
      border: 1px solid #d2e9ff;
      border-radius: 10px;
      color: #d2e9ff;
      cursor: pointer;
      width: 100%;
      padding: 12px;
      font-size: 1em;
      font-weight: 600;
      transition: transform 0.3s ease-in-out,
                  box-shadow 0.15s ease-in-out;
    }

    .access_btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 2px 6px rgba(59,130,246,0.5);
    }

    .access_btn:active {
      transform: translateY(0);
      box-shadow: 0 2px 6px rgba(59,130,246,0.4);
    }

    .access_message {
      margin-top: 16px;
      text-align: center;
      font-size: 0.85rem;
      min-height: 1em;
    }
  `;
  document.head.appendChild(style);
});
