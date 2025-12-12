document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("showTimeBtn");
    const out = document.getElementById("currentTime");

    if (btn) {
        btn.addEventListener("click", () => {
            const now = new Date();
            const hh = String(now.getHours()).padStart(2, '0');
            const mm = String(now.getMinutes()).padStart(2, '0');
            out.textContent = `${hh}:${mm}`;
        });
    }
});
