import { z } from "zod";

export const adminLoginSchema = z.object({
  username: z.string().trim().min(1, "Username is required."),
  password: z.string().min(1, "Password is required."),
  remember: z.boolean().optional().default(false),
});

export const adminGeneratorSchema = z.object({
  pageType: z.enum(["city", "area", "sector", "society", "school", "subject", "programme"]),
  curriculum: z.enum(["IB", "IGCSE", "Both"]).default("IB"),
  cityName: z.string().trim().min(2, "City is required."),
  localityName: z.string().trim().optional().default(""),
  serviceFocus: z.string().trim().min(3, "Service focus is required."),
  primaryKeyword: z.string().trim().min(3, "Primary keyword is required."),
  area: z.string().trim().optional().default(""),
  sector: z.string().trim().optional().default(""),
  society: z.string().trim().optional().default(""),
  school: z.string().trim().optional().default(""),
  subject: z.string().trim().optional().default(""),
  programme: z.string().trim().optional().default(""),
  nearbyAreas: z.array(z.string()).default([]),
  nearbySectors: z.array(z.string()).default([]),
  nearbySocieties: z.array(z.string()).default([]),
  nearbySchools: z.array(z.string()).default([]),
  tutorAvailabilityNotes: z.string().trim().optional().default(""),
  proofNotes: z.string().trim().optional().default(""),
  ctaFocus: z.string().trim().optional().default("Book a free academic consultation"),
  tone: z.string().trim().optional().default("premium, helpful, parent-facing"),
  indexPreference: z.enum(["auto", "index", "noindex"]).default("auto"),
});

export const adminInternalLinkSchema = z.object({
  sourcePageId: z.string().min(1),
  targetPageId: z.string().min(1),
  targetUrl: z.string().min(1),
  anchorText: z.string().min(2),
  linkType: z.enum(["breadcrumb", "contextual", "card", "footer", "related", "cta"]).default("contextual"),
  priority: z.enum(["high", "medium", "low"]).default("medium"),
  followStatus: z.enum(["follow", "nofollow"]).default("follow"),
});

export const adminTutorLocationSchema = z.object({
  name: z.string().min(2),
  primaryCity: z.string().min(2),
  curriculums: z.enum(["IB", "IGCSE", "Both"]),
  availableCities: z.array(z.string()).min(1),
  teachingModes: z.array(z.enum(["home", "online", "hybrid"])).min(1),
});

export const adminSettingsSchema = z.object({
  siteName: z.string().min(2),
  productionDomain: z.string().url(),
  organizationName: z.string().min(2),
  contactEmail: z.string().email(),
  defaultRobotsBehavior: z.enum(["index", "noindex"]),
});

export const adminPageEditorSchema = z.object({
  title: z.string().min(3),
  slug: z.string().min(1),
  url: z.string().min(1),
  pageType: z.string().min(1),
  curriculum: z.enum(["IB", "IGCSE", "Both"]),
  metaTitle: z.string().min(10),
  metaDescription: z.string().min(40),
  h1: z.string().min(5),
  canonicalUrl: z.string().min(1),
  status: z.enum(["published", "draft", "review", "paused", "archived"]),
  indexFlag: z.enum(["index", "noindex"]),
});

export const adminPermissionSchema = z.enum([
  "dashboard:read",
  "pages:read",
  "pages:write",
  "pages:publish",
  "generator:use",
  "tutors:write",
  "locations:write",
  "seo:write",
  "assets:write",
  "imports:write",
  "settings:write",
  "users:manage",
]);

export const adminUserCreateSchema = z.object({
  name: z.string().trim().min(2, "Name is required."),
  email: z.string().trim().email("Valid email is required."),
  username: z.string().trim().min(3, "Username is required."),
  password: z.string().min(8, "Password must be at least 8 characters."),
  role: z.enum(["admin", "editor", "viewer"]).default("viewer"),
  permissions: z.array(adminPermissionSchema).default([]),
  status: z.enum(["active", "disabled"]).default("active"),
});

export const adminUserUpdateSchema = z.object({
  id: z.string().min(1),
  name: z.string().trim().min(2).optional(),
  role: z.enum(["admin", "editor", "viewer"]).optional(),
  permissions: z.array(adminPermissionSchema).optional(),
  status: z.enum(["active", "disabled"]).optional(),
});
