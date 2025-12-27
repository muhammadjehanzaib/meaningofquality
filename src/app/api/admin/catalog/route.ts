// import { NextRequest, NextResponse } from "next/server";
// import { readFileSync, writeFileSync } from "fs";
// import { join } from "path";
// import type { Category, Subcategory, Item } from "@/data/catalog";
// import type { ProductDetail } from "@/data/productDetails";
// import { categoryIconById, sliderBanners, type Banner } from "@/data/assets";

// // Note: This route only works in development mode and is excluded from static builds
// export const runtime = "nodejs";
// export const dynamic = "force-static";

// // Security: Only allow in development/local
// // Check if we're in a static export build
// const isStaticExport = process.env.NEXT_PHASE === "phase-production-build";
// const isProduction = process.env.NODE_ENV === "production";

// if (isStaticExport || (isProduction && !process.env.NEXT_DEV)) {
//   // During static export, this route shouldn't be called
//   // Return a proper error response instead of throwing
// }

// const DATA_DIR = join(process.cwd(), "src/data");

// // Helper to format TypeScript arrays/objects
// function formatArray<T>(items: T[], formatter: (item: T) => string, indent = 2): string {
//   if (items.length === 0) return "[]";
//   const spaces = " ".repeat(indent);
//   return `[\n${items.map(item => `${spaces}${formatter(item)}`).join(",\n")}\n]`;
// }

// function formatLString(obj: { en: string; ar: string }): string {
//   return `{ en: ${JSON.stringify(obj.en)}, ar: ${JSON.stringify(obj.ar)} }`;
// }

// function formatCategory(cat: Category): string {
//   const parts = [`id: ${JSON.stringify(cat.id)}, title: ${formatLString(cat.title)}`];
//   if (cat.desc) parts.push(`desc: ${formatLString(cat.desc)}`);
//   return `{ ${parts.join(", ")} }`;
// }

// function formatItem(item: Item): string {
//   const parts: string[] = [
//     `id: ${JSON.stringify(item.id)}`,
//     `name: ${formatLString(item.name)}`,
//     `categoryId: ${JSON.stringify(item.categoryId)}`,
//   ];
//   if (item.subcategoryId) {
//     parts.push(`subcategoryId: ${JSON.stringify(item.subcategoryId)}`);
//   }
//   if (item.priceRange) {
//     parts.push(`priceRange: { min: ${item.priceRange.min}, max: ${item.priceRange.max} }`);
//   }
//   if (item.Brand) {
//     parts.push(`Brand : "${item.Brand}"`)
//   }
//   return `{ ${parts.join(", ")} }`;
// }

// function formatSubcategory(sub: Subcategory): string {
//   return `{ id: ${JSON.stringify(sub.id)}, title: ${formatLString(sub.title)}, categoryId: ${JSON.stringify(sub.categoryId)} }`;
// }

// function formatProductDetail(detail: ProductDetail): string {
//   const parts: string[] = [];
//   if (detail.isNew !== undefined) parts.push(`isNew: ${detail.isNew}`);
//   if (detail.description) {
//     const desc = typeof detail.description === "string"
//       ? JSON.stringify(detail.description)
//       : formatLString(detail.description);
//     parts.push(`description: ${desc}`);
//   }
//   if (detail.properties && detail.properties.length > 0) {
//     const props = detail.properties.map(p =>
//       typeof p === "string" ? JSON.stringify(p) : formatLString(p)
//     );
//     parts.push(`properties: [\n${props.map(p => `      ${p}`).join(",\n")}\n    ]`);
//   }
//   if (detail.applications && detail.applications.length > 0) {
//     const apps = detail.applications.map(a =>
//       typeof a === "string" ? JSON.stringify(a) : formatLString(a)
//     );
//     parts.push(`applications: [\n${apps.map(a => `      ${a}`).join(",\n")}\n    ]`);
//   }
//   if (detail.productSpecs && detail.productSpecs.length > 0) {
//     const specs = detail.productSpecs.map(p => {
//       const parts: string[] = [];
//       if (p.specification) parts.push(`specification: ${JSON.stringify(p.specification)}`);
//       if (p.value) parts.push(`value: ${JSON.stringify(p.value)}`);
//       return `      { ${parts.join(", ")} }`;
//     });
//     parts.push(`productSpecs: [\n${specs.join(",\n")}\n    ]`);
//   }

//   if (detail.technicalSpecs && detail.technicalSpecs.length > 0) {
//     const specs = detail.technicalSpecs.map(p => {
//       const parts: string[] = [];
//       if (p.title) parts.push(`title: ${JSON.stringify(p.title)}`);
//       if (p.description) parts.push(`description: ${JSON.stringify(p.description)}`);
//       return `      { ${parts.join(", ")} }`;
//     });
//     parts.push(`technicalSpecs: [\n${specs.join(",\n")}\n    ]`);
//   }

