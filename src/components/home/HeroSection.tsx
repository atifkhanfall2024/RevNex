"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  ShieldCheck,
  ClipboardCheck,
  FileText,
  DollarSign,
  AlertCircle,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { HeroBackground } from "@/components/home/HeroBackground";
import { HeroDashboardPreview } from "@/components/charts/HeroDashboardPreview";
import { siteConfig } from "@/data/site";
import { images, serviceImages } from "@/data/images";
import { services } from "@/data/services";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { gsap, registerGsap } from "@/lib/gsap";

const highlights = [
  "You get a named billing lead, not a ticket queue",
  "We explain denials in plain language",
  "Monthly reports you can actually read",
  "Serving practices in 7 states (and adding more)",
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const section = sectionRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    if (!section || !left || !right) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-eyebrow", { opacity: 0, y: 12, duration: 0.5 })
        .from(".hero-title", { opacity: 0, y: 24, duration: 0.75 }, "-=0.25")
        .from(".hero-desc", { opacity: 0, y: 16, duration: 0.6 }, "-=0.4")
        .from(".hero-cta", { opacity: 0, y: 14, duration: 0.5, stagger: 0.1 }, "-=0.35")
        .from(".hero-highlight", { opacity: 0, y: 10, duration: 0.45, stagger: 0.06 }, "-=0.25")
        .from(right, { opacity: 0, y: 20, duration: 0.8 }, "-=0.6");
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate -mt-16 overflow-hidden bg-slate-950 pt-16"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto grid max-w-7xl min-w-0 grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
        <div ref={leftRef} className="min-w-0">
          <p className="hero-eyebrow mb-4 text-sm font-medium text-emerald-300/95">
            {siteConfig.tagline}
          </p>

          <h1 className="hero-title text-balance text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl lg:text-[2.65rem] lg:leading-[1.15]">
            We handle the claims paperwork so your team can stay with patients.
          </h1>

          <p className="hero-desc mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-[1.05rem]">
            {siteConfig.name} is a billing partner for physician offices and clinics — authorizations,
            charges, payments, and follow-up on denials. No buzzwords-only updates; you&apos;ll know
            what changed and why.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <Button
              href="/book-consultation"
              size="lg"
              variant="secondary"
              className="hero-cta w-full sm:w-auto"
            >
              Talk with us
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button href="/free-assessment" size="lg" variant="white" className="hero-cta w-full sm:w-auto">
              Try a 2-week review
            </Button>
          </div>

          <ul className="mt-10 space-y-2.5 border-t border-white/10 pt-8">
            {highlights.map((item) => (
              <li key={item} className="hero-highlight text-sm leading-relaxed text-slate-400">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div ref={rightRef} className="min-w-0 w-full max-w-lg justify-self-center lg:max-w-none lg:justify-self-end">
          <HeroDashboardPreview />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-[var(--background)] to-transparent" />
    </section>
  );
}

const serviceIcons = {
  "patient-appointment-scheduling": Calendar,
  "prior-authorizations": ShieldCheck,
  "verification-of-benefits": ClipboardCheck,
  "charge-entry": FileText,
  "payment-posting": DollarSign,
  "ar-denial-management": AlertCircle,
};

export function ServicesSection() {
  return (
    <section className="section-padding bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn className="mb-14 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Day-to-day support"
            title="Billing services we take off your plate"
            description="Scheduling help through final payment — one team that knows your payers and your workflow."
            className="max-w-xl"
          />
          <Button href="/services" variant="outline" className="shrink-0">
            All services
            <ArrowRight className="h-4 w-4" />
          </Button>
        </AnimateIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon =
              serviceIcons[service.slug as keyof typeof serviceIcons] ?? FileText;
            const img = serviceImages[service.slug] ?? images.services;
            return (
              <AnimateIn key={service.slug} delay={index * 70} variant="scale-in">
                <Link
                  href={`/services/${service.slug}`}
                  className="card-glow group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white dark:border-slate-800 dark:bg-slate-900/50"
                >
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={img}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-brand-600 shadow-sm backdrop-blur-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-semibold text-slate-900 group-hover:text-brand-700 dark:text-white dark:group-hover:text-brand-400">
                      {service.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                      {service.shortDescription}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600 dark:text-brand-400">
                      Details
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
