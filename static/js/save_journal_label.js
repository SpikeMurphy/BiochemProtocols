document.addEventListener('DOMContentLoaded', () => {
  // Shortcode nicht auf der Seite → nichts tun
  if (!window.labelPrintData) return;

  const wrapper = document.querySelector('.label-preview-wrapper');
  if (!wrapper) return;

  const preview = wrapper.querySelector('#label-preview');
  const dateEl = wrapper.querySelector('#label-date');
  const qrCanvas = wrapper.querySelector('#label-qr-canvas');
  const printBtn = wrapper.querySelector('#label-print-btn');
  const colSelect = wrapper.querySelector('#label-column');
  const rowSelect = wrapper.querySelector('#label-row');

  // --- Datum setzen ---
  dateEl.textContent = new Date().toLocaleDateString('de-DE');

  // --- QR-Code erzeugen ---
  QRCode.toCanvas(qrCanvas, window.labelPrintData.url, {
    width: 90,
    margin: 0
  });

  // --- Print ---
  printBtn.addEventListener('click', () => {
    const col = parseInt(colSelect.value, 10);
    const row = parseInt(rowSelect.value, 10);

    const offsetX = (col - 1) * 70; // mm
    const offsetY = (row - 1) * 37; // mm

    // IFRAME für isolierten Print
    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';

    document.body.appendChild(iframe);

    const doc = iframe.contentWindow.document;

    // --- Preview klonen ---
    const previewClone = preview.cloneNode(true);

    // Canvas → Image (wichtig für Print!)
    const canvasClone = previewClone.querySelector('canvas');
    const img = document.createElement('img');
    img.src = qrCanvas.toDataURL('image/png');
    img.style.width = '25mm';
    img.style.height = '25mm';
    img.alt = 'QR Code';
    canvasClone.replaceWith(img);

    // --- Print-Dokument schreiben ---
    doc.open();
    doc.write(`
<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<title>Label Print</title>
<style>
    @page {
    size: A4;
    margin: 0;
    }

    html {
    width: 210mm;
    }

    body {
    margin: 0;
    padding: 0;
    background: white;
    overflow: hidden;
    }

    .label {
    position: absolute;
    width: 70mm;
    height: 37mm;
    left: ${offsetX}mm;
    top: ${offsetY}mm;
    display: flex;
    padding: 3mm;
    box-sizing: border-box;
    font-size: 8pt;
    font-family: sans-serif;
    border: none; /* WICHTIG */
    }

    .label-qr {
    width: 25mm;
    height: 25mm;
    flex-shrink: 0;
    }

    .label-text {
    margin-left: 3mm;
    line-height: 1.2;
}
</style>
</head>
<body>
  ${previewClone.outerHTML}
</body>
</html>
    `);
    doc.close();

    // --- Drucken (stabil) ---
    setTimeout(() => {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
      setTimeout(() => iframe.remove(), 1000);
    }, 100);
  });
});
