import type { LString } from "@/data/i18n";

export type Category = {
  id: string;
  title: LString;
  desc?: LString;
};

export type Item = {
  id: string;
  name: LString;
  categoryId: string;
  tags?: string[];
  priceRange?: { min: number; max: number };
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

export const solutions: Category[] = [
  { id: "hvac", title: { en: "HVAC", ar: "التكييف والتهوية والتبريد" } },
  { id: "automotive", title: { en: "Automotive", ar: "السيارات" } },
  { id: "parks", title: { en: "Parks & Social Areas", ar: "الحدائق والمساحات العامة" } },
  { id: "trucks", title: { en: "Trucks & Long Vehicles", ar: "الشاحنات والمركبات الطويلة" } },
  { id: "pool", title: { en: "Pool & Aqua", ar: "المسابح والمياه" } },
  { id: "caravans", title: { en: "Caravans", ar: "الكرافانات" } },
  { id: "bike", title: { en: "Bike / Motorbike", ar: "الدراجات والدراجات النارية" } },
  { id: "work-machines", title: { en: "Work & Agriculture", ar: "الآلات والعمل الزراعي" } },
];

export const newProducts: Item[] = [
  { id: "np-1", name: { en: "AC578 Sanitary Bath & Kitchen Acrylic Sealant", ar: "AC578 مانع تسرب أكريليك للمطبخ والحمام" }, categoryId: "sealants", tags: ["acrylic", "bath"], priceRange: { min: 10, max: 50 } },
  { id: "np-2", name: { en: "740 Allbond Hybrid", ar: "740 أولبوند هجين" }, categoryId: "adhesives", tags: ["hybrid"], priceRange: { min: 10, max: 20 } },
  { id: "np-3", name: { en: "AC580 Rapid Seal", ar: "AC580 رابيد سيل" }, categoryId: "sealants", tags: ["rapid"], priceRange: { min: 10, max: 20 } },
  { id: "np-4", name: { en: "702HY Super Glue Cyanoacrylate", ar: "702HY لاصق فائق سيانو أكريلات" }, categoryId: "adhesives", tags: ["cyanoacrylate"], priceRange: { min: 10, max: 20 } },
  { id: "np-5", name: { en: "E360 Plast Weld", ar: "E360 بلاست ويلد" }, categoryId: "adhesives", tags: ["plastic", "weld"], priceRange: { min: 10, max: 20 } },
  { id: "np-6", name: { en: "HB262 Hybrid Wood Flooring Adhesive", ar: "HB262 لاصق هجين لأرضيات الخشب" }, categoryId: "adhesives", tags: ["wood", "flooring"], priceRange: { min: 10, max: 20 } },
  { id: "840P", name: { en: "840P B2 Fire Rated PU Gun Foam", ar: "840P لاصق هجين لأرضيات الخشب" }, categoryId: "fire-rated", tags: ["wood", "flooring"], priceRange: { min: 10, max: 20 } }
];

export const mostVisited: Item[] = [
  { id: "mv-1", name: { en: "805P PU Gun Foam Multi Purpose", ar: "805P رغوة مسدس PU متعددة الأغراض" }, categoryId: "pu-foams", priceRange: { min: 10, max: 20 } },
  { id: "mv-2", name: { en: "Fast 70 Mega PU Gun Foam", ar: "فاست 70 ميجا رغوة مسدس PU" }, categoryId: "pu-foams", priceRange: { min: 10, max: 20 } },
  { id: "mv-3", name: { en: "610 PU Express Montage Adhesive (Transparent)", ar: "610 لاصق تركيب PU إكسبريس (شفاف)" }, categoryId: "adhesives", priceRange: { min: 10, max: 20 } },
  { id: "mv-4", name: { en: "PA370 Express PU Wood Glue (Marine Adhesive)", ar: "PA370 غراء خشب PU إكسبريس (بحري)" }, categoryId: "adhesives", priceRange: { min: 10, max: 20 } },
  { id: "mv-5", name: { en: "1500 Heat Fighter", ar: "1500 مقاوم الحرارة" }, categoryId: "aerosols", priceRange: { min: 10, max: 20 } },
  { id: "mv-6", name: { en: "705 Universal Fast Adhesive", ar: "705 لاصق سريع عالمي" }, categoryId: "adhesives", priceRange: { min: 10, max: 20 } }
];

export const allItems: Item[] = [...newProducts, ...mostVisited];
