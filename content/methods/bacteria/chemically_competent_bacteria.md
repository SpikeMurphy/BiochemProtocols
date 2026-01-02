+++
date = '2025-12-07T13:11:31+01:00'
draft = false
construction = false
title = 'Chemically Competent Bacteria Generation'
subtitle = ''
author = ['Spike Murphy Müller ¹']
affiliation = ['¹ Center for Experimental Medicine, Institute of Biochemistry and Signal Transduction, Working Group Signal Transduction in Cancer']
sponsored = false
sponsor = ''
version = 'Version 1.0.0'
version_explanation = 'first: major revisions - second: minor revisions - third: revisions without changing procedure'
updated = '11.12.2025'
finished = true
tested = false
+++
<!-- CONTENT_NEW: delete when finished = true + tested = true -->

{{< tab >}}

## Materials

| Equipment & Devices⠀⠀⠀ | Amount | Specifications| Location |
| :-- | :-- | :-- | :-- |
| shaker incubator |  | for incubation @ 30 or 37 °C |  |
| centrifuge |  |  for centrifugation of 50 mL falcons @ 5,000 g |  |
| photometer |  | for measurement of OD<sub>600</sub> |  |
| cold room |  | @ 4 °C |  |

| Commercial Kits⠀⠀⠀⠀⠀⠀ | Amount | Specifications| Location |
| :-- | :-- | :-- | :-- |

| Containers & Consumables | Amount | Specifications| Location |
| :-- | :-- | :-- | :-- |
| micropipettes and sterile pipette tips |  |  |  |
| photometer cuvette | 2/strain |  |  |
| Erlenmeyer flask 200 mL | 1/strain |  |  |
| sterile reaction tubes 1.5 mL | 80/strain |  |  |
| sterile falcon tubes 50 mL | 3/strain |  |  |
| sterile falcon tubes 15 mL | 2/strain |  |  |

| Reagents & Solutions⠀⠀⠀⠀ | Amount | Specifications| Location |
| :-- | :-- | :-- | :-- |
| Luria-Bertani agar plates | 1/strain | no antibiotic |  |
| Luria-Bertani liquid medium | 110 mL/strain |  |  |
| Inoue Transformation Buffer | 50 mL/strain | 10mM PIPES/10 mM MOPES (pH 6.8 with acetic acid) <br> manganese chloride MnCl<sub>2</sub> 55mM <br> calcium chloride CaCl<sub>2</sub> 15mM <br> potassium chloride KCl  250 mM |  |
| (Methanesulfinyl)methane = dimethyl sulfoxide DMSO | 750 µL/strain | for 7.5 % in Inoue storage buffer |  |
| glycerol 85 % | 1250 µL/strain | for 10.625 % in Inoue storage buffer |  |

| Biological Materials⠀⠀⠀⠀⠀ | Amount | Specifications| Location |
| :-- | :-- | :-- | :-- |
| one-shot of suitable competent bacteria | 1/strain |  |  |

{{< /tab >}}

{{< tab >}}

## Procedure

### Selecting a suitable Strain

| Strain | Application | Features |
| :-- | :-- | :-- |
| E. coli DH5α | medium-yield plasmid DNA expression <br> (with blue/white screening) |  |
| E. coli TOP10 | high-yield plasmid DNA expression <br> (with blue/white screening) |  |
| E. coli XL1blue | plasmid DNA expression <br> with blue/white screening |  |
| E. coli BL21(DE3) | protein expression | lacUV5 promoter <br> for IPTG induced expression of t-RNA polymerase |
| E. coli BL21(DE3) pLysS | (toxic) protein expression | T7 Inhibitor |
| E. coli Rosetta(DE3) | (eucaryotic) protein expression | lacUV5 promoter <br> for IPTG induced expression of t-RNA polymerase |
| E. coli C41(DE3) | toxic protein expression | lacUV5 promoter <br> for IPTG induced expression of t-RNA polymerase |
| E. coli C43(DE3) | toxic membrane protein expression | lacUV5 promoter <br> for IPTG induced expression of t-RNA polymerase |

### Preparations

1. {{< checkbox >}} Prepare one LB-agar Plate without any antibiotics.
2. {{< checkbox >}} Prepare 110 mL of LB medium.

### Plating Bacteria

1. {{< checkbox >}} Choose a desired strain of Escherichia coli cells.
2. {{< checkbox >}} Plate a one shot directly on a LB-agar Plate.
3. {{< checkbox >}} Let the bacteria grow over night @ 37 °C.

### Pre-culture

