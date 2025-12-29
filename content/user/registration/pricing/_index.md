+++
date = '2025-12-27T18:37:48+01:00'
draft = false
construction = false
title = 'Pricing'
subtitle = 'Choose the plan that fits your workflow — from quick bench work to full lab documentation.'
author = 'Spike Murphy Müller'
version = ''
version_explanation = ''
updated = ''
finished = false
tested = false
+++

{{< stripe_pricing_table >}}

<div id="subscription-message" style="display:none; margin-top:1rem;"></div>

<script>
(() => {
  const params = new URLSearchParams(window.location.search);
  const msg = document.getElementById("subscription-message");

  if (params.get("success")) {
    msg.textContent = "✅ Subscription successful! You now have access.";
    msg.style.display = "block";
  }

  if (params.get("canceled")) {
    msg.textContent = "❌ Subscription canceled. No charges were made.";
    msg.style.display = "block";
  }
})();
</script>

<!--
| | 💧 Free 💧 | 🧪 Chemicals ⚗️ | 🦠 Labbench 🧫 | 📓 Office 🖥️ |
| :-- | :--: | :--: | :--: | :--: |
| | | | | |
| | [Get Started](#) | [Upgrade](#) | [Upgrade](#) | [Upgrade](#) |
| | | | | |
| **Chemicals Recipes – General Buffers** | ✔️ | ✔️ | ✔️ | ✔️ |
| | | | | |
| **SOP – Chemicals Recipes** | ❌ | ✔️ | ✔️ | ✔️ |
| **Export Labels** | ❌ | ✔️ | ✔️ | ✔️ |
| **Volume Calculators** | ❌ | ✔️ | ✔️ | ✔️ |
| **Molarity Calculators** | ❌ | ✔️ | ✔️ | ✔️ |
| **Concentration Calculators** | ❌ | ✔️ | ✔️ | ✔️ |
| | | | | |
| **SOP – Method** | ❌ | ❌ | ✔️ | ✔️ |
| **Advanced Calculators** | ❌ | ❌ | ✔️ | ✔️ |
| **Advanced Gel-Tables** | ❌ | ❌ | ✔️ | ✔️ |
| **Advanced Cell Growth Calculators** | ❌ | ❌ | ✔️ | ✔️ |
| **Export Calculations** | ❌ | ❌ | ✔️ | ✔️ |
| | | | | |
| **Lab Journal** | ❌ | ❌ | ❌ | ✔️ |
| **Workflows** | ❌ | ❌ | ❌ | ✔️ |
| **Priority Updates** | ❌ | ❌ | ❌ | ✔️ |
| | | | | |
| **Price** | **Free** | **1 €/month** | **4 €/month** | **15 €/month** |

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

## What’s included

### 🧪 Chemical Recipes

Create, reuse, and standardize reagent formulations with integrated volume, molarity, and concentration calculators.
Export labels and maintain reproducible chemical workflows.

Included in: **Chemicals** · **Labbench** · **Office**

### 📋 Methods & Protocols

Build structured SOPs linked directly to recipes, gels, and advanced calculators.
Designed for scalable, repeatable laboratory processes.

Included in: **Labbench** · **Office**

### 📊 Advanced Calculations & Exports

Access extended calculators for gels, cell growth, and complex workflows.
Export data to PDF and Excel for reporting and documentation.

Included in: **Labbench** · **Office**

### 📔 Lab Journal

Document experiments, connect protocols and results, and maintain a complete experimental history.
Built for traceability, continuity, and long-term data integrity.

Included in: **Office**

### 🔀 Workflows

See common workflows with all the neccessary recipes and methods in order.

Included in: **Office**

All plans receive continuous updates and are designed for long-term data compatibility and scientific reproducibility.
-->