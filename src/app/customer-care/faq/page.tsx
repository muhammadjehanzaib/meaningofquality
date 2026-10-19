import type { Metadata } from 'next';
import FAQClient, { FAQCategory } from '@/components/customer-care/FAQClient';

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | B2B Wholesale & Delivery",
  description:
    "Find answers to common questions about bulk orders, custom quotations, VAT invoices, payment terms, and delivery across Saudi Arabia from Meaning of Quality.",
  alternates: {
    canonical: "https://www.moq.com.sa/customer-care/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions (FAQ) | Meaning of Quality (Sultan)",
    description:
      "Find answers to common questions about bulk orders, custom quotations, VAT invoices, payment terms, and delivery across Saudi Arabia.",
    url: "https://www.moq.com.sa/customer-care/faq",
  },
};

const faqCategories: FAQCategory[] = [
  {
    title: { en: "Orders, Quotations & Pricing", ar: "الطلبات، عروض الأسعار والتسعير" },
    questions: [
      {
        question: {
          en: "How do I place a bulk or corporate order?",
          ar: "كيف يمكنني تقديم طلب جملة أو طلب شركات؟",
        },
        answer: {
          en: "You can place a bulk or corporate order by contacting our sales team. We assist with quantities, pricing, and delivery schedules.",
          ar: "يمكنك تقديم طلب جملة أو طلب شركات من خلال التواصل مع فريق المبيعات، حيث نقوم بالمساعدة في تحديد الكميات والتسعير وجدولة التسليم.",
        },
      },
      {
        question: {
          en: "Do you offer customized quotations?",
          ar: "هل تقدمون عروض أسعار مخصصة؟",
        },
        answer: {
          en: "Yes. Quotations are customized based on order volume, project scope, and delivery requirements.",
          ar: "نعم، يتم تخصيص عروض الأسعار حسب حجم الطلب ومتطلبات المشروع وجدول التسليم.",
        },
      },
      {
        question: {
          en: "Are prices inclusive of VAT?",
          ar: "هل الأسعار شاملة ضريبة القيمة المضافة؟",
        },
        answer: {
          en: "All prices are exclusive of VAT unless stated otherwise. VAT is clearly shown on invoices.",
          ar: "جميع الأسعار غير شاملة ضريبة القيمة المضافة ما لم يُذكر خلاف ذلك، ويتم توضيح الضريبة في الفواتير.",
        },
      },
    ],
  },
  {
    title: { en: "Payment Terms & Invoicing", ar: "شروط الدفع والفواتير" },
    questions: [
      {
        question: {
          en: "What payment methods are available for B2B customers?",
          ar: "ما طرق الدفع المتاحة لعملاء الشركات؟",
        },
        answer: {
          en: "We accept bank transfers and approved corporate payment methods. Cash on delivery is not available for bulk orders.",
          ar: "نقبل التحويل البنكي ووسائل الدفع المعتمدة للشركات. لا يتوفر الدفع عند الاستلام لطلبات الجملة.",
        },
      },
      {
        question: {
          en: "Do you offer credit payment terms?",
          ar: "هل توفرون شروط دفع آجلة؟",
        },
        answer: {
          en: "Credit terms may be offered to approved corporate clients after evaluation and agreement.",
          ar: "قد يتم توفير شروط دفع آجلة للعملاء المعتمدين بعد التقييم والموافقة على الاتفاقية.",
        },
      },
      {
        question: {
          en: "Will I receive a tax invoice?",
          ar: "هل سأحصل على فاتورة ضريبية؟",
        },
        answer: {
          en: "Yes, a VAT-compliant tax invoice is issued for every order.",
          ar: "نعم، يتم إصدار فاتورة ضريبية متوافقة مع أنظمة ضريبة القيمة المضافة لكل طلب.",
        },
      },
    ],
  },
  {
    title: { en: "Shipping, Delivery & Logistics", ar: "الشحن، التسليم والخدمات اللوجستية" },
    questions: [
      {
        question: {
          en: "Do you deliver across Saudi Arabia?",
          ar: "هل تقومون بالتوصيل داخل المملكة العربية السعودية؟",
        },
        answer: {
          en: "Yes, we deliver to all major cities and industrial areas across Saudi Arabia.",
          ar: "نعم، نقوم بالتوصيل إلى جميع المدن والمناطق الصناعية داخل المملكة العربية السعودية.",
        },
      },
      {
        question: {
          en: "Can delivery be scheduled for projects?",
          ar: "هل يمكن جدولة التسليم للمشاريع؟",
        },
        answer: {
          en: "Yes, deliveries can be scheduled based on project timelines and site readiness.",
          ar: "نعم، يمكن جدولة التسليم حسب جدول المشروع وجاهزية الموقع.",
        },
      },
    ],
  },
  {
    title: { en: "Returns, Warranty & After-Sales Support", ar: "الإرجاع، الضمان وخدمات ما بعد البيع" },
    questions: [
      {
        question: {
          en: "What is your return policy for B2B orders?",
          ar: "ما هي سياسة الإرجاع لطلبات الشركات؟",
        },
        answer: {
          en: "Returns are reviewed case-by-case. Custom or made-to-order items are non-returnable.",
          ar: "يتم مراجعة الإرجاع حسب كل حالة. المنتجات المخصصة أو المصنعة حسب الطلب غير قابلة للإرجاع.",
        },
      },
      {
        question: {
          en: "Do products include a warranty?",
          ar: "هل المنتجات مشمولة بضمان؟",
        },
        answer: {
          en: "Warranty coverage depends on the product and manufacturer and is stated in the quotation.",
          ar: "يعتمد الضمان على المنتج والشركة المصنعة ويتم توضيحه في عرض السعر.",
        },
      },
    ],
  },
];

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((cat) =>
      cat.questions.map((q) => ({
        "@type": "Question",
        name: q.question.en,
        acceptedAnswer: {
          "@type": "Answer",
          text: q.answer.en,
        },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQClient categories={faqCategories} />
    </>
  );
}
