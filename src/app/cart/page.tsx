
"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { useCart } from "@/contexts/CartContext";
import { useLang } from "@/hooks/useLang";
import { t } from "@/data/labels";
import { WHATSAPP_NUMBER } from "@/data/site";
import { buildWhatsAppMessage, type ClientInfo } from "@/utils/whatsapp";
import { useRef, useState } from "react";

export default function CartPage() {
  const { items, updateQty, remove, clear } = useCart();
  const lang = useLang();
  const [info, setInfo] = useState<ClientInfo>({});
  const formRef = useRef<HTMLFormElement>(null);

  const totalItems = items.reduce((acc, it) => acc + it.qty, 0);

  const ensureFormValid = (): boolean => {
    const form = formRef.current;
    if (!form) return false;
    if (form.checkValidity()) return true;
    form.reportValidity();
    const firstInvalid = form.querySelector<HTMLElement>(":invalid");
    firstInvalid?.focus();
    return false;
  };

  // WhatsApp Integration
  const handleSendWhatsApp = () => {
    if (!ensureFormValid()) return;
    const msg = buildWhatsAppMessage(items, info);
    const encoded = encodeURIComponent(msg);
    const base = WHATSAPP_NUMBER
      ? `https://wa.me/${WHATSAPP_NUMBER}`
      : `https://wa.me/`;
    const url = `${base}?text=${encoded}`;
    window.open(url, "_blank");
  };

  // Email Integration (text-only)
  const handleSendEmail = () => {
    if (!ensureFormValid()) return;
    const msg = buildWhatsAppMessage(items, info); // reuse message generator
    const subject = encodeURIComponent("Quotation Request - Meaning of Quality");
    const body = encodeURIComponent(msg);
    const mailto = `mailto:sale@moq.com.sa?subject=${subject}&body=${body}`;
    window.location.href = mailto;
  };

// Complete handleDownloadPDF with QR Code containing essential info
const handleDownloadPDF = async () => {
  if (!ensureFormValid()) return;
  const { jsPDF } = await import("jspdf").then((mod) => mod);
  const QRCode = (await import("qrcode")).default;
  
  if (typeof window === "undefined") return;

  // Util: Image to DataURL
  const toDataURL = async (src?: string): Promise<string | null> => {
    if (!src) return null;
    try {
      const abs = src.startsWith("http")
        ? src
        : new URL(src, window.location.origin).href;
      const res = await fetch(abs);
      if (!res.ok) return null;
      const blob = await res.blob();
      return await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.readAsDataURL(blob);
      });
    } catch {
      return null;
    }
  };

  // Generate QR code with minimal essential information as plain text
  const generateQR = async (inquiryNumber: string): Promise<string> => {
    // Simple text format - easy to read when scanned
    const qrText = [
      `Inquiry #: ${inquiryNumber}`,
      `Customer: ${info.name || 'N/A'}`,
      `Company: ${info.company || 'N/A'}`,
      `Email: ${info.email || 'N/A'}`,
      `Phone: ${info.phone || 'N/A'}`,
      `Items: ${items.length} types`,
      `Total Qty: ${items.reduce((acc, it) => acc + it.qty, 0)}`,
      `Date: ${new Date().toLocaleDateString()}`,
    ].join('\n');
    
    return await QRCode.toDataURL(qrText, {
      errorCorrectionLevel: "M",
      margin: 1,
      width: 256,
      color: { dark: "#000000", light: "#FFFFFF" },
    });
  };

  const COLORS = {
    primary: { r: 22, g: 163, b: 74 },
    gray: (v: number) => ({ r: v, g: v, b: v }),
  };

  const DIMENSIONS = {
    margin: 12,
    headerBarH: 22,
    infoBoxH: 40,
    bottomMargin: 14,
    table: { idxW: 8, imgW: 20, nameW: 80, metaW: 60, qtyW: 12, minRowH: 24 },
  };

  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();

  // Generate Inquiry Number: DDMMYYYYHHMMSS
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const inquiryNumber = `${day}${month}${year}${hours}${minutes}${seconds}`;

  // Header
  const drawHeaderBar = (showInquiry: boolean) => {
    doc.setFillColor(COLORS.primary.r, COLORS.primary.g, COLORS.primary.b);
    doc.rect(0, 0, pageW, DIMENSIONS.headerBarH, "F");

    if (showInquiry) {
      doc.setTextColor(255, 255, 255);

      // Logo + Text
      const logoX = DIMENSIONS.margin;
      const logoY = 6;
      const logoSize = 8;
      doc.setFillColor(255, 255, 255);
      doc.roundedRect(logoX, logoY, logoSize + 4, logoSize + 4, 2, 2, "F");
      doc.setTextColor(COLORS.primary.r, COLORS.primary.g, COLORS.primary.b);
      doc.setFont("helvetica", "bold").setFontSize(9);
      doc.text("MOQ", logoX + 2.5, logoY + 6, { baseline: "middle" });

      // Company name
      doc.setTextColor(255, 255, 255);
      doc.setFont("helvetica", "bold").setFontSize(11);
      doc.text("Meaning of Quality", logoX + 15, 14);

      // Center Inquiry with Number
      doc.setFont("helvetica", "bold").setFontSize(18);
      doc.text("Quotaion Summery", pageW / 2, 11, { align: "center" });
      doc.setFont("helvetica", "normal").setFontSize(9);
      doc.text(`Inq - #${inquiryNumber}`, pageW / 2, 17, { align: "center" });

      // Date right
      const generatedAt = new Date().toLocaleString();
      doc.setFont("helvetica", "normal").setFontSize(10);
      doc.text(generatedAt, pageW - DIMENSIONS.margin, 14, { align: "right" });
      doc.setTextColor(0, 0, 0);
    }

    // Divider
    doc.setDrawColor(200);
    doc.setLineWidth(0.2);
    doc.line(0, DIMENSIONS.headerBarH, pageW, DIMENSIONS.headerBarH);
  };

  // Company + Customer Info with QR Code
  const drawCompanyAndCustomer = async (yStart: number) => {
    const colW = (pageW - DIMENSIONS.margin * 2 - 6) / 2;

    // Company box
    doc.setDrawColor(220).setLineWidth(0.4);
    doc.roundedRect(DIMENSIONS.margin, yStart, colW, DIMENSIONS.infoBoxH, 2, 2, "S");
    doc.setFontSize(11).setFont("helvetica", "bold");
    doc.text("Company Info", DIMENSIONS.margin + 4, yStart + 6);
    doc.setFont("helvetica", "normal").setFontSize(10);
    let y = yStart + 12;
    const companyLines = [
      "The Meaning of Quality Trading Establishment",
      "Jarallah Bin Fahad Street,",
      "Al Jazeerah District 14262 Riyadh, Saudi Arabia",
      "Phone: 00966 590019826",
      "Email: sale@moq.com.sa",
    ];
    companyLines.forEach((l) => {
      doc.text(l, DIMENSIONS.margin + 4, y);
      y += 5;
    });

    // Customer box
    const rightX = DIMENSIONS.margin + colW + 6;
    doc.roundedRect(rightX, yStart, colW, DIMENSIONS.infoBoxH, 2, 2, "S");
    doc.setFont("helvetica", "bold").setFontSize(11);
    doc.text("Customer Info", rightX + 4, yStart + 6);
    doc.setFont("helvetica", "normal").setFontSize(10);
    let cy = yStart + 12;
    if (info.name) {
      doc.text(`Name: ${info.name}`, rightX + 4, cy);
      cy += 5;
    }
    if (info.company) {
      doc.text(`Company: ${info.company}`, rightX + 4, cy);
      cy += 5;
    }
    if (info.email) {
      doc.text(`Email: ${info.email}`, rightX + 4, cy);
      cy += 5;
    }
    if (info.phone) {
      doc.text(`Phone: ${info.phone}`, rightX + 4, cy);
      cy += 5;
    }

    let nextY = Math.max(y, cy);

    // Note
    if (info.note) {
      const noteY = nextY + 10;
      doc.setFont("helvetica", "bold").setFontSize(11);
      const maxWidth = pageW - DIMENSIONS.margin * 2 - 10;
      const wrapped = doc.splitTextToSize(info.note, maxWidth);
      const lineHeight = 6;
      const boxHeight = wrapped.length * lineHeight + 14;
      doc.roundedRect(
        DIMENSIONS.margin,
        noteY,
        pageW - DIMENSIONS.margin * 2,
        boxHeight,
        2,
        2,
        "S"
      );
      doc.text("Customer Note:", DIMENSIONS.margin + 4, noteY + 8);
      doc.setFont("helvetica", "normal").setFontSize(10);
      doc.text(wrapped, DIMENSIONS.margin + 4, noteY + 16);
      nextY = noteY + boxHeight + 6;
    }

    // Generated by box with QR Code
    const genY = nextY;
    const boxHeight = 28; // Increased height for QR code
    doc.setDrawColor(220);
    doc.roundedRect(
      DIMENSIONS.margin,
      genY,
      pageW - DIMENSIONS.margin * 2,
      boxHeight,
      2,
      2,
      "S"
    );
    
    // Text on left side
    doc.setFont("helvetica", "bold").setFontSize(10);
    doc.text("Generated By:", DIMENSIONS.margin + 4, genY + 8);
    doc.setFont("helvetica", "normal");
    doc.text("The Meaning of Quality Trading Establishment - Website", DIMENSIONS.margin + 4, genY + 14);
    
    // QR Code info text
    doc.setFont("helvetica", "normal").setFontSize(8);
    doc.setTextColor(100);
    doc.text("Scan QR for inquiry details", DIMENSIONS.margin + 4, genY + 20);
    doc.setTextColor(0);

    // Generate and add QR code on the right side
    const qrData = await generateQR(inquiryNumber);
    const qrSize = 24;
    doc.addImage(
      qrData,
      "PNG",
      pageW - DIMENSIONS.margin - qrSize - 2,
      genY + 2,
      qrSize,
      qrSize
    );

    return genY + boxHeight + 8;
  };

  // Table header
  const drawTableHeader = (y: number) => {
    const { idxW, imgW, nameW, metaW } = DIMENSIONS.table;
    doc.setFillColor(245, 247, 250);
    doc.rect(DIMENSIONS.margin, y, pageW - DIMENSIONS.margin * 2, 9, "F");
    doc.setFont("helvetica", "bold").setFontSize(10);
    doc.setTextColor(60);
    let x = DIMENSIONS.margin + 2;
    doc.text("#", x, y + 6);
    x += idxW;
    doc.text("Image", x, y + 6);
    x += imgW;
    doc.text("Item", x, y + 6);
    x += nameW;
    doc.text("Details", x, y + 6);
    x += metaW;
    doc.text("Qty", x, y + 6);
    doc.setTextColor(0, 0, 0);
    return { rowY: y + 11 };
  };

  // Footer
  const drawFooter = (pageNum: number, pageCount: number) => {
    doc.setFontSize(9).setTextColor(100);
    const emailMsg = "Please forward this PDF to sales@moq.com.sa or ";
    doc.text(emailMsg, DIMENSIONS.margin, pageH - 6, { align: "left" });
    const whatsAppText = "send via WhatsApp: 00966 590019826";
    doc.setTextColor(37, 211, 102);
    doc.textWithLink(
      whatsAppText,
      DIMENSIONS.margin + doc.getTextWidth(emailMsg),
      pageH - 6,
      { url: "https://wa.me/966590019826" }
    );
    doc.setTextColor(100);
    doc.text(
      `Page ${pageNum} of ${pageCount}`,
      pageW - DIMENSIONS.margin,
      pageH - 6,
      { align: "right" }
    );
    doc.setTextColor(0, 0, 0);
  };

  // Table rows
  const renderRows = async (startIdx: number, startY: number) => {
    const { idxW, imgW, nameW, metaW, minRowH } = DIMENSIONS.table;
    let yPos = startY;

    const drawRow = async (rowIndex: number, yRow: number): Promise<number | -1> => {
      const it = items[rowIndex];
      if (!it) return 0;
      const rowH = minRowH;
      let x = DIMENSIONS.margin + 2;

      if (yRow + rowH > pageH - DIMENSIONS.bottomMargin) {
        doc.addPage();
        drawHeaderBar(false);
        drawTableHeader(DIMENSIONS.headerBarH + 2);
        return -1;
      }

      doc.setDrawColor(230).setLineWidth(0.3);
      doc.rect(DIMENSIONS.margin, yRow, pageW - DIMENSIONS.margin * 2, rowH);

      doc.text(String(rowIndex + 1), x, yRow + 7);
      x += idxW;

      if (it.img) {
        try {
          const imgData = await toDataURL(it.img);
          if (imgData) {
            const imgProps = (doc as unknown as { getImageProperties: (data: string) => { width: number; height: number } }).getImageProperties(imgData);
            const imgRatio = imgProps.width / imgProps.height;
            const maxW = imgW - 4;
            const maxH = rowH - 4;
            let drawW = maxW;
            let drawH = maxH;
            if (imgRatio > 1) drawH = maxW / imgRatio;
            else drawW = maxH * imgRatio;
            const imgX = x + (imgW - drawW) / 2;
            const imgY = yRow + (rowH - drawH) / 2;
            doc.addImage(imgData, "PNG", imgX, imgY, drawW, drawH);
          }
        } catch (e) {
          console.error("Image load failed:", e);
        }
      }
      x += imgW;

      const nameLines = doc.splitTextToSize(it.name || "", nameW - 2);
      doc.text(nameLines, x, yRow + 6);
      x += nameW;

      const details: string[] = [];
      if (it.productCode) details.push(`Code: ${it.productCode}`);
      if (it.volume) details.push(`Vol: ${it.volume}`);
      if (it.type) details.push(`Type: ${it.type}`);
      if (it.stockCode) details.push(`Stock: ${it.stockCode}`);
      const detailLines = doc.splitTextToSize(details.join(" | "), metaW - 2);
      doc.text(detailLines, x, yRow + 6);
      x += metaW;

      doc.text(String(it.qty), x + 2, yRow + 7);

      return rowH;
    };

    for (let i = startIdx; i < items.length; i++) {
      const rowH = await drawRow(i, yPos);
      if (rowH === -1) {
        yPos = DIMENSIONS.headerBarH + 2 + 11;
        i--;
        continue;
      }
      yPos += rowH;
    }
  };

  // Execution
  drawHeaderBar(true);
  const y = await drawCompanyAndCustomer(DIMENSIONS.headerBarH + 2);
  const header = drawTableHeader(y);
  await renderRows(0, header.rowY);

  // Add summary row after items table
  const drawSummary = (yStart: number) => {
    const totalTypes = items.length;
    const totalQty = items.reduce((acc, it) => acc + it.qty, 0);
    
    const summaryY = yStart;
    const summaryH = 12;
    const fullWidth = pageW - DIMENSIONS.margin * 2;

    // Draw summary row with green background
    doc.setDrawColor(230).setLineWidth(0.3);
    doc.setFillColor(COLORS.primary.r, COLORS.primary.g, COLORS.primary.b);
    doc.rect(DIMENSIONS.margin, summaryY, fullWidth, summaryH, "FD");

    // White text for contrast
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold").setFontSize(11);
    
    // Left side - Total Items
    doc.text(
      `Total Item Types: ${totalTypes}`,
      DIMENSIONS.margin + 4,
      summaryY + 8
    );

    // Right side - Total Quantity
    doc.text(
      `Total Quantity: ${totalQty}`,
      pageW - DIMENSIONS.margin - 4,
      summaryY + 8,
      { align: "right" }
    );

    // Reset color
    doc.setTextColor(0, 0, 0);
  };

  // Get last item position
  const getLastItemY = (): number => {
    const { minRowH } = DIMENSIONS.table;
    const headerY = y;
    const tableHeaderHeight = 11;
    const itemsCount = items.length;
    return headerY + tableHeaderHeight + (itemsCount * minRowH);
  };

  const lastY = getLastItemY();
  
  // Check if summary fits on current page
  if (lastY + 20 > pageH - DIMENSIONS.bottomMargin) {
    doc.addPage();
    drawHeaderBar(false);
    drawSummary(DIMENSIONS.headerBarH + 2);
  } else {
    drawSummary(lastY);
  }

  const pages = doc.getNumberOfPages();
  for (let p = 1; p <= pages; p++) {
    doc.setPage(p);
    drawFooter(p, pages);
  }

  doc.save(`inquiry-${inquiryNumber}.pdf`);
};

