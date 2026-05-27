import type { RequestHandler } from "express";
import { successResponse } from "../../utils/api-response";
import { getApiVersion, getHealthStatus } from "./health.service";

export const healthController: RequestHandler = (req, res) => {
  res.json(successResponse(getHealthStatus(), req.requestId ?? ""));
};

export const versionController: RequestHandler = (req, res) => {
  res.json(successResponse(getApiVersion(), req.requestId ?? ""));
};
