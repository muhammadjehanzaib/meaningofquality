"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/hooks/useLang";
import { LText, pickAny } from "@/data/i18n";
import { t } from "@/data/labels";

interface ProductTileProps {
  title: LText;
  imgSrc: string | undefined;
  href?: string;
  isNew?: boolean;
  className?: string;
}

export default function ProductTile({ title, imgSrc, href, isNew = false, className = "" }: ProductTileProps) {
  const lang = useLang();
  const content = (
    <div className={`group relative rounded-xl border border-black/5 bg-white shadow-sm hover:shadow-md transition-all p-4 hover:-translate-y-0.5 cursor-pointer h-full flex flex-col ${className}`}>
      <div className="relative h-64 w-full grid place-items-center bg-white/60 rounded-lg overflow-hidden">
        {isNew && (
          <span className="absolute left-2 top-2 z-20 inline-flex items-center rounded-full bg-red-600/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-md ring-1 ring-white/50 pointer-events-none">
            {t("newProductBadge", lang)}
          </span>
        )}
        {imgSrc ? (
          <Image src={imgSrc} alt={pickAny(title, lang)} fill sizes="(max-width:640px) 80vw, (max-width:1024px) 50vw, 33vw" className="object-contain transition-transform duration-200 group-hover:scale-105 z-10" />
        ) : (
          <div className="text-xs text-muted-foreground">Image</div>
        )}
      </div>

      <div className="mt-3 text-center text-sm font-medium leading-snug line-clamp-2 group-hover:text-primary min-h-[2.75rem]">{pickAny(title, lang)}</div>
    </div>
  );

  return href ? <Link href={href} className="block h-full">{content}</Link> : content;
}