//   if (detail.packaging && detail.packaging.length > 0) {
//     const pkg = detail.packaging.map(p => {
//       const pkgParts: string[] = [];
//       if (p.stockCode) pkgParts.push(`stockCode: ${JSON.stringify(p.stockCode)}`);
//       if (p.productCode) pkgParts.push(`productCode: ${JSON.stringify(p.productCode)}`);
//       if (p.type) pkgParts.push(`type: ${JSON.stringify(p.type)}`);
//       if (p.volume) pkgParts.push(`volume: ${JSON.stringify(p.volume)}`);
//       if (p.boxQty) pkgParts.push(`boxQty: ${JSON.stringify(p.boxQty)}`);
//       return `      { ${pkgParts.join(", ")} }`;
//     });
//     parts.push(`packaging: [\n${pkg.join(",\n")}\n    ]`);
//   }
//   if (detail.tdsUrl) parts.push(`tdsUrl: ${JSON.stringify(detail.tdsUrl)}`);
//   if (detail.sdsUrl) parts.push(`sdsUrl: ${JSON.stringify(detail.sdsUrl)}`);
//   if (detail.images && detail.images.length > 0) {
//     parts.push(`images: [\n${detail.images.map(img => `      ${JSON.stringify(img)}`).join(",\n")}\n    ]`);
//   }
//   return `{\n    ${parts.join(",\n    ")}\n  }`;
// }


// export async function GET() {
//   // Security check
//   if (isProduction && !process.env.NEXT_DEV) {
//     return NextResponse.json(
//       { success: false, error: "Admin API is only available in development mode" },
//       { status: 403 }
//     );
//   }

//   try {
//     const catalogPath = join(DATA_DIR, "catalog.ts");
//     const detailsPath = join(DATA_DIR, "productDetails.ts");
//     const assetsPath = join(DATA_DIR, "assets.ts");

//     const catalogContent = readFileSync(catalogPath, "utf-8");
//     const detailsContent = readFileSync(detailsPath, "utf-8");
//     const assetsContent = readFileSync(assetsPath, "utf-8");

//     return NextResponse.json({
//       success: true,
//       files: {
//         catalog: catalogContent,
//         productDetails: detailsContent,
//         assets: assetsContent,
//       },
//     });
//   } catch (error) {
//     return NextResponse.json(
//       { success: false, error: error instanceof Error ? error.message : "Unknown error" },
//       { status: 500 }
//     );
//   }
// }

// export async function POST(request: NextRequest) {
//   // Security check
//   if (isProduction && !process.env.NEXT_DEV) {
//     return NextResponse.json(
//       { success: false, error: "Admin API is only available in development mode" },
//       { status: 403 }
//     );
//   }

//   try {
//     const body = await request.json();
//     const { type, data } = body;

//     const catalogPath = join(DATA_DIR, "catalog.ts");
//     const detailsPath = join(DATA_DIR, "productDetails.ts");
//     const assetsPath = join(DATA_DIR, "assets.ts");

//     if (type === "updateCatalog") {
//       const { categories, subcategories, newProducts, mostVisited, featuredProducts, productImageByItemId } = data;

//       const content = `import type { LString } from "@/data/i18n";

// export type Category = {
//   id: string;
//   title: LString;
//   desc?: LString;
// };

// export type Subcategory = {
//   id: string;
//   title: LString;
//   categoryId: string;
// };

// export type Item = {
//   id: string;
//   name: LString;
//   categoryId: string;
//   subcategoryId?: string;
//   priceRange?: { min: number; max: number };
//   Brand: string;
//   isNew?: boolean;
//   isMostVisited?: boolean;
//   isFeatured?: boolean;
// };

// export const categories: Category[] = ${formatArray(categories, formatCategory)};

// export const subcategories: Subcategory[] = ${formatArray(subcategories, formatSubcategory)};

// export const newProducts: Item[] = ${formatArray(newProducts, formatItem)};

// export const mostVisited: Item[] = ${formatArray(mostVisited, formatItem)};

// export const featuredProducts: Item[] = ${formatArray(featuredProducts, formatItem)};

// export const allItems: Item[] = [...newProducts, ...mostVisited, ...featuredProducts].filter((item, index, arr) => arr.findIndex(i => i.id === item.id) === index);

// // Derived: Group subcategories by category ID for easier access
// export const subcategoriesByCategoryId: Record<string, Subcategory[]> = subcategories.reduce((acc, sub) => {
//   if (!acc[sub.categoryId]) {
//     acc[sub.categoryId] = [];
//   }
//   acc[sub.categoryId].push(sub);
//   return acc;
// }, {} as Record<string, Subcategory[]>);
// `;

//       writeFileSync(catalogPath, content, "utf-8");

//       // If productImageByItemId is provided, also update assets
//       if (productImageByItemId) {
//         console.log("Updating assets with productImageByItemId:", productImageByItemId);
//         console.log("Number of entries:", Object.keys(productImageByItemId).length);

