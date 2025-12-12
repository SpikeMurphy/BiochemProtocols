document.addEventListener("DOMContentLoaded", function () {
    const reactionVol = document.getElementById("pcr-reaction-volume");
    const bufferFactor = document.getElementById("buffer-factor");
    const calcBtn = document.getElementById("calc-dna-buffer");
    const outputDiv = document.getElementById("dna-buffer-output");

    calcBtn.addEventListener("click", function () {
        const rxVol = parseFloat(reactionVol.value); // 25 or 50
        const factor = parseFloat(bufferFactor.value); // 5 or 6

        // Volume of loading buffer per sample
        const bufferVol = rxVol / (factor-1);

        let result = "";
        result += `= <b>${bufferVol.toFixed(2)} µL</b><br>`;

        outputDiv.innerHTML = result;
    });
});
