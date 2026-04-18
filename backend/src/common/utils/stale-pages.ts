import { prisma } from "../../database/prisma.js";

export function markPagesStale(filters: { locationId?: string; subject?: string; curriculum?: string }) {
  return prisma.page.updateMany({
    where: {
      OR: [
        filters.locationId ? { locationId: filters.locationId } : undefined,
        filters.subject ? { subject: filters.subject } : undefined,
        filters.curriculum ? { curriculum: filters.curriculum } : undefined
      ].filter(Boolean)
    },
    data: {
      needsRegeneration: true
    }
  });
}
