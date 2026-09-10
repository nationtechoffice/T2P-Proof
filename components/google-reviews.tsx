import { Star, ExternalLink } from "lucide-react";
import { JsonLd } from "@/lib/json-ld";
import { googleBusiness } from "@/lib/google-business";
import { siteConfig } from "@/lib/site-config";

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
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": `${siteConfig.url}/#organization`,
          name: siteConfig.legalName,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5",
            reviewCount: String(reviews.length),
            bestRating: "5",
          },
          review: reviews.map((review) => ({
            "@type": "Review",
            author: { "@type": "Person", name: review.name },
            reviewBody: review.text,
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          })),
        }}
      />
      <div className="container-site">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2 id="reviews-heading" className="mb-3 text-3xl font-bold md:text-4xl">
            Tampa Bay Customer Reviews
          </h2>
          <p className="text-[hsl(var(--muted-foreground))]">
            Recent 5-star feedback from local homeowners.
          </p>
        </div>

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

        <div className="mt-8 text-center">
          <a
            href={googleBusiness.shareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            More reviews
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
