import { z } from "zod";

export const locationNameValidator = z.string().trim().min(1).max(180);
export const locationSlugValidator = z.string().trim().min(1).max(180).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);

export const cityValidator = z.object({
  countryId: z.string().min(1),
  stateId: z.string().min(1),
  name: locationNameValidator,
  slug: locationSlugValidator,
  timezone: z.string().default("Asia/Kolkata"),
});

export const microLocationValidator = z.object({
  cityId: z.string().min(1),
  areaId: z.string().optional(),
  sectorId: z.string().optional(),
  name: locationNameValidator,
  slug: locationSlugValidator,
});
