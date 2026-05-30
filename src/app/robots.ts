import type { MetadataRoute } from "next";
import { getActiveRobotsRules } from "@/lib/seo/seo-db";

const FALLBACK_RULES: MetadataRoute.Robots["rules"] = [
  {
    userAgent: "*",
    allow: "/",
    disallow: ["/admin/", "/admin/api/", "/api/"],
  },
];

const SITEMAP_URL = process.env.NEXT_PUBLIC_SITE_URL
  ? `${process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")}/sitemap.xml`
  : "https://ibgram.com/sitemap.xml";

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

  const rules: MetadataRoute.Robots["rules"] = [];
  for (const [userAgent, bucket] of grouped.entries()) {
    rules.push({
      userAgent,
      ...(bucket.allow.length ? { allow: bucket.allow } : {}),
      ...(bucket.disallow.length ? { disallow: bucket.disallow } : {}),
      ...(bucket.crawlDelay ? { crawlDelay: bucket.crawlDelay } : {}),
    });
  }

  return { rules, sitemap: SITEMAP_URL };
}
