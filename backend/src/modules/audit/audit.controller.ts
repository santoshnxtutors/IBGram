import type { RequestHandler } from "express";
import { prisma } from "../../lib/prisma";
import { successResponse } from "../../utils/api-response";
import { asyncHandler } from "../../utils/async-handler";
import { getPagination, getTotalPages } from "../../utils/pagination";

export const listAuditLogsController: RequestHandler = asyncHandler(async (req, res) => {
  const pagination = getPagination(req.query as { page?: string; pageSize?: string }, 100);
  const [logs, totalItems] = await Promise.all([
    prisma.auditLog.findMany({
      orderBy: { createdAt: "desc" },
      skip: pagination.skip,
      take: pagination.take,
      include: {
        actor: {
          select: {
            id: true,
            email: true,
            username: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    }),
    prisma.auditLog.count(),
  ]);

  res.json(
    successResponse(
      {
        items: logs,
        page: pagination.page,
        pageSize: pagination.pageSize,
        totalItems,
        totalPages: getTotalPages(totalItems, pagination.pageSize),
      },
      req.requestId ?? "",
    ),
  );
});
