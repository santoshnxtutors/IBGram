import { getAllGeneratedPages, getGeneratedPageByPath, getPublishedGeneratedPages } from "./store";
import type { GeneratedPageType, GeneratedSeoPage } from "@/lib/page-generator/types";

export function getGeneratedPageForRoute(pathname: string, allowedTypes: GeneratedPageType[]): GeneratedSeoPage | undefined {
  const page = getGeneratedPageByPath(pathname);
  if (!page || !allowedTypes.includes(page.pageType)) return undefined;
  if (page.status !== "published") return undefined;
  return page;
}

export function getGeneratedStaticParamsForTypes(allowedTypes: GeneratedPageType[]) {
  return getPublishedGeneratedPages()
    .filter((page) => allowedTypes.includes(page.pageType))
    .map((page) => ({
      citySlug: page.citySlug,
      pageSlug: page.slug,
      serviceSlug: page.slug,
      areaSlug: page.slug,
      sectorSlug: page.slug,
      societySlug: page.slug,
      schoolSlug: page.slug,
    }));
}

export function getAllGeneratedPagesForAdmin() {
  return getAllGeneratedPages();
}
