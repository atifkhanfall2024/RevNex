import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <div className="page-shell py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-heading text-3xl font-bold">Privacy Policy</h1>
        <p className="text-body mt-6 leading-relaxed">
          RevNex Solutions is committed to protecting your privacy. This page will contain
          our full privacy policy. Content to be finalized before production launch.
        </p>
      </div>
    </div>
  );
}
