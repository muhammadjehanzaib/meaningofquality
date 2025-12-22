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
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <Container className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Logo & Description */}
        <div className="flex flex-col gap-4 col-span-1 lg:col-span-1">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo/sultanlogo.png"
              alt="Sultan Logo"
              width={150}
              height={100}
              className="object-contain"
            />
          </div>
          <p className="text-sm text-gray-500 max-w-sm">
            {t("footerDescription", lang)}
          </p>
          <div className="flex gap-3 mt-2">
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition"
            >
              <FaFacebookF size={16} />
            </a>
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-4">{t("productsSection", lang)}</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>
              <Link href="/categories" className="hover:text-primary transition">
                {t("allProducts", lang)}
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-4">{t("companySection", lang)}</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>
              <Link href="/customer-care/about" className="hover:text-primary transition">
                {t("aboutUs", lang)}
              </Link>
            </li>
            <li>
              <Link href="/customer-care" className="hover:text-primary transition">
                {t("contactUs", lang)}
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-4">{t("customerCareSection", lang)}</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>
              <Link href="/customer-care" className="hover:text-primary transition">
                {t("contactUs", lang)}
              </Link>
            </li>
            <li>
              <Link href="/customer-care/faq" className="hover:text-primary transition">
                {t("faq", lang)}
              </Link>
            </li>
            <li>
              <Link href="/customer-care/shopping-guide" className="hover:text-primary transition">
                {t("shoppingGuide", lang)}
              </Link>
            </li>
            <li>
              <Link href="/customer-care/returns" className="hover:text-primary transition">
                {t("returnExchange", lang)}
              </Link>
            </li>
            <li>
              <Link href="/customer-care/privacy" className="hover:text-primary transition">
                {t("privacyPolicy", lang)}
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-4">{t("humanRightsSection", lang)}</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>
              <Link href="/customer-care/humanRightPolicy" className="hover:text-primary transition">
                {t("humanRightsPolicy", lang)}
              </Link>
            </li>
            <li>
              <Link href="/customer-care/humanRightsAnalysisProcessDescription" className="hover:text-primary transition">
                {t("humanRightsAnalysisProcess", lang)}
              </Link>
            </li>
                        <li>
              <Link href="/customer-care/humanRightsDueDiligance" className="hover:text-primary transition">
                {t("humanRightsDueDiligance", lang)}
              </Link>
            </li>
            <li>
              <Link href="/customer-care/supplierIncentiveProcessDescription" className="hover:text-primary transition">
                {t("supplierIncentiveProcess", lang)}
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      {/* Bottom */}
      <div className="border-t border-gray-200">
        <Container className="py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 gap-2">
          <p>{t("copyright", lang).replace("2025", new Date().getFullYear().toString())}</p>
          <div className="flex gap-4">
            <Link href="/customer-care/privacy" className="hover:text-primary transition">{t("privacy", lang)}</Link>
            <Link href="/customer-care/returns" className="hover:text-primary transition">{t("terms", lang)}</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
