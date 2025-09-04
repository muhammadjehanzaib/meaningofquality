'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';

type Slide = { src: string; alt: string };

interface SimpleImageSliderProps {
  images: Slide[];
  intervalMs?: number; // default 6000ms
  className?: string;
  showArrows?: boolean;
  showDots?: boolean;
  showProgress?: boolean;
}

export default function SimpleImageSlider({
  images,
  intervalMs = 6000,
  className,
  showArrows = true,
  showDots = true,
  showProgress = true,
}: SimpleImageSliderProps) {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goTo = useCallback((i: number) => {
    setIndex(i % images.length);
  }, [images.length]);

  // Auto-advance using timeout so it resets on manual navigation
  useEffect(() => {
    if (!images.length || images.length <= 1) return;
    const id = setTimeout(() => {
      next();
    }, intervalMs);
    return () => clearTimeout(id);
  }, [images.length, intervalMs, index, next]);

  if (!images?.length) return null;

  const multiple = images.length > 1;

  return (
    <div className={`relative h-56 sm:h-72 lg:h-120 rounded-lg overflow-hidden ${className ?? ''}`}>
      {/* Slides */}
      {images.map((img, i) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="100vw"
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Arrows */}
      {showArrows && multiple && (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/70 hover:bg-white/90 text-gray-900 p-2 shadow"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/70 hover:bg-white/90 text-gray-900 p-2 shadow"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </>
      )}

      {/* Dots */}
      {showDots && multiple && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`w-3 h-3 rounded-full transition-all ${i === index ? 'bg-white scale-125' : 'bg-white/60 hover:bg-white/80'}`}
            />
          ))}
        </div>
      )}

      {/* Progress bar */}
      {showProgress && multiple && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30">
          <div
            key={index}
            className="h-full bg-white"
            style={{ animation: `simpleSliderProgress ${intervalMs}ms linear forwards` }}
          />
          <style jsx>{`
            @keyframes simpleSliderProgress {
              from { width: 0%; }
              to { width: 100%; }
            }
          `}</style>
        </div>
      )}
    </div>
  );
}
