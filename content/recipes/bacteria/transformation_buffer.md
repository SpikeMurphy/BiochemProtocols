+++
date = '2025-12-07T20:23:37+01:00'
draft = false
construction = false
title = 'Inoue Transformation Buffer'
subtitle = ''
author = 'Spike Murphy Müller ¹'
facility = '¹ Center for Experimental Medicine, Institute of Biochemistry and Signal Transduction, Working Group Signal Transduction in Cancer'
version = 'Version 1.0.2'
version_explanation = 'first: major revisions - second: minor revisions - third: revisions without changing procedure'
updated = '17.12.2025'
finished = true
tested = false
+++
<!-- NEW: delete when finished = true + tested = true -->

{{< tab >}}
## Materials
| Material | Molecular Weight | Specifications | Location |
| :-- | :-- | :-- | :-- |
| <span id="alt_inouetransformationbufferstock10x_m_m_pipes">PIPES [<sup>SDS</sup>](https://www.carlroth.com/.../)</span>     <span id="alt_inouetransformationbufferstock10x_m_m_mopes" style="display:none">MOPES [<sup>SDS</sup>](https://www.carlroth.com/.../)</span> {{< alternative_switches/alt_inouetransformationbufferstock10x_pipes >}} | <span id="alt_inouetransformationbufferstock10x_m_mw_pipes">302.37 g/mol</span>     <span id="alt_inouetransformationbufferstock10x_m_mw_mopes" style="display:none">241.26 g/mol</span> | <span id="alt_inouetransformationbufferstock10x_m_specs_pipes">solid</span>     <span id="alt_inouetransformationbufferstock10x_m_specs_mopes" style="display:none">solid, alternative buffer</span> | <span id="alt_inouetransformationbufferstock10x_m_l_pipes"></span><span id="alt_inouetransformationbufferstock10x_m_l_mopes" style="display:none"></span> |
| manganese chloride tetrahydrat *MnCl<sub>2</sub> · 4 H<sub>2</sub>O* [<sup>SDS</sup>](https://www.carlroth.com/.../) | 197.91 g/mol | solid |  |
| calcium chloride dihydrate *CaCl<sub>2</sub> · 2 H<sub>2</sub>O* [<sup>SDS</sup>](https://www.carlroth.com/.../) | 147.01 g/mol | solid |  |
| potassium chloride *KCl* [<sup>SDS</sup>](https://www.carlroth.com/.../) | 74.55 g/mol | solid |  |
| deionized sterilizes Water *dsH<sub>2</sub>O* |  |  |  |
| acetic acid *CH<sub>3</sub>COOH* [<sup>SDS</sup>](https://www.carlroth.com/.../) |  |  |  |
| bucket of ices |  |  |  |
| vacuum filter |  | 0.22 µm |  |

{{< /tab >}}

{{< tab >}}
## Recipe 
{{< calculators/calc_recipe_x >}}

|  | Material/Step | Volume/Mass | molar/%/comment |
| :-- | :-- | :-- | :-- |
| {{< checkbox >}} | <span id="alt_inouetransformationbufferstock10x_r_ms_pipes">PIPES</span>     <span id="alt_inouetransformationbufferstock10x_r_ms_mopes" style="display:none">MOPES</span> | <span id="alt_inouetransformationbufferstock10x_r_vm_pipes" class="calc_recipe_x" data-default-mass="30.0">30.0 g</span>     <span id="alt_inouetransformationbufferstock10x_r_vm_mopes" style="display:none" class="calc_recipe_x" data-default-mass="21.0">21.0 g</span> | <span id="alt_inouetransformationbufferstock10x_r_mol_pipes" class="calc_recipe_x" data-default-mol="10">10 mM</span>     <span id="alt_inouetransformationbufferstock10x_r_mol_mopes" style="display:none" class="calc_recipe_x" data-default-mol="10">10 mM</span> |
| {{< checkbox >}} | MnCl<sub>2</sub> | <span class="calc_recipe_x" data-default-mass="10.89">10.89 g</span> | <span class="calc_recipe_x" data-default-mol="55">55 mM</span> |
| {{< checkbox >}} | CaCl<sub>2</sub> | <span class="calc_recipe_x" data-default-mass="2.20">2.20 g</span>  | <span class="calc_recipe_x" data-default-mol="15">15 mM</span> |
| {{< checkbox >}} | KCl | <span class="calc_recipe_x" data-default-mass="18.65">18.65 g</span>  | <span class="calc_recipe_x" data-default-mol="250">250 mM</span> |
| {{< checkbox >}} | dsH<sub>2</sub>O | to <span class="calc_recipe_x" data-default-vol="800">800 mL</span>  |  |
| {{< checkbox >}} | optionally cool on ice for approximately 30 minutes |  |  |
| {{< checkbox >}} | adjust pH to 6.8 with acetic acid |  |  |
| {{< checkbox >}} | dsH<sub>2</sub>O | to <span class="calc_recipe_x" data-default-vol="1000">1000 mL</span>  |  |
| {{< checkbox >}} | filter through 0.22 µm vacuum filter |  |  | 
| {{< checkbox >}} | store @ 4 °C or in 50 mL aliquots @ –20 °C |  |  |
{{< /tab >}}

{{< timer time="0:30:00" >}}

{{< tab >}}
## Use Cases
| Use Case | Specifications |
| :-- | :-- |
| [Chemically Competent Bacteria Generation]({{< relref "/methods/bacteria/chemically_competent_bacteria.md">}})| 50 mL of 1x Inoue transformation buffer for bacterial transformation with 8 mL being used for Inoue storage buffer  |
{{< /tab >}}

{{< tab >}}
## Storage
| Conditions | Duration |
| :-- | :-- |
|@ 25 °C | 1 day |
|@ 4 °C | 1 month |
|@ -20 °C | 12 month |
|@ –80 °C |  |
{{< /tab >}}

{{< comment_box >}}
{{< save_page >}}

{{< save_journal_label >}}