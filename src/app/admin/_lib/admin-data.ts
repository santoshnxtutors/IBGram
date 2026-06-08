import "server-only";

import { existsSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

import { allTutors } from "@/lib/tutor-data";
import { getAllCitySeoPages } from "@/lib/seo/city-pages";
import { getAllIgcseCityPages } from "@/lib/seo/igcse-city-pages";
import { CITY_CONTENT_PAGE_SLUGS } from "@/lib/seo/internal-links";
import { getAllGeneratedPages, saveGeneratedPage } from "@/lib/generated-pages/store";
import { writeGeneratedPageToDb } from "@/lib/cms/generated-page-writer";
import { prisma } from "@/lib/db";
import { gurgaonLocalPlaces } from "@/lib/local-seo/gurgaon";
import {
  getIgcseTutorAreaStaticParams,
  getIgcseTutorCityStaticParams,
  getIgcseTutorSectorStaticParams,
  getIgcseTutorSocietyStaticParams,
} from "@/lib/tutors/igcse-route-helpers";
import { igcseAdminContentBlocks, igcseFaqs, igcseInternalLinks } from "@/app/(marketing)/igcse/content";
import { cambridgeSubjects, edexcelSubjects } from "@/app/(marketing)/igcse/data";
import type { GeneratedContentBlock, GeneratedInternalLink, GeneratedSeoPage } from "@/lib/page-generator/types";
import { generateSeoPage } from "@/lib/page-generator/page-generator";
import type { SeoGeneratorInput } from "@/lib/page-generator/types";

import type {
  AdminAuditLog,
  AdminInternalLinkRecord,
  AdminLocationRecord,
  AdminPageRecord,
  AdminSeoHealth,
  AdminTutorRecord,
} from "../_types/admin";
import { countWordsAdmin, pathFromUrl, slugifyAdmin } from "./admin-url";

const DOMAIN = "https://ibgram.com";
const COURSE_SUBJECT_SLUGS = ["pyp", "myp", "dp", "cp", "mathematics", "sciences", "individuals", "individuals-and-societies", "english", "language"];
const PUBLIC_PAGE_PRIORITY: Record<AdminPageRecord["source"], number> = {
  generated: 5,
  "city-seo": 4,
  "igcse-city": 4,
  tutor: 3,
  static: 2,
  "app-route": 1,
};

function gurgaonPremiumScore(place: (typeof gurgaonLocalPlaces)[number]) {
  const localCoverage = place.nearbyAreas.length + place.nearbySectors.length + place.nearbySocieties.length;
  const indexBase = place.indexFlag === "index" ? 70 : 45;
  const duplicatePenalty = place.duplicateRisk === "high" ? 20 : place.duplicateRisk === "medium" ? 10 : 0;
  return Math.max(0, Math.min(100, indexBase + localCoverage * 3 - duplicatePenalty));
}

function gurgaonDemandScore(place: (typeof gurgaonLocalPlaces)[number]) {
  const reasonBase =
    place.indexReason === "strong-local-depth"
      ? 82
      : place.indexReason === "mapped-local-intent"
        ? 70
        : 45;
  return Math.max(0, Math.min(100, reasonBase + place.schoolEcosystem.length * 2 + place.nearbyAreas.length));
}

function generatedPageTypeToAdmin(page: GeneratedSeoPage): AdminPageRecord["pageType"] {
  if (page.pageType === "city") {
    return page.serviceFocus.toLowerCase().includes("igcse") ? "igcse_city" : "ib_city";
  }
  return page.pageType as AdminPageRecord["pageType"];
}

export async function getPages(): Promise<AdminPageRecord[]> {
  const explicitPages = buildExplicitRoutePages();
  const cityPages = getAllCitySeoPages().map<AdminPageRecord>((page) => {
    const body = [
      page.h1,
      page.introSummary,
      ...page.cityOverview,
      ...page.cityAcademicIntro,
      ...page.cityFaqs.flatMap((faq) => [faq.question, faq.answer]),
    ].join(" ");

    return {
      id: page.pageId,
      title: page.metaTitle,
      slug: page.citySlug,
      url: pathFromUrl(page.canonicalUrl),
      pageType: "ib_city",
      curriculum: "IB",
      city: page.cityName,
      locality: page.cityName,
      localityType: "city",
      status: page.status === "live" ? "published" : page.status,
      indexFlag: page.indexFlag,
      seoScore: Math.round((page.contentUniquenessScore + page.demandScore + page.priorityScore * 10) / 3),
      qualityScore: page.contentUniquenessScore,
      localDepthScore: Math.min(100, page.demandScore),
      duplicateRisk: page.contentUniquenessScore > 85 ? "low" : "medium",
      wordCount: countWordsAdmin(body),
      internalLinksCount: page.internalLinksOut.length,
      incomingLinksCount: page.internalLinksIn.length,
      hasSchema: Boolean(page.schema),
      hasFaqs: page.cityFaqs.length > 0,
      missingMetadata: !page.metaTitle || !page.metaDescription,
      lastUpdated: page.lastUpdated,
      primaryKeyword: page.primaryKeyword,
      secondaryKeywords: page.secondaryKeywords,
      searchIntent: page.searchIntent,
      metaTitle: page.metaTitle,
      metaDescription: page.metaDescription,
      h1: page.h1,
      canonicalUrl: page.canonicalUrl,
      robotsTag: page.robotsTag,
      ogTitle: page.ogTitle,
      ogDescription: page.ogDescription,
      ogImage: page.ogImage,
      twitterTitle: page.ogTitle,
      twitterDescription: page.ogDescription,
      heroTitle: page.heroTitle,
      heroSubtitle: page.heroSubtitle,
      introSummary: page.introSummary,
      contentBlocks: cityBlocks(page),
      faqs: page.cityFaqs,
      internalLinks: page.internalLinksOut.map(normalizeInternalLink),
      schema: page.schema as unknown as Record<string, unknown>,
      sitemapIncluded: page.status === "live" && page.indexFlag === "index",
      safeDisclaimer: page.schoolDisclaimer,
      source: "city-seo",
    };
  });

  const igcsePages = getAllIgcseCityPages().map<AdminPageRecord>((page) => ({
    id: page.pageId,
    title: page.metaTitle,
    slug: page.citySlug,
    url: page.canonicalPath,
    pageType: "igcse_city",
    curriculum: "IGCSE",
    city: page.cityName,
    locality: page.cityName,
    localityType: "city",
    status: page.status === "live" ? "published" : "draft",
    indexFlag: page.indexFlag,
    seoScore: Math.round(page.priorityScore * 100),
    qualityScore: Math.round(page.priorityScore * 100),
    localDepthScore: 82,
    duplicateRisk: "low",
    wordCount: countWordsAdmin([page.h1, page.introSummary, ...page.cityAcademicIntro, page.finalCta].join(" ")),
    internalLinksCount: page.internalLinks.length,
    incomingLinksCount: 0,
    hasSchema: true,
    hasFaqs: page.faqs.length > 0,
    missingMetadata: !page.metaTitle || !page.metaDescription,
    lastUpdated: page.lastUpdated,
    primaryKeyword: page.keywords[0] ?? "",
    secondaryKeywords: page.keywords.slice(1),
    searchIntent: "Find board-aware IGCSE tutors by city.",
    metaTitle: page.metaTitle,
    metaDescription: page.metaDescription,
    h1: page.h1,
    canonicalUrl: page.canonicalUrl,
    robotsTag: page.indexFlag === "index" ? "index, follow" : "noindex, follow",
    ogTitle: page.ogTitle,
    ogDescription: page.ogDescription,
    ogImage: page.ogImage,
    twitterTitle: page.twitterTitle,
    twitterDescription: page.twitterDescription,
    heroTitle: page.heroTitle,
    heroSubtitle: page.heroSubtitle,
    introSummary: page.introSummary,
    contentBlocks: [
      { type: "intro", heading: "City academic context", body: page.cityAcademicIntro.join("\n\n"), items: page.trustPoints },
      { type: "subjects", heading: page.subjectSectionTitle, body: page.subjects.map((subject) => subject.description).join(" "), items: page.subjects.map((subject) => subject.name) },
      { type: "local_areas", heading: page.areaSectionTitle, body: page.areaNotes.map((area) => area.description).join(" "), items: page.areaNotes.map((area) => area.name) },
      { type: "schools", heading: page.schoolSectionTitle, body: page.schoolDisclaimer, items: page.schoolEcosystem.map((school) => school.name) },
      { type: "cta", heading: "Final CTA", body: page.finalCta, items: [] },
    ],
    faqs: page.faqs,
    internalLinks: page.internalLinks.map(normalizeInternalLink),
    schema: { faq: true, service: "IGCSE tutoring", city: page.cityName },
    sitemapIncluded: page.status === "live" && page.indexFlag === "index",
    safeDisclaimer: page.schoolDisclaimer,
    source: "igcse-city",
  }));

  const generatedPages = getAllGeneratedPages().map(generatedToAdminPage);
  const supplementalPages = buildSupplementalPublicPages();
  return dedupePages([...explicitPages, ...supplementalPages, ...cityPages, ...igcsePages, ...generatedPages]);
}

export async function getPageById(id: string): Promise<AdminPageRecord | undefined> {
  return (await getPages()).find((page) => page.id === id);
}

export async function savePage(page: AdminPageRecord): Promise<{ page: AdminPageRecord; persisted: boolean; message: string }> {
  if (page.source === "generated") {
    const generated = getAllGeneratedPages().find((item) => item.pageId === page.id);
    if (generated) {
      const merged = {
        ...generated,
        status: (page.status === "published" ? "published" : page.status === "review" ? "review" : "draft") as typeof generated.status,
        indexFlag: page.indexFlag,
        metaTitle: page.metaTitle,
        metaDescription: page.metaDescription,
        h1: page.h1,
        heroTitle: page.heroTitle,
        heroSubtitle: page.heroSubtitle,
        introSummary: page.introSummary,
        contentBlocks: page.contentBlocks,
        faqs: page.faqs,
        internalLinks: page.internalLinks,
        schema: page.schema,
        lastUpdated: new Date().toISOString().slice(0, 10),
      };
      // Dual-write: existing JSON store (backward-compat) + Prisma (forward DB-first reads)
      saveGeneratedPage(merged);
      const dbResult = await writeGeneratedPageToDb(merged);
      return {
        page,
        persisted: true,
        message: dbResult.ok
          ? "Saved to local generated-pages store and Prisma database."
          : `Saved to local store; database write failed: ${dbResult.error}`,
      };
    }
  }

  return {
    page,
    persisted: false,
    message: "Preview saved in memory only. Connect a database-backed adapter before editing static source pages at runtime.",
  };
}

export async function updatePage(id: string, patch: Partial<AdminPageRecord>) {
  const page = await getPageById(id);
  if (!page) return undefined;
  return savePage({ ...page, ...patch });
}

export async function publishPage(id: string) {
  return updatePage(id, { status: "published", indexFlag: "index" });
}

function unique<T>(values: Array<T | null | undefined>): T[] {
  return [...new Set(values.filter((v): v is T => v !== null && v !== undefined && v !== ""))];
}

async function getTutorsFromDb(): Promise<AdminTutorRecord[] | null> {
  try {
    const rows = await prisma.tutor.findMany({
      where: { deletedAt: null },
      include: {
        profile: true,
        subjects: true,
        curriculums: true,
        locations: { orderBy: { priority: "asc" } },
      },
      orderBy: { displayName: "asc" },
    });
    if (rows.length === 0) return null;
    return rows.map((tutor) => {
      const ibCurriculum = tutor.curriculums.find((c) => c.curriculum === "IB");
      const igcseCurriculum = tutor.curriculums.find((c) => c.curriculum === "IGCSE");
      const curriculums =
        ibCurriculum && igcseCurriculum ? "Both" : ibCurriculum ? "IB" : igcseCurriculum ? "IGCSE" : "IB";
      const primaryLocation = tutor.locations[0];
      return {
        id: tutor.id,
        name: tutor.displayName,
        slug: tutor.slug,
        image: tutor.avatarUrl ?? undefined,
        headline: tutor.headline ?? "",
        bio: tutor.bio ?? "",
        about: tutor.about ?? "",
        faqs: Array.isArray(tutor.faqs)
          ? (tutor.faqs as unknown[])
              .filter((f): f is { question?: unknown; answer?: unknown } => typeof f === "object" && f !== null)
              .map((f) => ({ question: String(f.question ?? ""), answer: String(f.answer ?? "") }))
              .filter((f) => f.question && f.answer)
          : [],
        curriculums,
        ibProgrammes: unique(tutor.curriculums.filter((c) => c.curriculum === "IB").map((c) => c.programme)),
        ibSubjects: tutor.subjects.filter((s) => s.curriculum === "IB").map((s) => s.subjectName),
        igcseSubjects: tutor.subjects.filter((s) => s.curriculum === "IGCSE").map((s) => s.subjectName),
        subjectLevels: unique(tutor.subjects.map((s) => s.level)),
        teachingModes: primaryLocation
          ? [
              primaryLocation.homeTutoringAvailable ? "home" : "",
              primaryLocation.onlineTutoringAvailable ? "online" : "",
              primaryLocation.hybridTutoringAvailable ? "hybrid" : "",
            ].filter(Boolean)
          : [],
        primaryCity: primaryLocation?.cityName ?? "",
        availableCities: unique(tutor.locations.map((l) => l.cityName)),
        availableAreas: unique(tutor.locations.map((l) => l.areaName)),
        availableSectors: unique(tutor.locations.map((l) => l.sectorName)),
        availableSocieties: unique(tutor.locations.map((l) => l.societyName)),
        nearbySchools: unique(tutor.locations.map((l) => l.nearbySchoolName)),
        travelNotes: primaryLocation?.notes ?? "",
        availabilityNotes: tutor.profile?.availabilityText ?? "",
        verificationStatus: tutor.verified ? "verified" : "pending",
        profileStatus:
          tutor.status === "active" ? "active" : tutor.status === "paused" ? "paused" : "draft",
        rating: Number(tutor.rating ?? 0),
        reviews: tutor.reviewCount,
        experienceYears: tutor.experienceYears ?? null,
        hourlyRate: tutor.hourlyRate != null ? Number(tutor.hourlyRate) : null,
        currency: tutor.currency ?? "INR",
        education: tutor.profile?.education ?? null,
        successRate: tutor.profile?.successRate ?? null,
        responseTime: tutor.profile?.responseTime ?? null,
        availabilityText: tutor.profile?.availabilityText ?? null,
        methodology: tutor.profile?.methodology ?? null,
        tags: tutor.profile?.tags ?? [],
        languages: tutor.profile?.languages ?? [],
        lastUpdated: tutor.updatedAt.toISOString().slice(0, 10),
      } satisfies AdminTutorRecord;
    });
  } catch {
    return null;
  }
}

export async function getTutors(): Promise<AdminTutorRecord[]> {
  // DB-first — return Prisma tutors when ingested. Static fallback only when
  // the DB is empty or unreachable so dev still works before `db:import-current`.
  const dbTutors = await getTutorsFromDb();
  if (dbTutors && dbTutors.length > 0) return dbTutors;

  return allTutors.map((tutor) => ({
    id: String(tutor.id),
    name: tutor.name,
    slug: slugifyAdmin(`${tutor.name}-${tutor.id}`),
    image: tutor.image,
    headline: `${tutor.subject} tutor for ${tutor.grade}`,
    bio: tutor.bio,
    curriculums: tutor.curriculums.length > 1 ? "Both" : tutor.curriculums[0] ?? tutor.curriculum,
    ibProgrammes: tutor.ibProgrammes,
    ibSubjects: tutor.ibSubjects,
    igcseSubjects: tutor.igcseSubjects,
    subjectLevels: tutor.subjectLevels,
    teachingModes: [
      tutor.homeTutoringAvailable ? "home" : "",
      tutor.onlineTutoringAvailable ? "online" : "",
      tutor.hybridTutoringAvailable ? "hybrid" : "",
    ].filter(Boolean),
    primaryCity: tutor.primaryCity,
    availableCities: tutor.availableCities,
    availableAreas: tutor.availableAreas,
    availableSectors: tutor.availableSectors,
    availableSocieties: tutor.availableSocieties,
    nearbySchools: tutor.nearbySchools,
    travelNotes: tutor.travelNotes,
    availabilityNotes: tutor.locationAvailabilityNotes,
    verificationStatus: tutor.verified ? "verified" : "pending",
    profileStatus: tutor.isActive && tutor.approved ? "active" : "draft",
    rating: tutor.rating,
    reviews: tutor.reviews,
    lastUpdated: tutor.recentlyActive ?? "2026-05-07",
  }));
}

export async function updateTutor(id: string, patch: Partial<AdminTutorRecord>) {
  const tutor = (await getTutors()).find((item) => item.id === id);
  return tutor ? { ...tutor, ...patch } : undefined;
}

export async function getLocations(type?: AdminLocationRecord["type"]): Promise<AdminLocationRecord[]> {
  const cityLocations = getAllCitySeoPages().map<AdminLocationRecord>((page) => ({
    id: `city-${page.citySlug}`,
    name: page.cityName,
    slug: page.citySlug,
    type: "city",
    parentCity: page.cityName,
    state: page.stateName,
    country: page.countryName,
    localDescription: page.serviceAreaText,
    premiumScore: Math.round(page.priorityScore * 10),
    demandScore: page.demandScore,
    active: page.status === "live",
    seoNotes: page.searchIntent,
    relatedPages: [pathFromUrl(page.canonicalUrl), ...page.premiumAreas.map((area) => `/ib-tutors/${page.citySlug}/areas/${area.slug}/`)],
  }));

  const gurgaonLocations = gurgaonLocalPlaces.map<AdminLocationRecord>((place) => ({
    id: `${place.pageType}-${place.slug}`,
    name: place.name,
    slug: place.slug,
    type: place.pageType,
    parentCity: "Gurugram",
    parentArea: place.parentAreaSlug,
    parentSector: place.parentSectorSlug,
    state: "Haryana",
    country: "India",
    localDescription: place.localIntent,
    premiumScore: gurgaonPremiumScore(place),
    demandScore: gurgaonDemandScore(place),
    active: true,
    seoNotes: `Index: ${place.indexFlag}. Duplicate risk: ${place.duplicateRisk}.`,
    relatedPages: place.nearbyAreas.concat(place.nearbySectors, place.nearbySocieties),
  }));

  const locations = [...cityLocations, ...gurgaonLocations];
  return type ? locations.filter((location) => location.type === type) : locations;
}

export async function getInternalLinks(): Promise<AdminInternalLinkRecord[]> {
  const pages = await getPages();
  const pageMap = new Map(pages.map((page) => [page.id, page]));
  return pages.flatMap((source) =>
    source.internalLinks.map((link) => ({
      ...link,
      sourceTitle: source.title,
      targetTitle: pageMap.get(link.targetPageId)?.title ?? link.targetPageId,
      status: link.linkStatus === "active" ? "approved" : "suggested",
    })),
  );
}

export async function getSeoHealth(): Promise<AdminSeoHealth> {
  const pages = await getPages();
  const links = await getInternalLinks();
  return {
    missingTitle: pages.filter((page) => !page.title),
    missingMetaDescription: pages.filter((page) => !page.metaDescription),
    duplicateMetaTitles: duplicatesBy(pages, (page) => page.metaTitle),
    duplicateMetaDescriptions: duplicatesBy(pages, (page) => page.metaDescription),
    missingH1: pages.filter((page) => !page.h1),
    missingCanonical: pages.filter((page) => !page.canonicalUrl),
    noindexPages: pages.filter((page) => page.indexFlag === "noindex"),
    indexablePages: pages.filter((page) => page.indexFlag === "index"),
    sitemapIncludedPages: pages.filter((page) => page.sitemapIncluded),
    sitemapExcludedPages: pages.filter((page) => !page.sitemapIncluded).map((page) => ({
      page,
      reason: page.indexFlag === "noindex" ? "Noindex" : page.status !== "published" ? "Not published" : "Excluded by adapter",
    })),
    missingSchema: pages.filter((page) => !page.hasSchema),
    missingFaqSchema: pages.filter((page) => !page.hasFaqs),
    thinContentPages: pages.filter((page) => page.wordCount < 700 && page.indexFlag === "index"),
    weakInternalLinks: pages.filter((page) => page.internalLinksCount < 3 && page.indexFlag === "index"),
    brokenInternalLinks: links.filter((link) => link.linkStatus === "broken"),
  };
}

export async function getAuditLogs(): Promise<AdminAuditLog[]> {
  return [
    { id: "log-001", actor: "admin", action: "login", target: "Admin", detail: "Admin session created with HTTP-only cookie.", createdAt: new Date().toISOString() },
    { id: "log-002", actor: "system", action: "seo health scanned", target: "Pages", detail: "Static SEO, generated pages and tutor records indexed for admin preview.", createdAt: "2026-05-07T08:30:00.000Z" },
    { id: "log-003", actor: "system", action: "adapter notice", target: "Data layer", detail: "No database detected. Static records are editable as previews; generated-page local store can persist drafts.", createdAt: "2026-05-07T08:15:00.000Z" },
  ];
}

export async function generateAdminSeoDraft(input: {
  pageType: SeoGeneratorInput["pageType"];
  cityName: string;
  localityName?: string;
  primaryKeyword: string;
  serviceFocus: string;
  nearbyAreas?: string[];
  nearbySchools?: string[];
  proofNotes?: string;
  tutorAvailabilityNotes?: string;
  ctaFocus?: string;
  indexPreference?: SeoGeneratorInput["indexPreference"];
}) {
  const generatedInput: SeoGeneratorInput = {
    pageType: input.pageType,
    cityName: input.cityName,
    citySlug: slugifyAdmin(input.cityName),
    parentLocation: input.cityName,
    microLocationName: input.localityName,
    microLocationType: input.pageType === "area" || input.pageType === "sector" || input.pageType === "society" || input.pageType === "school" ? input.pageType : undefined,
    primaryKeyword: input.primaryKeyword,
    secondaryKeywords: [`${input.serviceFocus} ${input.cityName}`, `${input.primaryKeyword} near me`],
    serviceFocus: input.serviceFocus,
    programmes: ["PYP", "MYP", "DP"],
    subjects: ["Math AA", "Math AI", "Physics", "Chemistry", "Economics", "English"],
    tutoringModes: ["home", "online", "hybrid"],
    premiumAreas: input.nearbyAreas?.slice(0, 4) ?? [],
    nearbyAreas: input.nearbyAreas ?? [],
    nearbyCities: ["Delhi", "Noida", "Faridabad"],
    schoolsMentioned: input.nearbySchools ?? [],
    proofNotes: input.proofNotes,
    tutorAvailabilityNotes: input.tutorAvailabilityNotes,
    ctaFocus: input.ctaFocus || "Book a free academic consultation",
    publishMode: "review",
    indexPreference: input.indexPreference || "auto",
  };

  return generateSeoPage(generatedInput);
}

function buildExplicitRoutePages(): AdminPageRecord[] {
  const routes = scanAppPages();
  const publicRoutes = routes.filter((route) => !route.startsWith("/admin") && !route.startsWith("/api") && route !== "/");
  const base = staticPage("/", "Homepage", "homepage", "Both", "IB Gram | Global AI-Powered EdTech for IB & IGCSE");
  return [
    base,
    ...publicRoutes.map((route) => {
      if (route === "/igcse") return igcseHomeAdminPage();

      const title = route === "/igcse" ? "IGCSE Guide" : route.split("/").filter(Boolean).map(titleCase).join(" ");
      const curriculum = route.includes("igcse") ? "IGCSE" : route.includes("ib-") || route.includes("programmes") ? "IB" : "Both";
      const type = route.includes("programmes") ? "programme" : route.includes("courses") ? "subject" : route.includes("blog") ? "blog" : route.includes("tutor-profile") ? "tutor_profile" : "static";
      return staticPage(route, title || route, type as AdminPageRecord["pageType"], curriculum, `${title || "IB Gram"} | IB Gram`);
    }),
  ];
}

function igcseHomeAdminPage(): AdminPageRecord {
  const visibleText = [
    "IGCSE tutoring and curriculum support",
    "Find realistic IGCSE subject support",
    ...igcseAdminContentBlocks.flatMap((block) => [block.heading, block.body, ...block.items]),
    ...igcseFaqs.flatMap((faq) => [faq.question, faq.answer]),
  ].join(" ");

  return staticPage("/igcse/", "IGCSE Tutors, Subjects and Revision Support", "static", "IGCSE", "IGCSE Tutors, Subjects and Revision Support | IB Gram", {
    id: "route-igcse",
    seoScore: 88,
    qualityScore: 86,
    localDepthScore: 78,
    wordCount: countWordsAdmin(visibleText),
    internalLinksCount: igcseInternalLinks.length,
    hasFaqs: true,
    hasSchema: true,
    lastUpdated: "2026-05-25",
    primaryKeyword: "IGCSE tutors and subject support",
    secondaryKeywords: [
      "Cambridge IGCSE tutors",
      "Pearson Edexcel International GCSE tutors",
      "IGCSE revision support",
      "IGCSE past paper tutoring",
    ],
    searchIntent: "Help families compare IGCSE board routes, subjects, tutors, revision support and FAQs before requesting a shortlist.",
    metaDescription:
      "Compare Cambridge and Pearson Edexcel IGCSE subject support, tutor matching, revision planning, past-paper preparation, FAQs and family resources.",
    h1: "Find realistic IGCSE subject support",
    heroTitle: "Find realistic IGCSE subject support",
    heroSubtitle:
      "Compare Cambridge and Pearson Edexcel support by subject, syllabus code, tier, exam timeline and learning mode.",
    introSummary:
      "The IGCSE page combines board-aware subject guidance, tutor matching context, study planning, parent proof, blog resources and FAQs for Cambridge and Pearson Edexcel families.",
    contentBlocks: igcseAdminContentBlocks,
    faqs: igcseFaqs,
    internalLinks: igcseInternalLinks,
    schema: {
      "@type": "FAQPage",
      mainEntity: igcseFaqs.map((faq) => ({ question: faq.question, answer: faq.answer })),
    },
    sitemapIncluded: true,
    source: "app-route",
    safeDisclaimer:
      "IB Gram is an independent tutoring platform. Cambridge, Pearson and school names are used only to describe curriculum or local context unless an official relationship is specifically stated.",
  });
}

function buildSupplementalPublicPages(): AdminPageRecord[] {
  const cityPages = getAllCitySeoPages();
  const ibCitySubpages = cityPages.flatMap((page) =>
    CITY_CONTENT_PAGE_SLUGS.map((slug) => {
      const programme = page.ibProgramsAvailable.find((item) => item.slug === slug);
      const subject = page.ibSubjectsAvailable.find((item) => item.slug === slug);
      const title = `${programme?.name ?? subject?.name ?? titleCase(slug)} in ${page.cityName}`;
      return staticPage(`/ib-tutors/${page.citySlug}/${slug}/`, title, programme ? "programme" : "subject", "IB", `${title} | IB Gram`, {
        city: page.cityName,
        locality: page.cityName,
        localityType: "city",
        indexFlag: "index",
        sitemapIncluded: true,
        canonicalUrl: `${DOMAIN}/ib-tutors/${page.citySlug}/${slug}/`,
        robotsTag: "index, follow",
        searchIntent: "Focused IB city subpage with programme or subject content, tutor availability, internal links and FAQ schema.",
        source: "static",
      });
    }),
  );

  const ibAreaPages = cityPages.flatMap((page) =>
    page.premiumAreas
      .filter((area) => area.pageEnabled)
      .map((area) =>
        staticPage(`/ib-tutors/${page.citySlug}/areas/${area.slug}/`, `IB tutors near ${area.name}, ${page.cityName}`, "area", "IB", `IB tutors near ${area.name}, ${page.cityName} | IB Gram`, {
          city: page.cityName,
          locality: area.name,
          localityType: "area",
          indexFlag: "index",
          sitemapIncluded: true,
          canonicalUrl: `${DOMAIN}/ib-tutors/${page.citySlug}/areas/${area.slug}/`,
          robotsTag: "index, follow",
          searchIntent: area.description,
          source: "static",
        }),
      ),
  );

  const ibSchoolPages = cityPages.flatMap((page) =>
    page.ibSchoolsCity
      .filter((school) => school.pageEnabled)
      .map((school) =>
        staticPage(`/ib-tutors/${page.citySlug}/schools/${school.slug}/`, `IB tutor support for ${school.name}`, "school", "IB", `IB tutor support for ${school.name} students | IB Gram`, {
          city: page.cityName,
          locality: school.name,
          localityType: "school",
          indexFlag: "index",
          sitemapIncluded: true,
          canonicalUrl: `${DOMAIN}/ib-tutors/${page.citySlug}/schools/${school.slug}/`,
          robotsTag: "index, follow",
          searchIntent: school.description,
          safeDisclaimer: page.schoolDisclaimer,
          source: "static",
        }),
      ),
  );

  const igcseTutorCities = getIgcseTutorCityStaticParams().map(({ citySlug }) => {
    const city = getAllIgcseCityPages().find((page) => page.citySlug === citySlug);
    return staticPage(`/igcse-tutors/${citySlug}/`, `IGCSE tutors in ${city?.cityName ?? titleCase(citySlug)}`, "igcse_city", "IGCSE", `IGCSE tutors in ${city?.cityName ?? titleCase(citySlug)} | IB Gram`, {
      city: city?.cityName,
      locality: city?.cityName,
      localityType: "city",
      seoScore: 78,
      qualityScore: 78,
      localDepthScore: 78,
      wordCount: 1200,
      hasFaqs: true,
      hasSchema: true,
      source: "igcse-city",
    });
  });

  const igcseAreaPages = getIgcseTutorAreaStaticParams().map(({ citySlug, areaSlug }) =>
    staticPage(`/igcse-tutors/${citySlug}/areas/${areaSlug}/`, `IGCSE tutors near ${titleCase(areaSlug)}`, "area", "IGCSE", `IGCSE tutors near ${titleCase(areaSlug)} | IB Gram`, {
      city: titleCase(citySlug),
      locality: titleCase(areaSlug),
      localityType: "area",
      indexFlag: "index",
      sitemapIncluded: true,
      source: "static",
    }),
  );

  const igcseSectorPages = getIgcseTutorSectorStaticParams().map(({ citySlug, sectorSlug }) =>
    staticPage(`/igcse-tutors/${citySlug}/sectors/${sectorSlug}/`, `IGCSE tutors in ${titleCase(sectorSlug)}`, "sector", "IGCSE", `IGCSE tutors in ${titleCase(sectorSlug)} | IB Gram`, {
      city: titleCase(citySlug),
      locality: titleCase(sectorSlug),
      localityType: "sector",
      indexFlag: "index",
      sitemapIncluded: true,
      source: "static",
    }),
  );

  const igcseSocietyPages = getIgcseTutorSocietyStaticParams().map(({ citySlug, societySlug }) =>
    staticPage(`/igcse-tutors/${citySlug}/societies/${societySlug}/`, `IGCSE tutors near ${titleCase(societySlug)}`, "society", "IGCSE", `IGCSE tutors near ${titleCase(societySlug)} | IB Gram`, {
      city: titleCase(citySlug),
      locality: titleCase(societySlug),
      localityType: "society",
      indexFlag: "index",
      sitemapIncluded: true,
      safeDisclaimer: "IB Gram uses society names only as locality references and does not claim official association.",
      source: "static",
    }),
  );

  const igcseSchoolPages = cityPages.flatMap((page) =>
    page.ibSchoolsCity
      .filter((school) => school.pageEnabled)
      .map((school) =>
        staticPage(`/igcse-tutors/${page.citySlug}/schools/${school.slug}/`, `IGCSE tutor support near ${school.name}`, "school", "IGCSE", `IGCSE tutor support near ${school.name} | IB Gram`, {
          city: page.cityName,
          locality: school.name,
          localityType: "school",
          indexFlag: "index",
          sitemapIncluded: true,
          safeDisclaimer: "IB Gram uses school names only for nearby support context and does not claim official school affiliation.",
          source: "static",
        }),
      ),
  );

  const igcseSubjectSlugs = Array.from(new Set([...cambridgeSubjects, ...edexcelSubjects].map((subject) => slugifyAdmin(subject.subject_title))));
  const igcseSubjectPages = getIgcseTutorCityStaticParams().flatMap(({ citySlug }) =>
    igcseSubjectSlugs.map((subjectSlug) =>
      staticPage(`/igcse-tutors/${citySlug}/${subjectSlug}/`, `${titleCase(subjectSlug)} IGCSE tutors in ${titleCase(citySlug)}`, "subject", "IGCSE", `${titleCase(subjectSlug)} IGCSE tutors in ${titleCase(citySlug)} | IB Gram`, {
        city: titleCase(citySlug),
        locality: titleCase(citySlug),
        localityType: "city",
        indexFlag: "index",
        sitemapIncluded: true,
        source: "static",
      }),
    ),
  );

  const coursePages = ["ib", "igcse"].flatMap((curriculum) =>
    COURSE_SUBJECT_SLUGS.map((subjectSlug) =>
      staticPage(`/courses/${curriculum}/${subjectSlug}/`, `${curriculum.toUpperCase()} ${titleCase(subjectSlug)} course`, "subject", curriculum === "ib" ? "IB" : "IGCSE", `${curriculum.toUpperCase()} ${titleCase(subjectSlug)} course | IB Gram`, {
        source: "static",
      }),
    ),
  );

  const tutorProfilePages = allTutors.map((tutor) =>
    staticPage(`/tutor-profile/${tutor.id}/`, `${tutor.name} tutor profile`, "tutor_profile", tutor.curriculum, `${tutor.name} tutor profile | IB Gram`, {
      city: tutor.primaryCity,
      locality: tutor.primaryCity,
      localityType: "city",
      indexFlag: "index",
      sitemapIncluded: true,
      source: "tutor",
      seoScore: 70,
      qualityScore: 72,
      wordCount: 850,
    }),
  );

  return [
    ...ibCitySubpages,
    ...ibAreaPages,
    ...ibSchoolPages,
    ...igcseTutorCities,
    ...igcseAreaPages,
    ...igcseSectorPages,
    ...igcseSocietyPages,
    ...igcseSchoolPages,
    ...igcseSubjectPages,
    ...coursePages,
    ...tutorProfilePages,
  ];
}

function staticPage(
  url: string,
  title: string,
  pageType: AdminPageRecord["pageType"],
  curriculum: AdminPageRecord["curriculum"],
  metaTitle: string,
  overrides: Partial<AdminPageRecord> = {},
): AdminPageRecord {
  const normalizedUrl = url.endsWith("/") ? url : `${url}/`;
  const indexFlag = overrides.indexFlag ?? (pageType === "tutor_profile" ? "noindex" : "index");
  return {
    id: overrides.id ?? `route-${normalizedUrl === "/" ? "home" : slugifyAdmin(normalizedUrl)}`,
    title,
    slug: normalizedUrl === "/" ? "" : normalizedUrl.split("/").filter(Boolean).at(-1) ?? "",
    url: normalizedUrl,
    pageType,
    curriculum,
    status: "published",
    indexFlag,
    seoScore: overrides.seoScore ?? (pageType === "homepage" ? 88 : 72),
    qualityScore: overrides.qualityScore ?? (pageType === "homepage" ? 90 : 70),
    localDepthScore: overrides.localDepthScore ?? 55,
    duplicateRisk: "low",
    wordCount: overrides.wordCount ?? (pageType === "homepage" ? 1800 : 650),
    internalLinksCount: overrides.internalLinksCount ?? 3,
    incomingLinksCount: 0,
    hasSchema: overrides.hasSchema ?? pageType === "homepage",
    hasFaqs: overrides.hasFaqs ?? pageType === "homepage",
    missingMetadata: false,
    lastUpdated: overrides.lastUpdated ?? "2026-05-07",
    primaryKeyword: overrides.primaryKeyword ?? title,
    secondaryKeywords: overrides.secondaryKeywords ?? [],
    searchIntent: overrides.searchIntent ?? "Public website route discovered from the App Router.",
    metaTitle,
    metaDescription: overrides.metaDescription ?? `Manage SEO and operations for ${title} in the IB Gram admin panel.`,
    h1: overrides.h1 ?? title,
    canonicalUrl: overrides.canonicalUrl ?? `${DOMAIN}${normalizedUrl === "/" ? "/" : `${normalizedUrl.replace(/\/$/, "")}/`}`,
    robotsTag: overrides.robotsTag ?? (indexFlag === "index" ? "index, follow" : "noindex, follow"),
    ogTitle: overrides.ogTitle ?? metaTitle,
    ogDescription: overrides.ogDescription ?? `IB Gram ${title}`,
    ogImage: overrides.ogImage ?? `${DOMAIN}/images/ib-gram-city-og.svg`,
    twitterTitle: overrides.twitterTitle ?? metaTitle,
    twitterDescription: overrides.twitterDescription ?? `IB Gram ${title}`,
    heroTitle: overrides.heroTitle ?? title,
    heroSubtitle: overrides.heroSubtitle ?? "Public route discovered by the admin adapter.",
    introSummary: overrides.introSummary ?? "Static public route. Connect a CMS or database adapter to edit this page content directly.",
    contentBlocks: overrides.contentBlocks ?? [{ type: "intro", heading: "Route note", body: "This public route is shown for SEO operations visibility. Runtime editing is intentionally disabled until a persistence layer is connected.", items: [] }],
    faqs: overrides.faqs ?? [],
    internalLinks: overrides.internalLinks ?? [],
    schema: overrides.schema ?? {},
    sitemapIncluded: overrides.sitemapIncluded ?? (pageType !== "tutor_profile" && indexFlag === "index"),
    safeDisclaimer: overrides.safeDisclaimer,
    source: overrides.source ?? "app-route",
    city: overrides.city,
    locality: overrides.locality,
    localityType: overrides.localityType,
  };
}

function generatedToAdminPage(page: GeneratedSeoPage): AdminPageRecord {
  return {
    id: page.pageId,
    title: page.metaTitle,
    slug: page.slug,
    url: pathFromUrl(page.canonicalUrl),
    pageType: generatedPageTypeToAdmin(page),
    curriculum: page.serviceFocus.toLowerCase().includes("igcse") ? "IGCSE" : "IB",
    city: page.cityName,
    locality: page.microLocationName,
    localityType: page.microLocationType,
    status: page.status === "published" ? "published" : page.status,
    indexFlag: page.indexFlag,
    seoScore: page.quality.seoScore,
    qualityScore: Math.round((page.quality.seoScore + page.quality.uniquenessScore + page.quality.readabilityScore) / 3),
    localDepthScore: page.quality.localDepthScore,
    duplicateRisk: page.quality.duplicateRisk,
    wordCount: page.quality.wordCount,
    internalLinksCount: page.internalLinks.length,
    incomingLinksCount: 0,
    hasSchema: Object.keys(page.schema ?? {}).length > 0,
    hasFaqs: page.faqs.length > 0,
    missingMetadata: !page.metaTitle || !page.metaDescription,
    lastUpdated: page.lastUpdated,
    primaryKeyword: page.primaryKeyword,
    secondaryKeywords: page.secondaryKeywords,
    searchIntent: `Find ${page.serviceFocus} in ${page.microLocationName || page.cityName}.`,
    metaTitle: page.metaTitle,
    metaDescription: page.metaDescription,
    h1: page.h1,
    canonicalUrl: page.canonicalUrl,
    robotsTag: page.indexFlag === "index" ? "index, follow" : "noindex, follow",
    ogTitle: page.ogTitle,
    ogDescription: page.ogDescription,
    ogImage: page.ogImage,
    twitterTitle: page.twitterTitle,
    twitterDescription: page.twitterDescription,
    heroTitle: page.heroTitle,
    heroSubtitle: page.heroSubtitle,
    introSummary: page.introSummary,
    contentBlocks: page.contentBlocks,
    faqs: page.faqs,
    internalLinks: page.internalLinks,
    schema: page.schema,
    sitemapIncluded: page.status === "published" && page.indexFlag === "index",
    safeDisclaimer: page.schoolDisclaimer,
    source: "generated",
  };
}

function cityBlocks(page: ReturnType<typeof getAllCitySeoPages>[number]): GeneratedContentBlock[] {
  return [
    { type: "intro", heading: "Local academic context", body: page.cityAcademicIntro.join("\n\n"), items: page.trustPoints },
    { type: "programmes", heading: page.programSectionTitle, body: page.curriculumNotes, items: page.ibProgramsAvailable.map((item) => item.name) },
    { type: "subjects", heading: page.subjectSectionTitle, body: page.assessmentSupport, items: page.ibSubjectsAvailable.map((item) => item.name) },
    { type: "local_areas", heading: page.areaSectionTitle, body: page.serviceAreaText, items: page.premiumAreas.map((item) => item.name) },
    { type: "schools", heading: page.schoolSectionTitle, body: page.schoolDisclaimer, items: page.ibSchoolsCity.map((item) => item.name) },
    { type: "matching_process", heading: "Tutor matching process", body: page.averageMatchingTime, items: page.matchingProcessSteps },
    { type: "verification", heading: "Tutor verification", body: page.teachingModeNotes, items: page.tutorVerificationProcess },
    { type: "cta", heading: "Final CTA", body: page.bottomCtaText, items: [] },
  ];
}

function normalizeInternalLink(link: GeneratedInternalLink): GeneratedInternalLink {
  return {
    linkId: link.linkId,
    sourcePageId: link.sourcePageId,
    targetPageId: link.targetPageId,
    targetUrl: link.targetUrl,
    anchorText: link.anchorText,
    linkContext: link.linkContext,
    linkType: link.linkType,
    priority: link.priority,
    followStatus: link.followStatus,
    isCrawlable: link.isCrawlable,
    linkStatus: link.linkStatus,
  };
}

function dedupePages(pages: AdminPageRecord[]) {
  const byUrl = new Map<string, AdminPageRecord>();
  pages.forEach((page) => {
    const key = page.url.endsWith("/") ? page.url : `${page.url}/`;
    const existing = byUrl.get(key);
    const pagePriority = PUBLIC_PAGE_PRIORITY[page.source];
    const existingPriority = existing ? PUBLIC_PAGE_PRIORITY[existing.source] : -1;
    const pageIsMoreIndexable = existing?.indexFlag === "noindex" && page.indexFlag === "index";
    if (!existing || pagePriority > existingPriority || (pagePriority === existingPriority && pageIsMoreIndexable)) {
      byUrl.set(key, page);
    }
  });

  const byId = new Map<string, AdminPageRecord>();
  byUrl.forEach((page) => byId.set(page.id, page));
  return [...byId.values()].sort((a, b) => a.url.localeCompare(b.url));
}

function duplicatesBy<T>(items: T[], getter: (item: T) => string): Array<{ value: string; pages: T[] }> {
  const grouped = new Map<string, T[]>();
  items.forEach((item) => {
    const value = getter(item);
    if (!value) return;
    grouped.set(value, [...(grouped.get(value) ?? []), item]);
  });
  return [...grouped.entries()].filter(([, pages]) => pages.length > 1).map(([value, pages]) => ({ value, pages }));
}

function scanAppPages(): string[] {
  const appDir = path.join(process.cwd(), "src", "app");
  if (!existsSync(appDir)) return [];
  const routes: string[] = [];

  function walk(dir: string, segments: string[]) {
    const entries = readdirSync(dir);
    if (entries.includes("page.tsx") || entries.includes("page.ts")) {
      const route = `/${segments.filter((segment) => !segment.startsWith("(") && !segment.startsWith("_")).join("/")}`;
      routes.push(route.replace(/\/+/g, "/") || "/");
    }
    for (const entry of entries) {
      const full = path.join(dir, entry);
      if (!statSync(full).isDirectory()) continue;
      if (entry.startsWith("_") || entry === "api") continue;
      if (entry.startsWith("[") || entry === "admin") continue;
      walk(full, [...segments, entry]);
    }
  }

  walk(appDir, []);
  return Array.from(new Set(routes)).sort();
}

function titleCase(value: string) {
  if (value.startsWith("(")) return "";
  return value.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}
