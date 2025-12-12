document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("pipes_alternative_switch");

  const pipes = {
    material:   document.getElementById("pipes-material"),
    mw:         document.getElementById("pipes-mw"),
    specs:      document.getElementById("pipes-specs"),
    location:   document.getElementById("pipes-location"),
    r_material: document.getElementById("pipes-r-material"),
    r_vol:      document.getElementById("pipes-r-vol"),
    r_mol:      document.getElementById("pipes-r-mol"),
  };

  const mopes = {
    material:   document.getElementById("mopes-material"),
    mw:         document.getElementById("mopes-mw"),
    specs:      document.getElementById("mopes-specs"),
    location:   document.getElementById("mopes-location"),
    r_material: document.getElementById("mopes-r-material"),
    r_vol:      document.getElementById("mopes-r-vol"),
    r_mol:      document.getElementById("mopes-r-mol"),
  };

  let usingMOPES = false;

  function toggle() {
    for (const key in pipes) {
      pipes[key].style.display = usingMOPES ? "none" : "";
      mopes[key].style.display = usingMOPES ? "" : "none";
    }
  }

  if (btn) {
    btn.addEventListener("click", () => {
      usingMOPES = !usingMOPES;
      toggle();

      btn.textContent = usingMOPES
        ? "Use PIPES"
        : "Use MOPES";
    });
  }
});