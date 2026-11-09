import { describe, expect, it, vi } from "vitest";

// The live DB holds exactly these five rows. The `* Allow /` row used to
// REPLACE the public allow-list rather than add to it, so `/_next/static/`
// lost its allow while the `Disallow: /_next/` row stayed — every crawler
// outside NAMED_BOTS (Google-InspectionTool, AdsBot-Google, GoogleOther,
// Googlebot-News...) was told the CSS and JS were off limits and rendered a
// bare page. Longest-match wins, so the allow must always be present.
vi.mock("@/lib/seo/seo-db", () => ({
  getActiveRobotsRules: async () => [
    { userAgent: "*", directive: "Allow", path: "/" },
    { userAgent: "*", directive: "Disallow", path: "/admin/" },
    { userAgent: "*", directive: "Disallow", path: "/admin/api/" },
    { userAgent: "*", directive: "Disallow", path: "/api/" },
    { userAgent: "*", directive: "Disallow", path: "/_next/" },
  ],
}));

const asList = (value: string | string[] | undefined) =>
  value === undefined ? [] : Array.isArray(value) ? value : [value];

describe("robots.txt rules built from DB rows", () => {
  it("keeps the renderer allow-list on every group even when a DB row sets Allow: /", async () => {
    const robots = (await import("@/app/robots")).default;
    const { rules } = await robots();
    const groups = Array.isArray(rules) ? rules : [rules];

    expect(groups.length).toBeGreaterThan(0);
    for (const group of groups) {
      const allow = asList(group.allow);
      // Without these two a crawler cannot fetch the stylesheet, the JS bundle
      // or a blog/tutor image, which is what made pages render blank for bots.
      expect(allow).toContain("/_next/static/");
      expect(allow).toContain("/api/media/");
    }
  });

  it("repeats the private disallows in every named group, since a crawler ignores `*`", async () => {
    const robots = (await import("@/app/robots")).default;
    const { rules } = await robots();
    const groups = Array.isArray(rules) ? rules : [rules];

    for (const group of groups) {
      const disallow = asList(group.disallow);
      expect(disallow).toContain("/admin/");
      expect(disallow).toContain("/login/");
      expect(disallow).toContain("/checkout/");
    }
  });
});
