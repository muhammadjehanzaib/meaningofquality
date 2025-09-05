import type { LString } from "@/data/i18n";

export type Subcategory = { id: string; title: LString };

export const subcategoriesByCategoryId: Record<string, Subcategory[]> = {
  adhesives: [
    { id: "hybrid", title: { en: "Hybrid (MS Polymer)", ar: "هجين (MS Polymer)" } },
    { id: "cyanoacrylate", title: { en: "Cyanoacrylate", ar: "سيانو أكريلات" } },
    { id: "wood", title: { en: "Wood Glue", ar: "غراء الخشب" } },
    { id: "plastic", title: { en: "Plastic Weld", ar: "لحام البلاستيك" } },
  ],
  sealants: [
    { id: "acrylic", title: { en: "Acrylic", ar: "أكريليك" } },
    { id: "rapid", title: { en: "Rapid", ar: "سريع" } },
  ],
  "pu-foams": [
    { id: "all-season", title: { en: "All Season", ar: "كل المواسم" } },
    { id: "fire-rated", title: { en: "Fire Rated", ar: "مقاوم للحريق" } },
  ],
  aerosols: [
    { id: "cleaner", title: { en: "Cleaners", ar: "منظفات" } },
    { id: "lubricant", title: { en: "Lubricants", ar: "زيوت" } },
  ],
};
