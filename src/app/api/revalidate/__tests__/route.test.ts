import type { NextRequest } from "next/server";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("server-only", () => ({}));

const revalidatePath = vi.fn();
const revalidateTag = vi.fn();

vi.mock("next/cache", () => ({
  revalidatePath,
  revalidateTag,
}));

vi.mock("@/app/admin/_lib/admin-auth", () => ({
  requireAdminRequest: () => Response.json({ error: "Admin session required." }, { status: 401 }),
}));

describe("POST /api/revalidate", () => {
  const previousSecret = process.env.REVALIDATION_SECRET;

  beforeEach(() => {
    process.env.REVALIDATION_SECRET = "test-secret";
    revalidatePath.mockClear();
    revalidateTag.mockClear();
  });

  afterEach(() => {
    process.env.REVALIDATION_SECRET = previousSecret;
  });

  async function post(body: unknown, secret?: string) {
    const { POST } = await import("../route");
    return POST(
      new Request("http://localhost:3000/api/revalidate", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          ...(secret ? { "x-revalidation-secret": secret } : {}),
        },
        body: JSON.stringify(body),
      }) as unknown as NextRequest,
    );
  }

  it("rejects requests without a valid secret", async () => {
    const response = await post({ path: "/" });
    expect(response.status).toBe(401);
    expect(revalidatePath).not.toHaveBeenCalled();
  });

  it("revalidates allowed paths and tags", async () => {
    const response = await post({ path: "/blog/test", tag: "blog" }, "test-secret");
    const payload = await response.json();
    expect(response.status).toBe(200);
    expect(payload.ok).toBe(true);
    expect(revalidatePath).toHaveBeenCalledWith("/blog/test/");
    expect(revalidateTag).toHaveBeenCalledWith("blog", { expire: 0 });
    expect(response.headers.get("Cache-Control")).toContain("no-store");
  });

  it("rejects unknown tags", async () => {
    const response = await post({ tag: "not-allowed" }, "test-secret");
    expect(response.status).toBe(400);
    expect(revalidateTag).not.toHaveBeenCalled();
  });
});

