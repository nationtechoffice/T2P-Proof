"use client";

import Link from "next/link";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Phone } from "lucide-react";
import { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/site-config";
import { instantEstimate } from "@/lib/instant-estimate";
import { TrustBadges } from "@/components/trust-badges";
import { VideoBackground } from "@/components/video-background";

/**
 * Full-bleed cinematic hero with mouse-driven depth parallax,
 * drifting layers, and continuous ambient motion.
 */
export function Hero() {
  const stageRef = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 70, damping: 18 });
  const sy = useSpring(my, { stiffness: 70, damping: 18 });

  const videoX = useTransform(sx, [-0.5, 0.5], [-32, 32]);
  const videoY = useTransform(sy, [-0.5, 0.5], [-20, 20]);
  const videoScale = useTransform(sy, [-0.5, 0.5], [1.12, 1.2]);
  const stageRX = useTransform(sy, [-0.5, 0.5], [7, -7]);
  const stageRY = useTransform(sx, [-0.5, 0.5], [-10, 10]);
  const copyX = useTransform(sx, [-0.5, 0.5], [-10, 10]);
  const copyY = useTransform(sy, [-0.5, 0.5], [-8, 8]);
  const glowX = useTransform(sx, [-0.5, 0.5], [28, 72]);
  const glowY = useTransform(sy, [-0.5, 0.5], [32, 68]);
  const glow = useMotionTemplate`radial-gradient(560px circle at ${glowX}% ${glowY}%, rgba(244,125,49,0.22), transparent 60%)`;

  useEffect(() => {
    const node = stageRef.current;
    if (!node) return;

    function onMove(event: PointerEvent) {
      const el = stageRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      mx.set((event.clientX - rect.left) / rect.width - 0.5);
      my.set((event.clientY - rect.top) / rect.height - 0.5);
    }

    function onLeave() {
      mx.set(0);
      my.set(0);
    }

    node.addEventListener("pointermove", onMove);
    node.addEventListener("pointerleave", onLeave);
    return () => {
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerleave", onLeave);
    };
  }, [mx, my]);

  return (
    <section
      ref={stageRef}
      className="relative isolate min-h-[min(94vh,920px)] overflow-hidden [perspective:1400px]"
    >
      <motion.div
        className="absolute inset-[-10%] will-change-transform"
        style={{ x: videoX, y: videoY, scale: videoScale }}
      >
        <VideoBackground
          priority
          mp4Src="/videos/hero-loop.mp4"
          webmSrc="/videos/hero-loop.webm"
          posterSrc="/images/cinematic/hero-poster.jpg"
        />
      </motion.div>

      {/* Soft left wash only — keep TV → drywall → fence beats readable */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-slate-950/72 via-slate-900/28 to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-slate-950/15"
        aria-hidden
      />
      <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: glow }} />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 [transform-style:preserve-3d]"
        style={{ rotateX: stageRX, rotateY: stageRY }}
      >
        <div className="spatial-ring absolute left-[4%] top-[18%] h-[18rem] w-[18rem] rounded-full border border-white/10" />
        <div className="spatial-ring-reverse absolute right-[4%] top-[12%] h-[24rem] w-[24rem] rounded-full border border-dashed border-orange-300/15" />
      </motion.div>

      <div className="container-site relative z-10 flex min-h-[min(94vh,920px)] items-center py-20 md:py-28">
        <motion.div
          className="hero-speakable max-w-2xl text-white [transform-style:preserve-3d]"
          style={{ x: copyX, y: copyY, translateZ: 40 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20, rotateX: 24 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[hsl(var(--accent))]"
          >
            Tampa · Westchase · Hillsborough · Pinellas
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 32, rotateX: 30 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.72, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mb-3 text-4xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ textShadow: "0 20px 45px rgba(0,0,0,0.5)" }}
          >
            {siteConfig.name}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.65, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 text-xl font-semibold leading-snug text-white/95 md:text-2xl lg:text-3xl"
          >
            Handyman near you in Tampa, FL — call for an instant estimate
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mb-9 max-w-xl text-base leading-relaxed text-slate-200 md:text-lg"
          >
            {instantEstimate.heroSubhead} One Westchase crew covering Hillsborough &amp; Pinellas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-3 sm:flex-row"
            style={{ transform: "translateZ(48px)" }}
          >
            <motion.a
              href={`tel:${siteConfig.phoneTel}`}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="btn-accent inline-flex w-full items-center justify-center gap-2 text-base font-bold shadow-[0_20px_44px_-12px_rgba(244,125,49,0.7)] sm:w-auto"
            >
              <Phone className="h-5 w-5" />
              {instantEstimate.ctaLabel}: {siteConfig.phone}
            </motion.a>
            <motion.div whileHover={{ scale: 1.04, y: -3 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-xl border-2 border-white/70 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[hsl(var(--primary))] sm:w-auto"
              >
                Get Fast Estimate
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="mt-10"
            style={{ transform: "translateZ(28px)" }}
          >
            <TrustBadges variant="dark" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
