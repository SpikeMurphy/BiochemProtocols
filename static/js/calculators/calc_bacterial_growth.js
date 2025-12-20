document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".growthcalc-wrapper").forEach(wrapper => {

    const cultures = ["A", "B", "C", "D", "E"];
    const qs = sel => wrapper.querySelector(sel);

    /* ================= Time helpers ================= */

    function getTimeMinutes(row) {
      const h = parseInt(qs(`#gc-h${row}`)?.value);
      const m = parseInt(qs(`#gc-m${row}`)?.value);
      if (isNaN(h) || isNaN(m)) return null;
      return h * 60 + m;
    }

    function minutesToHHMM(mins) {
      if (mins == null || isNaN(mins)) return "–";
      mins = Math.round(mins);
      mins = ((mins % 1440) + 1440) % 1440;
      const hh = String(Math.floor(mins / 60)).padStart(2, "0");
      const mm = String(mins % 60).padStart(2, "0");
      return `${hh}:${mm}`;
    }

    /* ================= Doubling time ================= */

    function calcDoubling(t1, o1, t2, o2) {
      if (t1 == null || t2 == null || o1 <= 0 || o2 <= 0 || o2 <= o1) return null;
      return (t2 - t1) * Math.log(2) / Math.log(o2 / o1);
    }

    /* ================= Calculate growth ================= */

    const calcBtn = qs(".gc-calc");
    if (calcBtn) {
      calcBtn.addEventListener("click", () => {

        cultures.forEach(culture => {

          let lastOD = null;
          let lastTime = null;
          let latestDT = null;

          for (let i = 0; i < 12; i++) {

            const od = parseFloat(qs(`#gc-od${i}-${culture}`)?.value);
            const time = getTimeMinutes(i);
            const out = qs(`#gc-dt${i}-${culture}`);

            if (
              od > 0 &&
              time != null &&
              lastOD != null &&
              lastTime != null &&
              od > lastOD
            ) {
              const dt = calcDoubling(lastTime, lastOD, time, od);
              if (dt && isFinite(dt)) {
                latestDT = dt;
                out.textContent = dt.toFixed(1);
              } else {
                out.textContent = "";
              }
            } else if (out) {
              out.textContent = "";
            }

            if (od > 0 && time != null) {
              lastOD = od;
              lastTime = time;
            }
          }

          /* === Projections === */
          function project(target) {
            if (!latestDT || !lastOD || !lastTime || target <= lastOD) return "–";
            const factor = Math.log(target / lastOD) / Math.log(2);
            return minutesToHHMM(lastTime + factor * latestDT);
          }

          qs(`#proj04-${culture}`).textContent = project(0.4);
          qs(`#proj06-${culture}`).textContent = project(0.6);
          qs(`#proj08-${culture}`).textContent = project(0.8);

          const custom = parseFloat(qs("#projCustomOD")?.value);
          qs(`#projCustom-${culture}`).textContent = project(custom);
        });
      });
    }

    /* ================= Fill start time ================= */

    const timeBtn = qs(".gc-filltime");
    if (timeBtn) {
      timeBtn.addEventListener("click", () => {
        const now = new Date();
        qs("#gc-h0").value = now.getHours();
        qs("#gc-m0").value = now.getMinutes();
      });
    }

    /* ================= Excel export ================= */

    const exportBtn = qs(".gc-export");
    if (exportBtn) {
    exportBtn.addEventListener("click", () => {

        const rows = [];
        const header = ["Time"];
        cultures.forEach(c => header.push(`OD600 ${c}`, `DT ${c} [min]`));
        rows.push(header);

        for (let i = 0; i < 12; i++) {
        const h = qs(`#gc-h${i}`)?.value;
        const m = qs(`#gc-m${i}`)?.value;
        const time =
            h !== "" && m !== ""
            ? `${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}`
            : "";

        const row = [time];
        cultures.forEach(c => {
            row.push(
            qs(`#gc-od${i}-${c}`)?.value || "",
            qs(`#gc-dt${i}-${c}`)?.textContent || ""
            );
        });
        rows.push(row);
        }

        rows.push([]);
        rows.push(["Target OD", ...cultures]);

        [["0.4","proj04"],["0.6","proj06"],["0.8","proj08"],["Custom","projCustom"]]
        .forEach(([label, key]) => {
            const row = [label];
            cultures.forEach(c => {
            row.push(qs(`#${key}-${c}`)?.textContent || "");
            });
            rows.push(row);
        });

        /* === Timestamped filename === */
        const now = new Date();
        const yyyy = now.getFullYear();
        const mm   = String(now.getMonth() + 1).padStart(2, "0");
        const dd   = String(now.getDate()).padStart(2, "0");
        const hh   = String(now.getHours()).padStart(2, "0");
        const min  = String(now.getMinutes()).padStart(2, "0");
        const ss   = String(now.getSeconds()).padStart(2, "0");

        const filename =
        `${yyyy}.${mm}.${dd}_${hh}-${min}-${ss}_BiochemProtocols_BacterialGrowthTimeCalculator.xlsx`;

        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet(rows);
        XLSX.utils.book_append_sheet(wb, ws, "Growth Calculator");

        XLSX.writeFile(wb, filename);
    });
    }


  });
});
