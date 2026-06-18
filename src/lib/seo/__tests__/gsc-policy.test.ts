import { describe, expect, it } from "vitest";
import { auditInternalLinks } from "../internal-link-audit";
import { getRobotsForPublicPage } from "../indexing-policy";
import { canonicalPath, canonicalUrl, getCanonicalTargetForDuplicate } from "../canonical";
import { normalizeJsonLdUrls, stripUndefinedFromJsonLd } from "../schema";
import { dedupeSitemapUrls, shouldIncludeInSitemap } from "../sitemap-policy";

describe("GSC canonical policy", () => {
  it("normalizes internal URLs to the www canonical host", () => {
    expect(canonicalUrl("https://ibgram.com/ib-tutors/gurugram")).toBe("https://www.ibgram.com/ib-tutors/gurugram/");
    expect(canonicalPath("/IB-Tutors/Gurgaon/")).toBe("/ib-tutors/gurugram/");
    expect(getCanonicalTargetForDuplicate("/tutor-pages/example-tutor/")).toBe("/tutor/example-tutor/");
  });
});

describe("GSC indexing policy", () => {
  it("indexes public canonical pages and noindexes private/utility routes", () => {
    expect(getRobotsForPublicPage({ path: "/ib-tutors/gurugram/", status: "published" })).toMatchObject({
      index: true,
      follow: true,
    });
    expect(getRobotsForPublicPage({ path: "/admin/dashboard/" })).toMatchObject({ index: false, follow: true });
    expect(getRobotsForPublicPage({ path: "/tutor-compare/" })).toMatchObject({ index: false, follow: true });
    expect(getRobotsForPublicPage({ path: "/jobs/ib-tutor/apply/" })).toMatchObject({ index: false, follow: true });
  });
});

describe("GSC sitemap policy", () => {
  it("keeps only canonical indexable public URLs in sitemap output", () => {
    const entries = dedupeSitemapUrls([
      { url: "https://ibgram.com/" },
      { url: "https://ibgram.com/admin/" },
      { url: "https://ibgram.com/tutor-compare/" },
      { url: "https://ibgram.com/ib-tutors/gurgaon/" },
      { url: "https://ibgram.com/ib-tutors/gurugram/" },
    ]);

    expect(entries.map((entry) => entry.url)).toEqual(["https://www.ibgram.com/", "https://www.ibgram.com/ib-tutors/gurugram/"]);
    expect(shouldIncludeInSitemap({ url: "https://www.ibgram.com/signup/" })).toBe(false);
  });
});

describe("GSC JSON-LD safety", () => {
  it("strips undefined values and normalizes internal schema URLs", () => {
    const schema = normalizeJsonLdUrls(
      stripUndefinedFromJsonLd({
        "@id": "https://ibgram.com/ib-tutors/gurugram/#webpage",
        url: "https://ibgram.com/ib-tutors/gurugram/",
        logo: "/globe.svg",
        missing: undefined,
      }),
    ) as Record<string, unknown>;

    expect(schema).toEqual({
      "@id": "https://www.ibgram.com/ib-tutors/gurugram/#webpage",
      url: "https://www.ibgram.com/ib-tutors/gurugram/",
      logo: "https://www.ibgram.com/globe.svg",
    });
  });
});

describe("GSC internal link audit", () => {
  it("flags localhost, private routes and redirected aliases", () => {
    const issues = auditInternalLinks([
      "http://localhost:3000/tutors/",
      "/admin/",
      "/ib-tutors/gurgaon/",
      "/ib-tutors/gurugram/",
    ]);

    expect(issues.map((issue) => issue.reason)).toEqual([
      "Public link points to localhost.",
      "Public link points to a private, auth, API, or utility route.",
      "Public link points to a redirected duplicate URL.",
    ]);
  });
});
