+++
date = '2025-12-07T20:23:55+01:00'
draft = false
construction = false
title = 'Tris-Buffered Saline (TBS)'
subtitle = ''
author = ['Spike Murphy Müller ¹']
affiliation = ['¹ Center for Experimental Medicine, Institute of Biochemistry and Signal Transduction, Working Group Signal Transduction in Cancer']
sponsored = false
sponsor = ''
version = 'Version 1.0.0'
version_explanation = 'first: major revisions - second: minor revisions - third: revisions without changing procedure'
updated = ''
finished = false
tested = false
+++
<!-- DONE: tested = true, delete -->

{{< tab >}}

## Materials

<!-- markdownlint-disable MD033 -->
| Material | Molecular Weight | Specifications | Location |
| :-- | :-- | :-- | :-- |
| tris base [<sup>SDS</sup>](https://www.carlroth.com/.../) | 121.14 g/mol | solid | {{< chemical_location chemical="tris_solid" >}} |
| sodium chloride *NaCl* [<sup>SDS</sup>](https://www.carlroth.com/.../) | 58.44 g/mol | solid | {{< chemical_location chemical="nacl_solid" >}} |
| hydrogen chloride *HCl* 3.47 mM (25 %) | 36.46 g/mol | stock solution | {{< chemical_location chemical="hcl25_liquid" >}} |
| deionized sterilized Water *dsH<sub>2</sub>O* | 18.015 g/mol | solvent | |
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
| {{< checkbox >}} | tris | <span class="calc_recipe_x" data-default-mass="2.4">2.4 g</span> | <span class="calc_recipe_x" data-default-mol="19.8">19.8 mM</span> |
| {{< checkbox >}} | NaCl | <span class="calc_recipe_x" data-default-mass="8.8">8.8 g</span> | <span class="calc_recipe_x" data-default-mol="150">150 mM</span> |
| {{< checkbox >}} | HCl | ph to 7.5 | |
| {{< checkbox >}} | dsH<sub>2</sub>O | <span class="calc_recipe_x" data-default-vol="1000">1000 mL</span> | |
<!-- markdownlint-enable MD033 -->

{{< /tab >}}

{{< tab >}}

## Use Cases

| Use Case | Specifications |
| :-- | :-- |
| Western Blotting | membrane washing as [TBS]({{< relref "tbs.md" >}}) or [TBST]({{< relref "tbst.md" >}}) |

{{< /tab >}}

{{< tab >}}

## Storage

| Conditions | Duration |
| :-- | :-- |
| @ 25 °C | month to years |
| @ 4 °C | month to years |
| @ -20 °C | |
| @ –80 °C | |

{{< /tab >}}

{{< comment_box >}}
{{< save_page >}}

{{< save_journal_label >}}
