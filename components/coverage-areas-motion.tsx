"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { MapPin } from "lucide-react";

const coverageHubs = [
  {
    city: "Tampa",
    blurb: "Westchase HQ dispatch across Hillsborough neighborhoods.",
    href: "/locations/tampa",
  },
  {
    city: "Clearwater",
    blurb: "Pinellas coastal homes — mounts, patches, and exterior refresh.",
    href: "/locations/clearwater",
  },
  {
    city: "St. Petersburg",
    blurb: "Same-day handyman help from downtown to the beaches.",
    href: "/locations/st-petersburg",
  },
] as const;

export function CoverageAreasMotion() {
  return (
    <section className="section-padding relative pt-0" aria-labelledby="coverage-heading">
      <div className="container-site">
        <ScrollReveal className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[hsl(var(--accent))]">
            Local Coverage
          </p>
          <h2 id="coverage-heading" className="mb-4 text-3xl font-bold md:text-4xl">
            Tampa · Clearwater · St. Petersburg
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))]">
            Licensed, insured crews covering Hillsborough and Pinellas — one Westchase headquarters, no franchise runaround.
          </p>
        </ScrollReveal>

        <div className="grid gap-5 md:grid-cols-3">
          {coverageHubs.map((hub, index) => (
            <ScrollReveal key={hub.city} delay={index * 0.1} variant="flip-up">
              <Link
                href={hub.href}
                className="group flex h-full flex-col rounded-2xl border border-[hsl(var(--border))] bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-[hsl(var(--accent)/0.45)] hover:shadow-lg"
              >
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] transition-colors group-hover:bg-[hsl(var(--accent))] group-hover:text-white">
                  <MapPin className="h-5 w-5" />
                </span>
                <h3 className="mb-2 text-xl font-bold">{hub.city}</h3>
                <p className="text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">{hub.blurb}</p>
                <span className="mt-4 text-sm font-semibold text-[hsl(var(--primary))]">
                  Explore {hub.city} coverage →
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
