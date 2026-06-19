export const SITE_URL = "https://www.ibgram.com";

const INTERNAL_HOSTS = new Set(["ibgram.com", "www.ibgram.com", "localhost", "127.0.0.1"]);

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

// Characters that are illegal in file names on common filesystems (NTFS) and so
// break `actions/upload-artifact` when Next prerenders `<slug>.html`. Also rejects
// whitespace and control chars. Valid kebab-case slugs pass.
const UNSAFE_SLUG_CHARS = /[<>:"/\\|?*]|\s/;

/**
 * True when a slug is safe to use as a static-route param (and therefore as a
 * prerendered file name). Guards generateStaticParams/sitemap against malformed
 * slugs (e.g. a blog slug accidentally set to the full title with a colon).
 */
export function isStaticSafeSlug(slug: string | null | undefined): slug is string {
  return typeof slug === "string" && slug.length > 0 && !UNSAFE_SLUG_CHARS.test(slug);
}

export function ensureTrailingSlash(path: string): string {
  if (path === "") return "/";
  if (/\.[a-zA-Z0-9]+(?:[?#].*)?$/.test(path)) return path;
  return path.endsWith("/") ? path : `${path}/`;
}

export function absoluteUrl(path: string): string {
  const trimmed = path.trim();
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    try {
      const url = new URL(trimmed);
      if (!INTERNAL_HOSTS.has(url.hostname.toLowerCase())) return trimmed;
      return `${SITE_URL}${ensureTrailingSlash(url.pathname)}${url.search}${url.hash}`;
    } catch {
      return ensureTrailingSlash(trimmed);
    }
  }

  const normalizedPath = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  const url = new URL(normalizedPath, SITE_URL);
  return `${SITE_URL}${ensureTrailingSlash(url.pathname)}${url.search}${url.hash}`;
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
