import { z } from "zod";
import { paginationSchema } from "../../common/utils/pagination.js";

export const blogListQuerySchema = paginationSchema.extend({
  status: z.string().optional(),
  subject: z.string().optional(),
  curriculum: z.string().optional()
});
export const blogParamsSchema = z.object({ slug: z.string().min(1) });
export const blogCreateSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  excerpt: z.string().min(1),
  contentMarkdown: z.string().min(1),
  coverImage: z.string().optional(),
  authorName: z.string().min(1),
  status: z.enum(["DRAFT", "REVIEW", "PUBLISHED", "ARCHIVED"]).default("DRAFT"),
  publishedAt: z.string().datetime().optional(),
  seoTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  tagsJson: z.array(z.string()).optional(),
  subject: z.string().optional(),
  curriculum: z.string().optional(),
  locationId: z.string().optional()
});
export const blogUpdateSchema = blogCreateSchema.partial();
