import { describe, expect, it } from "vitest";
import { canonicalPath } from "../canonical";
import { getGeneratedIndexingDecision, isGeneratedPageThin } from "../indexing";
import { getRobotsForPublicPage } from "../indexing-policy";
import type { GeneratedSeoPage } from "@/lib/page-generator/types";

// A page weak enough that every old quality gate would have fired.
const weakPage = {
  status: "published",
  indexFlag: "index",
  canonicalUrl: "/ib-tutors/chennai/physics/",
  canonicalTarget: null,
  quality: { seoScore: 41, wordCount: 220, duplicateRisk: "high", recommendedIndexFlag: "noindex" },
} as unknown as GeneratedSeoPage;

describe("indexing gates no longer emit noindex on quality", () => {
  it("indexes a published page the quality checker rates poorly", () => {
    const decision = getGeneratedIndexingDecision(weakPage);
    expect(decision.index).toBe(true);
    expect(decision.robotsTag).toBe("index, follow");
  });

  it("still honours an explicit operator noindex flag", () => {
    const flagged = { ...weakPage, indexFlag: "noindex" } as GeneratedSeoPage;
    expect(getGeneratedIndexingDecision(flagged).index).toBe(false);
  });

  it("keeps the quality predicate available for DB-vs-static shadowing", () => {
    expect(isGeneratedPageThin(weakPage)).toBe(true);
    const strong = { ...weakPage, quality: { ...weakPage.quality, seoScore: 88, duplicateRisk: "low", recommendedIndexFlag: "index" } } as GeneratedSeoPage;
    expect(isGeneratedPageThin(strong)).toBe(false);
  });

  it("indexes public pages and keeps private routes out", () => {
    expect(getRobotsForPublicPage({ path: "/join-as-tutor/", status: "published" }).index).toBe(true);
    expect(getRobotsForPublicPage({ path: "/courses/ib/biology/", status: "published" }).index).toBe(true);
    expect(getRobotsForPublicPage({ path: "/admin/dashboard/" }).index).toBe(false);
    expect(getRobotsForPublicPage({ path: "/login/" }).index).toBe(false);
  });
});

describe("duplicate URLs fold onto one canonical", () => {
  const cases: Array<[string, string]> = [
    ["/courses/igcse/myp/", "/courses/ib/myp/"],
    ["/courses/igcse/pyp/", "/courses/ib/pyp/"],
    ["/courses/ib/individuals/", "/courses/ib/individuals-and-societies/"],
    ["/courses/igcse/individuals/", "/courses/igcse/individuals-and-societies/"],
    ["/blog/how-to-score-a-7-in-ib-maths-aa-hl-step-by-step-strategy/", "/blog/how-to-score-7-ib-math-aa-hl/"],
    ["/ib-tutors/gurgaon/", "/ib-tutors/gurugram/"],
    ["/courses/ib/biology/", "/courses/ib/biology/"],
  ];
  it.each(cases)("%s -> %s", (input, expected) => {
    expect(canonicalPath(input)).toBe(expected);
  });
});
