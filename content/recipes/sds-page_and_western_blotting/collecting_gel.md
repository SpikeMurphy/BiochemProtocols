+++
date = '2025-12-07T20:29:29+01:00'
draft = false
construction = false
title = 'SDS-PAGE Collecting Gel'
subtitle = ''
author = ['Spike Murphy Müller ¹']
affiliation = ['¹ Center for Experimental Medicine, Institute of Biochemistry and Signal Transduction, Working Group Signal Transduction in Cancer']
sponsored = false
sponsor = ''
version = 'Version 1.0.0'
version_explanation = 'first: major revisions - second: minor revisions - third: revisions without changing procedure'
updated = '23.12.2025'
finished = true
tested = true
+++

{{< infobox type="info" title="Gel Polymerization" >}}
⚠️ Gel solutions may be prepared in advance. However, TEMED and APS must only be added immediately before use, as their addition initiates polymerization.
{{< /infobox >}}

{{< tab >}}

## Materials

<!-- markdownlint-disable MD033 -->
| Material | Molecular Weight | Specifications | Location |
| :-- | :-- | :-- | :-- |
| deionized sterilized Water *dsH<sub>2</sub>O* | 18.015 g/mol | liquid | |
| tris-HCl 0,375 M (pH 6.8) [<sup>SDS</sup>](https://www.carlroth.com/medias/SDS-4855-DE-EN.pdf?context=bWFzdGVyfHNlY3VyaXR5RGF0YXNoZWV0c3wyNDg5MDd8YXBwbGljYXRpb24vcGRmfGFEaG1MMmd4T1M4NU1qQTJOekV3TVRRd09UVTRMMU5FUWw4ME9EVTFYMFJGWDBWT0xuQmtaZ3xhMDM2MzQ2ZGYxZTg3NDk1MTZjNmFiOTEyZDYzOTUyMjU4MWFkNDhhZTY1NDY1YTUyNDFhMjk3Y2UxYjkyYjVm) | 121.14 g/mol | liquid | {{< chemical_location chemical="tris375_liquid" >}} |
| acrylamide/bisacrylamide 29:1 (gas stabilized) (30 %) [<sup>SDS</sup>](https://www.carlroth.com/medias/SDB-A124-DE-EN.pdf?context=bWFzdGVyfHNlY3VyaXR5RGF0YXNoZWV0c3wzMDkzNTN8YXBwbGljYXRpb24vcGRmfGFEY3pMMmczTmk4NU1qTXpPRFExTWpVMk1qSXlMMU5FUWw5Qk1USTBYMFJGWDBWT0xuQmtaZ3xiYWZhNjg0NjI4YjM4OTFkMjA0ZDgxZmMwOTRmZDY4NTU2ODMyYWI1ODU1MmI0NTY5MmE3NmQwZjJhYjAzZjli) | ~73.85 g/mol | liquid | {{< chemical_location chemical="acrylamidebisacrylamid30_liquid" >}} |
| sodium dodecyl sulfate *SDS* 347 mM (10 %) [<sup>SDS</sup>](https://www.carlroth.com/medias/SDB-CN30-DE-EN.pdf?context=bWFzdGVyfHNlY3VyaXR5RGF0YXNoZWV0c3wyNjg3MTF8YXBwbGljYXRpb24vcGRmfGFESXpMMmc1TUM4NU1qQTJPRFUzTkRNek1URTRMMU5FUWw5RFRqTXdYMFJGWDBWT0xuQmtaZ3xlYmU0NzI3ZGVmZGUxYmY3YWFlOTgzYzdjZTRmYTUwMGFjOWJmMzkwNGI0YWY3MTkyOGI1MTViODI3MDMyODM4) | 288.38 g/mol | liquid | {{< chemical_location chemical="sds_solid" >}} |
| N,N,N',N'-tetramethylethylenediamine *TEMED* [<sup>SDS</sup>](https://www.carlroth.com/medias/SDB-2367-DE-EN.pdf?context=bWFzdGVyfHNlY3VyaXR5RGF0YXNoZWV0c3wyOTkxNzN8YXBwbGljYXRpb24vcGRmfGFHWm1MMmc1WXk4NU1qQTJOREV3TURnME16Z3lMMU5FUWw4eU16WTNYMFJGWDBWT0xuQmtaZ3w1YzEzMzU2MDliZWYyNDg4MWUxZWZjNWU2OTU1YzMxY2I5NDg1OTMyMjNlODc2YzJhYWM3ZTY2ODIwZTAzM2U3) | 116.21 g/mol | liquid | {{< chemical_location chemical="temed_liquid" >}} |
| ammonium peroxodisulfate (= ammonium persulfate) *APS* 438 mM (10 %) [<sup>SDS</sup>](https://www.carlroth.com/medias/SDB-9592-DE-EN.pdf?context=bWFzdGVyfHNlY3VyaXR5RGF0YXNoZWV0c3wyOTg0NTl8YXBwbGljYXRpb24vcGRmfGFEQmxMMmd4WXk4NU1qQTJPRE16TURnMk5EazBMMU5FUWw4NU5Ua3lYMFJGWDBWT0xuQmtaZ3wyNWEyOTM0YzgyNzZiOWY2NGRiZjRjNGYwNTNjNzU3YzI2NDBhZTU3YTdhYjMzODRjZThlNDVhZjBlZmIxYTM4) | 228.20 g/mol | liquid | {{< chemical_location chemical="aps_liquid" >}} |
<!-- markdownlint-enable MD033 -->

{{< /tab >}}

{{< tab >}}

## Recipe

<!-- { {< calculators/calc_recipe_x >}} -->
<!-- { {< calculators/calc_recipe_vol >}} -->
<!-- { {< calculators/calc_recipe_mol >}} -->
{{< calculators/calc_recipe_amount >}}

<!-- markdownlint-disable MD033 -->
| | Material/Step | Volume/Mass | molar/%/comment |
| :-- | :-- | :-- | :-- |
| {{< checkbox >}} | dsH<sub>2</sub>O | <span class="calc_recipe_amount" data-default-one="2.520">2.520 mL</span> | |
| {{< checkbox >}} | tris-HCl | <span class="calc_recipe_amount" data-default-one="1.680">1.680 mL</span> | 126 mM |
| {{< checkbox >}} | acrylamide | <span class="calc_recipe_amount" data-default-one="0.670">0.670 mL</span> | ~544 mM |
| {{< checkbox >}} | SDS | <span class="calc_recipe_amount" data-default-one="0.050">0.050 mL</span> | 3.5 mM (0.1 %) |
| {{< checkbox >}} | TEMED | <span class="calc_recipe_amount" data-default-one="0.005">0.005 mL</span> | 8.6 mM |
| {{< checkbox >}} | APS | <span class="calc_recipe_amount" data-default-one="0.075">0.075 mL</span> | 6.57 mM |
| {{< checkbox >}} | Σ | = <span class="calc_recipe_amount" data-default-one="5">5 mL</span> | |
| {{< checkbox >}} | use immediately | | |
<!-- markdownlint-enable MD033 -->

{{< /tab >}}

{{< tab >}}

## Use Cases

| Use Case | Specifications |
| :-- | :-- |
| [SDS-PAGE]({{<relref "sds-page.md" >}}) | |

{{< /tab >}}

{{< tab >}}

## Storage

| Conditions | Duration |
| :-- | :-- |
| @ 25 °C | use immediately after adding TEMED and APS |
| @ 4 °C | |
| @ -20 °C | |
| @ –80 °C | |

{{< /tab >}}

{{< comment_box >}}
{{< save_page >}}

{{< save_journal_label >}}
