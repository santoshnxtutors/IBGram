import { canonicalUrl, getCanonicalTargetForDuplicate, normalizePath } from "./canonical";

export type PublicPageContext = {
  path: string;
  status?: "published" | "live" | "draft" | "review" | "preview" | "paused" | "archived";
  indexFlag?: "index" | "noindex" | "auto";
  qualityScore?: number | null;
  wordCount?: number | null;
  duplicate?: boolean;
  private?: boolean;
};

export type PublicPageRobots = {
  index: boolean;
  follow: boolean;
  googleBot?: {
    index: boolean;
    follow: boolean;
  };
  reason: string;
  canonicalUrl: string;
};

const PRIVATE_PREFIXES = [
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
  "/search/",
  "/subscription/",
  "/tutor-compare/",
];

const NOINDEX_PATTERNS = [/^\/jobs\/[^/]+\/apply\/$/];

export function getRobotsForPublicPage(context: PublicPageContext): PublicPageRobots {
  const path = normalizePath(context.path);
  const duplicateTarget = getCanonicalTargetForDuplicate(path);
  const canonical = canonicalUrl(duplicateTarget ?? path);

  if (context.private || isPrivateOrUtilityPath(path)) {
    return noindex(canonical, "Private, auth, API, form, or utility route.");
  }

  if (duplicateTarget) {
    return noindex(canonical, "Duplicate URL is canonicalized to the final public URL.");
  }

  if (context.status && !["published", "live"].includes(context.status)) {
    return noindex(canonical, "Page is not published/live.");
  }

  if (context.indexFlag === "noindex") {
    return noindex(canonical, "Page is intentionally marked noindex.");
  }

  if (context.duplicate) {
    return noindex(canonical, "Page is a duplicate or near-duplicate.");
  }

  if (typeof context.wordCount === "number" && context.wordCount > 0 && context.wordCount < 180) {
    return noindex(canonical, "Page content is too thin for indexing.");
  }

  if (typeof context.qualityScore === "number" && context.qualityScore > 0 && context.qualityScore < 45) {
    return noindex(canonical, "Page quality score is below the indexable threshold.");
  }

  return {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
    reason: "Canonical public page is indexable.",
    canonicalUrl: canonical,
  };
}

export function isPrivateOrUtilityPath(pathOrUrl: string): boolean {
  const path = normalizePath(pathOrUrl);
  return PRIVATE_PREFIXES.some((prefix) => path.startsWith(prefix)) || NOINDEX_PATTERNS.some((pattern) => pattern.test(path));
}

function noindex(canonical: string, reason: string): PublicPageRobots {
  return {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
    reason,
    canonicalUrl: canonical,
  };
}
