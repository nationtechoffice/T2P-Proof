import { siteConfig } from "@/lib/site-config";
import { entityStatement, trustSignals } from "@/lib/geo-content";
import { formatFullAddress } from "@/lib/local-seo";
import { popularServiceLinks } from "@/lib/internal-links";
import Link from "next/link";

interface EntityFactsProps {
  compact?: boolean;
  city?: string;
}

export function EntityFacts({ compact = false, city }: EntityFactsProps) {
  const statement = city
    ? `${entityStatement} Crews regularly dispatch to ${city} for same-day and scheduled visits.`
    : entityStatement;

  return (
    <section className={compact ? "mt-10" : "section-padding relative"} aria-labelledby="entity-facts-heading">
      <div className={compact ? "" : "container-site"}>
        <div className="rounded-2xl border border-[hsl(var(--border))] bg-white/80 p-6 shadow-sm backdrop-blur-sm md:p-8">
          <h2 id="entity-facts-heading" className="mb-3 text-2xl font-bold">
            Handyman Pros FL — licensed Tampa Bay handyman
          </h2>
          <p className="entity-definition mb-6 text-base leading-relaxed text-[hsl(var(--foreground))]">
            {statement}
          </p>
          <dl className="grid gap-4 sm:grid-cols-2">
            {trustSignals.map((item) => (
              <div key={item.label} className="rounded-xl bg-[hsl(var(--muted))] p-4">
                <dt className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--accent))]">
                  {item.label}
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-[hsl(var(--foreground))]">
                  {item.label === "Phone" ? (
                    <a
                      href={`tel:${siteConfig.phoneTel}`}
                      className="touch-target font-semibold text-[hsl(var(--primary))]"
                      aria-label="Call Handyman Pros Florida Now"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
          {!compact && (
            <div className="mt-6">
              <p className="mb-2 text-sm font-semibold">Core services</p>
              <ul className="flex flex-wrap gap-2">
                {popularServiceLinks.slice(0, 8).map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="related-chip">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))]">
                Address: <address className="inline not-italic">{formatFullAddress()}</address>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
