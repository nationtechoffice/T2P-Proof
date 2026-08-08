import { Star } from "lucide-react";

/** Swap this placeholder for your direct Google Maps review / business reviews URL. */
export const GOOGLE_REVIEW_LINK = "INSERT_YOUR_GOOGLE_REVIEW_LINK_HERE";

const reviews = [
  {
    name: "Angela M.",
    location: "Westchase, FL",
    text: "Needed drywall patched and a ceiling fan installed before guests arrived. Handyman Pros FL showed up same day, worked clean, and everything looks brand new. True 5-star handyman service.",
  },
  {
    name: "Chris P.",
    location: "Carrollwood, FL",
    text: "Furniture assembly, TV wall mounting, and a sticky door — all handled in one visit. Clear pricing, respectful of our home, and the finish work was spotless. Highly recommend.",
  },
  {
    name: "Denise R.",
    location: "Riverview, FL",
    text: "Our fence had storm damage and a bathroom faucet was leaking. They repaired both quickly and walked us through every step. Local, licensed, and easy to schedule.",
  },
  {
    name: "Marcus L.",
    location: "South Tampa, FL",
    text: "Premium home care without the contractor runaround. Bracket mounting, closet hardware, and touch-up painting were done right the first time. We saved their number.",
  },
];

export function GoogleReviews() {
  return (
    <section className="section-padding relative" aria-labelledby="customer-reviews-heading">
      <div className="container-site">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[hsl(var(--accent))]">
            Google Reviews
          </p>
          <h2 id="customer-reviews-heading" className="mb-4 text-3xl font-bold md:text-4xl">
            Customer Reviews
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))]">
            Homeowners across Tampa Bay trust Handyman Pros FL for honest repairs, clean job sites, and 5-star results.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="flex h-full flex-col rounded-2xl border border-[hsl(var(--border))] bg-white/80 p-6 shadow-sm backdrop-blur-sm"
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
                <p className="font-semibold text-[hsl(var(--foreground))]">{review.name}</p>
                <p className="text-xs text-[hsl(var(--muted-foreground))]">{review.location}</p>
              </footer>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={GOOGLE_REVIEW_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent w-full text-center sm:w-auto"
          >
            Leave Us A Google Review
          </a>
          <a
            href={GOOGLE_REVIEW_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary w-full text-center sm:w-auto"
          >
            View All Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
