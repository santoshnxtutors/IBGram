export function createApiResponse<T>(message: string, data: T, meta: unknown = null) {
  return {
    success: true,
    message,
    data,
    meta,
    errors: null
  };
}
