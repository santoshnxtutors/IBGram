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
      createdAt: string;
    }>;
    recentPageUpdates: Array<{
      id: string;
      title: string | null;
      fullPath: string;
      status: string;
      updatedAt: string;
    }>;
    recentGenerationJobs: Array<{
      id: string;
      jobType: string;
      status: string;
      createdAt: string;
      completedAt: string | null;
    }>;
  };
  users: {
    total: number;
    active: number;
    suspended: number;
    invited: number;
  };
};
