export const SITE_URL = "https://ibgram.com";

export function normalizeSlug(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

export function ensureTrailingSlash(path: string): string {
  if (path === "") return "/";
  if (/\.[a-zA-Z0-9]+(?:[?#].*)?$/.test(path)) return path;
  return path.endsWith("/") ? path : `${path}/`;
}

export function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return ensureTrailingSlash(path);
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${ensureTrailingSlash(normalizedPath)}`;
}

export function buildCityPath(citySlug: string): string {
  return `/ib-tutors/${normalizeSlug(citySlug)}/`;
}

export function buildCitySubpagePath(citySlug: string, pageSlug: string): string {
  return `/ib-tutors/${normalizeSlug(citySlug)}/${normalizeSlug(pageSlug)}/`;
}

export function buildCityAreaPath(citySlug: string, areaSlug: string): string {
  return `/ib-tutors/${normalizeSlug(citySlug)}/areas/${normalizeSlug(areaSlug)}/`;
}

export function buildCitySchoolPath(citySlug: string, schoolSlug: string): string {
  return `/ib-tutors/${normalizeSlug(citySlug)}/schools/${normalizeSlug(schoolSlug)}/`;
}
