const testimonials = [
  {
    name: "Maria R.",
    location: "Westchase, Tampa",
    text: "Handyman Pros mounted our TVs, fixed drywall, and painted our living room — all in one day. Professional, clean, and fairly priced. Highly recommend!",
    rating: 5,
  },
  {
    name: "James T.",
    location: "Carrollwood, Tampa",
    text: "They installed a beautiful vinyl privacy fence around our backyard. The crew was punctual, respectful, and the fence looks amazing. Best fence contractor in Tampa.",
    rating: 5,
  },
  {
    name: "Sarah L.",
    location: "Citrus Park, Tampa",
    text: "Needed exterior painting before hurricane season. They used premium paint and the finish is flawless. Our neighbors keep asking who we hired!",
    rating: 5,
  },
  {
    name: "David K.",
    location: "Brandon, Hillsborough County",
    text: "From furniture assembly to fixture installation, these handymen do it all. Fast response, honest pricing, and quality work every time.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="section-padding relative">
      <div className="container-site">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[hsl(var(--accent))]">
            Tampa Homeowners
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">What Our Neighbors Say</h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))]">
            Trusted by homeowners across Tampa, Westchase, Carrollwood, and all of Hillsborough County.
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
              <p className="mb-4 leading-relaxed text-[hsl(var(--muted-foreground))]">&ldquo;{t.text}&rdquo;</p>
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
