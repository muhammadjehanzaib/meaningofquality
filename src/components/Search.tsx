"use client";

import { useMemo, useState, useEffect } from "react";
import { allItems, categories } from "@/data/catalog";
import { useLang } from "@/hooks/useLang";
import { pickAny } from "@/data/i18n";
import { t } from "@/data/labels";
import { productImageByItemId } from "@/data/assets";
import Image from "next/image";

export default function Search() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const lang = useLang();

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return [] as typeof allItems;
    return allItems.filter((i) => {
      const name = pickAny(i.name, lang).toLowerCase();
      const brand = i.Brand.toLowerCase();
      const category = i.categoryId.toLowerCase();
      return name.includes(query) || brand.includes(query) || category.includes(query);
    });
  }, [q, lang]);

  const getCategoryTitle = (id: string) => {
    const cat = categories.find((c) => c.id === id);
    return cat ? pickAny(cat.title, lang) : id;
  };

  return (
    <>
      {/* Search Button */}
      <button
        type="button"
        className="inline-flex h-9 w-9 items-center justify-center rounded hover:bg-muted transition"
        aria-label={t("search", lang)}
        onClick={() => setOpen(true)}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {/* Search Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl rounded-lg bg-background p-4 shadow-lg ring-1 ring-black/10 animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="flex items-center gap-2 border-b border-muted pb-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <input
                autoFocus
                placeholder={t("searchProducts", lang)}
                className="w-full bg-transparent outline-none placeholder:text-muted-foreground/70 text-sm"
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
              <button
                type="button"
                className="text-sm text-muted-foreground hover:text-foreground transition"
                onClick={() => setOpen(false)}
              >
                {t("esc", lang)}
              </button>
            </div>

            {/* Results */}
            <div className="mt-4 max-h-80 overflow-auto">
              {filtered.length === 0 ? (
                <div className="py-6 text-center text-sm text-muted-foreground">{t("noResults", lang)}</div>
              ) : (
                filtered.map((item) => (
                  <a
                    key={item.id}
                    href={`/p/${item.id}`}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition"
                  >
                    {/* Product Image */}
                    <div className="w-14 h-14 flex-shrink-0">
                      <Image
                        src={productImageByItemId[item.id]}
                        alt={pickAny(item.name, lang)}
                        className="w-full h-full object-contain rounded"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <div className="text-sm font-medium text-foreground">{pickAny(item.name, lang)}</div>
                      <div className="text-xs text-muted-foreground flex gap-2">
                        <span>{getCategoryTitle(item.categoryId)}</span>
                        <span>• {item.Brand}</span>
                      </div>
                    </div>
                  </a>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
