import { z } from "zod";
import { paginationSchema } from "../../common/utils/pagination.js";

export const locationListQuerySchema = paginationSchema.extend({
  level: z.enum(["COUNTRY", "CITY", "LOCALITY", "SOCIETY"]).optional(),
  parentId: z.string().optional(),
  isActive: z.coerce.boolean().optional()
});

export const locationSearchQuerySchema = z.object({
  q: z.string().min(1),
  limit: z.coerce.number().min(1).max(50).default(10)
});

export const locationParamsSchema = z.object({ slug: z.string().optional(), id: z.string().optional() });

export const locationCreateSchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
  level: z.enum(["COUNTRY", "CITY", "LOCALITY", "SOCIETY"]),
  parentId: z.string().optional(),
  countryCode: z.string().optional(),
  lat: z.number().optional(),
  lng: z.number().optional(),
  googlePlaceId: z.string().optional(),
  aliases: z.array(z.string()).optional(),
  isActive: z.boolean().default(true)
});

export const locationUpdateSchema = locationCreateSchema.partial();
