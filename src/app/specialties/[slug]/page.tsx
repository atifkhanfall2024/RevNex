import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { specialties, getSpecialtyBySlug } from "@/data/specialties";
import { images } from "@/data/images";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { siteConfig } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return specialties.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const specialty = getSpecialtyBySlug(slug);
  if (!specialty) return { title: "Specialty Not Found" };
  return { title: specialty.title, description: specialty.description };
}

export default async function SpecialtyDetailPage({ params }: Props) {
  const { slug } = await params;
  const specialty = getSpecialtyBySlug(slug);
  if (!specialty) notFound();

  return (
    <div className="page-shell">
      <PageHero
        title={specialty.title}
        description={specialty.description}
        image={images.doctorOffice}
        backHref="/specialties"
        backLabel="All Specialties"
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="text-body text-lg leading-relaxed">
              {siteConfig.name} provides dedicated revenue cycle management for{" "}
              {specialty.title.toLowerCase()} practices. Our team understands the unique
              coding requirements, payer policies, and authorization workflows specific to
              your specialty.
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
