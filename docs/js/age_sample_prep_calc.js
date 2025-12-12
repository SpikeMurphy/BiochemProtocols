document.addEventListener("DOMContentLoaded", function () {

    const select = document.getElementById("well-volume");

    function updateVolumes() {

        const selectedVolume = parseFloat(select.value); // 5–50 µL
        const cells = document.querySelectorAll("span.age_sample");

        if (!cells.length) {
            console.warn("❌ No .age_sample cells found.");
            return;
        }

        // Base total well volume = last row's data-base
        const baseTotal = parseFloat(cells[cells.length - 1].dataset.base);
        const factor = selectedVolume / baseTotal;

        cells.forEach((cell) => {
            const base = parseFloat(cell.dataset.base);
            const newVol = Math.round(base * factor);

            // Update displayed value
            cell.textContent = newVol;
        });
    }

    // Update once immediately (initial load)
    updateVolumes();

    // Update on change
    select.addEventListener("change", updateVolumes);

});
