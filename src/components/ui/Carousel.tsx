"use client";

import { useRef } from "react";
import clsx from "clsx";

interface CarouselProps {
  className?: string;
  children: React.ReactNode;
  itemWidth?: number; // px to scroll per click; defaults to container width
}

export default function Carousel({ className, children, itemWidth }: CarouselProps) {
  const ref = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: -1 | 1) => {
    const el = ref.current;
    if (!el) return;
    const amount = itemWidth ?? el.clientWidth * 0.9;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className={clsx("relative", className)}>
      <button
        aria-label="Previous"
className="absolute left-1 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/90 shadow ring-1 ring-foreground/10 p-2 hover:bg-muted disabled:opacity-40"
        onClick={() => scrollBy(-1)}
        type="button"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div
        ref={ref}
        className="scroll-smooth overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none]"
      >
        <div className="grid auto-cols-[80%] sm:auto-cols-[50%] lg:auto-cols-[17%] grid-flow-col gap-4">
          {children}
        </div>
      </div>

      <button
        aria-label="Next"
className="absolute right-1 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/90 shadow ring-1 ring-foreground/10 p-2 hover:bg-muted disabled:opacity-40"
        onClick={() => scrollBy(1)}
        type="button"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
