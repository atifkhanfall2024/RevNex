import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <div className="page-shell py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-heading text-3xl font-bold">Terms of Service</h1>
        <p className="text-body mt-6 leading-relaxed">
          These terms govern your use of {siteConfig.name} services and website. Full terms
          to be finalized before production launch.
        </p>
      </div>
    </div>
  );
}
