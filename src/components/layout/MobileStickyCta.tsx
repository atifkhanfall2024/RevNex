"use client";

import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type MobileStickyCtaProps = {
  hidden?: boolean;
};

/** Primary actions on small screens — keeps conversion one tap away. */
export function MobileStickyCta({ hidden }: MobileStickyCtaProps) {
  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-slate-200/80 bg-white/95 p-3 shadow-[0_-8px_32px_rgba(15,23,42,0.08)] backdrop-blur-lg dark:border-slate-800 dark:bg-slate-950/95 lg:hidden",
        "pb-[max(0.75rem,env(safe-area-inset-bottom))]",
        hidden && "pointer-events-none translate-y-full opacity-0",
      )}
      aria-hidden={hidden}
    >
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href={siteConfig.phoneHref}
          className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-800 transition-colors active:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        >
          <Phone className="h-4 w-4 shrink-0 text-brand-600 dark:text-brand-400" />
          Call
        </a>
        <Link
          href="/book-consultation"
          className="flex min-h-11 flex-[1.35] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 text-sm font-semibold text-white shadow-md shadow-brand-600/25 active:brightness-95"
        >
          <Calendar className="h-4 w-4 shrink-0" />
          Book consultation
        </Link>
      </div>
    </div>
  );
}
