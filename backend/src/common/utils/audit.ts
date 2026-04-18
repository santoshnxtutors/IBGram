import { prisma } from "../database/prisma.js";
import { logger } from "../config/logger.js";

export async function createAuditLog(input: {
  actorUserId?: string;
  action: string;
  entityType: string;
  entityId: string;
  beforeJson?: unknown;
  afterJson?: unknown;
}) {
  try {
    await prisma.auditLog.create({
      data: {
        actorUserId: input.actorUserId,
        action: input.action,
        entityType: input.entityType,
        entityId: input.entityId,
        beforeJson: input.beforeJson as never,
        afterJson: input.afterJson as never
      }
    });
  } catch (error) {
    logger.error(error, "Failed to write audit log");
  }
}
