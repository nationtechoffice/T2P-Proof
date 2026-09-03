import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { siteImages } from "@/lib/images";
import { instantEstimate } from "@/lib/instant-estimate";
import { TrustBadges } from "@/components/trust-badges";
import { Phone } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(200,75%,32%)] to-[hsl(var(--secondary))] opacity-95" />
      <div className="hero-shimmer absolute inset-0" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -right-20 -top-20 h-96 w-96 animate-pulse rounded-full bg-[hsl(var(--accent))]" />
        <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-[hsl(var(--florida-sky))]" style={{ animation: "florida-float 15s ease-in-out infinite" }} />
      </div>

      <div className="container-site relative section-padding">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="hero-speakable text-white">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[hsl(var(--accent))]">
              Instant Phone Estimates · 24/7 Dispatch
            </p>
            <h1 className="mb-4 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
              Handyman in Tampa, FL
            </h1>
            <p className="mb-6 text-2xl font-bold leading-snug text-[hsl(var(--accent))] md:text-3xl">
              {instantEstimate.heroHeadline}
            </p>
            <p className="mb-8 text-lg leading-relaxed text-blue-100 md:text-xl">
              {instantEstimate.heroSubhead} One Tampa crew based in Westchase — we come to you.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href={`tel:${siteConfig.phoneTel}`} className="btn-accent w-full sm:w-auto inline-flex items-center justify-center gap-2 text-base font-bold">
                <Phone className="h-5 w-5" />
                {instantEstimate.ctaLabel}: {siteConfig.phone}
              </a>
              <Link href="/contact" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-[hsl(var(--primary))] w-full sm:w-auto">
                Or request a callback
              </Link>
            </div>
            <div className="mt-10">
              <TrustBadges variant="dark" />
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-4 border-white/20 shadow-2xl">
              <Image
                src={siteImages.hero.src}
                alt={siteImages.hero.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary))]/40 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-[hsl(var(--accent))] px-4 py-2 text-sm font-bold text-white shadow-lg">
              Open 24/7 · Instant Phone Estimates
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
