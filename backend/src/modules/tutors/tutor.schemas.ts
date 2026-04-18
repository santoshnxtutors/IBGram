import { z } from "zod";
import { paginationSchema } from "../../common/utils/pagination.js";

export const tutorListQuerySchema = paginationSchema.extend({
  curriculum: z.string().optional(),
  subject: z.string().optional(),
  grade: z.string().optional(),
  featured: z.coerce.boolean().optional(),
  status: z.string().optional()
});

export const tutorParamsSchema = z.object({
  slug: z.string().min(1)
});

export const tutorCreateSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  subject: z.string().min(1),
  grade: z.string().min(1),
  rating: z.number().min(0).max(5),
  reviews: z.number().int().nonnegative(),
  experience: z.string().min(1),
  bio: z.string().min(1),
  rate: z.string().min(1),
  image: z.string().optional().default(""),
  tags: z.array(z.string()).default([]),
  accent: z.string().min(1),
  education: z.string().min(1),
  successRate: z.string().min(1),
  availability: z.string().min(1),
  responseTime: z.string().min(1),
  methodology: z.string().min(1),
  curriculum: z.string().min(1),
  headline: z.string().optional(),
  isFeatured: z.boolean().default(false),
  status: z.enum(["ACTIVE", "INACTIVE", "DRAFT", "ARCHIVED"]).default("ACTIVE")
});

export const tutorUpdateSchema = tutorCreateSchema.partial();
