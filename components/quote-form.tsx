"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { coreServices } from "@/lib/programmatic";
import { instantEstimate } from "@/lib/instant-estimate";

export function QuoteForm({
  defaultService = "",
  defaultCity = "",
  heading = "Instant Phone Estimate",
}: {
  defaultService?: string;
  defaultCity?: string;
  heading?: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-[hsl(var(--border))] bg-white/90 p-6 text-center">
        <h2 className="mb-3 text-xl font-bold text-[hsl(var(--secondary))]">Quote request received</h2>
        <p className="text-sm text-[hsl(var(--muted-foreground))]">
          For the fastest answer, call{" "}
          <a href={`tel:${siteConfig.phoneTel}`} className="font-semibold text-[hsl(var(--accent))]">
            {siteConfig.phone}
          </a>{" "}
          now for an instant phone estimate — we are open 24/7.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-[hsl(var(--border))] bg-white/90 p-6 shadow-sm"
      aria-label="Instant quote lead form"
    >
      <h2 className="text-xl font-bold">{heading}</h2>
      <p className="text-sm text-[hsl(var(--muted-foreground))]">
        Tell us the job or call {siteConfig.phone} now for an instant phone estimate — 24/7 dispatch.
      </p>
      <div>
        <label htmlFor="quote-name" className="mb-1 block text-sm font-medium">
          Full name *
        </label>
        <input
          id="quote-name"
          name="name"
          required
          type="text"
          className="w-full rounded-lg border border-[hsl(var(--border))] px-4 py-2.5"
        />
      </div>
      <div>
        <label htmlFor="quote-phone" className="mb-1 block text-sm font-medium">
          Phone *
        </label>
        <input
          id="quote-phone"
          name="phone"
          required
          type="tel"
          className="w-full rounded-lg border border-[hsl(var(--border))] px-4 py-2.5"
        />
      </div>
      <div>
        <label htmlFor="quote-city" className="mb-1 block text-sm font-medium">
          City / neighborhood *
        </label>
        <input
          id="quote-city"
          name="city"
          required
          type="text"
          defaultValue={defaultCity}
          placeholder="Tampa, Westchase, Clearwater..."
          className="w-full rounded-lg border border-[hsl(var(--border))] px-4 py-2.5"
        />
      </div>
      <div>
        <label htmlFor="quote-service" className="mb-1 block text-sm font-medium">
          Service needed
        </label>
        <select
          id="quote-service"
          name="service"
          defaultValue={defaultService}
          className="w-full rounded-lg border border-[hsl(var(--border))] px-4 py-2.5"
        >
          <option value="">Select a service...</option>
          {coreServices.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.name}
            </option>
          ))}
          <option value="tile-work">Tile Work</option>
          <option value="gutter-cleaning">Gutter Cleaning</option>
          <option value="exterior-painting">Exterior Painting</option>
          <option value="other">Other home repair</option>
        </select>
      </div>
      <div>
        <label htmlFor="quote-details" className="mb-1 block text-sm font-medium">
          Project details
        </label>
        <textarea
          id="quote-details"
          name="message"
          rows={3}
          className="w-full rounded-lg border border-[hsl(var(--border))] px-4 py-2.5"
          placeholder="TV size, hole size, photos welcome..."
        />
      </div>
      <button type="submit" className="btn-primary w-full">
        Get instant phone estimate
      </button>
      <a href={`tel:${siteConfig.phoneTel}`} className="btn-accent flex w-full items-center justify-center font-bold">
        {instantEstimate.ctaLabel}: {siteConfig.phone}
      </a>
    </form>
  );
}
