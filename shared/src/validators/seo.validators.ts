import { z } from "zod";

export const canonicalRuleValidator = z.object({
  sourcePath: z.string().trim().min(1).max(500),
  targetPath: z.string().trim().min(1).max(500),
  isActive: z.boolean().default(true),
});

export const redirectRuleValidator = z.object({
  sourcePath: z.string().trim().min(1).max(500),
  targetPath: z.string().trim().min(1).max(500),
  statusCode: z.union([z.literal(301), z.literal(302), z.literal(307), z.literal(308)]).default(301),
  isActive: z.boolean().default(true),
});

export const sitemapEntryValidator = z.object({
  loc: z.url(),
  lastmod: z.coerce.date().optional(),
  changefreq: z.enum(["always", "hourly", "daily", "weekly", "monthly", "yearly", "never"]).optional(),
  priority: z.number().min(0).max(1).optional(),
  isIncluded: z.boolean().default(true),
});
