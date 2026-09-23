"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig, navLinks } from "@/data/site";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Logo } from "@/components/brand/Logo";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const transparentHome = isHome && !scrolled;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 overflow-x-hidden transition-all duration-500",
        transparentHome
          ? "border-b border-white/10 bg-transparent"
          : scrolled
            ? "glass-nav border-b border-slate-200/60 shadow-sm shadow-slate-900/5 dark:border-slate-800/60"
            : "border-b border-slate-200/40 bg-white/80 backdrop-blur-lg dark:border-slate-800/40 dark:bg-slate-950/80",
      )}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-2 px-3 sm:h-16 sm:gap-4 sm:px-6 lg:px-8">
        <Logo size="sm" variant={transparentHome ? "light" : "dark"} className="sm:hidden" />
        <Logo size="md" variant={transparentHome ? "light" : "dark"} className="hidden sm:flex" />

        {/* Desktop nav — pill links, single row */}
        <nav className="hidden items-center justify-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "whitespace-nowrap rounded-full px-3.5 py-2 text-[13px] font-medium transition-all duration-200 xl:px-4 xl:text-sm",
                  active
                    ? transparentHome
                      ? "bg-white/15 text-white shadow-sm backdrop-blur-sm"
                      : "bg-brand-600 text-white shadow-sm shadow-brand-600/25 dark:bg-brand-500"
                    : transparentHome
                      ? "text-slate-200 hover:bg-white/10 hover:text-white"
                      : "text-slate-600 hover:bg-slate-100 hover:text-brand-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle
            variant={transparentHome ? "overlay" : "default"}
            className="hidden sm:flex"
          />

          <a
            href={siteConfig.phoneHref}
            className={cn(
              "hidden items-center gap-1.5 whitespace-nowrap text-[13px] font-medium transition-colors sm:flex",
              transparentHome
                ? "text-slate-200 hover:text-white"
                : "text-slate-600 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400",
            )}
            aria-label="Call us"
          >
            <Phone className="h-3.5 w-3.5 shrink-0" />
            <span className="hidden md:inline">{siteConfig.phone}</span>
          </a>

          <Link
            href="/free-assessment"
            className={cn(
              "hidden whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-semibold shadow-sm transition-all md:inline-flex",
              transparentHome
                ? "border border-white/25 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                : "border border-slate-200 bg-white text-slate-700 hover:border-accent-300 hover:text-accent-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-accent-600 dark:hover:text-accent-400",
            )}
          >
            Free Assessment
          </Link>

          <Link
            href="/book-consultation"
            className="hidden whitespace-nowrap rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-4 py-2 text-[13px] font-semibold text-white shadow-md shadow-brand-600/30 transition-all hover:shadow-lg hover:shadow-brand-600/35 md:inline-flex"
          >
            Book Consultation
          </Link>

          <ThemeToggle
            variant={transparentHome ? "overlay" : "default"}
            className="sm:hidden"
          />

          <button
            type="button"
            className={cn(
              "rounded-xl p-2 transition-colors lg:hidden",
              transparentHome
                ? "text-white hover:bg-white/10"
                : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800",
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t transition-all duration-300 lg:hidden",
          mobileOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0 border-t-0",
          "border-slate-100 bg-white dark:border-slate-800 dark:bg-slate-950",
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                  active
                    ? "bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300"
                    : "text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-900",
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="mt-3 flex flex-col gap-2 border-t border-slate-100 pt-3 dark:border-slate-800">
            <Link
              href="/free-assessment"
              className="rounded-full border border-slate-200 py-2.5 text-center text-sm font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-200"
            >
              Free Assessment
            </Link>
            <Link
              href="/book-consultation"
              className="rounded-full bg-brand-600 py-2.5 text-center text-sm font-semibold text-white"
            >
              Book Consultation
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
