+++
date = '2025-12-07T20:29:16+01:00'
draft = false
construction = false
title = 'SDS-PAGE Laemmli Sample Buffer'
subtitle = ''
author = ['Spike Murphy Müller ¹']
affiliation = ['¹ Center for Experimental Medicine, Institute of Biochemistry and Signal Transduction, Working Group Signal Transduction in Cancer']
sponsored = false
sponsor = ''
version = 'Version 1.0.0'
version_explanation = 'first: major revisions - second: minor revisions - third: revisions without changing procedure'
updated = '22.12.2025'
finished = true
tested = false
+++
<!-- DONE: tested = true, delete -->

{{< tab >}}

## Materials

<!-- markdownlint-disable MD033 -->
| Material | Molecular Weight | Specifications | Location |
| :-- | :-- | :-- | :-- |
| tris-HCl 0.5 M pH 6.8 [<sup>SDS</sup>](https://www.carlroth.com/.../) | 121.136 g/mol | stock solution | {{< chemical_location chemical="trishcl500_liquid" >}} |
| sodium dodecyl sulfate *SDS* 347 mM (10 %) | 288.38 g/mol | stock solution | {{< chemical_location chemical="sds10_liquid" >}} |
| glycerol 9.23 M (85 %) | 92.094 g/mol | stock solution | {{< chemical_location chemical="glycerol85_liquid" >}} |
| [3,3-Bis(3,5-dibromo-4-hydroxyphenyl)-2,1λ6-benzoxathiole-1,1(3H)-dione (= bromphenol blue) 1.49 mM (0.1%)]({{< relref "bromphenol_blue.md" >}}) | 669.99 g/mol | stock solution | {{< chemical_location chemical="bromphenoleblue_liquid" >}} |
| deionized sterilized Water *dsH<sub>2</sub>O* | 18.015 g/mol | liquid | |
<!-- markdownlint-enable MD033 -->

{{< /tab >}}

{{< tab >}}

## Recipe

{{< calculators/calc_recipe_x >}}
<!-- { {< calculators/calc_recipe_vol >}} -->
<!-- { {< calculators/calc_recipe_mol >}} -->

<!-- markdownlint-disable MD033 -->
| | Material/Step | Volume/Mass | molar/%/comment |
| :-- | :-- | :-- | :-- |
| {{< checkbox >}} | tris-HCl | <span class="calc_recipe_x" data-default-mass="125" data-mass-unit="mL">125 mL</span> | <span class="calc_recipe_x" data-default-mol="62.5">62.5 mM</span> |
| {{< checkbox >}} | glycerol | <span class="calc_recipe_x" data-default-mass="125" data-mass-unit="mL">125 mL</span> | <span class="calc_recipe_x" data-default-mol="1154">1154 mM (10.6 %)</span> |
| {{< checkbox >}} | SDS | <span class="calc_recipe_x" data-default-mass="200" data-mass-unit="mL">200 mL</span> | <span class="calc_recipe_x" data-default-mol="69.4">69.4 mM</span> |
| {{< checkbox >}} | bromphenol blue | <span class="calc_recipe_x" data-default-mass="20" data-mass-unit="mL">20 mL</span> | <span class="calc_recipe_x" data-default-mol="0.0298">0.0298 mM</span> |
| {{< checkbox >}} | dsH<sub>2</sub>O | <span class="calc_recipe_x" data-default-vol="530">530 mL (0.002% w/v)</span> <!-- CONTENT_TODO: calculate % as well --> | to <span class="calc_recipe_x" data-default-vol="1000">1000 mL</span> |
<!-- markdownlint-enable MD033 -->

{{< /tab >}}

{{< tab >}}

## Use Cases

| Use Case | Specifications |
| :-- | :-- |
| [SDS-PAGE]({{<relref "sds-page.md" >}}) | Typically ad 2x or 4x sample buffer diluted in the sample to a 1x buffer |

{{< /tab >}}

{{< tab >}}

## Storage

| Conditions | Duration |
| :-- | :-- |
| @ 25 °C | 6-12 month |
| @ 4 °C | |
| @ -20 °C | |
| @ –80 °C | |

{{< /tab >}}

{{< comment_box >}}
{{< save_page >}}

{{< save_journal_label >}}
