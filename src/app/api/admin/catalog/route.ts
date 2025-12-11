import { NextRequest, NextResponse } from "next/server";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import type { Category, Item } from "@/data/catalog";
import type { ProductDetail } from "@/data/productDetails";

// Note: This route only works in development mode and is excluded from static builds
export const runtime = "nodejs";
export const dynamic = "force-static";

// Security: Only allow in development/local
// Check if we're in a static export build
const isStaticExport = process.env.NEXT_PHASE === "phase-production-build";
const isProduction = process.env.NODE_ENV === "production";

if (isStaticExport || (isProduction && !process.env.NEXT_DEV)) {
  // During static export, this route shouldn't be called
  // Return a proper error response instead of throwing
}

const DATA_DIR = join(process.cwd(), "src/data");

// Helper to format TypeScript arrays/objects
function formatArray<T>(items: T[], formatter: (item: T) => string, indent = 2): string {
  if (items.length === 0) return "[]";
  const spaces = " ".repeat(indent);
  return `[\n${items.map(item => `${spaces}${formatter(item)}`).join(",\n")}\n]`;
}

function formatLString(obj: { en: string; ar: string }): string {
  // const spaces = " ".repeat(indent);
  return `{ en: ${JSON.stringify(obj.en)}, ar: ${JSON.stringify(obj.ar)} }`;
}

function formatCategory(cat: Category): string {
  const parts = [`id: ${JSON.stringify(cat.id)}, title: ${formatLString(cat.title)}`];
  if (cat.desc) parts.push(`desc: ${formatLString(cat.desc)}`);
  return `{ ${parts.join(", ")} }`;
}

function formatItem(item: Item): string {
  const parts: string[] = [
    `id: ${JSON.stringify(item.id)}`,
    `name: ${formatLString(item.name)}`,
    `categoryId: ${JSON.stringify(item.categoryId)}`,
  ];
  if (item.tags && item.tags.length > 0) {
    parts.push(`tags: [${item.tags.map((t) => JSON.stringify(t)).join(", ")}]`);
  }
  if (item.priceRange) {
    parts.push(`priceRange: { min: ${item.priceRange.min}, max: ${item.priceRange.max} }`);
  }
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

export async function GET() {
  // Security check
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

    // Import and evaluate the data (in a safe way)
    // We'll parse the TypeScript files to extract the data
    // For now, return the file paths and let the frontend handle parsing
    return NextResponse.json({
      success: true,
      files: {
        catalog: catalogContent,
        productDetails: detailsContent,
        assets: assetsContent,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  // Security check
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

    if (type === "updateCatalog") {
      const { categories, newProducts, mostVisited } = data;
      
      const content = `import type { LString } from "@/data/i18n";

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
};

export const categories: Category[] = ${formatArray(categories, formatCategory)};

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

export const newProducts: Item[] = ${formatArray(newProducts, formatItem)};

export const mostVisited: Item[] = ${formatArray(mostVisited, formatItem)};

export const allItems: Item[] = [...newProducts, ...mostVisited];
`;

      writeFileSync(catalogPath, content, "utf-8");
      return NextResponse.json({ success: true, message: "Catalog updated" });
    }

    if (type === "updateProductDetails") {
      const { productDetailsById } = data;
      
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

export type ProductDetail = {
  description?: string | LString;
  properties?: Array<string | LString>;
  applications?: Array<string | LString>;
  packaging?: PackagingRow[];
  tdsUrl?: string; // Technical Data Sheet
  sdsUrl?: string; // Safety Data Sheet (MSDS)
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

    if (type === "updateAssets") {
      const { productImageByItemId } = data;
      
      const imageEntries = Object.entries(productImageByItemId)
        .map(([id, img]) => `  "${id}": ${JSON.stringify(img)}`)
        .join(",\n");

      // Keep existing banners and category data, just update product images
      const existingAssets = readFileSync(assetsPath, "utf-8");
      
      // Extract banners and category data (simple regex approach)
      const bannerMatch = existingAssets.match(/export const sliderBanners: Banner\[\] = \[([\s\S]*?)\];/);
      const categoryIconMatch = existingAssets.match(/export const categoryIconById: Record<string, string> = \{([\s\S]*?)\};/);
      const categoryThemeMatch = existingAssets.match(/export const categoryThemeById: Record<string, \{[\s\S]*?\}> = \{([\s\S]*?)\};/);

      const content = `export type Banner = { src: string; alt: string; href?: string };

export const sliderBanners: Banner[] = [${bannerMatch ? bannerMatch[1] : ""}];

export const categoryIconById: Record<string, string> = {${categoryIconMatch ? categoryIconMatch[1] : ""}};

// Visual theme (Tailwind classes) for each category
export const categoryThemeById: Record<string, { bg: string; ring: string; text: string; hoverBg: string; hoverRing: string; hoverText: string }> = {${categoryThemeMatch ? categoryThemeMatch[1] : ""}};

// Map item IDs from data/catalog to product images
export const productImageByItemId: Record<string, string> = {
${imageEntries}
};
`;

      writeFileSync(assetsPath, content, "utf-8");
      return NextResponse.json({ success: true, message: "Assets updated" });
    }

    return NextResponse.json(
      { success: false, error: "Unknown update type" },
      { status: 400 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}

