import Link from "next/link";
import type { ReactNode } from "react";
import { Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FAQSection } from "@/components/faq-section";
import { GoogleReviews } from "@/components/google-reviews";
import { QuoteForm } from "@/components/quote-form";
import { JsonLd } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site-config";
import type { CityServicePageData } from "@/lib/city-service-pages";

/** Renders inline [text](href) links inside plain copy. */
function Rich({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const [, label, href] = m;
    parts.push(
      href.startsWith("http") ? (
        <a key={m.index} href={href} rel="noopener" target="_blank" className="font-semibold text-[hsl(var(--primary))] hover:underline">{label}</a>
      ) : (
        <Link key={m.index} href={href} className="font-semibold text-[hsl(var(--primary))] hover:underline">{label}</Link>
      ),
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

export function CityServicePage({ page }: { page: CityServicePageData }) {
  return (
    <>
      <JsonLd data={page.schema} />
      <Breadcrumbs
        items={[
          { label: "Locations", href: "/locations" },
          ...(page.serviceLabel
            ? [{ label: page.cityLabel, href: page.hubPath }, { label: page.serviceLabel }]
            : [{ label: page.cityLabel }]),
        ]}
      />
      <article className="section-padding relative">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold">{page.h1}</h1>
            <ul className="mb-6 flex flex-wrap gap-2 text-sm font-semibold">
              {page.chips.map((chip) => (
                <li key={chip} className="rounded-full border border-[hsl(var(--border))] px-3 py-1">{chip}</li>
              ))}
              <li className="rounded-full border border-[hsl(var(--border))] px-3 py-1">
                <a href={`tel:${siteConfig.phoneTel}`}>{siteConfig.phone}</a>
              </li>
            </ul>
            <p className="opening mb-4 text-xl leading-relaxed">{page.opening}</p>
            <p className="mb-4 leading-relaxed">{page.noJob}</p>
            <p className="mb-8 leading-relaxed text-[hsl(var(--muted-foreground))]">{page.priceLine}</p>
            <div className="space-y-5 text-base leading-relaxed">
              {page.sections.map((s) => (
                <section key={s.h2} className="space-y-4">
                  <h2 className="mt-10 text-2xl font-bold">{s.h2}</h2>
                  {(s.paras ?? []).map((p, i) =>
                    p.startsWith("### ") ? (
                      <h3 key={i} className="mt-6 text-xl font-semibold">{p.slice(4)}</h3>
                    ) : (
                      <p key={i}><Rich text={p} /></p>
                    ),
                  )}
                  {s.list ? (
                    <ul className="list-disc space-y-1 pl-6">
                      {s.list.map((item) => (
                        <li key={item}><Rich text={item} /></li>
                      ))}
                    </ul>
                  ) : null}
                  {(s.after ?? []).map((p, i) => (
                    <p key={`a${i}`}><Rich text={p} /></p>
                  ))}
                </section>
              ))}
              <section className="space-y-4">
                <h2 className="mt-10 text-2xl font-bold">{page.areasTitle}</h2>
                <ul className="list-disc space-y-1 pl-6">
                  {page.areas.map((a) => <li key={a}>{a}</li>)}
                </ul>
                <p>ZIP codes: {page.zips}. Our local crew serves {page.cityName}.</p>
                <p>
                  Nearby:{" "}
                  {page.nearby.map(([href, label], i) => (
                    <span key={href}>
                      {i > 0 ? " · " : ""}
                      <Link href={href} className="font-semibold text-[hsl(var(--primary))] hover:underline">{label}</Link>
                    </span>
                  ))}
                </p>
              </section>
              <section className="space-y-4">
                <h2 className="mt-10 text-2xl font-bold">{page.relatedTitle}</h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {page.related.map(([href, label]) => (
                    <li key={href} className="rounded-xl border border-[hsl(var(--border))] p-4">
                      <Link href={href} className="font-semibold text-[hsl(var(--primary))] hover:underline">{label}</Link>
                    </li>
                  ))}
                </ul>
              </section>
              <section className="space-y-2">
                <h2 className="mt-10 text-2xl font-bold">We come to you</h2>
                <p>
                  {siteConfig.name} · 12021 Tuscany Bay Dr, Tampa, FL 33626 ·{" "}
                  <a href={`tel:${siteConfig.phoneTel}`} className="font-semibold">{siteConfig.phone}</a>
                </p>
                <p>Our local crew serves {page.cityName}. Licensed and insured. Free estimates on all jobs.</p>
              </section>
            </div>
          </div>
        </div>
      </article>
      <section className="container-site mx-auto max-w-3xl pb-10">
        <h2 className="mb-4 text-2xl font-bold">{page.formTitle}</h2>
        <p className="mb-4">Free estimates on all jobs.</p>
        <QuoteForm defaultCity={page.cityName} heading="Describe the job" />
      </section>
      <section className="container-site mx-auto max-w-3xl pb-6">
        <h2 className="mb-3 text-2xl font-bold">Google reviews</h2>
      </section>
      <GoogleReviews variant="compact" />
      <FAQSection faqs={page.faqs} title={page.faqTitle} />
      <section className="section-padding">
        <div className="container-site mx-auto max-w-3xl rounded-3xl bg-[hsl(var(--primary))] p-8 text-center text-white">
          <p className="mb-6 text-xl font-bold">Free estimates on all jobs. Call {siteConfig.phone}.</p>
          <a href={`tel:${siteConfig.phoneTel}`} className="btn-accent inline-flex items-center gap-2">
            <Phone className="h-4 w-4" /> Call {siteConfig.phone}
          </a>
        </div>
      </section>
    </>
  );
}
