import type { Metadata } from "next";
import { specialties } from "@/data/specialties";
import { images, specialtyImages } from "@/data/images";
import { PageHero } from "@/components/ui/PageHero";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SpecialtyCard } from "@/components/specialties/SpecialtyCard";

import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Specialities We Work With",
  description: `Medical specialties ${siteConfig.name} serves — from primary care to dermatology and behavioral health.`,
};

export default function SpecialtiesPage() {
  return (
    <div className="page-shell">
      <PageHero
        title="Specialities We Work With"
        description="Specialty-specific billing expertise for accurate coding and maximum reimbursement."
        image={images.specialties}
        backHref="/"
        backLabel="Home"
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {specialties.map((specialty, index) => (
              <AnimateIn key={specialty.slug} delay={index * 60}>
                <SpecialtyCard
                  href={`/specialties/${specialty.slug}`}
                  title={specialty.title}
                  image={specialtyImages[specialty.slug] ?? images.specialties}
                  description={specialty.description}
                  variant="full"
                />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
