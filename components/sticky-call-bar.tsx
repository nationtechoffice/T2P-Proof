"use client";

import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

/** Mobile sticky click-to-call bar — remains fixed at bottom of viewport */
export function StickyCallBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-[hsl(var(--border))] bg-white/95 p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.12)] backdrop-blur-md lg:hidden"
      role="complementary"
      aria-label="Click to call"
    >
      <a
        href={`tel:${siteConfig.phoneTel}`}
        className="btn-accent flex w-full items-center justify-center gap-2 py-3.5 text-base"
      >
        <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
        <span>Call Now — {siteConfig.phone}</span>
      </a>
    </div>
  );
}
