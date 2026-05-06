import type { TutorLocationPriority } from "@/lib/tutor-data";
import type { TutorMode } from "./tutor-location-matching";

export type AdminTutorLocationDraft = {
  primaryCity: string;
  primaryCitySlug: string;
  availableCities: string[];
  availableAreas: string[];
  availableSectors: string[];
  availableSocieties: string[];
  nearbySchools: string[];
  tutoringModes: TutorMode[];
  travelNotes?: string;
  priority: TutorLocationPriority;
};

export const adminTutorLocationFields = [
  "primaryCity",
  "primaryCitySlug",
  "availableCities",
  "availableAreas",
  "availableSectors",
  "availableSocieties",
  "nearbySchools",
  "tutoringModes",
  "travelNotes",
  "priority",
] as const;

// TODO: Wire these fields into the future tutor-management admin form when that form exists.
// The current admin area only manages SEO page generation, so tutor location editing remains data-model ready.
export function validateAdminTutorLocationDraft(draft: AdminTutorLocationDraft): string[] {
  const errors: string[] = [];

  if (!draft.primaryCity.trim()) errors.push("Primary city is required.");
  if (!draft.primaryCitySlug.trim()) errors.push("Primary city slug is required.");
  if (!draft.availableCities.length) errors.push("At least one service city is required.");
  if (!draft.tutoringModes.length) errors.push("Select at least one tutoring mode.");
  if (!["primary", "secondary", "online_only"].includes(draft.priority)) errors.push("Priority must be primary, secondary or online_only.");

  return errors;
}
