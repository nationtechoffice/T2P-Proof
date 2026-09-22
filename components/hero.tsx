"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { instantEstimate } from "@/lib/instant-estimate";
import { TrustBadges } from "@/components/trust-badges";
import { VideoBackground } from "@/components/video-background";

/**
 * Live looping job-photo video. Mobile keeps the footage in its own
 * uncovered band so it cannot be hidden by a black panel.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="relative h-[50vh] min-h-[300px] w-full md:absolute md:inset-0 md:h-auto md:min-h-0">
        <VideoBackground
          priority
          mp4Src="/videos/hero-loop.mp4?v=8"
          posterSrc="/images/cinematic/hero-poster.jpg?v=8"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1] hidden bg-gradient-to-r from-slate-950/82 via-slate-950/40 to-transparent md:block"
        aria-hidden
      />

      <div className="relative z-10 bg-slate-950 text-white md:bg-transparent">
        <div className="container-site flex flex-col justify-center py-8 md:min-h-[min(92vh,880px)] md:py-24">
          <motion.div
            className="hero-speakable max-w-md md:max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
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
                href={`tel:${siteConfig.phoneTel}`}
                className="btn-accent inline-flex w-full items-center justify-center gap-2 text-base font-bold shadow-[0_18px_40px_-12px_rgba(244,125,49,0.75)] sm:w-auto"
              >
                <Phone className="h-5 w-5" />
                {instantEstimate.ctaLabel}: {siteConfig.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-xl border-2 border-white/80 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[hsl(210_45%_12%)] sm:w-auto"
              >
                Get Fast Estimate
              </Link>
            </div>

            <div className="mt-8 max-w-md md:mt-10">
              <TrustBadges variant="dark" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
