import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { images } from "@/data/images";
import { PageHero } from "@/components/ui/PageHero";
import { AnimateIn } from "@/components/ui/AnimateIn";

import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Services We Offer",
  description: `${siteConfig.name} RCM services — scheduling, prior auth, VOB, charge entry, payment posting, and denial management.`,
};

export default function ServicesPage() {
  return (
    <div className="page-shell">
      <PageHero
        title="Services We Offer"
        description="End-to-end revenue cycle management tailored for US healthcare practices."
        image={images.services}
        backHref="/"
        backLabel="Home"
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service, index) => (
              <AnimateIn key={service.slug} delay={index * 80}>
                <Link
                  href={`/services/${service.slug}`}
                  className="card-glow group flex h-full overflow-hidden surface-card"
                >
                  <div className="relative hidden w-40 shrink-0 sm:block">
                    <Image
                      src={images.medicalRecords}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="160px"
                    />
                    <div className="absolute inset-0 bg-brand-900/20" />
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <h2 className="text-heading text-xl font-bold group-hover:text-brand-700 dark:group-hover:text-brand-400">
                      {service.title}
                    </h2>
                    <p className="text-body mt-2 flex-1 text-sm">
                      {service.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 dark:text-brand-400">
                      View service <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
