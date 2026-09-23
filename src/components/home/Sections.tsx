"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Users,
  Hospital,
  Stethoscope,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { audiences } from "@/data/whoWeServe";
import { specialties } from "@/data/specialties";
import { states } from "@/data/states";
import { images, specialtyImages } from "@/data/images";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SpecialtyCard } from "@/components/specialties/SpecialtyCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [Building2, Users, Hospital, Stethoscope];

export function WhoWeServeSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-slate-50 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <AnimateIn>
              <SectionHeading
                align="left"
                eyebrow="Our clients"
                title="Who we serve"
                description={`Whether you're a solo practitioner or a multi-location group, ${siteConfig.name} scales with your practice.`}
              />
            </AnimateIn>

            <AnimateIn delay={100}>
              <div className="relative mt-8 min-h-[220px] aspect-video overflow-hidden rounded-2xl bg-slate-200 shadow-2xl ring-1 ring-slate-200/50 dark:bg-slate-800 dark:ring-slate-700">
                <Image
                  src={images.whoWeServe}
                  alt="Medical team collaboration"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/20 to-transparent pointer-events-none" />
              </div>
            </AnimateIn>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {audiences.map((audience, index) => {
              const Icon = icons[index] ?? Building2;
              return (
                <AnimateIn key={audience.slug} delay={index * 80}>
                  <Link
                    href="/who-we-serve"
                    className="card-glow block h-full rounded-2xl border border-slate-100 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/60"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-50 text-accent-600 dark:bg-accent-950/50 dark:text-accent-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-heading">{audience.title}</h3>
                    <p className="mt-2 text-sm text-body line-clamp-2">
                      {audience.description}
                    </p>
                  </Link>
                </AnimateIn>
              );
            })}
          </div>
        </div>
        <div className="mt-10 text-center">
          <Button href="/who-we-serve" variant="outline">
            Explore Who We Serve
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export function SpecialtiesSection() {
  return (
    <section className="section-padding bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn className="mb-14">
          <SectionHeading
            eyebrow="Expertise"
            title="Specialties we work with"
            description="Industry-specific billing knowledge across 10+ medical specialties."
          />
        </AnimateIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {specialties.map((specialty, index) => (
            <AnimateIn key={specialty.slug} delay={index * 50} variant="scale-in">
              <SpecialtyCard
                href={`/specialties/${specialty.slug}`}
                title={specialty.title}
                image={specialtyImages[specialty.slug] ?? images.specialties}
              />
            </AnimateIn>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/specialties" variant="ghost">
            View All Specialties
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export function StatesSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="absolute inset-0">
        <Image
          src={images.states}
          alt=""
          fill
          className="object-cover opacity-[0.06]"
          sizes="100vw"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn className="mb-14">
          <SectionHeading
            eyebrow="Coverage"
            title="States we serve"
            description="Active RCM operations across key US markets with local payer expertise."
          />
        </AnimateIn>

        <div className="flex flex-wrap justify-center gap-4">
          {states.map((state, index) => (
            <AnimateIn key={state.code} delay={index * 60}>
              <Link
                href={`/states/${state.code.toLowerCase()}`}
                className="card-glow flex min-w-[130px] flex-col items-center rounded-2xl border border-slate-100 bg-white px-8 py-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/80"
              >
                <span className="text-3xl font-extrabold text-brand-600 dark:text-brand-400">
                  {state.code}
                </span>
                <span className="mt-1 text-sm font-medium text-body">
                  {state.name}
                </span>
              </Link>
            </AnimateIn>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/states" variant="outline">
            View All States
          </Button>
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="section-padding pb-[calc(var(--section-y)+1rem)] lg:pb-[var(--section-y)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="relative overflow-hidden rounded-3xl min-h-[280px]">
            <Image
              src={images.assessment}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-900/90 to-brand-800/85" />
            <div className="relative px-8 py-16 text-center sm:px-16 sm:py-20">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Ready to Optimize Your Revenue Cycle?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
                Start with a free 2-week RCM assessment. We&apos;ll analyze your
                billing performance and show where revenue is being lost.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <Button href="/free-assessment" size="lg" variant="secondary">
                  Free 2-week RCM assessment
                </Button>
                <Button href="/book-consultation" size="lg" variant="white">
                  Book a Consultation
                </Button>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

export function TrustSection() {
  const stats = [
    { value: 98, suffix: "%", label: "Clean Claim Rate" },
    { value: 30, prefix: "< ", suffix: "", label: "Days in A/R" },
    { value: 10, suffix: "+", label: "Specialties Served" },
    { value: 7, suffix: "", label: "States Active" },
  ];

  return (
    <section className="border-y border-slate-100 bg-white py-10 dark:border-slate-800 dark:bg-slate-950 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 80}>
              <div className="rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-5 text-center dark:border-slate-800 dark:bg-slate-900/50">
                <p className="text-3xl font-extrabold tabular-nums text-brand-600 dark:text-brand-400 sm:text-4xl">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </p>
                <p className="mt-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 sm:text-sm sm:normal-case sm:tracking-normal">
                  {stat.label}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomePreviewBanner() {
  const items = [
    { label: "HIPAA Compliant", icon: ShieldCheck },
    { label: "Dedicated Specialists", icon: Users },
    { label: "7 States Active", icon: Building2 },
    { label: "10+ Specialties", icon: Stethoscope },
  ] as const;

  return (
    <section className="relative z-20 -mt-6 border-b border-slate-100 bg-white/95 py-4 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/95 sm:py-5">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-10 sm:gap-y-3 sm:px-6 lg:px-8">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <AnimateIn key={item.label} delay={index * 80} variant="fade-in" duration={0.6}>
              <div className="flex items-center justify-center gap-2 rounded-xl border border-slate-100 bg-slate-50/80 px-3 py-2.5 text-xs font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-200 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:text-sm">
                <Icon className="h-4 w-4 shrink-0 text-accent-500" />
                {item.label}
              </div>
            </AnimateIn>
          );
        })}
      </div>
    </section>
  );
}
