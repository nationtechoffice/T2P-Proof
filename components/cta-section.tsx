import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

interface CTASectionProps {
  title?: string;
  description?: string;
}

export function CTASection({
  title = "Ready to Start Your Project?",
  description = "Get a free, no-obligation estimate from Florida's trusted handyman professionals. Same-day service available.",
}: CTASectionProps) {
  return (
    <section className="section-padding bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(152,60%,35%)] text-white">
      <div className="container-site text-center">
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
    </section>
  );
}
