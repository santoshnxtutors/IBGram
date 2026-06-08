import { CACHE_TAGS } from "./cache-tags";

export type RoutePatternTarget = {
  path: string;
  type: "page" | "layout";
};

export type RevalidationTargets = {
  paths: string[];
  tags: string[];
  routePatterns?: RoutePatternTarget[];
  reason: string;
};

type PageMutationInput = {
  url?: string | null;
  canonicalUrl?: string | null;
  pageType?: string | null;
  status?: string | null;
  indexFlag?: string | null;
  curriculum?: string | null;
  citySlug?: string | null;
  slug?: string | null;
};

type BlogMutationInput = {
  slug?: string | null;
  status?: string | null;
};

type TutorMutationInput = {
  id?: string | null;
  slug?: string | null;
  primaryCitySlug?: string | null;
  primaryCity?: string | null;
  availableCities?: string[] | null;
  areas?: string[] | null;
  sectors?: string[] | null;
  societies?: string[] | null;
  nearbySchools?: string[] | null;
  availableAreas?: string[] | null;
  availableSectors?: string[] | null;
  availableSocieties?: string[] | null;
  ibSubjects?: string[] | null;
  igcseSubjects?: string[] | null;
  ibProgrammes?: string[] | null;
  curriculums?: string[] | string | null;
};

type FaqMutationInput = {
  category?: string | null;
  pageId?: string | null;
  citySlug?: string | null;
  curriculum?: string | null;
};

type InternalLinkMutationInput = {
  sourceUrl?: string | null;
  targetUrl?: string | null;
  sourcePagePath?: string | null;
  targetPagePath?: string | null;
};

const SITEMAP_PATH = "/sitemap.xml";

function unique(values: Array<string | null | undefined>): string[] {
  return [...new Set(values.filter((value): value is string => Boolean(value)))];
}

