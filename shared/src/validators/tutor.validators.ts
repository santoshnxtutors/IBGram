import { z } from "zod";
import { CURRICULUMS, IB_PROGRAMMES } from "../constants/curriculums";

export const tutorValidator = z.object({
  slug: z.string().trim().min(1).max(180),
  displayName: z.string().trim().min(2).max(160),
  headline: z.string().trim().max(220).optional(),
  bio: z.string().trim().max(4000).optional(),
  curriculums: z.array(z.enum(CURRICULUMS)).min(1),
  programmes: z.array(z.enum(IB_PROGRAMMES)).default([]),
  subjects: z.array(z.string().trim().min(1).max(120)).default([]),
  verified: z.boolean().default(false),
});

export const tutorLocationValidator = z.object({
  cityId: z.string().min(1),
  areaId: z.string().optional(),
  sectorId: z.string().optional(),
  societyId: z.string().optional(),
  schoolId: z.string().optional(),
  cityName: z.string().trim().min(1).max(120),
  citySlug: z.string().trim().min(1).max(120),
  areaName: z.string().trim().max(120).optional(),
  areaSlug: z.string().trim().max(120).optional(),
  sectorName: z.string().trim().max(120).optional(),
  sectorSlug: z.string().trim().max(120).optional(),
  societyName: z.string().trim().max(160).optional(),
  societySlug: z.string().trim().max(160).optional(),
  nearbySchoolName: z.string().trim().max(180).optional(),
  nearbySchoolSlug: z.string().trim().max(180).optional(),
  homeTutoringAvailable: z.boolean().default(false),
  onlineTutoringAvailable: z.boolean().default(true),
  hybridTutoringAvailable: z.boolean().default(false),
  serviceRadiusKm: z.number().min(0).max(100).optional(),
  priority: z.number().int().min(0).default(0),
  isActive: z.boolean().default(true),
  notes: z.string().max(1000).optional(),
});
