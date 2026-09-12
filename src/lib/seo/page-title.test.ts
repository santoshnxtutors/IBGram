import { describe, expect, it } from "vitest";
import { resolvePageTitle } from "./page-title";

describe("resolvePageTitle", () => {
  it("leaves unbranded titles for the layout template to brand", () => {
    expect(resolvePageTitle("IB Tutor in Gurgaon")).toBe("IB Tutor in Gurgaon");
  });

  it("rewrites the old spaced brand and suppresses the template", () => {
    expect(resolvePageTitle("IB Maths Tutor in Gurgaon | IB Gram")).toEqual({ absolute: "IB Maths Tutor in Gurgaon | IBGram" });
  });

  it("keeps titles that already end in IBGram", () => {
    expect(resolvePageTitle("IGCSE Tutors | IBGram ")).toEqual({ absolute: "IGCSE Tutors | IBGram" });
  });
});
