import Link from "next/link";
import { cn } from "@/lib/utils";
import { LogoIcon } from "@/components/brand/LogoIcon";
import { siteConfig } from "@/data/site";

type LogoProps = {
  variant?: "default" | "light" | "dark";
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  href?: string;
  className?: string;
  compact?: boolean;
};

const sizeMap = {
  sm: { icon: 30, text: "text-[13px] sm:text-[15px]", tag: "text-[9px]", gap: "gap-1.5 sm:gap-2" },
  md: { icon: 34, text: "text-[15px] sm:text-lg", tag: "text-[10px]", gap: "gap-2 sm:gap-2.5" },
  lg: { icon: 42, text: "text-lg sm:text-xl", tag: "text-[11px]", gap: "gap-2.5 sm:gap-3" },
};

export function Logo({
  variant = "default",
  size = "md",
  showTagline = false,
  href = "/",
  className,
  compact = false,
}: LogoProps) {
  const s = sizeMap[size];

  const baseClass =
    variant === "light"
      ? "text-white"
      : variant === "dark"
        ? "text-slate-900 dark:text-white"
        : "text-slate-900 dark:text-white";

  const accentClass =
    variant === "light"
      ? "text-emerald-400"
      : "text-emerald-600 dark:text-emerald-400";

  const tagClass =
    variant === "light" ? "text-slate-400" : "text-slate-500 dark:text-slate-400";

  const dividerClass =
    variant === "light" ? "bg-white/20" : "bg-slate-200 dark:bg-slate-700";

  const content = (
    <div className={cn("flex min-w-0 items-center", s.gap, className)}>
      <LogoIcon size={s.icon} />

      {!compact && (
        <>
          <span
            className={cn("hidden h-7 w-px sm:block", dividerClass)}
            aria-hidden
          />

          <div className="flex min-w-0 flex-col justify-center leading-none">
            <span
              className={cn(
                "truncate font-bold tracking-[-0.03em]",
                s.text,
                baseClass,
              )}
            >
              Pro<span className={accentClass}>Claim</span>Care
            </span>
            {showTagline && (
              <span
                className={cn(
                  "mt-1.5 font-semibold uppercase tracking-[0.14em] sm:tracking-[0.18em]",
                  s.tag,
                  tagClass,
                )}
              >
                Revenue Cycle Management
              </span>
            )}
          </div>
        </>
      )}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex max-w-[min(100%,11rem)] shrink-0 transition-opacity hover:opacity-90 sm:max-w-none"
        aria-label={`${siteConfig.name} — Home`}
      >
        {content}
      </Link>
    );
  }

  return content;
}
