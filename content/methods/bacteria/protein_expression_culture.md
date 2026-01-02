+++
date = '2025-12-07T13:11:31+01:00'
draft = false
construction = false
title = 'Bacterial Protein Expression Culture'
subtitle = ''
author = ['Spike Murphy Müller ¹']
affiliation = ['¹ Center for Experimental Medicine, Institute of Biochemistry and Signal Transduction, Working Group Signal Transduction in Cancer']
sponsored = false
sponsor = ''
version = 'Version 1.1.2'
version_explanation = 'first: major revisions - second: minor revisions - third: revisions without changing procedure'
updated = '17.12.2025'
finished = true
tested = false
math = true
+++
<!-- CONTENT_NEW: finished = true, change to CONTENT_DONE; tested = true, delete -->

{{< tab >}}

## Materials

| Equipment & Devices⠀⠀⠀ | Amount | Specifications | Location |
| :-- | :-- | :-- | :-- |
| laminar airflow workbench | | | |
| shaker incubator | | | |
| photometer | | for measuring OD<sub>600</sub> | |
| centrifuge | | for 50 mL falcon tubes @ 3,000-6,000 g | |
| centrifuge | | microfuge for 1.5 mL tubes @ 20,000 g | |
| end-over-end rotator | | for fitting 10 x 50m mL falcon tubes/culture | |
| ultrasonicator | | | |
| bucket of ice | | | |

| Commercial Kits⠀⠀⠀⠀⠀⠀ | Amount | Specifications | Location |
| :-- | :-- | :-- | :-- |

| Containers & Consumables | Amount | Specifications | Location |
| :-- | :-- | :-- | :-- |
| micropipettes and sterile pipette tips | | | |
| pipetting aid and serological pipettes | | | |
| photometer cuvette | 2/culture | | |
| liquid culture tubes or sterile falcon tubes 15 mL | 1/culture | for pre culture | |
| sterile reaction tube 1.5 mL | 1/workflow <br> 2/culture <br> 20/culture | for antibiotic aliquot <br> for culture aliquots (pre- and post-induction) <br> for centrifugation following lysis | |
| Erlenmeyer Flask 1 L | 1/culture | | |
| sterile falcon tubes 50 mL | 10/culture <br> 1/culture | for harvesting <br> for recombining supernatants | |

| Reagents & Solutions⠀⠀⠀⠀ | Amount | Specifications| Location |
| :-- | :-- | :-- | :-- |
| [Luria-Bertani liquid medium]({{< relref "" >}}) <!-- CONTENT_TODO: add recipe, then add link--> | 6 mL/culture <br> 500 mL/culture | for the pre culture <br> for the main culture | |
| [Luria-Bertani agar plate]({{< relref "" >}}) <!-- CONTENT_TODO: add recipe, then add link--> | 1/culture | for clone backup | |
| suitable antibiotic | | stock solution, typically 1000x | |
| [phosphate-buffered saline *PBS*]({{< relref "pbs.md" >}}) | 50 µL/culture <br> 50 µL/culture <br> 50 µL/culture | for pre-induction aliquot <br> for post-induction aliquot <br> 50mL for precipitate |  |
| [SDS-PAGE sample buffer 2x]({{< relref "sds-page_sample_buffer.md" >}}) | 50 µL/culture <br> 50 µL/culture <br> 50 µL/culture | for pre-induction aliquot <br> for post-induction aliquot <br> 50mL for precipitate | |
| suitable induction chemical <br> e.g. [anhydrotetracycline *AHT*]({{< relref "aht.md" >}}) <!-- CONTENT_TODO: add recipe, then add link--> 2 mg/mL <br> e.g. [isopropyl-β-D-thiogalactopyranosid *IPTG*]({{< relref "iptg.md" >}}) <!-- CONTENT_TODO: add recipe, then add link--> 1 M | <br> e.g. 50 µL <br> e.g. 500 µL | <br> for a final concentration of 0.2 µg/mL  <br> for a final concentration of 0.5 mM | |
| [tris-HCl-NaCl-MgCl<sub>2</sub> bacterial lysis buffer]({{< relref "bacterial_lysis_buffer.md" >}}) | | for 20 mL supplemented lysis buffer | |
| [phenylmethylsulfonyl fluoride *PMSF*]({{< relref "" >}}) <!-- CONTENT_TODO: add recipe, then add link--> 100 mM | 200 µL | for 20 mL supplemented lysis buffer (1 mM) | |
| [aprotinin]({{< relref "/recipes/bacteria/aprotinin.md" >}}) 1.54 mM | 20 µL | for 20 mL supplemented lysis buffer (1.54 µM) | |
| [leupeptin]({{< relref "/recipes/bacteria/leupeptin.md" >}}) 10mM | 20 µL | for 20 mL supplemented lysis buffer (10 µM) | |
| [pepstatin A]({{< relref "" >}}) <!-- CONTENT_TODO: add recipe, then add link--> 1mM | 200µL | for 20 mL supplemented lysis buffer (10µM) | |
| sucrose | 3.423 g/clone | for 20 mL supplemented lysis buffer (500mM, 17.1 %) | |
| Triton-X-100 | 100 µL/clone | for 20 mL supplemented lysis buffer (0.5 %) | |

