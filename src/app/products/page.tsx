"use client";

import Container from "@/components/ui/Container";
import { useLang } from "@/hooks/useLang";
import { t } from "@/data/labels";

const groups = [
  {
    id: "adhesives",
    title: "Adhesives",
    items: ["PU Construction", "Epoxy Metal", "MS Polymer", "Wood D3/D4"],
  },
  {
    id: "sealants",
    title: "Sealants",
    items: ["Silicone Neutral", "Sanitary Silicone", "Acrylic Painter's", "Hybrid Flex"],
  },
  {
    id: "foams",
    title: "PU Foams",
    items: ["Gun Foam All-Season", "Fire Rated Foam", "Straw Foam"],
  },
  {
    id: "sprays",
    title: "Aerosols",
    items: ["Brake Cleaner", "Chain Lube", "Zinc Spray", "Engine Degreaser"],
  },
];

export default function ProductsPage() {
  const lang = useLang();
  return (
    <div className="py-14 sm:py-16">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight">{t("products", lang)}</h1>
        <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
          {/* Keep placeholder English for now; can be localized later if needed */}
          Browse categories inspired by the reference site. Replace with your own SKUs,
          images and TDS/SDS links when available.
        </p>

        <div className="mt-10 space-y-10">
          {groups.map((g) => (
            <section key={g.id} id={g.id}>
              <h2 className="text-xl font-semibold">{g.title}</h2>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {g.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-black/5 bg-background p-5 hover:shadow-sm transition-shadow"
                  >
                    <div className="h-9 w-9 rounded bg-primary/10 text-primary grid place-items-center text-xs font-bold">
                      {g.title.charAt(0)}
                    </div>
                    <h3 className="mt-3 text-base font-medium">{item}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Static placeholder. Add details and datasheets later.
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </div>
  );
}
