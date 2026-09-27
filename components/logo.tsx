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
  "Handyman Pros Florida logo with an orange-outlined black shield, two crossed royal blue wrenches and the stacked HANDYMAN PROS FLORIDA wordmark";

export function Logo({ className, priority = false, variant = "default" }: LogoProps) {
  const src =
    variant === "light"
      ? "/images/handyman-pros-florida-logo-light.svg"
      : "/images/handyman-pros-florida-logo.svg";

  return (
    <Link
      href="/"
      className={cn("inline-flex items-center", className)}
      aria-label={`${siteConfig.shortName} - Home`}
    >
      <Image
        src={src}
        alt={LOGO_ALT}
        width={270}
        height={112}
        priority={priority}
        className="h-10 w-auto max-w-[180px] object-contain object-left sm:h-11 sm:max-w-[220px] md:h-12 md:max-w-[240px]"
      />
    </Link>
  );
}
