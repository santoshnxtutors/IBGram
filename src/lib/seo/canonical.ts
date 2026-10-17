import { absoluteUrl, ensureTrailingSlash, SITE_URL } from "./slug-utils";

const DUPLICATE_PATH_RULES: Array<{ pattern: RegExp; replacement: string }> = [
  { pattern: /^\/ib-tutors\/gurgaon(\/|$)/i, replacement: "/ib-tutors/gurugram$1" },
  { pattern: /^\/igcse-tutors\/gurgaon(\/|$)/i, replacement: "/igcse-tutors/gurugram$1" },
  { pattern: /^\/igcse-pages\/gurgaon(\/|$)/i, replacement: "/igcse-pages/gurugram$1" },
  { pattern: /^\/tutor-pages\/([^/?#]+)\/?$/i, replacement: "/tutor/$1/" },
  // No /subjects/ route exists; DB sitemap rows advertised these as 404s. Mapping
  // them as duplicates drops them from every sitemap emitter (next.config 301s them).
  { pattern: /^\/ib-tutors\/([^/]+)\/subjects(\/.*)?$/i, replacement: "/ib-tutors/$1/" },
  { pattern: /^\/igcse-tutors\/gurugram\/areas\/nirvana-country\/$/i, replacement: "/igcse-tutors/gurugram/societies/nirvana-country/" },
  { pattern: /^\/igcse-tutors\/gurugram\/areas\/sector-57\/$/i, replacement: "/igcse-tutors/gurugram/sectors/sector-57/" },
  // MYP/CP/DP/PYP are IB programmes; the /courses/igcse/ copies duplicate the IB
  // originals and next.config 301s them. Mapping them here keeps every sitemap
  // emitter and internal link pointing straight at the destination.
  { pattern: /^\/courses\/igcse\/(myp|cp|dp|pyp)\/$/i, replacement: "/courses/ib/$1/" },
  // Same subject under a short and a long slug; Google already chose the long one.
  { pattern: /^\/courses\/(ib|igcse)\/individuals\/$/i, replacement: "/courses/$1/individuals-and-societies/" },
  { pattern: /^\/blog\/how-to-score-a-7-in-ib-maths-aa-hl-step-by-step-strategy\/$/i, replacement: "/blog/how-to-score-7-ib-math-aa-hl/" },
];

export function normalizePath(pathOrUrl: string): string {
  const raw = pathOrUrl.trim();
  if (!raw) return "/";

  let pathname = raw;
  if (/^https?:\/\//i.test(raw)) {
    try {
      pathname = new URL(raw).pathname;
    } catch {
      pathname = raw;
    }
  }

  pathname = pathname.split("?")[0]?.split("#")[0] ?? "/";
  pathname = pathname.startsWith("/") ? pathname : `/${pathname}`;
  pathname = pathname.replace(/\/{2,}/g, "/").toLowerCase();

  return ensureTrailingSlash(pathname);
}

export function canonicalPath(path: string): string {
  let normalized = normalizePath(path);
  for (const rule of DUPLICATE_PATH_RULES) {
    if (rule.pattern.test(normalized)) {
      normalized = normalized.replace(rule.pattern, rule.replacement);
      break;
    }
  }
  return ensureTrailingSlash(normalized);
}

export function canonicalUrl(pathOrUrl: string): string {
  return absoluteUrl(canonicalPath(pathOrUrl));
}

export function getCanonicalUrl(pathOrUrl: string): string {
  return canonicalUrl(pathOrUrl);
}

export function isCanonicalPath(pathOrUrl: string): boolean {
  return normalizePath(pathOrUrl) === canonicalPath(pathOrUrl);
}

export function getCanonicalTargetForDuplicate(pathOrUrl: string): string | null {
  const normalized = normalizePath(pathOrUrl);
  const canonical = canonicalPath(normalized);
  return canonical === normalized ? null : canonical;
}

export function isCanonicalInternalUrl(url: string): boolean {
  return canonicalUrl(url) === url.replace(/^https:\/\/ibgram\.com/i, SITE_URL);
}
