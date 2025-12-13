"use client";

import Container from "@/components/ui/Container";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { useLang } from "@/hooks/useLang";

export default function ContactPage() {
  const lang = useLang();
  const isAr = lang === "ar";

  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background py-16 sm:py-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08),transparent_60%)]" />

      <Container className="max-w-5xl space-y-20">

        {/* ===================== HEADER ===================== */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            {isAr ? "تواصل معنا" : "Contact Us"}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            {isAr
              ? "تواصل مع مؤسسة معنى الجودة للتجارة، فريقنا جاهز لدعم احتياجات أعمالك."
              : "Get in touch with The Meaning of Quality Trading Establishment. Our team is ready to support your business needs."}
          </p>
        </div>

        {/* ===================== CONTACT CARDS ===================== */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          <Card
            title={isAr ? "المكتب الرئيسي" : "Head Office"}
            icon={<MapPin className="h-6 w-6" />}
          >
            {isAr ? (
              <>
                شارع جارالله بن فهد<br />
                حي الجزيرة 14262<br />
                الرياض، المملكة العربية السعودية
              </>
            ) : (
              <>
                Jarallah Bin Fahad Street<br />
                Al Jazeerah District 14262<br />
                Riyadh, Saudi Arabia
              </>
            )}
          </Card>

          <Card
            title={isAr ? "البريد الإلكتروني" : "Email"}
            icon={<Mail className="h-6 w-6" />}
          >
            <a
              href="mailto:sales@moq.com.sa"
              className="text-primary hover:underline"
            >
              sales@moq.com.sa
            </a>
          </Card>

          <Card
            title={isAr ? "الهاتف" : "Phone"}
            icon={<Phone className="h-6 w-6" />}
          >
            <a
              href="tel:+966590019826"
              className="text-primary hover:underline"
            >
              {isAr ? "00966 590 019 826" : "+966 590 019 826"}
            </a>
          </Card>

          <Card
            title={isAr ? "واتساب" : "WhatsApp"}
            icon={<MessageCircle className="h-6 w-6" />}
            iconBg="bg-green-100 text-green-600"
          >
            <a
              href="https://wa.me/966590019826"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              {isAr ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
            </a>
          </Card>

          <Card
            title={isAr ? "ساعات العمل" : "Business Hours"}
            icon={<Clock className="h-6 w-6" />}
          >
            {isAr
              ? "الأحد – الخميس\n9:00 صباحًا – 6:00 مساءً"
              : "Sunday – Thursday\n9:00 AM – 6:00 PM (GMT+3)"}
          </Card>

        </div>

        {/* ===================== MAP ===================== */}
        <div className="overflow-hidden rounded-3xl border shadow-sm">
          <iframe
            title="MOQ Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.168834123456!2d46.673112!3d24.705623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f031a5bc12345%3A0xabcdef1234567890!2sJarallah%20Bin%20Fahad%20Street%2C%20Al%20Jazeerah%20District%2C%20Riyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sar!4v1699999999999!5m2!1sen!2sar"
            className="h-[380px] w-full border-0"
            loading="lazy"
          />
        </div>


      </Container>
    </div>
  );
}

/* ===================== CARD ===================== */
function Card({
  title,
  children,
  icon,
  iconBg = "bg-primary/10 text-primary",
}: {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  iconBg?: string;
}) {
  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm transition hover:shadow-lg">
      <div className="flex gap-4">
        <div className={`flex h-12 w-12 items-center justify-center rounded-full ${iconBg}`}>
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="mt-1 whitespace-pre-line text-sm text-muted-foreground">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}
