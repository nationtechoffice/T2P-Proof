import { siteConfig } from "./site-config";

export interface LeadEmailPayload {
  name: string;
  phone: string;
  email?: string;
  city: string;
  service?: string;
  message?: string;
  estimateLabel?: string;
  estimateLow?: number;
  estimateHigh?: number;
  category?: string;
  summary?: string;
  source?: string;
  photoCount?: number;
}

function formatLeadEmail(payload: LeadEmailPayload): { subject: string; text: string; html: string } {
  const subject = `[Website Lead] ${payload.service || payload.estimateLabel || "Handyman request"} — ${payload.city}`;
  const lines = [
    `New website request for ${siteConfig.name}`,
    "",
    `Name: ${payload.name}`,
    `Phone: ${payload.phone}`,
    `Email: ${payload.email || "n/a"}`,
    `City: ${payload.city}`,
    `Service: ${payload.service || "n/a"}`,
    `Category: ${payload.category || "n/a"}`,
    `Estimate: ${
      payload.estimateLow != null && payload.estimateHigh != null
        ? `$${payload.estimateLow}–$${payload.estimateHigh} (${payload.estimateLabel || "baseline"})`
        : "n/a"
    }`,
    `Photos attached: ${payload.photoCount ?? 0}`,
    `Source: ${payload.source || "website"}`,
    "",
    "Message / details:",
    payload.message || "(none)",
    "",
    payload.summary ? `AI summary: ${payload.summary}` : "",
  ].filter(Boolean);

  const text = lines.join("\n");
  const html = `<pre style="font-family:ui-sans-serif,system-ui,sans-serif;white-space:pre-wrap">${text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")}</pre>`;

  return { subject, text, html };
}

async function sendViaResend(to: string, subject: string, text: string, html: string): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const from = process.env.RESEND_FROM_EMAIL || "Handyman Pros FL <onboarding@resend.dev>";
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to: [to], subject, text, html }),
  });
  return response.ok;
}

async function sendViaFormSubmit(to: string, subject: string, text: string): Promise<boolean> {
  try {
    const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: subject,
        message: text,
        _template: "table",
        _captcha: "false",
      }),
    });
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Delivers website leads to nationtechoffice@gmail.com (or SITE leadEmail).
 * Prefers Resend when RESEND_API_KEY is set; falls back to FormSubmit.
 */
export async function sendLeadEmail(payload: LeadEmailPayload): Promise<{ ok: boolean; via: string }> {
  const to = process.env.LEAD_EMAIL || siteConfig.leadEmail || siteConfig.email;
  const { subject, text, html } = formatLeadEmail(payload);

  if (await sendViaResend(to, subject, text, html)) {
    return { ok: true, via: "resend" };
  }

  if (await sendViaFormSubmit(to, subject, text)) {
    return { ok: true, via: "formsubmit" };
  }

  console.error("[leads] Failed to deliver email to", to, subject);
  return { ok: false, via: "none" };
}
