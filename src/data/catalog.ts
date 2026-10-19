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
  isNew?: boolean;          // flag for newProducts
  isMostVisited?: boolean;  // flag for mostVisited
  isFeatured?: boolean;     // flag for featuredProducts
};

export const categories: Category[] = [
  { id: "adhesives", title: { en: "Adhesives & Glues", ar: "لاصقات وغراء" } },
  { id: "category-1792296041915", title: { en: "Brad Nails (J Series)", ar: "مسامير دقيقة (سلسلة J)" } },
  { id: "category-1792073343435", title: { en: "Brad Nails (U Series)", ar: "مسامير دقيقة (سلسلة U)" } },
  { id: "category-1792073296472", title: { en: "Brad Nails (F Series)", ar: "مسامير براد (سلسلة F)" } },
  { id: "category-1792073082887", title: { en: "Steel Nails (ST Series)", ar: "مسامير فولاذية (سلسلة ST)" } }
];

export const subcategories: Subcategory[] = [
  { id: "subcategory-1792074373839", title: { en: "Sultan Wood Glue", ar: "غراء خشب سلطان" }, categoryId: "adhesives" },
  { id: "subcategory-1792074350245", title: { en: "Sultan PU Foam ", ar: "رغوة البولي يوريثان سلطان" }, categoryId: "adhesives" },
  { id: "subcategory-1792074317951", title: { en: "Sultan Spray Glue", ar: "غراء بخاخ سلطان" }, categoryId: "adhesives" }
];

