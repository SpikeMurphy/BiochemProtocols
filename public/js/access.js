(function requireAccess() {
  const path = new URL(window.location.href).pathname;

  // === Homepage freigeben ===
  if (path === "/Laboratory/" || path === "/Laboratory/index.html" || path.startsWith("/Laboratory/?")) {
    return;
  }

  // === Login-Seite freigeben ===
  if (path.startsWith("/Laboratory/access")) return;

  // === Statische Assets freigeben ===
  const publicPrefixes = [
    "/Laboratory/css/", 
    "/Laboratory/js/", 
    "/Laboratory/images/", 
    "/Laboratory/img/", 
    "/Laboratory/fonts/", 
    "/Laboratory/static/"
  ];
  for (const prefix of publicPrefixes) {
    if (path.startsWith(prefix)) return;
  }

  const allowFiles = [
    "/Laboratory/favicon.ico",
    "/Laboratory/robots.txt",
    "/Laboratory/sitemap.xml"
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
  window.location.href = "/Laboratory/access/";
})();
