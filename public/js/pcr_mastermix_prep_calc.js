document.addEventListener("DOMContentLoaded", function () {

    const input = document.getElementById("sample-count");

    function updateVolumes() {

        const samples = parseInt(input.value) || 0;
        const factor = samples + 1;   // include +1 extra reaction

        const cells = document.querySelectorAll("span.pcr");

        if (!cells.length) {
            console.warn("❌ No .pcr cells found.");
            return;
        }

        cells.forEach((cell) => {
            const base = parseFloat(cell.dataset.base);
            const newVol = Math.round(base * factor * 10) / 10; // preserve decimals
            cell.textContent = newVol;
        });
    }

    // run once initially
    updateVolumes();

    // update on sample input
    input.addEventListener("input", updateVolumes);
});
