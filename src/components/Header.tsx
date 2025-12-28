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
  const { count, openDrawer } = useCart();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-foreground/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <Container className="flex min-h-16 items-center justify-between gap-4 py-3">
        {/* Logo Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-4 min-w-0">
          <Link href="/" className="flex-shrink-0">
            <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-[0_0_20px_rgba(128,90,213,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(128,90,213,0.8)]">
              MOQ
            </div>
          </Link>

          <div className="flex flex-col text-left leading-tight min-w-0">
            <Link
              href="/"
              className="text-[11px] sm:text-sm md:text-base font-semibold text-foreground/70 hover:text-indigo-600 transition-colors duration-300 break-words line-clamp-1"
            >
              THE MEANING OF QUALITY TRADING ESTABLISHMENT
            </Link>
            <span className="text-[10px] sm:text-xs md:text-sm font-medium text-center text-foreground/60 hover:text-indigo-600 transition-colors duration-300 rtl:text-right">
              مؤسسة معنى الجودة للتجارة
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <Link 
            href="/" 
            className="px-3 xl:px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-foreground/5 rounded-lg transition-all duration-200 font-medium"
          >
            {t("home", lang)}
          </Link>

          <div 
            className="relative"
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex items-center gap-1 px-3 xl:px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-foreground/5 rounded-lg transition-all duration-200 font-medium"
            >
              {t("categories", lang)}
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none"
                className={`transition-transform duration-200 ${menuOpen ? 'rotate-180' : ''}`}
              >
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            
            {menuOpen && (
              <div
                className="absolute left-0 top-full mt-0 z-20 w-64 xl:w-72 rounded-xl border border-foreground/10 bg-background p-2 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200"
                onMouseEnter={() => setMenuOpen(true)}
              >
                {headerCategories.map((c) => {
                  const icon = categoryIconById[c.id] ?? "/images/product-categories/categories-icons/accessories.png";
                  const theme = categoryThemeById[c.id] ?? { bg: "bg-slate-50", ring: "ring-slate-200", text: "text-slate-700" };
                  return (
                    <Link
                      key={c.id}
                      href={`/categories/${c.id}`}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground/80 hover:bg-muted hover:text-foreground transition-all duration-200 group"
                    >
                      <span className={`h-8 w-8 rounded-lg ring-1 ${theme.ring} ${theme.bg} grid place-items-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110`}>
                        <span className="relative h-5 w-5">
                          <Image src={icon} alt={`${pick(c.title, lang)} icon`} fill sizes="20px" className="object-contain" />
                        </span>
                      </span>
                      <span className="font-medium">{pick(c.title, lang)}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link 
            href="/cart" 
            className="px-3 xl:px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-foreground/5 rounded-lg transition-all duration-200 font-medium"
          >
            {t("quotationSummery", lang)}
          </Link>
          <Link 
            href="/customer-care/about" 
            className="px-3 xl:px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-foreground/5 rounded-lg transition-all duration-200 font-medium"
          >
            {t("about", lang)}
          </Link>
          <Link 
            href="/customer-care" 
            className="px-3 xl:px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-foreground/5 rounded-lg transition-all duration-200 font-medium"
          >
            {t("contact", lang)}
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-3">
          <Search />
          <button 
            onClick={openDrawer} 
            className="relative inline-flex items-center gap-2 px-3 xl:px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-foreground/5 rounded-lg transition-all duration-200 font-medium" 
            aria-label={t("cart", lang)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6h15l-1.5 9h-12L6 6z" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="9" cy="20" r="1.5" fill="currentColor" />
              <circle cx="18" cy="20" r="1.5" fill="currentColor" />
            </svg>
            <span className="hidden xl:inline">{t("cart", lang)}</span>
            {count > 0 && (
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[22px] items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 px-1.5 text-[10px] font-bold text-white shadow-lg">
                {count}
              </span>
            )}
          </button>
          <LanguageToggle />
        </div>

        {/* Mobile/Tablet Actions */}
        <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
          <Search />
          <Link 
            href="/cart" 
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg hover:bg-muted transition-colors duration-200" 
            aria-label={t("cart", lang)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6h15l-1.5 9h-12L6 6z" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="9" cy="20" r="1.5" fill="currentColor" />
              <circle cx="18" cy="20" r="1.5" fill="currentColor" />
            </svg>
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 inline-flex h-4 min-w-[16px] items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 px-1 text-[9px] font-bold text-white shadow-md">
                {count}
              </span>
            )}
          </Link>
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg hover:bg-muted transition-colors duration-200"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={t("toggleMenu", lang)}
            type="button"
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-foreground/10 bg-background shadow-lg">
          <Container className="py-3">
            <div className="flex flex-col gap-1">
              <Link 
                href="/" 
                className="px-3 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-muted rounded-lg transition-colors duration-200 font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {t("home", lang)}
              </Link>

              <details className="group">
                <summary className="cursor-pointer px-3 py-2.5 text-sm text-foreground/90 hover:bg-muted rounded-lg transition-colors duration-200 font-medium list-none flex items-center justify-between">
                  <span>{t("products", lang)}</span>
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none"
                    className="transition-transform duration-200 group-open:rotate-180"
                  >
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <div className="mt-1 ml-2 space-y-1">
                  {headerCategories.map((c) => {
                    const icon = categoryIconById[c.id] ?? "/images/product-categories/categories-icons/accessories.png";
                    const theme = categoryThemeById[c.id] ?? { bg: "bg-slate-50", ring: "ring-slate-200", text: "text-slate-700" };
                    return (
                      <Link
                        key={c.id}
                        href={`/categories/${c.id}`}
                        className="flex items-center gap-2.5 px-3 py-2.5 text-sm text-foreground/80 hover:bg-muted hover:text-foreground rounded-lg transition-colors duration-200"
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className={`h-7 w-7 rounded-lg ring-1 ${theme.ring} ${theme.bg} grid place-items-center flex-shrink-0`}>
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

              <Link 
                href="/cart" 
                className="px-3 py-2.5 text-sm text-foreground/90 hover:text-foreground hover:bg-muted rounded-lg transition-colors duration-200 font-medium flex items-center justify-between" 
                onClick={() => setMobileOpen(false)}
              >
                <span>{t("quotationSummery", lang)}</span>
                {count > 0 && (
                  <span className="inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 px-1.5 text-[10px] font-bold text-white shadow-md">
                    {count}
                  </span>
                )}
              </Link>

              <Link 
                href="/customer-care/about" 
                className="px-3 py-2.5 text-sm text-foreground/90 hover:text-foreground hover:bg-muted rounded-lg transition-colors duration-200 font-medium" 
                onClick={() => setMobileOpen(false)}
              >
                {t("about", lang)}
              </Link>

              <Link 
                href="/customer-care" 
                className="px-3 py-2.5 text-sm text-foreground/90 hover:text-foreground hover:bg-muted rounded-lg transition-colors duration-200 font-medium" 
                onClick={() => setMobileOpen(false)}
              >
                {t("contact", lang)}
              </Link>

              <Link 
                href="/cart" 
                className="px-3 py-2.5 text-sm text-foreground/90 hover:text-foreground hover:bg-muted rounded-lg transition-colors duration-200 font-medium flex items-center justify-between" 
                onClick={() => setMobileOpen(false)}
              >
                <span>{t("cart", lang)}</span>
                {count > 0 && (
                  <span className="text-foreground/60">({count})</span>
                )}
              </Link>

              <div className="pt-2 mt-2 border-t border-foreground/10">
                <LanguageToggle />
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}