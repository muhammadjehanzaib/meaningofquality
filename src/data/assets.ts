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

// Map item IDs from data/catalog to product images
export const productImageByItemId: Record<string, string> = {
  "840P": "/images/all-products/adhesives/HB262-hybrid-wood-flooring-adhesive.png",
  "mv-1": "/images/all-products/pu-foams/fast55-mega-pu-foam.png",
  "mv-2": "/images/all-products/pu-foams/fast70-mega-pu-foam.png",
  "mv-3": "/images/all-products/adhesives/610-pu-express-montage-adhesive.png",
  "mv-4": "/images/all-products/adhesives/PA370-express-pu-wood-marine-adhesive.png",
  "mv-5": "/images/all-products/sealants/1500-Heat-Fighter.png",
  "mv-6": "/images/all-products/adhesives/705-universal-fast-adhesive.png",
  "np-1": "/images/all-products/sealants/AC578-sanitary-sealant-bath-kitchen.png",
  "np-1765966726374": "/images/all-products/adhesives/HB262-hybrid-wood-flooring-adhesive.png",
  "np-1766645310521": "/images/all-products/adhesives/HB262-hybrid-wood-flooring-adhesive.png",
  "np-2": "/images/all-products/adhesives/Akfix-744-Allbond-Hybrid.png",
  "np-3": "/images/all-products/sealants/AC580-rapid-seal.png",
  "np-4": "/images/all-products/adhesives/702HV-super-glue.png",
  "np-5": "/images/all-products/adhesives/E360-Plast-Weld.png",
  "np-6": "/images/all-products/adhesives/HB262-hybrid-wood-flooring-adhesive.png"
};
