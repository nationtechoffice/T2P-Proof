import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function MobileCallBar() {
  return (
    <div className="mobile-call-bar md:hidden">
      <a
        href={`tel:${siteConfig.phoneTel}`}
        className="mobile-call-bar__button"
        aria-label="Call Handyman Pros Florida Now"
      >
        <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
        <span>Call Now</span>
        <span className="font-semibold tracking-wide">{siteConfig.phone}</span>
      </a>
    </div>
  );
}
