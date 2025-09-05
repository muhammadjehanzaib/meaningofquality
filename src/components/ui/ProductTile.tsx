"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/hooks/useLang";
import { LText, pickAny } from "@/data/i18n";
import { t } from "@/data/labels";
import { useCart } from "@/contexts/CartContext";

interface ProductTileProps {
  title: LText;
  imgSrc: string | undefined;
  href?: string;
  isNew?: boolean;
  className?: string;
  productId?: string;
  showCtas?: boolean;
}

export default function ProductTile({ title, imgSrc, href, isNew = false, className = "", productId, showCtas = false }: ProductTileProps) {
  const lang = useLang();
  const { add } = useCart();
  const name = pickAny(title, lang);

  const onAdd = () => {
    if (!productId) return;
    add({ id: productId, name, img: imgSrc, qty: 1 });
  };

  return (
<div className={`group relative rounded-xl border border-foreground/10 bg-background shadow-sm hover:shadow-md transition-all p-4 hover:-translate-y-0.5 h-full flex flex-col ${className}`}>
      <div className="relative h-56 sm:h-64 lg:h-72 w-full grid place-items-center bg-muted rounded-lg overflow-hidden">
        {isNew && (
          <span className="absolute left-2 top-2 z-20 inline-flex items-center rounded-full bg-red-600/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-md ring-1 ring-foreground/20 pointer-events-none">
            {t("newProductBadge", lang)}
          </span>
        )}
        {href ? (
          <Link href={href} className="absolute inset-0" aria-label={name} />
        ) : null}
        {imgSrc ? (
          <Image src={imgSrc} alt={name} fill sizes="(max-width:640px) 80vw, (max-width:1024px) 50vw, 33vw" className="object-contain object-center transition-transform duration-200 group-hover:scale-105 z-10" />
        ) : (
          <div className="text-xs text-muted-foreground">Image</div>
        )}
      </div>

      <div className="mt-3 text-center text-sm font-medium leading-snug line-clamp-2 group-hover:text-primary min-h-[2.75rem]">
        {href ? <Link href={href} className="hover:underline">{name}</Link> : name}
      </div>

      {showCtas && (
        <div className="mt-3 grid grid-cols-2 gap-2">
          {href ? (
            <Link href={href} className="inline-flex items-center justify-center rounded-lg border px-3 py-2 text-xs sm:text-sm hover:bg-muted">
              {t("viewDetails", lang)}
            </Link>
          ) : (
            <span className="inline-flex items-center justify-center rounded-lg border px-3 py-2 text-xs sm:text-sm text-muted-foreground">{t("viewDetails", lang)}</span>
          )}
          <button
            type="button"
            onClick={onAdd}
            disabled={!productId}
            className="inline-flex items-center justify-center rounded-lg bg-primary px-3 py-2 text-xs sm:text-sm text-white hover:brightness-110 disabled:opacity-50"
          >
            {t("addToCart", lang)}
          </button>
        </div>
      )}
    </div>
  );
}
