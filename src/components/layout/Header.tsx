"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { siteConfig, navLinks } from "@/data/site";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Logo } from "@/components/brand/Logo";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const transparentHome = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 overflow-x-hidden transition-all duration-300",
          transparentHome
            ? "border-b border-white/10 bg-transparent"
            : scrolled || mobileOpen
              ? "glass-nav border-b border-slate-200/70 shadow-sm shadow-slate-900/5 dark:border-slate-800/70"
              : "border-b border-slate-200/40 bg-white/85 backdrop-blur-xl dark:border-slate-800/40 dark:bg-slate-950/85",
        )}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-2 px-3 sm:h-16 sm:gap-3 sm:px-6 lg:px-8">
          <Logo
            size="sm"
            variant={transparentHome ? "light" : "dark"}
            className="min-w-0 sm:hidden"
            compact
          />
          <Logo
            size="md"
            variant={transparentHome ? "light" : "dark"}
            className="hidden min-w-0 sm:flex"
          />

          <nav
            className="hidden items-center justify-center gap-0.5 lg:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-medium transition-all duration-200 xl:px-3.5 xl:text-sm",
                    active
                      ? transparentHome
                        ? "bg-white/15 text-white shadow-sm backdrop-blur-sm"
                        : "bg-brand-600 text-white shadow-sm shadow-brand-600/20 dark:bg-brand-500"
                      : transparentHome
                        ? "text-slate-200 hover:bg-white/10 hover:text-white"
                        : "text-slate-600 hover:bg-slate-100/90 hover:text-brand-700 dark:text-slate-400 dark:hover:bg-slate-800/80 dark:hover:text-white",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <ThemeToggle
              variant={transparentHome ? "overlay" : "default"}
              className="hidden sm:flex"
            />

            <a
              href={siteConfig.phoneHref}
              className={cn(
                "hidden items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] font-medium transition-colors xl:flex",
                transparentHome
                  ? "text-slate-200 hover:bg-white/10 hover:text-white"
                  : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-brand-400",
              )}
              aria-label={`Call ${siteConfig.phone}`}
            >
              <Phone className="h-3.5 w-3.5 shrink-0" />
              <span className="hidden 2xl:inline">{siteConfig.phone}</span>
            </a>

            <Link
              href="/free-assessment"
              className={cn(
                "hidden whitespace-nowrap rounded-full px-3.5 py-2 text-[13px] font-semibold transition-all md:inline-flex",
                transparentHome
                  ? "border border-white/25 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-accent-300 hover:text-accent-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200",
              )}
            >
              Free Assessment
            </Link>

            <Link
              href="/book-consultation"
              className="hidden min-h-10 items-center whitespace-nowrap rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-4 py-2 text-[13px] font-semibold text-white shadow-md shadow-brand-600/25 transition-all hover:shadow-lg md:inline-flex"
            >
              Book Consultation
            </Link>

            <Link
              href="/book-consultation"
              className={cn(
                "inline-flex min-h-10 min-w-10 items-center justify-center rounded-xl md:hidden",
                transparentHome
                  ? "bg-white/15 text-white backdrop-blur-sm"
                  : "bg-brand-600 text-white shadow-sm",
              )}
              aria-label="Book a consultation"
            >
              <Calendar className="h-4 w-4" />
            </Link>

            <ThemeToggle
              variant={transparentHome ? "overlay" : "default"}
              className="sm:hidden"
            />

            <button
              type="button"
              className={cn(
                "inline-flex min-h-10 min-w-10 items-center justify-center rounded-xl transition-colors lg:hidden",
                transparentHome
                  ? "text-white hover:bg-white/10"
                  : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800",
              )}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden
        onClick={() => setMobileOpen(false)}
      />

      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-x-0 top-14 z-[49] max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-b border-slate-200 bg-white shadow-xl transition-all duration-300 dark:border-slate-800 dark:bg-slate-950 sm:top-16 lg:hidden",
          mobileOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <nav className="mx-auto max-w-lg px-4 py-5" aria-label="Mobile">
          <a
            href={siteConfig.phoneHref}
            className="mb-4 flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3.5 dark:border-slate-800 dark:bg-slate-900/80"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white">
              <Phone className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-xs font-medium text-slate-500 dark:text-slate-400">
                Call us
              </span>
              <span className="text-sm font-semibold text-slate-900 dark:text-white">
                {siteConfig.phone}
              </span>
            </span>
          </a>

          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-xl px-4 py-3.5 text-base font-medium transition-colors",
                    active
                      ? "bg-brand-50 text-brand-700 dark:bg-brand-950/80 dark:text-brand-300"
                      : "text-slate-800 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-900",
                  )}
                >
                  {link.pageTitle ?? link.label}
                </Link>
              );
            })}
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2 border-t border-slate-100 pt-5 dark:border-slate-800">
            <Link
              href="/free-assessment"
              className="rounded-xl border border-slate-200 py-3 text-center text-sm font-semibold text-slate-800 dark:border-slate-700 dark:text-slate-200"
            >
              Free Assessment
            </Link>
            <Link
              href="/book-consultation"
              className="rounded-xl bg-brand-600 py-3 text-center text-sm font-semibold text-white"
            >
              Book Consultation
            </Link>
          </div>
        </nav>
      </div>

      <MobileStickyCta hidden={mobileOpen} />
    </>
  );
}
