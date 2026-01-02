+++
date = '2025-12-07T13:11:31+01:00'
draft = false
construction = false
title = 'Bacterial Transformation Following PCR and Gel Extraction'
subtitle = 'for subsequent plate and liquid culturing for storage, plasmid preparation or protein expression'
author = ['Spike Murphy Müller ¹']
affiliation = ['¹ Center for Experimental Medicine, Institute of Biochemistry and Signal Transduction, Working Group Signal Transduction in Cancer']
sponsored = false
sponsor = ''
version = 'Version 1.0.0'
version_explanation = 'first: major revisions - second: minor revisions - third: revisions without changing procedure'
updated = '10.12.2025'
finished = false
tested = false
+++
<!-- CONTENT_NEW: delete when finished = true + tested = true -->

{{< tab >}}
## Materials
| Equipment & Devices⠀⠀⠀ | Amount | Specifications| Location |
| :-- | :-- | :-- | :-- |
| heating block |  | with shaker function |  |
| bucket of ice |  |  |  |

| Commercial Kits⠀⠀⠀⠀⠀⠀ | Amount | Specifications| Location |
| :-- | :-- | :-- | :-- |

| Containers & Consumables | Amount | Specifications| Location |
| :-- | :-- | :-- | :-- |
| micropipettes and sterile pipette tips |  |  |  |
| reaction tube 1.5 mL | 1/80 transformations <br> 1/transformation <br> 1/transformation | for mastermix <br> for reaction <br> for LB medium |  |

| Reagents & Solutions⠀⠀⠀⠀ | Amount | Specifications| Location |
| :-- | :-- | :-- | :-- |
| Luria-Bertani medium | 1 mL/transformations |  |  |
| LB agar plate | 2/transformations | with suitable selection antibiotic <br> with X-gal for blue-white selection |  |
| X-gal |  | for blue/white selection if not already in plate |  |
| restriction enzyme buffer 10x | 2.5 µL/transformation | default: 10 Tango buffer |  |


| Biological Materials⠀⠀⠀⠀⠀ | Amount | Specifications| Location |
| :-- | :-- | :-- | :-- |
| suitable restriction enzyme(s) | ~1-2 µL/transformation |  |  |
| T4 DNA ligase 1 U/µL | ~1 µL/transformation |  |  |
| PCR product | 7.5 µL | 10 ng/µL  |  |
| acceptor plasmid | 2.5 µL | 10 ng/µL  |  |
| one-shot of suitable competent bacteria | 1/transformation |  |  |

{{< /tab >}}

{{< tab >}}
## Procedure:
### Selecting a suitable Strain:

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

### Vector Generation from PRC Produkt:
1. {{< checkbox >}} Prepare the mastermix:

|  | Volume | Reagent | Concentration c<sub>1</sub> [ng/µL] <br> Mass m<sub>1</sub> [ng] | Concentration c<sub>2</sub> [ng/µL] <br> Mass m<sub>2</sub> [ng] |
| :-- | :-- | :-- | :-- | :-- |
| {{< checkbox >}} | <span  id="h2o2-vol" class="t_from_pcr_mm" data-base="8.5">8.5</span> µL | dsH<sub>2</sub>O |  |  |
| {{< checkbox >}} | <span  id="r-buffer-vol" class="t_from_pcr_mm" data-base="2.5">2.5</span> µL| restriction enzyme buffer (default: Tango buffer) | 10x |  |
| {{< checkbox >}} | <span  id="dtt_atp-vol" class="t_from_pcr_mm" data-base="1">1</span> µL | DTT/ATP | 250 mM/12.5 mM | 10 mM/500 µM |
| {{< checkbox >}} | <span  id="t4-vol" class="t_from_pcr_mm" data-base="1">1</span> µL | T4 DNA ligase | 1 U/µL |  |
| {{< checkbox >}} | <span  id="enzyme-vol" class="t_from_pcr_mm" data-base="1">1</span> µL | restriction enzyme(s) of choice | {{< calculators/transformation_from_pcr_enzyme_amount_select target="enzyme-vol" >}} |  |
|  | = <span  id="sum-vol" class="t_from_pcr_mm" data-base="15">15</span> µL |  |  |  |

{{< calculators/transformation_from_pcr_mastermix_prep_calc >}}

{{< infobox type="info" title="" >}}
ℹ️ DTT protects ATP from degradation and can help to form a reducing environment in the reaction which protects enzyme function by inhibiting formation of disulfid bridges.
{{< /infobox >}}

2. {{< checkbox >}} Prepare the reaction mix:

|  | Volume | Reagent | Concentration c<sub>1</sub> [ng/µL] <br> Mass m<sub>1</sub> [ng] | Concentration c<sub>2</sub> [ng/µL] <br> Mass m<sub>2</sub> [ng] |
| :-- | :-- | :-- | :-- | :-- |
| {{< checkbox >}} | 15 µL | mastermix |  |  |
| {{< checkbox >}} | 7.5 µL | PCR product | 10 ng/µL |
| {{< checkbox >}} | 2.5 µL | acceptor vector | 10 ng/µL |  |
|  | = 25 µL |  |  |  |

3. Incubate the reaction mix at the optimal restriction temperature (default 37 °C) for at least 1h.
<div style="display:flex; gap:20px; align-items:center;">
{{< timer time="1:00:00" >}}
{{< timer time="2:00:00" >}}
</div>

### Transformation Preparations:
1. {{< checkbox >}} Thaw a one-shot of competent bacteria per transformation on ice for approximately 5 minutes.
{{< timer time="0:05:00" >}}

2. {{< checkbox >}} Pre-warm 1100 µL of LB medium per transformation to 37 °C.
### Transformation:
1. {{< checkbox >}} Add 10 µL of the reaction a one shot of 50–100 µL of competent cells.
2. {{< checkbox >}} Store the residual 15 µL of the reaction mix as a backup @ 4°C for short time storage or at -20°C for longtime storage.
3. {{< checkbox >}} Mix the bacteria by flicking or gentle stirring.
4. {{< checkbox >}} Incubate transformation mix on ice for 30 minutes.
{{< timer time="0:30:00" >}}

5. {{< checkbox >}} Pre-heat a heating block or water bath to 42 °C.
5. {{< checkbox >}} Incubate transformation mix in a heating block or water bath @ 42 °C for 45 to 60 seconds.
{{< timer time="0:01:00" >}}

6. {{< checkbox >}} Incubate transformation mix on ice for 5 minutes.
{{< timer time="0:05:00" >}}

7. {{< checkbox >}} Add 900 µL LB medium to the transformation mix.
8. {{< checkbox >}} Incubate transformation mix on a heating block @ 37 °C and @ 250 rpm for 1 h.
{{< timer time="1:00:00" >}}

### Plate Preparation:
1. {{< checkbox >}} Take two LB-agar Plates containing the appropriate antibiotic out of the fridge and let them warm up to RT.
2. {{< checkbox >}} For blue/white selection plate 20 µL of X-Gal on the Plates and let dry before plating any bacteria.
### Plating:
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

### Procede with Suitable Protocol:
- 	[Bacterial Expression Culture](/content/methods/bacteria/expression_culture.md)
- 	[Bacterial Plasmid Preparation Culture](/content/methods/bacteria/plasmid_prep_culture.md)
{{< /tab >}}

{{< comment_box >}}
{{< save_page >}}

{{< save_journal_label >}}
