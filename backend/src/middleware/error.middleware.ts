import type { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import { errorResponse } from "../utils/api-response";

export class AppError extends Error {
  constructor(
    public readonly statusCode: number,
    public readonly code: string,
    message: string,
    public readonly details?: unknown,
  ) {
    super(message);
  }
}

export const errorMiddleware: ErrorRequestHandler = (err, req, res, _next) => {
  void _next;
  const requestId = req.requestId ?? "";

  if (err instanceof ZodError) {
    res.status(400).json(
      errorResponse(
        {
          code: "VALIDATION_ERROR",
          message: "Request validation failed.",
          details: err.flatten(),
        },
        requestId,
      ),
    );
    return;
  }

  if (err instanceof AppError) {
    res.status(err.statusCode).json(
      errorResponse(
        {
          code: err.code,
          message: err.message,
          details: err.details,
        },
        requestId,
      ),
    );
    return;
  }

  res.status(500).json(
    errorResponse(
      {
        code: "INTERNAL_SERVER_ERROR",
        message: "Something went wrong.",
      },
      requestId,
    ),
  );
};
