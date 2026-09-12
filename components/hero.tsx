"use client";

import Link from "next/link";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Phone, Sparkles, Wrench } from "lucide-react";
import { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/site-config";
import { instantEstimate } from "@/lib/instant-estimate";
import { TrustBadges } from "@/components/trust-badges";
import { VideoBackground } from "@/components/video-background";

/**
 * Full-bleed cinematic hero with mouse-driven 3D parallax,
 * drifting depth layers, and continuous spatial motion.
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
  const panelX = useTransform(sx, [-0.5, 0.5], [36, -36]);
  const panelY = useTransform(sy, [-0.5, 0.5], [24, -24]);
  const panelRotate = useTransform(sx, [-0.5, 0.5], [-10, 10]);
  const orbX = useTransform(panelX, (v) => v * -0.85);
  const orbY = useTransform(panelY, (v) => v * -0.65);
  const glowX = useTransform(sx, [-0.5, 0.5], [28, 72]);
  const glowY = useTransform(sy, [-0.5, 0.5], [32, 68]);
  const glow = useMotionTemplate`radial-gradient(560px circle at ${glowX}% ${glowY}%, rgba(244,125,49,0.3), transparent 60%)`;

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

      <div
        className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-900/78 to-slate-950/20"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/40"
        aria-hidden
      />
      <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: glow }} />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 [transform-style:preserve-3d]"
        style={{ rotateX: stageRX, rotateY: stageRY }}
      >
        <div className="spatial-ring absolute left-[6%] top-[16%] h-[22rem] w-[22rem] rounded-full border border-white/15" />
        <div className="spatial-ring-reverse absolute right-[2%] top-[10%] h-[30rem] w-[30rem] rounded-full border border-dashed border-orange-300/25" />

        <motion.div
          className="spatial-float absolute right-[9%] top-[26%] hidden h-40 w-32 rounded-2xl border border-white/20 bg-white/10 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)] backdrop-blur-md md:block"
          style={{ x: panelX, y: panelY, rotateZ: panelRotate, translateZ: 150 }}
        >
          <div className="flex h-full flex-col items-center justify-center gap-2 p-4 text-white">
            <Wrench className="h-8 w-8 text-[hsl(var(--accent))]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/80">Craft</span>
          </div>
        </motion.div>

        <motion.div
          className="spatial-float-slow absolute bottom-[20%] right-[20%] hidden h-28 w-28 rounded-full border border-cyan-200/30 bg-cyan-400/10 md:block"
          style={{ x: orbX, y: orbY, translateZ: 100 }}
        />

        <motion.div
          className="spatial-orbit absolute bottom-[28%] left-[40%] hidden h-16 w-16 items-center justify-center rounded-xl border border-orange-300/40 bg-orange-500/20 text-orange-100 md:flex"
          style={{ translateZ: 190 }}
        >
          <Sparkles className="h-5 w-5" />
        </motion.div>
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
            One Crew · TV · Drywall · Fence · Done
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
            Handyman in Tampa, FL — speak to a local expert right now
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
