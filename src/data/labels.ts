import type { Lang, LString } from "@/data/i18n";
import { defaultLang } from "@/data/i18n";

export const labels = {
  products: { en: "Products", ar: "المنتجات" },
  viewAll: { en: "View all", ar: "عرض الكل" },
  solutions: { en: "Solutions", ar: "الحلول" },
  newProducts: { en: "New Products", ar: "منتجات جديدة" },
  mostVisitedProducts: { en: "Most Visited Products", ar: "المنتجات الأكثر زيارة" },
  categories: { en: "Categories", ar: "الفئات" },
  about: { en: "About", ar: "حول" },
  contact: { en: "Contact", ar: "اتصل" },
  home: { en: "Home", ar: "الصفحة الرئيسية" },
  productNotFound: { en: "Product not found", ar: "المنتج غير موجود" },
  productNotFoundDesc: {
    en: "The product you are looking for does not exist or has been moved.",
    ar: "المنتج الذي تبحث عنه غير موجود أو تم نقله.",
  },
  backToHome: { en: "Back to home", ar: "العودة إلى الصفحة الرئيسية" },
  downloadTDS: { en: "Download TDS", ar: "تحميل TDS" },
  downloadSDS: { en: "Download SDS", ar: "تحميل SDS" },
  contactSales: { en: "Contact Sales", ar: "تواصل مع المبيعات" },
  properties: { en: "Properties", ar: "الخصائص" },
  applicationAreas: { en: "Application Areas", ar: "مجالات الاستخدام" },
  packaging: { en: "Packaging", ar: "التعبئة" },
  stockCode: { en: "Stock Code", ar: "رمز المخزون" },
  productCode: { en: "Product Code", ar: "رمز المنتج" },
  type: { en: "Type", ar: "النوع" },
  volume: { en: "Volume", ar: "الحجم" },
  boxQty: { en: "BoxQty", ar: "عدد العلب" },
  relatedIn: { en: "Related in", ar: "منتجات ذات صلة في" },
  newProductBadge: { en: "New Product", ar: "منتج جديد" },
  noProductsInCategory: { en: "No products found in this category yet.", ar: "لا توجد منتجات في هذه الفئة بعد." },
  cart: { en: "Cart", ar: "السلة" },
  cartTitle: { en: "Your Cart", ar: "سلتك" },
  addToCart: { en: "Add to cart", ar: "أضف إلى السلة" },
  quantity: { en: "Quantity", ar: "الكمية" },
  remove: { en: "Remove", ar: "إزالة" },
  clearCart: { en: "Clear cart", ar: "مسح السلة" },
  emptyCart: { en: "Your cart is empty.", ar: "سلتك فارغة." },
  items: { en: "Items", ar: "العناصر" },
  yourInfo: { en: "Your Info", ar: "معلوماتك" },
  name: { en: "Name", ar: "الاسم" },
  company: { en: "Company", ar: "الشركة" },
  email: { en: "Email", ar: "البريد الإلكتروني" },
  phone: { en: "Phone", ar: "الهاتف" },
  note: { en: "Note", ar: "ملاحظة" },
  sendWhatsAppInquiry: { en: "Send WhatsApp Inquiry", ar: "إرسال استفسار عبر واتساب" },
  downloadPDF: { en: "Download PDF", ar: "تحميل PDF" },
  goToCart: { en: "Go to cart", ar: "اذهب إلى السلة" },
  addedToCart: { en: "Added to cart", ar: "تمت الإضافة إلى السلة" },
  viewDetails: { en: "View details", ar: "عرض التفاصيل" },
  continueShopping: { en: "Continue shopping", ar: "متابعة التسوق" },
  solutionsIntro: {
    en: "Browse application-focused groupings such as HVAC, Automotive, Caravans, Pool & Aqua, and more. Click a card to explore relevant products.",
    ar: "تصفح مجموعات تركز على التطبيقات مثل HVAC والسيارات والكرافانات والمسابح وغيرها. انقر على بطاقة لاستكشاف المنتجات ذات الصلة.",
  },
} as const;

export type LabelKey = keyof typeof labels;

export function t(key: LabelKey, lang: Lang = defaultLang): string {
  const rec = labels[key] as LString;
  return rec?.[lang] ?? rec?.en ?? "";
}

