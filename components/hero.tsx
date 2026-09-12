"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { instantEstimate } from "@/lib/instant-estimate";
import { TrustBadges } from "@/components/trust-badges";
import { VideoBackground } from "@/components/video-background";

/**
 * Full-bleed cinematic hero — brand-first composition with video plane,
 * dark gradient overlay for contrast, no inset cards or floating stickers.
 */
export function Hero() {
  return (
    <section className="relative isolate min-h-[min(92vh,860px)] overflow-hidden">
      <VideoBackground
        priority
        mp4Src="/videos/hero-loop.mp4"
        webmSrc="/videos/hero-loop.webm"
        posterSrc="/images/cinematic/hero-poster.jpg"
      />

      <div
        className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-slate-950/35"
        aria-hidden
      />

      <div className="container-site relative flex min-h-[min(92vh,860px)] items-center py-20 md:py-28">
        <div className="hero-speakable max-w-2xl text-white">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[hsl(var(--accent))]"
          >
            Instant Phone Estimates · 24/7 Dispatch
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mb-3 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {siteConfig.name}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 text-xl font-semibold leading-snug text-white/95 md:text-2xl lg:text-3xl"
          >
            Handyman in Tampa, FL — speak to a local expert right now
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-9 max-w-xl text-base leading-relaxed text-slate-200 md:text-lg"
          >
            {instantEstimate.heroSubhead} One Westchase crew covering Hillsborough &amp; Pinellas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="btn-accent inline-flex w-full items-center justify-center gap-2 text-base font-bold sm:w-auto"
            >
              <Phone className="h-5 w-5" />
              {instantEstimate.ctaLabel}: {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-xl border-2 border-white/70 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[hsl(var(--primary))] sm:w-auto"
            >
              Get Fast Estimate
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.4 }}
            className="mt-10"
          >
            <TrustBadges variant="dark" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
