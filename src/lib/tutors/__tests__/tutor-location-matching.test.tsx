import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TutorProfileLocationSection } from "@/components/tutors/TutorProfileLocationSection";
import { allTutors } from "@/lib/tutor-data";
import { validateAdminTutorLocationDraft } from "@/lib/tutors/admin-tutor-location-fields";
import {
  getTutorsForArea,
  getTutorsForCity,
  getTutorsForGeneratedPage,
  getTutorsForSector,
} from "@/lib/tutors/tutor-location-matching";

describe("tutor location matching", () => {
  it("shows a Gurugram IB tutor on the Gurugram IB city page", () => {
    const result = getTutorsForCity("gurugram", { curriculum: "IB", includeOnlineFallback: false, tutors: allTutors });

    expect(result.tutors.some((tutor) => tutor.primaryCitySlug === "gurugram" && tutor.curriculums.includes("IB"))).toBe(true);
  });

  it("shows a Sector 56 tutor on the Gurugram Sector 56 page", () => {
    const result = getTutorsForSector("gurugram", "sector-56", { curriculum: "IB", includeOnlineFallback: false, tutors: allTutors });

    expect(result.matchSummary.exactLocalMatches).toBeGreaterThan(0);
    expect(result.tutors[0].availableSectorSlugs).toContain("sector-56");
  });

  it("shows a Golf Course Road tutor on the Gurugram area page", () => {
    const result = getTutorsForArea("gurugram", "golf-course-road", { curriculum: "IB", includeOnlineFallback: false, tutors: allTutors });

    expect(result.matchSummary.exactLocalMatches).toBeGreaterThan(0);
    expect(result.tutors[0].availableAreaSlugs).toContain("golf-course-road");
  });

  it("does not show a Delhi-only tutor on a Gurugram local page unless online fallback is allowed", () => {
    const withoutFallback = getTutorsForSector("gurugram", "sector-56", {
      curriculum: "IB",
      includeOnlineFallback: false,
      tutors: allTutors,
    });
    const withFallback = getTutorsForSector("gurugram", "sector-56", {
      curriculum: "IB",
      includeOnlineFallback: true,
      tutors: allTutors,
    });

    expect(withoutFallback.tutors.map((tutor) => tutor.id)).not.toContain(3);
    expect(withFallback.tutors.map((tutor) => tutor.id)).toContain(3);
  });

  it("keeps IB-only tutors off IGCSE pages", () => {
    const result = getTutorsForCity("gurugram", { curriculum: "IGCSE", tutors: allTutors });

    expect(result.tutors.map((tutor) => tutor.id)).not.toContain(1);
  });

  it("keeps IGCSE-only tutors off IB pages", () => {
    const result = getTutorsForCity("gurugram", { curriculum: "IB", tutors: allTutors });

    expect(result.tutors.map((tutor) => tutor.id)).not.toContain(2);
  });

  it("allows tutors supporting both curricula to appear on IB and IGCSE pages", () => {
    const ibResult = getTutorsForCity("gurugram", { curriculum: "IB", tutors: allTutors });
    const igcseResult = getTutorsForCity("gurugram", { curriculum: "IGCSE", tutors: allTutors });

    expect(ibResult.tutors.map((tutor) => tutor.id)).toContain(5);
    expect(igcseResult.tutors.map((tutor) => tutor.id)).toContain(5);
  });

  it("ranks exact local matches above city-level matches", () => {
    const result = getTutorsForSector("gurugram", "sector-56", { curriculum: "IB", includeOnlineFallback: false, tutors: allTutors });
    const exactIndex = result.tutors.findIndex((tutor) => tutor.availableSectorSlugs.includes("sector-56"));
    const cityOnlyIndex = result.tutors.findIndex((tutor) => tutor.id === 4);

    expect(exactIndex).toBeGreaterThanOrEqual(0);
    expect(cityOnlyIndex).toBeGreaterThan(exactIndex);
  });

  it("places online fallback after local and city matches", () => {
    const result = getTutorsForSector("gurugram", "sector-56", { curriculum: "IB", includeOnlineFallback: true, tutors: allTutors });
    const onlineFallbackIndex = result.tutors.findIndex((tutor) => tutor.id === 3);
    const firstCityOrLocalIndex = result.tutors.findIndex((tutor) => tutor.primaryCitySlug === "gurugram");

    expect(onlineFallbackIndex).toBeGreaterThan(firstCityOrLocalIndex);
  });

  it("returns a safe empty result for an unknown locality when fallbacks are disabled", () => {
    const result = getTutorsForArea("gurugram", "unknown-lane", {
      curriculum: "IB",
      includeOnlineFallback: false,
      allowCityFallbackForLocal: false,
      tutors: allTutors,
    });

    expect(result.matchSummary.totalMatches).toBe(0);
  });

  it("filters by IB subject and level slug", () => {
    const result = getTutorsForGeneratedPage({
      curriculum: "IB",
      pageType: "subject",
      citySlug: "gurugram",
      subjectSlug: "math-aa-hl",
    }, { tutors: allTutors });

    expect(result.tutors.length).toBeGreaterThan(0);
    expect(result.tutors[0].ibSubjects.some((subject) => subject.includes("Math AA"))).toBe(true);
  });
});

describe("tutor location display", () => {
  it("renders service locations on the tutor profile section", () => {
    const tutor = allTutors.find((item) => item.id === 1);
    expect(tutor).toBeDefined();

    render(<TutorProfileLocationSection tutor={tutor!} />);

    expect(screen.getByText("Service Locations")).toBeInTheDocument();
    expect(screen.getByText("Gurugram, Haryana")).toBeInTheDocument();
    expect(screen.getAllByText(/Golf Course Road/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Sector 56/).length).toBeGreaterThan(0);
  });

  it("validates admin tutor location fields for future tutor management", () => {
    const errors = validateAdminTutorLocationDraft({
      primaryCity: "",
      primaryCitySlug: "",
      availableCities: [],
      availableAreas: [],
      availableSectors: [],
      availableSocieties: [],
      nearbySchools: [],
      tutoringModes: [],
      priority: "primary",
    });

    expect(errors).toEqual(
      expect.arrayContaining([
        "Primary city is required.",
        "Primary city slug is required.",
        "At least one service city is required.",
        "Select at least one tutoring mode.",
      ]),
    );
  });
});
