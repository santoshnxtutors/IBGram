import type { RequestHandler } from "express";
import { errorResponse } from "../utils/api-response";

export const notFoundMiddleware: RequestHandler = (req, res) => {
  res.status(404).json(
    errorResponse(
      {
        code: "NOT_FOUND",
        message: `Route not found: ${req.method} ${req.originalUrl}`,
      },
      req.requestId ?? "",
    ),
  );
};
