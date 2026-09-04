import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { generatedSeoPages } from "./data";
import { seoContentPages } from "./registry";
import type { GeneratedSeoPage } from "@/lib/page-generator/types";
import { validateGeneratedSeoPage } from "@/lib/page-generator/validators";
import { getRouteKey } from "@/lib/page-generator/slug";
import { isGeneratedPageSitemapEligible } from "@/lib/seo/sitemap-utils";

const LOCAL_STORE_PATH = path.join(process.cwd(), "src", "lib", "generated-pages", "generated-pages.local.json");

// Merging + validating ~1.6k pages is expensive; the sources are static per process.
let allPagesCache: GeneratedSeoPage[] | null = null;
let pagesByRouteCache: Map<string, GeneratedSeoPage> | null = null;

export function getAllGeneratedPages(): GeneratedSeoPage[] {
  if (!allPagesCache) allPagesCache = mergePages(generatedSeoPages, seoContentPages, readLocalGeneratedPages());
  return allPagesCache;
}

export function getPublishedGeneratedPages(): GeneratedSeoPage[] {
  return getAllGeneratedPages().filter((page) => page.status === "published");
}

export function getSitemapGeneratedPages(): GeneratedSeoPage[] {
  return getAllGeneratedPages().filter(isGeneratedPageSitemapEligible);
}

export function getGeneratedPageByPath(pathname: string): GeneratedSeoPage | undefined {
  const routeKey = pathname.endsWith("/") ? pathname : `${pathname}/`;
  if (!pagesByRouteCache) {
    pagesByRouteCache = new Map(getAllGeneratedPages().map((page) => [getRouteKey(page), page]));
  }
  return pagesByRouteCache.get(routeKey);
}

export function saveGeneratedPage(page: GeneratedSeoPage): GeneratedSeoPage {
  const validated = validateGeneratedSeoPage(page);
  const localPages = readLocalGeneratedPages();
  const nextPages = mergePages(localPages.filter((item) => item.pageId !== validated.pageId), [validated]);
  mkdirSync(path.dirname(LOCAL_STORE_PATH), { recursive: true });
  writeFileSync(LOCAL_STORE_PATH, `${JSON.stringify(nextPages, null, 2)}\n`, "utf8");
  return validated;
}

function readLocalGeneratedPages(): GeneratedSeoPage[] {
  if (!existsSync(LOCAL_STORE_PATH)) return [];
  try {
    const parsed = JSON.parse(readFileSync(LOCAL_STORE_PATH, "utf8"));
    if (!Array.isArray(parsed)) return [];
    return parsed.map(validateGeneratedSeoPage);
  } catch {
    return [];
  }
}

function mergePages(...groups: GeneratedSeoPage[][]): GeneratedSeoPage[] {
  const pagesById = new Map<string, GeneratedSeoPage>();
  groups.flat().forEach((page) => pagesById.set(page.pageId, page));
  // One route can also be claimed by two different pageIds: the older template-built
  // Gurugram pages in data.ts and the pipeline-written replacement for the same URL.
  // getGeneratedPageByPath already preferred the later one, but every other consumer
  // (sitemap entries, static params, admin listings) still saw both records for one
  // URL. Collapse per route as well, keeping the later group — same precedence.
  const pagesByRoute = new Map<string, GeneratedSeoPage>();
  pagesById.forEach((page) => pagesByRoute.set(getRouteKey(page), page));
  return [...pagesByRoute.values()];
}
