export type Banner = { src: string; alt: string; href?: string };

export const sliderBanners: Banner[] = [
  { src: "/images/sliders/100AQ-aquarium-silicone.jpg", alt: "Aquarium silicone sealant banner" },
  { src: "/images/sliders/705-universal-fast-adhesive.jpg", alt: "705 Universal Fast Adhesive banner" },
  { src: "/images/sliders/967P-fast-adhesive.jpg", alt: "967P Fast Adhesive banner" },
  { src: "/images/sliders/Aquazero.jpg", alt: "Aquazero waterproofing banner" },
  { src: "/images/sliders/C900-chemical-anchor.jpg", alt: "C900 Chemical Anchor banner" },
  { src: "/images/sliders/Fence-post-fix.jpg", alt: "Fence Post Fix foam banner" },
  { src: "/images/sliders/High-tack-adhesive.jpg", alt: "High Tack adhesive banner" },
  { src: "/images/sliders/Multiseal.jpg", alt: "Multiseal multipurpose banner" },
  { src: "/images/sliders/akfix-safe-use-handling-of-diisocyanates-trainings.jpg", alt: "Safe use and handling of diisocyanates training" },
  { src: "/images/sliders/akfix-spray-paint-banner-en.jpg", alt: "Akfix spray paint color range" },
  { src: "/images/sliders/thermcoat-thermal-acoustic-insulation-spray-foam_en.jpg", alt: "Thermcoat thermal acoustic insulation spray foam" },
];

export const categoryIconById: Record<string, string> = {
  "adhesives": "/images/product-categories/categories-icons/adhesives.png",
  "sealants": "/images/product-categories/categories-icons/sealants.png",
  "pu-foams": "/images/product-categories/categories-icons/pu-foams.png",
  "aerosols": "/images/product-categories/categories-icons/aerosols.png",
  "fire-rated": "/images/product-categories/categories-icons/fire-rated-series.png",
  "accessories": "/images/product-categories/categories-icons/accessories.png",
  // Optional extra category icons present under public/images/product-categories/categories-icons
  "spray-paint":"/images/product-categories/categories-icons/spray-paints.png",
  "coating-system": "/images/product-categories/categories-icons/coatings.png",
  "anaerobics": "/images/product-categories/categories-icons/anaerobics.png",
  "industrial": "/images/product-categories/categories-icons/industrials.png",
  "automotive": "/images/product-categories/categories-icons/automotive.png",
};

// Visual theme (Tailwind classes) for each category
export const categoryThemeById: Record<string, { bg: string; ring: string; text: string; hoverBg: string; hoverRing: string; hoverText: string }> = {
  adhesives: { bg: "bg-emerald-50", ring: "ring-emerald-200", text: "text-emerald-700", hoverBg: "group-hover:bg-emerald-100", hoverRing: "group-hover:ring-emerald-300", hoverText: "group-hover:text-emerald-800" },
  sealants: { bg: "bg-sky-50", ring: "ring-sky-200", text: "text-sky-700", hoverBg: "group-hover:bg-sky-100", hoverRing: "group-hover:ring-sky-300", hoverText: "group-hover:text-sky-800" },
  "pu-foams": { bg: "bg-lime-50", ring: "ring-lime-200", text: "text-lime-700", hoverBg: "group-hover:bg-lime-100", hoverRing: "group-hover:ring-lime-300", hoverText: "group-hover:text-lime-800" },
  aerosols: { bg: "bg-rose-50", ring: "ring-rose-200", text: "text-rose-700", hoverBg: "group-hover:bg-rose-100", hoverRing: "group-hover:ring-rose-300", hoverText: "group-hover:text-rose-800" },
  "fire-rated": { bg: "bg-orange-50", ring: "ring-orange-200", text: "text-orange-700", hoverBg: "group-hover:bg-orange-100", hoverRing: "group-hover:ring-orange-300", hoverText: "group-hover:text-orange-800" },
  accessories: { bg: "bg-slate-50", ring: "ring-slate-200", text: "text-slate-700", hoverBg: "group-hover:bg-slate-100", hoverRing: "group-hover:ring-slate-300", hoverText: "group-hover:text-slate-800" },
};

