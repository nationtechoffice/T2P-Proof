import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { instantEstimate } from "@/lib/instant-estimate";
import { heroStory } from "@/lib/images";
import { TrustBadges } from "@/components/trust-badges";
import { VideoBackground } from "@/components/video-background";

/**
 * Mobile: headline and call button sit above the poster, in normal flow.
 * Desktop: the same copy overlays the muted loop. Text is not animated from opacity 0.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 md:min-h-[min(92vh,880px)]">
      <div className="relative z-10 text-white md:absolute md:inset-0 md:flex md:items-center">
        <div
          className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-slate-950/82 via-slate-950/40 to-transparent md:block"
          aria-hidden
        />
        <div className="container-site relative py-8 md:py-24">
          <div className="hero-speakable max-w-md md:max-w-lg">
            <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.32em] text-[hsl(var(--accent))] sm:text-sm">
              Tampa handyman near me · Westchase · Licensed &amp; Insured
            </p>

            <p className="mb-3 font-display text-4xl font-extrabold leading-[0.98] tracking-tight text-white sm:text-5xl md:text-6xl">
              {siteConfig.name}
            </p>

            <h1 className="mb-5 font-display text-xl font-semibold leading-snug text-white md:text-2xl">
              Tampa handyman near you — TV mounting, drywall &amp; home repair
            </h1>

            <p className="mb-8 max-w-md text-base leading-relaxed text-slate-100 md:text-lg">
              {instantEstimate.heroSubhead}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${siteConfig.phoneE164}`}
                className="btn-accent inline-flex w-full items-center justify-center gap-2 text-base font-bold shadow-[0_18px_40px_-12px_rgba(255,122,0,0.75)] sm:w-auto"
              >
                <Phone className="h-5 w-5" />
                Call {siteConfig.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-xl border-2 border-white/80 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[hsl(0_0%_4%)] sm:w-auto"
              >
                Get Fast Estimate
              </Link>
            </div>

            <div className="mt-8 max-w-md md:mt-10">
              <TrustBadges variant="dark" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-[46vh] min-h-[240px] w-full md:absolute md:inset-0 md:h-auto md:min-h-0">
        <VideoBackground
          priority
          mp4Src={heroStory.video}
          posterSrc={heroStory.poster.webp}
          posterAvif={heroStory.poster.avif}
          posterAlt={heroStory.poster.alt}
          posterWidth={heroStory.poster.width}
          posterHeight={heroStory.poster.height}
        />
      </div>
    </section>
  );
}
