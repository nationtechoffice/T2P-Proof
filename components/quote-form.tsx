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

async function browserEmailFallback(fields: {
  name: string;
  phone: string;
  email: string;
  city: string;
  service: string;
  message: string;
  summary: string;
}): Promise<boolean> {
  const to = siteConfig.leadEmail;
  const subject = `[Website Lead] ${fields.service || "Handyman request"} — ${fields.city}`;
  const text = [
    `Name: ${fields.name}`,
    `Phone: ${fields.phone}`,
    `Email: ${fields.email || "n/a"}`,
    `City: ${fields.city}`,
    `Service: ${fields.service || "n/a"}`,
    "",
    fields.message || "(no details)",
    "",
    fields.summary ? `AI summary: ${fields.summary}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const web3Key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  if (web3Key) {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: web3Key,
          subject,
          from_name: fields.name,
          email: fields.email || to,
          phone: fields.phone,
          city: fields.city,
          message: text,
        }),
      });
      const data = (await response.json()) as { success?: boolean };
      if (response.ok && data.success) return true;
    } catch {
      // continue
    }
  }

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: subject,
        name: fields.name,
        phone: fields.phone,
        email: fields.email || "noreply@handymanprosflorida.com",
        city: fields.city,
        service: fields.service,
        message: text,
        _template: "table",
        _captcha: "false",
      }),
    });
    const raw = await response.text();
    if (raw.includes("Just a moment") || raw.trim().startsWith("<!DOCTYPE")) return false;
    const data = JSON.parse(raw) as { success?: string | boolean };
    return data.success === true || data.success === "true";
  } catch {
    return false;
  }
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
  const [emailed, setEmailed] = useState(false);
  const [mailtoLink, setMailtoLink] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "");
    const phone = String(formData.get("phone") || "");
    const email = String(formData.get("email") || "");
    const city = String(formData.get("city") || "");
    const service = String(formData.get("service") || "");
    const message = String(formData.get("message") || "");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        body: formData,
      });
      const data = (await response.json()) as {
        ok: boolean;
        error?: string;
        emailed?: boolean;
        mailto?: string;
        analysis?: QuoteAnalysisResponse;
      };

      if (!response.ok || !data.ok || !data.analysis) {
        throw new Error(data.error || "Could not submit your request.");
      }

      let delivered = Boolean(data.emailed);
      if (!delivered) {
        delivered = await browserEmailFallback({
          name,
          phone,
          email,
          city,
          service: service || data.analysis.label,
          message,
          summary: data.analysis.summary,
        });
      }

      setEmailed(delivered);
      setMailtoLink(delivered ? null : data.mailto || null);
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
        <h2 className="mb-3 text-xl font-bold text-[hsl(var(--secondary))]">
          {emailed ? "Quote request received" : "Estimate ready — please call or email us"}
        </h2>
        {emailed ? (
          <p className="mb-3 text-sm text-[hsl(var(--muted-foreground))]">
            We emailed your request to <strong>{siteConfig.leadEmail}</strong>. Category:{" "}
            <strong>{analysis.label}</strong>
            {analysis.usedAi ? " (AI-assisted)" : ""}.
          </p>
        ) : (
          <p className="mb-3 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            Your estimate was calculated, but automatic email delivery is not configured yet on the server.
            Please call{" "}
            <a href={`tel:${siteConfig.phoneTel}`} className="font-bold underline">
              {siteConfig.phone}
            </a>{" "}
            or{" "}
            {mailtoLink ? (
              <a href={mailtoLink} className="font-bold underline">
                tap here to email {siteConfig.leadEmail}
              </a>
            ) : (
              <a href={`mailto:${siteConfig.leadEmail}`} className="font-bold underline">
                email {siteConfig.leadEmail}
              </a>
            )}
            .
          </p>
        )}
        <p className="mb-4 rounded-xl bg-[hsl(var(--muted))] px-4 py-3 text-sm">
          Baseline Tampa Bay range:{" "}
          <strong>
            ${analysis.estimate.low}–${analysis.estimate.high}
          </strong>
          <span className="mt-1 block text-xs text-[hsl(var(--muted-foreground))]">{analysis.summary}</span>
        </p>
        <a
          href={`tel:${siteConfig.phoneTel}`}
          className="btn-accent inline-flex w-full items-center justify-center font-bold"
        >
          {instantEstimate.ctaLabel}: {siteConfig.phone}
        </a>
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
