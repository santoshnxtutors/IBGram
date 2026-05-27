import { z } from "zod";
import { CURRICULUMS } from "../constants/curriculums";
import { INDEX_FLAGS, PAGE_STATUSES } from "../constants/page-status";
import { PAGE_TYPES } from "../constants/page-types";

export const generatedPageValidator = z.object({
  pageType: z.enum(PAGE_TYPES),
  curriculum: z.enum(CURRICULUMS),
  status: z.enum(PAGE_STATUSES).default("draft"),
  indexFlag: z.enum(INDEX_FLAGS).default("auto"),
  slug: z.string().trim().min(1).max(240),
  fullPath: z.string().trim().min(1).max(500),
  primaryKeyword: z.string().trim().min(1).max(240),
  secondaryKeywords: z.array(z.string().trim().min(1).max(240)).default([]),
  title: z.string().trim().max(180).optional(),
  metaTitle: z.string().trim().max(70).optional(),
  metaDescription: z.string().trim().max(180).optional(),
  h1: z.string().trim().max(180).optional(),
});

export const pageFaqValidator = z.object({
  question: z.string().trim().min(8).max(240),
  answer: z.string().trim().min(20).max(1200),
  sortOrder: z.number().int().min(0).default(0),
});
