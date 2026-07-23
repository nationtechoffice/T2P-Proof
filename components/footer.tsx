import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(210,40%,12%)] text-gray-300">
      <div className="container-site section-padding">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[hsl(var(--primary))] text-lg font-bold text-white">
                HP
              </div>
              <div>
                <span className="text-lg font-bold text-white">Handyman Pros</span>
                <span className="block text-xs text-[hsl(var(--secondary))]">Florida</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Florida&apos;s trusted handyman, painting, and fence contractor. Licensed professionals serving homeowners statewide.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/handyman" className="hover:text-white">Handyman Services</Link></li>
              <li><Link href="/services/painting" className="hover:text-white">Painting Services</Link></li>
              <li><Link href="/services/fence" className="hover:text-white">Fence Contractor</Link></li>
              <li><Link href="/services" className="hover:text-white">All Services</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/service-areas" className="hover:text-white">Service Areas</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog & Tips</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:${siteConfig.phoneTel}`} className="flex items-center gap-2 hover:text-white">
                  <Phone className="h-4 w-4 shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-white">
                  <Mail className="h-4 w-4 shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Serving all of Florida</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p className="mt-2 text-xs text-gray-500">
            Licensed &amp; Insured | Free Estimates | Satisfaction Guaranteed
          </p>
        </div>
      </div>
    </footer>
  );
}
