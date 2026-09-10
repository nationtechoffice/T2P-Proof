import nodemailer from "nodemailer";
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

export interface LeadEmailResult {
  ok: boolean;
  via: "gmail" | "resend" | "web3forms" | "formsubmit" | "none";
  to: string;
  error?: string;
}

function getLeadInbox(): string {
  return process.env.LEAD_EMAIL || siteConfig.leadEmail || siteConfig.email;
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

async function sendViaGmail(
  to: string,
  subject: string,
  text: string,
  html: string
): Promise<{ ok: boolean; error?: string }> {
  const user = process.env.GMAIL_USER || process.env.SMTP_USER;
  const pass = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS;
  if (!user || !pass) return { ok: false, error: "Gmail SMTP not configured" };

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"${siteConfig.shortName} Website" <${user}>`,
      to,
      subject,
      text,
      html,
    });
    return { ok: true };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : "Gmail send failed" };
  }
}

async function sendViaResend(
  to: string,
  subject: string,
  text: string,
  html: string,
  replyTo?: string
): Promise<{ ok: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { ok: false, error: "RESEND_API_KEY missing" };

  const from = process.env.RESEND_FROM_EMAIL || "Handyman Pros FL <onboarding@resend.dev>";
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        text,
        html,
        ...(replyTo ? { reply_to: replyTo } : {}),
      }),
    });
    if (!response.ok) {
      const body = await response.text().catch(() => "");
      return { ok: false, error: `Resend ${response.status}: ${body.slice(0, 200)}` };
    }
    return { ok: true };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : "Resend failed" };
  }
}

async function sendViaWeb3Forms(
  to: string,
  subject: string,
  text: string,
  payload: LeadEmailPayload
): Promise<{ ok: boolean; error?: string }> {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) return { ok: false, error: "WEB3FORMS_ACCESS_KEY missing" };

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject,
        from_name: payload.name,
        email: payload.email || to,
        phone: payload.phone,
        city: payload.city,
        service: payload.service || "",
        message: text,
        to,
      }),
    });
    const data = (await response.json().catch(() => null)) as { success?: boolean; message?: string } | null;
    if (!response.ok || !data?.success) {
      return { ok: false, error: data?.message || `Web3Forms ${response.status}` };
    }
    return { ok: true };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : "Web3Forms failed" };
  }
}

async function sendViaFormSubmit(
  to: string,
  subject: string,
  text: string,
  payload: LeadEmailPayload
): Promise<{ ok: boolean; error?: string }> {
  try {
    const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: subject,
        name: payload.name,
        phone: payload.phone,
        email: payload.email || "noreply@handymanprosflorida.com",
        city: payload.city,
        service: payload.service || "",
        message: text,
        _template: "table",
        _captcha: "false",
      }),
    });

    const contentType = response.headers.get("content-type") || "";
    const raw = await response.text();

    // Cloudflare challenge HTML means server-side FormSubmit is blocked.
    if (!contentType.includes("application/json") || raw.trim().startsWith("<!DOCTYPE") || raw.includes("Just a moment")) {
      return { ok: false, error: "FormSubmit blocked by Cloudflare from server" };
    }

    const data = JSON.parse(raw) as { success?: string | boolean; message?: string };
    const success = data.success === true || data.success === "true";
    if (!response.ok || !success) {
      return { ok: false, error: data.message || `FormSubmit ${response.status}` };
    }
    return { ok: true };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : "FormSubmit failed" };
  }
}

/**
 * Delivers website leads to the configured inbox.
 * Public site always shows support@handymanprosflorida.com.
 * Priority: Gmail App Password → Resend → Web3Forms → FormSubmit.
 */
export async function sendLeadEmail(payload: LeadEmailPayload): Promise<LeadEmailResult> {
  const to = getLeadInbox();
  const { subject, text, html } = formatLeadEmail(payload);
  const errors: string[] = [];
  /** Never expose a private ops inbox to the browser — always return the public support address. */
  const publicTo = siteConfig.email;

  const gmail = await sendViaGmail(to, subject, text, html);
  if (gmail.ok) return { ok: true, via: "gmail", to: publicTo };
  if (gmail.error) errors.push(gmail.error);

  const resend = await sendViaResend(to, subject, text, html, payload.email);
  if (resend.ok) return { ok: true, via: "resend", to: publicTo };
  if (resend.error) errors.push(resend.error);

  const web3 = await sendViaWeb3Forms(to, subject, text, payload);
  if (web3.ok) return { ok: true, via: "web3forms", to: publicTo };
  if (web3.error) errors.push(web3.error);

  const formSubmit = await sendViaFormSubmit(to, subject, text, payload);
  if (formSubmit.ok) return { ok: true, via: "formsubmit", to: publicTo };
  if (formSubmit.error) errors.push(formSubmit.error);

  const error = [...new Set(errors)].join(" | ");
  console.error("[leads] Failed to deliver email to", to, error);
  return { ok: false, via: "none", to: publicTo, error };
}

export function buildLeadMailto(payload: LeadEmailPayload): string {
  const to = siteConfig.email;
  const { subject, text } = formatLeadEmail(payload);
  return `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
}
