import type { Metadata } from "next";
import { ConsultationForm } from "@/components/forms/Forms";
import { siteConfig } from "@/data/site";
import { images } from "@/data/images";
import { PageHero } from "@/components/ui/PageHero";
import { Phone, Mail } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description: "Schedule a free consultation with RevNex RCM experts.",
};

export default function BookConsultationPage() {
  return (
    <div className="page-shell">
      <PageHero
        title="Book a Consultation"
        description="Tell us about your practice and we'll schedule a personalized RCM consultation."
        image={images.medicalTeam}
        backHref="/"
        backLabel="Home"
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5">
            <AnimateIn className="lg:col-span-3">
              <div className="surface-card p-8">
                <h2 className="text-heading text-xl font-bold">Consultation Request</h2>
                <p className="text-body mt-2 text-sm">
                  Our team will reach out within 1 business day.
                </p>
                <div className="mt-8">
                  <ConsultationForm />
                </div>
              </div>
            </AnimateIn>
            <AnimateIn delay={120} className="lg:col-span-2">
              <div className="surface-card p-8">
                <h3 className="text-heading font-bold">Prefer to call?</h3>
                <a href={siteConfig.phoneHref} className="mt-3 flex items-center gap-2 text-brand-600 dark:text-brand-400">
                  <Phone className="h-5 w-5" />
                  {siteConfig.phone}
                </a>
                <a href={`mailto:${siteConfig.email}`} className="mt-3 flex items-center gap-2 text-brand-600 dark:text-brand-400">
                  <Mail className="h-5 w-5" />
                  {siteConfig.email}
                </a>
                <ul className="text-body mt-8 space-y-3 border-t border-slate-100 pt-8 text-sm dark:border-slate-800">
                  <li>• 30-minute discovery call</li>
                  <li>• Review of billing workflow</li>
                  <li>• Custom service recommendation</li>
                  <li>• No obligation — free</li>
                </ul>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </div>
  );
}
