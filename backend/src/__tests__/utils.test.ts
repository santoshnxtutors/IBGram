// @vitest-environment node
import { describe, expect, it } from "vitest";
import { errorResponse, successResponse } from "../utils/api-response";
import { getPagination, getTotalPages } from "../utils/pagination";
import { slugify } from "../utils/slug";

describe("backend utilities", () => {
  it("formats typed API success and error responses", () => {
    expect(successResponse({ ok: true }, "req_1")).toEqual({
      success: true,
      data: { ok: true },
      error: null,
      requestId: "req_1",
    });

    expect(errorResponse({ code: "TEST", message: "Failure" }, "req_2")).toEqual({
      success: false,
      data: null,
      error: { code: "TEST", message: "Failure" },
      requestId: "req_2",
    });
  });

  it("creates stable slugs", () => {
    expect(slugify("IB Math AA & AI Tutors in Gurugram")).toBe("ib-math-aa-and-ai-tutors-in-gurugram");
  });

  it("normalizes pagination inputs", () => {
    expect(getPagination({ page: "2", pageSize: "500" }, 100)).toEqual({
      page: 2,
      pageSize: 100,
      skip: 100,
      take: 100,
    });
    expect(getTotalPages(201, 100)).toBe(3);
  });
});
