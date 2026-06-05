import { describe, expect, it } from "vitest";
import { buildTutorComparePath, parseTutorCompareIds } from "@/lib/tutor-compare-url";

describe("tutor compare URLs", () => {
  it("builds clean comparison paths", () => {
    expect(buildTutorComparePath([1, 2])).toBe("/tutor-compare/1-vs-2");
    expect(buildTutorComparePath(["sarah", "james"])).toBe("/tutor-compare/sarah-vs-james");
  });

  it("parses clean and legacy comparison id formats", () => {
    expect(parseTutorCompareIds("1-vs-2")).toEqual(["1", "2"]);
    expect(parseTutorCompareIds("1,2")).toEqual(["1", "2"]);
  });
});