| Biological Materials⠀⠀⠀⠀⠀ | Amount | Specifications | Location |
| :-- | :-- | :-- | :-- |
| [LB agar plate with transformed bacteria]({{< relref "transformation.md" >}}) | 1/plasmid | | |

{{< /tab >}}

{{< tab >}}

## Procedure

### Preparation

1. {{< checkbox >}} [Transform a suitable strain of bacteria and plate transformed bacteria on a LB-agar Plate containing appropriate selection markers (Antibiotic, X-Gal).]({{< relref "methods/bacteria/transformation.md" >}})
2. {{< checkbox >}} [Prepare 6 mL of sterile LB medium per clone.]({{< relref "" >}}) <!-- CONTENT_TODO: add recipe, then add link-->
3. {{< checkbox >}} [Prepare additional 500 mL of sterile LB medium]({{< relref "" >}}) <!-- CONTENT_TODO: add recipe, then add link--> in a 1 L Erlenmeyer flask per clone.
{{< infobox type="info" title="" >}}
⚠️ Adjust volume as needed. The Erlenmeyer flask should be able to hold at least double the volume of LB medium used to allow for sufficient aeration.
{{< /infobox >}}

### Pre-Culture

{{< infobox type="info" title="" >}}
⚠️ To reduce risk of contamination, all subsequent steps can be carried out under laminar airflow.
{{< /infobox >}}

1. {{< checkbox >}} Transfer 1 mL of the 6 mL LB medium into a photometer cuvette for the zero value.
2. {{< checkbox >}} Transfer 5 mL of LB medium into the sterile 15 mL falcon tube or liquid culturing tube.
3. {{< checkbox >}} Supplement the 5 mL of LB medium with a suitable antibiotic.
{{< infobox type="warning" title="" >}}
❗️ To minimize exposure to microorganisms, all subsequent steps should be carried out under laminar airflow.
{{< /infobox >}}

4. {{< checkbox >}} Pick a suitable clone with a pipette tip.
5. {{< checkbox >}} Optionally streak pipette tip over fresh plate as a backup.
6. {{< checkbox >}} Drop the pipette tip into the prepared medium.
7. {{< checkbox >}} Incubate the culture @ 37 °C and shaking @ 250 rpm for approximately 2–4 h until an OD<sub>600</sub> ~ 0.4–0.8 (best 0.6) is reached.
{{< infobox type="info" title="" >}}
Incubation @ 30 °C and shaking @ 250 rpm overnight is also possible.
{{< /infobox >}}

<!-- markdownlint-disable MD033 -->
<div style="display:flex; gap:20px; align-items:center;">
{{< timer time="2:00:00" >}}
{{< timer time="3:00:00" >}}
{{< timer time="4:00:00" >}}
</div>
<!-- markdownlint-enable MD033 -->

