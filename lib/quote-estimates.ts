import { aiComplete, aiConfigured, type AiImagePart } from "./ai";

export type RepairCategory =
  | "drywall"
  | "tv_mounting"
  | "plumbing_fixture"
  | "electrical_fixture"
  | "furniture_assembly"
  | "door_repair"
  | "painting"
  | "fence_repair"
  | "fan_install"
  | "tile_work"
  | "gutter_cleaning"
  | "general_handyman";

export interface EstimateRange {
  category: RepairCategory;
  label: string;
  low: number;
  high: number;
  notes: string;
}

export interface QuoteAnalysis {
  category: RepairCategory;
  label: string;
  confidence: number;
  summary: string;
  estimate: EstimateRange;
  recommendedServices: string[];
  provider: string;
  usedAi: boolean;
}

const BASELINES: Record<RepairCategory, EstimateRange> = {
  drywall: {
    category: "drywall",
    label: "Drywall Repair",
    low: 125,
    high: 450,
    notes: "Small patches to mid-size holes; texture matching may increase price.",
  },
  tv_mounting: {
    category: "tv_mounting",
    label: "TV Wall Mounting",
    low: 99,
    high: 275,
    notes: "Depends on TV size, wall type, and cable concealment.",
  },
  plumbing_fixture: {
    category: "plumbing_fixture",
    label: "Plumbing Fixture Repair",
    low: 110,
    high: 320,
    notes: "Faucet/toilet fixture work at existing shutoffs; re-pipes excluded.",
  },
  electrical_fixture: {
    category: "electrical_fixture",
    label: "Electrical Fixture Installation",
    low: 95,
    high: 285,
    notes: "Like-for-like swaps at existing boxes; new circuits excluded.",
  },
  furniture_assembly: {
    category: "furniture_assembly",
    label: "Furniture Assembly",
    low: 75,
    high: 250,
    notes: "Priced by piece count and complexity.",
  },
  door_repair: {
    category: "door_repair",
    label: "Door Repair",
    low: 120,
    high: 380,
    notes: "Planing, hardware, weatherstrip; full prehung replacement quoted separately.",
  },
  painting: {
    category: "painting",
    label: "Interior / Accent Painting",
    low: 200,
    high: 900,
    notes: "Room size and prep drive range; exteriors quoted on-site.",
  },
  fence_repair: {
    category: "fence_repair",
    label: "Fence Repair",
    low: 150,
    high: 650,
    notes: "Board/gate fixes; full run replacement quoted after inspection.",
  },
  fan_install: {
    category: "fan_install",
    label: "Ceiling Fan Install",
    low: 125,
    high: 300,
    notes: "Requires fan-rated box at existing location.",
  },
  tile_work: {
    category: "tile_work",
    label: "Tile Work",
    low: 175,
    high: 700,
    notes: "Small repairs and backsplash-scale work; full baths quoted separately.",
  },
  gutter_cleaning: {
    category: "gutter_cleaning",
    label: "Gutter Cleaning",
    low: 125,
    high: 350,
    notes: "Story count and roof pitch affect pricing.",
  },
  general_handyman: {
    category: "general_handyman",
    label: "General Handyman",
    low: 95,
    high: 350,
    notes: "Baseline visit range; final quote after details or photos.",
  },
};

const KEYWORD_MAP: Array<{ category: RepairCategory; patterns: RegExp[] }> = [
  { category: "drywall", patterns: [/dry\s*wall/i, /sheetrock/i, /hole in (the )?wall/i, /patch/i] },
  { category: "tv_mounting", patterns: [/tv/i, /television/i, /wall mount/i, /mount(ing)? the tv/i] },
  { category: "plumbing_fixture", patterns: [/faucet/i, /toilet/i, /leak/i, /plumbing/i, /sink/i] },
  { category: "electrical_fixture", patterns: [/light fixture/i, /vanity light/i, /outlet/i, /electrical/i] },
  { category: "fan_install", patterns: [/ceiling fan/i, /fan install/i] },
  { category: "furniture_assembly", patterns: [/assembl/i, /ikea/i, /wayfair/i, /furniture/i] },
  { category: "door_repair", patterns: [/door/i, /sliding glass/i, /weatherstrip/i] },
  { category: "painting", patterns: [/paint/i] },
  { category: "fence_repair", patterns: [/fence/i, /gate/i] },
  { category: "tile_work", patterns: [/tile/i, /backsplash/i] },
  { category: "gutter_cleaning", patterns: [/gutter/i] },
];

