import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { siteImages } from "@/lib/images";
import { Shield, Clock, Star, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(200,75%,32%)] to-[hsl(var(--secondary))] opacity-95" />
      <div className="hero-shimmer absolute inset-0" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -right-20 -top-20 h-96 w-96 animate-pulse rounded-full bg-[hsl(var(--accent))]" />
        <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-[hsl(var(--florida-sky))]" style={{ animation: "florida-float 15s ease-in-out infinite" }} />
      </div>

      <div className="container-site relative section-padding">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-white">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-[hsl(var(--accent))]" />
              Tampa &amp; Surrounding Counties — Free Estimates
            </p>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
              Your Tampa Handyman — Done Right, Done Fast
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-blue-100 md:text-xl">
              Furniture assembly, drywall repair, painting, fences, and emergency fixes across Tampa, Westchase, Carrollwood, Citrus Park &amp; Town &apos;n&apos; Country.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href={`tel:${siteConfig.phoneTel}`} className="btn-accent w-full sm:w-auto">
                Call {siteConfig.phone}
              </a>
              <Link href="/services" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-[hsl(var(--primary))] w-full sm:w-auto">
                View Our Services
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { icon: Shield, label: "Licensed & Insured" },
                { icon: Clock, label: "Same-Day Service" },
                { icon: Star, label: "5-Star Rated" },
                { icon: MapPin, label: "Truly Local" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2 rounded-xl bg-white/10 p-3 backdrop-blur-sm">
                  <Icon className="h-6 w-6 text-[hsl(var(--accent))]" />
                  <span className="text-center text-xs font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-4 border-white/20 shadow-2xl">
              <Image
                src={siteImages.hero.src}
                alt={siteImages.hero.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary))]/40 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-[hsl(var(--accent))] px-4 py-2 text-sm font-bold text-white shadow-lg">
              Mon–Fri 10AM – 6PM
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
