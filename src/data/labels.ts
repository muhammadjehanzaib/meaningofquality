import type { Lang, LString } from "@/data/i18n";
import { defaultLang } from "@/data/i18n";

export const labels = {
  products: { en: "Categories", ar: "الفئات" },
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
  cart: { en: "Cart", ar: "الاستفسار" },
  cartTitle: { en: "Your Inquiry", ar: "استفسارك" },
  addToCart: { en: "Add to Inquiry", ar: "أضف إلى الاستفسار" },
  quantity: { en: "Quantity", ar: "الكمية" },
  remove: { en: "Remove", ar: "إزالة" },
  clearCart: { en: "Clear cart", ar: "مسح الاستفسار" },
  emptyCart: { en: "Your cart is empty.", ar: "استفسارك فارغ." },
  items: { en: "Items", ar: "العناصر" },
  yourInfo: { en: "Your Info", ar: "معلوماتك" },
  name: { en: "Name", ar: "الاسم" },
  company: { en: "Company", ar: "الشركة" },
  email: { en: "Email", ar: "البريد الإلكتروني" },
  phone: { en: "Phone", ar: "الهاتف" },
  note: { en: "Note", ar: "ملاحظة" },
  sendWhatsAppInquiry: { en: "Send WhatsApp Inquiry", ar: "إرسال استفسار عبر واتساب" },
  downloadPDF: { en: "Download PDF", ar: "تحميل PDF" },
  goToCart: { en: "Go to Inquiry", ar: "اذهب إلى الاستفسار" },
  addedToCart: { en: "Added to Inquiry", ar: "تمت الإضافة إلى الاستفسار" },
  viewDetails: { en: "View details", ar: "عرض التفاصيل" },
  continueShopping: { en: "Keep Exploring", ar: "متابعة التصفح" },
} as const;


export type LabelKey = keyof typeof labels;

export function t(key: LabelKey, lang: Lang = defaultLang): string {
  const rec = labels[key] as LString;
  return rec?.[lang] ?? rec?.en ?? "";
}

