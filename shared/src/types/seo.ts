export type SeoMetadata = {
  title?: string | null;
  metaTitle?: string | null;
  metaDescription?: string | null;
  canonicalUrl?: string | null;
  robotsTag?: string | null;
  ogTitle?: string | null;
  ogDescription?: string | null;
  twitterTitle?: string | null;
  twitterDescription?: string | null;
};

export type RedirectRuleSummary = {
  id: string;
  sourcePath: string;
  targetPath: string;
  statusCode: 301 | 302 | 307 | 308;
  isActive: boolean;
};
