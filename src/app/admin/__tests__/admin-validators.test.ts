import { describe, expect, it } from "vitest";

import {
  adminGeneratorSchema,
  adminInternalLinkSchema,
  adminLoginSchema,
  adminPageEditorSchema,
  adminSettingsSchema,
  adminTutorLocationSchema,
} from "../_validators/admin-validators";

describe("admin validators", () => {
  it("validates login input", () => {
    expect(adminLoginSchema.safeParse({ username: "admin", password: "secret", remember: true }).success).toBe(true);
    expect(adminLoginSchema.safeParse({ username: "", password: "" }).success).toBe(false);
  });

  it("validates generator form input", () => {
    expect(
      adminGeneratorSchema.safeParse({
        pageType: "sector",
        curriculum: "IB",
        cityName: "Gurugram",
        serviceFocus: "IB tutors",
        primaryKeyword: "IB tutors in Gurugram",
      }).success,
    ).toBe(true);
  });

  it("validates internal links and tutor location forms", () => {
    expect(adminInternalLinkSchema.safeParse({ sourcePageId: "a", targetPageId: "b", targetUrl: "/b/", anchorText: "IB tutors" }).success).toBe(true);
    expect(adminTutorLocationSchema.safeParse({ name: "Tutor", primaryCity: "Gurugram", curriculums: "Both", availableCities: ["Gurugram"], teachingModes: ["home"] }).success).toBe(true);
  });

  it("validates settings and page editor payloads", () => {
    expect(adminSettingsSchema.safeParse({ siteName: "IB Gram", productionDomain: "https://ibgram.com", organizationName: "IB Gram", contactEmail: "ibgram24@gmail.com", defaultRobotsBehavior: "index" }).success).toBe(true);
    expect(
      adminPageEditorSchema.safeParse({
        title: "IB Tutors in Gurugram",
        slug: "gurugram",
        url: "/ib-tutors/gurugram/",
        pageType: "ib_city",
        curriculum: "IB",
        metaTitle: "IB Tutors in Gurugram",
        metaDescription: "Find IB tutors in Gurugram for PYP, MYP and DP students with IB Gram.",
        h1: "IB Tutors in Gurugram",
        canonicalUrl: "https://ibgram.com/ib-tutors/gurugram/",
        status: "published",
        indexFlag: "index",
      }).success,
    ).toBe(true);
  });
});
