import { buildAdditionalIndianIbCityPage } from "../build-city-page";
import type { AdditionalCityConfig } from "../types";

const config = {
  cityId: "GZB001",
  cityName: "Ghaziabad",
  citySlug: "ghaziabad",
  stateName: "Uttar Pradesh",
  latitude: 28.6692,
  longitude: 77.4538,
  priorityScore: 8.0,
  demandScore: 73,
  demandBand: "medium",
  contentUniquenessScore: 88,
  academicEnvironment:
    "Ghaziabad's IB and international tutoring demand is tied to the wider NCR school ecosystem, especially Indirapuram, Vaishali, Raj Nagar Extension and Noida-side routes.",
  parentContext:
    "Parents often compare Ghaziabad home tutoring with Delhi, Noida and Greater Noida online availability for stronger DP subject matching.",
  tutoringPracticality:
    "Home tutoring can be feasible in Indirapuram and Vaishali clusters, while online support often gives better access to DP HL and IA specialists.",
  localExamFocus:
    "May 2026 and November 2026 DP support, with Math, science, Economics, English and IA planning as common parent requests.",
  premiumAreas: [
    { name: "Indirapuram", slug: "indirapuram", description: "High-demand NCR residential area for Math, science, MYP and hybrid IB tutoring.", landmarks: ["Shipra Mall", "Ahinsa Khand"] },
    { name: "Vaishali", slug: "vaishali", description: "Practical area for home tutoring review and online specialist support near Delhi and Noida routes.", landmarks: ["Sector 4", "Kaushambi"] },
    { name: "Raj Nagar Extension", slug: "raj-nagar-extension", description: "Growing residential corridor where online and hybrid support can reduce travel pressure.", landmarks: ["NH 58", "Sanjay Nagar"] },
    { name: "Crossings Republik", slug: "crossings-republik", description: "Useful for families comparing Ghaziabad, Noida and Greater Noida tutoring options.", landmarks: ["NH 24", "Vijay Nagar"] },
    { name: "Kaushambi", slug: "kaushambi", description: "Delhi-border pocket where hybrid IB tutoring can connect students to a wider NCR tutor pool.", landmarks: ["Anand Vihar", "Vaishali"] },
  ],
  nearbyAreas: ["Ahinsa Khand", "Vasundhara", "Sahibabad", "Sanjay Nagar", "NH 24", "Vijay Nagar", "Kavi Nagar"],
  nearbyCities: [
    { cityName: "Delhi", citySlug: "delhi", description: "Delhi is a core nearby city for NCR IB specialist support." },
    { cityName: "Noida", citySlug: "noida", description: "Noida is highly relevant for Ghaziabad families comparing tutoring options." },
    { cityName: "Greater Noida", citySlug: "greater-noida", description: "Greater Noida is useful for nearby area and school corridor comparisons." },
  ],
  schoolClusters: [
    { name: "Indirapuram and Vaishali learner cluster", slug: "indirapuram-vaishali-learner-cluster", area: "Indirapuram, Vaishali and Kaushambi", description: "Families often need NCR-aware Math, science and hybrid tutoring that works around school travel.", typicalNeeds: ["Math AA HL", "Physics", "Hybrid tutoring"] },
    { name: "Raj Nagar Extension school families", slug: "raj-nagar-extension-school-families", area: "Raj Nagar Extension and Sanjay Nagar", description: "Online support can help students access stronger DP specialists without long cross-city travel.", typicalNeeds: ["Online DP", "Chemistry", "IA planning"] },
    { name: "Crossings Republik and NH 24 corridor", slug: "crossings-republik-nh-24-corridor", area: "Crossings Republik and NH 24", description: "Requests often include MYP foundations, English support and exam planning.", typicalNeeds: ["MYP support", "English A", "Revision"] },
  ],
  schoolNeeds: [
    "NCR-aware internal linking and tutor matching across Delhi, Noida and Greater Noida.",
    "Home tutoring reviewed by traffic, timing and subject fit.",
    "DP HL support through online specialists where local availability is limited.",
    "MYP criteria, English writing and parent-visible progress routines.",
  ],
  strongSubjects: ["Math AA HL", "Physics", "English A"],
  moderateSubjects: ["Math AI HL", "Chemistry", "Biology", "Economics"],
  subjectDemand: {
    math: "Math AA and Math AI support in Ghaziabad is reviewed through local and wider NCR availability.",
    science: "Physics, Chemistry and Biology tutoring focuses on concept depth, data interpretation and timed paper practice.",
    humanities: "Economics, Business Management and Psychology support can strengthen diagrams, examples and answer structure.",
    language: "English A, English B, Hindi, French and other languages are reviewed according to availability.",
  },
  proofThemes: [
    "Ghaziabad parents often compare local home tutoring with Noida or Delhi online specialist support.",
    "Hybrid mode is useful for students who need accountability and a stronger DP subject match.",
    "MYP students commonly need help translating school tasks into criteria-ready submissions.",
  ],
  averageMatchingTime: "Availability-led after NCR route and mode review",
} satisfies AdditionalCityConfig;

export const ghaziabadCityPage = buildAdditionalIndianIbCityPage(config);