//         if (typeof productImageByItemId !== 'object') {
//           return NextResponse.json(
//             { success: false, error: "Invalid productImageByItemId data" },
//             { status: 400 }
//           );
//         }

//         // Sort the entries by ID for consistent ordering
//         const sortedEntries = Object.entries(productImageByItemId).sort(([a], [b]) => a.localeCompare(b));

//         const imageEntries = sortedEntries
//           .map(([id, img]) => `  "${id}": ${JSON.stringify(img)}`)
//           .join(",\n");

//         // Format slider banners
//         const bannerEntries = (data.sliderBanners as Banner[]).map((banner) => {
//           const parts = [`src: ${JSON.stringify(banner.src)}`, `alt: ${JSON.stringify(banner.alt)}`];
//           if (banner.href) parts.push(`href: ${JSON.stringify(banner.href)}`);
//           return `  { ${parts.join(", ")} }`;
//         }).join(",\n");

//         // Format category icons
//         const sortedIcons = Object.entries(categoryIconById).sort(([a], [b]) => a.localeCompare(b));
//         const iconEntries = sortedIcons
//           .map(([id, path]) => `  "${id}": ${JSON.stringify(path)}`)
//           .join(",\n");

//         const assetsContent = `export type Banner = { src: string; alt: string; href?: string };

//         export const sliderBanners: Banner[] = [
//                 ${bannerEntries}
//         ];

//         export const categoryIconById: Record<string, string> = {
//                 ${iconEntries}
//         };

//         // Visual theme (Tailwind classes) for each category
//         export const categoryThemeById: Record<string, { bg: string; ring: string; text: string; hoverBg: string; hoverRing: string; hoverText: string }> = {
//           "accessories": { bg: "bg-slate-50", ring: "ring-slate-200", text: "text-slate-700", hoverBg: "group-hover:bg-slate-100", hoverRing: "group-hover:ring-slate-300", hoverText: "group-hover:text-slate-800" },
//           "adhesives": { bg: "bg-emerald-50", ring: "ring-emerald-200", text: "text-emerald-700", hoverBg: "group-hover:bg-emerald-100", hoverRing: "group-hover:ring-emerald-300", hoverText: "group-hover:text-emerald-800" },
//           "aerosols": { bg: "bg-rose-50", ring: "ring-rose-200", text: "text-rose-700", hoverBg: "group-hover:bg-rose-100", hoverRing: "group-hover:ring-rose-300", hoverText: "group-hover:text-rose-800" },
//           "fire-rated": { bg: "bg-orange-50", ring: "ring-orange-200", text: "text-orange-700", hoverBg: "group-hover:bg-orange-100", hoverRing: "group-hover:ring-orange-300", hoverText: "group-hover:text-orange-800" },
//           "pu-foams": { bg: "bg-lime-50", ring: "ring-lime-200", text: "text-lime-700", hoverBg: "group-hover:bg-lime-100", hoverRing: "group-hover:ring-lime-300", hoverText: "group-hover:text-lime-800" },
//           "sealants": { bg: "bg-sky-50", ring: "ring-sky-200", text: "text-sky-700", hoverBg: "group-hover:bg-sky-100", hoverRing: "group-hover:ring-sky-300", hoverText: "group-hover:text-sky-800" }
//         };


//         // Map item IDs from data/catalog to product images
//         export const productImageByItemId: Record<string, string> = {
//         ${imageEntries}
//         };
// `;

//         console.log("Writing to assets file:", assetsPath);
//         console.log("Content length:", assetsContent.length);

//         writeFileSync(assetsPath, assetsContent, "utf-8");

//         console.log("Assets file written successfully");
//       }

//       return NextResponse.json({ success: true, message: "Catalog updated" });
//     }

//     if (type === "updateProductDetails") {
//       const { productDetailsById } = data;

//       const entries = Object.entries(productDetailsById)
//         .map(([id, detail]) => `  "${id}": ${formatProductDetail(detail as ProductDetail)}`)
//         .join(",\n");

//       const content = `import type { LString } from "@/data/i18n";

// export type PackagingRow = {
//   stockCode?: string;
//   productCode?: string;
//   type?: string;
//   volume?: string;
//   boxQty?: string;
// };

// export type ProductSpecification = {
//   specification: string | LString;
//   value: string | LString;
// };

// export type TechnicalSpecification = {
//   title?: string | LString;
//   description?: string | LString;
// };

// export type ProductDetail = {
//   description?: string | LString;
//   properties?: Array<string | LString>;
//   applications?: Array<string | LString>;
//   productSpecs?: ProductSpecification[];
//   technicalSpecs?: TechnicalSpecification[];
//   packaging?: PackagingRow[];
//   tdsUrl?: string;
//   sdsUrl?: string;
//   isNew?: boolean;
//   images?: string[];
// };
// export const productDetailsById: Record<string, ProductDetail> = {
// ${entries}
// };
// `;

