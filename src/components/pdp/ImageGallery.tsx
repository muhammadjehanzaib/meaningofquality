"use client";

import Image from "next/image";
import { useState } from "react";
import { useLang } from "@/hooks/useLang";
import { t } from "@/data/labels";

export default function ImageGallery({
  images,
  isNew,
  tdsUrl,
}: {
  images: string[];
  isNew?: boolean;
  tdsUrl?: string;
}) {
  const [index, setIndex] = useState(0);
  const lang = useLang();
  const shown = images && images.length > 0 ? images : ["/images/file.svg"]; // fallback

  return (
    <div className="relative">
      {/* Badges */}
      {isNew && (
        <span className="absolute left-3 top-3 z-10 inline-flex items-center rounded bg-red-600 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow">
          {t("newProductBadge", lang)}
        </span>
      )}
      {tdsUrl && tdsUrl !== "#" && (
        <a
          href={tdsUrl}
          className="absolute right-3 top-3 z-10 grid h-8 w-8 place-items-center rounded-full bg-cyan-600 text-[11px] font-bold text-white shadow"
          title={t("downloadTDS", lang)}
        >
          TDS
        </a>
      )}

      {/* Main image */}
      <div className="relative w-[600px] overflow-hidden rounded-xl bg-white h-[700px] sm:h-[460px] md:h-[560px] lg:h-[70vh]">
        <Image src={shown[index]} alt="product" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-contain" />
      </div>

      {/* Thumbnails */}
      {shown.length > 1 && (
        <div className="mt-3 flex gap-2">
          {shown.map((src, i) => (
            <button
              key={src + i}
              type="button"
              onClick={() => setIndex(i)}
              className={`relative h-16 w-16 overflow-hidden rounded border ${i === index ? 'ring-2 ring-primary' : 'border-black/10'}`}
              aria-label={`Image ${i + 1}`}
            >
              <Image src={src} alt="thumb" fill sizes="64px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

