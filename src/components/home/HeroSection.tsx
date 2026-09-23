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
  CheckCircle2,
  Sparkles,
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
  "HIPAA-compliant processes",
  "Dedicated billing specialists",
  "Transparent monthly reporting",
  "7 states & growing",
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

      tl.from(".hero-badge", { opacity: 0, y: 20, duration: 0.6 })
        .from(".hero-title", { opacity: 0, y: 36, duration: 0.85 }, "-=0.35")
        .from(".hero-desc", { opacity: 0, y: 24, duration: 0.7 }, "-=0.5")
        .from(".hero-cta", { opacity: 0, y: 20, duration: 0.6, stagger: 0.12 }, "-=0.45")
        .from(".hero-highlight", { opacity: 0, x: -16, duration: 0.5, stagger: 0.08 }, "-=0.3")
        .from(right, { opacity: 0, x: 56, scale: 0.96, duration: 1 }, "-=0.85");
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative -mt-16 min-h-[min(100dvh,920px)] overflow-x-hidden bg-brand-950 pt-16 sm:min-h-[92vh] lg:min-h-[88vh]"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 sm:py-20 lg:grid lg:min-h-[88vh] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:px-8 lg:py-28">
        {/* Left — headline & CTAs */}
        <div ref={leftRef}>
          <p className="hero-badge mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-accent-400" />
            {siteConfig.tagline}
          </p>

          <h1 className="hero-title text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            Maximize Revenue with{" "}
            <span className="text-gradient">Expert RCM</span>
          </h1>

          <p className="hero-desc mt-6 max-w-xl text-base leading-relaxed text-slate-300/95 sm:text-lg">
            From prior authorizations to denial management — {siteConfig.name} handles your
            entire revenue cycle so you can focus on patient care.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap">
            <Button
              href="/book-consultation"
              size="lg"
              variant="secondary"
              className="hero-cta w-full shadow-accent-500/30 sm:w-auto"
            >
              Book a Consultation
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button href="/free-assessment" size="lg" variant="white" className="hero-cta w-full sm:w-auto">
              Free 2-week RCM assessment
            </Button>
          </div>

          <ul className="mt-12 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="hero-highlight flex items-center gap-2.5 text-sm text-slate-300"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — dashboard preview */}
        <div
          ref={rightRef}
          className="relative mx-auto mt-10 w-full max-w-md scale-[0.92] sm:scale-100 lg:mt-0 lg:max-w-none"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent-500/20 via-brand-500/10 to-transparent blur-2xl" />
          <HeroDashboardPreview />
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-[var(--background)] to-transparent" />
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
            eyebrow="What we do"
            title="Services we offer"
            description="Comprehensive revenue cycle management from front desk to final payment."
            className="max-w-xl"
          />
          <Button href="/services" variant="outline" className="shrink-0">
            View all services
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
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 dark:text-brand-400">
                      Learn more
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
