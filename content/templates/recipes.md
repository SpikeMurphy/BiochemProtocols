+++
date = '2025-12-07T20:19:41+01:00'
draft = false
construction = false
title = 'Recipes Template'
subtitle = ''
author = 'Spike Murphy Müller ¹'
facility = ''
version = 'Version 1.0.2'
version_explanation = ''
updated = '18.12.2025'
finished = true
tested = true
+++
<!-- NEW: finished = true, change to DONE; tested = true, delete -->

<!--_____________________________delete_____________________________-->

Bookmark: command + option + K
Comment: command + shift + 7 <!-- -->

anchor (jump to position on site):
referral: [](#name-anchor)
landing: <div id="name-anchor" style="position: relative; top: -80px; visibility: hidden;"></div>

<!-- Material Table:

for switching alternatives
into the <span>

add an id="alt_pagename_m_c_reagent1" for the default
add an id="alt_pagename_m_c_reagent2" for the alternative 

m = methods table
c = m for material, mw for molecular weight, specs for specifications, l for location

add the shortcode:
{ {< alternative_switches/alt_pagename_reagent1 >}}

-->

<!-- Recipe Table:

for switching alternatives 
into the <span>

add an id="alt_pagename_r_d_reagent1" for the default
add an id="alt_pagename_r_d_reagent2" for the alternative 

r = recipe table
d = ms for material/steps, vm for volume/mass and mol for molar/%/comment

-->

<!-- Calc Recipe x (only use one x/vol/mol):

for factoring 1x/5x/10x buffers (default volume 1000mL, 1x)
into the <span> (new or from alt_switch)

add class="calc_recipe_x" 

for masses add data-default-mass"e"
for volumes add data-default-vol"e"
for molarities add data-default-mol"e"

e = value

-->

<!-- Calc Recipe vol (only use one x/vol/mol):

for factoring volumes (default volume 1000mL)
into the <span>  (new or from alt_switch)

add class="calc_recipe_vol" 

for masses add data-default-mass"e"
for volumes add data-default-vol"e"
for molarities add data-default-mol"e"

e = value

-->

<!-- Calc Recipe mol (only use one x/vol/mol):

upcoming

add class="calc_recipe_mol" 

-->

<!--_____________________________delete_____________________________-->

{{< infobox type="info" title="" >}}
⚠️ Info
{{< /infobox >}}

{{< infobox type="warning" title="" >}}
❗️ Attention
{{< /infobox >}}

{{< infobox type="danger" title="" >}}
‼️ Danger
{{< /infobox >}}

{{< tab >}}

## Materials

<!-- markdownlint-disable MD033 -->
| Material | Molecular Weight | Specifications | Location |
| :-- | :-- | :-- | :-- |
| ChemicalName *ChemicalFormula* [<sup>SDS</sup>](https://www.carlroth.com/.../) | g/mol | | {{< chemical_location chemical="chemicalname_spec" >}} |
| | g/mol | | {{< chemical_location chemical="chemicalname_spec" >}} |
| | g/mol | | {{< chemical_location chemical="chemicalname_spec" >}} |
| deionized sterilized Water *dsH<sub>2</sub>O* | 18.015 g/mol | liquid | |
| <span id="alt_pagename_m_m_reagent1">XXXXXXXXXX</span>     <span id="alt_pagename_m_m_reagent2" style="display:none">XXXXXXXXXX</span> | <span id="alt_pagename_m_mw_reagent1">XXXXXXXXXX</span>     <span id="alt_pagename_m_mw_reagent2" style="display:none">XXXXXXXXXX</span> | <span id="alt_pagename_m_specs_reagent1">XXXXXXXXXX</span>     <span id="alt_pagename_m_specs_reagent2" style="display:none">XXXXXXXXXX</span> | <span id="alt_pagename_m_l_reagent1">{{< chemical_location chemical="chemicalname_spec" >}}</span>     <span id="alt_pagename_m_l_reagent2" style="display:none">{{< chemical_location chemical="chemicalname_spec" >}}</span> |
<!-- markdownlint-enable MD033 -->

{{< /tab >}}

{{< tab >}}

## Recipe

<!-- { {< calculators/calc_recipe_x >}} -->
<!-- { {< calculators/calc_recipe_vol >}} -->
<!-- { {< calculators/calc_recipe_mol >}} -->

<!-- markdownlint-disable MD033 -->
| | Material/Step | Volume/Mass | molar/%/comment |
| :-- | :-- | :-- | :-- |
| {{< checkbox >}} | <span id="alt_pagename_r_ms_reagent1">XXXXXXXXXX</span>     <span id="alt_pagename_r_ms_reagent2" style="display:none">XXXXXXXXXX</span> | <span id="alt_pagename_r_vm_reagent1">XXXXXXXXXX</span>     <span id="alt_pagename_r_vm_reagent2" style="display:none">XXXXXXXXXX</span> | <span id="alt_pagename_r_mol_reagent1">XXXXXXXXXX</span>     <span id="alt_pagename_r_mol_reagent2" style="display:none">XXXXXXXXXX</span> |
| {{< checkbox >}} | | | |
| {{< checkbox >}} | | | |
| {{< checkbox >}} | | | |
| {{< checkbox >}} | store in xx µL aliquots @ xx °C | | |
<!-- markdownlint-enable MD033 -->

{{< /tab >}}

{{< tab >}}

## Use Cases

| Use Case | Specifications |
| :-- | :-- |
| | |
| | |

{{< /tab >}}

{{< tab >}}

## Storage

| Conditions | Duration |
| :-- | :-- |
| @ 25 °C | |
| @ 4 °C | |
| @ -20 °C | |
| @ –80 °C | |

{{< /tab >}}

{{< comment_box >}}
{{< save_page >}}

{{< save_journal_label >}}
