"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { instantEstimate } from "@/lib/instant-estimate";
import { TrustBadges } from "@/components/trust-badges";
import { HeroPhotoReel } from "@/components/hero-photo-reel";

/**
 * Photo-first hero using real Google Maps job photos.
 * Text sits on a partial gradient so the work stays visible — no full-bleed black panel.
 */
export function Hero() {
  return (
    <section className="relative isolate min-h-[min(92vh,880px)] overflow-hidden bg-slate-200">
      <HeroPhotoReel />

      {/* Readability wash only — image stays visible on mobile and desktop */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-t from-slate-950/80 via-slate-950/35 to-slate-950/15 md:bg-gradient-to-r md:from-slate-950/80 md:via-slate-950/45 md:to-transparent"
        aria-hidden
      />

      <div className="container-site relative z-10 flex min-h-[min(92vh,880px)] items-center py-20 md:py-24">
        <motion.div
          className="hero-speakable max-w-md text-white md:max-w-lg"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.32em] text-[hsl(var(--accent))] sm:text-sm">
            Tampa handyman near me · Westchase · Licensed &amp; Insured
          </p>

          <p
            className="mb-3 font-display text-4xl font-extrabold leading-[0.98] tracking-tight text-white sm:text-5xl md:text-6xl"
            style={{ textShadow: "0 12px 36px rgba(0,0,0,0.45)" }}
          >
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
              className="inline-flex w-full items-center justify-center rounded-xl border-2 border-white/80 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[hsl(210_45%_12%)] sm:w-auto"
            >
              Get Fast Estimate
            </Link>
          </div>

          <div className="mt-10 max-w-md">
            <TrustBadges variant="dark" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
