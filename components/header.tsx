"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { Logo } from "@/components/logo";
import { Phone, Menu, X, MapPin, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services/drywall-repair-tampa", label: "Drywall Repair Tampa" },
  { href: "/services/handyman", label: "Handyman Services" },
  { href: "/services/painting", label: "Painting Services" },
  { href: "/services/fence", label: "Fence Contractor" },
  { href: "/services", label: "All Services" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[hsl(var(--border))] bg-white/90 backdrop-blur-md">
      <div className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] py-2 text-center text-sm text-white">
        <a href={`tel:${siteConfig.phoneTel}`} className="inline-flex items-center gap-2 font-medium hover:underline">
          <Phone className="h-4 w-4" />
          <MapPin className="h-3 w-3 text-[hsl(var(--accent))]" />
          Tampa Bay — Open 24/7 — Call for Free Estimate: {siteConfig.phone}
        </a>
      </div>
      <div className="container-site flex h-16 items-center justify-between">
        <Logo priority />

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-[hsl(var(--foreground))] transition-colors hover:text-[hsl(var(--accent))]"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                {servicesOpen && (
                  <div className="absolute left-0 top-full z-50 min-w-[220px] pt-2">
                    <ul className="rounded-xl border border-[hsl(var(--border))] bg-white py-2 shadow-lg">
                      {serviceLinks.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="block px-4 py-2 text-sm text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--accent))]"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[hsl(var(--foreground))] transition-colors hover:text-[hsl(var(--accent))]"
              >
                {link.label}
              </Link>
            )
          )}
          <a href={`tel:${siteConfig.phoneTel}`} className="btn-accent !py-2 !text-xs">
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
        <nav className="border-t border-[hsl(var(--border))] bg-white/95 px-4 py-4 backdrop-blur-md lg:hidden" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                className="block py-3 text-sm font-medium text-[hsl(var(--foreground))] hover:text-[hsl(var(--accent))]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.hasDropdown && (
                <ul className="mb-2 ml-3 space-y-1 border-l border-[hsl(var(--border))] pl-3">
                  {serviceLinks.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block py-1.5 text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--accent))]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <a href={`tel:${siteConfig.phoneTel}`} className="btn-accent mt-3 w-full">
            Call {siteConfig.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
