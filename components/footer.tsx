import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { allLocationLinks } from "@/lib/location-silos";
import { coreServices, targetLocations } from "@/lib/programmatic";
import { BusinessNAP } from "@/components/business-nap";
import { Logo } from "@/components/logo";
import { MapPin } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const footerServiceLinks = [
  ...coreServices.map((service) => ({
    href: `/services/${service.slug}`,
    label: service.name,
  })),
  { href: "/services/fence", label: "Fence service list" },
  { href: "/services/painting", label: "Painting" },
  { href: "/services", label: "All Services" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-[hsl(0,0%,4%)] to-[hsl(224,40%,10%)] text-gray-300">
      <div className="container-site section-padding">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="mb-4">
              <Logo variant="light" />
            </div>
            <p className="mb-4 text-sm leading-relaxed">
              One Tampa location in Westchase. Licensed mobile handyman serving Hillsborough, Pinellas, Pasco &amp; surrounding counties — open 24/7. We come to you.
            </p>
            <p className="mb-4 text-sm leading-relaxed">
              <span lang="es" className="font-semibold text-white">Hablamos español</span>
              {" — "}
              Spanish-speaking phone estimates for reparaciones del hogar. Call{" "}
              <a href={`tel:${siteConfig.phoneTel}`} className="font-semibold text-white hover:text-[hsl(var(--accent))]">
                {siteConfig.phone}
              </a>
              .
            </p>
            <BusinessNAP />
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener"
              aria-label="Handyman Pros Florida on Instagram"
              className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--primary))] text-white transition-colors hover:bg-[hsl(var(--accent))] focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--accent))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(0,0%,4%)]"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              {footerServiceLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-[hsl(var(--accent))]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mb-4 mt-8 text-sm font-bold uppercase tracking-wider text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-[hsl(var(--accent))]">About Us</Link></li>
              <li><Link href="/work" className="hover:text-[hsl(var(--accent))]">Work Photos</Link></li>
              <li><Link href="/blog" className="hover:text-[hsl(var(--accent))]">Blog &amp; Tips</Link></li>
              <li><Link href="/contact" className="hover:text-[hsl(var(--accent))]">Contact Us</Link></li>
              <li><Link href="/locations" className="hover:text-[hsl(var(--accent))]">Tampa Bay Locations</Link></li>
              <li><Link href="/service-areas" className="hover:text-[hsl(var(--accent))]">All Service Areas</Link></li>
              <li><Link href="/locations/westchase-fl" className="hover:text-[hsl(var(--accent))]">Westchase HQ</Link></li>
              <li>
                <a
                  href={siteConfig.social.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[hsl(var(--accent))]"
                >
                  Leave a Review
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="mt-6 flex items-start gap-2 text-sm lg:mt-0">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--accent))]" />
              <address className="not-italic">
                {siteConfig.address.street}<br />
                {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
              </address>
            </div>
            <p className="mt-4 text-sm">
              Call{" "}
              <a href={`tel:${siteConfig.phoneTel}`} className="font-semibold text-white hover:text-[hsl(var(--accent))]">
                {siteConfig.phone}
              </a>
              {" · "}
              <a href={`mailto:${siteConfig.email}`} className="font-semibold text-white hover:text-[hsl(var(--accent))]">
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-10">
          <h3 className="mb-5 text-center text-sm font-bold uppercase tracking-wider text-white">
            Our Florida Service Areas
          </h3>
          <p className="mx-auto mb-5 max-w-2xl text-center text-xs text-gray-400">
            Coverage from our only Tampa / Westchase headquarters — not separate branches.
          </p>
          <nav aria-label="Florida service area pages">
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {targetLocations.map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/locations/${location.slug}`}
                    className="block rounded-md px-1 py-1.5 text-gray-300 transition-colors hover:bg-white/5 hover:text-[hsl(var(--accent))]"
                  >
                    {location.city}
                  </Link>
                </li>
              ))}
              {allLocationLinks
                .filter((area) => !targetLocations.some((location) => `/locations/${location.slug}` === area.href))
                .map((area) => (
                <li key={area.href}>
                  <Link
                    href={area.href}
                    className="block rounded-md px-1 py-1.5 text-gray-300 transition-colors hover:bg-white/5 hover:text-[hsl(var(--accent))]"
                  >
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {currentYear} {siteConfig.legalName}. All rights reserved.</p>
          <p className="mt-2 text-xs text-gray-500">
            {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip} | Licensed &amp; Insured | <span lang="es">Hablamos español</span> | Open 24/7 | Single Tampa location
          </p>
        </div>
      </div>
    </footer>
  );
}
