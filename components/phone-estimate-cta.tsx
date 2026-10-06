import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { instantEstimate } from "@/lib/instant-estimate";

export function PhoneEstimateCta({
  className = "",
  label,
  phoneTel,
}: {
  className?: string;
  /** Visible label. Defaults to the sitewide instant-estimate CTA. */
  label?: string;
  /** tel: value. Defaults to the sitewide dial string. */
  phoneTel?: string;
}) {
  return (
    <a
      href={`tel:${phoneTel ?? siteConfig.phoneTel}`}
      className={`btn-accent inline-flex items-center justify-center gap-2 ${className}`}
    >
      <Phone className="h-4 w-4" />
      {label ?? `${instantEstimate.ctaLabel} — ${siteConfig.phone}`}
    </a>
  );
}
