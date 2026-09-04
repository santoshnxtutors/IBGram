import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { render } from "@testing-library/react";
import { Markdown } from "../Markdown";

/**
 * Renders the shipped AA HL guide body through the real renderer so a broken
 * table, a stray :::figure::: or a dead relative link fails CI, not production.
 */
const body = readFileSync("src/content/blog/how-to-score-7-ib-math-aa-hl.md", "utf8");

describe("AA HL guide body", () => {
  // Rendered per test: testing-library unmounts between tests.
  const renderBody = () => render(<Markdown content={body} />).container;

  it("renders every table", () => {
    expect(renderBody().querySelectorAll("table")).toHaveLength(4);
  });

  it("renders every figure", () => {
    expect(renderBody().querySelectorAll("figure")).toHaveLength(4);
  });

  it("leaves no unparsed markdown syntax in the output", () => {
    const text = renderBody().textContent ?? "";
    expect(text).not.toContain(":::");
    expect(text).not.toMatch(/\|---/);
    expect(text).not.toMatch(/\]\(\//);
  });

  it("emits a single h1-free heading tree starting at h2", () => {
    const c = renderBody();
    expect(c.querySelectorAll("h1")).toHaveLength(0);
    expect(c.querySelectorAll("h2").length).toBeGreaterThan(10);
  });

  it("points every internal link at a real site route", () => {
    const allowed = [
      "/contact-us/",
      "/tutors/",
      "/programmes/dp/",
      "/ib-tutors/gurugram/math-aa-hl/",
      "/blog/the-gdc-advantage-in-ib-dp-mathematics-aa-hl/",
      "/blog/ib-math-aa-hl-paper-preparation-gurgaon/",
    ];
    const hrefs = [...renderBody().querySelectorAll("a")].map((a) => a.getAttribute("href"));
    expect(hrefs.length).toBeGreaterThan(5);
    for (const h of hrefs) expect(allowed).toContain(h);
  });
});
