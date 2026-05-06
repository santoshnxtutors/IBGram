import { buildAdditionalIndianIbCityPage } from "../build-city-page";
import type { AdditionalCityConfig } from "../types";

const config = {
  cityId: "VTZ001",
  cityName: "Visakhapatnam",
  citySlug: "visakhapatnam",
  stateName: "Andhra Pradesh",
  latitude: 17.6868,
  longitude: 83.2185,
  priorityScore: 7.4,
  demandScore: 66,
  demandBand: "medium",
  contentUniquenessScore: 86,
  academicEnvironment:
    "Visakhapatnam's premium tutoring demand is emerging around families seeking international curriculum support, online subject depth and stronger readiness for overseas or metro university pathways.",
  parentContext:
    "Parents often need an availability-aware plan because exact IB DP specialists may not be consistently local for every subject.",
  tutoringPracticality:
    "Home tutoring can be reviewed in MVP Colony, Seethammadhara and Beach Road pockets, while online support is often stronger for HL subjects and IA guidance.",
  localExamFocus:
    "May 2026 and November 2026 DP support, with Math, science, English, Economics and IA planning reviewed through online and hybrid options.",
  premiumAreas: [
    { name: "MVP Colony", slug: "mvp-colony", description: "Established residential area for English, Math, MYP and home tutoring review.", landmarks: ["Sivajipalem", "Beach Road"] },
    { name: "Rushikonda", slug: "rushikonda", description: "Growing education-side corridor where online and hybrid tutoring can support DP subjects.", landmarks: ["Madhurawada", "Gitam area"] },
    { name: "Seethammadhara", slug: "seethammadhara", description: "Central residential area where families often need structured weekly support and parent updates.", landmarks: ["HB Colony", "Maddilapalem"] },
    { name: "Gajuwaka", slug: "gajuwaka", description: "Large residential and industrial-side catchment where online specialist support can reduce travel pressure.", landmarks: ["NAD", "Kurmannapalem"] },
    { name: "Beach Road", slug: "beach-road", description: "Premium city corridor for English, Economics, study planning and exam revision support.", landmarks: ["RK Beach", "Siripuram"] },
  ],
  nearbyAreas: ["Madhurawada", "Siripuram", "Maddilapalem", "NAD", "Kurmannapalem", "Yendada", "Waltair Uplands"],
  nearbyCities: [
    { cityName: "Hyderabad", citySlug: "hyderabad", description: "Hyderabad offers a larger online specialist comparison for DP support." },
    { cityName: "Bhubaneswar", citySlug: "bhubaneswar", description: "Bhubaneswar is relevant for east-coast international tutoring comparisons." },
    { cityName: "Chennai", citySlug: "chennai", description: "Chennai gives another South India comparison market for IB tutors." },
  ],
  schoolClusters: [
    { name: "MVP Colony and Beach Road learner cluster", slug: "mvp-colony-beach-road-learner-cluster", area: "MVP Colony, Siripuram and Beach Road", description: "Families often need English, MYP and study planning support with clear progress communication.", typicalNeeds: ["English A", "MYP support", "Parent updates"] },
    { name: "Rushikonda education corridor", slug: "rushikonda-education-corridor", area: "Rushikonda, Madhurawada and Yendada", description: "Online and hybrid support can connect students to DP Math and science specialists.", typicalNeeds: ["Math AA HL", "Physics", "Hybrid tutoring"] },
    { name: "Gajuwaka and southern Vizag families", slug: "gajuwaka-southern-vizag-families", area: "Gajuwaka, NAD and Kurmannapalem", description: "Online tutoring is useful where specialist availability and travel time need careful balancing.", typicalNeeds: ["Online DP", "Chemistry", "IA planning"] },
  ],
  schoolNeeds: [
    "Availability-aware online support for DP HL and less common subjects.",
    "Home tutoring reviewed only when travel and subject fit are realistic.",
    "MYP and English support with criteria, evidence and study routines.",
    "Academic honesty boundaries for IA, EE and TOK guidance.",
  ],
  strongSubjects: ["English A", "Math AA HL"],
  moderateSubjects: ["Math AI HL", "Physics", "Chemistry", "Biology", "Economics"],
  subjectDemand: {
    math: "Math AA and Math AI support in Visakhapatnam is reviewed by level and online specialist availability.",
    science: "Physics, Chemistry and Biology tutoring focuses on concepts, data questions and exam application.",
    humanities: "Economics, Business Management and Psychology support can help students structure examples, diagrams and essays.",
    language: "English A, English B, Hindi, Telugu, French and other languages are reviewed according to availability.",
  },
  proofThemes: [
    "Visakhapatnam parents often ask for online specialist support when local DP availability is limited.",
    "Hybrid tutoring can provide accountability while keeping access to the right subject mentor.",
    "MYP students frequently need help turning broad learning into criteria-ready assignments.",
  ],
  averageMatchingTime: "Availability-led after online specialist review",
} satisfies AdditionalCityConfig;

export const visakhapatnamCityPage = buildAdditionalIndianIbCityPage(config);
