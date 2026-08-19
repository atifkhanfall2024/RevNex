import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { images } from "@/data/images";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Shield, Target, Users } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: "About",
  description: "About RevNex — US healthcare revenue cycle management experts.",
};

const values = [
  {
    icon: Shield,
    title: "Compliance First",
    description: "HIPAA-compliant processes and audit-ready documentation on every claim.",
  },
  {
    icon: Target,
    title: "Results Driven",
    description: "We measure success by your clean claim rate, days in A/R, and net collections.",
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description: "Dedicated specialists who become an extension of your practice team.",
  },
];

export default function AboutPage() {
  return (
    <div className="page-shell">
      <PageHero
        title={`About ${siteConfig.name}`}
        description={siteConfig.tagline}
        image={images.medicalTeam}
        backHref="/"
        backLabel="Home"
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="text-body text-lg leading-relaxed">
              {siteConfig.name} is a dedicated revenue cycle management partner for physician
              practices, medical groups, and outpatient clinics across the United States.
            </p>
            <p className="text-body mt-6 text-lg leading-relaxed">
              From prior authorizations and eligibility verification to charge entry, payment
              posting, and denial management, our team delivers end-to-end RCM with transparency
              and measurable results.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-white py-16 dark:border-slate-800 dark:bg-slate-950 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading text-center text-3xl font-bold">Our Values</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value, i) => (
              <AnimateIn key={value.title} delay={i * 100}>
                <div className="card-glow surface-card p-8">
                  <value.icon className="h-8 w-8 text-brand-600 dark:text-brand-400" />
                  <h3 className="text-heading mt-4 text-lg font-bold">{value.title}</h3>
                  <p className="text-body mt-2 text-sm">{value.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Button href="/book-consultation" size="lg">
              Work With Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
