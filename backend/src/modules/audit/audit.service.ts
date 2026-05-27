import type { Prisma } from "@prisma/client";
import type { Request } from "express";
import { prisma } from "../../lib/prisma";

export type AuditInput = {
  actorId?: string | null;
  action: string;
  entityType: string;
  entityId?: string | null;
  metadata?: unknown;
  beforeJson?: unknown;
  afterJson?: unknown;
  req?: Pick<Request, "ip" | "headers" | "requestId">;
};

function toJson(value: unknown): Prisma.InputJsonValue | undefined {
  if (value === undefined) return undefined;
  return value as Prisma.InputJsonValue;
}

export async function writeAuditLog(input: AuditInput) {
  return prisma.auditLog.create({
    data: {
      actorId: input.actorId ?? null,
      action: input.action,
      entityType: input.entityType,
      entityId: input.entityId ?? null,
      metadata: toJson(input.metadata),
      beforeJson: toJson(input.beforeJson),
      afterJson: toJson(input.afterJson),
      ipAddress: input.req?.ip,
      userAgent: input.req?.headers["user-agent"],
      requestId: input.req?.requestId,
    },
  });
}
