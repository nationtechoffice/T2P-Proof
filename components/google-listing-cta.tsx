import { Camera, Star } from "lucide-react";
import { googleBusiness } from "@/lib/google-business";

export function GoogleListingCta({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <a
        href={googleBusiness.shareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary inline-flex items-center justify-center gap-2"
      >
        <Star className="h-4 w-4 fill-[hsl(var(--accent))] text-[hsl(var(--accent))]" />
        Google reviews
      </a>
      <a
        href={googleBusiness.shareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary inline-flex items-center justify-center gap-2"
      >
        <Camera className="h-4 w-4" />
        Google photos
      </a>
    </div>
  );
}
