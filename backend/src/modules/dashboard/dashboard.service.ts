import { prisma } from "../../lib/prisma";

export type DashboardSummary = {
  pages: {
    total: number;
    published: number;
    draft: number;
    needsReview: number;
    approved: number;
    noindex: number;
    sitemapIncluded: number;
  };
  tutors: {
    total: number;
    active: number;
    missingLocation: number;
    unverified: number;
  };
  locations: {
    countries: number;
    states: number;
    cities: number;
    areas: number;
    sectors: number;
    societies: number;
    schools: number;
  };
  generatedPages: {
    cityPages: number;
    areaPages: number;
    sectorPages: number;
    societyPages: number;
    schoolPages: number;
    subjectPages: number;
    programmePages: number;
  };
  seo: {
    avgSeoScore: number;
    missingMetaTitle: number;
    missingMetaDescription: number;
    missingH1: number;
    missingCanonical: number;
    redirects: number;
    canonicals: number;
    sitemapEntries: number;
    robotsRules: number;
  };
  internalLinks: {
    total: number;
    withoutTarget: number;
  };
  activity: {
    recentAuditLogs: Array<{
      id: string;
      action: string;
      entityType: string;
      entityId: string | null;
      actor: { id: string; username: string } | null;
      createdAt: Date;
    }>;
    recentPageUpdates: Array<{
      id: string;
      title: string | null;
      fullPath: string;
      status: string;
      updatedAt: Date;
    }>;
    recentGenerationJobs: Array<{
      id: string;
      jobType: string;
      status: string;
      createdAt: Date;
      completedAt: Date | null;
    }>;
  };
  users: {
    total: number;
    active: number;
    suspended: number;
    invited: number;
  };
};

