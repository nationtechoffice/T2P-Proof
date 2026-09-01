import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { formatFullAddress } from "@/lib/local-seo";
import { MapPin } from "lucide-react";

export function HqDispatch({ area }: { area?: string }) {
  const destination = area ? ` to ${area}` : " across Tampa Bay";

  return (
    <aside className="rounded-2xl border border-[hsl(var(--border))] bg-white/80 p-6">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[hsl(var(--accent))]">
        One Tampa location
      </p>
      <h2 className="mb-3 text-xl font-bold">We come to you from Westchase HQ</h2>
      <p className="mb-4 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
        Handyman Pros FL operates a single branch at {formatFullAddress()}. Licensed technicians
        dispatch{destination} — there are no extra storefronts or franchise offices.
      </p>
      <p className="flex items-start gap-2 text-sm">
        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--accent))]" />
        <span>
          {siteConfig.address.street}, {siteConfig.address.street2}, {siteConfig.address.city},{" "}
          {siteConfig.address.state} {siteConfig.address.zip}
        </span>
      </p>
      <p className="mt-4 text-sm">
        <Link href="/handyman-westchase-fl" className="font-semibold text-[hsl(var(--primary))] hover:underline">
          Westchase headquarters page
        </Link>
        {" · "}
        <Link href="/service-areas" className="font-semibold text-[hsl(var(--primary))] hover:underline">
          All service areas
        </Link>
        {" · "}
        <Link href="/contact" className="font-semibold text-[hsl(var(--primary))] hover:underline">
          Contact
        </Link>
      </p>
    </aside>
  );
}
