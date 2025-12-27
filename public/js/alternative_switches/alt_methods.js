// JS_STREAMLINE
// JS_COMMENTS

document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll("[data-alt-switch]").forEach(button => {
    const group = button.dataset.altSwitch;
    let usingAlt = false;

    const primary = document.querySelectorAll(
      `[data-alt-group="${group}"][data-alt="primary"]`
    );
    const secondary = document.querySelectorAll(
      `[data-alt-group="${group}"][data-alt="secondary"]`
    );

    if (!primary.length || !secondary.length) return;

    function toggle() {
      primary.forEach(el => el.style.display = usingAlt ? "none" : "");
      secondary.forEach(el => el.style.display = usingAlt ? "" : "none");
    }

    toggle();

    button.addEventListener("click", () => {
      usingAlt = !usingAlt;
      toggle();

      button.textContent = usingAlt
        ? button.dataset.altLabelPrimary
        : button.dataset.altLabelSecondary;
    });
  });

});
