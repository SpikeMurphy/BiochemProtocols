// JS_STREAMLINE
// JS_COMMENTS
// FIX: objects (exclude timer, label, print page, etc.), also refer to CSS file

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("save-pdf");
  if (!btn) return;

  btn.addEventListener("click", () => {
    document.body.classList.add("print-page");
    window.print();
    document.body.classList.remove("print-page");
  });
});
