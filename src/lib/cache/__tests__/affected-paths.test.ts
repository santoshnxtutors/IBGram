import { describe, expect, it } from "vitest";

import {
  getAffectedPathsForBlog,
  getAffectedPathsForFaq,
  getAffectedPathsForHomepage,
  getAffectedPathsForPage,
  getAffectedPathsForTutor,
  normalizeRevalidationPath,
} from "../affected-paths";
import { CACHE_TAGS } from "../cache-tags";

describe("affected cache paths", () => {
  it("normalizes site paths and strips origins", () => {
    expect(normalizeRevalidationPath("https://www.ibgram.com/blog/test?x=1")).toBe("/blog/test/");
    expect(normalizeRevalidationPath("/")).toBe("/");
  });

  it("includes the homepage for homepage updates", () => {
    const targets = getAffectedPathsForHomepage();
    expect(targets.paths).toContain("/");
    expect(targets.tags).toContain(CACHE_TAGS.homepage);
  });

  it("includes public page path and sitemap for page updates", () => {
    const targets = getAffectedPathsForPage({
      canonicalUrl: "https://www.ibgram.com/ib-tutors/gurugram/sectors/sector-56/",
      status: "published",
      indexFlag: "index",
    });
    expect(targets.paths).toContain("/ib-tutors/gurugram/sectors/sector-56/");
    expect(targets.paths).toContain("/ib-tutors/gurugram/");
    expect(targets.paths).toContain("/sitemap.xml");
    expect(targets.tags).toContain(CACHE_TAGS.generatedPages);
  });

  it("includes blog list, detail, home surfaces, and sitemap for blog updates", () => {
    const targets = getAffectedPathsForBlog({ slug: "ib-math-guide" });
    expect(targets.paths).toEqual(expect.arrayContaining(["/blog/", "/blog/ib-math-guide/", "/", "/igcse/", "/sitemap.xml"]));
    expect(targets.tags).toContain(CACHE_TAGS.blog);
  });

  it("includes city and local tutor pages after tutor location changes", () => {
    const targets = getAffectedPathsForTutor({
      id: "t1",
      slug: "sarah-m",
      primaryCitySlug: "Gurugram",
      areas: ["Golf Course Road"],
      sectors: ["Sector 56"],
      societies: ["DLF Phase 5"],
      ibSubjects: ["Math AA"],
      igcseSubjects: ["Physics"],
      ibProgrammes: ["DP"],
      curriculums: ["IB", "IGCSE"],
    });
    expect(targets.paths).toEqual(
      expect.arrayContaining([
        "/ib-tutors/gurugram/",
        "/ib-tutors/gurugram/areas/golf-course-road/",
        "/ib-tutors/gurugram/sectors/sector-56/",
        "/igcse-tutors/gurugram/",
        "/igcse-tutors/gurugram/physics/",
        "/courses/ib/math-aa/",
        "/courses/igcse/physics/",
        "/programmes/dp/",
      ]),
    );
    expect(targets.routePatterns?.length).toBeGreaterThan(0);
  });

  it("includes page-specific FAQ paths", () => {
    const targets = getAffectedPathsForFaq({ pageId: "/ib-tutors/gurugram/", citySlug: "Gurugram" });
    expect(targets.paths).toEqual(expect.arrayContaining(["/", "/ib-tutors/gurugram/", "/igcse-tutors/gurugram/"]));
    expect(targets.tags).toContain(CACHE_TAGS.publicFaqs);
  });
});

