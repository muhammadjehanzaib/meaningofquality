"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import { Users, Target, Award } from "lucide-react";
import { useLang } from "@/hooks/useLang";

export default function AboutPage() {
  const lang = useLang();
  const isAr = lang === "ar";

  return (
    <div className="relative bg-background py-16 sm:py-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/50 via-muted/10 to-background/50" />

      <Container className="max-w-6xl space-y-20">

        {/* HEADER */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            {isAr ? "من نحن" : "About Us"}
          </h1>
          <p className="mt-2 max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
            {isAr
              ? "مؤسسة معنى الجودة للتجارة هي شركة رائدة في توفير الحلول المبتكرة من المواد اللاصقة، والمواد الرغوية، والرشّ للمحترفين في البناء والتصنيع والتوزيع. نركز على الجودة، الأداء، وتجربة العملاء، مع الالتزام بالمعايير الدولية."
              : "The Meaning of Quality Trading Establishment is a leading provider of innovative adhesives, foams, and aerosol solutions for professional builders, manufacturers, and distributors. We focus on quality, performance, and customer experience, adhering to international standards."}
          </p>
        </div>

        {/* MISSION & VISION */}
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">{isAr ? "مهمتنا" : "Our Mission"}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {isAr
                ? "نسعى لتقديم منتجات موثوقة وعالية الجودة، مدعومة بخبرة فنية شاملة وتدريب متخصص لضمان نجاح عملائنا."
                : "We aim to deliver reliable, high-quality products supported by comprehensive technical expertise and specialized training to ensure our clients succeed."}
            </p>

            <h2 className="text-2xl font-semibold">{isAr ? "رؤيتنا" : "Our Vision"}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {isAr
                ? "أن نكون الخيار الأول للمحترفين في صناعة البناء والتوزيع عبر تقديم حلول مبتكرة وموثوقة."
                : "To be the top choice for professionals in construction and distribution by providing innovative and reliable solutions."}
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/aboutus.jpg"
              alt={isAr ? "صورة عن الشركة" : "About Us Image"}
              className="w-250 h-90 object-cover"
            />
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center">
            {isAr ? "لماذا تختارنا" : "Why Choose Us"}
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="p-6 bg-card rounded-2xl shadow hover:shadow-lg transition text-center space-y-4">
              <div className="flex items-center justify-center w-12 h-12 mx-auto rounded-full bg-primary/10 text-primary">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg">{isAr ? "جودة عالية" : "Premium Quality"}</h3>
              <p className="text-sm text-muted-foreground">
                {isAr
                  ? "منتجات عالية الجودة مع أداء متسق وموثوق."
                  : "High-quality products with consistent and reliable performance."}
              </p>
            </div>

            <div className="p-6 bg-card rounded-2xl shadow hover:shadow-lg transition text-center space-y-4">
              <div className="flex items-center justify-center w-12 h-12 mx-auto rounded-full bg-primary/10 text-primary">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg">{isAr ? "حلول مبتكرة" : "Innovative Solutions"}</h3>
              <p className="text-sm text-muted-foreground">
                {isAr
                  ? "مجموعة واسعة من الحلول المتقدمة لتلبية جميع احتياجات العملاء."
                  : "A wide range of advanced solutions to meet all client needs."}
              </p>
            </div>

            <div className="p-6 bg-card rounded-2xl shadow hover:shadow-lg transition text-center space-y-4">
              <div className="flex items-center justify-center w-12 h-12 mx-auto rounded-full bg-primary/10 text-primary">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg">{isAr ? "دعم مستمر" : "Dedicated Support"}</h3>
              <p className="text-sm text-muted-foreground">
                {isAr
                  ? "فريق دعم فني متاح لتقديم الاستشارات والمساعدة في أي وقت."
                  : "A dedicated technical support team available to provide guidance and assistance anytime."}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow-md hover:bg-primary/90 transition"
          >
            {isAr ? "تواصل معنا الآن" : "Get in Touch"}
          </a>
        </div>
      </Container>
    </div>
  );
}
