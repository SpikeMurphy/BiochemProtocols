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



/* === Save current time display separately === */
function saveCurrentTimeDisplay() {
    const value = document.getElementById("currentTime").textContent;
    const payload = {
        value,
        timestamp: Date.now()
    };
    localStorage.setItem("currentTimeData", JSON.stringify(payload));
}

/* === Load saved current time (expires after 1 day) === */
function loadCurrentTimeDisplay() {
    const raw = localStorage.getItem("currentTimeData");
    if (!raw) return;

    const data = JSON.parse(raw);

    // expire after 24 hours
    if (Date.now() - data.timestamp > 86400000) {
        localStorage.removeItem("currentTimeData");
        return;
    }

    document.getElementById("currentTime").textContent = data.value || "";
}

/* === Init === */
document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("showTimeBtn");
    const out = document.getElementById("currentTime");

    // Load previous saved time
    loadCurrentTimeDisplay();

    if (btn) {
        btn.addEventListener("click", () => {
            const now = new Date();
            const hh = String(now.getHours()).padStart(2, '0');
            const mm = String(now.getMinutes()).padStart(2, '0');
            out.textContent = `${hh}:${mm}`;

            // Save immediately after click
            saveCurrentTimeDisplay();
        });
    }
});
