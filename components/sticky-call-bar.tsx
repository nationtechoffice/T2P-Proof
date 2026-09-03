import { siteConfig } from "@/lib/site-config";
import { Phone } from "lucide-react";

export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-white/10 bg-[hsl(var(--primary))] p-3 shadow-[0_-8px_24px_rgba(0,0,0,0.2)] md:hidden">
      <a
        href={`tel:${siteConfig.phoneTel}`}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[hsl(var(--accent))] px-4 py-3 text-base font-bold text-white"
      >
        <Phone className="h-5 w-5" />
        Call Now for Instant Estimate: {siteConfig.phone}
      </a>
    </div>
  );
}
