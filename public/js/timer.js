const audioCache = {};

document.addEventListener("DOMContentLoaded", () => {
    const timers = document.querySelectorAll(".countdown-wrapper");

    timers.forEach(timer => {
        const display = timer.querySelector(".countdown-display");
        const bell = timer.querySelector(".countdown-bell");
        const startBtn = timer.querySelector(".countdown-start");
        const resetBtn = timer.querySelector(".countdown-reset");

        const timeStr = timer.getAttribute("data-time");

        function parseTime(str) {
            const parts = str.split(":").map(Number);
            return parts[0] * 3600 + parts[1] * 60 + parts[2];
        }

        const startSeconds = parseTime(timeStr);

        let remaining = startSeconds;
        let elapsed = 0;
        let mode = "down";
        let interval = null;

        // ===== SOUND =====
        const audioPath = timer.getAttribute("data-sound");

        // nur ONE Audio per Dateipfad erzeugen
        if (!audioCache[audioPath]) {
            audioCache[audioPath] = new Audio(audioPath);
        }

        const audio = audioCache[audioPath];

        audio.volume = 0.5;
        audio.loop = true;   // niemals loop!
        let soundAllowed = true;

        let alarmActive = false;

        bell.addEventListener("click", () => {
            soundAllowed = !soundAllowed;
            if (soundAllowed) {
                bell.textContent = "🔔";
                bell.classList.remove("muted");
            } else {
                bell.textContent = "🔕";
                bell.classList.add("muted");
            }
        });

        function startSoundFor15s() {
            if (!soundAllowed || alarmActive) return;

            alarmActive = true;

            audio.currentTime = 0;
            audio.play();

            const stopAt = Date.now() + 15000;

            function tick() {
                if (Date.now() >= stopAt) {
                    audio.pause();
                    audio.currentTime = 0;
                    alarmActive = false;
                    return;
                }

                if (audio.ended) {
                    audio.currentTime = 0;
                    audio.play();
                }

                requestAnimationFrame(tick);
            }

            tick();
        }

        // ===== Display =====
        function format(sec) {
            const h = String(Math.floor(sec / 3600));
            const m = String(Math.floor((sec % 3600) / 60)).padStart(2, "0");
            const s = String(sec % 60).padStart(2, "0");
            return `${h}:${m}:${s}`;
        }

        function updateDisplay() {
            display.textContent = (mode === "down")
                ? format(remaining)
                : format(elapsed);
        }

        // ===== Timer =====
        function startCountdown() {
            if (interval) return;

            interval = setInterval(() => {
                if (mode === "down") {
                    if (remaining > 0) {
                        remaining--;
                        updateDisplay();
                    } else {
                        mode = "up";
                        display.classList.add("blink");
                        startSoundFor15s();
                    }
                } else {
                    elapsed++;
                    updateDisplay();
                }
            }, 1000);
        }

        function resetTimer() {
            clearInterval(interval);
            interval = null;

            remaining = startSeconds;
            elapsed = 0;
            mode = "down";

            display.classList.remove("blink");

            alarmActive = false;
            audio.pause();
            audio.currentTime = 0;

            updateDisplay();
        }

        startBtn.addEventListener("click", startCountdown);
        resetBtn.addEventListener("click", resetTimer);

        updateDisplay();
    });
});
