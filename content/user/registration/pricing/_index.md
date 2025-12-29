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


{{< pricing_table_public >}}

| | 💧 Explore 💧 | 🧪 Prepare ⚗️ | 🦠 Execute 🧫 | 📓 Document 🖥️ | 📈 Optimize 📉 | 💾 Learn 🗄️ |
| :-- | :--: | :--: | :--: | :--: | :--: | :--: |
| **Chemicals Formulations – General Buffers** | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ❌ |
| | | | | | | |
| **Chemicals Formulations – Whole Database** | ❌ | ✔️ | ✔️ | ✔️ | ✔️ | ❌ |
| **Volume Calculators** | ❌ | ✔️ | ✔️ | ✔️ | ✔️ | ❌ |
| **Molarity Calculators** | ❌ | ✔️ | ✔️ | ✔️ | ✔️ | ❌ |
| **Concentration Calculators** | ❌ | ✔️ | ✔️ | ✔️ | ✔️ | ❌ |
| | | | | | | |
| **Standard Operating Procedures – Whole Database** | ❌ | ❌ | ✔️ | ✔️ | ✔️ | ❌ |
| **Advanced Calculators** | ❌ | ❌ | ✔️ | ✔️ | ✔️ | ❌ |
| **Advanced Tables** | ❌ | ❌ | ✔️ | ✔️ |
| **Export Calculations & Tables** | ❌ | ❌ | ✔️ | ✔️ | ✔️ | ❌ |
| | | | | | | |
| **Electronic Lab Notebook** | ❌ | ❌ | ❌ | ✔️ | ✔️ | ❌ |
| **Complete recipes and methodes integration** | ❌ | ❌ | ❌ | ✔️ | ✔️ | ❌ |
| **Workflows** | ❌ | ❌ | ❌ | ✔️ | ✔️ | ❌ |
| | | | | | | |
| **Standard operating procedur conversion service** | ❌ | ❌ | ❌ | ❌ | ✔️ | ❌ |
| | | | | | | |
| **Access to the learning and information platform** | ❌ | ❌ | ❌ | ❌ | ❌ | ✔️ |
| **Factsheets on Chemicals** | ❌ | ❌ | ❌ | ❌ | ❌ | ✔️ |
| **Descriptions of Methods** | ❌ | ❌ | ❌ | ❌ | ❌ | ✔️ |
| | | | | | | |
| **Price per month** | **Free** | **1.99 €** | **5.99 €** | **15.99 €** | **25.99 €** | **4.99 €** |
| **Price per year** | **Free** | **19.99 €/nth** | **65.99 €** | **184.99 €** | **299.99 €** | **49.99 €** |
| **One Time Purchase** | | | | | **29.99/SOP €** | **249.99 €** |

{{< /pricing_table_public >}}

{{< pricing_table_stripe >}}

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
