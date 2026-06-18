import type { MetadataRoute } from "next";
import { getActiveRobotsRules } from "@/lib/seo/seo-db";
import { SITE_URL } from "@/lib/seo/slug-utils";

type RobotsRule = {
  userAgent: string | string[];
  allow?: string | string[];
  disallow?: string | string[];
  crawlDelay?: number;
};

const PRIVATE_DISALLOWS = [
  "/admin/",
  "/admin/api/",
  "/api/",
  "/login/",
  "/signup/",
  "/student/",
  "/ai-tools/",
  "/preview/",
  "/draft/",
  "/cart/",
  "/checkout/",
  "/search",
  "/subscription/",
  "/tutor-compare/",
  "/jobs/*/apply/",
  "/*?q=",
  "/*?search=",
  "/*?sort=",
  "/*?filter=",
  "/*?ref=",
  "/*?utm_",
  "/*&utm_",
];

// Per the robots.txt spec a crawler obeys ONLY the most specific user-agent
// group that matches its name and ignores the wildcard `*` group entirely.
// So every named bot must repeat the private disallows, otherwise admin/API/
// auth/search URLs become crawlable for that bot even though `*` blocks them.
const NAMED_BOTS = [
  "Googlebot",
  "Googlebot-Image",
  "bingbot",
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "PerplexityBot",
  "Google-Extended",
  "Applebot",
];

const BASE_RULES: RobotsRule[] = [
  { userAgent: "*", allow: "/", disallow: PRIVATE_DISALLOWS },
  ...NAMED_BOTS.map((userAgent) => ({ userAgent, allow: "/", disallow: PRIVATE_DISALLOWS })),
];

const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;

export default async function robots(): Promise<MetadataRoute.Robots> {
  const dbRows = await getActiveRobotsRules().catch(() => []);
  if (dbRows.length === 0) return { rules: BASE_RULES, sitemap: SITEMAP_URL };

  const grouped = new Map<string, { allow: string[]; disallow: string[]; crawlDelay?: number }>();
  for (const row of dbRows) {
    const ua = row.userAgent || "*";
    const bucket = grouped.get(ua) ?? { allow: [], disallow: [] };
    const directive = row.directive.toLowerCase();

    if (directive === "allow") bucket.allow.push(row.path);
    else if (directive === "disallow") bucket.disallow.push(row.path);
    else if (directive === "crawl-delay") {
      const delay = Number(row.path);
      if (Number.isFinite(delay)) bucket.crawlDelay = delay;
    }

    grouped.set(ua, bucket);
  }

  const dbRules: RobotsRule[] = [];
  for (const [userAgent, bucket] of grouped.entries()) {
    const baseDisallow = userAgent === "*" ? PRIVATE_DISALLOWS : [];
    dbRules.push({
      userAgent,
      allow: bucket.allow.length ? bucket.allow : userAgent === "*" ? "/" : undefined,
      disallow: [...new Set([...baseDisallow, ...bucket.disallow])],
      ...(bucket.crawlDelay ? { crawlDelay: bucket.crawlDelay } : {}),
    });
  }

  const dbUserAgents = new Set(dbRules.map((rule) => rule.userAgent));
  const preservedRules = BASE_RULES.filter((rule) => !dbUserAgents.has(rule.userAgent));

  return { rules: [...dbRules, ...preservedRules], sitemap: SITEMAP_URL };
}
