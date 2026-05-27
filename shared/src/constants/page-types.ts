export const PAGE_TYPES = [
  "city",
  "area",
  "sector",
  "society",
  "school",
  "subject",
  "programme",
  "service",
  "hub",
  "blog_support",
] as const;

export type PageType = (typeof PAGE_TYPES)[number];
