import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { services, getServiceBySlug } from "@/data/services";
import { images } from "@/data/images";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };
  return { title: service.title, description: service.shortDescription };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <div className="page-shell">
      <PageHero
        title={service.title}
        description={service.shortDescription}
        image={images.billingDashboard}
        backHref="/services"
        backLabel="All Services"
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <AnimateIn className="lg:col-span-2">
              <h2 className="text-heading text-2xl font-bold">Overview</h2>
              <p className="text-body mt-4 text-lg leading-relaxed">
                {service.description}
              </p>
              <h3 className="text-heading mt-10 text-xl font-bold">Key Benefits</h3>
              <ul className="mt-4 space-y-3">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="text-body flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </AnimateIn>
            <AnimateIn delay={150} className="h-fit">
              <div className="surface-card p-8">
                <h3 className="text-heading text-lg font-bold">Get Started</h3>
                <p className="text-body mt-2 text-sm">
                  Learn how this service improves your practice revenue.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <Button href="/book-consultation" className="w-full">
                    Book Consultation
                  </Button>
                  <Button href="/free-assessment" variant="outline" className="w-full">
                    Free Assessment
                  </Button>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </div>
  );
}
