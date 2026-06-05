import { beforeEach, describe, expect, it } from "vitest";
import { getSafeReturnTo, getStoredReturnTo, rememberReturnTo, storeLegacyReturnToFromUrl } from "@/lib/return-to";

describe("returnTo URLs", () => {
  beforeEach(() => {
    window.sessionStorage.clear();
    window.history.replaceState(null, "", "/");
  });

  it("stores back targets without adding them to the visible URL", () => {
    rememberReturnTo("tutor-compare", "/tutors/");

    expect(getStoredReturnTo("tutor-compare")).toBe("/tutors/");
    expect(window.location.href).not.toContain("returnTo");
  });

  it("cleans legacy returnTo query params while preserving readable ids", () => {
    window.history.replaceState(null, "", "/tutor-compare?ids=1,2&returnTo=/tutors/");

    expect(storeLegacyReturnToFromUrl("tutor-compare", ["/tutor-compare"])).toBe("/tutors/");
    expect(getStoredReturnTo("tutor-compare")).toBe("/tutors/");
    expect(`${window.location.pathname}${window.location.search}`).toBe("/tutor-compare?ids=1,2");
  });

  it("accepts decoded or legacy encoded safe internal paths", () => {
    expect(getSafeReturnTo("/tutors/")).toBe("/tutors/");
    expect(getSafeReturnTo("%2Ftutors%2F")).toBe("/tutors/");
  });

  it("rejects external and blocked return paths", () => {
    expect(getSafeReturnTo("//example.com")).toBeUndefined();
    expect(getSafeReturnTo("https://example.com/tutors")).toBeUndefined();
    expect(getSafeReturnTo("/tutor-profile/1", ["/tutor-profile"])).toBeUndefined();
  });
});
