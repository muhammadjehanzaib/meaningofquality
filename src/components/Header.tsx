"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "./ui/Container";
import { useState } from "react";
import LanguageToggle from "./LanguageToggle";
import Search from "./Search";
import { categories as headerCategories } from "@/data/catalog";
import { categoryIconById, categoryThemeById } from "@/data/assets";
import { useLang } from "@/hooks/useLang";
import { pick } from "@/data/i18n";
import { t } from "@/data/labels";
import { useCart } from "@/contexts/CartContext";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lang = useLang();
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-foreground/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex min-h-16 items-center justify-between gap-4 py-2">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          {/* Logo / MOQ Box */}
          <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(128,90,213,0.7)] transition-transform duration-300 hover:scale-110">
            MOQ
          </div>

          {/* Text Section */}
          <div className="flex flex-col text-center sm:text-left leading-tight max-w-xs sm:max-w-none">
            {/* English */}
            <Link
              href="/"
              className="text-sm sm:text-base font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-300 break-words"
            >
              THE MEANING OF QUALITY TRADING ESTABLISHMENT
            </Link>

            {/* Arabic */}
            <span className="text-xs sm:text-sm font-medium text-center text-gray-600 hover:text-indigo-600 rtl">
              مؤسسة معنى الجودة للتجارة
            </span>
          </div>
        </div>


        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 ">
          <Link href="/" className="text-sm text-foreground/80 hover:text-foreground">{t("home", lang)}</Link>
          <div className="relative"
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex items-center gap-1 text-sm text-foreground/80 hover:text-foreground"
            >
              {t("categories", lang)}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {menuOpen && (
              <div
                className="absolute left-0 top-full z-20 w-64 rounded-md border border-foreground/10 bg-background p-2 shadow-lg"
                onMouseEnter={() => setMenuOpen(true)}
              >
                {headerCategories.map((c) => {
                  const icon = categoryIconById[c.id] ?? "/images/product-categories/categories-icons/accessories.png";
                  const theme = categoryThemeById[c.id] ?? { bg: "bg-slate-50", ring: "ring-slate-200", text: "text-slate-700" };
                  return (
                    <Link
                      key={c.id}
                      href={`/categories/${c.id}`}
                      className="flex items-center gap-3 rounded px-3 py-2 text-sm text-foreground/80 hover:bg-muted"
                    >
                      <span className={`h-6 w-6 rounded ring-1 ${theme.ring} ${theme.bg} grid place-items-center`}>
                        <span className="relative h-4 w-4">
                          <Image src={icon} alt={`${pick(c.title, lang)} icon`} fill sizes="16px" className="object-contain" />
                        </span>
                      </span>
                      <span className="font-medium">{pick(c.title, lang)}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
          <Link href="/cart" className="text-sm text-foreground/80 hover:text-foreground">{t("quotationSummery", lang)}</Link>
          <Link href="/about" className="text-sm text-foreground/80 hover:text-foreground">{t("about", lang)}</Link>
          <Link href="/contact" className="text-sm text-foreground/80 hover:text-foreground">{t("contact", lang)}</Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Search />
          <Link href="/cart" className="relative inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-foreground" aria-label={t("cart", lang)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M6 6h15l-1.5 9h-12L6 6z" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="9" cy="20" r="1.5" fill="currentColor" />
              <circle cx="18" cy="20" r="1.5" fill="currentColor" />
            </svg>
            <span>{t("cart", lang)}</span>
            {count > 0 && (
              <span className="absolute -right-2 -top-4 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-white">
                {count}
              </span>
            )}
          </Link>
          <LanguageToggle />
        </div>

        {/* Mobile toggles */}
        <div className="md:hidden flex items-center gap-2">
          <Search />
          <Link href="/cart" className="relative inline-flex h-9 w-9 items-center justify-center rounded hover:bg-muted" aria-label={t("cart", lang)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M6 6h15l-1.5 9h-12L6 6z" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="9" cy="20" r="1.5" fill="currentColor" />
              <circle cx="18" cy="20" r="1.5" fill="currentColor" />
            </svg>
            {count > 0 && (
              <span className="absolute -right-1 -top-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[9px] font-bold text-white">
                {count}
              </span>
            )}
          </Link>
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded hover:bg-muted"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            type="button"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-foreground/10 bg-background">
          <Container className="py-3">
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-foreground/80 hover:text-foreground">{t("home", lang)}</Link>

              <details>
                <summary className="cursor-pointer py-2 text-sm text-foreground/90">{t("products", lang)}</summary>
                <div className="pl-2">
                  {headerCategories.map((c) => {
                    const icon = categoryIconById[c.id] ?? "/images/product-categories/categories-icons/accessories.png";
                    const theme = categoryThemeById[c.id] ?? { bg: "bg-slate-50", ring: "ring-slate-200", text: "text-slate-700" };
                    return (
                      <Link
                        key={c.id}
                        href={`/categories/${c.id}`}
                        className="flex items-center gap-2 py-2 text-sm text-foreground/80"
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className={`h-6 w-6 rounded ring-1 ${theme.ring} ${theme.bg} grid place-items-center`}>
                          <span className="relative h-4 w-4">
                            <Image src={icon} alt={`${pick(c.title, lang)} icon`} fill sizes="16px" className="object-contain" />
                          </span>
                        </span>
                        <span className="font-medium">{pick(c.title, lang)}</span>
                      </Link>
                    );
                  })}
                </div>
              </details>
              <Link href="/cart" className="py-2 text-sm text-foreground/90" onClick={() => setMobileOpen(false)}>
                {t("quotationSummery", lang)}
              </Link>
              <Link href="/about" className="py-2 text-sm text-foreground/90" onClick={() => setMobileOpen(false)}>
                {t("about", lang)}
              </Link>
              <Link href="/contact" className="py-2 text-sm text-foreground/90" onClick={() => setMobileOpen(false)}>
                {t("contact", lang)}
              </Link>
              <Link href="/cart" className="py-2 text-sm text-foreground/90" onClick={() => setMobileOpen(false)}>
                {t("cart", lang)} {count > 0 ? `(${count})` : ""}
              </Link>
              <div className="pt-2"><LanguageToggle /></div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
