+++
date = '2025-12-07T20:29:58+01:00'
draft = false
construction = false
title = 'Western Blot Tris-Glycine(-SDS)-MeOH Towbin Transfer Buffer'
subtitle = ''
author = ['Spike Murphy Müller ¹']
affiliation = ['¹ Center for Experimental Medicine, Institute of Biochemistry and Signal Transduction, Working Group Signal Transduction in Cancer']
sponsored = false
sponsor = ''
version = 'Version 1.1.0'
version_explanation = 'first: major revisions - second: minor revisions - third: revisions without changing procedure'
updated = '22.12.2025'
finished = true
tested = true
+++

{{< tab >}}

## Materials

<!-- markdownlint-disable MD033 -->
| Material | Molecular Weight | Specifications | Location |
| :-- | :-- | :-- | :-- |
| tris base [<sup>SDS</sup>](https://www.carlroth.com/medias/SDS-4855-DE-EN.pdf?context=bWFzdGVyfHNlY3VyaXR5RGF0YXNoZWV0c3wyNDg5MDd8YXBwbGljYXRpb24vcGRmfGFEaG1MMmd4T1M4NU1qQTJOekV3TVRRd09UVTRMMU5FUWw4ME9EVTFYMFJGWDBWT0xuQmtaZ3xhMDM2MzQ2ZGYxZTg3NDk1MTZjNmFiOTEyZDYzOTUyMjU4MWFkNDhhZTY1NDY1YTUyNDFhMjk3Y2UxYjkyYjVm) | 121.14 g/mol | solid | {{< chemical_location chemical="trisbase_solid" >}} |
| glycine [<sup>SDS</sup>](https://www.carlroth.com/medias/SDB-3790-DE-EN.pdf?context=bWFzdGVyfHNlY3VyaXR5RGF0YXNoZWV0c3wyNDUwNDh8YXBwbGljYXRpb24vcGRmfGFHSTBMMmcxWXk4NU1qQTJOamM1T1RZeE5qTXdMMU5FUWw4ek56a3dYMFJGWDBWT0xuQmtaZ3w4MDE2NTJmZTgwMjRmNjlmZWQyYThkNGZhNmIxNDk3ZjA1NWI2MTEwNGQxMGI1YTFiNmJmNzNkYTUzMDY2MGI1) | 75.07 g/mol | solid | {{< chemical_location chemical="glycine_solid" >}} |
| sodium dodecyl sulfate *SDS* [<sup>SDS</sup>](https://www.carlroth.com/medias/SDB-8029-DE-EN.pdf?context=bWFzdGVyfHNlY3VyaXR5RGF0YXNoZWV0c3wyNjk1MzV8YXBwbGljYXRpb24vcGRmfGFHWmxMMmhpWXk4NU1qQTJOemsxTnpNd09UYzBMMU5FUWw4NE1ESTVYMFJGWDBWT0xuQmtaZ3w4MjQwNjRjYzA2MjE1NzhmOWFmN2ZmMzBkODM1YmEwMDRhZDRkOGFjY2VjZjk4ZjU5ZTRkMDQ2OWU0ZDFlMjFi) | 288.38 g/mol | solid | {{< chemical_location chemical="sds_solid" >}} |
| deionized sterilized Water *dsH<sub>2</sub>O* | 18.015 g/mol | liquid | |
| methanol *MeOH* [<sup>SDS</sup>](https://www.carlroth.com/medias/SDB-P717-DE-EN.pdf?context=bWFzdGVyfHNlY3VyaXR5RGF0YXNoZWV0c3wzODAwNjN8YXBwbGljYXRpb24vcGRmfGFEWXlMMmcxTXk4NU1qSXpNVGMwTlRJd09EWXlMMU5FUWw5UU56RTNYMFJGWDBWT0xuQmtaZ3xmZDY0MTgwM2FjZGIxNzFmNWViNTA4Y2YwY2Q4MGM1MmFiOGM5NTgxOTBlNmJiNWYxODM2MmIxOGQ5ZGM4NTg5) | 32,04 g/mol | liquid | {{< chemical_location chemical="meoh_liquid" >}} |
<!-- markdownlint-enable MD033 -->

{{< /tab >}}

{{< tab >}}

## Recipe

{{< calculators/calc_recipe_x >}}

⚠️ chose solvent first
<!-- { {< calculators/calc_recipe_vol >}} -->
<!-- { {< calculators/calc_recipe_mol >}} -->

<!-- markdownlint-disable MD033 -->
| | Material/Step | Volume/Mass | molar/%/comment |
| :-- | :-- | :-- | :-- |
| {{< checkbox >}} | tris | <span class="calc_recipe_x" data-default-mass="3.03">3.03 g</span> | <span class="calc_recipe_x" data-default-mol="25">25 mM</span> |
| {{< checkbox >}} | glycine | <span class="calc_recipe_x" data-default-mass="14.4">14.4 g</span> | <span class="calc_recipe_x" data-default-mol="192">192 mM</span> |
| {{< checkbox >}} | SDS | <span class="calc_recipe_x" data-default-mass="1">1 g</span> | <span class="calc_recipe_x" data-default-mol="3.47">3.47 mM (0.1 %)</span> |
| {{< checkbox >}} | <span id="alt_westernblottransferbuffer_r_ms_dsh2omeoh">80% dsH<sub>2</sub>O & 20% MeOH</span>      <span id="alt_westernblottransferbuffer_r_ms_dsh2o" style="display:none">dsH<sub>2</sub>O</span> {{< alternative_switches/alt_westernblottransferbuffer_dsh2omeoh >}} | to <span id="alt_westernblottransferbuffer_r_vm_dsh2omeoh" class="calc_recipe_x" data-default-vol="1000">1000 mL</span>     <span id="alt_westernblottransferbuffer_r_vm_dsh2o" style="display:none" class="calc_recipe_x" data-default-vol="1000">1000 mL</span> | |
<!-- markdownlint-enable MD033 -->

{{< /tab >}}

{{< tab >}}

## Use Cases

| Use Case | Specifications |
| :-- | :-- |
| [SDS-PAGE]({{<relref "sds-page.md" >}}) | as running buffer <br> When using 10x buffer, dilute *10%* 10x buffer with *20%* MeOH and *70%* *dsH<sub>2</sub>O* |
| [SDS-PAGE]({{<relref "sds-page.md" >}}) | with dithiothreitol *DTT* 1mM as cathode buffer (e.g. 500µL in 500 mL running buffer) |

{{< /tab >}}

{{< tab >}}

## Storage

| Conditions | Duration |
| :-- | :-- |
| @ 25 °C | **1x buffer:** 1 month <br> **10x buffer:** 6-12 month |
| @ 4 °C | |
| @ -20 °C | |
| @ –80 °C | |

{{< /tab >}}

{{< comment_box >}}
{{< save_page >}}

{{< save_journal_label >}}
