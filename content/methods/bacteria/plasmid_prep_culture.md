+++
date = '2025-12-07T13:11:31+01:00'
draft = false
construction = false
title = 'Bacterial Plasmid Preparation Culture'
subtitle = ''
author = ['Spike Murphy Müller ¹']
affiliation = ['¹ Center for Experimental Medicine, Institute of Biochemistry and Signal Transduction, Working Group Signal Transduction in Cancer']
sponsored = false
sponsor = ''
version = 'Version 1.0.1'
version_explanation = 'first: major revisions - second: minor revisions - third: revisions without changing procedure'
updated = '12.12.2025'
finished = false
tested = false
+++
<!-- DONE: delete when finished = true + tested = true -->

{{< tab >}}

## Materials

| Equipment & Devices⠀⠀⠀ | Amount | Specifications | Location |
| :-- | :-- | :-- | :-- |
| laminar airflow workbench | | | |
| shaker incubator | | | |
| photometer | | for measuring OD<sub>600</sub> | |

| Commercial Kits⠀⠀⠀⠀⠀⠀ | Amount | Specifications | Location |
| :-- | :-- | :-- | :-- |

| Containers & Consumables | Amount | Specifications | Location |
| :-- | :-- | :-- | :-- |
| micropipettes and sterile pipette tips | | | |
| pipetting aid and serological pipette | | | |
| photometer cuvette | 1/culture | | |
| liquid culture tubes or sterile falcon tubes 15 mL | 1/culture | | |
| sterile reaction tube | 1 | for antibiotic aliquot | |

| Reagents & Solutions⠀⠀⠀⠀ | Amount | Specifications | Location |
| :-- | :-- | :-- | :-- |
| Luria-Bertani liquid medium | 6 mL/culture | | |
| suitable antibiotic | | stock solution, tpically 1000x | |

| Biological Materials⠀⠀⠀⠀⠀ | Amount | Specifications | Location |
| :-- | :-- | :-- | :-- |
| LB agar plate with transformed bacteria | 1/plasmid | | |

{{< /tab >}}

{{< tab >}}

## Procedure

### Preparation

1. {{< checkbox >}} [Transform a suitable strain of bacteria and plate transformed bacteria on a LB-agar Plate containing appropriate selection markers (Antibiotic, X-Gal).]({{< relref "methods/bacteria/transformation.md" >}})
2. {{< checkbox >}} Prepare 6 mL of sterile LB medium per clone.

### Culture

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

8. {{< checkbox >}} Document the start time and refer to [BiochemProtocols bacterial growth calculator](#growth-calc-anchor).

{{< calculators/display_current_time >}}

### Procede with Suitable Protocol

- [NucleoSpin® Plasmid Preparation]({{< relref "/methods/dna/nucleospin_plasmid_prep.md" >}})
{{< /tab >}}

{{< comment_box >}}
{{< save_page >}}

{{< save_journal_label >}}

<!-- markdownlint-disable MD033 -->
<div id="growth-calc-anchor" style="position: relative; top: -80px; visibility: hidden;"></div>
<!-- markdownlint-enable MD033 -->

{{< calculators/calc_bacterial_growth >}}
