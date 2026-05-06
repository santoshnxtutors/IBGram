import { buildAdditionalIndianIbCityPage } from "../build-city-page";
import type { AdditionalCityConfig } from "../types";

const config = {
  cityId: "PUN001",
  cityName: "Pune",
  citySlug: "pune",
  stateName: "Maharashtra",
  latitude: 18.5204,
  longitude: 73.8567,
  priorityScore: 9.1,
  demandScore: 89,
  demandBand: "high",
  contentUniquenessScore: 91,
  academicEnvironment:
    "The city combines established international school families, returning NRI households, technology professionals and university-linked expectations across the eastern, western and north-western corridors.",
  parentContext:
    "Pune families often ask for tutors who can work around school travel from Baner, Kalyani Nagar, Hinjawadi, Viman Nagar and Koregaon Park while still giving DP students serious subject depth.",
  tutoringPracticality:
    "Home tutoring is practical in compact neighbourhood clusters, but cross-city travel can become difficult during peak traffic, so online and hybrid tutoring often gives families better access to specialist DP mentors.",
  localExamFocus:
    "May 2026 and November 2026 DP exam preparation, with early IA planning for students balancing school submissions and competitive university applications.",
  premiumAreas: [
    {
      name: "Koregaon Park",
      slug: "koregaon-park",
      description:
        "A premium central pocket where families often prefer structured home lessons for younger IB students and online specialist support for DP subjects.",
      landmarks: ["North Main Road", "Kalyani Nagar"],
    },
    {
      name: "Kalyani Nagar",
      slug: "kalyani-nagar",
      description:
        "Useful for families who need flexible IB tutoring around school commutes, activities and evening study blocks near the eastern corridor.",
      landmarks: ["Viman Nagar", "Yerawada"],
    },
    {
      name: "Baner",
      slug: "baner",
      description:
        "High-demand area for Math AA, sciences and MYP support, especially for students living near western Pune school routes.",
      landmarks: ["Balewadi", "Aundh"],
    },
    {
      name: "Hinjawadi",
      slug: "hinjawadi",
      description:
        "Technology corridor where hybrid IB tutoring can reduce travel friction while keeping weekly accountability steady.",
      landmarks: ["Wakad", "Rajiv Gandhi Infotech Park"],
    },
    {
      name: "Viman Nagar",
      slug: "viman-nagar",
      description:
        "Practical for families who need online backup, DP revision and home tutoring reviewed against traffic-sensitive schedules.",
      landmarks: ["Airport Road", "Kharadi"],
    },
  ],
  nearbyAreas: ["Aundh", "Balewadi", "Wakad", "Magarpatta", "Hadapsar", "Pashan", "Kharadi"],
  nearbyCities: [
    { cityName: "Mumbai", citySlug: "mumbai", description: "Mumbai is a key comparison city for specialist DP tutor availability." },
    { cityName: "Navi Mumbai", citySlug: "navi-mumbai", description: "Navi Mumbai families often compare online and hybrid IB support with Pune." },
    { cityName: "Thane", citySlug: "thane", description: "Thane is relevant for Maharashtra families reviewing home and online IB options." },
  ],
  schoolClusters: [
    {
      name: "East Pune international school families",
      slug: "east-pune-international-school-families",
      area: "Kalyani Nagar, Viman Nagar and Kharadi",
      description:
        "Families in the eastern corridor often need IB tutoring that can adjust to activity-heavy school weeks and late evening availability.",
      typicalNeeds: ["PYP routines", "MYP criteria", "DP sciences"],
    },
    {
      name: "West Pune IB learner cluster",
      slug: "west-pune-ib-learner-cluster",
      area: "Baner, Balewadi, Aundh and Wakad",
      description:
        "Western Pune requests frequently involve Math AA, Math AI, Physics and Chemistry support for students with demanding school commutes.",
      typicalNeeds: ["Math AA HL", "Physics", "IA planning"],
    },
    {
      name: "Central Pune premium school corridor",
      slug: "central-pune-premium-school-corridor",
      area: "Koregaon Park and Boat Club Road",
      description:
        "Central Pune families often look for polished communication, parent updates and tutoring that respects international school expectations.",
      typicalNeeds: ["English", "Economics", "Study planning"],
    },
  ],
  schoolNeeds: [
    "Help aligning tutoring with school calendars, unit deadlines and mock exam windows.",
    "Support for students moving between inquiry-led classroom tasks and formal DP papers.",
    "Parent updates that explain topic progress without overpromising marks.",
    "Academic honesty boundaries for IA, EE, TOK and school-submitted work.",
  ],
  strongSubjects: ["Math AA HL", "Math AI HL", "Physics", "Chemistry"],
  moderateSubjects: ["Biology", "Economics", "English A"],
  subjectDemand: {
    math: "Math AA HL, Math AA SL, Math AI HL and Math AI SL support is requested across Pune for engineering, economics, data and business pathways.",
    science: "Physics, Chemistry and Biology HL/SL support is reviewed for DP depth, lab-style thinking, data questions and exam technique.",
    humanities: "Economics, Business Management, Psychology and History support may be available based on tutor fit and writing needs.",
    language: "English A, English B, Hindi, French and other languages are reviewed according to availability and school expectations.",
  },
  proofThemes: [
    "Parents often ask for a calmer weekly plan after DP students fall behind in Math or science while juggling long school days.",
    "Hybrid support is common when home tutoring works for accountability but the strongest HL specialist is available online.",
    "MYP students regularly need help with criteria, reflection and evidence, not just topic explanation.",
  ],
  averageMatchingTime: "Availability-led shortlist after academic consultation",
} satisfies AdditionalCityConfig;

export const puneCityPage = buildAdditionalIndianIbCityPage(config);
