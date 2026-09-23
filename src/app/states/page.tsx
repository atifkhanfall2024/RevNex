import type { Metadata } from "next";
import Link from "next/link";
import { states } from "@/data/states";
import { images } from "@/data/images";
import { PageHero } from "@/components/ui/PageHero";
import { AnimateIn } from "@/components/ui/AnimateIn";

import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "States We Serve",
  description: `${siteConfig.name} RCM in California, Texas, Florida, New York, New Jersey, Pennsylvania, and Massachusetts.`,
};

export default function StatesPage() {
  return (
    <div className="page-shell">
      <PageHero
        title="States We Serve"
        description="Active RCM operations with local payer knowledge across key US markets."
        image={images.states}
        backHref="/"
        backLabel="Home"
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {states.map((state, index) => (
              <AnimateIn key={state.code} delay={index * 70}>
                <Link
                  href={`/states/${state.code.toLowerCase()}`}
                  className="card-glow surface-card group flex items-center gap-5 p-6"
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-500 text-xl font-extrabold text-white shadow-lg shadow-brand-600/20">
                    {state.code}
                  </div>
                  <div>
                    <h2 className="text-heading text-lg font-bold">{state.name}</h2>
                    <p className="text-body mt-1 line-clamp-2 text-sm">
                      {state.description}
                    </p>
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