//       writeFileSync(detailsPath, content, "utf-8");
//       return NextResponse.json({ success: true, message: "Product details updated" });
//     }

//     if (type === "updateAssets") {
//       const { productImageByItemId } = data;

//       console.log("Received productImageByItemId:", productImageByItemId);
//       console.log("Number of entries:", Object.keys(productImageByItemId || {}).length);

//       if (!productImageByItemId || typeof productImageByItemId !== 'object') {
//         return NextResponse.json(
//           { success: false, error: "Invalid productImageByItemId data" },
//           { status: 400 }
//         );
//       }

//       // Sort the entries by ID for consistent ordering
//       const sortedEntries = Object.entries(productImageByItemId).sort(([a], [b]) => a.localeCompare(b));

//       const imageEntries = sortedEntries
//         .map(([id, img]) => `  "${id}": ${JSON.stringify(img)}`)
//         .join(",\n");

//       const content = `export type Banner = { src: string; alt: string; href?: string };

// export const sliderBanners: Banner[] = [
//   { src: "/images/sliders/100AQ-aquarium-silicone.jpg", alt: "Aquarium silicone sealant banner" },
//   { src: "/images/sliders/705-universal-fast-adhesive.jpg", alt: "705 Universal Fast Adhesive banner" },
//   { src: "/images/sliders/967P-fast-adhesive.jpg", alt: "967P Fast Adhesive banner" },
//   { src: "/images/sliders/Aquazero.jpg", alt: "Aquazero waterproofing banner" },
//   { src: "/images/sliders/C900-chemical-anchor.jpg", alt: "C900 Chemical Anchor banner" },
//   { src: "/images/sliders/Fence-post-fix.jpg", alt: "Fence Post Fix foam banner" },
//   { src: "/images/sliders/High-tack-adhesive.jpg", alt: "High Tack adhesive banner" },
//   { src: "/images/sliders/Multiseal.jpg", alt: "Multiseal multipurpose banner" },
//   { src: "/images/sliders/akfix-safe-use-handling-of-diisocyanates-trainings.jpg", alt: "Safe use and handling of diisocyanates training" },
//   { src: "/images/sliders/akfix-spray-paint-banner-en.jpg", alt: "Akfix spray paint color range" },
//   { src: "/images/sliders/thermcoat-thermal-acoustic-insulation-spray-foam_en.jpg", alt: "Thermcoat thermal acoustic insulation spray foam" },
// ];

// export const categoryIconById: Record<string, string> = {
//   "adhesives": "/images/product-categories/categories-icons/adhesives.png",
//   "sealants": "/images/product-categories/categories-icons/sealants.png",
//   "pu-foams": "/images/product-categories/categories-icons/pu-foams.png",
//   "aerosols": "/images/product-categories/categories-icons/aerosols.png",
//   "fire-rated": "/images/product-categories/categories-icons/fire-rated-series.png",
//   "accessories": "/images/product-categories/categories-icons/accessories.png",
//   "spray-paint":"/images/product-categories/categories-icons/spray-paints.png",
//   "coating-system": "/images/product-categories/categories-icons/coatings.png",
//   "anaerobics": "/images/product-categories/categories-icons/anaerobics.png",
//   "industrial": "/images/product-categories/categories-icons/industrials.png",
//   "automotive": "/images/product-categories/categories-icons/automotive.png",
// };

// // Visual theme (Tailwind classes) for each category
// export const categoryThemeById: Record<string, { bg: string; ring: string; text: string; hoverBg: string; hoverRing: string; hoverText: string }> = {
//   adhesives: { bg: "bg-emerald-50", ring: "ring-emerald-200", text: "text-emerald-700", hoverBg: "group-hover:bg-emerald-100", hoverRing: "group-hover:ring-emerald-300", hoverText: "group-hover:text-emerald-800" },
//   sealants: { bg: "bg-sky-50", ring: "ring-sky-200", text: "text-sky-700", hoverBg: "group-hover:bg-sky-100", hoverRing: "group-hover:ring-sky-300", hoverText: "group-hover:text-sky-800" },
//   "pu-foams": { bg: "bg-lime-50", ring: "ring-lime-200", text: "text-lime-700", hoverBg: "group-hover:bg-lime-100", hoverRing: "group-hover:ring-lime-300", hoverText: "group-hover:text-lime-800" },
//   aerosols: { bg: "bg-rose-50", ring: "ring-rose-200", text: "text-rose-700", hoverBg: "group-hover:bg-rose-100", hoverRing: "group-hover:ring-rose-300", hoverText: "group-hover:text-rose-800" },
//   "fire-rated": { bg: "bg-orange-50", ring: "ring-orange-200", text: "text-orange-700", hoverBg: "group-hover:bg-orange-100", hoverRing: "group-hover:ring-orange-300", hoverText: "group-hover:text-orange-800" },
//   accessories: { bg: "bg-slate-50", ring: "ring-slate-200", text: "text-slate-700", hoverBg: "group-hover:bg-slate-100", hoverRing: "group-hover:ring-slate-300", hoverText: "group-hover:text-slate-800" },
// };

