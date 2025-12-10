+++
date = '2025-12-07T13:11:31+01:00'
draft = false
construction = false
title = 'Bacterial Transformation following PCR'
subtitle = 'for subsequent plate and liquid culturing for storage, plasmid preparation or protein expression'
author = 'Spike Murphy Müller ¹'
facility = '¹ Center for Experimental Medicine, Institute of Biochemistry and Signal Transduction, Working Group Signal Transduction in Cancer'
version = 'Version 1.0.0'
version_explaination = 'first: major revisions - second: minor revisions - third: revisions without changing procedure'
updated = '10.12.2025'
+++


{{< tab >}}
## Materials
| Equipment & Devices⠀⠀⠀ | Amount | Specifications| Location |
| :-- | :-- | :-- | :-- |
| [heating block <sup>manual</sup>](link) |  | with shaker function |  |
| bucket of ice |  |  |  |

| Commercial Kits⠀⠀⠀⠀⠀⠀ | Amount | Specifications| Location |
| :-- | :-- | :-- | :-- |

| Containers & Consumables | Amount | Specifications| Location |
| :-- | :-- | :-- | :-- |
| pipetmans and sterile pipette tips |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |

| Reagents & Solutions⠀⠀⠀⠀ | Amount | Specifications| Location |
| :-- | :-- | :-- | :-- |
| Luria-Bertani medium | 1 mL/one-shot |  |  |
| LB agar plate | 2/one-shot | with suitable selection antibiotic <br> with X-gal for blue-white selection |  |
| X-gal |  | for blue/white selection if not already in plate |  |

| Biological Materials⠀⠀⠀⠀⠀ | Amount | Specifications| Location |
| :-- | :-- | :-- | :-- |
|  |  |  |  |
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

### Preparations:
1. <input type="checkbox"> Thaw a reaction tube of competent bacteria on ice.
2. <input type="checkbox"> Thaw the Plasmid on ice.
3. <input type="checkbox"> Pre-warm 1000 µL of LB medium to 37 °C.
### Vector Generation from PRC Produkt:
1. Prepare the mastermix:

|  | Volume | Reagent | Concentration c<sub>1</sub> [ng/µL] <br> Mass m<sub>1</sub> [ng] | Concentration c<sub>2</sub> [ng/µL] <br> Mass m<sub>2</sub> [ng] |
| :-- | :-- | :-- | :-- | :-- |
| <input type="checkbox"> | 8.5-9.5 µL | dsH<sub>2</sub>O |  |  |
| <input type="checkbox"> | 2.5 µL | buffer | 10x |  |
| <input type="checkbox"> | 1 µL | ATP | 12.5 mM | 500 µM |
| <input type="checkbox"> | 1 µL | T4 DNA ligase | 1 U/µL |  |
| <input type="checkbox"> | 1-2µL | restriction enzyme(s) of choice |  |  |
|  | = 15µL |  |  |  |

<!-- anpassen mittels sample volume +1-->

1. Prepare the reaction mix:

|  | Volume | Reagent | Concentration c<sub>1</sub> [ng/µL] <br> Mass m<sub>1</sub> [ng] | Concentration c<sub>2</sub> [ng/µL] <br> Mass m<sub>2</sub> [ng] |
| :-- | :-- | :-- | :-- | :-- |
| <input type="checkbox"> | 15 µL | mastermix |  |  |
| <input type="checkbox"> | 7.5 µL | PCR product | 10 ng/µL |
| <input type="checkbox"> | 2.5 µL | acceptor vector | 10 ng/µL |  |
|  | = 25 µL |  |  |  |

3. Incubate at the optimal restriction temperature (default 37 °C) for at least 1h.
<div style="display:flex; gap:20px; align-items:center;">
{{< timer time="1:00:00" >}}
{{< timer time="2:00:00" >}}
</div>

### Transformation:
1. <input type="checkbox"> Add 10 µL of the reaction a one shot of 50–100 µL of competent cells.
2. <input type="checkbox"> Store the residual 15 µL of the reaction mix as a backup @ 4°C for short time storage or at -20°C for longtime storage.
3. <input type="checkbox"> Mix by flicking or gentle stirring.
4. <input type="checkbox"> Incubate on ice for 30 minutes.
{{< timer time="0:30:00" >}}
5. <input type="checkbox"> Incubate in a heating block or water bath @ 42 °C for 45 to 60 seconds.
{{< timer time="0:01:00" >}}
6. <input type="checkbox"> Incubate on ice for 5 minutes.
{{< timer time="0:05:00" >}}
7. <input type="checkbox"> Add 900 µL LB medium.
8. <input type="checkbox"> Incubate on a heating block @ 37 °C and @ 250 rpm for 1 h.
{{< timer time="1:00:00" >}}
### Plate Preparation:
1. <input type="checkbox"> Take two LB-agar Plates containing the appropriate antibiotic out of the fridge and let them warm up to RT.
2. <input type="checkbox"> For blue/white selection plate 20 µL of X-Gal on the Plates and let dry before plating any bacteria.
### Plating:
1. <input type="checkbox"> Plate 100 µL of the 1000 μL bacterial suspension on one of the LB agar Plate.
2. <input type="checkbox"> Centrifuge the residual 900 µL @ 11,000 g for 30 s. 
{{< timer time="0:00:30" >}}
3. <input type="checkbox"> Discard the supernatant.
4. <input type="checkbox"> Remove residual supernatant with a 100 µL pipette.
5. <input type="checkbox"> Resuspend the bacteria pellet in 100 µL LB medium.
6. <input type="checkbox"> Plate the 100 µL on the second LB agar Plate.
7. <input type="checkbox"> Incubate the plates at 37 °C overnight or for blue/white selection for up to 48 h.
### Proceed with Suitable Follow-up Protocol.
- 	[Bacterial Expression Culture](/content/methodes/bacteria/expression_culture.md)
- 	[Bacterial Plasmid Preparation Culture](/content/methodes/bacteria/plasmid_prep_culture.md)
{{< /tab >}}