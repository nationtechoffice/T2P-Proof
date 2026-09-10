import { NextResponse } from "next/server";
import type { AiImagePart } from "@/lib/ai";
import { sendLeadEmail } from "@/lib/email";
import { analyzeQuoteRequest } from "@/lib/quote-estimates";
import { siteConfig } from "@/lib/site-config";

export const runtime = "nodejs";

const MAX_PHOTOS = 4;
const MAX_PHOTO_BYTES = 4_500_000;

async function filesToImageParts(files: File[]): Promise<AiImagePart[]> {
  const images: AiImagePart[] = [];
  for (const file of files.slice(0, MAX_PHOTOS)) {
    if (!file.type.startsWith("image/")) continue;
    if (file.size > MAX_PHOTO_BYTES) continue;
    const buffer = Buffer.from(await file.arrayBuffer());
    images.push({
      mimeType: file.type || "image/jpeg",
      base64: buffer.toString("base64"),
    });
  }
  return images;
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    let name = "";
    let phone = "";
    let email = "";
    let city = "";
    let service = "";
    let message = "";
    let images: AiImagePart[] = [];

    if (contentType.includes("multipart/form-data")) {
      const form = await request.formData();
      name = String(form.get("name") || "");
      phone = String(form.get("phone") || "");
      email = String(form.get("email") || "");
      city = String(form.get("city") || "");
      service = String(form.get("service") || "");
      message = String(form.get("message") || form.get("description") || "");
      const photos = form.getAll("photos").filter((item): item is File => item instanceof File && item.size > 0);
      images = await filesToImageParts(photos);
    } else {
      const body = (await request.json()) as Record<string, unknown>;
      name = String(body.name || "");
      phone = String(body.phone || "");
      email = String(body.email || "");
      city = String(body.city || "");
      service = String(body.service || "");
      message = String(body.message || body.description || "");
      if (Array.isArray(body.images)) {
        images = body.images
          .map((img) => {
            const item = img as { mimeType?: string; base64?: string };
            if (!item?.base64 || !item?.mimeType) return null;
            return { mimeType: item.mimeType, base64: item.base64 };
          })
          .filter((img): img is AiImagePart => Boolean(img))
          .slice(0, MAX_PHOTOS);
      }
    }

    if (!name.trim() || !phone.trim() || !city.trim()) {
      return NextResponse.json(
        { ok: false, error: "Name, phone, and city are required." },
        { status: 400 }
      );
    }

    const analysis = await analyzeQuoteRequest({
      description: message,
      service,
      city,
      images,
    });

    const mail = await sendLeadEmail({
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim() || undefined,
      city: city.trim(),
      service: service || analysis.label,
      message: message.trim(),
      estimateLabel: analysis.label,
      estimateLow: analysis.estimate.low,
      estimateHigh: analysis.estimate.high,
      category: analysis.category,
      summary: analysis.summary,
      source: "website-quote-form",
      photoCount: images.length,
    });

    return NextResponse.json({
      ok: true,
      emailed: mail.ok,
      emailTo: siteConfig.leadEmail,
      emailVia: mail.via,
      analysis: {
        category: analysis.category,
        label: analysis.label,
        confidence: analysis.confidence,
        summary: analysis.summary,
        estimate: analysis.estimate,
        recommendedServices: analysis.recommendedServices,
        usedAi: analysis.usedAi,
      },
      callNow: {
        phone: siteConfig.phone,
        tel: siteConfig.phoneTel,
      },
    });
  } catch (error) {
    console.error("[api/quote]", error);
    return NextResponse.json({ ok: false, error: "Unable to process quote request." }, { status: 500 });
  }
}
