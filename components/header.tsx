"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { targetLocations } from "@/lib/programmatic";
import { Logo } from "@/components/logo";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const serviceLinks = [
  { href: "/services/tv-wall-mounting", label: "TV Wall Mounting" },
  { href: "/services/drywall-repair", label: "Drywall Repair" },
  { href: "/services/electrical-fixture-installation", label: "Electrical Fixtures" },
  { href: "/services/plumbing-fixture-repair", label: "Plumbing Fixtures" },
  { href: "/services/furniture-assembly", label: "Furniture Assembly" },
  { href: "/services/door-repair", label: "Door Repair" },
  { href: "/services", label: "All Services" },
];

const areaLinks = [
  ...targetLocations.map((location) => ({
    href: `/locations/${location.slug}`,
    label: `Handyman ${location.city} FL`,
  })),
  { href: "/locations", label: "All Tampa Bay locations" },
  { href: "/service-areas", label: "All Service Areas" },
];

type NavLink = {
  href: string;
  label: string;
  dropdown?: "services" | "areas";
};

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services", dropdown: "services" },
  { href: "/locations", label: "Locations", dropdown: "areas" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function DropdownMenu({
  items,
  open,
}: {
  items: { href: string; label: string }[];
  open: boolean;
}) {
  return (
    <div
      className={`absolute left-0 top-full z-50 min-w-[240px] pt-2 ${open ? "" : "lg:pointer-events-none"}`}
    >
      <ul
        aria-hidden={!open}
        className={`max-h-[70vh] overflow-y-auto rounded-xl border border-[hsl(var(--border))] bg-white py-2 shadow-lg ${
          open ? "lg:visible lg:opacity-100" : "lg:invisible lg:opacity-0"
        }`}
      >
        {items.map((item) => (
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
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<"services" | "areas" | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-[hsl(var(--border))] bg-white/90 backdrop-blur-md">
      <div className="bg-[hsl(var(--accent))] py-2.5 text-center text-sm font-bold text-white">
        <a href={`tel:${siteConfig.phoneTel}`} className="inline-flex items-center gap-2 hover:underline">
          <Phone className="h-4 w-4" />
          Instant Phone Estimate · 24/7 · Call {siteConfig.phone}
        </a>
      </div>
      <div className="container-site flex h-16 items-center justify-between">
        <Logo priority />

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.dropdown!)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-[hsl(var(--foreground))] transition-colors hover:text-[hsl(var(--accent))]"
                  aria-expanded={openDropdown === link.dropdown}
                  aria-haspopup="true"
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                <DropdownMenu
                  open={openDropdown === link.dropdown}
                  items={link.dropdown === "services" ? serviceLinks : areaLinks}
                />
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
          <a href={`tel:${siteConfig.phoneTel}`} className="btn-accent !py-2.5 !px-4 !text-sm font-bold shadow-lg">
            Call {siteConfig.phone}
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
              {link.dropdown === "services" && (
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
              {link.dropdown === "areas" && (
                <ul className="mb-2 ml-3 space-y-1 border-l border-[hsl(var(--border))] pl-3">
                  {areaLinks.map((item) => (
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
          <a href={`tel:${siteConfig.phoneTel}`} className="btn-accent mt-3 w-full font-bold">
            Instant Phone Estimate: {siteConfig.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
