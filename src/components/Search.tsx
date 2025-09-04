"use client";

import { useMemo, useState } from "react";
import { allItems } from "@/data/catalog";
import { useLang } from "@/hooks/useLang";
import { pickAny } from "@/data/i18n";

export default function Search() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const lang = useLang();

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return [] as typeof allItems;
    return allItems.filter((i) => {
      const name = pickAny(i.name, lang).toLowerCase();
      const inName = name.includes(query);
      const inTags = i.tags?.some((t) => t.toLowerCase().includes(query));
      return inName || inTags;
    });
  }, [q, lang]);

  return (
    <>
      <button
        type="button"
        className="inline-flex h-9 w-9 items-center justify-center rounded hover:bg-muted"
        aria-label="Search"
        onClick={() => setOpen(true)}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
          <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setOpen(false)}>
          <div
            className="absolute left-1/2 top-16 w-[92%] max-w-2xl -translate-x-1/2 rounded-lg bg-background p-4 shadow-lg ring-1 ring-black/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
                <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <input
                autoFocus
                placeholder="Search products…"
                className="w-full bg-transparent outline-none placeholder:text-muted-foreground/70"
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
              <button
                type="button"
                className="text-sm text-muted-foreground hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                Esc
              </button>
            </div>
            <div className="mt-4 max-h-72 overflow-auto divide-y divide-black/5">
              {filtered.length === 0 && (
                <div className="py-6 text-sm text-muted-foreground">No results.</div>
              )}
              {filtered.map((i) => (
                <a key={i.id} href={`/p/${i.id}`} className="block py-3 hover:bg-muted rounded px-2">
                  <div className="text-sm font-medium">{pickAny(i.name, lang)}</div>
                  <div className="text-xs text-muted-foreground capitalize">{i.categoryId}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
