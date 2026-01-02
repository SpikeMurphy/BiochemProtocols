+++
date = '2025-12-23T14:54:35+01:00'
draft = false
construction = false
title = 'Chemiluminescence Imaging Following Western Blotting'
subtitle = 'Using the ImageQuant™'
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

{{< variants >}}

{{< tab >}}

## Materials

<!-- markdownlint-disable MD033 -->
| Equipment & Devices⠀⠀⠀ | Amount | Specifications | Location |
| :-- | :-- | :-- | :-- |
| ImageQuant™ | | | |
<!-- markdownlint-enable MD033 -->

<!-- markdownlint-disable MD033 -->
| Commercial Kits⠀⠀⠀⠀⠀⠀ | Amount | Specifications | Location |
| :-- | :-- | :-- | :-- |
| <span data-alt-group="chemiluminescence" data-alt="primary">SuperSignal™ West Pico PLUS [<sup>manual</sup>](link)</span><span data-alt-group="chemiluminescence" data-alt="secondary" style="display:none">SuperSignal™ West Dura [<sup>manual</sup>](link)</span> {{< alternative_switches/alt_methods group="chemiluminescence" primary="Use West Pico PLUS" secondary="Use West Dura" >}} | <span data-alt-group="chemiluminescence" data-alt="primary">200 µL/membrane <br> 200 µL/membrane</span><span data-alt-group="chemiluminescence" data-alt="secondary" style="display:none">200 µL/membrane <br> 200 µL/membrane</span> | <span data-alt-group="chemiluminescence" data-alt="primary">stable peroxide <br> luminol/enhancer</span><span data-alt-group="chemiluminescence" data-alt="secondary" style="display:none">stable peroxide <br> luminol/enhancer</span> | |
<!-- markdownlint-enable MD033 -->

| Containers & Consumables | Amount | Specifications | Location |
| :-- | :-- | :-- | :-- |
| micropipettes and sterile pipette tips | | | |
| pipetting aid and serological pipettes | | | |
| transparent plastic wrap | 1/ membrane | | |
| sterile reaction tube 1.5 mL | 1/2 membranes | for preparing the developing solution | |

| Reagents & Solutions⠀⠀⠀⠀ | Amount | Specifications | Location |
| :-- | :-- | :-- | :-- |

| Biological Materials⠀⠀⠀⠀⠀ | Amount | Specifications | Location |
| :-- | :-- | :-- | :-- |

{{< /tab >}}

{{< tab >}}

## Procedure

### Heading 1

1. {{< checkbox >}} Prepare the developing solution consisting of stable peroxide and luminol/enhancer 200 µL each.
2. {{< checkbox >}} Add the membrane to a transparent plastic wrap and remove all liquid with absorbing paper or by closing and opening the plastic and removing the liquid on the plastic.
3. {{< checkbox >}} Pipette 400µl developing solution onto the membrane and close the plastic to ensure equal distribution.
4. {{< checkbox >}} Incubate the developing solution on the membrane for 5 minutes.

{{< timer time="0:05:00" >}}

5. {{< checkbox >}} Roll out the membrane with a roller.
6. {{< checkbox >}} Place the membrane in the imager.
7. {{< checkbox >}} Take pictures at the imager:
    - {{< checkbox >}} Take epiillumination-picture:
        - {{< checkbox >}} Set Method to Digitization:epi-illumination.
        - {{< checkbox >}} Set exposure type to precision.
        - {{< checkbox >}} Set sensitivity to standard.
        - {{< checkbox >}} Set exposure time manually to 1/100s.
        - {{< checkbox >}} Take a picture.
        - {{< checkbox >}} Set exposure time manually to 1/60s.
        - {{< checkbox >}} Take a picture.
        - {{< checkbox >}} Set exposure time manually to 1/30s.
        - {{< checkbox >}} Take a picture.
    - {{< checkbox >}} Take incremental pictures:
        - {{< checkbox >}} Set Method to Chemiluminescence.
        - {{< checkbox >}} Set exposure type to increment.
        - {{< checkbox >}} Set interval time as necessary, e.g. to 10s.
        - {{< checkbox >}} Set sensitivity to standard.
        - {{< checkbox >}} Take pictures until overexposed and save them.

8. {{< checkbox >}} Clean the tray with 70% EtOH.

{{< infobox type="info" title="Membrane Storage" >}}

1. {{< checkbox >}} Place the membrane in a transparent plastic wrap.
2. <!-- markdownlint-disable MD033 --> {{< checkbox >}} Add a small volume of <span data-alt-group="buffer" data-alt="primary">PBST</span><span data-alt-group="buffer" data-alt="secondary" style="display:none">TBST</span> {{< alternative_switches/alt_methods group="buffer" primary="Use PBS" secondary="Use TBS" >}} to keep the membrane moist. <!-- markdownlint-enable MD033 -->
3. {{< checkbox >}} Store @ 4 °C for up to a week.

For longer storage, dry the membrane completely and store at RT between sheets of filter paper.

{{< /infobox >}}

### Proceed with Suitable Protocol

- [Protocol Name]({{< relref "methods.md" >}}) <!---->

{{< /tab >}}

{{< comment_box >}}
{{< save_page >}}

{{< save_journal_label >}}
