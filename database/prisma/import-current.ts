import path from "node:path";
import { config } from "dotenv";
import { PrismaClient, type Curriculum, type IndexFlag, type PageStatus, type PageType, type Prisma } from "@prisma/client";
import { allTutors, type Tutor, type TutorLocation as SourceTutorLocation } from "../../src/lib/tutor-data";
import { getAllCitySeoPages } from "../../src/lib/seo/city-pages";
import { getAllIgcseCityPages } from "../../src/lib/seo/igcse-city-pages";
import { generatedSeoPages } from "../../src/lib/generated-pages/data";

const projectRoot = path.resolve(__dirname, "../..");

config({ path: path.join(projectRoot, ".env") });
config({ path: path.join(projectRoot, ".env.local"), override: false });

const prisma = new PrismaClient();

function slugify(value: string): string {
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

function pathFromUrl(value: string): string {
  try {
    const url = new URL(value);
    return url.pathname.endsWith("/") ? url.pathname : `${url.pathname}/`;
  } catch {
    return value.startsWith("/") ? value : `/${value}`;
  }
}

function toCurriculum(value: string | undefined): Curriculum {
  if (value === "IGCSE") return "IGCSE";
  if (value === "Both" || value === "BOTH") return "BOTH";
  return "IB";
}

function toPageStatus(value: string | undefined): PageStatus {
  if (value === "live" || value === "published") return "published";
  if (value === "review") return "needs_review";
  if (value === "generated") return "generated";
  if (value === "approved") return "approved";
  if (value === "paused") return "paused";
  if (value === "archived") return "archived";
  return "draft";
}

function toIndexFlag(value: string | undefined): IndexFlag {
  if (value === "index" || value === "noindex") return value;
  return "auto";
}

function toPageType(value: string | undefined): PageType {
  if (
    value === "city" ||
    value === "area" ||
    value === "sector" ||
    value === "society" ||
    value === "school" ||
    value === "subject" ||
    value === "programme" ||
    value === "service" ||
    value === "hub" ||
    value === "blog_support"
  ) {
    return value;
  }
  return "city";
}

function parseExperience(value: string | undefined): number | undefined {
  if (!value) return undefined;
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : undefined;
}

function parseRate(value: string | undefined): string | undefined {
  if (!value) return undefined;
  const match = value.match(/(\d+(?:\.\d+)?)/);
  return match?.[1];
}

async function ensureCountry(name = "India") {
  const code = name.toLowerCase() === "india" ? "IN" : slugify(name).slice(0, 2).toUpperCase();
  return prisma.country.upsert({
    where: { code },
    update: { name, slug: slugify(name) },
    create: { code, name, slug: slugify(name) },
  });
}

async function ensureState(countryId: string, name = "India") {
  return prisma.state.upsert({
    where: { countryId_slug: { countryId, slug: slugify(name) } },
    update: { name },
    create: { countryId, name, slug: slugify(name) },
  });
}

async function ensureCity(input: { cityName: string; citySlug?: string; stateName?: string; countryName?: string; latitude?: number; longitude?: number }) {
  const country = await ensureCountry(input.countryName ?? "India");
  const state = await ensureState(country.id, input.stateName ?? "India");
  return prisma.city.upsert({
    where: { stateId_slug: { stateId: state.id, slug: input.citySlug ?? slugify(input.cityName) } },
    update: {
      name: input.cityName,
      countryId: country.id,
      latitude: input.latitude,
      longitude: input.longitude,
    },
    create: {
      countryId: country.id,
      stateId: state.id,
      name: input.cityName,
      slug: input.citySlug ?? slugify(input.cityName),
      latitude: input.latitude,
      longitude: input.longitude,
    },
  });
}

async function ensureArea(cityId: string, name?: string, slug?: string) {
  if (!name) return null;
  return prisma.area.upsert({
    where: { cityId_slug: { cityId, slug: slug ?? slugify(name) } },
    update: { name },
    create: { cityId, name, slug: slug ?? slugify(name) },
  });
}

async function ensureSector(cityId: string, areaId: string | null | undefined, name?: string, slug?: string) {
  if (!name) return null;
  return prisma.sector.upsert({
    where: { cityId_slug: { cityId, slug: slug ?? slugify(name) } },
    update: { name, areaId },
    create: { cityId, areaId, name, slug: slug ?? slugify(name) },
  });
}

async function ensureSociety(cityId: string, areaId: string | null | undefined, sectorId: string | null | undefined, name?: string, slug?: string) {
  if (!name) return null;
  return prisma.society.upsert({
    where: { cityId_slug: { cityId, slug: slug ?? slugify(name) } },
    update: { name, areaId, sectorId },
    create: { cityId, areaId, sectorId, name, slug: slug ?? slugify(name) },
  });
}

async function ensureSchool(cityId: string, areaId: string | null | undefined, sectorId: string | null | undefined, name?: string, slug?: string, curriculum: Curriculum = "IB") {
  if (!name) return null;
  return prisma.school.upsert({
    where: { cityId_slug: { cityId, slug: slug ?? slugify(name) } },
    update: { name, areaId, sectorId, curriculum },
    create: { cityId, areaId, sectorId, name, slug: slug ?? slugify(name), curriculum },
  });
}

async function importCitySeoLocations() {
  for (const page of getAllCitySeoPages()) {
    const city = await ensureCity({
      cityName: page.cityName,
      citySlug: page.citySlug,
      stateName: page.stateName,
      countryName: page.countryName,
      latitude: page.latitude,
      longitude: page.longitude,
    });

    for (const area of page.premiumAreas ?? []) {
      await ensureArea(city.id, area.name, area.slug);
    }

    for (const school of page.ibSchoolsCity ?? []) {
      const area = await ensureArea(city.id, school.area);
      await ensureSchool(city.id, area?.id, null, school.name, school.slug, "IB");
    }
  }
}

async function importTutorLocations(tutorId: string, locations: SourceTutorLocation[]) {
  for (const [index, location] of locations.entries()) {
    const city = await ensureCity({
      cityName: location.cityName,
      citySlug: location.citySlug,
      stateName: location.stateName,
      countryName: location.countryName,
    });
    const area = await ensureArea(city.id, location.areaName, location.areaSlug);
    const sector = await ensureSector(city.id, area?.id, location.sectorName, location.sectorSlug);
    const society = await ensureSociety(city.id, area?.id, sector?.id, location.societyName, location.societySlug);
    const school = await ensureSchool(city.id, area?.id, sector?.id, location.nearbySchoolName, location.nearbySchoolSlug);

    await prisma.tutorLocation.create({
      data: {
        tutorId,
        cityId: city.id,
        areaId: area?.id,
        sectorId: sector?.id,
        societyId: society?.id,
        schoolId: school?.id,
        cityName: location.cityName,
        citySlug: location.citySlug,
        areaName: location.areaName,
        areaSlug: location.areaSlug,
        sectorName: location.sectorName,
        sectorSlug: location.sectorSlug,
        societyName: location.societyName,
        societySlug: location.societySlug,
        nearbySchoolName: location.nearbySchoolName,
        nearbySchoolSlug: location.nearbySchoolSlug,
        homeTutoringAvailable: location.homeTutoringAvailable,
        onlineTutoringAvailable: location.onlineTutoringAvailable,
        hybridTutoringAvailable: location.hybridTutoringAvailable,
        serviceRadiusKm: location.serviceRadiusKm,
        priority: location.priority === "primary" ? 100 : location.priority === "secondary" ? 50 : 10,
        isActive: location.isActive ?? true,
        notes: location.notes,
      },
    });

    for (const areaName of location.areas ?? []) await ensureArea(city.id, areaName);
    for (const sectorName of location.sectors ?? []) await ensureSector(city.id, area?.id, sectorName);
    for (const societyName of location.societies ?? []) await ensureSociety(city.id, area?.id, sector?.id, societyName);
    for (const schoolName of location.nearbySchools ?? []) await ensureSchool(city.id, area?.id, sector?.id, schoolName);

    if (index === 0 && location.cityName !== city.name) {
      throw new Error(`Location import mismatch for tutor ${tutorId}`);
    }
  }
}

async function importTutors() {
  for (const tutor of allTutors) {
    const slug = slugify(`${tutor.name}-${tutor.id}`);
    const record = await prisma.tutor.upsert({
      where: { slug },
      update: {
        displayName: tutor.name,
        status: tutor.isActive ? "active" : "draft",
        headline: `${tutor.subject} tutor for ${tutor.grade}`,
        bio: tutor.bio,
        experienceYears: parseExperience(tutor.experience),
        rating: tutor.rating,
        reviewCount: tutor.reviews,
        hourlyRate: parseRate(tutor.rate),
        currency: tutor.rate.includes("$") ? "USD" : "INR",
        avatarUrl: tutor.image || null,
        verified: tutor.verified,
        approved: tutor.approved,
        deletedAt: null,
      },
      create: {
        slug,
        displayName: tutor.name,
        status: tutor.isActive ? "active" : "draft",
        headline: `${tutor.subject} tutor for ${tutor.grade}`,
        bio: tutor.bio,
        experienceYears: parseExperience(tutor.experience),
        rating: tutor.rating,
        reviewCount: tutor.reviews,
        hourlyRate: parseRate(tutor.rate),
        currency: tutor.rate.includes("$") ? "USD" : "INR",
        avatarUrl: tutor.image || null,
        verified: tutor.verified,
        approved: tutor.approved,
      },
      select: { id: true },
    });

    await prisma.tutorProfile.upsert({
      where: { tutorId: record.id },
      update: profileData(tutor),
      create: { tutorId: record.id, ...profileData(tutor) },
    });

    await prisma.tutorSubject.deleteMany({ where: { tutorId: record.id } });
    await prisma.tutorCurriculum.deleteMany({ where: { tutorId: record.id } });
    await prisma.tutorLocation.deleteMany({ where: { tutorId: record.id } });

    const subjectNames = [
      ...tutor.ibSubjects.map((subject) => ({ subject, curriculum: "IB" as Curriculum })),
      ...tutor.igcseSubjects.map((subject) => ({ subject, curriculum: "IGCSE" as Curriculum })),
    ];
    const uniqueSubjects = new Map(subjectNames.map((item) => [`${item.curriculum}:${slugify(item.subject)}`, item]));
    for (const [priority, item] of Array.from(uniqueSubjects.values()).entries()) {
      await prisma.tutorSubject.create({
        data: {
          tutorId: record.id,
          subjectName: item.subject,
          subjectSlug: slugify(item.subject),
          curriculum: item.curriculum,
          level: tutor.subjectLevels.join(", "),
          priority: priority + 1,
        },
      });
    }

    for (const curriculum of tutor.curriculums) {
      const programmes = curriculum === "IB" ? tutor.ibProgrammes : [null];
      for (const [index, programme] of programmes.entries()) {
        await prisma.tutorCurriculum.create({
          data: {
            tutorId: record.id,
            curriculum,
            programme,
            isPrimary: index === 0,
          },
        });
      }
    }

    await importTutorLocations(record.id, tutor.locations);
  }
}

function profileData(tutor: Tutor) {
  return {
    education: tutor.education,
    methodology: tutor.methodology,
    successRate: tutor.successRate,
    responseTime: tutor.responseTime,
    availabilityText: tutor.availability,
    languages: [],
    tags: tutor.tags,
    metadata: {
      legacyId: tutor.id,
      grade: tutor.grade,
      subject: tutor.subject,
      accent: tutor.accent,
      recentlyActive: tutor.recentlyActive,
      examBoards: tutor.examBoards ?? [],
      travelNotes: tutor.travelNotes,
      locationAvailabilityNotes: tutor.locationAvailabilityNotes,
    } satisfies Prisma.InputJsonObject,
  };
}

type ImportPage = {
  pageId: string;
  pageType?: string;
  status?: string;
  indexFlag?: string;
  canonicalUrl: string;
  canonicalTarget?: string;
  slug?: string;
  cityName?: string;
  citySlug?: string;
  stateName?: string;
  countryName?: string;
  microLocationName?: string;
  microLocationType?: string;
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  searchIntent?: string;
  metaTitle?: string;
  metaDescription?: string;
  h1?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  introSummary?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  ogImage?: string;
  robotsTag?: string;
  contentBlocks?: Array<{ type?: string; heading?: string; body?: string; items?: unknown }>;
  faqs?: Array<{ question: string; answer: string }>;
  internalLinks?: Array<{ targetUrl?: string; anchorText?: string; linkContext?: string; context?: string }>;
  schema?: unknown;
  quality?: {
    wordCount?: number;
    uniquenessScore?: number;
    localDepthScore?: number;
    seoScore?: number;
    readabilityScore?: number;
    internalLinkScore?: number;
    duplicateRisk?: string;
    recommendedIndexFlag?: string;
    warnings?: unknown;
  };
  lastUpdated?: string;
};

async function importPage(page: ImportPage, curriculum: Curriculum) {
  const city = page.cityName
    ? await ensureCity({
        cityName: page.cityName,
        citySlug: page.citySlug,
        stateName: page.stateName,
        countryName: page.countryName,
      })
    : null;
  const area = page.microLocationType === "area" ? await ensureArea(city?.id ?? "", page.microLocationName, page.slug) : null;
  const sector = page.microLocationType === "sector" ? await ensureSector(city?.id ?? "", null, page.microLocationName, page.slug) : null;
  const society = page.microLocationType === "society" ? await ensureSociety(city?.id ?? "", null, null, page.microLocationName, page.slug) : null;
  const school = page.microLocationType === "school" ? await ensureSchool(city?.id ?? "", null, null, page.microLocationName, page.slug, curriculum) : null;
  const fullPath = pathFromUrl(page.canonicalUrl);

  const saved = await prisma.generatedPage.upsert({
    where: { fullPath },
    update: {
      pageType: toPageType(page.pageType ?? page.microLocationType),
      curriculum,
      status: toPageStatus(page.status),
      indexFlag: toIndexFlag(page.indexFlag),
      slug: page.slug ?? slugify(page.metaTitle ?? page.pageId),
      canonicalUrl: page.canonicalUrl,
      canonicalTarget: page.canonicalTarget,
      cityId: city?.id,
      areaId: area?.id,
      sectorId: sector?.id,
      societyId: society?.id,
      schoolId: school?.id,
      primaryKeyword: page.primaryKeyword ?? page.metaTitle ?? page.pageId,
      secondaryKeywords: page.secondaryKeywords ?? [],
      searchIntent: page.searchIntent,
      title: page.metaTitle,
      metaTitle: page.metaTitle,
      metaDescription: page.metaDescription,
      h1: page.h1,
      heroTitle: page.heroTitle,
      heroSubtitle: page.heroSubtitle,
      introSummary: page.introSummary,
      contentWordCount: page.quality?.wordCount ?? 0,
      qualityScore: page.quality?.seoScore,
      localDepthScore: page.quality?.localDepthScore,
      readabilityScore: page.quality?.readabilityScore,
      duplicateRisk: page.quality?.duplicateRisk,
      internalLinkScore: page.quality?.internalLinkScore,
      schemaStatus: page.schema ? "ready" : "missing",
      sitemapIncluded: toPageStatus(page.status) === "published" && toIndexFlag(page.indexFlag) === "index",
      robotsTag: page.robotsTag ?? (toIndexFlag(page.indexFlag) === "index" ? "index, follow" : "noindex, follow"),
      ogTitle: page.ogTitle,
      ogDescription: page.ogDescription,
      twitterTitle: page.twitterTitle,
      twitterDescription: page.twitterDescription,
      lastReviewedAt: page.lastUpdated ? new Date(page.lastUpdated) : undefined,
      publishedAt: toPageStatus(page.status) === "published" ? new Date() : undefined,
      deletedAt: null,
    },
    create: {
      pageType: toPageType(page.pageType ?? page.microLocationType),
      curriculum,
      status: toPageStatus(page.status),
      indexFlag: toIndexFlag(page.indexFlag),
      slug: page.slug ?? slugify(page.metaTitle ?? page.pageId),
      fullPath,
      canonicalUrl: page.canonicalUrl,
      canonicalTarget: page.canonicalTarget,
      cityId: city?.id,
      areaId: area?.id,
      sectorId: sector?.id,
      societyId: society?.id,
      schoolId: school?.id,
      primaryKeyword: page.primaryKeyword ?? page.metaTitle ?? page.pageId,
      secondaryKeywords: page.secondaryKeywords ?? [],
      searchIntent: page.searchIntent,
      title: page.metaTitle,
      metaTitle: page.metaTitle,
      metaDescription: page.metaDescription,
      h1: page.h1,
      heroTitle: page.heroTitle,
      heroSubtitle: page.heroSubtitle,
      introSummary: page.introSummary,
      contentWordCount: page.quality?.wordCount ?? 0,
      qualityScore: page.quality?.seoScore,
      localDepthScore: page.quality?.localDepthScore,
      readabilityScore: page.quality?.readabilityScore,
      duplicateRisk: page.quality?.duplicateRisk,
      internalLinkScore: page.quality?.internalLinkScore,
      schemaStatus: page.schema ? "ready" : "missing",
      sitemapIncluded: toPageStatus(page.status) === "published" && toIndexFlag(page.indexFlag) === "index",
      robotsTag: page.robotsTag ?? (toIndexFlag(page.indexFlag) === "index" ? "index, follow" : "noindex, follow"),
      ogTitle: page.ogTitle,
      ogDescription: page.ogDescription,
      twitterTitle: page.twitterTitle,
      twitterDescription: page.twitterDescription,
      lastReviewedAt: page.lastUpdated ? new Date(page.lastUpdated) : undefined,
      publishedAt: toPageStatus(page.status) === "published" ? new Date() : undefined,
    },
    select: { id: true },
  });

  await prisma.pageBlock.deleteMany({ where: { pageId: saved.id } });
  await prisma.pageFaq.deleteMany({ where: { pageId: saved.id } });
  await prisma.pageSchema.deleteMany({ where: { pageId: saved.id } });
  await prisma.pageInternalLink.deleteMany({ where: { sourcePageId: saved.id } });
  await prisma.pageQualityScore.deleteMany({ where: { pageId: saved.id } });

  for (const [index, block] of (page.contentBlocks ?? []).entries()) {
    await prisma.pageBlock.create({
      data: {
        pageId: saved.id,
        blockType: block.type ?? "content",
        heading: block.heading,
        body: block.body,
        items: block.items === undefined ? undefined : (block.items as Prisma.InputJsonValue),
        sortOrder: index + 1,
      },
    });
  }

  for (const [index, faq] of (page.faqs ?? []).entries()) {
    await prisma.pageFaq.create({
      data: {
        pageId: saved.id,
        question: faq.question,
        answer: faq.answer,
        sortOrder: index + 1,
      },
    });
  }

  if (page.schema) {
    await prisma.pageSchema.create({
      data: {
        pageId: saved.id,
        schemaType: "json_ld",
        schemaJson: page.schema as Prisma.InputJsonValue,
        status: "ready",
      },
    });
  }

  if (page.quality) {
    await prisma.pageQualityScore.create({
      data: {
        pageId: saved.id,
        wordCount: page.quality.wordCount ?? 0,
        uniquenessScore: page.quality.uniquenessScore,
        localDepthScore: page.quality.localDepthScore,
        seoScore: page.quality.seoScore,
        readabilityScore: page.quality.readabilityScore,
        internalLinkScore: page.quality.internalLinkScore,
        duplicateRisk: page.quality.duplicateRisk,
        recommendedIndexFlag: toIndexFlag(page.quality.recommendedIndexFlag),
        warnings: page.quality.warnings as Prisma.InputJsonValue,
      },
    });
  }

  for (const link of page.internalLinks ?? []) {
    if (!link.targetUrl || !link.anchorText) continue;
    await prisma.pageInternalLink.create({
      data: {
        sourcePageId: saved.id,
        targetUrl: link.targetUrl,
        anchorText: link.anchorText,
        context: link.linkContext ?? link.context,
      },
    });
  }

  await prisma.pageMetadata.upsert({
    where: { pageId: saved.id },
    update: {
      metaTitle: page.metaTitle,
      metaDescription: page.metaDescription,
      canonicalUrl: page.canonicalUrl,
      robotsTag: page.robotsTag,
      ogTitle: page.ogTitle,
      ogDescription: page.ogDescription,
      twitterTitle: page.twitterTitle,
      twitterDescription: page.twitterDescription,
      metadataJson: { importedPageId: page.pageId } as Prisma.InputJsonObject,
    },
    create: {
      pageId: saved.id,
      metaTitle: page.metaTitle,
      metaDescription: page.metaDescription,
      canonicalUrl: page.canonicalUrl,
      robotsTag: page.robotsTag,
      ogTitle: page.ogTitle,
      ogDescription: page.ogDescription,
      twitterTitle: page.twitterTitle,
      twitterDescription: page.twitterDescription,
      metadataJson: { importedPageId: page.pageId } as Prisma.InputJsonObject,
    },
  });
}

async function importPages() {
  for (const page of getAllCitySeoPages()) {
    await importPage(
      {
        pageId: page.pageId,
        pageType: "city",
        status: page.status,
        indexFlag: page.indexFlag,
        canonicalUrl: page.canonicalUrl,
        canonicalTarget: page.canonicalTarget,
        slug: page.citySlug,
        cityName: page.cityName,
        citySlug: page.citySlug,
        stateName: page.stateName,
        countryName: page.countryName,
        primaryKeyword: page.primaryKeyword,
        secondaryKeywords: page.secondaryKeywords,
        searchIntent: page.searchIntent,
        metaTitle: page.metaTitle,
        metaDescription: page.metaDescription,
        h1: page.h1,
        heroTitle: page.heroTitle,
        heroSubtitle: page.heroSubtitle,
        introSummary: page.introSummary,
        ogTitle: page.ogTitle,
        ogDescription: page.ogDescription,
        twitterTitle: page.ogTitle,
        twitterDescription: page.ogDescription,
        ogImage: page.ogImage,
        robotsTag: page.robotsTag,
        contentBlocks: [
          { type: "intro", heading: "City overview", body: [...page.cityOverview, ...page.cityAcademicIntro].join("\n\n"), items: page.trustPoints },
          { type: "programmes", heading: page.programSectionTitle, body: page.curriculumNotes, items: page.ibProgramsAvailable.map((item) => item.name) },
          { type: "subjects", heading: page.subjectSectionTitle, body: page.assessmentSupport, items: page.ibSubjectsAvailable.map((item) => item.name) },
          { type: "local_areas", heading: page.areaSectionTitle, body: page.serviceAreaText, items: page.premiumAreas.map((item) => item.name) },
          { type: "schools", heading: page.schoolSectionTitle, body: page.schoolDisclaimer, items: page.ibSchoolsCity.map((item) => item.name) },
        ],
        faqs: page.cityFaqs,
        internalLinks: page.internalLinksOut,
        schema: page.schema,
        quality: {
          wordCount: [...page.cityOverview, ...page.cityAcademicIntro].join(" ").split(/\s+/).filter(Boolean).length,
          uniquenessScore: page.contentUniquenessScore,
          localDepthScore: page.demandScore,
          seoScore: Math.round(page.priorityScore * 10),
          readabilityScore: page.contentUniquenessScore,
          duplicateRisk: page.contentUniquenessScore > 85 ? "low" : "medium",
          internalLinkScore: page.internalLinksOut.length,
          recommendedIndexFlag: page.indexFlag,
          warnings: [],
        },
        lastUpdated: page.lastUpdated,
      },
      "IB",
    );
  }

  for (const page of getAllIgcseCityPages()) {
    await importPage(
      {
        pageId: page.pageId,
        pageType: "city",
        status: page.status,
        indexFlag: page.indexFlag,
        canonicalUrl: page.canonicalUrl,
        slug: page.citySlug,
        cityName: page.cityName,
        citySlug: page.citySlug,
        stateName: page.stateName,
        countryName: page.countryName,
        primaryKeyword: page.keywords[0],
        secondaryKeywords: page.keywords.slice(1),
        searchIntent: "Find board-aware IGCSE tutors by city.",
        metaTitle: page.metaTitle,
        metaDescription: page.metaDescription,
        h1: page.h1,
        heroTitle: page.heroTitle,
        heroSubtitle: page.heroSubtitle,
        introSummary: page.introSummary,
        ogTitle: page.ogTitle,
        ogDescription: page.ogDescription,
        twitterTitle: page.twitterTitle,
        twitterDescription: page.twitterDescription,
        ogImage: page.ogImage,
        robotsTag: page.indexFlag === "index" ? "index, follow" : "noindex, follow",
        contentBlocks: [
          { type: "intro", heading: "City academic context", body: page.cityAcademicIntro.join("\n\n"), items: page.trustPoints },
          { type: "subjects", heading: page.subjectSectionTitle, body: page.subjects.map((subject) => subject.description).join(" "), items: page.subjects.map((subject) => subject.name) },
          { type: "local_areas", heading: page.areaSectionTitle, body: page.areaNotes.map((area) => area.description).join(" "), items: page.areaNotes.map((area) => area.name) },
          { type: "schools", heading: page.schoolSectionTitle, body: page.schoolDisclaimer, items: page.schoolEcosystem.map((school) => school.name) },
        ],
        faqs: page.faqs,
        internalLinks: page.internalLinks,
        schema: { faq: true, service: "IGCSE tutoring", city: page.cityName },
        quality: {
          wordCount: [...page.cityAcademicIntro, page.finalCta].join(" ").split(/\s+/).filter(Boolean).length,
          uniquenessScore: Math.round(page.priorityScore * 100),
          localDepthScore: 82,
          seoScore: Math.round(page.priorityScore * 100),
          readabilityScore: 82,
          duplicateRisk: "low",
          internalLinkScore: page.internalLinks.length,
          recommendedIndexFlag: page.indexFlag,
          warnings: [],
        },
        lastUpdated: page.lastUpdated,
      },
      "IGCSE",
    );
  }

  for (const page of generatedSeoPages) {
    await importPage(page, page.serviceFocus.toLowerCase().includes("igcse") ? "IGCSE" : "IB");
  }
}

async function main() {
  await importCitySeoLocations();
  await importTutors();
  await importPages();

  const counts = {
    tutors: await prisma.tutor.count(),
    tutorProfiles: await prisma.tutorProfile.count(),
    tutorLocations: await prisma.tutorLocation.count(),
    generatedPages: await prisma.generatedPage.count(),
    pageBlocks: await prisma.pageBlock.count(),
    pageFaqs: await prisma.pageFaq.count(),
    pageInternalLinks: await prisma.pageInternalLink.count(),
    countries: await prisma.country.count(),
    states: await prisma.state.count(),
    cities: await prisma.city.count(),
    areas: await prisma.area.count(),
    sectors: await prisma.sector.count(),
    societies: await prisma.society.count(),
    schools: await prisma.school.count(),
  };

  console.log(JSON.stringify(counts, null, 2));
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
