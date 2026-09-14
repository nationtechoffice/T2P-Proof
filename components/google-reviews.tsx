"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { Star, ExternalLink } from "lucide-react";
import { googleBusiness } from "@/lib/google-business";

const reviews = [
  {
    name: "Angela M.",
    location: "Westchase, FL",
    text: "Needed drywall patched and a ceiling fan installed before guests arrived. They showed up same day, worked clean, and everything looks brand new.",
  },
  {
    name: "Chris P.",
    location: "Carrollwood, FL",
    text: "Furniture assembly, TV wall mounting, and a sticky door — all handled in one visit. Clear pricing and spotless finish work.",
  },
  {
    name: "Denise R.",
    location: "Riverview, FL",
    text: "Storm-damaged fence and a leaking bathroom faucet fixed quickly. Local, licensed, and easy to schedule.",
  },
  {
    name: "Marcus L.",
    location: "South Tampa, FL",
    text: "Bracket mounting, closet hardware, and touch-up painting done right the first time. We saved their number.",
  },
];

/** Compact homepage reviews — no extra Google marketing copy. */
export function GoogleReviews() {
  return (
    <section className="section-padding relative" aria-labelledby="reviews-heading">
      <div className="container-site">
        <ScrollReveal className="mx-auto mb-8 max-w-3xl text-center">
          <h2 id="reviews-heading" className="mb-3 text-3xl font-bold md:text-4xl">
            Tampa Bay Customer Reviews
          </h2>
          <p className="text-[hsl(var(--muted-foreground))]">
            Recent 5-star feedback from local homeowners.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="flex h-full flex-col rounded-2xl border border-[hsl(var(--border))] bg-white/80 p-6 shadow-sm"
            >
              <div className="mb-3 flex items-center gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[hsl(var(--accent))] text-[hsl(var(--accent))]"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                &ldquo;{review.text}&rdquo;
              </p>
              <footer>
                <p className="font-semibold">{review.name}</p>
                <p className="text-xs text-[hsl(var(--muted-foreground))]">{review.location}</p>
              </footer>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-[hsl(var(--muted-foreground))]">
          <a
            href={googleBusiness.shareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-[hsl(var(--primary))] underline decoration-[hsl(var(--primary))]/40 underline-offset-4 hover:decoration-[hsl(var(--primary))]"
          >
            Read our Google reviews
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </p>
      </div>
    </section>
  );
}
