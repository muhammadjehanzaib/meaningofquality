'use client';

import Link from 'next/link';
import Container from "@/components/ui/Container";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { useLang } from "@/hooks/useLang";


// Sidebar items
const sidebarItems = [
  { id: 'contact', label: 'Contact Us', path: '/customer-care', isActive: true },
  { id: 'about', label: 'About Us', path: '/customer-care/about', isActive: false },
  { id: 'faq', label: 'Frequently Asked Questions', path: '/customer-care/faq', isActive: false },
  { id: 'shopping-guide', label: 'Shopping Guide', path: '/customer-care/shopping-guide', isActive: false },
  { id: 'returns', label: 'Return and Exchange', path: '/customer-care/returns', isActive: false },
  { id: 'privacy', label: 'Privacy Policy', path: '/customer-care/privacy', isActive: false },
];

export default function CustomerCarePage() {
  const lang = useLang();
  const isAr = lang === "ar";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm text-gray-500">
            <Link href="/" className="hover:text-purple-600">Home</Link>
            <span className="mx-2">&gt;</span>
            <Link href="/customer-care" className="hover:text-purple-600">Customer Care</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-gray-900">{isAr ? "تواصل معنا" : "Contact Us"}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="bg-white shadow rounded-lg border">
            <nav className="p-4">
              <ul className="space-y-1">
                {sidebarItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.path}
                      className={`block px-4 py-3 text-sm rounded-md transition-colors ${item.isActive
                          ? 'bg-purple-50 text-purple-700 font-medium border-l-4 border-purple-600'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-purple-600'
                        }`}
                    >
                      {item.label}
                    </Link>

                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-16" dir={isAr ? "rtl" : "ltr"}>
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl">
              {isAr ? "تواصل معنا" : "Contact Us"}
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
              {isAr
                ? "تواصل مع مؤسسة معنى الجودة للتجارة، فريقنا جاهز لدعم احتياجات أعمالك."
                : "Get in touch with The Meaning of Quality Trading Establishment. Our team is ready to support your business needs."}
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ContactCard
              title={isAr ? "المكتب الرئيسي" : "Head Office"}
              icon={<MapPin className="h-6 w-6" />}
              content={isAr
                ? "شارع جارالله بن فهد\nحي الجزيرة 14262\nالرياض، المملكة العربية السعودية"
                : "Jarallah Bin Fahad Street\nAl Jazeerah District 14262\nRiyadh, Saudi Arabia"}
            />
            <ContactCard
              title={isAr ? "البريد الإلكتروني" : "Email"}
              icon={<Mail className="h-6 w-6" />}
              content={<a href="mailto:sales@moq.com.sa" className="text-purple-600 hover:underline">sales@moq.com.sa</a>}
            />
            <ContactCard
              title={isAr ? "الهاتف" : "Phone"}
              icon={<Phone className="h-6 w-6" />}
              content={<a href="tel:+966590019826" className="text-purple-600 hover:underline">{isAr ? "00966 590 019 826" : "+966 590 019 826"}</a>}
            />
            <ContactCard
              title={isAr ? "واتساب" : "WhatsApp"}
              icon={<MessageCircle className="h-6 w-6" />}
              iconBg="bg-green-100 text-green-600"
              content={<a href="https://wa.me/966590019826" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">{isAr ? "تواصل عبر واتساب" : "Chat on WhatsApp"}</a>}
            />
            <ContactCard
              title={isAr ? "ساعات العمل" : "Business Hours"}
              icon={<Clock className="h-6 w-6" />}
              content={isAr
                ? "الأحد – الخميس\n9:00 صباحًا – 6:00 مساءً"
                : "Sunday – Thursday\n9:00 AM – 6:00 PM (GMT+3)"}
            />
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-3xl border shadow-sm">
            <iframe
              title="MOQ Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.168834123456!2d46.673112!3d24.705623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f031a5bc12345%3A0xabcdef1234567890!2sJarallah%20Bin%20Fahad%20Street%2C%20Al%20Jazeerah%20District%2C%20Riyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sar!4v1699999999999!5m2!1sen!2sar"
              className="h-[380px] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Footer / Company Info */}
      <footer className="bg-white border-t py-8">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm text-gray-600">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">{isAr ? "السعودية للسلامة" : "The Meaning of Quality Trading Establishment"}</h3>
              <p><strong>P.O. Box:</strong> 3196, Riyadh 11471</p>
              <p><strong>Unified Number:</strong> 920000089</p>
            </div>
            <div>
              <p><strong>{isAr ? "لخدمات ما بعد البيع:" : "After Sales Service:"}</strong> 8003314444</p>
              <p><strong>Fax:</strong> 011-4656363</p>
              <p><strong>Email:</strong> <a href="mailto:support@saudisafety.com" className="text-purple-600 hover:underline">support@saudisafety.com</a></p>
            </div>
            <div>
              <p><strong>{isAr ? "ساعات عمل مركز الاتصال:" : "Call Center Working Hours:"}</strong> Friday – Thursday: 8:00 AM – 10:00 PM</p>
              <p><strong>Friday:</strong> 4:00 PM – 10:00 PM</p>
              <p>{isAr ? "للموقع والفروع:" : "For showroom locations & hours"} <Link href="/store-locations" className="text-purple-600 hover:underline">Store locations</Link></p>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}

interface ContactCardProps {
  title: string;
  icon: React.ReactNode;
  iconBg?: string;
  content?: React.ReactNode;
  children?: React.ReactNode;
}

function ContactCard({
  title,
  children,
  icon,
  iconBg = "bg-purple-100 text-purple-600",
  content,
}: ContactCardProps) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-lg">
      <div className="flex gap-4">
        <div className={`flex h-12 w-12 items-center justify-center rounded-full ${iconBg}`}>
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="mt-1 text-sm text-gray-600 whitespace-pre-line">{content || children}</p>
        </div>
      </div>
    </div>
  );
}
