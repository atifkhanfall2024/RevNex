import Link from "next/link";
import { cn } from "@/lib/utils";
import { LogoIcon } from "@/components/brand/LogoIcon";

type LogoProps = {
  variant?: "default" | "light" | "dark";
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  href?: string;
  className?: string;
};

const sizeMap = {
  sm: { icon: 32, text: "text-[15px]", tag: "text-[9px]", gap: "gap-2" },
  md: { icon: 38, text: "text-lg", tag: "text-[10px]", gap: "gap-2.5" },
  lg: { icon: 46, text: "text-xl", tag: "text-[11px]", gap: "gap-3" },
};

export function Logo({
  variant = "default",
  size = "md",
  showTagline = false,
  href = "/",
  className,
}: LogoProps) {
  const s = sizeMap[size];

  const revClass =
    variant === "light"
      ? "text-white"
      : variant === "dark"
        ? "text-slate-900 dark:text-white"
        : "text-slate-900 dark:text-white";

  const nexClass =
    variant === "light"
      ? "text-emerald-400"
      : "text-emerald-600 dark:text-emerald-400";

  const tagClass =
    variant === "light" ? "text-slate-400" : "text-slate-500 dark:text-slate-400";

  const dividerClass =
    variant === "light" ? "bg-white/20" : "bg-slate-200 dark:bg-slate-700";

  const content = (
    <div className={cn("flex items-center whitespace-nowrap", s.gap, className)}>
      <LogoIcon size={s.icon} />

      <span
        className={cn("hidden h-7 w-px sm:block", dividerClass)}
        aria-hidden
      />

      <div className="flex flex-col justify-center leading-none">
        <span
          className={cn(
            "font-bold tracking-[-0.03em]",
            s.text,
            revClass,
          )}
        >
          Rev<span className={nexClass}>Nex</span>
          <span className={cn("ml-1.5 hidden font-semibold opacity-70 xl:inline", revClass, "text-[0.72em] tracking-normal")}>
            Solutions
          </span>
        </span>
        {showTagline && (
          <span
            className={cn(
              "mt-1.5 font-semibold uppercase tracking-[0.18em]",
              s.tag,
              tagClass,
            )}
          >
            Revenue Cycle Management
          </span>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex shrink-0 transition-opacity hover:opacity-90"
        aria-label="RevNex Solutions — Home"
      >
        {content}
      </Link>
    );
  }

  return content;
}
