+++
date = '2025-12-08T15:42:59+01:00'
draft = false
construction = false
title = 'Polymerase Chain Reaction (PCR) with Fusion Hot Start II DNA Polymerase'
subtitle = ''
author = 'Spike Murphy Müller ¹'
facility = '¹ Center for Experimental Medicine, Institute of Biochemistry and Signal Transduction, Working Group Signal Transduction in Cancer'
version = 'Version 1.0.1'
version_explaination = 'first: major revisions - second: minor revisions - third: revisions without changing procedure'
updated = '08.12.2025'
+++

{{< infobox type="warning" title="" >}}
❗️ Attention: Reagents and Parameters for T<sub>m</sub>/T<sub>a</sub> as well as t<sub>e</sub> only applie for the Fusion Hot Start II DNA Polymeras.
{{< /infobox >}}

{{< tab >}}
## Materials
| Equipment & Devices⠀⠀⠀  | Amount| Specifications| Location |
| :-- | :-- | :-- | :-- |
| Thermocycler |  |  |  |
| [NEB T<sub>m</sub> calculator](https://tmcalculator.neb.com/#!/main) |  |  |  |
| [ThermoFisher Scientific T<sub>m</sub> calculator](https://www.thermofisher.com/de/de/home/brands/thermo-scientific/molecular-biology/molecular-biology-learning-center/molecular-biology-resource-library/thermo-scientific-web-tools/tm-calculator.html) |  |  |  |

| Commercial Kits⠀⠀⠀⠀⠀⠀  | Amount| Specifications| Location |
| :-- | :-- | :-- | :-- |

| Containers & Consumables  | Amount| Specifications| Location |
| :-- | :-- | :-- | :-- |
| pipetmans and sterile pipette tips |  |  |  |  |
| PCR reaction tubes 0.5 mL | 1/sample | for sample preparation |  |
| reaction tubes 1.5 mL | 1/30 samples | for mastermix preparation |  |

| Reagents & Solutions⠀⠀⠀⠀  | Amount| Specifications| Location |
| :-- | :-- | :-- | :-- |
| dsH<sub>2</sub>O | 61 µL/sample | for mastermix preparation |  |
| GC buffer | 20 µL/sample | for mastermix preparation |  |
| DMSO | 3 µL/sample | for mastermix preparation |  |
| **dNTPs** <br> dATP, dTTP, dGTP, dCTP 10 mM each <br> dNTP mix 10 mM | <br> 0.5 µL/sample each <br> 2 µL/sample | <br> for mastermix preparation <br> for mastermix preparation |  |

| Biological Materials⠀⠀⠀⠀⠀  | Amount| Specifications| Location |
| :-- | :-- | :-- | :-- |
| forward primer 10 µM | 2.5 µL/sample |  |  |
| reverse primer 10 µM | 2.5 µL/sample |  |  |
| DNA template with GOI 10 ng/µL | 1 µL/sample |  |  |
| Phusion Hot Start II DNA polymerase 2 U/µL | 1 µL/sample |  |  |

{{< /tab >}}

{{< tab >}}
## Procedure:
### Calculating the annealing temperature and elongation duration for the GOI:
{{< infobox type="info" title="Annealing Temperature Calculation" >}}
The annealing temperature T<sub>a</sub> can be calculated from the melting temperature T<sub>m</sub> or looked up within SnapGene.
   
T<sub>m</sub> = 4×(GC-Pairing) + 2×(AT-Pairing)  
T<sub>a</sub> = T<sub>m</sub>– 4

❗️ Non-functional at the moment.
{{< tm >}}
⚠️ Those values are specific for the Phusion HS II DNA polymerase with GC buffer.  
❗️ Plese check all values with e.g. NEB Tm calculator or Thermofisher Scientific Tm calculator.
{{< /infobox >}}
{{< infobox type="info" title="" >}}
Elongation time for Phusion HS II is 30–60 sec/1kb.
  
t<sub>e</sub> = bp/1000 × 30 sec
{{< seqtime >}}
{{< /infobox >}}

### Preparing the Thermocycler:
1. Enter the Programm into the Termocycler:  
{{< infobox type="info" title="" >}}
*CNTRL	BLOCK*  
*LID=105°*  
*NOWAIT	AUTO*  
*1 T=98.0°C	0:00:30	(initial denaturation)*  
*2 T=98.0°C	0:00:10	(cycle1: denaturation)*  
*3 T=xx°C	0:00:30	(cycle1: primer annealing)*  
*4 T=72.0°C	0:xx:xx	(cycle1: elongation)*
*5 GOTO 2 	REP 19	(sum: 20 cycles)*  
*6 T=72.0°C	0:08:00	(final incubation)*  
*7 HOLD 4°C*  
*End*  
<p>
  T<sub>a</sub>: <input type="text" id="ta-input" value="" style="width:80px;"> °C
</p>
<p>
  t<sub>e</sub>: <input type="text" id="te-input" value="" style="width:80px;"> seconds
</p>
{{< /infobox >}}

### Preparing the Samples and Running the Program:
{{< infobox type="info" title="" >}}
ℹ️ Prepare a mastermix when doing multiple samples containing dsH<sub>2</sub>O, GC buffer, DMSO and dNTP. Use number of samples plus at least one for the mastermix volume multiplyer.
{{< /infobox >}}

1. <input type="checkbox"> Prepare a Mastermix:

|  | Volume V [µL] | Reagent | c<sub>1</sub>/m<sub>1</sub> | c<sub>2</sub>/m<sub>2</sub> |
| :-- | :-- | :-- | :-- | :-- |
| <input type="checkbox"> | <span class="pcr" data-base="30.5">30.5</span> µL | dsH<sub>2</sub>O |  |  |
| <input type="checkbox"> | <span class="pcr" data-base="10">10</span> µL | GC buffer | 5x | 1x |
| <input type="checkbox"> | <span class="pcr" data-base="1.5">1.5</span> µL | DMSO | 100 % |  |
| <input type="checkbox"> | <span class="pcr" data-base="1">1</span> µL | dNTP mix | 10 mM | 200 µM |
|  | = <span class="pcr" data-base="43">43</span> µL |  |  |  |
{{< pcr_mastermix_prep_calc >}}
2. <input type="checkbox"> Prepare samples with mastermix by pipetting the following volumes into a 0.5 mL PCR tube:

|  | Volume V [µL] | Reagent | c<sub>1</sub>/m<sub>1</sub> | c<sub>2</sub>/m<sub>2</sub> |
| :-- | :-- | :-- | :-- | :-- |
| <input type="checkbox"> | 43 µL  | Mastermix |  |  |
| <input type="checkbox"> | 2.5 µL| Forward Primer | 10 µM | 0.5µM |
| <input type="checkbox"> | 2.5 µL| Reverse Primer | 10 µM | 0.5µM |
| <input type="checkbox"> | 1 µL | DNA Template | 10 ng/µL | 200 pg/µL |
| <input type="checkbox"> | 1 µL | Phusion Hot Start II DNA Polymerase| 2 U/µL | 2 U |
|  | = 50 µL |  |  |  |  

Alternatively prepare samples individually by pipetting the following volumes into a 0.5 mL PCR tube:  
|  | Volume V [µL] | Reagent | c<sub>1</sub>/m<sub>1</sub> | c<sub>2</sub>/m<sub>2</sub> |
| :-- | :-- | :-- | :-- | :-- |
| <input type="checkbox"> | 30.5 µL | dsH<sub>2</sub>O |  |  |
| <input type="checkbox"> | 10 µL | GC buffer | 5x | 1x |
| <input type="checkbox"> | 1.5 µL | DMSO | 100 % |  |
| <input type="checkbox"> | 1 µL | dNTP mix | 10 mM | 200 µM |
| <input type="checkbox"> | 2.5 µL| Forward Primer | 10 µM | 0.5µM |
| <input type="checkbox"> | 2.5 µL| Reverse Primer | 10 µM | 0.5µM |
| <input type="checkbox"> | 1 µL | DNA Template | 10 ng/µL | 200 pg/µL |
| <input type="checkbox"> | 1 µL | Phusion Hot Start II DNA Polymerase| 2 U/µL | 2 U |
|  | = 50 µL |  |  |  |


2. <input type="checkbox"> Place the PCR tubes into the Thermocycler with maximum disance between samples.
3. <input type="checkbox"> Start the PCR program.

### Procede with Suitable Protocol:
- [Agarose Gel Electrophoresis (AGE)]({{< relref "methodes/dna/age.md" >}})
{{< /tab >}}

{{< comment_box >}}
{{< save_page >}}