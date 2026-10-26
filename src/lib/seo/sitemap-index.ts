/**
 * The sitemap index and its nine child sitemaps.
 *
 * https://www.ibgram.com/sitemap.xml is a <sitemapindex> listing the children below; each child
 * is a <urlset> served from its own URL. Search Console reports indexed-vs-discovered per
 * submitted sitemap, so one flat file gives a single number for 5,000+ URLs and no way to tell
 * which part of the site is failing to index. Split, "Discovered - currently not indexed" can be
 * attributed to a section and acted on.
 *
 * Two rules hold this together:
 *
 * 1. A URL appears in EXACTLY ONE child. The set is deduped globally, first-wins, in
 *    DEDUPE_ORDER below - not in the display order. The same URL in two sitemaps is not an
 *    error Google reports; it just makes the per-sitemap counts meaningless, which defeats the
 *    reason for splitting.
 *
 * 2. Only URLs that actually render are listed. Everything here flows from the same code the
 *    routes use, so a page that is planned but unwritten is absent rather than a 404 in the
 *    sitemap - the failure that put ~1,800 dead URLs in Search Console before.
 */
import type { MetadataRoute } from "next";
import { getBlogSitemapEntries } from "@/lib/cms/blog";
import { listPublishedDbSitemapEntries } from "@/lib/cms/generated-pages-db";
import { getPublicTutorProfileSitemapEntries } from "@/lib/cms/public-tutors";
import { getPublishedJobSitemapEntries } from "@/lib/jobs";
import { getTutorReachSitemapEntries } from "@/lib/cms/tutor-reach";
import { getIncludedSitemapEntries } from "@/lib/seo/seo-db";
import { absoluteUrl } from "@/lib/seo/slug-utils";
import { dedupeSitemapUrls, normalizeCanonicalUrl, shouldIncludeInSitemap } from "@/lib/seo/sitemap-policy";
import { getSectionedSitemapEntries } from "./sitemap";

export type SitemapEntry = MetadataRoute.Sitemap[number];

/**
 * The child sitemaps, in the order they are listed in the index. This is the order a human
 * reads them in; it is NOT the dedupe order.
 */
export const SITEMAP_FILES = [
  "pages",
  "services",
  "gurgaon",
  "indian-cities",
  "mumbai",
  "country",
  "uae",
  "blogs",
  "teacher",
] as const;

export type SitemapFile = (typeof SITEMAP_FILES)[number];

/**
 * Which child claims a URL when more than one would contain it.
 *
 * The specific sections come first and `services` comes last, because `services` carries the
 * generated-page store, which re-lists ~1,400 URLs that already belong to gurgaon, igcse or
 * ib-tutors. Putting it last means those URLs stay in the section that describes them and
 * `services` keeps only what nothing else claimed.
 */
const DEDUPE_ORDER: SitemapFile[] = [
  "pages",
  "blogs",
  "teacher",
  "uae",
  "mumbai",
  "gurgaon",
  "indian-cities",
  "country",
  "services",
];

/** One human-readable line per child, shown in the admin sitemap screen. */
export const SITEMAP_FILE_LABELS: Record<SitemapFile, string> = {
  pages: "Homepage, core marketing and policy pages",
  services: "IGCSE, IB tutor and subject service pages",
  gurgaon: "Gurugram hyperlocal and keyword pages",
  "indian-cities": "Indian city landing pages",
  mumbai: "Mumbai hub and long-tail pages",
  country: "Country landing pages",
  uae: "UAE emirate, area and keyword pages",
  blogs: "Blog posts",
  teacher: "Tutor profiles and tutor reach pages",
};

export const sitemapFilePath = (file: SitemapFile): string => `/sitemap-${file}.xml`;
export const sitemapFileUrl = (file: SitemapFile): string => absoluteUrl(sitemapFilePath(file));

/**
 * Every child sitemap's rows, deduped globally so each URL appears exactly once across the set.
 *
 * Async because four of the sources are database reads. Each is wrapped so one unavailable
 * source degrades that child to empty rather than failing the whole index - a sitemap that
 * 500s is worse than one that is briefly short.
 */
