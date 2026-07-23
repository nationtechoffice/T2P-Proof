import Link from "next/link";
import { categoryMeta, getServicesByCategory } from "@/lib/services";
import type { ServiceCategory } from "@/lib/site-config";
import { Wrench, Paintbrush, Fence } from "lucide-react";

const icons = { wrench: Wrench, paintbrush: Paintbrush, fence: Fence };

export function ServicesGrid() {
  const categories: ServiceCategory[] = ["handyman", "painting", "fence"];

  return (
    <section className="section-padding bg-[hsl(var(--muted))]">
      <div className="container-site">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Professional Services</h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))]">
            From quick fixes to complete remodels, Handyman Pros Florida delivers expert craftsmanship across three core service categories.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((cat) => {
            const meta = categoryMeta[cat];
            const Icon = icons[meta.icon as keyof typeof icons];
            const services = getServicesByCategory(cat);
            return (
              <div key={cat} className="card flex flex-col">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[hsl(var(--primary))]/10">
                  <Icon className="h-7 w-7 text-[hsl(var(--primary))]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">{meta.name}</h3>
                <p className="mb-4 flex-1 text-sm text-[hsl(var(--muted-foreground))]">{meta.description}</p>
                <p className="mb-4 text-sm font-medium text-[hsl(var(--secondary))]">{services.length} services available</p>
                <Link href={`/services/${cat}`} className="btn-primary text-center">
                  Explore {meta.name}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
