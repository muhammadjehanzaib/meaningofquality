import type { LString } from "@/data/i18n";

export type Category = {
  id: string;
  title: LString;
  desc?: LString;
};

export type Subcategory = {
  id: string;
  title: LString;
  categoryId: string;
};

export type Item = {
  id: string;
  name: LString;
  categoryId: string;
  subcategoryId?: string;
  priceRange?: { min: number; max: number };
  Brand: string;
};

export const categories: Category[] = [
  { id: "fire-rated", title: { en: "Fire Rated Series", ar: "حماية من الحريق" } },
  { id: "adhesives", title: { en: "Adhesives & Glues", ar: "لاصقات وغراء" } },
  { id: "sealants", title: { en: "Sealants", ar: "مانعات التسرب" } },
  { id: "pu-foams", title: { en: "PU Foams", ar: "رغوات البولي يوريثان" } },
  { id: "coating-system", title: { en: "Coating System", ar: "نظام الطلاء" } },
  { id: "aerosols", title: { en: "Aerosols", ar: "عبوات رش" } },
  { id: "automotive", title: { en: "Automotive", ar: "السيارات" } },
  { id: "industrial", title: { en: "Industrial", ar: "صناعي" } },
  { id: "anaerobics", title: { en: "Anaerobics", ar: "اللاهوائية" } },
  { id: "spray-paint", title: { en: "Spray Paints", ar: "دهانات الرش" } },
  { id: "accessories", title: { en: "Accessories", ar: "إكسسوارات" } }
];

export const subcategories: Subcategory[] = [
  { id: "hybrid", title: { en: "Hybrid (MS Polymer)", ar: "هجين (MS Polymer)" }, categoryId: "adhesives" },
  { id: "cyanoacrylate", title: { en: "Cyanoacrylate", ar: "سيانو أكريلات" }, categoryId: "adhesives" },
  { id: "wood", title: { en: "Wood Glue", ar: "غراء الخشب" }, categoryId: "adhesives" },
  { id: "plastic", title: { en: "Plastic Weld", ar: "لحام البلاستيك" }, categoryId: "adhesives" },
  { id: "acrylic", title: { en: "Acrylic", ar: "أكريليك" }, categoryId: "sealants" },
  { id: "rapid", title: { en: "Rapid", ar: "سريع" }, categoryId: "sealants" },
  { id: "all-season", title: { en: "All Season", ar: "كل المواسم" }, categoryId: "pu-foams" },
  { id: "fire-rated", title: { en: "Fire Rated", ar: "مقاوم للحريق" }, categoryId: "pu-foams" },
  { id: "cleaner", title: { en: "Cleaners", ar: "منظفات" }, categoryId: "aerosols" },
  { id: "lubricant", title: { en: "Lubricants", ar: "زيوت" }, categoryId: "aerosols" }
];

export const newProducts: Item[] = [
  { id: "np-1", name: { en: "AC578 Sanitary Bath & Kitchen Acrylic Sealant", ar: "AC578 مانع تسرب أكريليك للمطبخ والحمام" }, categoryId: "adhesives", subcategoryId: "hybrid", priceRange: { min: 10, max: 50 }, Brand : "Akfix" },
  { id: "np-2", name: { en: "740 Allbond Hybrid", ar: "740 أولبوند هجين" }, categoryId: "adhesives", subcategoryId: "hybrid", priceRange: { min: 10, max: 20 }, Brand : "Sultan" },
  { id: "np-3", name: { en: "AC580 Rapid Seal", ar: "AC580 رابيد سيل" }, categoryId: "sealants", subcategoryId: "rapid", priceRange: { min: 10, max: 20 }, Brand : "Sultan" },
  { id: "np-4", name: { en: "702HY Super Glue Cyanoacrylate", ar: "702HY لاصق فائق سيانو أكريلات" }, categoryId: "adhesives", subcategoryId: "cyanoacrylate", priceRange: { min: 10, max: 20 }, Brand : "Sultan" },
  { id: "np-5", name: { en: "E360 Plast Weld", ar: "E360 بلاست ويلد" }, categoryId: "adhesives", subcategoryId: "plastic", priceRange: { min: 10, max: 20 }, Brand : "Sultan" },
  { id: "np-6", name: { en: "HB262 Hybrid Wood Flooring Adhesive", ar: "HB262 لاصق هجين لأرضيات الخشب" }, categoryId: "adhesives", subcategoryId: "hybrid", priceRange: { min: 10, max: 20 }, Brand : "Sultan" },
  { id: "840P", name: { en: "840P B2 Fire Rated PU Gun Foam", ar: "840P لاصق هجين لأرضيات الخشب" }, categoryId: "adhesives", subcategoryId: "wood", priceRange: { min: 10, max: 100 }, Brand : "Sultan" },
  { id: "np-1765966726374", name: { en: "New Product testing New things", ar: "منتج جديد" }, categoryId: "adhesives", subcategoryId: "plastic", priceRange: { min: 20, max: 60 }, Brand : "Sultan" }
];

export const mostVisited: Item[] = [
  { id: "mv-1", name: { en: "805P PU Gun Foam Multi Purpose", ar: "805P رغوة مسدس PU متعددة الأغراض" }, categoryId: "pu-foams", subcategoryId: "all-season", priceRange: { min: 10, max: 20 }, Brand : "Sultan" },
  { id: "mv-2", name: { en: "Fast 70 Mega PU Gun Foam", ar: "فاست 70 ميجا رغوة مسدس PU" }, categoryId: "pu-foams", subcategoryId: "all-season", priceRange: { min: 10, max: 20 }, Brand : "Sultan" },
  { id: "mv-3", name: { en: "610 PU Express Montage Adhesive (Transparent)", ar: "610 لاصق تركيب PU إكسبريس (شفاف)" }, categoryId: "adhesives", subcategoryId: "hybrid", priceRange: { min: 10, max: 20 }, Brand : "Sultan" },
  { id: "mv-4", name: { en: "PA370 Express PU Wood Glue (Marine Adhesive)", ar: "PA370 غراء خشب PU إكسبريس (بحري)" }, categoryId: "adhesives", subcategoryId: "wood", priceRange: { min: 10, max: 20 }, Brand : "Sultan" },
  { id: "mv-5", name: { en: "1500 Heat Fighter", ar: "1500 مقاوم الحرارة" }, categoryId: "aerosols", subcategoryId: "lubricant", priceRange: { min: 10, max: 20 }, Brand : "Sultan" },
  { id: "mv-6", name: { en: "705 Universal Fast Adhesive", ar: "705 لاصق سريع عالمي" }, categoryId: "adhesives", subcategoryId: "hybrid", priceRange: { min: 10, max: 20 }, Brand : "Sultan" }
];

export const allItems: Item[] = [...newProducts, ...mostVisited];
