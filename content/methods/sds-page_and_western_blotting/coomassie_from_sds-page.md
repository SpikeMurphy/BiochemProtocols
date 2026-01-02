+++
date = '2025-12-21T14:34:29+01:00'
draft = false
construction = false
title = 'Coomassie Brilliant Blue Staining Following SDS-PAGE'
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
<!-- DONE: tested = true, delete -->

{{< tab >}}

## Materials

| Equipment & Devices⠀⠀⠀ | Amount | Specifications | Location |
| :-- | :-- | :-- | :-- |
| tray shaker | | | |
| cold room | | | |

| Commercial Kits⠀⠀⠀⠀⠀⠀ | Amount | Specifications | Location |
| :-- | :-- | :-- | :-- |

| Containers & Consumables | Amount | Specifications | Location |
| :-- | :-- | :-- | :-- |
| plastic container | 1-2/gel | for incubation with staining and destaining solutions | |
| sterile falcon tube 50 mL | 1-2/gel | for storage of used staining and destaining solutions | |

| Reagents & Solutions⠀⠀⠀⠀ | Amount | Specifications | Location |
| :-- | :-- | :-- | :-- |
| Coomassie brilliant blue staining solution | 50 mL | e.g. RotiBlue quick | |
| destaining solution (ethanol *EtOH* 30 %) | ~200 mL | | |
| dsH<sub>2</sub>O | | | |

| Biological Materials⠀⠀⠀⠀⠀ | Amount | Specifications | Location |
| :-- | :-- | :-- | :-- |
| [SDS-PAGE gel with protein samples]({{< relref "sds-page.md" >}}) | | | |

{{< /tab >}}

{{< tab >}}

## Procedure

{{< infobox type="info" title="General Remark" >}}
⚠️ In general, staining a gel is not recommended when downstream processing, such as western blotting, is required, as it can reduce blotting efficiency.
{{< /infobox >}}

### Heading 1

1. {{< checkbox >}} Place the gel into approximately 50 mL of Coomassie stain, such as ROTI®Blue quick.
2. {{< checkbox >}} Incubate the gel @ RT for 1 h or overnight @ 4 °C.

{{< infobox type="info" title="Staining Duration" >}}
⚠️ You may check the gel after 15, 30, and 45 minutes and stop the incubation once the desired band intensity is achieved. Note that overnight incubation often reveals additional bands not visible after 1 hour. However, some Coomassie stains are not suitable for overnight incubation. ROTI®Blue Quick does not overstain and can be used for overnight incubation. Refer to the corresponding manufacturer's manual for further information.

<!-- markdownlint-disable MD033 -->
<div style="display:flex; gap:20px; align-items:center;">
{{< timer time="0:15:00" >}}
{{< timer time="0:30:00" >}}
{{< timer time="0:45:00" >}}
{{< timer time="1:00:00" >}}
</div>
<!-- markdownlint-enable MD033 -->

{{< /infobox >}}

3. {{< checkbox >}} Decant the staining solution into a sterile 50 mL falcon tube and store @ 4 °C for reuse.

{{< infobox type="info" title="Reuse" >}}
⚠️ Oftentimes, stains can be reused. ROTI®Blue Quick is reported by the manufacturer to be reusable at least twice, sometimes thrice. Refer to the corresponding manufacturer's manual for further information.
{{< /infobox >}}

{{< infobox type="info" title="Background" >}}
⚠️ In case of high background staining, destain the gel in 30 % EtOH at RT for at least 1 h.

{{< timer time="1:00:00" >}}

{{< /infobox >}}

4. {{< checkbox >}} Rinse the gel with dsH<sub>2</sub>O.

5. {{< checkbox >}} Take pictures at an appropriate imager, such as the ImageQuant™. <!-- CONTENT_TODO: add alternative button to change between the two most used imagers. -->

    - {{< checkbox >}} Place the white insert onto the black tray of the imager.
    - {{< checkbox >}} Place the gel in the middle of the white board.
    - {{< checkbox >}} Place tray into the ImageQuant™.
    - {{< checkbox >}} Set method to Digitization:epi-illumination.
    - {{< checkbox >}} Set exposure type to precision.
    - {{< checkbox >}} Set sensitivity to standard.
    - {{< checkbox >}} Set exposure time manually to 1/100s.
    - {{< checkbox >}} Take a picture.
    - {{< checkbox >}} Set exposure time manually to 1/60s.
    - {{< checkbox >}} Take a picture.
    - {{< checkbox >}} Set exposure time manually to 1/30s.
    - {{< checkbox >}} Take a picture.
    - {{< checkbox >}} Clean the tray with 70 % EtOH.

6. {{< checkbox >}} For subsequent western blotting, destain the gel in 30 % EtOH @ RT for at least 1 h or @ 4 °C overnight.

{{< timer time="1:00:00" >}}

### Proceed with Suitable Protocol

- [Western Blotting following SDS-PAGE]({{< relref "western_blotting.md" >}})

{{< /tab >}}

{{< comment_box >}}
{{< save_page >}}

{{< save_journal_label >}}
