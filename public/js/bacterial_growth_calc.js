/* === Fill Start Time (Row 0) === */
function fillStartTime() {
    const now = new Date();
    document.getElementById("gc-h0").value = String(now.getHours()).padStart(2,"0");
    document.getElementById("gc-m0").value = String(now.getMinutes()).padStart(2,"0");
    saveGrowthData();
}

/* === Convert HH/MM fields to minutes === */
function getTimeMinutes(row) {
    const h = parseInt(document.getElementById(`gc-h${row}`).value);
    const m = parseInt(document.getElementById(`gc-m${row}`).value);
    if (isNaN(h) || isNaN(m)) return null;
    return h * 60 + m;
}

/* === Convert minutes → HH:MM === */
function minutesToHHMM(mins) {
    if (mins == null || isNaN(mins)) return "–";
    mins = ((mins % 1440) + 1440) % 1440;
    const hh = String(Math.floor(mins / 60)).padStart(2, "0");
    const mm = String(mins % 60).padStart(2, "0");
    return `${hh}:${mm}`;
}

/* === Doubling time calculation === */
function calcDoubling(t1, o1, t2, o2) {
    if (t1 == null || t2 == null || !o1 || !o2) return null;
    if (o1 <= 0 || o2 <= 0 || o2 <= o1) return null;
    const dt = t2 - t1;
    const mu = Math.log(o2 / o1);
    return dt * Math.log(2) / mu;
}

/* === MAIN CALCULATOR === */
function calcGrowth() {

    // Row 1 DT (manual)
    let dtRow0 = parseFloat(document.getElementById("gc-dt0").value);

    // Row 2 DT = exactly Row 1 DT (always)
    document.getElementById("gc-dt1").textContent = dtRow0;


    let latestDoubling = dtRow0;

    // === Doubling times rows 3–12 ===
    for (let i = 2; i < 12; i++) {

        const tPrev = getTimeMinutes(i - 1);
        const oPrev = parseFloat(document.getElementById(`gc-od${i-1}`).value);

        const tSecond = getTimeMinutes(1);
        const oSecond = parseFloat(document.getElementById(`gc-od1`).value);

        const tCur = getTimeMinutes(i);
        const oCur = parseFloat(document.getElementById(`gc-od${i}`).value);

        const out = document.getElementById(`gc-dt${i}`);

        if (tCur == null || isNaN(oCur)) {
            out.textContent = "";
            continue;
        }

        const dtOverall = calcDoubling(tSecond, oSecond, tCur, oCur);
        const dtLocal   = calcDoubling(tPrev, oPrev, tCur, oCur);

        const dtUse = dtLocal || dtOverall;

        if (dtUse) {
            out.textContent = dtUse.toFixed(1);
            latestDoubling = dtUse;
        } else {
            out.textContent = "";
        }
    }

    // ===== Corrected Projected Times =====

// Find latest valid OD measurement (row 1–11)
let lastOD = null;
let lastTime = null;

for (let i = 1; i < 12; i++) {
    const od = parseFloat(document.getElementById(`gc-od${i}`).value);
    const t = getTimeMinutes(i);
    if (!isNaN(od) && od > 0 && t != null) {
        lastOD = od;
        lastTime = t;
    }
}

// If nothing valid → no projections
if (lastOD == null || lastTime == null || !latestDoubling) {
    document.getElementById("proj04").textContent = "–";
    document.getElementById("proj06").textContent = "–";
    document.getElementById("proj08").textContent = "–";
    document.getElementById("projCustom").textContent = "–";
    return;
}

function projected(odTarget) {
    if (!odTarget || odTarget <= lastOD) return "–";

    const factor = Math.log(odTarget / lastOD) / Math.log(2);
    const projectedMin = lastTime + factor * latestDoubling;

    return minutesToHHMM(Math.round(projectedMin));
}

document.getElementById("proj04").textContent = projected(0.4);
document.getElementById("proj06").textContent = projected(0.6);
document.getElementById("proj08").textContent = projected(0.8);

const custom = parseFloat(document.getElementById("projCustomOD").value);
document.getElementById("projCustom").textContent = projected(custom);

}

