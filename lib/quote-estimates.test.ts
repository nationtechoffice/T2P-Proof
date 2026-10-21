import { test } from "node:test";
import assert from "node:assert/strict";
import { publicQuoteAnalysis, stripMoney, QUOTE_PRICE_MESSAGE, type QuoteAnalysis } from "./quote-estimates";
import { buildLeadMailto } from "./email";

const base: QuoteAnalysis = {
  category: "tv_mounting", label: "TV Wall Mounting", confidence: 0.8,
  summary: "65-inch TV on drywall. Expect $99 to $275. Studs located near center.",
  estimate: { category: "tv_mounting", label: "TV Wall Mounting", low: 99, high: 275, notes: "x" },
  recommendedServices: ["tv-wall-mounting"], provider: "t", usedAi: true,
};

test("public analysis has no dollar amounts or numbers for price", () => {
  const out = JSON.stringify(publicQuoteAnalysis(base));
  assert.doesNotMatch(out, /\$\s?\d/);
  assert.doesNotMatch(out, /"low"|"high"|275/);
  assert.match(out, /Instant estimate, we'll text you a price/);
  assert.equal(publicQuoteAnalysis(base).estimate.message, QUOTE_PRICE_MESSAGE);
});

test("fallback summary mentioning a range is replaced", () => {
  const s = publicQuoteAnalysis({ ...base, usedAi: false, summary: "Categorized as Drywall Repair. AI unavailable — showing baseline Tampa Bay range." }).summary;
  assert.doesNotMatch(s, /range|\$/);
  assert.equal(stripMoney("Costs 150 dollars."), "");
});

test("internal lead email still carries the estimate range (forwarding unchanged)", () => {
  const text = decodeURIComponent(buildLeadMailto({ name: "A", phone: "1", city: "Tampa", estimateLow: 99, estimateHigh: 275, estimateLabel: "TV" } as never));
  assert.match(text, /\$99–\$275/);
});

test("customer mailto fallback drops the range", () => {
  const text = decodeURIComponent(buildLeadMailto({ name: "A", phone: "1", city: "Tampa", estimateLow: undefined, estimateHigh: undefined, estimateLabel: "TV" } as never));
  assert.doesNotMatch(text, /\$\d/);
});
