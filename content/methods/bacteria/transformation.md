+++
date = '2025-12-07T13:11:31+01:00'
draft = false
construction = false
title = 'Bacterial Transformation'
subtitle = 'for subsequent plate and liquid culturing for storadge, plasmid preparation or protein expression'
author = ['Spike Murphy Müller ¹']
affiliation = ['¹ Center for Experimental Medicine, Institute of Biochemistry and Signal Transduction, Working Group Signal Transduction in Cancer']
sponsored = false
sponsor = ''
version = 'Version 1.0.1'
version_explanation = 'first: major revisions - second: minor revisions - third: revisions without changing procedure'
updated = '20.12.2025'
finished = true
tested = true
time = '3-4 h'
+++

{{< tab >}}

## Materials

| Equipment & Devices⠀⠀⠀ | Amount | Specifications | Location |
| :-- | :-- | :-- | :-- |
| laminar airflow workbench [<sup>manual</sup>]() | | | |
| heating block [<sup>manual</sup>]() | | with shaker function | |
| bucket of ice | | | |

| Commercial Kits⠀⠀⠀⠀⠀⠀ | Amount | Specifications | Location |
| :-- | :-- | :-- | :-- |

| Containers & Consumables | Amount | Specifications | Location |
| :-- | :-- | :-- | :-- |
| micropipettes and sterile pipette tips | | | |
| reaction tube 1.5 mL | 1/transformation | for LB medium | |

| Reagents & Solutions⠀⠀⠀⠀ | Amount | Specifications | Location |
| :-- | :-- | :-- | :-- |
| Luria-Bertani medium | 1 mL/one-shot | | |
| LB agar plate | 2/one-shot | with suitable selection antibiotic <br> with X-gal for blue-white selection | |
| X-gal | | for blue/white selection if not already in plate | |

| Biological Materials⠀⠀⠀⠀⠀ | Amount | Specifications | Location |
| :-- | :-- | :-- | :-- |
| plasmid | 1–10 ng (e.g. 0.5–5 µL of 2 ng/µL) <br> 100-200 ng (e.g. 1-2 µL of 100 ng/µL) | for standard transformations <br> for difficult transformations | |
| one-shot of suitable competent bacteria | 1/transformation | | |

{{< /tab >}}

{{< tab >}}

## Procedure

### Selecting a suitable Strain

| | Strain | Application | Features |
| :-- | :-- | :-- | :-- |
| {{< checkbox >}} | E. coli DH5α | medium-yield plasmid DNA expression <br> (with blue/white screening) | |
| {{< checkbox >}} | E. coli TOP10 | high-yield plasmid DNA expression <br> (with blue/white screening) | |
| {{< checkbox >}} | E. coli XL1blue | plasmid DNA expression <br> with blue/white screening | |
| {{< checkbox >}} | E. coli BL21(DE3) | protein expression | lacUV5 promoter <br> for IPTG induced expression of t-RNA polymerase |
| {{< checkbox >}} | E. coli BL21(DE3) pLysS | (toxic) protein expression | lacUV5 promoter <br> for IPTG induced expression of t-RNA polymerase <br> T7 Inhibitor |
| {{< checkbox >}} | E. coli Rosetta(DE3) | (eucaryotic) protein expression | lacUV5 promoter <br> for IPTG induced expression of t-RNA polymerase |
| {{< checkbox >}} | E. coli Rosetta(DE3) pLysS | (eucaryotic) protein expression | lacUV5 promoter <br> for IPTG induced expression of t-RNA polymerase <br> T7 Inhibitor |
| {{< checkbox >}} | E. coli C41(DE3) | toxic protein expression | lacUV5 promoter <br> for IPTG induced expression of t-RNA polymerase |
| {{< checkbox >}} | E. coli C43(DE3) | toxic membrane protein expression | lacUV5 promoter <br> for IPTG induced expression of t-RNA polymerase |

### Preparations

1. {{< checkbox >}} Thaw a one-shot of competent bacteria per transformation on ice for approximately 5 minutes.
{{< timer time="0:05:00" >}}

2. {{< checkbox >}} Thaw the Plasmid on ice.
3. {{< checkbox >}} Pre-warm 1000 µL of LB medium per transformation to 37 °C.

### Transformation

1. {{< checkbox >}} Add 1–10 ng (up to 100-200 ng for difficult dransformations) of plasmid DNA to a one shot of 50–100 µL of competent cells.
2. {{< checkbox >}} Mix the bacteria by flicking or gentle stirring.
3. {{< checkbox >}} Incubate transformation mix on ice for 30 minutes.
{{< timer time="0:30:00" >}}

4. {{< checkbox >}} Pre-heat a heating block or water bath to 42 °C.
5. {{< checkbox >}} Incubate transformation mix in a heating block or water bath @ 42 °C for 45 to 60 seconds.
{{< timer time="0:01:00" >}}

6. {{< checkbox >}} Incubate transformation mix on ice for 5 minutes.
{{< timer time="0:05:00" >}}

7. {{< checkbox >}} Add 900 µL LB medium to the transformation mix.
8. {{< checkbox >}} Incubate transformation mix on a heating block @ 37 °C and @ 250 rpm for 1 h.
{{< timer time="1:00:00" >}}

### Plate Preparation

1. {{< checkbox >}} Take two LB-agar Plates containing the appropriate antibiotic out of the fridge and let them warm up to RT.
2. {{< checkbox >}} For blue/white selection plate 20 µL of X-Gal on the Plates and let dry before plating any bacteria.

### Plating

1. {{< checkbox >}} Plate 100 µL of the 1000 μL bacterial suspension on one of the LB agar Plate.
2. {{< checkbox >}} Centrifuge the residual 900 µL @ 11,000 g for 30 s.
{{< timer time="0:00:30" >}}

3. {{< checkbox >}} Discard the supernatant.
4. {{< checkbox >}} Remove residual supernatant with a 100 µL pipette.
5. {{< checkbox >}} Resuspend the bacteria pellet in 100 µL LB medium.
6. {{< checkbox >}} Plate the 100 µL on the second LB agar Plate.
7. {{< checkbox >}} Incubate the plates at 37 °C overnight or for blue/white selection for up to 48 h.

{{< infobox type="info" title="" >}}
ℹ️ Plates can be stored @ 4°C for up to four weeks.
{{< /infobox >}}

### Procede with Suitable Protocol

- [Bacterial Expression Culture]({{< relref "/methods/bacteria/protein_expression_culture.md" >}})
- [Bacterial Plasmid Preparation Culture]({{< relref "/methods/bacteria/plasmid_prep_culture.md" >}})
{{< /tab >}}

{{< comment_box >}}
{{< save_page >}}

{{< save_journal_label >}}
