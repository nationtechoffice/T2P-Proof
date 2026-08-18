import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { allLocationLinks } from "@/lib/location-silos";
import { popularServiceLinks, sitelinkNav } from "@/lib/internal-links";
import { BusinessNAP } from "@/components/business-nap";
import { Logo } from "@/components/logo";
import { MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-[hsl(200,60%,12%)] to-[hsl(200,70%,18%)] text-gray-300">
      <div className="container-site section-padding">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="mb-4">
              <Logo variant="light" />
            </div>
            <p className="entity-definition mb-4 text-sm leading-relaxed">
              Handyman Pros FL is a licensed and insured mobile handyman provider based in Westchase, Tampa, FL offering 24/7 emergency repairs, drywall patching, painting, and fence contracting across Tampa Bay.
            </p>
            <BusinessNAP />
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Related Services</h3>
            <ul className="space-y-1 text-sm">
              {popularServiceLinks.slice(0, 8).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="flex min-h-12 items-center hover:text-[hsl(var(--accent))]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mb-2 mt-6 text-sm font-bold uppercase tracking-wider text-white">Company</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="/about" className="flex min-h-12 items-center hover:text-[hsl(var(--accent))]">About Us</Link></li>
              <li><Link href="/blog" className="flex min-h-12 items-center hover:text-[hsl(var(--accent))]">Blog &amp; Tips</Link></li>
              <li><Link href="/contact" className="flex min-h-12 items-center hover:text-[hsl(var(--accent))]">Contact Us</Link></li>
              <li><Link href="/search" className="flex min-h-12 items-center hover:text-[hsl(var(--accent))]">Search</Link></li>
              <li><Link href="/service-areas" className="flex min-h-12 items-center hover:text-[hsl(var(--accent))]">All Service Areas</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Core Categories</h3>
            <ul className="flex flex-wrap gap-2">
              {sitelinkNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-12 items-center rounded-full border border-white/20 px-4 py-2 text-sm hover:border-[hsl(var(--accent))] hover:text-[hsl(var(--accent))]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-start gap-2 text-sm">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--accent))]" />
              <address className="not-italic">
                {siteConfig.address.street}, {siteConfig.address.street2}<br />
                {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
              </address>
            </div>
            <p className="mt-4 text-sm">
              Call{" "}
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="inline-flex min-h-12 items-center font-semibold text-white hover:text-[hsl(var(--accent))]"
                aria-label="Call Handyman Pros Florida Now"
              >
                {siteConfig.phone}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-10">
          <h3 className="mb-5 text-center text-sm font-bold uppercase tracking-wider text-white">
            Service Areas
          </h3>
          <nav aria-label="Florida service area pages">
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {allLocationLinks.map((area) => (
                <li key={area.href}>
                  <Link
                    href={area.href}
                    className="flex min-h-12 items-center rounded-md px-1 text-gray-300 transition-colors hover:bg-white/5 hover:text-[hsl(var(--accent))]"
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
            {siteConfig.address.street}, {siteConfig.address.street2}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip} | Licensed &amp; Insured | Open 24/7 | Price range $$
          </p>
        </div>
      </div>
    </footer>
  );
}
