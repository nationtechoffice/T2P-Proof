/**
 * Unified multi-platform AI routing layer.
 * Providers are selected by AI_PROVIDER / task-specific env overrides.
 * Missing API keys fall back gracefully so quote flows still return baseline ranges.
 */

export type AiProvider = "gemini" | "openai" | "anthropic" | "openrouter";

export type AiTask = "vision_parse" | "quote_json" | "content_copy" | "general";

export interface AiMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface AiImagePart {
  mimeType: string;
  /** Raw base64 without data: prefix */
  base64: string;
}

export interface AiCompletionRequest {
  task?: AiTask;
  messages: AiMessage[];
  images?: AiImagePart[];
  json?: boolean;
  temperature?: number;
  maxTokens?: number;
  model?: string;
}

export interface AiCompletionResult {
  text: string;
  provider: AiProvider | "heuristic";
  model: string;
  usedFallback: boolean;
}

const DEFAULT_MODELS: Record<AiProvider, string> = {
  gemini: process.env.GEMINI_MODEL || "gemini-2.0-flash",
  openai: process.env.OPENAI_MODEL || "gpt-4o-mini",
  anthropic: process.env.ANTHROPIC_MODEL || "claude-3-5-sonnet-latest",
  openrouter: process.env.OPENROUTER_MODEL || "openai/gpt-4o-mini",
};

const TASK_PROVIDER_DEFAULTS: Record<AiTask, AiProvider> = {
  vision_parse: "gemini",
  quote_json: "openai",
  content_copy: "anthropic",
  general: "openai",
};

function getEnvProvider(): AiProvider | null {
  const raw = (process.env.AI_PROVIDER || "").toLowerCase();
  if (raw === "gemini" || raw === "openai" || raw === "anthropic" || raw === "openrouter") {
    return raw;
  }
  return null;
}

function providerApiKey(provider: AiProvider): string | undefined {
  switch (provider) {
    case "gemini":
      return process.env.GEMINI_API_KEY || process.env.GOOGLE_AI_API_KEY;
    case "openai":
      return process.env.OPENAI_API_KEY;
    case "anthropic":
      return process.env.ANTHROPIC_API_KEY;
    case "openrouter":
      return process.env.OPENROUTER_API_KEY;
  }
}

export function resolveAiProvider(task: AiTask = "general"): AiProvider {
  const forced = getEnvProvider();
  if (forced && providerApiKey(forced)) return forced;

  const preferred = TASK_PROVIDER_DEFAULTS[task];
  if (providerApiKey(preferred)) return preferred;

  const order: AiProvider[] = ["openai", "gemini", "anthropic", "openrouter"];
  for (const provider of order) {
    if (providerApiKey(provider)) return provider;
  }
  return preferred;
}

function flattenMessages(messages: AiMessage[]): string {
  return messages.map((m) => `${m.role.toUpperCase()}:\n${m.content}`).join("\n\n");
}

async function completeOpenAICompatible(
  endpoint: string,
  apiKey: string,
  model: string,
  request: AiCompletionRequest,
  extraHeaders: Record<string, string> = {}
): Promise<string> {
  const content: Array<Record<string, unknown>> = [];
  const userText = request.messages
    .filter((m) => m.role !== "system")
    .map((m) => m.content)
    .join("\n\n");
  const system = request.messages.find((m) => m.role === "system")?.content;

  content.push({ type: "text", text: userText });
  for (const image of request.images || []) {
    content.push({
      type: "image_url",
      image_url: { url: `data:${image.mimeType};base64,${image.base64}` },
    });
  }

  const body: Record<string, unknown> = {
    model,
    temperature: request.temperature ?? 0.2,
    max_tokens: request.maxTokens ?? 1200,
    messages: [
      ...(system ? [{ role: "system", content: system }] : []),
      { role: "user", content },
    ],
  };
  if (request.json) {
    body.response_format = { type: "json_object" };
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      ...extraHeaders,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errText = await response.text().catch(() => "");
    throw new Error(`OpenAI-compatible error ${response.status}: ${errText.slice(0, 300)}`);
  }

  const data = (await response.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };
  const text = data.choices?.[0]?.message?.content;
  if (!text) throw new Error("Empty OpenAI-compatible response");
  return text;
}