export const newProducts: Item[] = [
  { id: "sultan-spray-glue-400ml", name: { en: "Sultan Spray Glue 400ml + 100gr", ar: "غراء بخاخ سلطان 400 مل+ 100 غرام" }, categoryId: "adhesives", subcategoryId: "subcategory-1792074317951", Brand: "Sultan" },
  { id: "sultan-pu-foam-750ml", name: { en: "Sultan PU Foam 750ml / 800gr", ar: "بولي يوريثين رغوة سلطان 750 مل / 800 غرام" }, categoryId: "adhesives", subcategoryId: "subcategory-1792074350245", Brand: "Sultan" },
  { id: "sultan-wood-glue-370kg", name: { en: "Sultan Wood Glue 3.70Kg x 4 Buckets/Carton", ar: "غراء خشب سلطان ٣،٧٠ كجم × ٤ سطل/كرتون" }, categoryId: "adhesives", subcategoryId: "subcategory-1792074373839", Brand: "Sultan" },
  { id: "u-nails-5540", name: { en: "U Nails 5540 Sultan", ar: "مسمار دبوس سلطان U 5540" }, categoryId: "category-1792073343435", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "u-nails-5545", name: { en: "U Nails 5545 Sultan", ar: "مسمار دبوس سلطان U 5545" }, categoryId: "category-1792073343435", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "u-nails-5550", name: { en: "U Nails 5550 Sultan", ar: "مسمار دبوس سلطان U 5550" }, categoryId: "category-1792073343435", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "u-nails-8006", name: { en: "8006 Fine Crown Staples Sultan", ar: "دبابيس سلطان ذات تاج دقيق 8006" }, categoryId: "category-1792073343435", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "u-nails-8008", name: { en: "U Nails 8008 Sultan", ar: "مسمار دبوس سلطان U 8008" }, categoryId: "category-1792073343435", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "u-nails-8010", name: { en: "U Nails 8010 Sultan", ar: "مسمار دبوس سلطان U 8010" }, categoryId: "category-1792073343435", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "u-nails-8012", name: { en: "U Nails 8012 Sultan", ar: "مسمار دبوس سلطان U 8012" }, categoryId: "category-1792073343435", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "u-nails-8014", name: { en: "U Nails 8014 Sultan", ar: "مسمار دبوس سلطان U 8014" }, categoryId: "category-1792073343435", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "u-nails-8016", name: { en: "U Nails 8016 Sultan", ar: "مسمار دبوس سلطان U 8016" }, categoryId: "category-1792073343435", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "u-nails-1406", name: { en: "1406 Fine Wire Staples Sultan", ar: "دبابيس سلطان ذات السلك الرفيع 1406" }, categoryId: "category-1792073343435", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "u-nails-1408", name: { en: "U Nails 1408 Sultan", ar: "مسمار دبوس سلطان U 1408" }, categoryId: "category-1792073343435", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "u-nails-1410", name: { en: "U Nails 1410 Sultan", ar: "مسمار دبوس سلطان U 1410" }, categoryId: "category-1792073343435", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "u-nails-1412", name: { en: "U Nails 1412 Sultan", ar: "مسمار دبوس سلطان U 1412" }, categoryId: "category-1792073343435", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "u-nails-1414", name: { en: "U Nails 1414 Sultan", ar: "مسمار دبوس سلطان U 1414" }, categoryId: "category-1792073343435", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "u-nails-1416", name: { en: "U Nails 1416 Sultan", ar: "مسمار دبوس سلطان U 1416" }, categoryId: "category-1792073343435", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "u-nails-1008j", name: { en: "U Nails Sultan 1008J", ar: "مسمار دبوس يو سلطان 1008ج" }, categoryId: "category-1792296041915", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "u-nails-1010j", name: { en: "U Nails Sultan 1010J", ar: "مسمار دبوس يو سلطان 1010ج" }, categoryId: "category-1792296041915", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "u-nails-1013j", name: { en: "U Nails Sultan 1013J", ar: "مسمار دبوس يو سلطان 1013ج" }, categoryId: "category-1792296041915", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "u-nails-9040", name: { en: "U Nails Sultan 9040", ar: "مسمار دبوس يو سلطان 9040" }, categoryId: "category-1792073343435", priceRange: { min: 0, max: 0 }, Brand: "Sultan" },
  { id: "brad-nails-f10", name: { en: "F10 Brad Nails Sultan", ar: "مسمار دبوس سلطان F10" }, categoryId: "category-1792073296472", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "brad-nails-f15", name: { en: "F15 Brad Nails Sultan", ar: "مسمار دبوس سلطان F15" }, categoryId: "category-1792073296472", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "brad-nails-f20", name: { en: "F20 Brad Nails Sultan", ar: "مسمار دبوس سلطان F20" }, categoryId: "category-1792073296472", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "brad-nails-f25", name: { en: "F25 Brad Nails Sultan", ar: "مسمار دبوس سلطان F25" }, categoryId: "category-1792073296472", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "brad-nails-f30", name: { en: "F30 Brad Nails Sultan", ar: "مسمار دبوس سلطان F30" }, categoryId: "category-1792073296472", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "brad-nails-f35", name: { en: "F35 Brad Nails Sultan", ar: "مسمار دبوس سلطان F35" }, categoryId: "category-1792073296472", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "brad-nails-f40", name: { en: "F40 Brad Nails Sultan", ar: "مسمار دبوس سلطان F40" }, categoryId: "category-1792073296472", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "brad-nails-f45", name: { en: "F45 Brad Nails Sultan", ar: "مسمار دبوس سلطان F45" }, categoryId: "category-1792073296472", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "brad-nails-f50", name: { en: "F50 Brad Nails Sultan", ar: "مسمار دبوس سلطان F50" }, categoryId: "category-1792073296472", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "steel-nails-st18", name: { en: "ST18 Steel Nails", ar: "مسامير فولاذية ST18" }, categoryId: "category-1792073082887", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "steel-nails-st25", name: { en: "ST25 Steel Nails", ar: "مسامير فولاذية ST25" }, categoryId: "category-1792073082887", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "steel-nails-st32", name: { en: "ST32 Steel Nails", ar: "مسامير فولاذية ST32" }, categoryId: "category-1792073082887", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "steel-nails-st38", name: { en: "ST38 Steel Nails", ar: "مسامير فولاذية ST38" }, categoryId: "category-1792073082887", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "steel-nails-st50", name: { en: "ST50 Steel Nails", ar: "مسامير فولاذية ST50" }, categoryId: "category-1792073082887", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
];

export const mostVisited: Item[] = [
  { id: "sultan-spray-glue-400ml", name: { en: "Sultan Spray Glue 400ml + 100gr", ar: "غراء بخاخ سلطان 400 مل+ 100 غرام" }, categoryId: "adhesives", subcategoryId: "subcategory-1792074317951", Brand: "Sultan" },
  { id: "sultan-pu-foam-750ml", name: { en: "Sultan PU Foam 750ml / 800gr", ar: "بولي يوريثين رغوة سلطان 750 مل / 800 غرام" }, categoryId: "adhesives", subcategoryId: "subcategory-1792074350245", Brand: "Sultan" },
  { id: "sultan-wood-glue-370kg", name: { en: "Sultan Wood Glue 3.70Kg x 4 Buckets/Carton", ar: "غراء خشب سلطان ٣،٧٠ كجم × ٤ سطل/كرتون" }, categoryId: "adhesives", subcategoryId: "subcategory-1792074373839", Brand: "Sultan" },
  { id: "u-nails-5540", name: { en: "U Nails 5540 Sultan", ar: "مسمار دبوس سلطان U 5540" }, categoryId: "category-1792073343435", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "u-nails-5545", name: { en: "U Nails 5545 Sultan", ar: "مسمار دبوس سلطان U 5545" }, categoryId: "category-1792073343435", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "u-nails-5550", name: { en: "U Nails 5550 Sultan", ar: "مسمار دبوس سلطان U 5550" }, categoryId: "category-1792073343435", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "u-nails-8006", name: { en: "8006 Fine Crown Staples Sultan", ar: "دبابيس سلطان ذات تاج دقيق 8006" }, categoryId: "category-1792073343435", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "u-nails-8008", name: { en: "U Nails 8008 Sultan", ar: "مسمار دبوس سلطان U 8008" }, categoryId: "category-1792073343435", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "u-nails-8010", name: { en: "U Nails 8010 Sultan", ar: "مسمار دبوس سلطان U 8010" }, categoryId: "category-1792073343435", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "u-nails-8012", name: { en: "U Nails 8012 Sultan", ar: "مسمار دبوس سلطان U 8012" }, categoryId: "category-1792073343435", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "u-nails-8014", name: { en: "U Nails 8014 Sultan", ar: "مسمار دبوس سلطان U 8014" }, categoryId: "category-1792073343435", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "u-nails-8016", name: { en: "U Nails 8016 Sultan", ar: "مسمار دبوس سلطان U 8016" }, categoryId: "category-1792073343435", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "u-nails-1408", name: { en: "U Nails 1408 Sultan", ar: "مسمار دبوس سلطان U 1408" }, categoryId: "category-1792073343435", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "u-nails-1410", name: { en: "U Nails 1410 Sultan", ar: "مسمار دبوس سلطان U 1410" }, categoryId: "category-1792073343435", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "u-nails-1412", name: { en: "U Nails 1412 Sultan", ar: "مسمار دبوس سلطان U 1412" }, categoryId: "category-1792073343435", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "u-nails-1414", name: { en: "U Nails 1414 Sultan", ar: "مسمار دبوس سلطان U 1414" }, categoryId: "category-1792073343435", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "u-nails-1416", name: { en: "U Nails 1416 Sultan", ar: "مسمار دبوس سلطان U 1416" }, categoryId: "category-1792073343435", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "u-nails-1008j", name: { en: "U Nails Sultan 1008J", ar: "مسمار دبوس يو سلطان 1008ج" }, categoryId: "category-1792296041915", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "u-nails-1013j", name: { en: "U Nails Sultan 1013J", ar: "مسمار دبوس يو سلطان 1013ج" }, categoryId: "category-1792296041915", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "brad-nails-f10", name: { en: "F10 Brad Nails Sultan", ar: "مسمار دبوس سلطان F10" }, categoryId: "category-1792073296472", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "brad-nails-f15", name: { en: "F15 Brad Nails Sultan", ar: "مسمار دبوس سلطان F15" }, categoryId: "category-1792073296472", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "brad-nails-f20", name: { en: "F20 Brad Nails Sultan", ar: "مسمار دبوس سلطان F20" }, categoryId: "category-1792073296472", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "brad-nails-f25", name: { en: "F25 Brad Nails Sultan", ar: "مسمار دبوس سلطان F25" }, categoryId: "category-1792073296472", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "brad-nails-f30", name: { en: "F30 Brad Nails Sultan", ar: "مسمار دبوس سلطان F30" }, categoryId: "category-1792073296472", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "brad-nails-f35", name: { en: "F35 Brad Nails Sultan", ar: "مسمار دبوس سلطان F35" }, categoryId: "category-1792073296472", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "brad-nails-f40", name: { en: "F40 Brad Nails Sultan", ar: "مسمار دبوس سلطان F40" }, categoryId: "category-1792073296472", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "brad-nails-f45", name: { en: "F45 Brad Nails Sultan", ar: "مسمار دبوس سلطان F45" }, categoryId: "category-1792073296472", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "brad-nails-f50", name: { en: "F50 Brad Nails Sultan", ar: "مسمار دبوس سلطان F50" }, categoryId: "category-1792073296472", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "steel-nails-st25", name: { en: "ST25 Steel Nails", ar: "مسامير فولاذية ST25" }, categoryId: "category-1792073082887", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "steel-nails-st32", name: { en: "ST32 Steel Nails", ar: "مسامير فولاذية ST32" }, categoryId: "category-1792073082887", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "steel-nails-st38", name: { en: "ST38 Steel Nails", ar: "مسامير فولاذية ST38" }, categoryId: "category-1792073082887", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "steel-nails-st50", name: { en: "ST50 Steel Nails", ar: "مسامير فولاذية ST50" }, categoryId: "category-1792073082887", priceRange: { min: 100, max: 300 }, Brand: "Sultan" },
  { id: "brad-nails-f40-heavy-duty", name: { en: "F40 Heavy-Duty Brad Nails Sultan", ar: "مسامير براد سلطان F40 شديدة التحمل" }, categoryId: "category-1792073296472", priceRange: { min: 100, max: 300 }, Brand: "Sultan" }
];

export const featuredProducts: Item[] = [];

export const allItems: Item[] = [...newProducts, ...mostVisited, ...featuredProducts].filter((item, index, arr) => arr.findIndex(i => i.id === item.id) === index);

// Derived: Group subcategories by category ID for easier access
export const subcategoriesByCategoryId: Record<string, Subcategory[]> = subcategories.reduce((acc, sub) => {
  if (!acc[sub.categoryId]) {
    acc[sub.categoryId] = [];
  }
  acc[sub.categoryId].push(sub);
  return acc;
}, {} as Record<string, Subcategory[]>);
