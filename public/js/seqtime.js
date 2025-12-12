// --- Sequence time calculator ---
// 30 seconds per 1000 characters

document.addEventListener("DOMContentLoaded", () => {

  const seqInput = document.getElementById("seq-input");
  const out      = document.getElementById("seqtime-out");
  const calcBtn  = document.getElementById("seqtime-calc");

  calcBtn.addEventListener("click", () => {

    const seq = (seqInput.value || "").trim();

    if (!seq) {
      out.innerHTML = "❌ Please enter a sequence.";
      return;
    }

    const length = seq.length;
    const seconds = (length / 1000) * 30;

    out.innerHTML =
      `<b>Sequence length:</b> ${length} characters<br>
       <b>Time:</b> ${seconds.toFixed(2)} seconds`;
  });

});
