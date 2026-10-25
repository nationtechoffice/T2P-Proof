import Link from "next/link";
import { Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { FAQSection } from "@/components/faq-section";
import { JsonLd, breadcrumbSchema, collectionPageSchema, faqSchema } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site-config";
import {
  directoryCityLinks,
  directoryCityServiceMatrix,
  directoryProjectAndEsLinks,
  directoryServiceLinks,
  latestGuidesBlock,
  orphanInlinkTargets,
} from "@/lib/seo-plan/directory-links";

const PATH = "/tampa-bay-handyman-directory";

const faqs = [
  {
    question: "What handyman services do you offer in Tampa Bay?",
    answer:
      "Drywall, painting, TV mounting, doors, fences, fixtures, pressure washing, gutters, siding, tile, and home maintenance — see the service list below.",
  },
  {
    question: "Which cities and counties do you serve?",
    answer: "Hillsborough, Pinellas and Pasco counties — Tampa, Clearwater, Brandon, Wesley Chapel and 40+ cities.",
  },
  {
    question: "How do I get a free estimate?",
    answer: `Call or text ${siteConfig.phone}. Instant reply, 24/7.`,
  },
  { question: "Do you speak Spanish?", answer: "Sí — hablamos español. Visit /es for Manitas Tampa pages." },
];

export function TampaBayDirectoryPage() {
  const pageUrl = `${siteConfig.url}${PATH}`;
  const services = directoryServiceLinks();
  const cities = directoryCityLinks();
  const matrix = directoryCityServiceMatrix();
  const guides = latestGuidesBlock();
  const projectsEs = directoryProjectAndEsLinks();

  const schemaItems = [
    ...services.map((s) => ({ name: s.label, url: `${siteConfig.url}${s.href}` })),
    ...cities.map((c) => ({ name: c.label, url: `${siteConfig.url}${c.href}` })),
  ];

  const byCounty = new Map<string, typeof cities>();
  for (const city of cities) {
    const key = city.county.includes("County") ? city.county : `${city.county} County`;
    if (!byCounty.has(key)) byCounty.set(key, []);
    byCounty.get(key)!.push(city);
  }

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Tampa Bay Handyman Directory", url: pageUrl },
          ]),
          collectionPageSchema({
            name: "Tampa Bay Handyman Directory",
            description:
              "Find your city and the handyman service you need across Handyman Pros FL Tampa Bay service and location pages.",
            url: pageUrl,
            items: schemaItems.slice(0, 500),
          }),
          faqSchema(faqs),
        ]}
      />
      <Breadcrumbs items={[{ label: "Tampa Bay Handyman Directory" }]} />
      <article className="section-padding">
        <div className="container-site">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-4 text-4xl font-bold">Tampa Bay Handyman Directory: Every Service and Every City We Cover</h1>
            <p className="mb-6 text-lg leading-relaxed text-[hsl(var(--muted-foreground))]">
              Handyman Pros FL is an insured Tampa Bay handyman crew. This directory lists every service we offer, from drywall and TV mounting to fences and doors, and every city we serve in Hillsborough, Pinellas and Pasco counties. Pick a city or a service, or call{" "}
              <a href={`tel:${siteConfig.phoneTel}`} className="font-semibold text-[hsl(var(--primary))]">
                {siteConfig.phone}
              </a>{" "}
              for an instant reply, 24/7.
            </p>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold">Services A–Z</h2>
              <ul className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                {services.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="text-[hsl(var(--primary))] hover:underline">
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold">Cities by county</h2>
              {[...byCounty.entries()].map(([county, list]) => (
                <div key={county} className="mb-8">
                  <h3 className="mb-2 text-xl font-bold">{county}</h3>
                  <ul className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                    {list.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} className="text-[hsl(var(--primary))] hover:underline">
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold">City × service pages</h2>
              <ul className="grid gap-2 sm:grid-cols-2">
                {matrix.map((m) => (
                  <li key={m.href}>
                    <Link href={m.href} className="text-sm text-[hsl(var(--primary))] hover:underline">
                      {m.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold">Latest guides</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {guides.map((g) => (
                  <li key={g.href}>
                    <Link href={g.href} className="block rounded-xl border border-[hsl(var(--border))] px-4 py-3 hover:bg-[hsl(var(--muted))]/30">
                      <span className="font-semibold">{g.label}</span>
                      <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">{g.description}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold">Project stories and guides worth bookmarking</h2>
              <ul className="grid gap-2 sm:grid-cols-2">
                {projectsEs.map((p) => (
                  <li key={p.href}>
                    <Link href={p.href} className="text-[hsl(var(--primary))] hover:underline">
                      {p.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/answers" className="text-[hsl(var(--primary))] hover:underline">
                    Answers hub
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-[hsl(var(--primary))] hover:underline">
                    Blog &amp; tips
                  </Link>
                </li>
              </ul>
            </section>

            <section className="mb-12 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--muted))]/30 p-6">
              <h2 className="mb-3 text-xl font-bold">Recently added pages (extra internal links)</h2>
              <ul className="grid gap-2 sm:grid-cols-2">
                {orphanInlinkTargets.map((o) => (
                  <li key={o.href}>
                    <Link href={o.href} className="text-[hsl(var(--primary))] hover:underline">
                      {o.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <div className="flex flex-wrap items-center gap-4">
              <a href={`tel:${siteConfig.phoneTel}`} className="btn-primary inline-flex items-center gap-2">
                <Phone className="h-5 w-5" />
                {siteConfig.phone}
              </a>
              <Link href="/free-estimate" className="btn-secondary">
                Free estimate
              </Link>
            </div>
          </div>
        </div>
      </article>
      <FAQSection faqs={faqs} title="Directory FAQ" />
      <CTASection />
    </>
  );
}
