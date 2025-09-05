"use client";

import ProductTile from "@/components/ui/ProductTile";
import { productImageByItemId } from "@/data/assets";
import type { Item } from "@/data/catalog";
import type { Subcategory } from "@/data/subcategories";
import { useState } from "react";

export default function CategoryClient({ items, subcategories }: { items: Item[]; subcategories: Subcategory[] }) {
  const [active, setActive] = useState<string | null>(null);

  const filtered = active ? items.filter((i) => i.tags?.includes(active)) : items;

  return (
    <div>
      {subcategories && subcategories.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          <button
            type="button"
            className={`rounded-full border px-3 py-1 text-xs ${active === null ? "bg-primary text-white" : "hover:bg-muted"}`}
            onClick={() => setActive(null)}
          >
            All
          </button>
          {subcategories.map((sc) => (
            <button
              key={sc.id}
              type="button"
              className={`rounded-full border px-3 py-1 text-xs ${active === sc.id ? "bg-primary text-white" : "hover:bg-muted"}`}
              onClick={() => setActive(sc.id)}
            >
              {typeof sc.title === "string" ? sc.title : sc.title.en}
            </button>
          ))}
        </div>
      )}

      {filtered.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <ProductTile key={p.id} title={p.name} imgSrc={productImageByItemId[p.id]} href={`/p/${p.id}`} productId={p.id} showCtas />
          ))}
        </div>
      ) : (
        <p className="mt-8 text-sm text-muted-foreground">No products found in this subcategory.</p>
      )}
    </div>
  );
}
