import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { siteConfig, navLinks } from "@/data/site";
import { services } from "@/data/services";
import { states } from "@/data/states";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="relative border-t border-slate-800/60 bg-brand-950 text-slate-400">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="surface-card flex flex-col items-start justify-between gap-6 border-slate-800/80 bg-slate-900/40 p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="text-lg font-bold text-white">Ready to improve your RCM?</p>
            <p className="mt-1 max-w-md text-sm text-slate-400">
              Start with a free 2-week assessment or book a consultation with our team.
            </p>
          </div>
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
            <Button href="/free-assessment" variant="outline" className="border-slate-600 bg-transparent text-white hover:border-accent-400 hover:text-accent-300">
              Free assessment
            </Button>
            <Button href="/book-consultation" variant="secondary">
              Book consultation
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo href="/" size="md" variant="light" showTagline className="mb-4" />
            <p className="text-sm leading-relaxed text-slate-500">
              {siteConfig.tagline}. Trusted RCM partner for physician practices across the
              United States.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-300">
              Pages
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.pageTitle ?? link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/about" className="text-sm transition-colors hover:text-white">
                  About us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-300">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-300">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-accent-400" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-accent-400" />
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                <span>{states.map((s) => s.code).join(" · ")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-sm text-slate-600">
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </p>
          <div className="flex gap-6 text-sm text-slate-600">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
