import { googleBusiness } from "@/lib/google-business";
import { formatFullAddress } from "@/lib/local-seo";

export function GoogleMapEmbed() {
  const query = encodeURIComponent(formatFullAddress());
  const src = `https://maps.google.com/maps?q=${query}&z=15&output=embed`;

  return (
    <div className="overflow-hidden rounded-2xl border border-[hsl(var(--border))]">
      <iframe
        title="Map of Handyman Pros FL Tampa headquarters"
        src={src}
        className="h-64 w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <a
        href={googleBusiness.shareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-white px-4 py-3 text-center text-sm font-semibold text-[hsl(var(--primary))] hover:underline"
      >
        Open our Google listing — reviews, photos, and directions
      </a>
    </div>
  );
}
