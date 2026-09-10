"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { coreServices } from "@/lib/programmatic";
import { instantEstimate } from "@/lib/instant-estimate";

interface QuoteAnalysisResponse {
  category: string;
  label: string;
  confidence: number;
  summary: string;
  estimate: { low: number; high: number; notes: string; label: string };
  recommendedServices: string[];
  usedAi: boolean;
}

export function QuoteForm({
  defaultService = "",
  defaultCity = "",
  heading = "Instant Phone Estimate",
}: {
  defaultService?: string;
  defaultCity?: string;
  heading?: string;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<QuoteAnalysisResponse | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        body: formData,
      });
      const data = (await response.json()) as {
        ok: boolean;
        error?: string;
        analysis?: QuoteAnalysisResponse;
      };

      if (!response.ok || !data.ok || !data.analysis) {
        throw new Error(data.error || "Could not submit your request.");
      }

      setAnalysis(data.analysis);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please call us.");
    } finally {
      setSubmitting(false);
    }
  }

  if (analysis) {
    return (
      <div className="rounded-2xl border border-[hsl(var(--border))] bg-white/90 p-6 text-center">
        <h2 className="mb-3 text-xl font-bold text-[hsl(var(--secondary))]">Quote request received</h2>
        <p className="mb-3 text-sm text-[hsl(var(--muted-foreground))]">
          We emailed your request to <strong>{siteConfig.leadEmail}</strong>. Category:{" "}
          <strong>{analysis.label}</strong>
          {analysis.usedAi ? " (AI-assisted)" : ""}.
        </p>
        <p className="mb-4 rounded-xl bg-[hsl(var(--muted))] px-4 py-3 text-sm">
          Baseline Tampa Bay range:{" "}
          <strong>
            ${analysis.estimate.low}–${analysis.estimate.high}
          </strong>
          <span className="mt-1 block text-xs text-[hsl(var(--muted-foreground))]">{analysis.summary}</span>
        </p>
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
      encType="multipart/form-data"
    >
      <h2 className="text-xl font-bold">{heading}</h2>
      <p className="text-sm text-[hsl(var(--muted-foreground))]">
        Tell us the job or call {siteConfig.phone} now for an instant phone estimate — 24/7 dispatch.
        Requests go to {siteConfig.leadEmail}.
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
        <label htmlFor="quote-email" className="mb-1 block text-sm font-medium">
          Email
        </label>
        <input
          id="quote-email"
          name="email"
          type="email"
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
      <div>
        <label htmlFor="quote-photos" className="mb-1 block text-sm font-medium">
          Photos (optional, up to 4)
        </label>
        <input
          id="quote-photos"
          name="photos"
          type="file"
          accept="image/*"
          multiple
          className="w-full rounded-lg border border-[hsl(var(--border))] px-4 py-2.5 text-sm file:mr-3 file:rounded-md file:border-0 file:bg-[hsl(var(--muted))] file:px-3 file:py-1.5"
        />
      </div>
      {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}
      <button type="submit" className="btn-primary w-full" disabled={submitting}>
        {submitting ? "Analyzing & sending..." : "Get instant phone estimate"}
      </button>
      <a href={`tel:${siteConfig.phoneTel}`} className="btn-accent flex w-full items-center justify-center font-bold">
        {instantEstimate.ctaLabel}: {siteConfig.phone}
      </a>
    </form>
  );
}
