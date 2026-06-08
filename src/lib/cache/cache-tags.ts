export const CACHE_TAGS = {
  generatedPages: "cms:generated-pages",
  sitemap: "seo:sitemap",
  blog: "blog",
  tutors: "cms:tutors",
  tutorVisibility: "cms:tutor-visibility",
  tutorReach: "cms:tutor-reach",
  homepage: "cms:homepage",
  publicFaqs: "cms:public-faqs",
  testimonials: "cms:testimonials",
  successStories: "cms:success-stories",
  assets: "cms:assets",
} as const;

export const ALLOWED_REVALIDATION_TAGS = new Set<string>(Object.values(CACHE_TAGS));

