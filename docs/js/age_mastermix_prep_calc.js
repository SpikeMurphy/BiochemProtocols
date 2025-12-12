document.addEventListener("DOMContentLoaded", () => {

  const wellSelect = document.getElementById("well-volume-2");
  const sampleInput = document.getElementById("sample-count");

  const bufferSelect = document.querySelector(".buffer-select");

  const bufferVolCell = document.getElementById("buffer-vol");
  const h2oVolCell = document.getElementById("h2o-vol");
  const totalCell   = document.querySelector("span.age_mm[data-base='4']");

  function round2(v) {
    return Number(Number(v).toFixed(2));
  }

  function getBufferFactor() {
    if (!bufferSelect) return 1;
    const v = bufferSelect.value.replace(/[^0-9]/g, "");  // "6x" → "6"
    if (v === "5") return 1;
    if (v === "6") return 0.8333333333;
    if (v === "10") return 0.5;
    return 1;
  }

  function updateVolumes() {
    const wellVolume = parseFloat(wellSelect?.value) || 5;
    const samples    = parseInt(sampleInput?.value) || 0;
    const factor     = (samples + 1) * (wellVolume / 5);

    const bufferFactor = getBufferFactor();

    // --- BASE VALUES ---
    const baseBuffer = 1;
    const baseH2O    = 3;
    const baseTotal  = 4;

    // --- CALCULATE TOTAL ---
    const total = baseTotal * factor;

    // --- BUFFER ---
    const bufferVol = baseBuffer * factor * bufferFactor;

    // --- H2O = total - buffer ---
    let h2oVol = total - bufferVol;
    if (h2oVol < 0) h2oVol = 0;

    // --- WRITE VALUES ---
    bufferVolCell.textContent = round2(bufferVol);
    h2oVolCell.textContent    = round2(h2oVol);
    totalCell.textContent     = round2(total);
  }

  wellSelect?.addEventListener("change", updateVolumes);
  sampleInput?.addEventListener("input", updateVolumes);
  bufferSelect?.addEventListener("change", updateVolumes);

  updateVolumes();
});
