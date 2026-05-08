import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("server-only", () => ({}));

import { AdminDataTable, AdminMetricCard } from "../_components/AdminPrimitives";
import { getPages, getSeoHealth } from "../_lib/admin-data";
import { runPublishChecklist } from "../_lib/publish-checklist";

describe("admin data and dashboard primitives", () => {
  it("loads current project pages for the admin pages table", async () => {
    const pages = await getPages();
    expect(pages.length).toBeGreaterThan(900);
    expect(pages.some((page) => page.url === "/")).toBe(true);
    expect(pages.some((page) => page.pageType === "ib_city")).toBe(true);
    expect(pages.some((page) => page.url === "/ib-tutors/gurugram/math-aa-hl/")).toBe(true);
    expect(pages.some((page) => page.url === "/igcse-tutors/gurugram/physics/")).toBe(true);
    expect(pages.some((page) => page.url === "/courses/ib/mathematics/")).toBe(true);
    expect(pages.some((page) => page.url.startsWith("/tutor-profile/"))).toBe(true);
  });

  it("builds SEO health from page records", async () => {
    const seo = await getSeoHealth();
    expect(seo.indexablePages.length).toBeGreaterThan(0);
    expect(Array.isArray(seo.sitemapExcludedPages)).toBe(true);
  });

  it("blocks publishing thin indexable pages", async () => {
    const page = (await getPages()).find((item) => item.wordCount < 700 && item.indexFlag === "index");
    expect(page).toBeTruthy();
    const checklist = runPublishChecklist(page!);
    expect(checklist.ok).toBe(false);
    expect(checklist.errors.join(" ")).toContain("thin");
  });

  it("renders dashboard metric and data table components", () => {
    render(
      <>
        <AdminMetricCard label="Total pages" value={42} />
        <AdminDataTable columns={["Title"]} rows={[[<span key="row">Homepage</span>]]} />
      </>,
    );
    expect(screen.getByText("Total pages")).toBeInTheDocument();
    expect(screen.getByText("Homepage")).toBeInTheDocument();
  });
});
