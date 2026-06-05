import { describe, expect, it } from "vitest";
import { buildTutorMessageUrl } from "@/lib/tutor-message";

describe("tutor message links", () => {
  it("builds a WhatsApp message for a selected tutor", () => {
    const url = buildTutorMessageUrl({
      name: "Ajay Vatsyayan",
      subject: "Mathematics",
      grade: "IB DP",
    });

    expect(url).toContain("https://wa.me/917439368115?text=");
    expect(decodeURIComponent(url)).toContain("Ajay Vatsyayan");
    expect(decodeURIComponent(url)).toContain("Mathematics (IB DP)");
  });
});
