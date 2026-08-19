"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { specialtyImageFallback } from "@/data/images";

type SpecialtyCardProps = {
  href: string;
  title: string;
  image: string;
  variant?: "compact" | "full";
  description?: string;
};

export function SpecialtyCard({
  href,
  title,
  image,
  variant = "compact",
  description,
}: SpecialtyCardProps) {
  const [src, setSrc] = useState(image);

  useEffect(() => {
    setSrc(image);
  }, [image]);

  if (variant === "full") {
    return (
      <Link
        href={href}
        className="card-glow surface-card group block overflow-hidden"
      >
        <div className="relative h-44 overflow-hidden">
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
            onError={() => setSrc(specialtyImageFallback)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4">
            <h2 className="text-lg font-bold text-white drop-shadow-sm">
              {title}
            </h2>
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm transition-colors group-hover:bg-accent-500/40">
              Click now
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
        {description && (
          <div className="p-5">
            <p className="text-body text-sm">{description}</p>
          </div>
        )}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="card-glow group block overflow-hidden rounded-2xl border border-slate-100 bg-white dark:border-slate-800 dark:bg-slate-900/60"
    >
      <div className="relative h-32 overflow-hidden sm:h-36">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 50vw, 20vw"
          onError={() => setSrc(specialtyImageFallback)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-3">
          <span className="line-clamp-2 text-sm font-semibold leading-snug text-white drop-shadow-sm">
            {title}
          </span>
          <span className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-accent-300 transition-colors group-hover:text-accent-200">
            Click now
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