export async function getDashboardSummary(): Promise<DashboardSummary> {
  const [
    pagesTotal,
    pagesPublished,
    pagesDraft,
    pagesNeedsReview,
    pagesApproved,
    pagesNoindex,
    pagesSitemap,
    tutorsTotal,
    tutorsActive,
    tutorsUnverified,
    tutorsWithLocation,
    countries,
    states,
    cities,
    areas,
    sectors,
    societies,
    schools,
    pagesByType,
    seoAvg,
    pagesMissingMetaTitle,
    pagesMissingMetaDescription,
    pagesMissingH1,
    pagesMissingCanonical,
    redirects,
    canonicals,
    sitemapEntries,
    robotsRules,
    internalLinksTotal,
    internalLinksWithoutTarget,
    recentAuditLogs,
    recentPageUpdates,
    recentGenerationJobs,
    usersTotal,
    usersActive,
    usersSuspended,
    usersInvited,
  ] = await Promise.all([
    prisma.generatedPage.count({ where: { deletedAt: null } }),
    prisma.generatedPage.count({ where: { deletedAt: null, status: "published" } }),
    prisma.generatedPage.count({ where: { deletedAt: null, status: "draft" } }),
    prisma.generatedPage.count({ where: { deletedAt: null, status: "needs_review" } }),
    prisma.generatedPage.count({ where: { deletedAt: null, status: "approved" } }),
    prisma.generatedPage.count({ where: { deletedAt: null, indexFlag: "noindex" } }),
    prisma.generatedPage.count({ where: { deletedAt: null, sitemapIncluded: true } }),
    prisma.tutor.count({ where: { deletedAt: null } }),
    prisma.tutor.count({ where: { deletedAt: null, status: "active" } }),
    prisma.tutor.count({ where: { deletedAt: null, verified: false } }),
    prisma.tutor.findMany({
      where: { deletedAt: null },
      select: { id: true, locations: { select: { id: true }, take: 1 } },
    }),
    prisma.country.count(),
    prisma.state.count(),
    prisma.city.count(),
    prisma.area.count(),
    prisma.sector.count(),
    prisma.society.count(),
    prisma.school.count(),
    prisma.generatedPage.groupBy({
      by: ["pageType"],
      where: { deletedAt: null },
      _count: { _all: true },
    }),
    prisma.generatedPage.aggregate({
      where: { deletedAt: null, qualityScore: { not: null } },
      _avg: { qualityScore: true },
    }),
    prisma.generatedPage.count({ where: { deletedAt: null, OR: [{ metaTitle: null }, { metaTitle: "" }] } }),
    prisma.generatedPage.count({ where: { deletedAt: null, OR: [{ metaDescription: null }, { metaDescription: "" }] } }),
    prisma.generatedPage.count({ where: { deletedAt: null, OR: [{ h1: null }, { h1: "" }] } }),
    prisma.generatedPage.count({ where: { deletedAt: null, OR: [{ canonicalUrl: null }, { canonicalUrl: "" }] } }),
    prisma.redirectRule.count({ where: { isActive: true } }),
    prisma.canonicalRule.count({ where: { isActive: true } }),
    prisma.sitemapEntry.count({ where: { isIncluded: true } }),
    prisma.robotsRule.count({ where: { isActive: true } }),
    prisma.pageInternalLink.count(),
    prisma.pageInternalLink.count({ where: { targetPageId: null } }),
    prisma.auditLog.findMany({
      orderBy: { createdAt: "desc" },
      take: 10,
      select: {
        id: true,
        action: true,
        entityType: true,
        entityId: true,
        createdAt: true,
        actor: { select: { id: true, username: true } },
      },
    }),
    prisma.generatedPage.findMany({
      where: { deletedAt: null },
      orderBy: { updatedAt: "desc" },
      take: 10,
      select: { id: true, title: true, fullPath: true, status: true, updatedAt: true },
    }),
    prisma.pageGenerationJob.findMany({
      orderBy: { createdAt: "desc" },
      take: 10,
      select: { id: true, jobType: true, status: true, createdAt: true, completedAt: true },
    }),
    prisma.user.count({ where: { deletedAt: null } }),
    prisma.user.count({ where: { deletedAt: null, status: "active" } }),
    prisma.user.count({ where: { deletedAt: null, status: "suspended" } }),
    prisma.user.count({ where: { deletedAt: null, status: "invited" } }),
  ]);

  const byType = Object.fromEntries(pagesByType.map((row) => [row.pageType, row._count._all]));
  const tutorsMissingLocation = tutorsWithLocation.filter((tutor) => tutor.locations.length === 0).length;

  return {
    pages: {
      total: pagesTotal,
      published: pagesPublished,
      draft: pagesDraft,
      needsReview: pagesNeedsReview,
      approved: pagesApproved,
      noindex: pagesNoindex,
      sitemapIncluded: pagesSitemap,
    },
    tutors: {
      total: tutorsTotal,
      active: tutorsActive,
      missingLocation: tutorsMissingLocation,
      unverified: tutorsUnverified,
    },
    locations: { countries, states, cities, areas, sectors, societies, schools },
    generatedPages: {
      cityPages: byType.city ?? 0,
      areaPages: byType.area ?? 0,
      sectorPages: byType.sector ?? 0,
      societyPages: byType.society ?? 0,
      schoolPages: byType.school ?? 0,
      subjectPages: byType.subject ?? 0,
      programmePages: byType.programme ?? 0,
    },
    seo: {
      avgSeoScore: seoAvg._avg.qualityScore ? Math.round(seoAvg._avg.qualityScore) : 0,
      missingMetaTitle: pagesMissingMetaTitle,
      missingMetaDescription: pagesMissingMetaDescription,
      missingH1: pagesMissingH1,
      missingCanonical: pagesMissingCanonical,
      redirects,
      canonicals,
      sitemapEntries,
      robotsRules,
    },
    internalLinks: {
      total: internalLinksTotal,
      withoutTarget: internalLinksWithoutTarget,
    },
    activity: {
      recentAuditLogs,
      recentPageUpdates,
      recentGenerationJobs,
    },
    users: {
      total: usersTotal,
      active: usersActive,
      suspended: usersSuspended,
      invited: usersInvited,
    },
  };
}
