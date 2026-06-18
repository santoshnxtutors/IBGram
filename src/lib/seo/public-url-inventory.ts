import { canonicalUrl } from "./canonical";
import { getRobotsForPublicPage } from "./indexing-policy";

export type PublicUrlCategory = "must_indexable" | "should_noindex" | "should_redirect" | "should_404";

export type PublicUrlInventoryItem = {
  path: string;
  category: PublicUrlCategory;
  reason: string;
  canonicalUrl?: string;
};

const MUST_INDEXABLE_PATHS = [
  "/",
  "/about-us/",
  "/contact-us/",
  "/programmes/",
  "/programmes/pyp/",
  "/programmes/myp/",
  "/programmes/dp/",
  "/programmes/cp/",
  "/courses/ib/mathematics/",
  "/courses/igcse/mathematics/",
  "/ib-tutors/",
  "/ib-tutors/gurugram/",
  "/igcse/",
  "/igcse-pages/",
  "/igcse-tutors/gurugram/",
  "/admissions/",
  "/admissions/test-prep/",
  "/admissions/success-stories/",
  "/blog/",
  "/jobs/",
  "/tutors/",
];

const SHOULD_NOINDEX_PATHS = [
  "/admin/",
  "/admin/api/",
  "/api/",
  "/login/",
  "/signup/",
  "/subscription/",
  "/tutor-compare/",
  "/student/",
  "/preview/",
  "/draft/",
];

const SHOULD_REDIRECT_PATHS = [
  "/ib-tutors/gurgaon/",
  "/igcse-tutors/gurgaon/",
  "/igcse-pages/gurgaon/",
  "/tutor-pages/example/",
];

export function getPublicUrlInventory(): PublicUrlInventoryItem[] {
  return [
    ...MUST_INDEXABLE_PATHS.map((path) => ({
      path,
      category: "must_indexable" as const,
      canonicalUrl: canonicalUrl(path),
      reason: getRobotsForPublicPage({ path, status: "published" }).reason,
    })),
    ...SHOULD_NOINDEX_PATHS.map((path) => ({
      path,
      category: "should_noindex" as const,
      canonicalUrl: canonicalUrl(path),
      reason: getRobotsForPublicPage({ path, private: true }).reason,
    })),
    ...SHOULD_REDIRECT_PATHS.map((path) => ({
      path,
      category: "should_redirect" as const,
      canonicalUrl: canonicalUrl(path),
      reason: "Known duplicate/legacy URL should redirect to the canonical path.",
    })),
    {
      path: "/unknown-public-route/",
      category: "should_404",
      reason: "Unknown public slugs should return notFound() rather than a soft 200 or 500.",
    },
  ];
}