async function completeGemini(request: AiCompletionRequest, model: string, apiKey: string): Promise<string> {
  const parts: Array<Record<string, unknown>> = [{ text: flattenMessages(request.messages) }];
  for (const image of request.images || []) {
    parts.push({
      inline_data: {
        mime_type: image.mimeType,
        data: image.base64,
      },
    });
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ role: "user", parts }],
      generationConfig: {
        temperature: request.temperature ?? 0.2,
        maxOutputTokens: request.maxTokens ?? 1200,
        ...(request.json ? { responseMimeType: "application/json" } : {}),
      },
    }),
  });

  if (!response.ok) {
    const errText = await response.text().catch(() => "");
    throw new Error(`Gemini error ${response.status}: ${errText.slice(0, 300)}`);
  }

  const data = (await response.json()) as {
    candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
  };
  const text = data.candidates?.[0]?.content?.parts?.map((p) => p.text || "").join("\n");
  if (!text) throw new Error("Empty Gemini response");
  return text;
}

async function completeAnthropic(request: AiCompletionRequest, model: string, apiKey: string): Promise<string> {
  const system = request.messages.find((m) => m.role === "system")?.content;
  const userParts: Array<Record<string, unknown>> = [
    {
      type: "text",
      text: request.messages
        .filter((m) => m.role !== "system")
        .map((m) => m.content)
        .join("\n\n"),
    },
  ];
  for (const image of request.images || []) {
    userParts.push({
      type: "image",
      source: {
        type: "base64",
        media_type: image.mimeType,
        data: image.base64,
      },
    });
  }

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      max_tokens: request.maxTokens ?? 1200,
      temperature: request.temperature ?? 0.3,
      ...(system ? { system } : {}),
      messages: [{ role: "user", content: userParts }],
    }),
  });

  if (!response.ok) {
    const errText = await response.text().catch(() => "");
    throw new Error(`Anthropic error ${response.status}: ${errText.slice(0, 300)}`);
  }

  const data = (await response.json()) as {
    content?: Array<{ type?: string; text?: string }>;
  };
  const text = data.content?.filter((c) => c.type === "text").map((c) => c.text || "").join("\n");
  if (!text) throw new Error("Empty Anthropic response");
  return text;
}

async function runProvider(provider: AiProvider, request: AiCompletionRequest): Promise<AiCompletionResult> {
  const apiKey = providerApiKey(provider);
  if (!apiKey) throw new Error(`Missing API key for ${provider}`);
  const model = request.model || DEFAULT_MODELS[provider];

  let text: string;
  if (provider === "gemini") {
    text = await completeGemini(request, model, apiKey);
  } else if (provider === "anthropic") {
    text = await completeAnthropic(request, model, apiKey);
  } else if (provider === "openrouter") {
    text = await completeOpenAICompatible(
      "https://openrouter.ai/api/v1/chat/completions",
      apiKey,
      model,
      request,
      {
        "HTTP-Referer": process.env.SITE_URL || "https://handymanprosflorida.com",
        "X-Title": "Handyman Pros Florida",
      }
    );
  } else {
    text = await completeOpenAICompatible("https://api.openai.com/v1/chat/completions", apiKey, model, request);
  }

  return { text, provider, model, usedFallback: false };
}

/**
 * Complete a chat/vision request through the preferred provider, with OpenRouter / remaining providers as fallback.
 */
export async function aiComplete(request: AiCompletionRequest): Promise<AiCompletionResult> {
  const task = request.task || "general";
  const primary = resolveAiProvider(task);
  const fallbackOrder = ([primary, "openrouter", "openai", "gemini", "anthropic"] as AiProvider[]).filter(
    (provider, index, arr) => arr.indexOf(provider) === index
  );

  let lastError: unknown;
  for (const provider of fallbackOrder) {
    if (!providerApiKey(provider)) continue;
    try {
      const result = await runProvider(provider, request);
      return { ...result, usedFallback: provider !== primary };
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError instanceof Error ? lastError : new Error("All AI providers failed or are unconfigured");
}

export function aiConfigured(): boolean {
  return Boolean(
    providerApiKey("openai") ||
      providerApiKey("gemini") ||
      providerApiKey("anthropic") ||
      providerApiKey("openrouter")
  );
}

/** Generate localized landing/blog style copy via Claude (or fallbacks). */
export async function generateLocalContent(prompt: string): Promise<AiCompletionResult> {
  return aiComplete({
    task: "content_copy",
    messages: [
      {
        role: "system",
        content:
          "You are a local SEO copywriter for Handyman Pros Florida serving Tampa, Clearwater, and St. Petersburg. Write natural, specific, non-spammy service copy.",
      },
      { role: "user", content: prompt },
    ],
    temperature: 0.5,
  });
}
