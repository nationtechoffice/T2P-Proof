import { Camera, Star } from "lucide-react";
import Link from "next/link";
import { googleBusiness } from "@/lib/google-business";

/** Small dual CTA: reviews stay external, photos go to our SEO /work page. */
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
        Reviews
      </a>
      <Link href="/work" className="btn-secondary inline-flex items-center justify-center gap-2">
        <Camera className="h-4 w-4" />
        Work photos
      </Link>
    </div>
  );
}
