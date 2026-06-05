import "server-only";
import { prisma } from "@/lib/db";

export type AdminDashboardConnectionState = "live" | "empty" | "unreachable";

export type AdminDashboardSummary = {
  state: AdminDashboardConnectionState;
  error: string | null;
  pages: {
    total: number;
    published: number;
    draft: number;
    needsReview: number;
    approved: number;
    paused: number;
    archived: number;
    noindex: number;
    sitemapIncluded: number;
    byType: {
      city: number;
      area: number;
      sector: number;
      society: number;
      school: number;
      subject: number;
      programme: number;
    };
  };
  tutors: { total: number; active: number; verified: number; approved: number; missingLocation: number };
  tutorPages: { total: number; published: number };
  locations: { countries: number; states: number; cities: number; areas: number; sectors: number; societies: number; schools: number };
  seo: {
    avgSeoScore: number;
    missingMetaTitle: number;
    missingMetaDescription: number;
    missingH1: number;
    missingCanonical: number;
    redirects: number;
    activeRedirects: number;
    canonicals: number;
    sitemapEntries: number;
    robotsRules: number;
  };
  internalLinks: { total: number; withoutTarget: number };
  cms: {
    homepageSections: number;
    testimonials: number;
    successStories: number;
    blogPosts: number;
    blogCategories: number;
    faqItems: number;
    navigationMenus: number;
    navigationMenuItems: number;
    footerBlocks: number;
    ctaBlocks: number;
    mediaAssets: number;
  };
  users: { total: number; active: number; suspended: number; invited: number };
  activity: {
    recentPagePublishLogs: Array<{ id: string; action: string; fromStatus: string | null; toStatus: string | null; createdAt: Date; pageId: string; pageTitle: string | null; pagePath: string | null }>;
    recentPageUpdates: Array<{ id: string; fullPath: string; title: string | null; status: string; updatedAt: Date }>;
    recentAuditLogs: Array<{ id: string; action: string; entityType: string; entityId: string | null; createdAt: Date; actor: string | null }>;
  };
};

const EMPTY: Omit<AdminDashboardSummary, "state" | "error"> = {
  pages: {
    total: 0, published: 0, draft: 0, needsReview: 0, approved: 0, paused: 0, archived: 0, noindex: 0, sitemapIncluded: 0,
    byType: { city: 0, area: 0, sector: 0, society: 0, school: 0, subject: 0, programme: 0 },
  },
  tutors: { total: 0, active: 0, verified: 0, approved: 0, missingLocation: 0 },
  tutorPages: { total: 0, published: 0 },
  locations: { countries: 0, states: 0, cities: 0, areas: 0, sectors: 0, societies: 0, schools: 0 },
  seo: { avgSeoScore: 0, missingMetaTitle: 0, missingMetaDescription: 0, missingH1: 0, missingCanonical: 0, redirects: 0, activeRedirects: 0, canonicals: 0, sitemapEntries: 0, robotsRules: 0 },
  internalLinks: { total: 0, withoutTarget: 0 },
  cms: { homepageSections: 0, testimonials: 0, successStories: 0, blogPosts: 0, blogCategories: 0, faqItems: 0, navigationMenus: 0, navigationMenuItems: 0, footerBlocks: 0, ctaBlocks: 0, mediaAssets: 0 },
  users: { total: 0, active: 0, suspended: 0, invited: 0 },
  activity: { recentPagePublishLogs: [], recentPageUpdates: [], recentAuditLogs: [] },
};

