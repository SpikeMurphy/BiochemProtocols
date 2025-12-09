document.addEventListener("DOMContentLoaded", function () {

    const factorInput = document.getElementById("factor2");
    const output = document.getElementById("pcr-generated-output");

    document.getElementById("calc-pcr").addEventListener("click", () => {

        const factor = parseFloat(factorInput.value) || 1;

        const cells = document.querySelectorAll("span.pcr");

        if (!cells.length) {
            output.innerHTML = "<b>❌ No volumes found.</b>";
            return;
        }

        let result = "";

        cells.forEach((cell, index) => {
            const base = parseFloat(cell.dataset.base);
            const vol = (base * factor).toFixed(2);

            const row = cell.closest("tr");
            const reagentCell = row.children[2];

            const isLastRow = (index === cells.length - 1);

            if (isLastRow) {
                // last row → output "= X µL"
                result += `= <b>${vol} µL</b><br>`;
            } else {
                // normal rows → "Reagent: X µL"
                const reagent = reagentCell.innerHTML.trim();
                result += `${vol} µL <b>${reagent}</b> <br>`;
            }
        });

        output.innerHTML = result;
    });

});
