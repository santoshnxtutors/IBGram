export type LocationSummary = {
  id: string;
  name: string;
  slug: string;
  parentId?: string | null;
};

export type TutorLocationSummary = {
  id: string;
  tutorId: string;
  cityName: string;
  citySlug: string;
  areaName?: string | null;
  areaSlug?: string | null;
  sectorName?: string | null;
  sectorSlug?: string | null;
  societyName?: string | null;
  societySlug?: string | null;
  nearbySchoolName?: string | null;
  nearbySchoolSlug?: string | null;
  homeTutoringAvailable: boolean;
  onlineTutoringAvailable: boolean;
  hybridTutoringAvailable: boolean;
  serviceRadiusKm?: number | null;
  priority: number;
  isActive: boolean;
};
