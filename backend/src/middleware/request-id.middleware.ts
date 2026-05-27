import { randomUUID } from "node:crypto";
import type { RequestHandler } from "express";

declare global {
  // Express uses namespace augmentation for request-scoped IDs.
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      requestId?: string;
    }
  }
}

export const requestIdMiddleware: RequestHandler = (req, res, next) => {
  const requestId = req.header("x-request-id") || randomUUID();
  req.requestId = requestId;
  res.locals.requestId = requestId;
  res.setHeader("x-request-id", requestId);
  next();
};
