import type { Metadata } from "next";
import { AssessmentForm } from "@/components/forms/Forms";
import { images } from "@/data/images";
import { PageHero } from "@/components/ui/PageHero";
import { CheckCircle2 } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Free 2-week RCM assessment",
  description: `Get a free 2-week revenue cycle management assessment from ${siteConfig.name} experts.`,
};

const assessmentIncludes = [
  "Complete review of your current billing performance",
  "Denial trend analysis and root-cause identification",
  "A/R aging report with actionable recommendations",
  "Clean claim rate benchmark against industry standards",
  "Customized improvement plan with projected ROI",
];

export default function FreeAssessmentPage() {
  return (
    <div className="page-shell">
      <PageHero
        title="Free 2-week RCM assessment"
        description="Discover exactly where revenue is slipping — our experts analyze your entire revenue cycle at no charge."
        image={images.assessment}
        backHref="/"
        backLabel="Home"
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5">
            <AnimateIn className="lg:col-span-3">
              <div className="surface-card p-8">
                <h2 className="text-heading text-xl font-bold">Request Your Assessment</h2>
                <p className="text-body mt-2 text-sm">
                  We&apos;ll begin your assessment within 48 hours.
                </p>
                <div className="mt-8">
                  <AssessmentForm />
                </div>
              </div>
            </AnimateIn>
            <AnimateIn delay={120} className="lg:col-span-2">
              <div className="surface-card p-8">
                <h3 className="text-heading font-bold">What&apos;s included</h3>
                <ul className="mt-4 space-y-3">
                  {assessmentIncludes.map((item) => (
                    <li key={item} className="text-body flex items-start gap-3 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </div>
  );
}
