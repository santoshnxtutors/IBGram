export const PAGE_STATUSES = [
  "draft",
  "generated",
  "needs_review",
  "approved",
  "published",
  "paused",
  "archived",
] as const;

export type PageStatus = (typeof PAGE_STATUSES)[number];

export const INDEX_FLAGS = ["index", "noindex", "auto"] as const;

export type IndexFlag = (typeof INDEX_FLAGS)[number];
