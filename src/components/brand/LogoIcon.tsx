"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

type LogoIconProps = {
  size?: number;
  className?: string;
};

/**
 * ProClaimCare mark — claim document, approval check, and bold P (Pro + Claim + Care).
 */
export function LogoIcon({ size = 40, className }: LogoIconProps) {
  const gradId = useId().replace(/:/g, "");
  const shineId = `${gradId}-shine";

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
        <linearGradient id={gradId} x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0f3460" />
          <stop offset="0.5" stopColor="#2563eb" />
          <stop offset="1" stopColor="#0d9488" />
        </linearGradient>
        <linearGradient id={shineId} x1="24" y1="4" x2="24" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" stopOpacity="0.24" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect x="2" y="2" width="44" height="44" rx="12" fill={`url(#${gradId})`} />
      <rect x="2" y="2" width="44" height="22" rx="12" fill={`url(#${shineId})`} />
      <rect
        x="3"
        y="3"
        width="42"
        height="42"
        rx="11"
        stroke="white"
        strokeOpacity="0.14"
        fill="none"
      />

      {/* Bold P — Pro */}
      <path
        fill="white"
        d="M11.5 11.5h8.8c4.1 0 7.4 3.3 7.4 7.4s-3.3 7.4-7.4 7.4h-4.3v11.2h-4.5V11.5zm4.5 10.6h4.3c1.9 0 3.4-1.5 3.4-3.4s-1.5-3.4-3.4-3.4h-4.3v6.8z"
      />

      {/* Claim form document */}
      <path
        d="M22.5 13.5h13c1.2 0 2.2 1 2.2 2.2v19.6c0 1.2-1 2.2-2.2 2.2h-13c-1.2 0-2.2-1-2.2-2.2V15.7c0-1.2 1-2.2 2.2-2.2z"
        fill="white"
        fillOpacity="0.92"
      />
      <path
        d="M26.5 11.5h5.5c0.6 0 1 0.4 1 1v3.5h-6.5V12.5c0-0.55 0.45-1 1-1z"
        fill="#6ee7b7"
      />
      <path
        d="M21.8 19h14M21.8 22.8h14M21.8 26.6h9.5"
        stroke="#64748b"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeOpacity="0.55"
      />

      {/* Approved claim — Care / success */}
      <circle cx="33.5" cy="31" r="6.25" fill="#10b981" />
      <path
        d="M30.8 31.1l1.7 1.7 3.6-4"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Revenue pulse — RCM flow */}
      <path
        d="M10 38.5c4-3 8-3 12 0s8 3 12 0"
        stroke="#6ee7b7"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />
    </svg>
  );
}
