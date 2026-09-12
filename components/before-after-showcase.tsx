"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { siteConfig } from "@/lib/site-config";
import { Phone } from "lucide-react";

/**
 * True before/after image comparison.
 * After sits full-bleed underneath; before is clip-path revealed from the left.
 */
export function BeforeAfterShowcase() {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const updateFromClientX = useCallback((clientX: number) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(95, Math.max(5, next)));
  }, []);

  return (
    <section
      className="section-padding relative overflow-hidden bg-slate-950 text-white"
      aria-labelledby="before-after-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(244,125,49,0.18),_transparent_55%)]" />
      <div className="container-site relative">
        <ScrollReveal className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[hsl(var(--accent))]">
            Before &amp; After
          </p>
          <h2 id="before-after-heading" className="mb-4 text-3xl font-bold text-white md:text-4xl">
            See the Difference Slide by Slide
          </h2>
          <p className="text-lg text-slate-300">
            Drag the handle left and right — before shows open drywall damage, after shows the finished result.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="flip-up" className="mx-auto max-w-5xl">
          <div
            ref={trackRef}
            className="relative aspect-[16/9] touch-none select-none overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
            onPointerDown={(event) => {
              setDragging(true);
              (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
              updateFromClientX(event.clientX);
            }}
            onPointerMove={(event) => {
              if (!dragging && event.buttons !== 1) return;
              updateFromClientX(event.clientX);
            }}
            onPointerUp={() => setDragging(false)}
            onPointerCancel={() => setDragging(false)}
            role="slider"
            aria-valuemin={5}
            aria-valuemax={95}
            aria-valuenow={Math.round(position)}
            aria-label="Before and after comparison"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                setPosition((p) => Math.max(5, p - 4));
              }
              if (event.key === "ArrowRight") {
                event.preventDefault();
                setPosition((p) => Math.min(95, p + 4));
              }
            }}
          >
            <Image
              src="/images/cinematic/after-drywall.jpg"
              alt="After — finished interior work"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />

            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
              aria-hidden
            >
              <Image
                src="/images/cinematic/before-drywall.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>

            <div
              className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_14px_rgba(255,255,255,0.75)]"
              style={{ left: `${position}%` }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-[hsl(var(--accent))] text-sm font-bold text-white shadow-lg"
              style={{ left: `${position}%` }}
              aria-hidden
            >
              ↔
            </div>

            <span className="absolute left-4 top-4 z-10 rounded-md bg-slate-950/75 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider">
              Before
            </span>
            <span className="absolute right-4 top-4 z-10 rounded-md bg-[hsl(var(--accent))]/95 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider">
              After
            </span>
          </div>

          <label className="mt-4 flex items-center gap-3 text-sm text-slate-300">
            <span className="shrink-0 font-medium">Scrub reveal</span>
            <input
              type="range"
              min={5}
              max={95}
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
          <a
            href="/contact"
            className="btn-secondary !border-white/70 !text-white hover:!bg-white hover:!text-slate-900 w-full sm:w-auto"
          >
            Book Your Transformation
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
