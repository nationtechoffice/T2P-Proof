import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Shield, Clock, Star, Award } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(210,100%,35%)] via-[hsl(210,80%,30%)] to-[hsl(152,60%,30%)] text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/20" />
        <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-white/10" />
      </div>
      <div className="container-site relative section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
            Serving All of Florida — Free Estimates
          </p>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
            Florida&apos;s #1 Handyman, Painting &amp; Fence Experts
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-blue-100 md:text-xl">
            {siteConfig.tagline}. Licensed handymen, painters, and fence contractors ready to tackle any home project — big or small.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={`tel:${siteConfig.phoneTel}`} className="btn-accent w-full sm:w-auto">
              Get Your Free Estimate
            </a>
            <Link href="/services" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-[hsl(var(--primary))] w-full sm:w-auto">
              View Our Services
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { icon: Shield, label: "Licensed & Insured" },
              { icon: Clock, label: "Same-Day Service" },
              { icon: Star, label: "5-Star Rated" },
              { icon: Award, label: "Satisfaction Guaranteed" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <Icon className="h-8 w-8 text-[hsl(var(--accent))]" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
