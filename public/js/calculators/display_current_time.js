document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".current-time-widget").forEach((wrapper, index) => {

    const btn = wrapper.querySelector(".showTimeBtn");
    const out = wrapper.querySelector(".currentTime");

    const storageKey = `currentTimeData-${index}`;

    function saveCurrentTimeDisplay(value) {
      localStorage.setItem(storageKey, JSON.stringify({
        value,
        timestamp: Date.now()
      }));
    }

    function loadCurrentTimeDisplay() {
      const raw = localStorage.getItem(storageKey);
      if (!raw) return;

      const data = JSON.parse(raw);

      // expire after 24h
      if (Date.now() - data.timestamp > 86400000) {
        localStorage.removeItem(storageKey);
        return;
      }

      out.textContent = data.value || "";
    }

    // Load saved value
    loadCurrentTimeDisplay();

    btn.addEventListener("click", () => {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, '0');
      const mm = String(now.getMinutes()).padStart(2, '0');

      const value = `${hh}:${mm}`;
      out.textContent = value;
      saveCurrentTimeDisplay(value);
    });

  });

});
