import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/Forms";
import { siteConfig } from "@/data/site";
import { images } from "@/data/images";
import { PageHero } from "@/components/ui/PageHero";
import { Phone, Mail, Clock } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.name} for US healthcare revenue cycle management services.`,
};

export default function ContactPage() {
  return (
    <div className="page-shell">
      <PageHero
        title="Contact Us"
        description="Have questions? We're here to help with all your RCM needs."
        image={images.contact}
        backHref="/"
        backLabel="Home"
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5">
            <AnimateIn className="lg:col-span-3">
              <div className="surface-card p-8">
                <h2 className="text-heading text-xl font-bold">Send a Message</h2>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </AnimateIn>
            <div className="space-y-4 lg:col-span-2">
              {[
                { icon: Phone, title: "Phone", value: siteConfig.phone, href: siteConfig.phoneHref },
                { icon: Mail, title: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                { icon: Clock, title: "Business Hours", value: "Mon – Fri: 8:00 AM – 6:00 PM EST" },
              ].map((item, i) => (
                <AnimateIn key={item.title} delay={i * 80}>
                  <div className="surface-card p-6">
                    <item.icon className="h-6 w-6 text-brand-600 dark:text-brand-400" />
                    <h3 className="text-heading mt-3 font-bold">{item.title}</h3>
                    {item.href ? (
                      <a href={item.href} className="mt-1 block text-sm text-brand-600 hover:underline dark:text-brand-400">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-body mt-1 text-sm">{item.value}</p>
                    )}
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
