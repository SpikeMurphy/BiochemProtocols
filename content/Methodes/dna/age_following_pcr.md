+++
date = '2025-12-07T20:56:58+01:00'
draft = false
construction = false
title = 'Agarose Gel Electrophoresis (AGE) following polymerase chain reaction (PCR)'
subtitle = ''
author = 'Spike Murphy Müller ¹'
facility = '¹ Center for Experimental Medicine, Institute of Biochemistry and Signal Transduction, Working Group Signal Transduction in Cancer'
version = 'Version 1.0.0'
version_explaination = 'first: major revisions - second: minor revisions - third: revisions without changing procedure'
updated = '09.12.2025'
+++
{{< infobox type="danger" title="" >}}
‼️ EtBr is a carcinogen and can migrate through normal nitril gloves. If possible use an alternative ike Roti GelStain. If no alternative is available use specially for EtBr approved gloves.
{{< /infobox >}}

{{< infobox type="warning" title="" >}}
❗️ DNA intercalators such as Roti GelStain are still carcinogenic, but do not migrate throu normal nitril gloves.
{{< /infobox >}}

{{< tab >}}
## Materials
| Equipment & Devices | Amount | Specifications| Location |
| :-- | :-- | :-- | :-- |
| [power source <sup>manual</sup>]() |  |  |  |
| casting tray |  |  |  |
| well comb |  |  |  |
| electrophoresis chamber |  |  |  |

| Commercial Kits⠀⠀⠀⠀⠀⠀ | Amount | Specifications| Location |
| :-- | :-- | :-- | :-- |

| Containers & Consumables | Amount | Specifications| Location |
| :-- | :-- | :-- | :-- |
| pipetmans and sterile pipette tips |  |  |  |
| Reaction Tube 1.5 ml | 1/gel <br> 1/sample | for mastermix preparation <br> for sample preparation |  |

