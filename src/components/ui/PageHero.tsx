import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type PageHeroProps = {
  title: string;
  description: string;
  image: string;
  backHref?: string;
  backLabel?: string;
};

export function PageHero({
  title,
  description,
  image,
  backHref,
  backLabel = "Back",
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[320px] items-end overflow-hidden sm:min-h-[380px]">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-900/88 to-brand-900/60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.15),transparent_55%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-12 pt-28 sm:px-6 sm:pb-16 lg:px-8">
        {backHref && (
          <Link
            href={backHref}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4" />
            {backLabel}
          </Link>
        )}
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/80">{description}</p>
      </div>
    </section>
  );
}
