document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("calc-sample-well");
  const select = document.getElementById("well-volume-2");
  const sampleInput = document.getElementById("sample-count");
  const output = document.getElementById("sample-well-output");

  if (!btn || !select || !sampleInput) return;

  btn.addEventListener("click", () => {

    const selectedVolume = parseFloat(select.value) || 0;
    const samples = parseInt(sampleInput.value, 10) || 0;

    const table2Spans = Array.from(document.querySelectorAll("span.age_well"));
    const table1Spans = Array.from(document.querySelectorAll("span.age_mm"));

    if (table2Spans.length === 0) {
      output.innerHTML = "<b>❌ No age_well spans found.</b>";
      return;
    }
    if (table1Spans.length === 0) {
      output.innerHTML = "<b>❌ No age_mm spans found.</b>";
      return;
    }

    // last span is the total
    const baseTotalTable2 = parseFloat(
      table2Spans[table2Spans.length - 1].dataset.base
    );

    if (!isFinite(baseTotalTable2) || baseTotalTable2 <= 0) {
      output.innerHTML = "<b>❌ Invalid base total in table 2.</b>";
      return;
    }

    // ----- FACTORS -----
    // Volume factor (integer version)
    const volumeFactorRaw = selectedVolume / baseTotalTable2;
    const volumeFactor = Math.floor(volumeFactorRaw);

    // Sample factor (samples + 1)
    const sampleFactor = samples + 1;

    // Final mastermix factor = MULTIPLICATION
    const overallFactor = volumeFactor * sampleFactor;

    // ---------- Clean mastermix output (Table 1 ONLY) ----------
    let clean = "";

    table1Spans.forEach((span, idx) => {
      const base = parseFloat(span.dataset.base) || 0;

      const row = span.closest("tr");
      const reagentCell = row ? row.children[2] : null;
      const reagent = reagentCell ? reagentCell.textContent.trim() : "Reagent";

      const isLast = (idx === table1Spans.length - 1);

      const newVol = Math.round(base * overallFactor);

      if (isLast) {
        clean += `= <b>${newVol} µL</b><br>`;
      } else {
        clean += `${newVol} µL <b>${reagent}</b><br>`;
      }
    });

    output.innerHTML = clean;
  });
});