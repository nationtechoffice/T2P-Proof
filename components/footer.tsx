import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { BusinessNAP } from "@/components/business-nap";
import { Logo } from "@/components/logo";
import { MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-[hsl(200,60%,12%)] to-[hsl(200,70%,18%)] text-gray-300">
      <div className="container-site section-padding">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4">
              <Logo variant="light" />
            </div>
            <p className="mb-4 text-sm leading-relaxed">
              Based in Westchase, Tampa. Licensed mobile handyman serving Hillsborough, Pinellas, Pasco &amp; surrounding counties — open 24/7.
            </p>
            <BusinessNAP />
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/handyman" className="hover:text-[hsl(var(--accent))]">Handyman Tampa</Link></li>
              <li><Link href="/services/drywall-repair-tampa" className="hover:text-[hsl(var(--accent))]">Drywall Repair Tampa</Link></li>
              <li><Link href="/services/painting" className="hover:text-[hsl(var(--accent))]">Painting Tampa</Link></li>
              <li><Link href="/services/fence" className="hover:text-[hsl(var(--accent))]">Fence Contractor Tampa</Link></li>
              <li><Link href="/services" className="hover:text-[hsl(var(--accent))]">All Services</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Our Service Areas</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/handyman-westchase-fl" className="hover:text-[hsl(var(--accent))]">Handyman Westchase FL</Link></li>
              <li><Link href="/handyman-carrollwood-fl" className="hover:text-[hsl(var(--accent))]">Handyman Carrollwood FL</Link></li>
              <li><Link href="/service-areas" className="hover:text-[hsl(var(--accent))]">Citrus Park</Link></li>
              <li><Link href="/service-areas" className="hover:text-[hsl(var(--accent))]">All Service Areas</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-[hsl(var(--accent))]">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-[hsl(var(--accent))]">Blog &amp; Tips</Link></li>
              <li><Link href="/contact" className="hover:text-[hsl(var(--accent))]">Contact Us</Link></li>
            </ul>
            <div className="mt-6 flex items-start gap-2 text-sm">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--accent))]" />
              <address className="not-italic">
                {siteConfig.address.street}, {siteConfig.address.street2}<br />
                {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
              </address>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p className="mt-2 text-xs text-gray-500">
            {siteConfig.address.street}, {siteConfig.address.street2}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip} | Licensed &amp; Insured | Open 24/7
          </p>
        </div>
      </div>
    </footer>
  );
}
