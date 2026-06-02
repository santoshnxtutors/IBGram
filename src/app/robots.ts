import type { MetadataRoute } from "next";
import { getActiveRobotsRules } from "@/lib/seo/seo-db";

// The Sitemap: directive in robots.txt MUST be a full absolute URL with a
// protocol (https://...). If NEXT_PUBLIC_SITE_URL is unset or missing the
// scheme (e.g. "www.ibgram.com"), Google/Lighthouse rejects the line with
// "Syntax not understood". normalizeSiteUrl guarantees a valid absolute base.
function normalizeSiteUrl(raw?: string): string {
  let url = (raw ?? "").trim().replace(/\/+$/, "");
  if (!url) return "https://www.ibgram.com";
  if (!/^https?:\/\//i.test(url)) url = `https://${url}`;
  return url;
}

const SITE_URL = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;

// Standard web crawlers + every major AI / LLM crawler — all allowed on public pages.
// Admin, API and login routes are blocked for everyone.
const FALLBACK_RULES: MetadataRoute.Robots["rules"] = [
  // ── Standard crawlers ────────────────────────────────────────────────────
  // Everything important is crawlable. Only private, system, auth, search and
  // duplicate/low-value URLs are blocked.
  {
    userAgent: "*",
    allow: "/",
    disallow: [
      "/admin/", // private CMS / control panel
      "/admin/api/", // admin API endpoints
      "/api/", // internal API routes (JSON, not pages)
      "/login/", // auth page — no SEO value
      "/signup/", // auth page — no SEO value
      "/cart/", // (future) shopping cart — never indexable
      "/checkout/", // (future) checkout — never indexable
      "/search", // on-site search results page
      "/*?q=", // search query strings (duplicate content)
      "/*?search=", // search query strings (duplicate content)
      "/*?sort=", // sort params (faceted duplicate URLs)
      "/*?filter=", // filter params (faceted duplicate URLs)
      "/*?ref=", // referral tracking params
      "/*?utm_", // campaign tracking params
      "/*&utm_", // campaign tracking params (chained)
    ],
  },
  // ── Google ───────────────────────────────────────────────────────────────
  { userAgent: "Googlebot",       allow: "/" },
  { userAgent: "Googlebot-Image", allow: "/" },
  { userAgent: "Googlebot-News",  allow: "/" },
  // ── Bing / Microsoft ─────────────────────────────────────────────────────
  { userAgent: "bingbot",   allow: "/" },
  { userAgent: "msnbot",    allow: "/" },
  { userAgent: "BingPreview", allow: "/" },
  // ── AI crawlers (allow so answers cite ibgram.com) ────────────────────────
  // OpenAI ChatGPT
  { userAgent: "GPTBot",          allow: "/" },
  { userAgent: "ChatGPT-User",    allow: "/" },
  { userAgent: "OAI-SearchBot",   allow: "/" },
  // Anthropic Claude
  { userAgent: "ClaudeBot",       allow: "/" },
  { userAgent: "Claude-Web",      allow: "/" },
  { userAgent: "anthropic-ai",    allow: "/" },
  // Perplexity
  { userAgent: "PerplexityBot",   allow: "/" },
  // Google Gemini / AI Overviews
  { userAgent: "Google-Extended",    allow: "/" },
  { userAgent: "Gemini-User",        allow: "/" },
  // Meta AI
  { userAgent: "FacebookBot",     allow: "/" },
  { userAgent: "meta-externalagent", allow: "/" },
  // Apple
  { userAgent: "Applebot",        allow: "/" },
  { userAgent: "Applebot-Extended", allow: "/" },
  // Common LLM training / research crawlers
  { userAgent: "YouBot",          allow: "/" },
  { userAgent: "cohere-ai",       allow: "/" },
  { userAgent: "AI2Bot",          allow: "/" },
  { userAgent: "Diffbot",         allow: "/" },
  { userAgent: "Timpibot",        allow: "/" },
];

export default async function robots(): Promise<MetadataRoute.Robots> {
  const dbRows = await getActiveRobotsRules().catch(() => []);

  if (dbRows.length === 0) {
    return { rules: FALLBACK_RULES, sitemap: SITEMAP_URL };
  }

  const grouped = new Map<string, { allow: string[]; disallow: string[]; crawlDelay?: number }>();
  for (const row of dbRows) {
    const ua = row.userAgent || "*";
    const bucket = grouped.get(ua) ?? { allow: [], disallow: [] };
    const directive = row.directive.toLowerCase();
    if (directive === "allow") bucket.allow.push(row.path);
    else if (directive === "disallow") bucket.disallow.push(row.path);
    else if (directive === "crawl-delay") {
      const n = Number(row.path);
      if (Number.isFinite(n)) bucket.crawlDelay = n;
    }
    grouped.set(ua, bucket);
  }

  const dbRules: MetadataRoute.Robots["rules"] = [];
  for (const [userAgent, bucket] of grouped.entries()) {
    dbRules.push({
      userAgent,
      ...(bucket.allow.length ? { allow: bucket.allow } : {}),
      ...(bucket.disallow.length ? { disallow: bucket.disallow } : {}),
      ...(bucket.crawlDelay ? { crawlDelay: bucket.crawlDelay } : {}),
    });
  }

  // Merge DB rules on top of the AI-crawler defaults.
  // DB rules override the wildcard "*" rule; AI-specific rules are always kept.
  const aiRules = FALLBACK_RULES.filter((r) => r.userAgent !== "*");
  return { rules: [...dbRules, ...aiRules], sitemap: SITEMAP_URL };
}