8. {{< checkbox >}} Document the start time and refer to [BiochemProtocols bacterial growth calculator](#growth-calc-anchor1).

{{< calculators/display_current_time >}}

9. {{< checkbox >}} Measure the OD600 after 120 minutes and then every 60 minutes and until an OD600 of approximately 2.000 is reached.

### Expression Culture

1. {{< checkbox >}} Transfer 1 mL of the 500 mL LB medium into a photometer cuvette for the zero value.
2. {{< checkbox >}} Supplement the 500 mL LB-medium with suitable antibiotic.
3. {{< checkbox >}} Inoculate the 500 mL LB-medium with the pre-culture.
4. {{< checkbox >}} Incubate batch @ 37 °C and shaking @ 250 rpm for approximately 2–4 h until an OD600 of 0.4 to 0.8 (best 0.6) is reached.

<!-- markdownlint-disable MD033 -->
<div style="display:flex; gap:20px; align-items:center;">
{{< timer time="2:00:00" >}}
{{< timer time="3:00:00" >}}
{{< timer time="4:00:00" >}}
</div>
<!-- markdownlint-enable MD033 -->

5. {{< checkbox >}} Take a 1 mL aliquot prior to induction, pellet and resuspend in 50 µL PBS and 50 µL 2x SDS-Page sample buffer for later SDS-PAGE analysis.
6. {{< checkbox >}} Induce expression according to plasmid instructions.
{{< infobox type="info" title="Typical Induction Chemicals" >}}
Anhydrotetracycline *AHT* to a final concentration of 0.2 µg/mL (50 µL of a 2 mg/mL stock).
Isopropyl-β-D-thiogalactopyranosid *IPTG* to a final concentration of 0.5 mM (250 µL of a 1 M stock).
{{< /infobox >}}

7. {{< checkbox >}} Incubate @ 30 °C and shaking @ 250 rpm for 2–4 h for expression of the protein.
{{< infobox type="info" title="" >}}
⚠️ Incubation @ 25 °C and shaking @ 250 rpm overnight is also possible and may yield higher protein quantity and less protein aggregates. The final expression time and OD<sub>600</sub> can be documented once when starting the harvest.
{{< /infobox >}}

<!-- markdownlint-disable MD033 -->
<div style="display:flex; gap:20px; align-items:center;">
{{< timer time="2:00:00" >}}
{{< timer time="3:00:00" >}}
{{< timer time="4:00:00" >}}
</div>
<!-- markdownlint-enable MD033 -->

8. {{< checkbox >}} Document the start time and refer to [BiochemProtocols bacterial growth calculator](#growth-calc-anchor2).


{{< calculators/display_current_time >}}

9. {{< checkbox >}} Measure the OD<sub>600</sub> after 120 minutes and then every 60 minutes and until an OD<sub>600</sub> of approximately 2.000 is reached.
{{< infobox type="info" title="Bacterial Growth Phases" >}}
⚠️ Cells should be harvested at the end of the logarithmic growth phase, typically at an OD<sub>600</sub> of approximately 2.000, and before stationary phase is reached at an OD<sub>600</sub> of 2.500–4.000.
{{< /infobox >}}

### Preparations 1 h before Harvesting

1. {{< checkbox >}} Pre-cool a centrifuge to 4 °C for harvesting @ 3000–6000 g.
2. {{< checkbox >}} Pre-cool the ultrasonicator to 4 °C.
3. {{< checkbox >}} Prepare 20 mL supplemented bacterial lysis buffer per 500 mL bacterial culture volume (stable for approximately 2 h):

    - {{< checkbox >}} pre-cool 20 mL of ice-cold Tris-HCl-NaCl-MgCl2 bacterial lysis buffer
    - {{< checkbox >}} discard 540 µL
    - {{< checkbox >}} supplement 20 µL aprotinin 1.54 mM for a final concentration of 1.54 µM
    - {{< checkbox >}} supplement 20 µL leupeptin 10 mM for a final concentration of 10 µM
    - {{< checkbox >}} supplement 200 µL pepstatin A 1 mM for a final concentration of 10 µM
    - {{< checkbox >}} supplement 200 µL PMSF 100 mM for a final concentration of 1 mM
    - {{< checkbox >}} supplement 3.423 g sucrose for a final concentration of 500mM (17.1 %)
    - {{< checkbox >}} supplement 100 µL Triton-X-100 for a final concentration of 0.5 %

4. {{< checkbox >}} Rotate supplemented bacterial lysis buffer end-over-end @ 4 °C for 5–10 minutes.

<!-- markdownlint-disable MD033 -->
<div style="display:flex; gap:20px; align-items:center;">
{{< timer time="0:05:00" >}}
{{< timer time="0:10:00" >}}
</div>
<!-- markdownlint-enable MD033 -->

### Cell harvesting

1. {{< checkbox >}} Take a 1 mL aliquot prior to harvest, pellet and resuspend in 50 µL PBS and 50 µL 2x SDS-Page sample buffer for later SDS-PAGE analysis.
2. {{< checkbox >}} Transfer the 500 mL culture into 10 x 50 mL falcon tubes.
3. {{< checkbox >}} Harvest cells by centrifugation @ 3000–6000 g and @ 4 °C for 10 minutes.
{{< infobox type="info" title="Equation for  G-Force ($F_g$) from Rotor Radius ($r_r$) and Revolutions per Minute ($rpm$)" >}}
Rotor radius in meters (SI): $F_g = 1.118 \cdot 10^{-3} \cdot r_r \cdot rpm^2$  
Rotor radius in centimeters: $F_g = 1.118 \cdot 10^{-5} \cdot r_r \cdot rpm^2$

Sorvall SS-34 fixed angle rotor: $1.118 \cdot 10^{-5} \ cm^{-1} \ min ^{2} \cdot 10.7 \ cm \cdot (6000 \ min^{-1})^2 = 4300 \ g$
{{< /infobox >}}

{{< timer time="0:10:00" >}}

4. {{< checkbox >}} Discard supernatant.
5. {{< checkbox >}} Use pellet immediately of freeze @ –20 °C.

### Pellet Resuspension

1. {{< checkbox >}} Overlay bacteria pellet from 500 mL culture volume with 20 mL freshly prepared lysis buffer (2 mL/pellet).
{{< infobox type="info" title="" >}}
⚠️ For subsequent purification using affinity chromatography columns, try and keep lysate as concentrated as possible and therefore the volume as little as possible. Try using only 5 mL and increase the volume only when resuspension is not possible.
{{< /infobox >}}

2. {{< checkbox >}} Break up the pellet with a pipette.
3. {{< checkbox >}} Resuspend @4 °C rotating end-over-end for 10-20 minutes to reach homogeneity.
4. {{< checkbox >}} Pre-cool a centrifuge to 4 °C for sedimenting cell components @ 20,000 g in 1.5 mL reaction tubes.

<!-- markdownlint-disable MD033 -->
<div style="display:flex; gap:20px; align-items:center;">
{{< timer time="0:10:00" >}}
{{< timer time="0:20:00" >}}
</div>
<!-- markdownlint-enable MD033 -->

### Cell Lysis and DNA Shearing

1. {{< checkbox >}} Ultrasonicate resuspended bacteria @ output control 5 and @ duty cycle 50% for 15 seconds.
{{< timer time="0:00:15" >}}

2. {{< checkbox >}} Cool suspended bacteria on ice-water for 60 seconds.
{{< timer time="0:01:00" >}}

3. {{< checkbox >}} Ultrasonicate resuspended bacteria @ output control 5 and @ duty cycle 50% for 15 seconds.
{{< timer time="0:00:15" >}}

4. {{< checkbox >}} Cool suspended bacteria on ice-water for 60 seconds.
{{< timer time="0:01:00" >}}

5. Ultrasonicate resuspended bacteria @ output control 5 and @ duty cycle 50% for 15 seconds.
{{< timer time="0:00:15" >}}

6. {{< checkbox >}} Cool suspended bacteria on ice-water for 60 seconds.
{{< timer time="0:01:00" >}}

7. {{< checkbox >}} Ultrasonicate resuspended bacteria @ output control 5 and @ duty cycle 50% for 15 seconds.
{{< timer time="0:00:15" >}}

8. {{< checkbox >}} Cool suspended bacteria on ice-water for 60 seconds.
{{< timer time="0:01:00" >}}

9. {{< checkbox >}} Ultrasonicate resuspended bacteria @ output control 5 and @ 50% duty cycle for 15 seconds.
{{< timer time="0:00:15" >}}

10. {{< checkbox >}} Cool suspended bacteria on ice-water for 60 seconds.
{{< timer time="0:01:00" >}}

{{< infobox type="info" title="" >}}
When doing multiple samples, just cycle through the samples, which gives them enough time to cool down between sonifications.
{{< /infobox >}}

11. {{< checkbox >}} Transfer the lysate in 20 sterile 1.5 mL reaction tubes.
12. {{< checkbox >}} Centrifuge @ 20,000 g and @ 4 °C for 20 minutes.
{{< timer time="0:20:00" >}}

13. {{< checkbox >}} Decant supernatant into a fresh 50 mL tube.
14. {{< checkbox >}} Resuspend the precipitate in 50 mL PBS and 50 mL 2x Laemmli sample buffer and save for later SDS-PAGE analysis.

### Precede with Suitable Protocol

- [StrepTag Gravity Flow Protein Purification]({{< relref "/methods/proteins/streptag_protein_purification" >}})
- [MagStrep® Strep-Tactin®XT Beads Protein Purification](Link) <!-- CONTENT_TODO: insert link-->
- [Glutathione-Sepharose Protein Purification](Link) <!-- CONTENT_TODO: insert link-->
{{< /tab >}}

<!-- markdownlint-disable MD033 -->
<div id="growth-calc-anchor1" style="position: relative; top: -80px; visibility: hidden;"></div>
<!-- markdownlint-enable MD033 -->

{{< calculators/calc_bacterial_growth >}}

<!-- markdownlint-disable MD033 -->
<div id="growth-calc-anchor2" style="position: relative; top: -80px; visibility: hidden;"></div>
<!-- markdownlint-enable MD033 -->

{{< calculators/calc_bacterial_growth >}}

{{< comment_box >}}
{{< save_page >}}

{{< save_journal_label >}}
