"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import { useCart } from "@/contexts/CartContext";
import { useLang } from "@/hooks/useLang";
import { t } from "@/data/labels";
import { WHATSAPP_NUMBER } from "@/data/site";
import { buildWhatsAppMessage, type ClientInfo } from "@/utils/whatsapp";
import { useState } from "react";

export default function CartPage() {
  const { items, updateQty, remove, clear } = useCart();
  const lang = useLang();
  const [info, setInfo] = useState<ClientInfo>({});

  const totalItems = items.reduce((acc, it) => acc + it.qty, 0);

  const handleSendWhatsApp = () => {
    const msg = buildWhatsAppMessage(items, info);
    const encoded = encodeURIComponent(msg);
    const base = WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}` : `https://wa.me/`;
    const url = `${base}?text=${encoded}`;
    window.open(url, "_blank");
  };

  const handleDownloadPDF = async () => {
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF();
    let y = 14;

    doc.setFontSize(14);
    doc.text("Inquiry", 14, y);
    y += 8;

    doc.setFontSize(10);
    if (info.name) { doc.text(`Name: ${info.name}`, 14, y); y += 6; }
    if (info.company) { doc.text(`Company: ${info.company}`, 14, y); y += 6; }
    if (info.email) { doc.text(`Email: ${info.email}`, 14, y); y += 6; }
    if (info.phone) { doc.text(`Phone: ${info.phone}`, 14, y); y += 6; }
    if (info.note) { doc.text(`Note: ${info.note}`, 14, y); y += 6; }
    y += 4;

    doc.setFontSize(12);
    doc.text("Items", 14, y);
    y += 6;
    doc.setFontSize(10);

    items.forEach((it, idx) => {
      const lines: string[] = [
        `${idx + 1}. ${it.name}`,
        it.productCode ? `Code: ${it.productCode}` : "",
        it.volume ? `Volume: ${it.volume}` : "",
        `Qty: ${it.qty}`,
      ].filter(Boolean);
      lines.forEach((line) => { doc.text(line, 14, y); y += 5; });
      y += 2;
      if (y > 270) { doc.addPage(); y = 14; }
    });

    doc.save("inquiry.pdf");
  };

  return (
    <div className="py-10 sm:py-12">
      <Container className="max-w-5xl">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">{t("cartTitle", lang)}</h1>

        {items.length === 0 ? (
          <p className="mt-6 text-sm text-muted-foreground">{t("emptyCart", lang)}</p>
        ) : (
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items list */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((it) => {
                const key = `${it.id}|${it.productCode ?? ""}|${it.volume ?? ""}`;
                return (
                  <div key={key} className="flex items-center gap-4 rounded-lg border border-black/5 bg-background p-4">
                    <div className="relative h-20 w-20 rounded bg-white ring-1 ring-black/5 overflow-hidden">
                      {it.img ? (
                        <Image src={it.img} alt={it.name} fill sizes="80px" className="object-contain" />
                      ) : (
                        <div className="grid h-full w-full place-items-center text-xs text-muted-foreground">IMG</div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{it.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {it.productCode ? <span className="mr-2">Code: {it.productCode}</span> : null}
                        {it.volume ? <span>Volume: {it.volume}</span> : null}
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <input
                          type="number"
                          min={1}
                          value={it.qty}
                          onChange={(e) => updateQty(it.id, Math.max(1, Number(e.target.value) || 1), key)}
                          className="h-8 w-20 rounded border px-2 text-sm"
                        />
                        <button
                          className="text-xs text-red-600 hover:underline"
                          onClick={() => remove(it.id, key)}
                          type="button"
                        >
                          {t("remove", lang)}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Summary + actions */}
            <aside className="space-y-4">
              <div className="rounded-lg border border-black/5 bg-background p-4">
                <div className="text-sm text-muted-foreground">{t("items", lang)}</div>
                <div className="text-2xl font-bold">{totalItems}</div>
                <button
                  className="mt-3 w-full rounded border px-3 py-2 text-sm hover:bg-muted"
                  onClick={() => clear()}
                  type="button"
                >
                  {t("clearCart", lang)}
                </button>
              </div>

              <div className="rounded-lg border border-black/5 bg-background p-4 space-y-3">
                <h2 className="text-base font-semibold">{t("yourInfo", lang)}</h2>
                <input className="w-full rounded border px-3 py-2 text-sm" placeholder={t("name", lang)} onChange={(e) => setInfo((v) => ({ ...v, name: e.target.value }))} />
                <input className="w-full rounded border px-3 py-2 text-sm" placeholder={t("company", lang)} onChange={(e) => setInfo((v) => ({ ...v, company: e.target.value }))} />
                <input className="w-full rounded border px-3 py-2 text-sm" placeholder={t("email", lang)} onChange={(e) => setInfo((v) => ({ ...v, email: e.target.value }))} />
                <input className="w-full rounded border px-3 py-2 text-sm" placeholder={t("phone", lang)} onChange={(e) => setInfo((v) => ({ ...v, phone: e.target.value }))} />
                <textarea className="w-full rounded border px-3 py-2 text-sm" placeholder={t("note", lang)} rows={3} onChange={(e) => setInfo((v) => ({ ...v, note: e.target.value }))} />
              </div>

              <button
                className="w-full rounded-lg bg-green-600 px-4 py-2 text-white text-sm hover:brightness-110"
                onClick={handleSendWhatsApp}
                type="button"
              >
                {t("sendWhatsAppInquiry", lang)}
              </button>

              <button
                className="w-full rounded-lg border px-4 py-2 text-sm hover:bg-muted"
                onClick={handleDownloadPDF}
                type="button"
              >
                {t("downloadPDF", lang)}
              </button>
            </aside>
          </div>
        )}
      </Container>
    </div>
  );
}