| Reagents & Solutions⠀⠀⠀⠀ | Amount | Specifications| Location |
| :-- | :-- | :-- | :-- |
| agarose | default 0.35 g/50 mL gel | solid |  |
| Tris-acetat-EDTA (TAE) buffer | ~150 mL/gel | 50 mL for gel<br>~100 mL as electrophoresis buffer |  |
| **gel stain**<br>ethidium bromide<br>Roti GelStain | <br>0.2–0.5µg/mL (1–2.5 µL/gel)<br>1 µL/gel | <br>stock 10mg/mL<br>ready-to-use |  |
| dsH<sub>2</sub>O | [see mastermix calculator below](#mastermix-calculator-anchor) | for sample dilution/for mastermix preparation |  |
| DNA loading buffer 5x | [see mastermix calculator below](#mastermix-calculator-anchor) | for sample preparation/for mastermix preparation |  |
| **DNA ladder**<br>HyperLadder 1kb | <br> usually 10 µL/gel | <br> 5 µL/well (first and last well) |  |

| Biological Materials⠀⠀⠀⠀⠀ | Amount | Specifications| Location |
| :-- | :-- | :-- | :-- |
| DNA sample | at least 10 ng/well |  |  |

{{< /tab >}}

{{< tab >}}
## Procedure:
### Preparing the gel:
1. <input type="checkbox"> Weigh the correct amount of agarose:

#### Hyperladder 1kb:
| range of effective separation [bp] | agarose gel percentage [%] | agarose per gel [g/50mL] |
| :-- | :-- | :-- |
| 2,000–50,000 | 0.5 | 0.25 |
| 1,000–20,000 | 0.6 | 0.30 |
| 800–12,000 | 0.7 | 0.35 |
| **800–10,000 (default)** | **0.8** | **0.40** |
| 600–10,000 | 0.9 | 0.45 |
| 400–8,000 | 1.0 | 0.50 |
| 300–7,000 | 1.2 | 0.60 |
| 200–3,000 | 1.5 | 0.75 |
| 100–2,000 | 2.0 | 1.00 |
| 25–1,000 | 3.0 | 1.50 |
| 10-500 | 4.0 | 2.00 |
| 10-300 | 5.0 | 2.50 |

2. <input type="checkbox"> Add 50 mL of TAE buffer.
3. <input type="checkbox"> Place in microwave and heat in bursts with swaying in between until boiling and until clear.
4. <input type="checkbox"> Let cool down to approximately 50°C in a water bath or under running water until only warm to touch.
5. <input type="checkbox"> Add gel stain.
- The standard concentration of ethidium bromide is 0.2µg/mL to 0.5µg/mL, which amounts to 1µL to 2.5µL per 50mL gel for a stock concentration of 10mg/mL.
{{< infobox type="danger" title="" >}}
‼️ EtBr is a carcinogen and can migrate through normal nitril gloves. If possible use an alternative ike Roti GelStain. If no alternative is available use specially for EtBr approved gloves.
{{< /infobox >}}

- The standard amount of Roti GelStain is 1µL per 50mL gel.
{{< infobox type="warning" title="" >}}
❗️ DNA intercalators, such as Roti GelStain, are still carcinogenic, but do not migrate throu normal nitril gloves.
{{< /infobox >}}

### Casting the Gel:
1. <input type="checkbox"> Place the casting tray into the gel chamber rotated 90° to prevent the gel from running in the chamber.
2. <input type="checkbox"> Place the well comb.
3. <input type="checkbox"> Pour in the gel from a corner on the opposite site from the well comb.
4. <input type="checkbox"> Remove all bubbles, especially near the comb or where the DNA will be running, if necessary.
5. <input type="checkbox"> Let the gel solidify for approximately 30 minutes.

### Preparing the DNA:
1.	<input type="checkbox"> Mix the whole PCR reaction mixture with the appropriate amount of DNA loading buffer.
{{< infobox type="info" title="DNA Loading Buffer Volume Calculator" >}}
{{< age_following_pcr_buffer >}}
{{< /infobox >}}

### Running the Gel:
1.	<input type="checkbox"> Rotate the casting tray 90° so the gel pockets are oriented towards the cathode (black).
{{< infobox type="info" title="" >}}
DNA is negatively charged and runs from the cathode (-) to the anode (+).
{{< /infobox >}}

2.	<input type="checkbox"> Fill the electrophoresis chamber with TAE buffer until the gel is overlain.
3.	<input type="checkbox"> Pipet the DNA ladder in the first (and last) well(s).
4.	<input type="checkbox"> Pipet the samples into the other wells.
{{< infobox type="info" title="Subsequent Purification" >}}
⚠️ For downstream purification, divide each DNA sample between two wells. Load a small portion of the sample into one well for UV imaging, and load the remaining volume into a second well for gel extraction. UV light is mutagenic and can damage or alter DNA, so the band intended for purification should not be exposed to UV light. Instead, determine its position by imaging only the well containing the smaller aliquot. The DNA Ladder should not be used to determain the position, as the smaller aliquot is used to confirm the presence of DNA at the correct migration distance.
{{< /infobox >}}

5.	<input type="checkbox"> Let the gel run at the indicated voltage below (default 80 V) for approximately 1 hour depending on the gels percentage.

| Purpose | Voltage [V/cm]| Voltage for x cm |
| :-- | :-- | :-- |
| routine analyses | 5-8 V/cm |  |
| DNA purification | 3-5 V/cm |  |
| southern hybridisation | 1-3 V/cm |  |

### Procede with Suitable Protocol:
- [Imaging following agarose gel electrophoresis (AGE)]({{< relref "methodes/dna/imaging_age.md" >}})
- [Purification of DNA from agarose gel electrophoresis (AGE)]({{< relref "methodes/dna/purification_age.md" >}})
{{< /tab >}}

{{< comment_box >}}
{{< save_page >}}