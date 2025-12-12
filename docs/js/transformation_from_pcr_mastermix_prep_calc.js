document.addEventListener("DOMContentLoaded", () => {

  const sampleInput  = document.getElementById("ligation-sample-count");
  const enzymeInput  = document.getElementById("ligation-enzyme-amount");

  const cells        = document.querySelectorAll("span.t_from_pcr_mm");

  const h2oCell      = document.getElementById("h2o2-vol");
  const enzymeCell   = document.getElementById("enzyme-vol");
  const totalCell    = document.getElementById("sum-vol");

  function round1(v) {
    return Number(Number(v).toFixed(1));
  }

  function updateMix() {

    const samples      = parseInt(sampleInput.value) || 0;
    const enzymeAmount = parseFloat(enzymeInput.value) || 1;

    const factor = samples + 1;

    const baseTotal = parseFloat(totalCell.dataset.base);
    const total = baseTotal * factor;

    let sumOthers = 0;
    let enzymeScaled = 0;

    cells.forEach(cell => {

      const base = parseFloat(cell.dataset.base);

      if (cell === h2oCell) return;  // skip H₂O (calculated last)

      let newVol;

      if (cell === enzymeCell) {
        enzymeScaled = base * factor * enzymeAmount;
        newVol = enzymeScaled;

      } else if (cell === totalCell) {
        newVol = total;

      } else {
        newVol = base * factor;
        sumOthers += newVol;       // only non-enzyme, non-H₂O reagents
      }

      cell.textContent = round1(newVol);
    });

    // Add enzyme to the sum
    sumOthers += enzymeScaled;

    // Correct H₂O calculation
    let h2oVol = total - sumOthers;

    if (h2oVol < 0) h2oVol = 0;

    h2oCell.textContent = round1(h2oVol);
  }

  sampleInput.addEventListener("input", updateMix);
  enzymeInput.addEventListener("change", updateMix);

  updateMix();
});
