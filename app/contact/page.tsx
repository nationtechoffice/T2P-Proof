"use client";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { QuoteForm } from "@/components/quote-form";
import { GoogleMapEmbed } from "@/components/google-map-embed";
import { GoogleListingCta } from "@/components/google-listing-cta";
import { siteConfig } from "@/lib/site-config";
import { formatFullAddress } from "@/lib/local-seo";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const fullAddress = formatFullAddress();

  return (
    <>
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <section className="section-padding">
        <div className="container-site">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold">Contact Handyman Pros FL — Tampa</h1>
            <p className="text-lg text-[hsl(var(--muted-foreground))]">
              Based at {fullAddress}. That is our only Tampa location. Call anytime — we&apos;re open 24/7 — or fill out the form for a free estimate. City pages on this site are service areas we drive to, not extra branches.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold">Get In Touch</h2>
              <div className="space-y-6">
                <a href={`tel:${siteConfig.phoneTel}`} className="flex items-start gap-4 rounded-xl border border-[hsl(var(--border))] bg-white/80 p-4 transition-colors hover:border-[hsl(var(--primary))]">
                  <Phone className="mt-1 h-6 w-6 text-[hsl(var(--primary))]" />
                  <div>
                    <p className="font-semibold">Phone — Open 24/7</p>
                    <p className="text-[hsl(var(--muted-foreground))]">{siteConfig.phone}</p>
                  </div>
                </a>
                <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-4 rounded-xl border border-[hsl(var(--border))] bg-white/80 p-4 transition-colors hover:border-[hsl(var(--primary))]">
                  <Mail className="mt-1 h-6 w-6 text-[hsl(var(--primary))]" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-[hsl(var(--muted-foreground))]">{siteConfig.email}</p>
                  </div>
                </a>
                <a
                  href={siteConfig.social.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 rounded-xl border border-[hsl(var(--border))] bg-white/80 p-4 transition-colors hover:border-[hsl(var(--primary))]"
                >
                  <MapPin className="mt-1 h-6 w-6 text-[hsl(var(--primary))]" />
                  <div>
                    <p className="font-semibold">Business Address</p>
                    <address className="not-italic text-[hsl(var(--muted-foreground))]">
                      {siteConfig.address.street}, {siteConfig.address.street2}<br />
                      {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                    </address>
                    <p className="mt-1 text-xs text-[hsl(var(--accent))]">Only location · Westchase / Tampa Bay</p>
                  </div>
                </a>
                <div className="flex items-start gap-4 rounded-xl border border-[hsl(var(--border))] bg-white/80 p-4">
                  <Clock className="mt-1 h-6 w-6 text-[hsl(var(--primary))]" />
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p className="text-sm font-medium text-[hsl(var(--accent))]">Open 24/7</p>
                    <p className="text-sm text-[hsl(var(--muted-foreground))]">Serving Tampa, Westchase, Carrollwood &amp; all surrounding counties</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <GoogleMapEmbed />
              </div>
              <div className="mt-6">
                <GoogleListingCta />
              </div>
            </div>

            <div id="instant-quote">
              <QuoteForm defaultCity="Tampa" heading="Instant quote" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
