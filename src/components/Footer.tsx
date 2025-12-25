"use client";

import Container from "./ui/Container";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa";
import { useLang } from "@/hooks/useLang";
import { t } from "@/data/labels";

export default function Footer() {
  const lang = useLang();
  return (
    <footer className="bg-gradient-to-br bg-gray-200 mt-20">
      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="flex flex-col gap-4 col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="relative w-[150px] h-[100px]">
                <Image
                  src="/images/logo/sultanlogo.png"
                  alt="Sultan Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
              {t("footerDescription", lang)}
            </p>
            <div className="flex gap-3 mt-2">
              <a
                href="https://www.linkedin.com/company/moqtradingest/"
                aria-label="LinkedIn"

                className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-gradient-to-br hover:from-purple-500 hover:to-indigo-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com/moqtrading2016/"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-gradient-to-br hover:from-purple-500 hover:to-indigo-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/MOQTradingEst"
                aria-label="Facebook"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-gradient-to-br hover:from-purple-500 hover:to-indigo-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <FaFacebookF size={18} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
              {t("productsSection", lang)}
            </h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-indigo-600 font-bold">➤</span>
                <Link
                  href="/categories"
                  className="hover:text-indigo-600 transition-colors duration-200"
                >
                  {t("allProducts", lang)}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
              {t("companySection", lang)}
            </h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-indigo-600 font-bold">➤</span>
                <Link
                  href="/customer-care/about"
                  className="hover:text-indigo-600 transition-colors duration-200"
                >
                  {t("aboutUs", lang)}
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-indigo-600 font-bold">➤</span>
                <Link
                  href="/customer-care/termsOfBusiness"
                  className="hover:text-indigo-600 transition-colors duration-200"
                >
                  {t("termsOfBusiness", lang)}
                </Link>
              </li>

              <li className="flex items-center gap-2">
                <span className="text-indigo-600 font-bold">➤</span>
                <Link
                  href="/customer-care/supplierIncentiveProcessDescription"
                  className="hover:text-indigo-600 transition-colors duration-200"
                >
                  {t("supplierIncentiveProcess", lang)}
                </Link>
              </li>

            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
              {t("customerCareSection", lang)}
            </h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-indigo-600 font-bold">➤</span>
                <Link
                  href="/customer-care"
                  className="hover:text-indigo-600 transition-colors duration-200"
                >
                  {t("contactUs", lang)}
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-indigo-600 font-bold">➤</span>
                <Link
                  href="/customer-care/shopping-guide"
                  className="hover:text-indigo-600 transition-colors duration-200"
                >
                  {t("shoppingGuide", lang)}
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-indigo-600 font-bold">➤</span>
                <Link
                  href="/customer-care/faq"
                  className="hover:text-indigo-600 transition-colors duration-200"
                >
                  {t("faq", lang)}
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-indigo-600 font-bold">➤</span>
                <Link
                  href="/customer-care/returns"
                  className="hover:text-indigo-600 transition-colors duration-200"
                >
                  {t("returnExchange", lang)}
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-indigo-600 font-bold">➤</span>
                <Link
                  href="/customer-care/privacy"
                  className="hover:text-indigo-600 transition-colors duration-200"
                >
                  {t("privacyPolicy", lang)}
                </Link>
              </li>
            </ul>
          </div>

          {/* Human Rights / Legal */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
              {t("humanRightsSection", lang)}
            </h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-indigo-600 font-bold">➤</span>
                <Link
                  href="/customer-care/humanRightPolicy"
                  className="hover:text-indigo-600 transition-colors duration-200"
                >
                  {t("humanRightsPolicy", lang)}
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-indigo-600 font-bold">➤</span>
                <Link
                  href="/customer-care/humanRightsAnalysisProcessDescription"
                  className="hover:text-indigo-600 transition-colors duration-200"
                >
                  {t("humanRightsAnalysisProcess", lang)}
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-indigo-600 font-bold">➤</span>
                <Link
                  href="/customer-care/humanRightsDueDiligance"
                  className="hover:text-indigo-600 transition-colors duration-200"
                >
                  {t("humanRightsDueDiligance", lang)}
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom */}
      <div className="border-t border-gray-200 bg-gradient-to-b from-white to-gray-50">
        <Container className="py-10">
          <div className="flex justify-center text-center">
            <p
              className={`
          max-w-5xl
          text-sm md:text-[15px]
          leading-loose
          font-normal
          text-gray-600
          tracking-wide
          ${lang === "ar" ? "rtl text-[16px] leading-[2.2] tracking-normal" : ""}
        `}
            >
              {t("copyright", lang)}
            </p>
          </div>
        </Container>
      </div>



    </footer>
  );
}
