import { describe, expect, it, vi } from "vitest";

vi.mock("server-only", () => ({}));

const revalidatePath = vi.fn();
const revalidateTag = vi.fn();

vi.mock("next/cache", () => ({
  revalidatePath,
  revalidateTag,
}));

describe("cache revalidation helpers", () => {
  it("returns no-store JSON responses for admin APIs", async () => {
    const { jsonNoStore } = await import("../revalidation");
    const response = jsonNoStore({ ok: true });

    expect(response.headers.get("Cache-Control")).toContain("no-store");
    expect(response.headers.get("Pragma")).toBe("no-cache");
    expect(response.headers.get("Expires")).toBe("0");
  });

  it("deduplicates and applies path, tag, and route-pattern revalidation", async () => {
    const { applyRevalidationTargets } = await import("../revalidation");

    const result = applyRevalidationTargets({
      reason: "test",
      paths: ["/", "/", "/blog/test/"],
      tags: ["blog", "blog"],
      routePatterns: [
        { path: "/blog/[slug]", type: "page" },
        { path: "/blog/[slug]", type: "page" },
      ],
    });

    expect(result.paths).toEqual(["/", "/blog/test/"]);
    expect(result.tags).toEqual(["blog"]);
    expect(result.routePatterns).toEqual([{ path: "/blog/[slug]", type: "page" }]);
    expect(revalidateTag).toHaveBeenCalledWith("blog", { expire: 0 });
    expect(revalidatePath).toHaveBeenCalledWith("/");
    expect(revalidatePath).toHaveBeenCalledWith("/blog/test/");
    expect(revalidatePath).toHaveBeenCalledWith("/blog/[slug]", "page");
  });
});
