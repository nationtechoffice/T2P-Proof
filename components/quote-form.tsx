"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

interface QuoteFormProps {
  /** Compact variant for above-the-fold service/location heroes */
  compact?: boolean;
  title?: string;
  defaultService?: string;
  className?: string;
}

const serviceOptions = [
  { value: "handyman", label: "Handyman / Home Repair" },
  { value: "tv-mounting", label: "TV Mounting" },
  { value: "drywall", label: "Drywall Repair" },
  { value: "furniture", label: "Furniture Assembly" },
  { value: "painting", label: "Painting" },
  { value: "fence", label: "Fence Repair / Install" },
  { value: "other", label: "Other" },
];

export function QuoteForm({
  compact = false,
  title = "Get a Free Quote",
  defaultService = "",
  className = "",
}: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={`rounded-2xl border border-[hsl(var(--border))] bg-white/95 p-6 text-center shadow-lg ${className}`}>
        <h2 className="mb-2 text-xl font-bold text-[hsl(var(--secondary))]">Thank You!</h2>
        <p className="text-sm text-[hsl(var(--muted-foreground))]">
          We received your request. For the fastest response, call{" "}
          <a href={`tel:${siteConfig.phoneTel}`} className="font-semibold text-[hsl(var(--accent))] hover:underline">
            {siteConfig.phone}
          </a>{" "}
          — open 24/7.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-2xl border border-[hsl(var(--border))] bg-white/95 shadow-lg ${compact ? "p-4 sm:p-5" : "p-6"} ${className}`}
      aria-label="Get a quote form"
    >
      <h2 className={`font-bold text-[hsl(var(--foreground))] ${compact ? "mb-3 text-lg" : "mb-4 text-2xl"}`}>
        {title}
      </h2>
      <p className={`text-[hsl(var(--muted-foreground))] ${compact ? "mb-3 text-xs" : "mb-4 text-sm"}`}>
        Three fields. We&apos;ll call you back with a free estimate.
      </p>
      <div className={`space-y-3 ${compact ? "" : "space-y-4"}`}>
        <div>
          <label htmlFor="quote-name" className="mb-1 block text-sm font-medium">
            Name *
          </label>
          <input
            id="quote-name"
            name="name"
            required
            type="text"
            autoComplete="name"
            className="w-full rounded-lg border border-[hsl(var(--border))] px-3 py-2.5 text-sm focus:border-[hsl(var(--primary))] focus:outline-none focus:ring-1 focus:ring-[hsl(var(--primary))]"
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
            autoComplete="tel"
            inputMode="tel"
            className="w-full rounded-lg border border-[hsl(var(--border))] px-3 py-2.5 text-sm focus:border-[hsl(var(--primary))] focus:outline-none focus:ring-1 focus:ring-[hsl(var(--primary))]"
          />
        </div>
        <div>
          <label htmlFor="quote-service" className="mb-1 block text-sm font-medium">
            Service Needed *
          </label>
          <select
            id="quote-service"
            name="service"
            required
            defaultValue={defaultService}
            className="w-full rounded-lg border border-[hsl(var(--border))] px-3 py-2.5 text-sm focus:border-[hsl(var(--primary))] focus:outline-none focus:ring-1 focus:ring-[hsl(var(--primary))]"
          >
            <option value="" disabled>
              Select a service…
            </option>
            {serviceOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn-accent w-full">
          Get My Free Quote
        </button>
      </div>
    </form>
  );
}
