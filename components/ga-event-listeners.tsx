"use client";

import { useEffect } from "react";
import { siteConfig } from "@/lib/site-config";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const PHONE_DIGITS = new Set([
  siteConfig.phoneTel,
  siteConfig.phoneE164.replace(/\D/g, ""),
]);

function telDigits(href: string): string | null {
  if (!href.toLowerCase().startsWith("tel:")) return null;
  return href.slice(4).replace(/\D/g, "");
}

function isPhoneTelLink(anchor: HTMLAnchorElement): boolean {
  const digits = telDigits(anchor.getAttribute("href") ?? "");
  return digits !== null && PHONE_DIGITS.has(digits);
}

function isEstimateLink(anchor: HTMLAnchorElement): boolean {
  const href = anchor.getAttribute("href") ?? "";
  if (!href) return false;
  try {
    const pathname = href.startsWith("http")
      ? new URL(href).pathname
      : href.split(/[#?]/)[0];
    return pathname === "/free-estimate" || pathname.endsWith("/free-estimate");
  } catch {
    return href.includes("/free-estimate");
  }
}

/** Site-wide click tracking for GA4 conversion events (no visible UI). */
export function GaEventListeners() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const gtag = window.gtag;
      if (typeof gtag !== "function") return;

      const anchor = event.target instanceof Element ? event.target.closest("a") : null;
      if (!anchor) return;

      if (isPhoneTelLink(anchor)) {
        gtag("event", "phone_click");
      } else if (isEstimateLink(anchor)) {
        gtag("event", "estimate_click");
      }
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
