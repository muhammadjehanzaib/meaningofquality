import type { LString } from "@/data/i18n";

export type Subcategory = { id: string; title: LString; categoryId: string };

export const subcategoriesByCategoryId: Record<string, Subcategory[]> = {
  adhesives: [
    { id: "hybrid", title: { en: "Hybrid (MS Polymer)", ar: "هجين (MS Polymer)" }, categoryId: "adhesives" },
    { id: "cyanoacrylate", title: { en: "Cyanoacrylate", ar: "سيانو أكريلات" }, categoryId: "adhesives" },
    { id: "wood", title: { en: "Wood Glue", ar: "غراء الخشب" }, categoryId: "adhesives" },
    { id: "plastic", title: { en: "Plastic Weld", ar: "لحام البلاستيك" }, categoryId: "adhesives" },
  ],
  sealants: [
    { id: "acrylic", title: { en: "Acrylic", ar: "أكريليك" }, categoryId: "sealants" },
    { id: "rapid", title: { en: "Rapid", ar: "سريع" }, categoryId: "sealants" },
  ],
  "pu-foams": [
    { id: "all-season", title: { en: "All Season", ar: "كل المواسم" }, categoryId: "pu-foams" },
    { id: "fire-rated", title: { en: "Fire Rated", ar: "مقاوم للحريق" }, categoryId: "pu-foams" },
  ],
  aerosols: [
    { id: "cleaner", title: { en: "Cleaners", ar: "منظفات" }, categoryId: "aerosols" },
    { id: "lubricant", title: { en: "Lubricants", ar: "زيوت" }, categoryId: "aerosols" },
  ],
};

export const subcategories: Subcategory[] = Object.values(subcategoriesByCategoryId).flat();
