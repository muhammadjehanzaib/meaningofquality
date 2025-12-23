"use client";

import Container from "@/components/ui/Container";
import Link from "next/link";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { useLang } from "@/hooks/useLang";

export default function CustomerCareFooter() {
  const lang = useLang();
  const isAr = lang === "ar";

  return (
    <footer className="bg-white border-t py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">

          {/* Company Info */}
          <div className="space-y-4 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-gray-900">
              {isAr ? "السعودية للسلامة" : "The Meaning of Quality Trading Establishment"}
            </h3>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-purple-600" />
              <p className="whitespace-pre-line text-sm">
                {isAr
                  ? "الشارع: جار الله بن فهد\nالحي: الجزيرة 14262\nالرياض، المملكة العربية السعودية"
                  : "Jarallah Bin Fahad Street\nAl Jazeerah District 14262\nRiyadh, Saudi Arabia"}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-purple-600" />
              <p className="text-sm" dir="ltr">+966 590 019 826</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-purple-600" />
              <p className="text-sm">
                <strong>{isAr ? "خدمات ما بعد البيع:" : "After Sales Service:"}</strong>{" "}
                <span dir="ltr">+966 590 019 826</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-purple-600" />
              <p className="text-sm">
                <strong>Email:</strong>{" "}
                <a href="mailto:sales@moq.com.sa" className="text-purple-600 hover:underline">
                  sales@moq.com.sa
                </a>
              </p>
            </div>
          </div>

          {/* Call Center & Location */}
          <div className="space-y-4 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-3">
              <FaClock className="text-purple-600" />
              <p className="text-sm">
                <strong>{isAr ? "ساعات عمل مركز الاتصال:" : "Call Center Working Hours:"}</strong>{" "}
                <span dir="ltr">Sunday – Thursday: 9:00 AM – 6:00 PM</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-purple-600" />
              <p className="text-sm">
                {isAr ? "للموقع والفروع:" : "For showroom locations & hours"}{" "}
                <Link
                  href="https://maps.app.goo.gl/JHX2DVrRzomWQjeE8?g_st=ipc"
                  className="text-purple-600 hover:underline"
                >
                  {isAr ? "مواقع المتاجر" : "Store locations"}
                </Link>
              </p>
            </div>
          </div>

        </div>
      </Container>
    </footer>
  );
}
