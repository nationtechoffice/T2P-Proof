import { siteConfig } from "@/lib/site-config";
import { formatFullAddress, getGoogleMapsUrl } from "@/lib/local-seo";
import { Phone, Mail, MapPin } from "lucide-react";

export function BusinessNAP({ className = "" }: { className?: string }) {
  const fullAddress = formatFullAddress();

  return (
    <div className={`space-y-3 text-sm ${className}`} itemScope itemType="https://schema.org/LocalBusiness">
      <meta itemProp="name" content={siteConfig.name} />
      <meta itemProp="telephone" content={siteConfig.phoneTel} />
      <meta itemProp="email" content={siteConfig.email} />
      <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
        <meta itemProp="streetAddress" content={`${siteConfig.address.street}, ${siteConfig.address.street2}`} />
        <meta itemProp="addressLocality" content={siteConfig.address.city} />
        <meta itemProp="addressRegion" content={siteConfig.address.state} />
        <meta itemProp="postalCode" content={siteConfig.address.zip} />
        <meta itemProp="addressCountry" content={siteConfig.address.country} />
      </div>
      <a href={`tel:${siteConfig.phoneTel}`} className="flex items-center gap-2 hover:text-[hsl(var(--accent))]">
        <Phone className="h-4 w-4 shrink-0" />
        <span itemProp="telephone">{siteConfig.phone}</span>
      </a>
      <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-[hsl(var(--accent))]">
        <Mail className="h-4 w-4 shrink-0" />
        <span itemProp="email">{siteConfig.email}</span>
      </a>
      <a
        href={getGoogleMapsUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start gap-2 hover:text-[hsl(var(--accent))]"
      >
        <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
        <span>{fullAddress}</span>
      </a>
    </div>
  );
}
