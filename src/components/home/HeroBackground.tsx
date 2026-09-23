"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { heroSlides } from "@/data/images";
import { cn } from "@/lib/utils";

const SLIDE_MS = 7000;

/** Crossfading photo slider — no video, contained inside the hero */
export function HeroBackground() {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const goTo = useCallback((i: number) => {
    setIndex((i + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (reduceMotion || heroSlides.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {heroSlides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt=""
          fill
          priority={i === 0}
          sizes="100vw"
          className={cn(
            "object-cover transition-opacity duration-[1400ms] ease-in-out",
            i === index ? "opacity-100" : "opacity-0",
          )}
        />
      ))}

      <div className="absolute inset-0 bg-slate-950/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/[0.97] via-slate-950/85 to-slate-900/55" />

      <div className="absolute bottom-6 right-4 z-[1] flex items-center gap-2 sm:bottom-8 sm:right-8">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => goTo(i)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              i === index
                ? "w-7 bg-white/90"
                : "w-2 bg-white/35 hover:bg-white/55",
            )}
            aria-label={`Show slide: ${slide.caption}`}
          />
        ))}
      </div>
    </div>
  );
}