// QR Code Scanner - Direct Text Display
// When scanned, the QR code shows this information directly:
/*
Example QR Code Content (Plain Text):

Inquiry #: 13122024143055
Customer: John Doe
Company: ABC Trading LLC
Email: john@abc.com
Phone: +966501234567
Items: 5 types
Total Qty: 150
Date: 12/13/2024

Inquiry Number Format: DDMMYYYYHHMMSS
- DD: Day (13)
- MM: Month (12)
- YYYY: Year (2024)
- HH: Hour (14)
- MM: Minute (30)
- SS: Second (55)

Example: 13122024143055 = December 13, 2024 at 14:30:55

Benefits:
✅ Unique inquiry number for each PDF
✅ Visible in PDF header below "Inquiry" title
✅ Included in QR code for verification
✅ Easy to reference in communications
✅ Chronological sorting (oldest to newest)
✅ No website needed - shows text immediately
✅ Works with any QR scanner app
✅ Can be copied/pasted from scanner

The inquiry number appears:
1. In the PDF header (center, below "Inquiry")
2. In the QR code data
3. In the filename (inquiry-13122024143055.pdf)
*/

  return (
    <div className="py-10 sm:py-12">
      <Container className="max-w-5xl">
        <div className="flex items-end justify-between gap-2">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            {t("cartTitle", lang)}
          </h1>
          {totalItems > 0 && (
            <div className="text-sm text-muted-foreground">
              {t("items", lang)}:{" "}
              <span className="font-semibold text-foreground">
                {totalItems}
              </span>
            </div>
          )}
        </div>

        {items.length === 0 ? (
          <div className="mt-6 rounded-xl border border-foreground/10 bg-background p-6 text-center">
            <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-muted text-muted-foreground">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M6 6h15l-1.5 9h-12L6 6z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="9" cy="20" r="1.5" fill="currentColor" />
                <circle cx="18" cy="20" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <p className="text-sm text-muted-foreground">{t("emptyCart", lang)}</p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <Link
                href="/categories"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-white text-sm hover:brightness-110"
              >
                {t("addProducts", lang)}
              </Link>
            </div>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items list */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((it) => {
                const key = `${it.id}|${it.productCode ?? ""}|${it.volume ?? ""}|${it.stockCode ?? ""
                  }|${it.type ?? ""}`;
                return (
                  <div
                    key={key}
                    className="group relative flex items-center gap-4 rounded-2xl border border-foreground/10 bg-gradient-to-br from-background to-muted p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-foreground/10" />
                    <div className="relative h-20 w-20 rounded-xl bg-background/90 ring-1 ring-foreground/10 overflow-hidden">
                      {it.img ? (
                        <Image
                          src={it.img}
                          alt={it.name}
                          fill
                          sizes="80px"
                          className="object-contain"
                        />
                      ) : (
                        <div className="grid h-full w-full place-items-center text-xs text-muted-foreground">
                          IMG
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium leading-snug line-clamp-2 group-hover:text-primary">
                        <Link href={`/p/${it.id}`} className="hover:underline">
                          {it.name}
                        </Link>
                      </div>
                      <div className="mt-1 flex flex-wrap gap-1.5 text-[10px] text-muted-foreground">
                        {it.productCode && (
                          <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 ring-1 ring-foreground/10">
                            Code: {it.productCode}
                          </span>
                        )}
                        {it.volume && (
                          <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 ring-1 ring-foreground/10">
                            Volume: {it.volume}
                          </span>
                        )}
                        {it.type && (
                          <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 ring-1 ring-foreground/10">
                            Type: {it.type}
                          </span>
                        )}
                        {it.stockCode && (
                          <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 ring-1 ring-foreground/10">
                            Stock: {it.stockCode}
                          </span>
                        )}
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <div className="inline-flex items-center rounded-lg border bg-background/70 shadow-sm">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            className="h-8 w-8 text-sm hover:bg-muted rounded-l-lg"
                            onClick={() =>
                              updateQty(it.id, Math.max(1, it.qty - 1), key)
                            }
                          >
                            −
                          </button>
                          <input
                            type="number"
                            min={1}
                            value={it.qty}
                            onChange={(e) =>
                              updateQty(
                                it.id,
                                Math.max(1, Number(e.target.value) || 1),
                                key
                              )
                            }
                            className="h-8 w-14 border-x px-2 text-center text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            aria-label={t("quantity", lang)}
                          />
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            className="h-8 w-8 text-sm hover:bg-muted rounded-r-lg"
                            onClick={() => updateQty(it.id, it.qty + 1, key)}
                          >
                            +
                          </button>
                        </div>
                        <button
                          className="ml-1 inline-flex h-8 w-8 items-center justify-center rounded-lg hover:bg-red-50 text-red-600"
                          onClick={() => remove(it.id, key)}
                          type="button"
                          aria-label={t("remove", lang)}
                          title={t("remove", lang)}
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden
                          >
                            <path
                              d="M6 7h12M10 7v11m4-11v11M4 7h16l-1 12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 7Zm3-2h8l-1 2H8l-1-2Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Summary + actions */}
            <aside className="space-y-4 lg:sticky lg:top-24 self-start">
              <div className="rounded-2xl border border-foreground/10 bg-gradient-to-br from-background to-muted p-4 shadow-sm">
                <div className="text-sm text-muted-foreground">{t("items", lang)}</div>
                <div className="text-2xl font-bold">{totalItems}</div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <button
                    className="rounded-lg border px-3 py-2 text-sm hover:bg-muted"
                    onClick={() => clear()}
                    type="button"
                  >
                    {t("clearCart", lang)}
                  </button>
                  <Link
                    href="/categories"
                    className="inline-flex items-center justify-center rounded-lg border px-3 py-2 text-sm hover:bg-muted"
                  >
                    {t("continueShopping", lang)}
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-foreground/10 bg-gradient-to-br from-background to-muted p-4 space-y-3 shadow-sm">
                <h2 className="text-base font-semibold">{t("yourInfo", lang)}</h2>
                <form ref={formRef} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input
                      id="name"
                      name="name"
                      required
                      className="w-full rounded border px-3 py-2 text-sm"
                      placeholder={t("name", lang)}
                      value={info.name ?? ""}
                      onChange={(e) => setInfo((v) => ({ ...v, name: e.target.value }))}
                    />
                    <input
                      id="company"
                      name="company"
                      required
                      className="w-full rounded border px-3 py-2 text-sm"
                      placeholder={t("company", lang)}
                      value={info.company ?? ""}
                      onChange={(e) => setInfo((v) => ({ ...v, company: e.target.value }))}
                    />
                    <div className="sm:col-span-2">
                      <input
                        id="email"
                        name="email"
                        required
                        type="email"
                        className="w-full rounded border px-3 py-2 text-sm"
                        placeholder={t("email", lang)}
                        value={info.email ?? ""}
                        onChange={(e) => setInfo((v) => ({ ...v, email: e.target.value }))}
                      />
                    </div>
                    <input
                      id="phone"
                      name="phone"
                      required
                      type="tel"
                      pattern="^[+]?[-0-9 ()]{6,}$"
                      title="Please enter a valid phone number"
                      className="w-full rounded border px-3 py-2 text-sm sm:col-span-2"
                      placeholder={t("phone", lang)}
                      value={info.phone ?? ""}
                      onChange={(e) => setInfo((v) => ({ ...v, phone: e.target.value }))}
                    />
                  </div>
                  <textarea
                    id="note"
                    name="note"
                    required
                    className="w-full rounded border px-3 py-2 text-sm"
                    placeholder={t("note", lang)}
                    rows={3}
                    value={info.note ?? ""}
                    onChange={(e) => setInfo((v) => ({ ...v, note: e.target.value }))}
                  />
                </form>
                <p className="text-xs text-muted-foreground">
                  We will use this information to prepare your quotation and reply
                  to your inquiry.
                </p>
              </div>

              {/* Buttons */}
              {/* Buttons with logos */}
              <button
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white text-sm font-medium transition hover:brightness-110"
                onClick={handleSendWhatsApp}
                type="button"
              >
                {/* WhatsApp SVG Logo */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.672.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.372-.025-.521-.075-.149-.672-1.611-.921-2.204-.242-.579-.487-.5-.672-.51l-.573-.01c-.198 0-.52.074-.793.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
                {t("sendWhatsAppInquiry", lang)}
              </button>

              <button
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm transition hover:bg-muted"
                onClick={handleSendEmail}
                type="button"
              >
                {/* Email SVG Logo */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12h.01M12 12h.01M8 12h.01M21 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z"
                  />
                </svg>
                {t("sendEmailInquiry", lang)}
              </button>

              <button
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm transition hover:bg-muted"
                onClick={handleDownloadPDF}
                type="button"
              >
                {/* PDF SVG Logo */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 2h9l5 5v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM15 2v5h5M8 12h8M8 16h8M8 20h8" />
                </svg>
                {t("downloadPDF", lang)}
              </button>


            </aside>
          </div>
        )}
      </Container>
    </div>
  );
}


