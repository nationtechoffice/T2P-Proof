import Link from "next/link";
import type { NeighborhoodSpot } from "@/lib/tampa-neighborhoods";

function spotId(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function NeighborhoodBlocks({
  title,
  intro,
  spots,
}: {
  title: string;
  intro?: string;
  spots: NeighborhoodSpot[];
}) {
  if (spots.length === 0) return null;

  return (
    <section className="mt-10" aria-label={title}>
      <h2 className="mb-3 text-2xl font-bold">{title}</h2>
      {intro ? <p className="mb-4 leading-relaxed text-[hsl(var(--muted-foreground))]">{intro}</p> : null}
      <div className="space-y-4">
        {spots.map((spot) => (
          <article key={spot.name} id={spotId(spot.name)} className="scroll-mt-28 rounded-xl border border-[hsl(var(--border))] bg-white/70 p-4">
            <h3 className="mb-2 text-lg font-semibold">{spot.name}</h3>
            <p className="text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">{spot.body}</p>
            {spot.links.length > 0 ? (
              <ul className="mt-3 flex flex-wrap gap-2 text-sm">
                {spot.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="font-medium text-[hsl(var(--primary))] hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
