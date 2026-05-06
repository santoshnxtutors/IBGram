import { buildAdditionalIndianIbCityPage } from "../build-city-page";
import type { AdditionalCityConfig } from "../types";

const config = {
  cityId: "DED001",
  cityName: "Dehradun",
  citySlug: "dehradun",
  stateName: "Uttarakhand",
  latitude: 30.3165,
  longitude: 78.0322,
  priorityScore: 8.0,
  demandScore: 73,
  demandBand: "medium",
  contentUniquenessScore: 88,
  academicEnvironment:
    "Dehradun's international tutoring demand is shaped by boarding-school culture, premium day schools and families who often need online support aligned with school calendars.",
  parentContext:
    "Parents may be local, outstation or overseas, so tutor communication, progress visibility and schedule coordination matter as much as subject knowledge.",
  tutoringPracticality:
    "Home tutoring can be reviewed in central residential pockets, while online support is especially useful for boarding students, DP HL subjects and vacation revision.",
  localExamFocus:
    "May 2026 and November 2026 DP exam support, with vacation catch-up, IA planning, English writing and Math practice as common priorities.",
  premiumAreas: [
    { name: "Rajpur Road", slug: "rajpur-road", description: "Premium central corridor where families often request English, humanities and structured DP support.", landmarks: ["Jakhan", "Clock Tower"] },
    { name: "Dalanwala", slug: "dalanwala", description: "Established residential area for home tutoring review, PYP routines and MYP support.", landmarks: ["EC Road", "Race Course"] },
    { name: "Mussoorie Road", slug: "mussoorie-road", description: "School-side corridor where online and hybrid support can help with boarding-school schedules.", landmarks: ["Malsi", "Diversion"] },
    { name: "Vasant Vihar", slug: "vasant-vihar", description: "Residential area where families often need Math, science and exam-revision tutoring.", landmarks: ["Ballupur", "Indra Nagar"] },
    { name: "Prem Nagar", slug: "prem-nagar", description: "Western Dehradun catchment where online support can widen access to DP specialists.", landmarks: ["Sudhowala", "Nanda Ki Chowki"] },
  ],
  nearbyAreas: ["Jakhan", "Malsi", "Ballupur", "Race Course", "EC Road", "Clement Town", "Sahastradhara Road"],
  nearbyCities: [
    { cityName: "Chandigarh", citySlug: "chandigarh", description: "Chandigarh is relevant for North India families comparing international tutoring support." },
    { cityName: "Ludhiana", citySlug: "ludhiana", description: "Ludhiana is useful for Punjab and North India online tutoring comparisons." },
    { cityName: "Delhi", citySlug: "delhi", description: "Delhi provides a broader online DP specialist pool." },
  ],
  schoolClusters: [
    { name: "Rajpur Road premium school corridor", slug: "rajpur-road-premium-school-corridor", area: "Rajpur Road, Jakhan and Mussoorie Road", description: "Families often need boarding-calendar-aware tutoring, English support and DP planning.", typicalNeeds: ["English A", "DP planning", "Vacation revision"] },
    { name: "Central Dehradun learner cluster", slug: "central-dehradun-learner-cluster", area: "Dalanwala, EC Road and Race Course", description: "Requests often involve PYP routines, MYP criteria and parent-visible progress for local families.", typicalNeeds: ["PYP routines", "MYP criteria", "Parent updates"] },
    { name: "West Dehradun academic routes", slug: "west-dehradun-academic-routes", area: "Vasant Vihar and Prem Nagar", description: "Online support helps students access Math, science and IA specialists without extra travel.", typicalNeeds: ["Math AA HL", "Chemistry", "Online DP"] },
  ],
  schoolNeeds: [
    "Boarding-school aware scheduling for term time, holidays and exam breaks.",
    "Outstation parent updates that make progress visible.",
    "DP Math and science support through online specialists where needed.",
    "English, IA and EE guidance within academic honesty boundaries.",
  ],
  strongSubjects: ["English A", "Math AA HL", "Chemistry"],
  moderateSubjects: ["Math AI HL", "Physics", "Biology", "Economics"],
  subjectDemand: {
    math: "Math AA and Math AI support in Dehradun is reviewed around school calendars, boarding schedules and DP level.",
    science: "Physics, Chemistry and Biology tutoring focuses on concepts, data response and exam application.",
    humanities: "Economics, Business Management, Psychology and History support can help with structured arguments and examples.",
    language: "English A, English B, Hindi, French and other languages are reviewed according to availability.",
  },
  proofThemes: [
    "Dehradun families often need tutoring that can work around boarding-school calendars and vacation study windows.",
    "Online DP support is useful when students need continuity while away from home or school.",
    "English and humanities learners frequently need feedback that improves structure while preserving independent work.",
  ],
  averageMatchingTime: "Availability-led after term schedule review",
} satisfies AdditionalCityConfig;

export const dehradunCityPage = buildAdditionalIndianIbCityPage(config);
