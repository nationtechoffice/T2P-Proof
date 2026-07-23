import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

interface CTASectionProps {
  title?: string;
  description?: string;
}

export function CTASection({
  title = "Need It Fixed Fast? Call Now for a Free Quote.",
  description = "Licensed & insured local handyman service across Tampa & Hillsborough County — same-day help available for urgent jobs.",
}: CTASectionProps) {
  return (
    <section className="section-padding relative">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(200,75%,32%)] to-[hsl(var(--secondary))] p-8 text-center text-white shadow-2xl md:p-12">
          <div className="hero-shimmer pointer-events-none absolute inset-0 rounded-3xl" />
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{title}</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">{description}</p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={`tel:${siteConfig.phoneTel}`} className="btn-accent w-full sm:w-auto">
                Call {siteConfig.phone}
              </a>
              <Link href="/contact" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-[hsl(var(--primary))] w-full sm:w-auto">
                Request Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
