import Link from "next/link";
import Image from "next/image";
import { categoryMeta, getServicesByCategory } from "@/lib/services";
import type { ServiceCategory } from "@/lib/site-config";
import { siteImages } from "@/lib/images";
import { Wrench, Paintbrush, Fence } from "lucide-react";

const icons = { wrench: Wrench, paintbrush: Paintbrush, fence: Fence };

const categoryImages: Record<ServiceCategory, { src: string; alt: string }> = {
  handyman: siteImages.furnitureAssembly,
  painting: siteImages.painting,
  fence: siteImages.fenceRepair,
};

export function ServicesGrid() {
  const categories: ServiceCategory[] = ["handyman", "painting", "fence"];

  return (
    <section className="section-padding relative">
      <div className="container-site">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[hsl(var(--accent))]">
            What We Do
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Honest Handyman Work Across Tampa Bay</h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))]">
            Licensed professionals for handyman repairs, painting, and fence services throughout Hillsborough County and surrounding areas.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((cat) => {
            const meta = categoryMeta[cat];
            const Icon = icons[meta.icon as keyof typeof icons];
            const services = getServicesByCategory(cat);
            const image = categoryImages[cat];
            return (
              <div key={cat} className="card group overflow-hidden !p-0">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--foreground))]/80 via-[hsl(var(--foreground))]/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[hsl(var(--accent))] shadow-lg">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{meta.name}</h3>
                  <p className="mb-4 text-sm text-[hsl(var(--muted-foreground))]">{meta.description}</p>
                  <p className="mb-4 text-sm font-medium text-[hsl(var(--secondary))]">{services.length} services in Tampa area</p>
                  <Link href={`/services/${cat}`} className="btn-primary w-full text-center">
                    Explore {meta.name}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