export const solutionIconById: Record<string, string> = {
  "hvac": "/images/solutions/hvac.png",
  "automotive": "/images/solutions/automotive-products.png",
  "parks": "/images/solutions/decorative-products.png", // closest match available
  "trucks": "/images/solutions/trucks-long-vehicles.png",
  "pool": "/images/solutions/pool-aqua.png",
  "caravans": "/images/solutions/caravans.png",
  "bike": "/images/solutions/bike-motorbike-maintenance.png",
  "work-machines": "/images/solutions/work-machines-agriculture-machines.png",
};

// Visual theme for solution icons (friendly background + ring + text)
export const solutionThemeById: Record<string, { bg: string; ring: string; text: string; hoverBg: string; hoverRing: string; hoverText: string }> = {
  hvac: { bg: "bg-sky-50", ring: "ring-sky-200", text: "text-sky-700", hoverBg: "group-hover:bg-sky-100", hoverRing: "group-hover:ring-sky-300", hoverText: "group-hover:text-sky-800" },
  automotive: { bg: "bg-rose-50", ring: "ring-rose-200", text: "text-rose-700", hoverBg: "group-hover:bg-rose-100", hoverRing: "group-hover:ring-rose-300", hoverText: "group-hover:text-rose-800" },
  parks: { bg: "bg-emerald-50", ring: "ring-emerald-200", text: "text-emerald-700", hoverBg: "group-hover:bg-emerald-100", hoverRing: "group-hover:ring-emerald-300", hoverText: "group-hover:text-emerald-800" },
  trucks: { bg: "bg-amber-50", ring: "ring-amber-200", text: "text-amber-800", hoverBg: "group-hover:bg-amber-100", hoverRing: "group-hover:ring-amber-300", hoverText: "group-hover:text-amber-900" },
  pool: { bg: "bg-cyan-50", ring: "ring-cyan-200", text: "text-cyan-700", hoverBg: "group-hover:bg-cyan-100", hoverRing: "group-hover:ring-cyan-300", hoverText: "group-hover:text-cyan-800" },
  caravans: { bg: "bg-fuchsia-50", ring: "ring-fuchsia-200", text: "text-fuchsia-700", hoverBg: "group-hover:bg-fuchsia-100", hoverRing: "group-hover:ring-fuchsia-300", hoverText: "group-hover:text-fuchsia-800" },
  bike: { bg: "bg-indigo-50", ring: "ring-indigo-200", text: "text-indigo-700", hoverBg: "group-hover:bg-indigo-100", hoverRing: "group-hover:ring-indigo-300", hoverText: "group-hover:text-indigo-800" },
  "work-machines": { bg: "bg-lime-50", ring: "ring-lime-200", text: "text-lime-700", hoverBg: "group-hover:bg-lime-100", hoverRing: "group-hover:ring-lime-300", hoverText: "group-hover:text-lime-800" },
};

// Map item IDs from data/catalog to product images
export const productImageByItemId: Record<string, string> = {
  // newProducts
  "np-1": "/images/all-products/sealants/AC578-sanitary-sealant-bath-kitchen.png",
  "np-2": "/images/all-products/adhesives/Akfix-744-Allbond-Hybrid.png",
  "np-3": "/images/all-products/sealants/AC580-rapid-seal.png",
  "np-4": "/images/all-products/adhesives/702HV-super-glue.png",
  "np-5": "/images/all-products/adhesives/E360-Plast-Weld.png",
  "np-6": "/images/all-products/adhesives/HB262-hybrid-wood-flooring-adhesive.png",
  // mostVisited
  "mv-1": "/images/all-products/pu-foams/fast55-mega-pu-foam.png", // closest available to 805P
  "mv-2": "/images/all-products/pu-foams/fast70-mega-pu-foam.png",
  "mv-3": "/images/all-products/adhesives/610-pu-express-montage-adhesive.png",
  "mv-4": "/images/all-products/adhesives/PA370-express-pu-wood-marine-adhesive.png",
  "mv-5": "/images/all-products/sealants/1500-Heat-Fighter.png",
  "mv-6": "/images/all-products/adhesives/705-universal-fast-adhesive.png",
};
