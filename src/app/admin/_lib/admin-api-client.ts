import "server-only";

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

import type { DashboardSummary } from "@/app/admin/_types/dashboard";

const BACKEND_URL = (process.env.BACKEND_URL ?? "").replace(/\/$/, "");
const BACKEND_SESSION_COOKIE = "ibgram_session";

export class AdminApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly code: string,
    public readonly details?: unknown,
  ) {
    super(message);
  }
}

type ApiEnvelope<T> = {
  success: boolean;
  data: T | null;
  error: { code: string; message: string; details?: unknown } | null;
  requestId: string;
};

type AdminApiOptions = {
  method?: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
  body?: unknown;
  redirectOn401?: boolean;
  cache?: RequestCache;
};

async function adminApi<T>(path: string, options: AdminApiOptions = {}): Promise<T> {
  if (!BACKEND_URL) {
    throw new AdminApiError("BACKEND_URL is not configured.", 500, "BACKEND_NOT_CONFIGURED");
  }

  const cookieStore = await cookies();
  const headerStore = await headers();
  const sessionCookie = cookieStore.get(BACKEND_SESSION_COOKIE)?.value;
  const requestId = headerStore.get("x-request-id") ?? "";

  const init: RequestInit = {
    method: options.method ?? "GET",
    headers: {
      "content-type": "application/json",
      "x-request-id": requestId,
      cookie: sessionCookie ? `${BACKEND_SESSION_COOKIE}=${sessionCookie}` : "",
    },
    cache: options.cache ?? "no-store",
  };

  if (options.body !== undefined) init.body = JSON.stringify(options.body);

  let response: Response;
  try {
    response = await fetch(`${BACKEND_URL}${path}`, init);
  } catch (cause) {
    throw new AdminApiError("Backend unreachable.", 503, "BACKEND_UNREACHABLE", { cause: String(cause) });
  }

  const payload = (await response.json().catch(() => null)) as ApiEnvelope<T> | null;

  if (response.status === 401) {
    if (options.redirectOn401 !== false) redirect("/admin/login");
    throw new AdminApiError(payload?.error?.message ?? "Authentication required.", 401, payload?.error?.code ?? "AUTHENTICATION_REQUIRED");
  }

  if (!response.ok || !payload || !payload.success || payload.data === null) {
    throw new AdminApiError(
      payload?.error?.message ?? `Backend request failed (${response.status}).`,
      response.status,
      payload?.error?.code ?? "REQUEST_FAILED",
      payload?.error?.details,
    );
  }

  return payload.data;
}

export type BackendMe = {
  userId: string;
  sessionId: string;
  email: string;
  username: string;
  status: string;
  roles: string[];
  permissions: string[];
};

export async function fetchBackendMe(options: { redirectOn401?: boolean } = {}): Promise<BackendMe | null> {
  try {
    const { user } = await adminApi<{ user: BackendMe }>("/api/auth/me", { redirectOn401: options.redirectOn401 ?? false });
    return user;
  } catch (error) {
    if (error instanceof AdminApiError && error.status === 401) return null;
    throw error;
  }
}

export async function getDashboardSummary(): Promise<DashboardSummary> {
  return adminApi<DashboardSummary>("/api/dashboard/summary");
}

export type BackendAuditLog = {
  id: string;
  action: string;
  entityType: string;
  entityId: string | null;
  metadata: unknown;
  ipAddress: string | null;
  userAgent: string | null;
  requestId: string | null;
  createdAt: string;
  actor: { id: string; email: string; username: string; firstName: string | null; lastName: string | null } | null;
};

export type BackendAuditLogList = {
  items: BackendAuditLog[];
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
};

export async function getAuditLogList(pageSize = 50): Promise<BackendAuditLogList> {
  return adminApi<BackendAuditLogList>(`/api/audit-logs?pageSize=${pageSize}`);
}

export { adminApi };
