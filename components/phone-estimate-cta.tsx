import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { instantEstimate } from "@/lib/instant-estimate";

export function PhoneEstimateCta({ className = "" }: { className?: string }) {
  return (
    <a
      href={`tel:${siteConfig.phoneTel}`}
      className={`btn-accent inline-flex items-center justify-center gap-2 ${className}`}
    >
      <Phone className="h-4 w-4" />
      {instantEstimate.ctaLabel} — {siteConfig.phone}
    </a>
  );
}
