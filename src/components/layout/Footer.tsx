import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig, navLinks } from "@/data/site";
import { services } from "@/data/services";
import { states } from "@/data/states";
import { Logo } from "@/components/brand/Logo";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/50 bg-brand-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo href="/" size="md" variant="light" showTagline className="mb-4" />
            <p className="text-sm leading-relaxed text-slate-500">
              {siteConfig.tagline}. Trusted RCM partner for physician practices
              across the United States.
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
                <Link href="/free-assessment" className="text-sm transition-colors hover:text-white">
                  Free 2-week RCM assessment
                </Link>
              </li>
              <li>
                <Link href="/book-consultation" className="text-sm transition-colors hover:text-white">
                  Book a Consultation
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
