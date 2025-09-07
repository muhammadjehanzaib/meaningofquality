"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { generateInquiryPdf, type InquiryData } from "@/utils/inquiryPdf";

interface ImgMeta { dataUrl: string; width: number; height: number }
interface ItemForm { title: string; img?: ImgMeta }

export default function InquiryPage() {
  const [meaningOfQuality, setMeaningOfQuality] = useState("");
  const [customer, setCustomer] = useState("");
  const [items, setItems] = useState<ItemForm[]>([
    { title: "item 1" },
    { title: "item 2" },
    { title: "item 3" },
  ]);
  const [notes, setNotes] = useState("");
  const [logo, setLogo] = useState<ImgMeta | undefined>(undefined);

  function updateItemTitle(idx: number, value: string) {
    setItems((prev) => prev.map((v, i) => (i === idx ? { ...v, title: value } : v)));
  }

  function addItem() {
    setItems((prev) => (prev.length >= 6 ? prev : [...prev, { title: `item ${prev.length + 1}` }]));
  }

  function removeItem(idx: number) {
    setItems((prev) => prev.filter((_, i) => i !== idx));
  }

  const readImageFile = (file: File): Promise<ImgMeta> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result as string;
        const img = new Image();
        img.onload = () => resolve({ dataUrl, width: img.naturalWidth, height: img.naturalHeight });
        img.onerror = reject;
        img.src = dataUrl;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  async function onItemImageChange(idx: number, file?: File | null) {
    if (!file) return;
    const meta = await readImageFile(file);
    setItems((prev) => prev.map((v, i) => (i === idx ? { ...v, img: meta } : v)));
  }

  async function onLogoChange(file?: File | null) {
    if (!file) return;
    const meta = await readImageFile(file);
    setLogo(meta);
  }

  function handleDownload() {
    const data: InquiryData = {
      meaningOfQuality,
      customer,
      notes,
      items: items.slice(0, 6).map((it) => ({
        title: it.title,
        imageDataUrl: it.img?.dataUrl,
        imageWidth: it.img?.width,
        imageHeight: it.img?.height,
      })),
      logoDataUrl: logo?.dataUrl,
      logoWidth: logo?.width,
      logoHeight: logo?.height,
    };
    generateInquiryPdf(data);
  }

  return (
    <Container className="py-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight">Inquiry PDF</h1>
        <p className="mt-2 text-sm text-foreground/70">
          Fill the fields, attach images, then click Download PDF. The PDF will follow your provided layout (image + description per item).
        </p>

        <div className="mt-8 grid gap-8">
          {/* Logo uploader */}
          <section>
            <h2 className="text-base font-semibold">Logo (optional)</h2>
            <div className="mt-3 flex items-center gap-4">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => onLogoChange(e.target.files?.[0])}
              />
              {logo && (
                <img src={logo.dataUrl} alt="logo preview" className="h-10 w-auto rounded border border-foreground/20" />
              )}
            </div>
          </section>

          <section>
            <label className="block text-sm font-medium">Meaning of Quality</label>
            <textarea
              className="mt-2 w-full rounded border border-foreground/20 bg-background p-3 text-sm"
              rows={5}
              value={meaningOfQuality}
              onChange={(e) => setMeaningOfQuality(e.target.value)}
              placeholder="Enter your description"
            />
          </section>

          <section>
            <label className="block text-sm font-medium">Customer</label>
            <textarea
              className="mt-2 w-full rounded border border-foreground/20 bg-background p-3 text-sm"
              rows={5}
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
              placeholder="Customer details"
            />
          </section>

          <section>
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold">Inquiry items (max 6)</h2>
              <Button type="button" variant="secondary" onClick={addItem} disabled={items.length >= 6}>
                Add item
              </Button>
            </div>
            <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {items.slice(0, 6).map((it, i) => (
                <div key={i} className="rounded border border-foreground/15 p-3">
                  <div className="flex items-center justify-between gap-2">
                    <input
                      type="text"
                      className="w-full rounded border border-foreground/20 bg-background p-2 text-sm"
                      value={it.title}
                      onChange={(e) => updateItemTitle(i, e.target.value)}
                      placeholder={`item ${i + 1}`}
                    />
                    <button
                      type="button"
                      className="text-xs text-foreground/60 hover:text-foreground"
                      onClick={() => removeItem(i)}
                      aria-label="Remove item"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="mt-2 flex items-center gap-3">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => onItemImageChange(i, e.target.files?.[0])}
                    />
                    {it.img && (
                      <img src={it.img.dataUrl} alt={`item ${i + 1}`} className="h-16 w-auto rounded border border-foreground/20" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <label className="block text-sm font-medium">Notes (bottom area)</label>
            <textarea
              className="mt-2 w-full rounded border border-foreground/20 bg-background p-3 text-sm"
              rows={4}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Additional notes"
            />
          </section>

          <div className="pt-2">
            <Button type="button" onClick={handleDownload}>
              Download PDF
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
