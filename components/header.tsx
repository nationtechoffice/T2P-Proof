"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[hsl(var(--border))] bg-white/95 backdrop-blur-sm">
      <div className="bg-[hsl(var(--primary))] py-2 text-center text-sm text-white">
        <a href={`tel:${siteConfig.phoneTel}`} className="inline-flex items-center gap-2 font-medium hover:underline">
          <Phone className="h-4 w-4" />
          Call Now for a Free Estimate: {siteConfig.phone}
        </a>
      </div>
      <div className="container-site flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label={`${siteConfig.name} - Home`}>
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[hsl(var(--primary))] text-lg font-bold text-white">
            HP
          </div>
          <div className="hidden sm:block">
            <span className="text-lg font-bold text-[hsl(var(--primary))]">Handyman Pros</span>
            <span className="block text-xs font-medium text-[hsl(var(--secondary))]">Florida</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[hsl(var(--foreground))] transition-colors hover:text-[hsl(var(--primary))]"
            >
              {link.label}
            </Link>
          ))}
          <a href={`tel:${siteConfig.phoneTel}`} className="btn-primary !py-2 !text-xs">
            Free Estimate
          </a>
        </nav>

        <button
          className="rounded-lg p-2 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-[hsl(var(--border))] bg-white px-4 py-4 lg:hidden" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-sm font-medium text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))]"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a href={`tel:${siteConfig.phoneTel}`} className="btn-primary mt-3 w-full">
            Call {siteConfig.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
