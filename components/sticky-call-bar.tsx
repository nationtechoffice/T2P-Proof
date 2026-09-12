import { siteConfig } from "@/lib/site-config";
import { ClipboardList, Phone } from "lucide-react";

/** Sticky dual CTA — stays above video / 3D canvases (z-[60]). */
export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-white/10 bg-slate-950/95 p-2.5 shadow-[0_-10px_28px_rgba(0,0,0,0.35)] backdrop-blur-md md:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        <a
          href={`tel:${siteConfig.phoneTel}`}
          className="inline-flex min-h-12 items-center justify-center gap-1.5 rounded-xl bg-[hsl(var(--accent))] px-3 text-sm font-bold text-white"
        >
          <Phone className="h-4 w-4 shrink-0" aria-hidden />
          Call Now
        </a>
        <a
          href="/contact"
          className="inline-flex min-h-12 items-center justify-center gap-1.5 rounded-xl border border-white/25 bg-white/10 px-3 text-sm font-bold text-white"
        >
          <ClipboardList className="h-4 w-4 shrink-0" aria-hidden />
          Get Fast Estimate
        </a>
      </div>
    </div>
  );
}
