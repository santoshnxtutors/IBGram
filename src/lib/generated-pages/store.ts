import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { generatedSeoPages } from "./data";
import type { GeneratedSeoPage } from "@/lib/page-generator/types";
import { validateGeneratedSeoPage } from "@/lib/page-generator/validators";
import { getRouteKey } from "@/lib/page-generator/slug";
import { isGeneratedPageSitemapEligible } from "@/lib/seo/sitemap-utils";

const LOCAL_STORE_PATH = path.join(process.cwd(), "src", "lib", "generated-pages", "generated-pages.local.json");

export function getAllGeneratedPages(): GeneratedSeoPage[] {
  return mergePages(generatedSeoPages, readLocalGeneratedPages());
}

export function getPublishedGeneratedPages(): GeneratedSeoPage[] {
  return getAllGeneratedPages().filter((page) => page.status === "published");
}

export function getSitemapGeneratedPages(): GeneratedSeoPage[] {
  return getAllGeneratedPages().filter(isGeneratedPageSitemapEligible);
}

export function getGeneratedPageByPath(pathname: string): GeneratedSeoPage | undefined {
  const routeKey = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return getAllGeneratedPages().find((page) => getRouteKey(page) === routeKey);
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
  return [...pagesById.values()];
}
