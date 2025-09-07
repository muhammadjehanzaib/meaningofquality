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

  // PDF Download
  const handleDownloadPDF = async () => {
    if (!ensureFormValid()) return;
    const { jsPDF } = await import("jspdf").then((mod) => mod);
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

    // Colors + Layout
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

        // Center Inquiry
        doc.setFont("helvetica", "bold").setFontSize(18);
        doc.text("Inquiry", pageW / 2, 14, { align: "center" });

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

    // Company + Customer Info
    const drawCompanyAndCustomer = (yStart: number) => {
      const colW = (pageW - DIMENSIONS.margin * 2 - 6) / 2;

      // Company box
      doc.setDrawColor(220).setLineWidth(0.4);
      doc.roundedRect(DIMENSIONS.margin, yStart, colW, DIMENSIONS.infoBoxH, 2, 2, "S");
      doc.setFontSize(11).setFont("helvetica", "bold");
      doc.text("Company Info", DIMENSIONS.margin + 4, yStart + 6);
      doc.setFont("helvetica", "normal").setFontSize(10);
      let y = yStart + 12;
      const companyLines = [
        "Trading Establishment",
        "123 Street, Riyadh",
        "Phone: 0590019826",
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

      // Generated by
      const genY = nextY;
      const generatedBy = "The Meaning of Quality - Website";
      const boxHeight = 12;
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
      doc.setFont("helvetica", "bold").setFontSize(10);
      doc.text("Generated By:", DIMENSIONS.margin + 4, genY + 8);
      doc.setFont("helvetica", "normal");
      doc.text(generatedBy, DIMENSIONS.margin + 35, genY + 8);

      return genY + boxHeight + 8;
    };

    // Table header
    const drawTableHeader = (y: number) => {
      const { idxW, imgW, nameW, metaW, qtyW } = DIMENSIONS.table;
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

      // Left side: Email text
      const emailMsg = "For quotation? Forward this PDF to sale@moq.com.sa or ";
      doc.text(emailMsg, DIMENSIONS.margin, pageH - 6, { align: "left" });

      // WhatsApp clickable link
      const whatsAppText = "WhatsApp us at +966590019826";
      doc.textWithLink(whatsAppText, DIMENSIONS.margin + doc.getTextWidth(emailMsg), pageH - 6, {
        url: "https://wa.me/966590019826"
      });

      // Right side: Page numbering
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
      const { idxW, imgW, nameW, metaW, qtyW, minRowH } = DIMENSIONS.table;
      let yPos = startY;

      const drawRow = async (rowIndex: number, yRow: number): Promise<number | -1> => {
        const it = items[rowIndex];
        if (!it) return 0;
        const rowH = minRowH;
        let x = DIMENSIONS.margin + 2;

        // Page break
        if (yRow + rowH > pageH - DIMENSIONS.bottomMargin) {
          doc.addPage();
          drawHeaderBar(false);
          drawTableHeader(DIMENSIONS.headerBarH + 2);
          return -1;
        }

        // Border
        doc.setDrawColor(230).setLineWidth(0.3);
        doc.rect(DIMENSIONS.margin, yRow, pageW - DIMENSIONS.margin * 2, rowH);

        // Index
        doc.text(String(rowIndex + 1), x, yRow + 7);
        x += idxW;

        // Image
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

        // Item name
        const nameLines = doc.splitTextToSize(it.name || "", nameW - 2);
        doc.text(nameLines, x, yRow + 6);
        x += nameW;

        // Details
        const details: string[] = [];
        if (it.productCode) details.push(`Code: ${it.productCode}`);
        if (it.volume) details.push(`Vol: ${it.volume}`);
        if (it.type) details.push(`Type: ${it.type}`);
        if (it.stockCode) details.push(`Stock: ${it.stockCode}`);
        const detailLines = doc.splitTextToSize(details.join(" | "), metaW - 2);
        doc.text(detailLines, x, yRow + 6);
        x += metaW;

        // Qty
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
    const y = drawCompanyAndCustomer(DIMENSIONS.headerBarH + 2);
    const header = drawTableHeader(y);
    await renderRows(0, header.rowY);

    // Page numbers
    const pages = doc.getNumberOfPages();
    for (let p = 1; p <= pages; p++) {
      doc.setPage(p);
      drawFooter(p, pages);
    }

    doc.save("inquiry.pdf");
  };

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
                {t("categories", lang)}
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm hover:bg-muted"
              >
                {t("products", lang)}
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
                        {it.productCode ? (
                          <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 ring-1 ring-foreground/10">
                            Code: {it.productCode}
                          </span>
                        ) : null}
                        {it.volume ? (
                          <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 ring-1 ring-foreground/10">
                            Volume: {it.volume}
                          </span>
                        ) : null}
                        {it.type ? (
                          <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 ring-1 ring-foreground/10">
                            Type: {it.type}
                          </span>
                        ) : null}
                        {it.stockCode ? (
                          <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 ring-1 ring-foreground/10">
                            Stock: {it.stockCode}
                          </span>
                        ) : null}
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

              <button
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white text-sm font-medium transition hover:brightness-110"
                onClick={handleSendWhatsApp}
                type="button"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M20.5 3.5a10 10 0 1 1-3.2-2.1"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M8 9c.5 1.5 2 3 3.5 3.5M8 9c0-.6.4-1 1-1h.5c.3 0 .6.2.7.5l.3.5c.1.2.1.4 0 .6l-.3.5c-.1.2 0 .5.1.7.3.6.8 1.1 1.4 1.4.2.1.5.2.7.1l.5-.3c.2-.1.4-.1.6 0l.5.3c.2.1.5.4.5.7V16c0 .6-.4 1-1 1H13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {t("sendWhatsAppInquiry", lang)}
              </button>

              <button
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm transition hover:bg-muted"
                onClick={handleDownloadPDF}
                type="button"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
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
