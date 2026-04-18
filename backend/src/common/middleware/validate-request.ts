import type { RequestHandler } from "express";
import { AnyZodObject } from "zod";

export function validateRequest(schema: {
  body?: AnyZodObject;
  query?: AnyZodObject;
  params?: AnyZodObject;
}): RequestHandler {
  return (req, _res, next) => {
    if (schema.body) {
      req.body = schema.body.parse(req.body);
    }

    if (schema.query) {
      req.query = schema.query.parse(req.query);
    }

    if (schema.params) {
      req.params = schema.params.parse(req.params) as typeof req.params;
    }

    next();
  };
}
