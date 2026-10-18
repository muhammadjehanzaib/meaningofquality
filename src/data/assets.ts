export type Banner = { src: string; alt: string; href?: string };

export const sliderBanners: Banner[] = [
  { src: "/images/sliders/banner_1792295220724_wtxsal.jpg", alt: "705 Universal Fast Adhesive banner" },
  { src: "/images/sliders/banner_1792252617336_n7zhck.jpg", alt: "705 Universal Fast Adhesive banner" },
  { src: "/images/sliders/banner_1792252615234_4p53s0.jpg", alt: "Brad Nails" },
  { src: "/images/sliders/banner_1792252613334_4e22sm.jpg", alt: "Brad Nails" },
  { src: "/images/sliders/banner_1792252600266_oevqi1.jpg", alt: "Brad Nails" }
];

export const categoryIconById: Record<string, string> = {
  "adhesives": "/images/product-categories/categories-icons/adhesives.png",
  "category-1792073082887": "/images/product-categories/categories-icons/category-1792073082887_1792073227144_ibjdpk.png",
  "category-1792073296472": "/images/product-categories/categories-icons/category-1792073296472_1792073502556_49s1l4.png",
  "category-1792073343435": "/images/product-categories/categories-icons/category-1792073343435_1792073491351_fsx2r5.png",
  "category-1792296041915": "/images/product-categories/categories-icons/category-1792296041915_1792296378306_n5f70s.png"
};

// Visual theme (Tailwind classes) for each category
export const categoryThemeById: Record<string, { bg: string; ring: string; text: string; hoverBg: string; hoverRing: string; hoverText: string }> = {};

// Map item IDs from data/catalog to product images
export const productImageByItemId: Record<string, string> = {
  "brad-nails-f10": "/images/all-products/category-1792073296472/brad-nails-f10_1792250260167_v2y8o6.png",
  "brad-nails-f15": "/images/all-products/category-1792073296472/brad-nails-f15_1792250268303_ev89hz.png",
  "brad-nails-f20": "/images/all-products/category-1792073296472/brad-nails-f20_1792250276101_a3iunw.png",
  "brad-nails-f25": "/images/all-products/category-1792073296472/brad-nails-f25_1792250283395_1fapol.png",
  "brad-nails-f30": "/images/all-products/category-1792073296472/brad-nails-f30_1792250291382_51qq02.png",
  "brad-nails-f35": "/images/all-products/category-1792073296472/brad-nails-f35_1792250336833_k9z3at.png",
  "brad-nails-f40": "/images/all-products/category-1792073296472/brad-nails-f40_1792250321048_c1cbdb.png",
  "brad-nails-f40-heavy-duty": "/images/all-products/category-1792073296472/brad-nails-f40-heavy-duty_1792251238345_lkvttr.png",
  "brad-nails-f45": "/images/all-products/category-1792073296472/brad-nails-f45_1792250352102_oa8m8m.png",
  "brad-nails-f50": "/images/all-products/category-1792073296472/brad-nails-f50_1792250363213_lt654m.png",
  "p-1766663384890": "/images/all-products/adhesives/placeholder.png",
  "p-1766663541009": "/images/all-products/adhesives/placeholder.png",
  "p-1766663816115": "/images/all-products/fire-rated/p-1766663816115_1766743011221_jq9pyz.jpeg",
  "p-1766747336873": "/images/all-products/category-1766747244591/p-1766747336873_1766750555797_d1fezx.png",
  "p-1792075071410": "",
  "steel-nails-st25": "/images/all-products/category-1792073082887/steel-nails-st25_1792250599855_6271mn.png",
  "steel-nails-st32": "/images/all-products/category-1792073082887/steel-nails-st32_1792250610782_4te0b6.png",
  "steel-nails-st38": "/images/all-products/category-1792073082887/steel-nails-st38_1792250617830_ioxaj3.png",
  "steel-nails-st50": "/images/all-products/category-1792073082887/steel-nails-st50_1792250628229_mangqy.png",
  "sultan-pu-foam-750ml": "/images/all-products/adhesives/subcategory-1792074350245/sultan-pu-foam-750ml_1792299752263_qx7a28.jpg",
  "sultan-spray-glue-400ml": "/images/all-products/adhesives/subcategory-1792074317951/sultan-spray-glue-400ml_1792299763076_bsvah4.jpg",
  "sultan-wood-glue-370kg": "/images/all-products/adhesives/subcategory-1792074373839/sultan-wood-glue-370kg_1792299740632_6uwrpl.jpg",
  "u-nails-1008j": "/images/all-products/category-1792073343435/u-nails-1008j_1792250200531_zpxb9a.png",
  "u-nails-1010j": "/images/all-products/category-1792073343435/u-nails-1010j_1792250210521_vloyt1.png",
  "u-nails-1013j": "/images/all-products/category-1792073343435/u-nails-1013j_1792250219306_3zxcjz.png",
  "u-nails-1406": "/images/all-products/category-1792073343435/u-nails-1406_1792251816152_h43pp6.png",
  "u-nails-1408": "/images/all-products/category-1792073343435/u-nails-1408_1792249946941_ezj4xy.png",
  "u-nails-1410": "/images/all-products/category-1792073343435/u-nails-1410_1792249958989_vk5y4o.png",
  "u-nails-1412": "/images/all-products/category-1792073343435/u-nails-1412_1792249974605_kfm1oy.png",
  "u-nails-1414": "/images/all-products/category-1792073343435/u-nails-1414_1792249983945_hnzofj.png",
  "u-nails-1416": "/images/all-products/category-1792073343435/u-nails-1416_1792249990442_livmrd.png",
  "u-nails-5540": "/images/all-products/category-1792073343435/u-nails-5540_1792249578814_qde8q5.png",
  "u-nails-5545": "/images/all-products/category-1792073343435/u-nails-5545_1792249652856_w2vowh.png",
  "u-nails-5550": "/images/all-products/category-1792073343435/u-nails-5550_1792249662083_bvapd5.png",
  "u-nails-8006": "/images/all-products/category-1792073343435/u-nails-8006_1792251601924_wzkajs.png",
  "u-nails-8008": "/images/all-products/category-1792073343435/u-nails-8008_1792249739067_nvxph8.png",
  "u-nails-8010": "/images/all-products/category-1792073343435/u-nails-8010_1792249747267_cjfdt6.png",
  "u-nails-8012": "/images/all-products/category-1792073343435/u-nails-8012_1792249753424_tqockc.png",
  "u-nails-8014": "/images/all-products/category-1792073343435/u-nails-8014_1792249789558_esf7c8.png",
  "u-nails-8016": "/images/all-products/category-1792073343435/u-nails-8016_1792249797777_ar5obd.png",
  "u-nails-9040": "/images/all-products/category-1792073343435/u-nails-9040_1792250239429_ro315i.png"
};
