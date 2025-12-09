document.addEventListener("DOMContentLoaded", function () {

    const select = document.getElementById("well-volume");
    const output = document.getElementById("well-generated-output");

    document.getElementById("calc-well").addEventListener("click", () => {

        const selectedVolume = parseFloat(select.value); // 5–50 µL
        const cells = document.querySelectorAll("span.age_well");

        if (!cells.length) {
            output.innerHTML = "<b>❌ No volumes found.</b>";
            return;
        }

        // Find base total well volume (last row's data-base)
        const baseTotal = parseFloat(cells[cells.length - 1].dataset.base);
        const factor = selectedVolume / baseTotal;

        let result = "";

        cells.forEach((cell, index) => {
            const base = parseFloat(cell.dataset.base);
            const vol = Math.round( base * factor );

            const row = cell.closest("tr");
            const reagentCell = row.children[2];

            const isLastRow = (index === cells.length - 1);

            if (isLastRow) {
                result += `= <b>${vol} µL</b><br>`;
            } else {
                const reagent = reagentCell.innerHTML.trim();
                result += `${vol} µL <b>${reagent}</b> <br>`;
            }
        });

        output.innerHTML = result;
    });

});
