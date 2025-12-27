// JS_STREAMLINE
// JS_COMMENTS

document.addEventListener("DOMContentLoaded", () => {

  document
    .querySelectorAll(".calc-recipe-amount-controls")
    .forEach(container => {

      const amountSelect = container.querySelector(".calc-amount");
      if (!amountSelect) return;

      function recalc() {
        const gelFactor = parseFloat(amountSelect.value);

        document.querySelectorAll(".calc_recipe_amount").forEach(el => {

          // Skip hidden elements (tabs, collapsed sections, etc.)
          if (el.offsetParent === null) return;

          const base = parseFloat(el.dataset.defaultOne);
          if (isNaN(base)) return;

          const scaled = base * gelFactor;

          el.textContent = formatVolume(scaled);
        });
      }

      amountSelect.addEventListener("change", recalc);
      recalc();
    });

});


/* ========================================================= */
/* =================== FORMAT HELPERS ====================== */
/* ========================================================= */

function formatNumber(v, decimals = 2) {
  const factor = 10 ** decimals;
  const r = Math.round((v + Number.EPSILON) * factor) / factor;
  return r.toString(); // no trailing zeros
}

/* ---------- VOLUME (mL → L → µL) ---------- */
function formatVolume(mL) {
  if (mL >= 1000) {
    return `${formatNumber(mL / 1000, 3)} L`;
  }
  if (mL >= 1) {
    return `${formatNumber(mL, 3)} mL`;
  }
  return `${formatNumber(mL * 1000, 0)} µL`;
}