// // Map item IDs from data/catalog to product images
// export const productImageByItemId: Record<string, string> = {
// ${imageEntries}
// };
// `;

//       console.log("Writing to file:", assetsPath);
//       console.log("Content length:", content.length);

//       writeFileSync(assetsPath, content, "utf-8");

//       console.log("File written successfully");

//       return NextResponse.json({ success: true, message: "Assets updated successfully" });
//     }

//     if (type === "updateAssetsFull") {
//       const { sliderBanners, categoryIconById, categoryThemeById, productImageByItemId } = data;

//       console.log("Received full assets update");

//       if (!sliderBanners || !categoryIconById || !categoryThemeById || !productImageByItemId) {
//         return NextResponse.json(
//           { success: false, error: "Missing required assets data" },
//           { status: 400 }
//         );
//       }

//       // Sort product images
//       const sortedProductImages = Object.entries(productImageByItemId).sort(([a], [b]) => a.localeCompare(b));

//       const imageEntries = sortedProductImages
//         .map(([id, img]) => `  "${id}": ${JSON.stringify(img)}`)
//         .join(",\n");

//       // Format slider banners
//       const bannerEntries = (sliderBanners as Banner[]).map((banner) => {
//         const parts = [`src: ${JSON.stringify(banner.src)}, alt: ${JSON.stringify(banner.alt)}`];
//         if (banner.href) parts.push(`href: ${JSON.stringify(banner.href)}`);
//         return `  { ${parts.join(", ")} }`;
//       }).join(",\n");

//       // Format category icons
//       const sortedIcons = Object.entries(categoryIconById).sort(([a], [b]) => a.localeCompare(b));
//       const iconEntries = sortedIcons
//         .map(([id, path]) => `  "${id}": ${JSON.stringify(path)}`)
//         .join(",\n");

//       // Format category themes
//       const sortedThemes = Object.entries(categoryThemeById).sort(([a], [b]) => a.localeCompare(b));
//       const themeEntries = sortedThemes
//         .map(([id, theme]) => {
//           const t = theme as { bg: string; ring: string; text: string; hoverBg: string; hoverRing: string; hoverText: string };
//           return `  "${id}": { bg: ${JSON.stringify(t.bg)}, ring: ${JSON.stringify(t.ring)}, text: ${JSON.stringify(t.text)}, hoverBg: ${JSON.stringify(t.hoverBg)}, hoverRing: ${JSON.stringify(t.hoverRing)}, hoverText: ${JSON.stringify(t.hoverText)} }`;
//         })
//         .join(",\n");

//       const content = `export type Banner = { src: string; alt: string; href?: string };

// export const sliderBanners: Banner[] = [
// ${bannerEntries}
// ];

// export const categoryIconById: Record<string, string> = {
// ${iconEntries}
// };

// // Visual theme (Tailwind classes) for each category
// export const categoryThemeById: Record<string, { bg: string; ring: string; text: string; hoverBg: string; hoverRing: string; hoverText: string }> = {
// ${themeEntries}
// };

// // Map item IDs from data/catalog to product images
// export const productImageByItemId: Record<string, string> = {
// ${imageEntries}
// };
// `;

//       console.log("Writing full assets to file:", assetsPath);
//       console.log("Content length:", content.length);

//       writeFileSync(assetsPath, content, "utf-8");

//       console.log("Full assets file written successfully");

//       return NextResponse.json({ success: true, message: "Full assets updated successfully" });
//     }

//     return NextResponse.json(
//       { success: false, error: "Unknown update type" },
//       { status: 400 }
//     );
//   } catch (error) {
//     console.error("Error in admin API:", error);
//     return NextResponse.json(
//       { success: false, error: error instanceof Error ? error.message : "Unknown error" },
//       { status: 500 }
//     );
//   }
// }

import { NextRequest, NextResponse } from "next/server";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import type { Category, Subcategory, Item } from "@/data/catalog";
import type { ProductDetail } from "@/data/productDetails";
import type { Banner } from "@/data/assets";

// Note: This route only works in development mode and is excluded from static builds
export const runtime = "nodejs";
export const dynamic = "force-static";

// Security: Only allow in development/local
// const isStaticExport = process.env.NEXT_PHASE === "phase-production-build";
const isProduction = process.env.NODE_ENV === "production";

const DATA_DIR = join(process.cwd(), "src/data");

// ============================================================================
// HELPER FUNCTIONS - Formatting TypeScript code
// ============================================================================

function formatArray<T>(items: T[], formatter: (item: T) => string, indent = 2): string {
  if (!items || !Array.isArray(items) || items.length === 0) return "[]";
  const spaces = " ".repeat(indent);
  return `[\n${items.map(item => `${spaces}${formatter(item)}`).join(",\n")}\n]`;
}

