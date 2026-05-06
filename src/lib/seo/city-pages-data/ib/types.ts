import type { DemandBand, InventoryStrength, NearbyCityLink } from "../../city-page-types";

export type AdditionalCityArea = {
  name: string;
  slug: string;
  description: string;
  landmarks?: string[];
  pageEnabled?: boolean;
};

export type AdditionalSchoolCluster = {
  name: string;
  slug: string;
  area: string;
  description: string;
  typicalNeeds: string[];
};

export type AdditionalCityConfig = {
  cityId: string;
  cityName: string;
  citySlug: string;
  stateName: string;
  latitude: number;
  longitude: number;
  priorityScore: number;
  demandScore: number;
  demandBand: DemandBand;
  contentUniquenessScore: number;
  academicEnvironment: string;
  parentContext: string;
  tutoringPracticality: string;
  localExamFocus: string;
  premiumAreas: AdditionalCityArea[];
  nearbyAreas: string[];
  nearbyCities: NearbyCityLink[];
  schoolClusters: AdditionalSchoolCluster[];
  schoolNeeds: string[];
  strongSubjects: string[];
  moderateSubjects: string[];
  subjectDemand: {
    math: string;
    science: string;
    humanities: string;
    language: string;
  };
  proofThemes: [string, string, string];
  averageMatchingTime: string;
  lastUpdated?: string;
};

export type SubjectInventoryMap = Partial<Record<string, InventoryStrength>>;
