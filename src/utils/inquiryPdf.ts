import { jsPDF } from "jspdf";

export interface InquiryItem {
  title: string;
  imageDataUrl?: string; // base64 data URL
  imageWidth?: number;
  imageHeight?: number;
}

export interface InquiryData {
  meaningOfQuality: string;
  customer: string;
  items: InquiryItem[]; // up to 6
  notes?: string;
  logoDataUrl?: string; // optional top-left logo
  logoWidth?: number;
  logoHeight?: number;
  fileName?: string;
}

// Draw multi-line text inside a rectangle with padding
function textInBox(
  doc: jsPDF,
  text: string,
  x: number,
  y: number,
  w: number,
  h: number,
  opts?: { padding?: number; lineHeight?: number; fontSize?: number; align?: "left" | "center" | "right" }
) {
  const padding = opts?.padding ?? 3;
  const lineHeight = opts?.lineHeight ?? 5.5;
  const fontSize = opts?.fontSize ?? 11;
  const align = opts?.align ?? "left";
  doc.setFontSize(fontSize);
  const usableWidth = w - padding * 2;
  const lines = doc.splitTextToSize(text || "", usableWidth);
  let cursorY = y + padding + 2;
  for (const line of lines) {
    if (cursorY > y + h - padding) break;
    let tx = x + padding;
    if (align === "center") tx = x + w / 2 - doc.getTextWidth(line) / 2;
    if (align === "right") tx = x + w - padding - doc.getTextWidth(line);
    doc.text(line as string, tx, cursorY);
    cursorY += lineHeight;
  }
}

function scaledSize(imgW: number | undefined, imgH: number | undefined, maxW: number, maxH: number) {
  const iw = imgW && imgW > 0 ? imgW : maxW;
  const ih = imgH && imgH > 0 ? imgH : maxH;
  const r = Math.min(maxW / iw, maxH / ih);
  return { w: iw * r, h: ih * r };
}

function addImageFit(
  doc: jsPDF,
  dataUrl: string,
  x: number,
  y: number,
  maxW: number,
  maxH: number,
  dims?: { imageWidth?: number; imageHeight?: number }
) {
  const type = dataUrl.startsWith("data:image/png") ? ("PNG" as const) : ("JPEG" as const);
  const { w, h } = scaledSize(dims?.imageWidth, dims?.imageHeight, maxW, maxH);
  const ox = x + (maxW - w) / 2;
  const oy = y + (maxH - h) / 2;
  try {
    // @ts-expect-error jsPDF type has overloads per encoder
    doc.addImage(dataUrl, type, ox, oy, w, h);
  } catch {
    // ignore image errors to allow text-only PDF generation
  }
}

export function generateInquiryPdf(data: InquiryData) {
  const doc = new jsPDF({ unit: "mm", format: "a4", compress: true });
  const pageW = doc.internal.pageSize.getWidth(); // 210
  const pageH = doc.internal.pageSize.getHeight(); // 297

  // Layout constants
  const margin = 10;
  const radiusOuter = 12; // more rounded like the sketch
  const radiusBox = 10;
  const radiusPill = 8;
  const borderColor = "#000000";

  doc.setTextColor(0, 0, 0);
  doc.setDrawColor(borderColor);

  // Outer frame (thicker)
  doc.setLineWidth(1.2);
  doc.roundedRect(margin, margin, pageW - margin * 2, pageH - margin * 2, radiusOuter, radiusOuter, "S");

  // Optional logo in header
  if (data.logoDataUrl) {
    addImageFit(doc, data.logoDataUrl, margin + 6, margin + 6, 26, 12, {
      imageWidth: data.logoWidth,
      imageHeight: data.logoHeight,
    });
  }

  // Title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(30);
  doc.text("Inquiry", pageW / 2, margin + 15, { align: "center" });

  // Header line (slightly thicker)
  doc.setLineWidth(1);
  doc.line(margin + 4, margin + 21, pageW - margin - 4, margin + 21);

  // Reset to normal stroke
  doc.setLineWidth(0.9);

  // Top boxes
  const topY = margin + 26;
  const gap = 10;
  const topBoxW = (pageW - margin * 2 - gap) / 2;
  const topBoxH = 70;

  // Left: Meaning of Quality
  doc.roundedRect(margin + 3, topY, topBoxW - 3, topBoxH, radiusBox, radiusBox, "S");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text("Meaning of Quality", margin + 10, topY + 9);
  textInBox(doc, data.meaningOfQuality, margin + 8, topY + 14, topBoxW - 14, topBoxH - 18, {
    fontSize: 11,
    lineHeight: 5.2,
  });

  // Right: Customer
  const rightX = margin + topBoxW + gap;
  doc.roundedRect(rightX, topY, topBoxW - 3, topBoxH, radiusBox, radiusBox, "S");
  doc.setFontSize(12);
  doc.text("Customer", rightX + 8, topY + 9);
  textInBox(doc, data.customer, rightX + 8, topY + 14, topBoxW - 14, topBoxH - 18, {
    fontSize: 11,
    lineHeight: 5.2,
  });

  // Middle: list of inquiry items
  const midY = topY + topBoxH + 12;
  const midH = 114;
  doc.roundedRect(margin + 3, midY, pageW - margin * 2 - 6, midH, radiusBox, radiusBox, "S");
  doc.setFontSize(12);
  doc.text("List of inquiry items ....................", margin + 12, midY + 11);

  // Items grid (2 columns x 3 rows). Each box holds image (left) + description (right)
  const innerPad = 12;
  const colGap = 18;
  const columns = 2;
  const rows = 3;
  const gridW = pageW - margin * 2 - 6 - innerPad * 2 - colGap;
  const colW = gridW / 2;
  const boxW = colW;
  const boxH = 24; // a bit taller
  const thumbW = 22;
  const thumbH = boxH - 8;

  let idx = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      const x = margin + 3 + innerPad + c * (boxW + colGap);
      const y = midY + 18 + r * (boxH + 14);
      doc.roundedRect(x, y, boxW, boxH, radiusPill, radiusPill, "S");

      const item = data.items?.[idx];
      const title = item?.title ?? `item ${idx + 1}`;

      if (item?.imageDataUrl) {
        addImageFit(doc, item.imageDataUrl, x + 4, y + 4, thumbW, thumbH, {
          imageWidth: item.imageWidth,
          imageHeight: item.imageHeight,
        });
      }

      const textX = x + (item?.imageDataUrl ? thumbW + 10 : 8);
      const textW = boxW - (item?.imageDataUrl ? thumbW + 16 : 14);
      doc.setFontSize(11);
      textInBox(doc, title, textX, y + 2, textW, boxH - 4, { padding: 3 });

      idx++;
    }
  }

  // Bottom notes area
  const bottomY = midY + midH + 12;
  const bottomH = pageH - margin - bottomY - 3;
  doc.roundedRect(margin + 3, bottomY, pageW - margin * 2 - 6, bottomH, radiusBox, radiusBox, "S");
  if (data.notes) {
    textInBox(doc, data.notes, margin + 7, bottomY + 7, pageW - margin * 2 - 14, bottomH - 14, {
      fontSize: 11,
      lineHeight: 5.2,
    });
  }

  // Save
  doc.save(data.fileName || "inquiry.pdf");
}