function formatLString(obj: { en: string; ar: string }): string {
  return `{ en: ${JSON.stringify(obj.en)}, ar: ${JSON.stringify(obj.ar)} }`;
}

function formatCategory(cat: Category): string {
  const parts = [`id: ${JSON.stringify(cat.id)}, title: ${formatLString(cat.title)}`];
  if (cat.desc) parts.push(`desc: ${formatLString(cat.desc)}`);
  return `{ ${parts.join(", ")} }`;
}

function formatSubcategory(sub: Subcategory): string {
  return `{ id: ${JSON.stringify(sub.id)}, title: ${formatLString(sub.title)}, categoryId: ${JSON.stringify(sub.categoryId)} }`;
}

function formatItem(item: Item): string {
  const parts: string[] = [
    `id: ${JSON.stringify(item.id)}`,
    `name: ${formatLString(item.name)}`,
    `categoryId: ${JSON.stringify(item.categoryId)}`,
  ];
  if (item.subcategoryId) parts.push(`subcategoryId: ${JSON.stringify(item.subcategoryId)}`);
  if (item.priceRange) parts.push(`priceRange: { min: ${item.priceRange.min}, max: ${item.priceRange.max} }`);
  if (item.Brand) parts.push(`Brand: ${JSON.stringify(item.Brand)}`);
  return `{ ${parts.join(", ")} }`;
}

function formatProductDetail(detail: ProductDetail): string {
  const parts: string[] = [];
  if (detail.isNew !== undefined) parts.push(`isNew: ${detail.isNew}`);

  if (detail.description) {
    const desc = typeof detail.description === "string"
      ? JSON.stringify(detail.description)
      : formatLString(detail.description);
    parts.push(`description: ${desc}`);
  }

  if (detail.properties && detail.properties.length > 0) {
    const props = detail.properties.map(p =>
      typeof p === "string" ? JSON.stringify(p) : formatLString(p)
    );
    parts.push(`properties: [\n${props.map(p => `      ${p}`).join(",\n")}\n    ]`);
  }

  if (detail.applications && detail.applications.length > 0) {
    const apps = detail.applications.map(a =>
      typeof a === "string" ? JSON.stringify(a) : formatLString(a)
    );
    parts.push(`applications: [\n${apps.map(a => `      ${a}`).join(",\n")}\n    ]`);
  }

  if (detail.productSpecs && detail.productSpecs.length > 0) {
    const specs = detail.productSpecs.map(p => {
      const specParts: string[] = [];
      if (p.specification) specParts.push(`specification: ${JSON.stringify(p.specification)}`);
      if (p.value) specParts.push(`value: ${JSON.stringify(p.value)}`);
      return `      { ${specParts.join(", ")} }`;
    });
    parts.push(`productSpecs: [\n${specs.join(",\n")}\n    ]`);
  }

  if (detail.technicalSpecs && detail.technicalSpecs.length > 0) {
    const specs = detail.technicalSpecs.map(p => {
      const specParts: string[] = [];
      if (p.title) specParts.push(`title: ${JSON.stringify(p.title)}`);
      if (p.description) specParts.push(`description: ${JSON.stringify(p.description)}`);
      return `      { ${specParts.join(", ")} }`;
    });
    parts.push(`technicalSpecs: [\n${specs.join(",\n")}\n    ]`);
  }

  if (detail.packaging && detail.packaging.length > 0) {
    const pkg = detail.packaging.map(p => {
      const pkgParts: string[] = [];
      if (p.stockCode) pkgParts.push(`stockCode: ${JSON.stringify(p.stockCode)}`);
      if (p.productCode) pkgParts.push(`productCode: ${JSON.stringify(p.productCode)}`);
      if (p.type) pkgParts.push(`type: ${JSON.stringify(p.type)}`);
      if (p.volume) pkgParts.push(`volume: ${JSON.stringify(p.volume)}`);
      if (p.boxQty) pkgParts.push(`boxQty: ${JSON.stringify(p.boxQty)}`);
      return `      { ${pkgParts.join(", ")} }`;
    });
    parts.push(`packaging: [\n${pkg.join(",\n")}\n    ]`);
  }

  if (detail.tdsUrl) parts.push(`tdsUrl: ${JSON.stringify(detail.tdsUrl)}`);
  if (detail.sdsUrl) parts.push(`sdsUrl: ${JSON.stringify(detail.sdsUrl)}`);

  if (detail.images && detail.images.length > 0) {
    parts.push(`images: [\n${detail.images.map(img => `      ${JSON.stringify(img)}`).join(",\n")}\n    ]`);
  }

  return `{\n    ${parts.join(",\n    ")}\n  }`;
}

// ============================================================================
// GET ENDPOINT - Read current data files
// ============================================================================

