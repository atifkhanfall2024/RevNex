import type { Metadata } from "next";
import { Building2, Users, Hospital, Stethoscope } from "lucide-react";
import { audiences } from "@/data/whoWeServe";
import { images } from "@/data/images";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "RevNex serves physician practices, medical groups, outpatient clinics, and practices across the US.",
};

const icons = [Building2, Users, Hospital, Stethoscope];

export default function WhoWeServePage() {
  return (
    <div className="page-shell">
      <PageHero
        title="Who We Serve"
        description="From solo practitioners to multi-location groups — we scale with your practice."
        image={images.whoWeServe}
        backHref="/"
        backLabel="Home"
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience, index) => {
              const Icon = icons[index] ?? Building2;
              return (
                <AnimateIn key={audience.slug} delay={index * 80}>
                  <div className="card-glow surface-card h-full p-8">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-accent-50 text-brand-600 dark:from-brand-950 dark:to-accent-950 dark:text-brand-400">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="text-heading text-xl font-bold">{audience.title}</h2>
                    <p className="text-body mt-3 text-sm leading-relaxed">
                      {audience.description}
                    </p>
                    <ul className="mt-5 space-y-2">
                      {audience.highlights.map((item) => (
                        <li key={item} className="text-body flex items-start gap-2 text-sm">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
          <div className="mt-14 text-center">
            <Button href="/book-consultation" size="lg">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
