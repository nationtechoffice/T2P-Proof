"use client";

import { TiltCard } from "@/components/tilt-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SpatialField } from "@/components/spatial-field";
import { Fan, Fence, Hammer, Monitor } from "lucide-react";

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
    title: "Fence Repair",
    description: "Storm-damaged pickets, leaning posts, and privacy fence fixes across Tampa Bay.",
    href: "/services/fence",
    imageSrc: "/images/work/fence-repair.jpg",
    imageAlt: "Wood privacy fence repair with new pickets in a Tampa Bay backyard",
    icon: <Fence className="h-5 w-5" />,
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
      className="section-padding relative overflow-hidden pt-4 md:pt-8"
      aria-labelledby="featured-services-heading"
    >
      <SpatialField className="absolute inset-0 opacity-70" intensity={0.4} tone="light" />
      <div className="container-site relative z-10">
        <ScrollReveal className="mx-auto mb-12 max-w-3xl text-center" variant="flip-up">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[hsl(var(--accent))]">
            Tampa Bay Favorites
          </p>
          <h2 id="featured-services-heading" className="mb-4 text-3xl font-bold md:text-4xl">
            Top Handyman Services in Tampa &amp; Pinellas
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))]">
            Drywall repair, TV mounting, fence repair, and ceiling fans — the jobs Tampa Bay homeowners call for most.
          </p>
        </ScrollReveal>

        <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {featuredServices.map((service, index) => (
            <ScrollReveal
              key={service.href}
              delay={index * 0.1}
              variant={index % 2 === 0 ? "flip-up" : "swing-in"}
            >
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
