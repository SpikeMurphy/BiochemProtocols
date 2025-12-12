+++
date = '2025-12-07T13:11:31+01:00'
draft = false
construction = false
title = 'Bacterial Plasmid Preparation Culture'
subtitle = ''
author = 'Spike Murphy Müller ¹'
facility = '¹ Center for Experimental Medicine, Institute of Biochemistry and Signal Transduction, Working Group Signal Transduction in Cancer'
version = 'Version 1.0.0'
version_explaination = 'first: major revisions - second: minor revisions - third: revisions without changing procedure'
updated = ''
+++

{{< tab >}}
## Materials
| Equipment & Devices⠀⠀⠀ | Amount | Specifications| Location |
| :-- | :-- | :-- | :-- |
| shaker incubator |  |  |  |
| photometer |  | for measuring OD<sub>600</sub> |  |

| Commercial Kits⠀⠀⠀⠀⠀⠀ | Amount | Specifications| Location |
| :-- | :-- | :-- | :-- |


| Containers & Consumables | Amount | Specifications| Location |
| :-- | :-- | :-- | :-- |
| pipetmans and sterile pipette tips |  |  |  |
| pipetting aid and serological pipette |  |  |  |
| photometer cuvette | 1/culture |  |  |
| liquid culture tubes or sterile falcon tubes 15 mL | 1/culture |  |  |
| sterile reaction tube  | 1 | for antibiotic aliquot |  |

| Reagents & Solutions⠀⠀⠀⠀ | Amount | Specifications| Location |
| :-- | :-- | :-- | :-- |
| Luria-Bertani liquid medium | 6 mL/culture |  |  |
| suitable antibiotic |  | stock solution, tpically 1000x |  |

| Biological Materials⠀⠀⠀⠀⠀ | Amount | Specifications| Location |
| :-- | :-- | :-- | :-- |
| LB agar plate with transformed bacteria | 1/plasmid |  |  |

{{< /tab >}}

{{< tab >}}
## Procedure:
### Preparation:
1. <input type="checkbox"> [Transform a suitable strain of bacteria and plate transformed bacteria on a LB-agar Plate containing appropriate selection markers (Antibiotic, X-Gal).]({{< relref "methodes/bacteria/transformation.md" >}})
2. <input type="checkbox"> Prepare 6 mL LB-medium per clone.
### Culture:
{{< infobox type="info" title="" >}}
⚠️ To reduce risk of contamination, all subsequent steps can be carried out under laminar airflow.
{{< /infobox >}}

1. <input type="checkbox"> Transfer 1 mL of the 6 mL LB medium into a photometer cuvette for the zero value.
2. <input type="checkbox"> Transfer 5 mL of LB-medium into the sterile 15 mL falcon tube or liquid culturing tube.
2. <input type="checkbox"> Supplement the 5 mL of LB-medium with a suitable antibiotic.
{{< infobox type="warning" title="" >}}
❗️ To minimize exposure to microorganisms, all subsequent steps should be carried out under laminar airflow.
{{< /infobox >}}

3. <input type="checkbox"> Pick a suitable clone with a pipette tip.
4. <input type="checkbox"> Optionally streak pipette tip over fresh plate as a backup.
5. <input type="checkbox"> Drop the pipette tip into the prepared medium.
6. <input type="checkbox"> Incubate the culture @ 37 °C and shaking @ 250 rpm for approximately 2–4 h until an OD<sub>600</sub> ~ 0.4–0.8 (best 0.6) is reached or incubate @ 30 °C and shaking @ 250 rpm overnight.
<div style="display:flex; gap:20px; align-items:center;">
{{< timer time="2:00:00" >}}
{{< timer time="3:00:00" >}}
{{< timer time="4:00:00" >}}
</div>

7. <input type="checkbox"> Document the start time and refer to [BiochemProtocols bacterial growth calculator]().

{{< current_time_display >}}

{{< bacterial_growth_calc >}}

### Proceed with the appropriate Plasmid Prep Protocol
- [NucleoSpin® Plasmid Preparation]({{< relref "/methodes/dna/nucleospin_plasmid_prep.md" >}})
{{< /tab >}}