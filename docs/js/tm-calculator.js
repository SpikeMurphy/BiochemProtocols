// --- NEB/ThermoFisher 2025 Tm Calculator ---
// SantaLucia 1998 nearest-neighbor + Owczarzy Mg-aware salt correction

// Nearest-neighbor ΔH (kcal/mol) and ΔS (cal/mol*K)
const NN = {
  "AA":[-7.9,-22.2],"TT":[-7.9,-22.2],
  "AT":[-7.2,-20.4],"TA":[-7.2,-21.3],
  "CA":[-8.5,-22.7],"TG":[-8.5,-22.7],
  "GT":[-8.4,-22.4],"AC":[-8.4,-22.4],
  "CT":[-7.8,-21.0],"AG":[-7.8,-21.0],
  "GA":[-8.2,-22.2],"TC":[-8.2,-22.2],
  "CG":[-10.6,-27.2],"GC":[-9.8,-24.4],
  "GG":[-8.0,-19.9],"CC":[-8.0,-19.9]
};

// sanitize input
function cleanSeq(s){
  return s.replace(/[^ATGCatgc]/g,"").toUpperCase();
}

// simple Wallace rule
function simpleTm(seq){
  const s = cleanSeq(seq);
  const A = (s.match(/A/g) || []).length;
  const T = (s.match(/T/g) || []).length;
  const G = (s.match(/G/g) || []).length;
  const C = (s.match(/C/g) || []).length;
  return 2*(A+T) + 4*(G+C);
}

// check self-complementarity
function isSelfComplementary(seq){
  const c = {A:"T",T:"A",G:"C",C:"G"};
  const rc = seq.split("").reverse().map(b=>c[b]).join("");
  return rc === seq;
}

// Owczarzy Mg-aware correction
function owczarzySaltCorrection(S, N, Na, Mg, dNTP){
  const freeMg = Math.max(0, Mg - dNTP);
  const Meff = Na + 3.3 * Math.sqrt(freeMg);
  return S + 0.368 * (N - 1) * Math.log(Meff);
}

// main Tm function (NEB / ThermoFisher 2025)
function calcTmNEB(seq){
  const s = cleanSeq(seq);
  if(s.length < 2) return NaN;

  let H = 0, S = 0;

  // sum all NN
  for(let i=0;i<s.length-1;i++){
    const p = s[i]+s[i+1];
    if(!NN[p]) return NaN;
    H += NN[p][0];
    S += NN[p][1];
  }

  // Initiation
  H += 0.2;
  S += -5.7;

  const first = s[0];
  const last  = s[s.length-1];

  // Terminal
  if(first === "A" || first === "T"){ H += 2.3; S += -4.1; }
  else { H += 0.1; S += -1.5; }

  if(last === "A" || last === "T"){ H += 2.3; S += -4.1; }
  else { H += 0.1; S += -1.5; }

  // NEB defaults:
  const Na = 0.05;       // 50 mM Na+
  const Mg = 0.0015;     // 1.5 mM Mg2+
  const dNTP = 0.0002;   // 0.2 mM dNTPs
  const primerConc = 0.5e-6;

  // Salt correction
  S = owczarzySaltCorrection(S, s.length, Na, Mg, dNTP);

  // Effective concentration
  const selfComp = isSelfComplementary(s);
  const CtEff = selfComp ? primerConc/2 : primerConc/4;

  const R = 1.987;
  const TmK = (1000 * H) / (S + R * Math.log(CtEff));
  return TmK - 273.15;
}

// --- DOM ---
document.addEventListener("DOMContentLoaded", () => {
  const seqFwd = document.getElementById("seq-fwd");
  const seqRev = document.getElementById("seq-rev");
  const out     = document.getElementById("tm-out");
  const calc    = document.getElementById("calc");

  calc.addEventListener("click", () => {

    const F = cleanSeq(seqFwd.value);
    const R = cleanSeq(seqRev.value);

    if(F.length < 2 || R.length < 2){
      out.innerHTML = "❌ Please enter both sequences.";
      return;
    }

    // Simple Tm
    const sTmF = simpleTm(F);
    const sTmR = simpleTm(R);

    // NEB Tm
    const nTmF = calcTmNEB(F);
    const nTmR = calcTmNEB(R);

    if(isNaN(nTmF) || isNaN(nTmR)){
      out.innerHTML = "Invalid sequence.";
      return;
    }

    // take lowest NEB Tm for Ta (Phusion HS II)
    const lowTm = Math.min(nTmF, nTmR);
    const Ta1 = lowTm + 6;
    const Ta2 = lowTm + 12;

    out.innerHTML =
      `<b>Forward Primer:</b><br>
       T<sub>m</sub><sup>GC</sup> = ${sTmF.toFixed(1)} °C<br>
       T<sub>m</sub><sup>NEB</sup> = ${nTmF.toFixed(1)} °C<br><br>

       <b>Reverse Primer:</b><br>
       T<sub>m</sub><sup>GC</sup> = ${sTmR.toFixed(1)} °C<br>
       T<sub>m</sub><sup>NEB</sup> = ${nTmR.toFixed(1)} °C<br><br>

       <b>Annealing Temperature (Phusion HS II):</b><br>
       T<sub>a</sub><sup>NEB</sup> = ${Ta1.toFixed(1)}–${Ta2.toFixed(1)} °C<br>
       (basierend auf niedrigerem T<sub>m</sub><sup>NEB</sup>)`;
  });
});
