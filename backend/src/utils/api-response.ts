import type { ApiError, ApiErrorResponse, ApiSuccessResponse } from "@ibgram/shared";

export function successResponse<T>(data: T, requestId = ""): ApiSuccessResponse<T> {
  return {
    success: true,
    data,
    error: null,
    requestId,
  };
}

export function errorResponse(error: ApiError, requestId = ""): ApiErrorResponse {
  return {
    success: false,
    data: null,
    error,
    requestId,
  };
}
