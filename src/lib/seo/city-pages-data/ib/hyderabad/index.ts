import { buildAdditionalIndianIbCityPage } from "../build-city-page";
import type { AdditionalCityConfig } from "../types";

const config = {
  cityId: "HYD001",
  cityName: "Hyderabad",
  citySlug: "hyderabad",
  stateName: "Telangana",
  latitude: 17.385,
  longitude: 78.4867,
  priorityScore: 9.0,
  demandScore: 88,
  demandBand: "high",
  contentUniquenessScore: 90,
  academicEnvironment:
    "Hyderabad's IB demand is shaped by technology families, globally mobile professionals and premium school corridors around Gachibowli, Jubilee Hills, Banjara Hills and the HITEC City belt.",
  parentContext:
    "Parents often want tutoring that can handle high academic ambition without ignoring practical scheduling across western Hyderabad's work, school and activity traffic.",
  tutoringPracticality:
    "Home tutoring is most realistic within close neighbourhood clusters, while online tutoring is often preferred for DP HL subjects, late evening doubts and IA review.",
  localExamFocus:
    "May 2026 and November 2026 exam support, with special attention to DP Math, science practical thinking, Economics essays and IA milestones.",
  premiumAreas: [
    {
      name: "Gachibowli",
      slug: "gachibowli",
      description:
        "A major IB tutoring catchment for families who need specialist DP support around school and technology corridor schedules.",
      landmarks: ["Financial District", "Nanakramguda"],
    },
    {
      name: "Jubilee Hills",
      slug: "jubilee-hills",
      description:
        "Premium residential area where parents often request polished communication, home tutoring feasibility and DP subject depth.",
      landmarks: ["Film Nagar", "Road No. 36"],
    },
    {
      name: "Banjara Hills",
      slug: "banjara-hills",
      description:
        "Central high-demand area for PYP foundations, English support, Economics writing and hybrid IB tutoring plans.",
      landmarks: ["Road No. 12", "Masab Tank"],
    },
    {
      name: "HITEC City",
      slug: "hitec-city",
      description:
        "Busy corridor where online and hybrid IB lessons can reduce commute strain while preserving subject-matched support.",
      landmarks: ["Madhapur", "Cyber Towers"],
    },
    {
      name: "Kondapur",
      slug: "kondapur",
      description:
        "A practical base for families seeking Math AA, Math AI, Physics and Chemistry support near western Hyderabad.",
      landmarks: ["Botanical Garden", "Whitefields"],
    },
  ],
  nearbyAreas: ["Madhapur", "Nanakramguda", "Financial District", "Kokapet", "Manikonda", "Miyapur", "Tellapur"],
  nearbyCities: [
    { cityName: "Bangalore", citySlug: "bangalore", description: "Bangalore is a useful comparison market for DP specialist availability." },
    { cityName: "Chennai", citySlug: "chennai", description: "Chennai families often compare online IB tutor options with Hyderabad." },
    { cityName: "Pune", citySlug: "pune", description: "Pune is relevant for technology-sector families considering online IB support." },
  ],
  schoolClusters: [
    {
      name: "Gachibowli and Financial District school corridor",
      slug: "gachibowli-financial-district-school-corridor",
      area: "Gachibowli, Nanakramguda and Kokapet",
      description:
        "Families in this corridor frequently ask for Math, science and IA support that can fit demanding commute and activity schedules.",
      typicalNeeds: ["Math AI HL", "Chemistry", "IA review"],
    },
    {
      name: "Jubilee Hills premium learner cluster",
      slug: "jubilee-hills-premium-learner-cluster",
      area: "Jubilee Hills and Banjara Hills",
      description:
        "Parent requests often focus on high-touch communication, English writing, Economics essays and structured revision planning.",
      typicalNeeds: ["English", "Economics", "DP planning"],
    },
    {
      name: "Western Hyderabad international school families",
      slug: "western-hyderabad-international-school-families",
      area: "Kondapur, Madhapur and HITEC City",
      description:
        "This cluster often needs flexible online or hybrid support because traffic can make cross-city home lessons unreliable.",
      typicalNeeds: ["Physics", "Math AA HL", "Hybrid tutoring"],
    },
  ],
  schoolNeeds: [
    "DP subject tutoring aligned with school deadlines and mock calendars.",
    "MYP assignment support that explains criteria and reflection clearly.",
    "Online continuity when traffic makes in-person lessons difficult.",
    "Careful IA, EE and TOK guidance within academic honesty limits.",
  ],
  strongSubjects: ["Math AA HL", "Math AI HL", "Physics", "Chemistry"],
  moderateSubjects: ["Biology", "Economics", "English A"],
  subjectDemand: {
    math: "Math AA HL, Math AI HL and SL pathways are common in Hyderabad, especially for STEM, finance, data and business-oriented students.",
    science: "Physics, Chemistry and Biology support is reviewed for HL/SL depth, data response practice and exam-style application.",
    humanities: "Economics, Business Management and Psychology support can help students connect concepts with structured writing and examples.",
    language: "English A, English B, Hindi, French and other language support is reviewed based on tutor availability and school goals.",
  },
  proofThemes: [
    "Hyderabad parents commonly ask for DP Math and science help that can continue even during heavy traffic or activity weeks.",
    "Online specialist sessions are often preferred for HL topics, IA review and short-notice doubts before mocks.",
    "MYP learners often need clearer systems for criteria, evidence, reflection and calendar management.",
  ],
  averageMatchingTime: "Availability-led shortlist after programme and subject review",
} satisfies AdditionalCityConfig;

export const hyderabadCityPage = buildAdditionalIndianIbCityPage(config);