export async function GET() {
  if (isProduction && !process.env.NEXT_DEV) {
    return NextResponse.json(
      { success: false, error: "Admin API is only available in development mode" },
      { status: 403 }
    );
  }

  try {
    const catalogPath = join(DATA_DIR, "catalog.ts");
    const detailsPath = join(DATA_DIR, "productDetails.ts");
    const assetsPath = join(DATA_DIR, "assets.ts");

    const catalogContent = readFileSync(catalogPath, "utf-8");
    const detailsContent = readFileSync(detailsPath, "utf-8");
    const assetsContent = readFileSync(assetsPath, "utf-8");

    return NextResponse.json({
      success: true,
      files: { catalog: catalogContent, productDetails: detailsContent, assets: assetsContent },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}

// ============================================================================
// POST ENDPOINT - Update data files
// ============================================================================

export async function POST(request: NextRequest) {
  if (isProduction && !process.env.NEXT_DEV) {
    return NextResponse.json(
      { success: false, error: "Admin API is only available in development mode" },
      { status: 403 }
    );
  }

  try {
    const body = await request.json();
    const { type, data } = body;

    const catalogPath = join(DATA_DIR, "catalog.ts");
    const detailsPath = join(DATA_DIR, "productDetails.ts");
    const assetsPath = join(DATA_DIR, "assets.ts");

    // ========================================================================
    // UPDATE CATALOG - Products, Categories, Subcategories + Product Images
    // ========================================================================
    if (type === "updateCatalog") {
      const { categories, subcategories, newProducts, mostVisited, featuredProducts, productImageByItemId } = data;

      if (!categories || !subcategories || !newProducts || !mostVisited || !featuredProducts) {
        return NextResponse.json(
          { success: false, error: "Missing required catalog data" },
          { status: 400 }
        );
      }

      // 1. Save catalog.ts
      const catalogContent = `import type { LString } from "@/data/i18n";

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

export const categories: Category[] = ${formatArray(categories, formatCategory)};

export const subcategories: Subcategory[] = ${formatArray(subcategories, formatSubcategory)};

export const newProducts: Item[] = ${formatArray(newProducts, formatItem)};

export const mostVisited: Item[] = ${formatArray(mostVisited, formatItem)};

export const featuredProducts: Item[] = ${formatArray(featuredProducts, formatItem)};

export const allItems: Item[] = [...newProducts, ...mostVisited, ...featuredProducts].filter((item, index, arr) => arr.findIndex(i => i.id === item.id) === index);

// Derived: Group subcategories by category ID for easier access
export const subcategoriesByCategoryId: Record<string, Subcategory[]> = subcategories.reduce((acc, sub) => {
  if (!acc[sub.categoryId]) {
    acc[sub.categoryId] = [];
  }
  acc[sub.categoryId].push(sub);
  return acc;
}, {} as Record<string, Subcategory[]>);
`;

      writeFileSync(catalogPath, catalogContent, "utf-8");

      // 2. If productImageByItemId is provided, also update assets.ts
      if (productImageByItemId && typeof productImageByItemId === 'object') {

        // Read current assets.ts to preserve banners, icons, and themes
        const currentAssetsContent = readFileSync(assetsPath, "utf-8");

        // Extract current sliderBanners
        const bannersMatch = currentAssetsContent.match(/export const sliderBanners: Banner\[\] = \[([\s\S]*?)\];/);
        const bannersContent = bannersMatch ? bannersMatch[1] : '';

        // Extract current categoryIconById
        const iconsMatch = currentAssetsContent.match(/export const categoryIconById: Record<string, string> = \{([\s\S]*?)\};/);
        const iconsContent = iconsMatch ? iconsMatch[1] : '';

        // Extract current categoryThemeById
        const themesMatch = currentAssetsContent.match(/export const categoryThemeById: Record<string, { bg: string; ring: string[\s\S]*?\} = \{([\s\S]*?)\};/);
        const themesContent = themesMatch ? themesMatch[1] : '';

        // Format new product images
        const sortedProductImages = Object.entries(productImageByItemId).sort(([a], [b]) => a.localeCompare(b));
        const imageEntries = sortedProductImages
          .map(([id, img]) => `  "${id}": ${JSON.stringify(img)}`)
          .join(",\n");

        const assetsContent = `export type Banner = { src: string; alt: string; href?: string };

export const sliderBanners: Banner[] = [${bannersContent}];

export const categoryIconById: Record<string, string> = {${iconsContent}};

// Visual theme (Tailwind classes) for each category
export const categoryThemeById: Record<string, { bg: string; ring: string; text: string; hoverBg: string; hoverRing: string; hoverText: string }> = {${themesContent}};

// Map item IDs from data/catalog to product images
export const productImageByItemId: Record<string, string> = {
${imageEntries}
};
`;

        writeFileSync(assetsPath, assetsContent, "utf-8");
      }

      return NextResponse.json({ success: true, message: "Catalog and product images updated" });
    }

    // ========================================================================
    // UPDATE PRODUCT DETAILS
    // ========================================================================
    if (type === "updateProductDetails") {
      const { productDetailsById } = data;

      if (!productDetailsById || typeof productDetailsById !== 'object') {
        return NextResponse.json(
          { success: false, error: "Invalid product details data" },
          { status: 400 }
        );
      }

      const entries = Object.entries(productDetailsById)
        .map(([id, detail]) => `  "${id}": ${formatProductDetail(detail as ProductDetail)}`)
        .join(",\n");

      const content = `import type { LString } from "@/data/i18n";

export type PackagingRow = {
  stockCode?: string;
  productCode?: string;
  type?: string;
  volume?: string;
  boxQty?: string;
};

export type ProductSpecification = {
  specification: string | LString;
  value: string | LString;
};

export type TechnicalSpecification = {
  title?: string | LString;
  description?: string | LString;
};

export type ProductDetail = {
  description?: string | LString;
  properties?: Array<string | LString>;
  applications?: Array<string | LString>;
  productSpecs?: ProductSpecification[];
  technicalSpecs?: TechnicalSpecification[];
  packaging?: PackagingRow[];
  tdsUrl?: string;
  sdsUrl?: string;
  isNew?: boolean;
  images?: string[];
};

export const productDetailsById: Record<string, ProductDetail> = {
${entries}
};
`;

      writeFileSync(detailsPath, content, "utf-8");

      return NextResponse.json({ success: true, message: "Product details updated" });
    }

    // ========================================================================
    // UPDATE ASSETS - Images, Banners, Icons, Themes
    // ========================================================================
    if (type === "updateAssetsFull") {
      const { sliderBanners, categoryIconById, categoryThemeById, productImageByItemId } = data;

      if (!sliderBanners || !categoryIconById || !categoryThemeById || !productImageByItemId) {
        const missing = [];
        if (!sliderBanners) missing.push("sliderBanners");
        if (!categoryIconById) missing.push("categoryIconById");
        if (!categoryThemeById) missing.push("categoryThemeById");
        if (!productImageByItemId) missing.push("productImageByItemId");

        return NextResponse.json(
          { success: false, error: `Missing required assets data: ${missing.join(", ")}` },
          { status: 400 }
        );
      }

      // Format product images
      const sortedProductImages = Object.entries(productImageByItemId).sort(([a], [b]) => a.localeCompare(b));
      const imageEntries = sortedProductImages
        .map(([id, img]) => `  "${id}": ${JSON.stringify(img)}`)
        .join(",\n");

      // Format slider banners
      const bannerEntries = (sliderBanners as Banner[]).map((banner) => {
        const parts = [`src: ${JSON.stringify(banner.src)}, alt: ${JSON.stringify(banner.alt)}`];
        if (banner.href) parts.push(`href: ${JSON.stringify(banner.href)}`);
        return `  { ${parts.join(", ")} }`;
      }).join(",\n");

      // Format category icons
      const sortedIcons = Object.entries(categoryIconById).sort(([a], [b]) => a.localeCompare(b));
      const iconEntries = sortedIcons
        .map(([id, path]) => `  "${id}": ${JSON.stringify(path)}`)
        .join(",\n");

      // Format category themes
      const sortedThemes = Object.entries(categoryThemeById).sort(([a], [b]) => a.localeCompare(b));
      const themeEntries = sortedThemes
        .map(([id, theme]) => {
          const t = theme as { bg: string; ring: string; text: string; hoverBg: string; hoverRing: string; hoverText: string };
          return `  "${id}": { bg: ${JSON.stringify(t.bg)}, ring: ${JSON.stringify(t.ring)}, text: ${JSON.stringify(t.text)}, hoverBg: ${JSON.stringify(t.hoverBg)}, hoverRing: ${JSON.stringify(t.hoverRing)}, hoverText: ${JSON.stringify(t.hoverText)} }`;
        })
        .join(",\n");

      const content = `export type Banner = { src: string; alt: string; href?: string };

export const sliderBanners: Banner[] = [
${bannerEntries}
];

export const categoryIconById: Record<string, string> = {
${iconEntries}
};

// Visual theme (Tailwind classes) for each category
export const categoryThemeById: Record<string, { bg: string; ring: string; text: string; hoverBg: string; hoverRing: string; hoverText: string }> = {
${themeEntries}
};

// Map item IDs from data/catalog to product images
export const productImageByItemId: Record<string, string> = {
${imageEntries}
};
`;

      writeFileSync(assetsPath, content, "utf-8");

      return NextResponse.json({
        success: true,
        message: "Assets updated successfully",
        stats: {
          productImages: Object.keys(productImageByItemId).length,
          banners: sliderBanners.length,
          categoryIcons: Object.keys(categoryIconById).length
        }
      });
    }

    return NextResponse.json(
      { success: false, error: "Unknown update type" },
      { status: 400 }
    );
  } catch (error) {
    console.error("❌ Error in admin API:", error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}