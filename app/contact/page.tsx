"use client";

import { useState } from "react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { siteConfig } from "@/lib/site-config";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <section className="section-padding">
        <div className="container-site">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold">Contact Us</h1>
            <p className="text-lg text-[hsl(var(--muted-foreground))]">
              Get your free estimate today. Call us directly or fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold">Get In Touch</h2>
              <div className="space-y-6">
                <a href={`tel:${siteConfig.phoneTel}`} className="flex items-start gap-4 rounded-xl border border-[hsl(var(--border))] p-4 transition-colors hover:border-[hsl(var(--primary))]">
                  <Phone className="mt-1 h-6 w-6 text-[hsl(var(--primary))]" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-[hsl(var(--muted-foreground))]">{siteConfig.phone}</p>
                  </div>
                </a>
                <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-4 rounded-xl border border-[hsl(var(--border))] p-4 transition-colors hover:border-[hsl(var(--primary))]">
                  <Mail className="mt-1 h-6 w-6 text-[hsl(var(--primary))]" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-[hsl(var(--muted-foreground))]">{siteConfig.email}</p>
                  </div>
                </a>
                <div className="flex items-start gap-4 rounded-xl border border-[hsl(var(--border))] p-4">
                  <MapPin className="mt-1 h-6 w-6 text-[hsl(var(--primary))]" />
                  <div>
                    <p className="font-semibold">Service Area</p>
                    <p className="text-[hsl(var(--muted-foreground))]">Tampa &amp; surrounding counties, FL</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-xl border border-[hsl(var(--border))] p-4">
                  <Clock className="mt-1 h-6 w-6 text-[hsl(var(--primary))]" />
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p className="text-sm font-medium text-[hsl(var(--accent))]">Open 24/7</p>
                    <p className="text-sm text-[hsl(var(--muted-foreground))]">Always available — call anytime</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              {submitted ? (
                <div className="py-12 text-center">
                  <h2 className="mb-4 text-2xl font-bold text-[hsl(var(--secondary))]">Thank You!</h2>
                  <p className="text-[hsl(var(--muted-foreground))]">
                    We&apos;ve received your request and will contact you within 24 hours. For immediate assistance, call{" "}
                    <a href={`tel:${siteConfig.phoneTel}`} className="font-semibold text-[hsl(var(--primary))]">
                      {siteConfig.phone}
                    </a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="mb-4 text-2xl font-bold">Request a Free Estimate</h2>
                  <div>
                    <label htmlFor="name" className="mb-1 block text-sm font-medium">Full Name *</label>
                    <input id="name" name="name" required type="text" className="w-full rounded-lg border border-[hsl(var(--border))] px-4 py-2.5 focus:border-[hsl(var(--primary))] focus:outline-none focus:ring-1 focus:ring-[hsl(var(--primary))]" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1 block text-sm font-medium">Phone Number *</label>
                    <input id="phone" name="phone" required type="tel" className="w-full rounded-lg border border-[hsl(var(--border))] px-4 py-2.5 focus:border-[hsl(var(--primary))] focus:outline-none focus:ring-1 focus:ring-[hsl(var(--primary))]" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium">Email</label>
                    <input id="email" name="email" type="email" className="w-full rounded-lg border border-[hsl(var(--border))] px-4 py-2.5 focus:border-[hsl(var(--primary))] focus:outline-none focus:ring-1 focus:ring-[hsl(var(--primary))]" />
                  </div>
                  <div>
                    <label htmlFor="city" className="mb-1 block text-sm font-medium">City *</label>
                    <input id="city" name="city" required type="text" placeholder="e.g. Tampa" className="w-full rounded-lg border border-[hsl(var(--border))] px-4 py-2.5 focus:border-[hsl(var(--primary))] focus:outline-none focus:ring-1 focus:ring-[hsl(var(--primary))]" />
                  </div>
                  <div>
                    <label htmlFor="service" className="mb-1 block text-sm font-medium">Service Needed</label>
                    <select id="service" name="service" className="w-full rounded-lg border border-[hsl(var(--border))] px-4 py-2.5 focus:border-[hsl(var(--primary))] focus:outline-none focus:ring-1 focus:ring-[hsl(var(--primary))]">
                      <option value="">Select a service...</option>
                      <option value="handyman">Handyman Services</option>
                      <option value="painting">Painting Services</option>
                      <option value="fence">Fence Contractor</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1 block text-sm font-medium">Project Details</label>
                    <textarea id="message" name="message" rows={4} className="w-full rounded-lg border border-[hsl(var(--border))] px-4 py-2.5 focus:border-[hsl(var(--primary))] focus:outline-none focus:ring-1 focus:ring-[hsl(var(--primary))]" placeholder="Describe your project..."></textarea>
                  </div>
                  <button type="submit" className="btn-primary w-full">Submit Request</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
