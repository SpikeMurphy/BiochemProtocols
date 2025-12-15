(function requireAccess() {
  const path = new URL(window.location.href).pathname;

  // === Homepage freigeben ===
  if (path === "/BiochemProtocols/" || path === "/BiochemProtocols/index.html" || path.startsWith("/BiochemProtocols/?")) {
    return;
  }

  // === Login-Seite freigeben ===
  if (path.startsWith("/BiochemProtocols/access")) return;

  // === Statische Assets freigeben ===
  const publicPrefixes = [
    "/BiochemProtocols/css/", 
    "/BiochemProtocols/js/", 
    "/BiochemProtocols/images/", 
    "/BiochemProtocols/img/", 
    "/BiochemProtocols/fonts/", 
    "/BiochemProtocols/static/"
  ];
  for (const prefix of publicPrefixes) {
    if (path.startsWith(prefix)) return;
  }

  const allowFiles = [
    "/BiochemProtocols/favicon.ico",
    "/BiochemProtocols/robots.txt",
    "/BiochemProtocols/sitemap.xml"
  ];
  if (allowFiles.includes(path)) return;

  // === Cookie prüfen ===
  const cookie = document.cookie.split("; ").find(c => c.trim().startsWith("access_ok="));
  if (cookie) return;

  // === Merken, wohin der User wollte ===
  try {
    localStorage.setItem("requested_path", path + (location.search || "") + (location.hash || ""));
  } catch (_) {}

  // === Redirect auf Login ===
  window.location.href = "/BiochemProtocols/access/";
})();