/* === Keep Row 2 DT always synced with Row 1 === */
document.addEventListener("DOMContentLoaded", () => {
    const dt0 = document.getElementById("gc-dt0");
    const dt1 = document.getElementById("gc-dt1");

    // Fill row 2 DT at page load
    dt1.textContent = dt0.value;

    // Update whenever row 1 DT changes
    dt0.addEventListener("input", () => {
        dt1.textContent = dt0.value;
    });
});


function downloadExcel() {

    const rows = [];

    rows.push(["Row", "Time [hh:mm]", "OD600", "Doubling Time [min]"]);

    for (let i = 0; i < 12; i++) {
        const h = document.getElementById(`gc-h${i}`).value || "";
        const m = document.getElementById(`gc-m${i}`).value || "";
        const time = h && m ? `${h}:${m}` : "";

        const od = document.getElementById(`gc-od${i}`)?.value || "";
        let dt = document.getElementById(`gc-dt${i}`)?.textContent ||
                   document.getElementById(`gc-dt${i}`)?.value || "";
        if (i === 0 || i === 1) {
            dt += " (assumed value)";
        }
        rows.push([i, time, od, dt]);
    }

    rows.push([]);
    rows.push(["Projections"]);
    rows.push([]);
    rows.push(["Target OD600", "Projected Time"]);
    rows.push(["0.400", document.getElementById("proj04").textContent]);
    rows.push(["0.600", document.getElementById("proj06").textContent]);
    rows.push(["0.800", document.getElementById("proj08").textContent]);
    rows.push(["Custom", document.getElementById("projCustom").textContent]);

    const sheet = XLSX.utils.aoa_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, sheet, "GrowthData");

    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const filename = `${yyyy}.${mm}.${dd}_plasmid_prep_culture_growth.xlsx`;
    XLSX.writeFile(wb, filename);
}



/* === Save all calculator data === */
function saveGrowthData() {
    const data = {};

    for (let i = 0; i < 12; i++) {
        data[`h${i}`] = document.getElementById(`gc-h${i}`).value;
        data[`m${i}`] = document.getElementById(`gc-m${i}`).value;
        data[`od${i}`] = document.getElementById(`gc-od${i}`).value;

        // NEW — save doubling times for ALL rows
        const dtEl = document.getElementById(`gc-dt${i}`);
        if (dtEl.tagName === "INPUT") {
            data[`dt${i}`] = dtEl.value;
        } else {
            data[`dt${i}`] = dtEl.textContent;
        }
    }

    data["projCustomOD"] = document.getElementById("projCustomOD").value;
    data["timestamp"] = Date.now();

    localStorage.setItem("growthCalcData", JSON.stringify(data));
}
/* === Load saved data === */
function loadGrowthData() {
    const raw = localStorage.getItem("growthCalcData");
    if (!raw) return;

    const data = JSON.parse(raw);

    if (Date.now() - data.timestamp > 86400000) {
        localStorage.removeItem("growthCalcData");
        return;
    }

    for (let i = 0; i < 12; i++) {
        document.getElementById(`gc-h${i}`).value = data[`h${i}`] || "";
        document.getElementById(`gc-m${i}`).value = data[`m${i}`] || "";
        document.getElementById(`gc-od${i}`).value = data[`od${i}`] || "";

        // NEW — restore DT
        const dtEl = document.getElementById(`gc-dt${i}`);
        if (dtEl.tagName === "INPUT") {
            dtEl.value = data[`dt${i}`] || "";
        } else {
            dtEl.textContent = data[`dt${i}`] || "";
        }
    }

    document.getElementById("projCustomOD").value = data["projCustomOD"] || "";
}


/* === Initialize auto-save + auto-load === */
document.addEventListener("DOMContentLoaded", () => {
    loadGrowthData();    // load previous data
    document.addEventListener("input", saveGrowthData);  // auto-save on typing
});
