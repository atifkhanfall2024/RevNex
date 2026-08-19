"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

type LogoIconProps = {
  size?: number;
  className?: string;
};

/**
 * RevNex mark — revenue cycle arc + bold R monogram.
 * Professional healthcare / RCM identity, readable from 16px up.
 */
export function LogoIcon({ size = 40, className }: LogoIconProps) {
  const gradId = useId().replace(/:/g, "");
  const shineId = `${gradId}-shine`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0 drop-shadow-sm", className)}
      aria-hidden
    >
      <defs>
        <linearGradient id={gradId} x1="6" y1="4" x2="42" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1e3a8a" />
          <stop offset="0.55" stopColor="#2563eb" />
          <stop offset="1" stopColor="#0d9488" />
        </linearGradient>
        <linearGradient id={shineId} x1="24" y1="4" x2="24" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" stopOpacity="0.22" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Container */}
      <rect x="2" y="2" width="44" height="44" rx="11" fill={`url(#${gradId})`} />
      <rect x="2" y="2" width="44" height="22" rx="11" fill={`url(#${shineId})`} />
      <rect
        x="3"
        y="3"
        width="42"
        height="42"
        rx="10"
        stroke="white"
        strokeOpacity="0.12"
        fill="none"
      />

      {/* Revenue cycle arc + growth arrow */}
      <path
        d="M33.5 28.5c0-7.5-6-13.5-13.5-13.5S6.5 21 6.5 28.5"
        stroke="#6ee7b7"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M6.5 28.5l3.8-3.8M6.5 28.5l3.8 3.2"
        stroke="#6ee7b7"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Bold geometric R */}
      <path
        fill="white"
        d="M14.5 13.5h10.8c3.86 0 7 3.14 7 7s-3.14 7-7 7h-5.3v9.5h-5.5V13.5zm5.5 9.2h5.3c1.77 0 3.2-1.43 3.2-3.2s-1.43-3.2-3.2-3.2h-5.3v6.4z"
      />
    </svg>
  );
}
