"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";
import { useEffect } from "react";
import { useLang } from "@/hooks/useLang";
import { t } from "@/data/labels";

export default function CartDrawer() {
  const { drawerOpen, closeDrawer, lastAdded, items, count } = useCart();
  const lang = useLang();

  // close on Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDrawer();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeDrawer]);

  return (
    <div className={`fixed inset-0 z-50 ${drawerOpen ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!drawerOpen}>
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${drawerOpen ? "opacity-100" : "opacity-0"}`}
        onClick={closeDrawer}
      />
      {/* Panel */}
      <aside
        className={`absolute right-0 top-0 h-full w-[90%] max-w-md bg-background shadow-xl transition-transform duration-200 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-label={t("cart", lang)}
      >
        <div className="flex h-full flex-col">
<header className="flex items-center justify-between border-b border-foreground/10 p-4">
            <div className="text-base font-semibold">{t("cart", lang)} ({count})</div>
            <button className="rounded p-2 hover:bg-muted" onClick={closeDrawer} aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
          </header>

          {/* Body */}
          <div className="flex-1 overflow-auto p-4">
            {lastAdded && (
<div className="rounded-lg border border-foreground/10 bg-background p-3">
                <div className="text-xs font-semibold mb-2">{t("addedToCart", lang)}</div>
                <div className="flex items-center gap-3">
<div className="relative h-16 w-16 rounded bg-background ring-1 ring-foreground/10 overflow-hidden">
                    {lastAdded.img ? (
                      <Image src={lastAdded.img} alt={lastAdded.name} fill sizes="64px" className="object-contain" />
                    ) : (
                      <div className="grid h-full w-full place-items-center text-xs text-muted-foreground">IMG</div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium line-clamp-2">{lastAdded.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {lastAdded.productCode ? <span className="mr-2">Code: {lastAdded.productCode}</span> : null}
                      {lastAdded.volume ? <span>Volume: {lastAdded.volume}</span> : null}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Brief list */}
            <div className="mt-4 space-y-2">
              {items.slice(0, 5).map((it) => {
                const key = `${it.id}|${it.productCode ?? ""}|${it.volume ?? ""}|${it.stockCode ?? ""}|${it.type ?? ""}`;
                return (
<div key={key} className="flex items-center gap-3 rounded border border-foreground/10 bg-background p-2">
<div className="relative h-12 w-12 rounded bg-background ring-1 ring-foreground/10 overflow-hidden">
                      {it.img ? (
                        <Image src={it.img} alt={it.name} fill sizes="48px" className="object-contain" />
                      ) : (
                        <div className="grid h-full w-full place-items-center text-[10px] text-muted-foreground">IMG</div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="truncate text-sm font-medium">{it.name}</div>
                      <div className="text-[11px] text-muted-foreground">Qty: {it.qty}</div>
                    </div>
                  </div>
                );
              })}
              {items.length > 5 && (
                <div className="px-2 text-xs text-muted-foreground">+{items.length - 5} more…</div>
              )}
            </div>
          </div>

          {/* Footer */}
<footer className="border-t border-foreground/10 p-4 space-y-2">
            <Link href="/cart" className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:brightness-110" onClick={closeDrawer}>
              {t("goToCart", lang)}
            </Link>
            <button className="inline-flex w-full items-center justify-center rounded-lg border px-4 py-2 text-sm hover:bg-muted" onClick={closeDrawer}>
              {t("continueShopping", lang)}
            </button>
          </footer>
        </div>
      </aside>
    </div>
  );
}
