import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPin } from "lucide-react";
import { states, getStateByCode } from "@/data/states";
import { images } from "@/data/images";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { siteConfig } from "@/data/site";

type Props = { params: Promise<{ code: string }> };

export async function generateStaticParams() {
  return states.map((s) => ({ code: s.code.toLowerCase() }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params;
  const state = getStateByCode(code);
  if (!state) return { title: "State Not Found" };
  return { title: `${state.name} RCM Services`, description: state.description };
}

export default async function StateDetailPage({ params }: Props) {
  const { code } = await params;
  const state = getStateByCode(code);
  if (!state) notFound();

  return (
    <div className="page-shell">
      <PageHero
        title={`${state.name} (${state.code})`}
        description={state.description}
        image={images.clinic}
        backHref="/states"
        backLabel="All States"
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="mb-6 flex items-center gap-2 text-brand-600 dark:text-brand-400">
              <MapPin className="h-5 w-5" />
              <span className="font-semibold">{siteConfig.name} RCM — {state.name}</span>
            </div>
            <p className="text-body text-lg leading-relaxed">
              Our {state.name} team handles prior authorizations, eligibility verification,
              charge entry, payment posting, and denial management for practices across the
              state — with deep knowledge of local payer requirements.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/book-consultation">Book Consultation</Button>
              <Button href="/free-assessment" variant="outline">
                Free 2-week RCM assessment
              </Button>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