export async function getSitemapSections(): Promise<Record<SitemapFile, MetadataRoute.Sitemap>> {
  const code = getSectionedSitemapEntries();

  const [blogPosts, tutorProfiles, tutorReach, dbPages, dbOverrides, jobRoles] = await Promise.all([
    getBlogSitemapEntries().catch(() => []),
    getPublicTutorProfileSitemapEntries().catch(() => []),
    getTutorReachSitemapEntries().catch(() => []),
    listPublishedDbSitemapEntries().catch(() => []),
    getIncludedSitemapEntries().catch(() => []),
    getPublishedJobSitemapEntries().catch(() => []),
  ]);

  // One row per open vacancy. /jobs/ itself is already in code.core, and each role page
  // carries its own JobPosting markup, so these are the URLs Google actually wants listed.
  const jobs: MetadataRoute.Sitemap = jobRoles.map((role) => ({
    url: absoluteUrl(`/jobs/${role.slug}/`),
    lastModified: role.publishedAt ?? role.updatedAt,
    changeFrequency: "weekly" as const,
    priority: 0.56,
  }));

  const blogs: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}/`),
    lastModified: post.lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const teacher: MetadataRoute.Sitemap = [
    ...tutorProfiles.map((tutor) => ({
      url: absoluteUrl(`/tutor-profile/${tutor.slug}/`),
      lastModified: tutor.lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.64,
    })),
    ...tutorReach.map((reach) => ({
      url: absoluteUrl(`/tutor/${reach.slug}/`),
      lastModified: reach.lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.68,
    })),
  ];

  const dbPageRows: MetadataRoute.Sitemap = dbPages.map((page) => ({
    url: normalizeCanonicalUrl(page.canonicalUrl ?? page.fullPath),
    lastModified: page.publishedAt ?? page.updatedAt,
    changeFrequency: "weekly" as const,
    priority: page.qualityScore ? Math.min(1, Math.max(0.4, page.qualityScore / 100)) : 0.7,
  }));

  const raw: Record<SitemapFile, MetadataRoute.Sitemap> = {
    pages: [...code.core, ...jobs],
    // The generated-page store lands here; DEDUPE_ORDER keeps it from stealing URLs that
    // belong to a more specific child.
    services: [...code.igcse, ...code["ib-tutors"], ...code.generated, ...dbPageRows],
    gurgaon: code.gurgaon,
    "indian-cities": code.cities,
    mumbai: code.mumbai,
    country: code.countries,
    uae: code.uae,
    blogs,
    teacher: [...code["tutor-profiles"], ...teacher],
  };

  // Admin overrides from the SEO database: lastmod / changefreq / priority for URLs already
  // present. They never add a URL, because a row pointing at a path with no route would be a
  // sitemap entry that 404s.
  const overrideByUrl = new Map(
    dbOverrides.map((row) => [normalizeCanonicalUrl(row.loc), row] as const),
  );

  const claimed = new Set<string>();
  const out = {} as Record<SitemapFile, MetadataRoute.Sitemap>;
  for (const file of SITEMAP_FILES) out[file] = [];

  for (const file of DEDUPE_ORDER) {
    const rows: MetadataRoute.Sitemap = [];
    for (const entry of raw[file]) {
      if (!shouldIncludeInSitemap(entry)) continue;
      const url = normalizeCanonicalUrl(String(entry.url));
      if (claimed.has(url)) continue;
      claimed.add(url);

      const override = overrideByUrl.get(url);
      rows.push({
        ...entry,
        url,
        ...(override?.lastmod ? { lastModified: override.lastmod } : {}),
        ...(override?.changefreq
          ? { changeFrequency: override.changefreq as SitemapEntry["changeFrequency"] }
          : {}),
        ...(override?.priority !== null && override?.priority !== undefined
          ? { priority: override.priority }
          : {}),
      });
    }
    out[file] = dedupeSitemapUrls(rows);
  }

  return out;
}

/** Rows for one child sitemap. */
export async function getSitemapSection(file: SitemapFile): Promise<MetadataRoute.Sitemap> {
  const sections = await getSitemapSections();
  return sections[file] ?? [];
}

export const isSitemapFile = (value: string): value is SitemapFile =>
  (SITEMAP_FILES as readonly string[]).includes(value);

/* ------------------------------------------------------------------ */
/* XML                                                                 */
/* ------------------------------------------------------------------ */

const xmlEscape = (value: string): string =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

/** ISO date (YYYY-MM-DD) is what Search Console shows; the time part adds nothing. */
function isoDate(value: SitemapEntry["lastModified"]): string | null {
  if (!value) return null;
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? null : date.toISOString().slice(0, 10);
}

export function renderUrlset(entries: MetadataRoute.Sitemap): string {
  const urls = entries
    .map((entry) => {
      const lastmod = isoDate(entry.lastModified);
      return [
        "<url>",
        `<loc>${xmlEscape(String(entry.url))}</loc>`,
        lastmod ? `<lastmod>${lastmod}</lastmod>` : "",
        entry.changeFrequency ? `<changefreq>${entry.changeFrequency}</changefreq>` : "",
        entry.priority !== undefined ? `<priority>${Number(entry.priority).toFixed(2)}</priority>` : "",
        "</url>",
      ]
        .filter(Boolean)
        .join("");
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function renderSitemapIndex(children: Array<{ url: string; lastModified?: string | null }>): string {
  const items = children
    .map(({ url, lastModified }) =>
      ["<sitemap>", `<loc>${xmlEscape(url)}</loc>`, lastModified ? `<lastmod>${lastModified}</lastmod>` : "", "</sitemap>"]
        .filter(Boolean)
        .join(""),
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</sitemapindex>\n`;
}

/** Newest lastmod in a child, so the index tells a crawler which file changed. */
export function newestLastmod(entries: MetadataRoute.Sitemap): string | null {
  let newest: string | null = null;
  for (const entry of entries) {
    const date = isoDate(entry.lastModified);
    if (date && (!newest || date > newest)) newest = date;
  }
  return newest;
}
