const audioCache = {};

document.addEventListener("DOMContentLoaded", () => {
    const timers = document.querySelectorAll(".countdown-wrapper");

    // ===== WAKELOCK =====
    let wakeLock = null;

    async function requestWakeLock() {
        if (!("wakeLock" in navigator)) {
            console.log("WakeLock not supported");
            return;
        }

        try {
            wakeLock = await navigator.wakeLock.request("screen");
            wakeLock.addEventListener("release", () => {
                console.log("WakeLock released");
            });
            console.log("WakeLock active");
        } catch (err) {
            console.warn("WakeLock error:", err);
        }
    }

    // Nach Sleep/Tab-Wechsel WakeLock neu anfordern
    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") {
            requestWakeLock();
        }
    });

    // ===== TIMER PRO INSTANZ =====
    timers.forEach(timer => {

        // DOM Elemente
        const display = timer.querySelector(".countdown-display");
        const bell = timer.querySelector(".countdown-bell");
        const startBtn = timer.querySelector(".countdown-start");
        const resetBtn = timer.querySelector(".countdown-reset");

        // Parameter
        const timeStr = timer.getAttribute("data-time");

        function parseTime(str) {
            const parts = str.split(":").map(Number);
            return parts[0] * 3600 + parts[1] * 60 + parts[2];
        }

        const startSeconds = parseTime(timeStr);

        // Timer Variablen
        let remaining = startSeconds;
        let elapsed = 0;
        let mode = "down";

        let interval = null;

        // *** Absolute Echtzeit ***
        let absoluteStart = null;
        let previousElapsed = 0; // für Pause/Resume wichtig

        // ===== SOUND =====
        const audioPath = timer.getAttribute("data-sound");

        if (!audioCache[audioPath]) {
            audioCache[audioPath] = new Audio(audioPath);
        }

        const audio = audioCache[audioPath];
        audio.volume = 0.5;
        audio.loop = true;
        let soundAllowed = true;
        let alarmActive = false;

        // Glocke Ein/Aus
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

        // Alarm 15 Sekunden
        function startSoundFor15s() {
            if (!soundAllowed || alarmActive) return;

            alarmActive = true;

            audio.currentTime = 0;
            audio.play().catch(err => {
                console.warn("Audio play blocked:", err);
            });

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
                    audio.play().catch(() => {});
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

        // ===== TIMER-LOGIK MIT REALZEIT =====
        function startCountdown() {
            if (interval) return;

            // WakeLock anfordern
            requestWakeLock();

            // ERSTER START
            if (absoluteStart === null) {
                absoluteStart = Date.now();
            } else {
                // FORTSETZEN NACH PAUSE / SCHLAF
                absoluteStart = Date.now() - previousElapsed * 1000;
            }

            interval = setInterval(() => {
                const delta = Math.floor((Date.now() - absoluteStart) / 1000);

                previousElapsed = delta;

                if (mode === "down") {
                    remaining = startSeconds - delta;

                    if (remaining > 0) {
                        updateDisplay();
                    } else {
                        // Countdown fertig → Countup beginnt
                        mode = "up";
                        display.classList.add("blink");
                        startSoundFor15s();

                        elapsed = -remaining;
                        updateDisplay();
                    }

                } else {
                    // Countup
                    elapsed = delta - startSeconds;
                    updateDisplay();
                }
            }, 200);
        }

        // RESET
        function resetTimer() {
            clearInterval(interval);
            interval = null;

            remaining = startSeconds;
            elapsed = 0;
            previousElapsed = 0;
            absoluteStart = null;
            mode = "down";

            display.classList.remove("blink");

            alarmActive = false;
            audio.pause();
            audio.currentTime = 0;

            updateDisplay();
        }

        // Events
        startBtn.addEventListener("click", startCountdown);
        resetBtn.addEventListener("click", resetTimer);

        // Initialanzeige
        updateDisplay();
    });
});