export async function getAdminDashboardSummary(): Promise<AdminDashboardSummary> {
  try {
    // Run all reads in a single Prisma transaction so they share ONE database
    // connection. This avoids exhausting the connection pool on remote
    // PostgreSQL instances with low max_connections (the failure mode that
    // showed "Too many database connections opened").
    const [
      pageGroupByStatus,
      pageGroupByIndex,
      pageGroupByType,
      sitemapIncludedCount,
      pageAvgScore,
      missingMetaTitleCount,
      missingMetaDescriptionCount,
      missingH1Count,
      missingCanonicalCount,
      tutorGroupByStatus,
      tutorVerifiedCount,
      tutorApprovedCount,
      tutorMissingLoc,
      tutorReachTotal,
      tutorReachPublished,
      countriesCount,
      statesCount,
      citiesCount,
      areasCount,
      sectorsCount,
      societiesCount,
      schoolsCount,
      redirectTotal,
      redirectActive,
      canonicalCount,
      sitemapEntryCount,
      robotsRuleCount,
      internalLinkTotal,
      internalLinkOrphan,
      homepageCount,
      testimonialCount,
      successStoryCount,
      blogPostCount,
      blogCategoryCount,
      faqCount,
      menuCount,
      menuItemCount,
      footerBlockCount,
      ctaBlockCount,
      mediaCount,
      userGroupByStatus,
      recentPublishLogs,
      recentPageUpdates,
      recentAuditLogs,
    ] = await prisma.$transaction([
      prisma.generatedPage.groupBy({ by: ["status"], _count: { _all: true }, orderBy: { status: "asc" } }),
      prisma.generatedPage.groupBy({ by: ["indexFlag"], _count: { _all: true }, orderBy: { indexFlag: "asc" } }),
      prisma.generatedPage.groupBy({ by: ["pageType"], _count: { _all: true }, orderBy: { pageType: "asc" } }),
      prisma.generatedPage.count({ where: { sitemapIncluded: true } }),
      prisma.generatedPage.aggregate({ _avg: { qualityScore: true } }),
      prisma.generatedPage.count({ where: { metaTitle: null } }),
      prisma.generatedPage.count({ where: { metaDescription: null } }),
      prisma.generatedPage.count({ where: { h1: null } }),
      prisma.generatedPage.count({ where: { canonicalUrl: null } }),
      prisma.tutor.groupBy({ by: ["status"], _count: { _all: true }, orderBy: { status: "asc" } }),
      prisma.tutor.count({ where: { verified: true } }),
      prisma.tutor.count({ where: { approved: true } }),
      prisma.tutor.count({ where: { locations: { none: {} } } }),
      prisma.tutorReachPage.count(),
      prisma.tutorReachPage.count({ where: { status: "published" } }),
      prisma.country.count(),
      prisma.state.count(),
      prisma.city.count(),
      prisma.area.count(),
      prisma.sector.count(),
      prisma.society.count(),
      prisma.school.count(),
      prisma.redirectRule.count(),
      prisma.redirectRule.count({ where: { isActive: true } }),
      prisma.canonicalRule.count(),
      prisma.sitemapEntry.count(),
      prisma.robotsRule.count(),
      prisma.pageInternalLink.count(),
      prisma.pageInternalLink.count({ where: { targetPageId: null } }),
      prisma.homepageSection.count(),
      prisma.testimonial.count(),
      prisma.successStory.count(),
      prisma.blogPost.count(),
      prisma.blogCategory.count(),
      prisma.faqItem.count(),
      prisma.navigationMenu.count(),
      prisma.navigationMenuItem.count(),
      prisma.footerBlock.count(),
      prisma.ctaBlock.count(),
      prisma.asset.count(),
      prisma.user.groupBy({ by: ["status"], _count: { _all: true }, orderBy: { status: "asc" } }),
      prisma.pagePublishLog.findMany({
        orderBy: { createdAt: "desc" },
        take: 10,
        include: { page: { select: { id: true, title: true, fullPath: true } } },
      }),
      prisma.generatedPage.findMany({
        orderBy: { updatedAt: "desc" },
        take: 10,
        select: { id: true, fullPath: true, title: true, status: true, updatedAt: true },
      }),
      prisma.auditLog.findMany({
        orderBy: { createdAt: "desc" },
        take: 10,
        include: { actor: { select: { username: true } } },
      }),
    ]);

    const countBy = <K extends string>(rows: Array<{ _count: { _all: number }; [key: string]: unknown }>, field: string, key: K): number => {
      const found = rows.find((row) => row[field] === key);
      return found?._count._all ?? 0;
    };

    const sumAll = (rows: Array<{ _count: { _all: number } }>) => rows.reduce((acc, row) => acc + row._count._all, 0);

    const pagesTotal = sumAll(pageGroupByStatus);
    const missingMetaTitle = missingMetaTitleCount;
    const missingMetaDescription = missingMetaDescriptionCount;
    const missingH1 = missingH1Count;
    const missingCanonical = missingCanonicalCount;

    const summary: AdminDashboardSummary = {
      state: pagesTotal === 0 && (tutorGroupByStatus.length === 0) && homepageCount === 0 && blogPostCount === 0 && testimonialCount === 0 && mediaCount === 0
        ? "empty"
        : "live",
      error: null,
      pages: {
        total: pagesTotal,
        published: countBy(pageGroupByStatus as never, "status", "published"),
        draft: countBy(pageGroupByStatus as never, "status", "draft"),
        needsReview: countBy(pageGroupByStatus as never, "status", "needs_review"),
        approved: countBy(pageGroupByStatus as never, "status", "approved"),
        paused: countBy(pageGroupByStatus as never, "status", "paused"),
        archived: countBy(pageGroupByStatus as never, "status", "archived"),
        noindex: countBy(pageGroupByIndex as never, "indexFlag", "noindex"),
        sitemapIncluded: sitemapIncludedCount,
        byType: {
          city: countBy(pageGroupByType as never, "pageType", "city"),
          area: countBy(pageGroupByType as never, "pageType", "area"),
          sector: countBy(pageGroupByType as never, "pageType", "sector"),
          society: countBy(pageGroupByType as never, "pageType", "society"),
          school: countBy(pageGroupByType as never, "pageType", "school"),
          subject: countBy(pageGroupByType as never, "pageType", "subject"),
          programme: countBy(pageGroupByType as never, "pageType", "programme"),
        },
      },
      tutors: {
        total: sumAll(tutorGroupByStatus),
        active: countBy(tutorGroupByStatus as never, "status", "active"),
        verified: tutorVerifiedCount,
        approved: tutorApprovedCount,
        missingLocation: tutorMissingLoc,
      },
      tutorPages: {
        total: tutorReachTotal,
        published: tutorReachPublished,
      },
      locations: {
        countries: countriesCount,
        states: statesCount,
        cities: citiesCount,
        areas: areasCount,
        sectors: sectorsCount,
        societies: societiesCount,
        schools: schoolsCount,
      },
      seo: {
        avgSeoScore: Math.round(pageAvgScore._avg.qualityScore ?? 0),
        missingMetaTitle,
        missingMetaDescription,
        missingH1,
        missingCanonical,
        redirects: redirectTotal,
        activeRedirects: redirectActive,
        canonicals: canonicalCount,
        sitemapEntries: sitemapEntryCount,
        robotsRules: robotsRuleCount,
      },
      internalLinks: { total: internalLinkTotal, withoutTarget: internalLinkOrphan },
      cms: {
        homepageSections: homepageCount,
        testimonials: testimonialCount,
        successStories: successStoryCount,
        blogPosts: blogPostCount,
        blogCategories: blogCategoryCount,
        faqItems: faqCount,
        navigationMenus: menuCount,
        navigationMenuItems: menuItemCount,
        footerBlocks: footerBlockCount,
        ctaBlocks: ctaBlockCount,
        mediaAssets: mediaCount,
      },
      users: {
        total: sumAll(userGroupByStatus),
        active: countBy(userGroupByStatus as never, "status", "active"),
        suspended: countBy(userGroupByStatus as never, "status", "suspended"),
        invited: countBy(userGroupByStatus as never, "status", "invited"),
      },
      activity: {
        recentPagePublishLogs: recentPublishLogs.map((log) => ({
          id: log.id,
          action: log.action,
          fromStatus: log.fromStatus,
          toStatus: log.toStatus,
          createdAt: log.createdAt,
          pageId: log.pageId,
          pageTitle: log.page?.title ?? null,
          pagePath: log.page?.fullPath ?? null,
        })),
        recentPageUpdates: recentPageUpdates.map((p) => ({ id: p.id, fullPath: p.fullPath, title: p.title, status: p.status, updatedAt: p.updatedAt })),
        recentAuditLogs: recentAuditLogs.map((log) => ({
          id: log.id,
          action: log.action,
          entityType: log.entityType,
          entityId: log.entityId,
          createdAt: log.createdAt,
          actor: log.actor?.username ?? null,
        })),
      },
    };

    return summary;
  } catch (err) {
    return {
      state: "unreachable",
      error: err instanceof Error ? err.message : String(err),
      ...EMPTY,
    };
  }
}