export function slugifyCachePathPart(value: string | null | undefined): string {
  if (!value) return "";
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

export function normalizeRevalidationPath(value: string | null | undefined): string | null {
  if (!value) return null;
  const withoutOrigin = value.trim().replace(/^https?:\/\/[^/]+/i, "");
  const withoutHash = withoutOrigin.split(/[?#]/)[0] || "/";
  const withSlash = withoutHash.startsWith("/") ? withoutHash : `/${withoutHash}`;
  if (withSlash === "/") return "/";
  return withSlash.endsWith("/") ? withSlash : `${withSlash}/`;
}

function pathFromPage(page: PageMutationInput): string | null {
  return normalizeRevalidationPath(page.url ?? page.canonicalUrl ?? null);
}

function cityFromTutor(tutor: TutorMutationInput): string {
  return slugifyCachePathPart(
    tutor.primaryCitySlug ??
      tutor.primaryCity ??
      tutor.availableCities?.[0] ??
      "gurugram",
  ) || "gurugram";
}

function curriculumSet(tutor: TutorMutationInput): Set<string> {
  const raw = Array.isArray(tutor.curriculums)
    ? tutor.curriculums
    : typeof tutor.curriculums === "string"
      ? tutor.curriculums.split(",")
      : [];
  const values = raw.map((item) => item.trim().toUpperCase()).filter(Boolean);
  if (tutor.ibSubjects?.length || tutor.ibProgrammes?.length) values.push("IB");
  if (tutor.igcseSubjects?.length) values.push("IGCSE");
  if (!values.length) values.push("IB", "IGCSE");
  if (values.includes("BOTH")) values.push("IB", "IGCSE");
  return new Set(values);
}

function localTutorPaths(prefix: "ib-tutors" | "igcse-tutors", tutor: TutorMutationInput): string[] {
  const city = cityFromTutor(tutor);
  const paths = [`/${prefix}/${city}/`];
  for (const area of tutor.availableAreas ?? tutor.areas ?? []) {
    const slug = slugifyCachePathPart(area);
    if (slug) paths.push(`/${prefix}/${city}/areas/${slug}/`);
  }
  for (const sector of tutor.availableSectors ?? tutor.sectors ?? []) {
    const slug = slugifyCachePathPart(sector);
    if (slug) paths.push(`/${prefix}/${city}/sectors/${slug}/`);
  }
  for (const society of tutor.availableSocieties ?? tutor.societies ?? []) {
    const slug = slugifyCachePathPart(society);
    if (slug) paths.push(`/${prefix}/${city}/societies/${slug}/`);
  }
  for (const school of tutor.nearbySchools ?? []) {
    const slug = slugifyCachePathPart(school);
    if (slug) paths.push(`/${prefix}/${city}/schools/${slug}/`);
  }
  return paths;
}

function marketingPagePatterns(paths: string[]): RoutePatternTarget[] {
  return paths.flatMap((path) => [
    { path, type: "page" as const },
    { path: `/(marketing)${path}`, type: "page" as const },
  ]);
}

export function getAffectedPathsForPage(...pages: Array<PageMutationInput | null | undefined>): RevalidationTargets {
  const paths = pages.flatMap((page) => {
    if (!page) return [];
    const path = pathFromPage(page);
    const list = [path, SITEMAP_PATH];
    if (path === "/") list.push("/");
    if (path?.startsWith("/blog/")) list.push("/blog/");
    if (path?.startsWith("/ib-tutors/")) {
      const [, , city] = path.split("/");
      if (city) list.push(`/ib-tutors/${city}/`);
    }
    if (path?.startsWith("/igcse-tutors/")) {
      const [, , city] = path.split("/");
      if (city) list.push(`/igcse-tutors/${city}/`);
    }
    return list;
  });

  return {
    paths: unique(paths),
    tags: [CACHE_TAGS.generatedPages, CACHE_TAGS.sitemap],
    reason: "admin page content changed",
  };
}

export function getAffectedPathsForHomepage(): RevalidationTargets {
  return {
    paths: ["/"],
    tags: [CACHE_TAGS.homepage],
    reason: "homepage content changed",
  };
}

export function getAffectedPathsForBlog(...posts: Array<BlogMutationInput | null | undefined>): RevalidationTargets {
  const postPaths = posts.flatMap((post) => (post?.slug ? [`/blog/${post.slug}/`] : []));
  return {
    paths: unique(["/blog/", "/", "/igcse/", SITEMAP_PATH, ...postPaths]),
    tags: [CACHE_TAGS.blog, CACHE_TAGS.sitemap],
    reason: "blog content changed",
  };
}

export function getAffectedPathsForTutor(...tutors: Array<TutorMutationInput | null | undefined>): RevalidationTargets {
  const paths: string[] = ["/tutors/", "/", SITEMAP_PATH];

  for (const tutor of tutors) {
    if (!tutor) continue;
    const curricula = curriculumSet(tutor);
    if (tutor.id) paths.push(`/tutor-profile/${tutor.id}/`);
    if (tutor.slug) paths.push(`/tutor/${tutor.slug}/`);

    if (curricula.has("IB")) {
      paths.push(...localTutorPaths("ib-tutors", tutor));
      for (const programme of tutor.ibProgrammes ?? []) {
        const slug = slugifyCachePathPart(programme);
        if (slug) paths.push(`/programmes/${slug}/`);
      }
      for (const subject of tutor.ibSubjects ?? []) {
        const slug = slugifyCachePathPart(subject);
        if (slug) paths.push(`/courses/ib/${slug}/`);
      }
    }

    if (curricula.has("IGCSE")) {
      paths.push(...localTutorPaths("igcse-tutors", tutor));
      const city = cityFromTutor(tutor);
      for (const subject of tutor.igcseSubjects ?? []) {
        const slug = slugifyCachePathPart(subject);
        if (slug) {
          paths.push(`/courses/igcse/${slug}/`);
          paths.push(`/igcse-tutors/${city}/${slug}/`);
        }
      }
    }
  }

  return {
    paths: unique(paths),
    routePatterns: marketingPagePatterns([
      "/ib-tutors/[citySlug]",
      "/ib-tutors/[citySlug]/areas/[areaSlug]",
      "/ib-tutors/[citySlug]/sectors/[sectorSlug]",
      "/ib-tutors/[citySlug]/societies/[societySlug]",
      "/ib-tutors/[citySlug]/schools/[schoolSlug]",
      "/igcse-tutors/[citySlug]",
      "/igcse-tutors/[citySlug]/[subjectSlug]",
      "/igcse-tutors/[citySlug]/areas/[areaSlug]",
      "/igcse-tutors/[citySlug]/sectors/[sectorSlug]",
      "/igcse-tutors/[citySlug]/societies/[societySlug]",
      "/igcse-tutors/[citySlug]/schools/[schoolSlug]",
      "/courses/[curriculum]/[subject]",
    ]),
    tags: [CACHE_TAGS.tutors, CACHE_TAGS.tutorVisibility, CACHE_TAGS.sitemap],
    reason: "tutor or tutor location changed",
  };
}

export function getAffectedPathsForFaq(...faqs: Array<FaqMutationInput | null | undefined>): RevalidationTargets {
  const paths = ["/"];
  for (const faq of faqs) {
    if (!faq) continue;
    const pagePath = normalizeRevalidationPath(faq.pageId);
    if (pagePath) paths.push(pagePath);
    const city = slugifyCachePathPart(faq.citySlug);
    if (city) {
      paths.push(`/ib-tutors/${city}/`);
      paths.push(`/igcse-tutors/${city}/`);
    }
  }
  return {
    paths: unique(paths),
    tags: [CACHE_TAGS.publicFaqs],
    reason: "FAQ content changed",
  };
}

export function getAffectedPathsForReviewSurface(tag: typeof CACHE_TAGS.testimonials | typeof CACHE_TAGS.successStories): RevalidationTargets {
  return {
    paths: ["/"],
    tags: [tag],
    reason: "homepage review content changed",
  };
}

export function getAffectedPathsForAsset(): RevalidationTargets {
  return {
    paths: [],
    tags: [CACHE_TAGS.assets],
    reason: "asset library changed",
  };
}

export function getAffectedPathsForInternalLink(link: InternalLinkMutationInput): RevalidationTargets {
  return {
    paths: unique([
      normalizeRevalidationPath(link.sourceUrl ?? link.sourcePagePath),
      normalizeRevalidationPath(link.targetUrl ?? link.targetPagePath),
      SITEMAP_PATH,
    ]),
    tags: [CACHE_TAGS.generatedPages, CACHE_TAGS.sitemap],
    reason: "internal links changed",
  };
}

export function mergeRevalidationTargets(reason: string, targets: RevalidationTargets[]): RevalidationTargets {
  return {
    paths: unique(targets.flatMap((target) => target.paths)),
    tags: unique(targets.flatMap((target) => target.tags)),
    routePatterns: targets.flatMap((target) => target.routePatterns ?? []),
    reason,
  };
}
