import type { Curriculum } from "../constants/curriculums";
import type { IndexFlag, PageStatus } from "../constants/page-status";
import type { PageType } from "../constants/page-types";

export type GeneratedPageSummary = {
  id: string;
  pageType: PageType;
  curriculum: Curriculum;
  status: PageStatus;
  indexFlag: IndexFlag;
  slug: string;
  fullPath: string;
  title?: string | null;
  metaTitle?: string | null;
  primaryKeyword?: string | null;
  qualityScore?: number | null;
  publishedAt?: string | null;
  updatedAt: string;
};

export type PageContentBlock = {
  type: string;
  heading?: string;
  body?: string;
  items?: string[];
  sortOrder: number;
};
