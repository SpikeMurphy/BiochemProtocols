+++
date = '2025-12-07T20:19:41+01:00'
draft = false
construction = true
title = 'Methods Template'
subtitle = ''
author = ['Spike Murphy Müller ¹']
affiliation = ['']
version = 'Version 1.0.0'
version_explanation = 'first: major revisions - second: minor revisions - third: revisions without changing procedure'
updated = ''
finished = false
tested = false
+++

<!-- CONTENT_NEW: finished = true, change to CONTENT_DONE; tested = true, delete -->

<!-- markdownlint-disable MD025 MD024 -->

# <!-------------------- protocol variants -------------------->

1. Create a folder for the method.
2. Create an _index.md:

+++
date = '2025-12-25T19:10:04+01:00'
draft = false
construction = false
title = 'Western Blotting'
subtitle = ''
finished = true
tested = true
+++

<script>
  window.location.replace("default_pagename/");
</script>

3. Create a markdown file per protocol variant.
4. Enter on top of each markdown file:

{ {< variants >}}

<!-------------------- /protocol variants -------------------->
#

# <!-------------------- anchor -------------------->

[](#anchor_name)

<!-- markdownlint-disable MD033 -->
<div id="anchor_name" style="position: relative; top: -80px; visibility: hidden;"></div>
<!-- markdownlint-enable MD033 -->

<!-------------------- /anchor -------------------->
#

# <!-------------------- timers -------------------->

{{< timer time="0:00:30" >}}

<!-- markdownlint-disable MD033 -->
<div style="display:flex; gap:20px; align-items:center;">
{{< timer time="0:00:00" >}}
{{< timer time="0:00:00" >}}
{{< timer time="0:00:00" >}}
</div>
<!-- markdownlint-enable MD033 -->

<!-------------------- /timers -------------------->
#

# <!-------------------- alternative switch -------------------->

<!-- markdownlint-disable MD033 -->
<span data-alt-group="group" data-alt="primary">default</span>
<span data-alt-group="group" data-alt="secondary" style="display:none">alternative</span>
<!-- markdownlint-enable MD033 -->

{ {< alt_methods group="group" primary="Use default" secondary="Use alternative" >}}

[i] replace group, primary and secondary (multiple groups can be chosen)

<!-------------------- /alternative switch -------------------->
#
<!-- markdownlint-enable MD025 MD024 -->

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

| Equipment & Devices⠀⠀⠀ | Amount | Specifications | Location |
| :-- | :-- | :-- | :-- |
| Device [<sup>manual</sup>](link) | | | |
| | | | |
| | | | |
| | | | |

| Commercial Kits⠀⠀⠀⠀⠀⠀ | Amount | Specifications | Location |
| :-- | :-- | :-- | :-- |
| Kit [<sup>manual</sup>](link) | | | |
| | | | |
| | | | |
| | | | |

| Containers & Consumables | Amount | Specifications | Location |
| :-- | :-- | :-- | :-- |
| micropipettes and sterile pipette tips | | | |
| pipetting aid and serological pipettes | | | |
| | | | |
| | | | |

| Reagents & Solutions⠀⠀⠀⠀ | Amount | Specifications | Location |
| :-- | :-- | :-- | :-- |
| | | | |
| | | | |
| | | | |
| | | | |

| Biological Materials⠀⠀⠀⠀⠀ | Amount | Specifications | Location |
| :-- | :-- | :-- | :-- |
| | | | |
| | | | |
| | | | |
| | | | |

{{< /tab >}}

{{< tab >}}

## Procedure

### Heading 1

1. {{< checkbox >}}
2. {{< checkbox >}}
3. {{< checkbox >}}
4. {{< checkbox >}}

### Heading 2

1. {{< checkbox >}}
2. {{< checkbox >}}
3. {{< checkbox >}}
4. {{< checkbox >}}

### Heading 3

1. {{< checkbox >}}
2. {{< checkbox >}}
3. {{< checkbox >}}
4. {{< checkbox >}}

### Proceed with Suitable Protocol

- [Protocol Name]({{< relref "methods.md" >}})

{{< /tab >}}

{{< comment_box >}}

{{< save_page >}}

{{< save_journal_label >}}
