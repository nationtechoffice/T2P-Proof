"use client";

import { TiltCard } from "@/components/tilt-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Fan, Hammer, Monitor, SprayCan } from "lucide-react";

const featuredServices = [
  {
    title: "Drywall Repair",
    description: "Clean patches, texture matching, and paint-ready finishes for Tampa homes.",
    href: "/services/handyman/drywall-repair",
    imageSrc: "/images/cinematic/service-drywall.jpg",
    imageAlt: "Professional drywall patching and finishing in a modern Florida home",
    icon: <Hammer className="h-5 w-5" />,
  },
  {
    title: "TV Mounting",
    description: "Centered, secure wall mounts with clean cable routing and level results.",
    href: "/services/handyman/tv-mounting",
    imageSrc: "/images/cinematic/service-tv-mount.jpg",
    imageAlt: "Flat-screen TV professionally mounted on a living room wall",
    icon: <Monitor className="h-5 w-5" />,
  },
  {
    title: "Pressure Washing",
    description: "Restore driveways, lanais, and siding with careful Florida-safe cleaning.",
    href: "/services/handyman/cleaning",
    imageSrc: "/images/cinematic/service-pressure-wash.jpg",
    imageAlt: "Pressure washing a Florida home exterior driveway and siding",
    icon: <SprayCan className="h-5 w-5" />,
  },
  {
    title: "Ceiling Fans",
    description: "Safe installs, balancing, and replacements that cool rooms without wobble.",
    href: "/services/handyman/fan-installation",
    imageSrc: "/images/cinematic/service-ceiling-fan.jpg",
    imageAlt: "Ceiling fan installation in a bright Florida bedroom",
    icon: <Fan className="h-5 w-5" />,
  },
] as const;

export function FeaturedServiceCards() {
  return (
    <section
      className="section-padding relative pt-4 md:pt-8"
      aria-labelledby="featured-services-heading"
    >
      <div className="container-site">
        <ScrollReveal className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[hsl(var(--accent))]">
            Signature Craftsmanship
          </p>
          <h2 id="featured-services-heading" className="mb-4 text-3xl font-bold md:text-4xl">
            High-Demand Services Across Tampa &amp; Pinellas
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))]">
            Interactive depth cards for the jobs Tampa Bay homeowners book most — hover to feel the craftsmanship.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {featuredServices.map((service, index) => (
            <ScrollReveal key={service.href} delay={index * 0.08} variant="scale-in">
              <TiltCard
                href={service.href}
                title={service.title}
                description={service.description}
                imageSrc={service.imageSrc}
                imageAlt={service.imageAlt}
                icon={service.icon}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