function heuristicCategory(text: string, serviceHint?: string): RepairCategory {
  const blob = `${serviceHint || ""} ${text}`;
  for (const entry of KEYWORD_MAP) {
    if (entry.patterns.some((re) => re.test(blob))) return entry.category;
  }
  const service = (serviceHint || "").toLowerCase();
  if (service.includes("drywall")) return "drywall";
  if (service.includes("tv")) return "tv_mounting";
  if (service.includes("plumb")) return "plumbing_fixture";
  if (service.includes("electrical")) return "electrical_fixture";
  if (service.includes("furniture")) return "furniture_assembly";
  if (service.includes("door")) return "door_repair";
  if (service.includes("paint")) return "painting";
  if (service.includes("fence")) return "fence_repair";
  if (service.includes("tile")) return "tile_work";
  if (service.includes("gutter")) return "gutter_cleaning";
  return "general_handyman";
}

function parseJsonObject(text: string): Record<string, unknown> | null {
  const trimmed = text.trim();
  try {
    return JSON.parse(trimmed) as Record<string, unknown>;
  } catch {
    const match = trimmed.match(/\{[\s\S]*\}/);
    if (!match) return null;
    try {
      return JSON.parse(match[0]) as Record<string, unknown>;
    } catch {
      return null;
    }
  }
}

export function getBaselineEstimate(category: RepairCategory): EstimateRange {
  return BASELINES[category];
}

export async function analyzeQuoteRequest(input: {
  description: string;
  service?: string;
  city?: string;
  images?: AiImagePart[];
}): Promise<QuoteAnalysis> {
  const fallbackCategory = heuristicCategory(input.description, input.service);
  const fallbackEstimate = getBaselineEstimate(fallbackCategory);

  if (!aiConfigured()) {
    return {
      category: fallbackCategory,
      label: fallbackEstimate.label,
      confidence: 0.55,
      summary: `Categorized as ${fallbackEstimate.label} from your description. Baseline Tampa Bay range before on-site confirmation.`,
      estimate: fallbackEstimate,
      recommendedServices: [fallbackEstimate.label],
      provider: "heuristic",
      usedAi: false,
    };
  }

  try {
    const result = await aiComplete({
      task: input.images?.length ? "vision_parse" : "quote_json",
      json: true,
      messages: [
        {
          role: "system",
          content: `You categorize Tampa Bay handyman jobs and return JSON only with keys:
category (one of: drywall, tv_mounting, plumbing_fixture, electrical_fixture, furniture_assembly, door_repair, painting, fence_repair, fan_install, tile_work, gutter_cleaning, general_handyman),
label (string),
confidence (0-1),
summary (1-2 sentences),
estimateLow (number USD),
estimateHigh (number USD),
recommendedServices (string array).
Use realistic Tampa / Clearwater / St. Petersburg handyman pricing.`,
        },
        {
          role: "user",
          content: `City: ${input.city || "Tampa Bay"}
Service hint: ${input.service || "n/a"}
Customer description:
${input.description || "(photo only)"}`,
        },
      ],
      images: input.images,
      temperature: 0.1,
    });

    const parsed = parseJsonObject(result.text);
    const category =
      (parsed?.category as RepairCategory) && BASELINES[parsed.category as RepairCategory]
        ? (parsed.category as RepairCategory)
        : fallbackCategory;
    const baseline = getBaselineEstimate(category);
    const low = Number(parsed?.estimateLow);
    const high = Number(parsed?.estimateHigh);

    return {
      category,
      label: typeof parsed?.label === "string" ? parsed.label : baseline.label,
      confidence: typeof parsed?.confidence === "number" ? parsed.confidence : 0.7,
      summary:
        typeof parsed?.summary === "string"
          ? parsed.summary
          : `AI categorized this as ${baseline.label} for local Tampa Bay pricing.`,
      estimate: {
        ...baseline,
        low: Number.isFinite(low) ? low : baseline.low,
        high: Number.isFinite(high) ? high : baseline.high,
      },
      recommendedServices: Array.isArray(parsed?.recommendedServices)
        ? (parsed?.recommendedServices as string[]).map(String)
        : [baseline.label],
      provider: `${result.provider}:${result.model}`,
      usedAi: true,
    };
  } catch {
    return {
      category: fallbackCategory,
      label: fallbackEstimate.label,
      confidence: 0.5,
      summary: `Categorized as ${fallbackEstimate.label}. AI unavailable — showing baseline Tampa Bay range.`,
      estimate: fallbackEstimate,
      recommendedServices: [fallbackEstimate.label],
      provider: "heuristic",
      usedAi: false,
    };
  }
}