1. {{< checkbox >}} Transfer 1 mL of the 110 mL LB medium into a photometer cuvette for the zero value.
2. {{< checkbox >}} Transfer 5 mL of the 109 mL LB medium into a sterile 15 mL falcon tube.
3. {{< checkbox >}} Pick a suitable clone with pipette tip.
4. {{< checkbox >}} Drop pipette tip into the 5 mL of LB medium.
5. {{< checkbox >}} Incubate pre-culture @ 37 °C and shaking @ 250 rpm for approximately 2–4 h until an OD<sub>600</sub> ~ 0.4–0.8 (best 0.6) is reached or incubate @ 30 °C and shaking @ 250 rpm overnight.

<!-- markdownlint-disable MD033 -->
<div style="display:flex; gap:20px; align-items:center;">
{{< timer time="2:00:00" >}}
{{< timer time="3:00:00" >}}
{{< timer time="4:00:00" >}}
</div>
<!-- markdownlint-enable MD033 -->

### Main-culture

1. {{< checkbox >}} Transfer 1 mL of the 104 mL LB medium into a photometer cuvette for the zero value.
2. {{< checkbox >}} Transfer 100 mL LB-medium into a sterile 200 mL Erlenmeyer flask.
3. {{< checkbox >}} Inoculate the 100 mL LB-medium with the pre-culture.
4. {{< checkbox >}} Incubate batch @ 37 °C and shaking @ 250 rpm for approximately 2–4 h until an OD<sub>600</sub> of 0.4 to 0.8 (best 0.6) is reached.

<!-- markdownlint-disable MD033 -->
<div style="display:flex; gap:20px; align-items:center;">
{{< timer time="2:00:00" >}}
{{< timer time="3:00:00" >}}
{{< timer time="4:00:00" >}}
</div>
<!-- markdownlint-enable MD033 -->

### Preparations Before Harvesting

1. {{< checkbox >}} Prepare 50 mL of Inoue transformation buffer from your 10x stock or by supplementing 50mL of PIPES (or alternatively MOPES) buffer 10 mM (pH 6.8 with acetic acid) with MnCl<sub>2</sub> 55 mM, CaCl<sub>2</sub> 15 mM and KCl 250 mM and cool on ice until further use.
2. {{< checkbox >}} Prepare 10 mL of Inoue storage buffer by supplementing 8 mL of Inoue transformation buffer with 750 µL of DMSO (7.5 %) and 1250 µL of Glycerol 85% (10.625 %) and cool on ice until further use.
3. {{< checkbox >}} Pre-cool 80 x sterile 1.5 mL reaction tubes.
4. {{< checkbox >}} Pre-cool a centrifuge to 4 °C for harvesting @ 3000–6000 g.

### Cell harvesting

1. {{< checkbox >}} Transfer the 100 mL of culture into 2 x sterile 50 mL falcon tubes.
2. {{< checkbox >}} Harvest cells by centrifugation @ 3000–6000 g and @ 4 °C for 10 minutes.
{{< timer time="0:10:00" >}}

3. {{< checkbox >}} Discard the medium and let pellet dry overhead on paper towels for 2 minutes.
{{< timer time="0:02:00" >}}

### Generating Competency

1. {{< checkbox >}} Resuspend the pellet in 16 mL of ice-cold Inoue transformation buffer each by rotating end-over-end.
2. {{< checkbox >}} Harvest cells by centrifugation @ 3000–6000 g and @ 4 °C for 10 minutes.
{{< timer time="0:10:00" >}}

3. {{< checkbox >}} Discard the medium and let pellet dry overhead on paper towels for 2 minutes.
{{< timer time="0:02:00" >}}

### Storage

1. {{< checkbox >}} Resuspend the pellet in 4 mL of ice-cold Inoue storage buffer each by rotating end-over-end for 10 minutes.
{{< timer time="0:10:00" >}}

2. {{< checkbox >}} Prepare some liquid nitrogen.
3. {{< checkbox >}} Aliquot the cells in 100 µL fractions in the pre-cooled sterile 1.5 mL reaction tubes.
4. {{< checkbox >}} Immediately freeze aliquots in liquid nitrogen.
5. {{< checkbox >}} Store the one shots at –60 °C.
{{< infobox type="info" title="" >}}
⚠️ Cells from here on are extremely sensitive to temperature increases.
{{< /infobox >}}

### Proceed with Suitable Protocol

{{< /tab >}}

{{< comment_box >}}
{{< save_page >}}

{{< save_journal_label >}}
