import { buildAdditionalIndianIbCityPage } from "../build-city-page";
import type { AdditionalCityConfig } from "../types";

const config = {
  cityId: "KOL001",
  cityName: "Kolkata",
  citySlug: "kolkata",
  stateName: "West Bengal",
  latitude: 22.5726,
  longitude: 88.3639,
  priorityScore: 8.6,
  demandScore: 81,
  demandBand: "high",
  contentUniquenessScore: 89,
  academicEnvironment:
    "Kolkata's international curriculum demand is concentrated across established central neighbourhoods, South Kolkata, Salt Lake and New Town, with strong parent interest in humanities, English and science support.",
  parentContext:
    "Parents often look for tutors who combine academic seriousness with patient explanation, especially when students are moving from strong school discussions to structured IB assessment.",
  tutoringPracticality:
    "Home tutoring can work within South Kolkata or Salt Lake clusters, while online tutoring helps families access DP specialists across Math, science and essay-based subjects.",
  localExamFocus:
    "May 2026 and November 2026 DP revision, with support for English analysis, Economics responses, science application and IA structure.",
  premiumAreas: [
    {
      name: "Ballygunge",
      slug: "ballygunge",
      description:
        "A premium South Kolkata area where families often request English, Economics, MYP and DP support with careful parent updates.",
      landmarks: ["Gariahat", "Park Circus"],
    },
    {
      name: "Alipore",
      slug: "alipore",
      description:
        "Central premium pocket where home tutoring may be practical for younger IB students and online support can extend DP subject choice.",
      landmarks: ["New Alipore", "Tollygunge"],
    },
    {
      name: "Salt Lake",
      slug: "salt-lake",
      description:
        "Useful for families who need structured Math, science and English tutoring near eastern Kolkata residential and school routes.",
      landmarks: ["Sector V", "Karunamoyee"],
    },
    {
      name: "New Town",
      slug: "new-town",
      description:
        "Growing international school catchment where online and hybrid support can reduce travel time while keeping subject quality high.",
      landmarks: ["Rajarhat", "Action Area I"],
    },
    {
      name: "EM Bypass",
      slug: "em-bypass",
      description:
        "A practical corridor for hybrid IB tutoring, especially for students balancing school travel, sports and revision timelines.",
      landmarks: ["Ruby", "Science City"],
    },
  ],
  nearbyAreas: ["Park Street", "Tollygunge", "Rajarhat", "New Alipore", "Gariahat", "Lake Gardens", "Sector V"],
  nearbyCities: [
    { cityName: "Bhubaneswar", citySlug: "bhubaneswar", description: "Bhubaneswar is relevant for eastern India families comparing IB tutoring options." },
    { cityName: "Delhi", citySlug: "delhi", description: "Delhi provides a wider comparison market for online DP specialists." },
    { cityName: "Mumbai", citySlug: "mumbai", description: "Mumbai is useful for families comparing premium online IB support across metros." },
  ],
  schoolClusters: [
    {
      name: "South Kolkata international school families",
      slug: "south-kolkata-international-school-families",
      area: "Ballygunge, Alipore and Tollygunge",
      description:
        "Families in this corridor often need English, humanities and MYP support that turns strong discussion into assessment-ready writing.",
      typicalNeeds: ["English A", "Economics", "MYP writing"],
    },
    {
      name: "Salt Lake and New Town learner cluster",
      slug: "salt-lake-new-town-learner-cluster",
      area: "Salt Lake, New Town and Rajarhat",
      description:
        "Requests often involve DP Math, science and online specialist tutoring because school and activity travel can stretch the week.",
      typicalNeeds: ["Math AI HL", "Chemistry", "Online tutoring"],
    },
    {
      name: "Central Kolkata IB support corridor",
      slug: "central-kolkata-ib-support-corridor",
      area: "Park Street, EM Bypass and central areas",
      description:
        "Parent priorities include steady revision routines, IA planning and help with exam-style answers before mocks.",
      typicalNeeds: ["IA planning", "DP revision", "Parent updates"],
    },
  ],
  schoolNeeds: [
    "English and humanities writing support connected to IB criteria and command terms.",
    "DP Math and science tutoring for students who need more practice than school lessons provide.",
    "MYP assignment planning with evidence, reflection and deadlines.",
    "Safe guidance for IA and EE without tutor-written submissions.",
  ],
  strongSubjects: ["English A", "Economics", "Math AI HL", "Chemistry"],
  moderateSubjects: ["Math AA HL", "Physics", "Biology"],
  subjectDemand: {
    math: "Math AA and Math AI support in Kolkata is reviewed for each student's pathway, school pace and comfort with exam-style problem solving.",
    science: "Physics, Chemistry and Biology HL/SL support is available subject to tutor fit, with focus on concepts, data response and paper practice.",
    humanities: "Economics, History, Psychology and Business Management tutoring can support structured arguments, diagrams, examples and source-based work.",
    language: "English A, English B, Hindi, Bengali, French and other language support is reviewed according to availability.",
  },
  proofThemes: [
    "Kolkata parents often ask for writing support that improves structure without flattening the student's own voice.",
    "Online DP tutoring is helpful when a student needs a specialist beyond the immediate neighbourhood.",
    "MYP learners frequently need help understanding what evidence and reflection should look like in real assignments.",
  ],
  averageMatchingTime: "Availability-led after subject and writing-needs review",
} satisfies AdditionalCityConfig;

export const kolkataCityPage = buildAdditionalIndianIbCityPage(config);
