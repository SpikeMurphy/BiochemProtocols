document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".calc-recipe-vol-controls").forEach(container => {

    const volumeSelect = container.querySelector(".calc-volume");
    if (!volumeSelect) return;

    function recalc() {
      const volumeFactor = parseFloat(volumeSelect.value);

      document.querySelectorAll(".calc_recipe_vol").forEach(el => {

        // Skip hidden elements (tabs etc.)
        if (el.offsetParent === null) return;

        /* ---------- MASS (input: g) ---------- */
        if (el.dataset.defaultMass) {
          const values = el.dataset.defaultMass.includes(",")
            ? el.dataset.defaultMass.split(",").map(Number)
            : [Number(el.dataset.defaultMass)];

          el.innerHTML = values
            .map(v => formatMass(v * volumeFactor))
            .join("<br>");
        }

        /* ---------- MOLARITY (input: mM, unchanged) ---------- */
        if (el.dataset.defaultMol) {
          const base = parseFloat(el.dataset.defaultMol);
          el.textContent = formatMolarity(base);
        }

        /* ---------- VOLUME (input: mL) ---------- */
        if (el.dataset.defaultVol) {
          const base = parseFloat(el.dataset.defaultVol);
          el.textContent = formatVolume(base * volumeFactor);
        }

      });
    }

    volumeSelect.addEventListener("change", recalc);
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

/* ---------- MASS (g → mg → µg) ---------- */
function formatMass(g) {
  if (g >= 1) {
    return `${formatNumber(g, 2)} g`;
  }
  if (g >= 0.001) {
    return `${formatNumber(g * 1000, 2)} mg`;
  }
  return `${formatNumber(g * 1e6, 1)} µg`;
}

/* ---------- MOLARITY (mM → M → µM) ---------- */
function formatMolarity(mM) {
  if (mM >= 1000) {
    return `${formatNumber(mM / 1000, 2)} M`;
  }
  if (mM >= 1) {
    return `${formatNumber(mM, 2)} mM`;
  }
  return `${formatNumber(mM * 1000, 1)} µM`;
}

/* ---------- VOLUME (mL → L → µL) ---------- */
function formatVolume(mL) {
  if (mL >= 1000) {
    return `${formatNumber(mL / 1000, 2)} L`;
  }
  if (mL >= 1) {
    return `${formatNumber(mL, 2)} mL`;
  }
  return `${formatNumber(mL * 1000, 0)} µL`;
}
