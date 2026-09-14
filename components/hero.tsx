"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { instantEstimate } from "@/lib/instant-estimate";
import { TrustBadges } from "@/components/trust-badges";
import { VideoBackground } from "@/components/video-background";

/**
 * Bright cinematic hero — full-bleed job video stays visible on the right;
 * copy sits on a solid left panel so we never wash out the footage.
 */
export function Hero() {
  return (
    <section className="relative isolate min-h-[min(92vh,880px)] overflow-hidden bg-[hsl(210_45%_10%)]">
      <div className="absolute inset-0">
        <VideoBackground
          priority
          mp4Src="/videos/hero-loop.mp4?v=6"
          posterSrc="/images/cinematic/hero-poster.jpg?v=6"
          className="hero-video-bright"
        />
      </div>

      {/* Keep RIGHT side crystal clear — lighter shade only under copy */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[hsl(210_50%_8%/0.92)] via-[hsl(210_50%_8%/0.55)] from-42% via-48% to-transparent to-68% md:from-38% md:via-44% md:to-62%"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[hsl(210_50%_8%/0.4)] to-transparent md:hidden"
        aria-hidden
      />

      <div className="container-site relative z-10 flex min-h-[min(92vh,880px)] items-center py-20 md:py-24">
        <motion.div
          className="hero-speakable max-w-xl text-white"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.32em] text-[hsl(var(--accent))] sm:text-sm">
            Tampa handyman · Westchase · Tampa Bay
          </p>

          <p
            className="mb-3 font-display text-4xl font-extrabold leading-[0.98] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ textShadow: "0 12px 36px rgba(0,0,0,0.45)" }}
          >
            {siteConfig.name}
          </p>

          <h1 className="mb-5 font-display text-xl font-semibold leading-snug text-white md:text-2xl lg:text-[1.7rem]">
            Tampa handyman near you — TV mounting, drywall &amp; home repair
          </h1>

          <p className="mb-8 max-w-lg text-base leading-relaxed text-slate-200 md:text-lg">
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

          <div className="mt-10">
            <TrustBadges variant="dark" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
