import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  priority?: boolean;
  variant?: "default" | "light";
}

const LOGO_ALT =
  "Handyman Pros FL logo featuring an orange wrench icon and bold navy and orange text";

export function Logo({ className, priority = false, variant = "default" }: LogoProps) {
  const src = variant === "light" ? "/images/logo-light.svg" : "/images/logo.svg";

  return (
    <Link
      href="/"
      className={cn("inline-flex items-center", className)}
      aria-label={`${siteConfig.shortName} - Home`}
    >
      <Image
        src={src}
        alt={LOGO_ALT}
        width={220}
        height={40}
        priority={priority}
        className="h-8 w-auto max-w-[180px] object-contain object-left sm:h-9 sm:max-w-[220px] md:h-10 md:max-w-[240px]"
      />
    </Link>
  );
}
