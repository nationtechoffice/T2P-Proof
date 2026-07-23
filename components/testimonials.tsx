const testimonials = [
  {
    name: "Maria R.",
    location: "Tampa, FL",
    text: "Handyman Pros Florida mounted our TVs, fixed drywall, and painted our living room — all in one day. Professional, clean, and fairly priced. Highly recommend!",
    rating: 5,
  },
  {
    name: "James T.",
    location: "Orlando, FL",
    text: "They installed a beautiful vinyl privacy fence around our backyard. The crew was punctual, respectful, and the fence looks amazing. Best fence contractor in Central Florida.",
    rating: 5,
  },
  {
    name: "Sarah L.",
    location: "Miami, FL",
    text: "Needed exterior painting before hurricane season. They used premium paint and the finish is flawless. Our neighbors keep asking who we hired!",
    rating: 5,
  },
  {
    name: "David K.",
    location: "Jacksonville, FL",
    text: "From furniture assembly to plumbing fixture installation, these handymen do it all. Fast response, honest pricing, and quality work every time.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="section-padding">
      <div className="container-site">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">What Florida Homeowners Say</h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))]">
            Trusted by thousands of homeowners across Florida for reliable, professional home services.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="card">
              <div className="mb-3 flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-[hsl(var(--accent))]" aria-hidden="true">★</span>
                ))}
              </div>
              <p className="mb-4 text-[hsl(var(--muted-foreground))] leading-relaxed">&ldquo;{t.text}&rdquo;</p>
              <footer>
                <cite className="not-italic">
                  <span className="font-semibold text-[hsl(var(--foreground))]">{t.name}</span>
                  <span className="text-sm text-[hsl(var(--muted-foreground))]"> — {t.location}</span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
