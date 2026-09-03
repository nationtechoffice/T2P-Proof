"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
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

function DesktopDropdown({
  items,
  open,
}: {
  items: { href: string; label: string }[];
  open: boolean;
}) {
  return (
    <div
      className={`absolute left-0 top-full z-50 min-w-[240px] pt-2 ${open ? "" : "pointer-events-none"}`}
    >
      <ul
        aria-hidden={!open}
        className={`max-h-[70vh] overflow-y-auto rounded-xl border border-[hsl(var(--border))] bg-white py-2 shadow-lg ${
          open ? "visible opacity-100" : "invisible opacity-0"
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
  const pathname = usePathname();
  const menuId = useId();
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(108);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState<"services" | "areas" | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<"services" | "areas" | null>(null);

  useEffect(() => {
    setMobileOpen(false);
    setMobileAccordion(null);
    setDesktopDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const node = headerRef.current;
    if (!node) return;
    const update = () => setHeaderHeight(node.getBoundingClientRect().height);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(node);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  function closeMobile() {
    setMobileOpen(false);
    setMobileAccordion(null);
  }

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-[70] border-b border-[hsl(var(--border))] bg-white/95 backdrop-blur-md"
      >
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
                  onMouseEnter={() => setDesktopDropdown(link.dropdown!)}
                  onMouseLeave={() => setDesktopDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1 text-sm font-medium text-[hsl(var(--foreground))] transition-colors hover:text-[hsl(var(--accent))]"
                    aria-expanded={desktopDropdown === link.dropdown}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </Link>
                  <DesktopDropdown
                    open={desktopDropdown === link.dropdown}
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
            <a href={`tel:${siteConfig.phoneTel}`} className="btn-accent !px-4 !py-2.5 !text-sm font-bold shadow-lg">
              Call {siteConfig.phone}
            </a>
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg lg:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls={menuId}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {mobileOpen ? (
        <nav
          id={menuId}
          aria-label="Mobile navigation"
          className="fixed inset-x-0 z-[80] overflow-y-auto overscroll-contain bg-white lg:hidden"
          style={{
            top: headerHeight,
            bottom: "5.5rem",
          }}
        >
          <div className="border-t border-[hsl(var(--border))] px-4 py-3">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.href} className="border-b border-[hsl(var(--border))]">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-3 text-left text-base font-semibold"
                    aria-expanded={mobileAccordion === link.dropdown}
                    onClick={() =>
                      setMobileAccordion((current) => (current === link.dropdown ? null : link.dropdown!))
                    }
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 transition-transform ${
                        mobileAccordion === link.dropdown ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileAccordion === link.dropdown ? (
                    <ul className="mb-3 space-y-1 border-l border-[hsl(var(--border))] pb-2 pl-3">
                      {(link.dropdown === "services" ? serviceLinks : areaLinks).map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="block py-2 text-sm text-[hsl(var(--muted-foreground))]"
                            onClick={closeMobile}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block border-b border-[hsl(var(--border))] py-3 text-base font-semibold"
                  onClick={closeMobile}
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="btn-accent mt-4 flex w-full items-center justify-center gap-2 font-bold"
            >
              <Phone className="h-4 w-4" />
              Instant Phone Estimate: {siteConfig.phone}
            </a>
          </div>
        </nav>
      ) : null}
    </>
  );
}
