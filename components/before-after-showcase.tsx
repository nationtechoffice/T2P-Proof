"use client";

import { useRef, useState } from "react";
import { VideoBackground } from "@/components/video-background";
import { ScrollReveal } from "@/components/scroll-reveal";
import { siteConfig } from "@/lib/site-config";
import { Phone } from "lucide-react";

/**
 * AI-generated before/after video showcase with optional scrub slider overlay.
 */
export function BeforeAfterShowcase() {
  const [position, setPosition] = useState(52);
  const trackRef = useRef<HTMLDivElement>(null);

  function updateFromClientX(clientX: number) {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(92, Math.max(8, next)));
  }

  return (
    <section className="section-padding relative overflow-hidden bg-slate-950 text-white" aria-labelledby="before-after-heading">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(244,125,49,0.18),_transparent_55%)]" />
      <div className="container-site relative">
        <ScrollReveal className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[hsl(var(--accent))]">
            Before &amp; After
          </p>
          <h2 id="before-after-heading" className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Transformation-Ready Craftsmanship
          </h2>
          <p className="text-lg text-slate-300">
            Watch a cinematic look at drywall recovery and finish work — the same clean standard we bring to Tampa Bay homes.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="scale-in" className="mx-auto max-w-5xl">
          <div
            ref={trackRef}
            className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
            onPointerMove={(event) => {
              if (event.buttons === 1) updateFromClientX(event.clientX);
            }}
            onPointerDown={(event) => {
              (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
              updateFromClientX(event.clientX);
            }}
          >
            <VideoBackground
              lazy
              mp4Src="/videos/before-after-showcase.mp4"
              webmSrc="/videos/before-after-showcase.webm"
              posterSrc="/images/cinematic/before-after-poster.jpg"
            />

            {/* Side labels + slider chrome */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/30" />
            <div
              className="pointer-events-none absolute inset-y-0 left-0 border-r border-white/40 bg-slate-950/35 backdrop-blur-[1px]"
              style={{ width: `${position}%` }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.65)]"
              style={{ left: `${position}%` }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-white/90 text-xs font-bold text-slate-900 shadow-lg"
              style={{ left: `${position}%` }}
              aria-hidden
            >
              ↔
            </div>
            <span className="absolute left-4 top-4 rounded-md bg-slate-950/70 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider">
              Before
            </span>
            <span className="absolute right-4 top-4 rounded-md bg-[hsl(var(--accent))]/90 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider">
              After
            </span>
          </div>

          <label className="mt-4 flex items-center gap-3 text-sm text-slate-300">
            <span className="shrink-0 font-medium">Scrub reveal</span>
            <input
              type="range"
              min={8}
              max={92}
              value={position}
              onChange={(event) => setPosition(Number(event.target.value))}
              className="h-2 w-full cursor-pointer accent-[hsl(var(--accent))]"
              aria-label="Reveal before and after"
            />
          </label>
        </ScrollReveal>

        <ScrollReveal delay={0.12} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="btn-accent inline-flex w-full items-center justify-center gap-2 sm:w-auto"
          >
            <Phone className="h-5 w-5" />
            Call for a Fast Estimate
          </a>
          <a href="/contact" className="btn-secondary !border-white/70 !text-white hover:!bg-white hover:!text-slate-900 w-full sm:w-auto">
            Book Your Transformation
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
