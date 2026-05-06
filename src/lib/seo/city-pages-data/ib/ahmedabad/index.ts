import { buildAdditionalIndianIbCityPage } from "../build-city-page";
import type { AdditionalCityConfig } from "../types";

const config = {
  cityId: "AHM001",
  cityName: "Ahmedabad",
  citySlug: "ahmedabad",
  stateName: "Gujarat",
  latitude: 23.0225,
  longitude: 72.5714,
  priorityScore: 8.7,
  demandScore: 83,
  demandBand: "high",
  contentUniquenessScore: 89,
  academicEnvironment:
    "Ahmedabad's international curriculum market is shaped by entrepreneurial families, globally mobile students and premium residential corridors around SG Highway, Bodakdev, Satellite and Prahlad Nagar.",
  parentContext:
    "Parents usually want IB support that is precise, accountable and connected to university goals, especially for DP Math, science, Economics and English writing.",
  tutoringPracticality:
    "Home tutoring can be feasible across nearby western neighbourhoods, while online tutoring helps families access specialist HL support without depending on cross-city travel.",
  localExamFocus:
    "May 2026 and November 2026 DP exam preparation, with IA topic shaping, Economics essay structure and Math practice plans started early.",
  premiumAreas: [
    {
      name: "SG Highway",
      slug: "sg-highway",
      description:
        "A major premium corridor for IB families who need flexible home, online or hybrid support around school and activity schedules.",
      landmarks: ["Thaltej", "Sola"],
    },
    {
      name: "Satellite",
      slug: "satellite",
      description:
        "Established residential area where parents often ask for structured MYP support and DP Math or science tutoring.",
      landmarks: ["Vastrapur", "Jodhpur"],
    },
    {
      name: "Bodakdev",
      slug: "bodakdev",
      description:
        "High-demand pocket for English, Economics, Math and weekly academic accountability for international school students.",
      landmarks: ["Judges Bungalow Road", "Vastrapur"],
    },
    {
      name: "Prahlad Nagar",
      slug: "prahlad-nagar",
      description:
        "Practical area for families seeking IB DP support with predictable schedules and online backup during exam months.",
      landmarks: ["Corporate Road", "Makarba"],
    },
    {
      name: "Thaltej",
      slug: "thaltej",
      description:
        "Useful for families around western Ahmedabad who need Math AA, Math AI, science and IA support reviewed by availability.",
      landmarks: ["Hebatpur", "Science City Road"],
    },
  ],
  nearbyAreas: ["Vastrapur", "Jodhpur", "Makarba", "Science City", "Sola", "Ambli", "Shela"],
  nearbyCities: [
    { cityName: "Vadodara", citySlug: "vadodara", description: "Vadodara is a nearby Gujarat city for comparing IB tutor availability." },
    { cityName: "Surat", citySlug: "surat", description: "Surat families often compare online and hybrid IB options with Ahmedabad." },
    { cityName: "Jaipur", citySlug: "jaipur", description: "Jaipur is relevant for western India families reviewing city-wise support." },
  ],
  schoolClusters: [
    {
      name: "SG Highway international learner corridor",
      slug: "sg-highway-international-learner-corridor",
      area: "SG Highway, Thaltej and Sola",
      description:
        "Families here often need DP subject tutors who can handle ambitious university goals and structured weekly targets.",
      typicalNeeds: ["Math AA HL", "Physics", "University goals"],
    },
    {
      name: "Satellite and Bodakdev school families",
      slug: "satellite-bodakdev-school-families",
      area: "Satellite, Bodakdev and Vastrapur",
      description:
        "Requests often include MYP foundations, English writing, Economics structure and parent-visible progress tracking.",
      typicalNeeds: ["MYP support", "English A", "Economics"],
    },
    {
      name: "Prahlad Nagar and western Ahmedabad cluster",
      slug: "prahlad-nagar-western-ahmedabad-cluster",
      area: "Prahlad Nagar, Makarba and Shela",
      description:
        "Hybrid tutoring can help students maintain consistency when school, traffic and co-curricular commitments compress the week.",
      typicalNeeds: ["Hybrid tutoring", "Chemistry", "IA planning"],
    },
  ],
  schoolNeeds: [
    "DP Math and science tutoring connected to university-facing subject choices.",
    "Economics and English writing routines that improve structure and evidence.",
    "MYP help with criteria, research, reflection and project planning.",
    "Mode recommendations that account for western Ahmedabad travel patterns.",
  ],
  strongSubjects: ["Math AA HL", "Math AI HL", "Physics", "Economics"],
  moderateSubjects: ["Chemistry", "Biology", "English A"],
  subjectDemand: {
    math: "Math AA HL, Math AA SL, Math AI HL and Math AI SL support is requested in Ahmedabad by students preparing for quantitative, commerce and overseas university pathways.",
    science: "Physics, Chemistry and Biology HL/SL support is reviewed for concept clarity, data handling, practical thinking and timed paper practice.",
    humanities: "Economics, Business Management, Psychology and History tutoring can support diagrams, examples and assessment-ready writing.",
    language: "English A, English B, Hindi, Gujarati, French and other language support is reviewed according to availability.",
  },
  proofThemes: [
    "Ahmedabad parents often ask for tutors who can turn ambitious DP goals into calm weekly work.",
    "Hybrid mode is useful when families want accountability but also need specialist HL support beyond one neighbourhood.",
    "Economics and English students commonly need help making answers more structured, analytical and evidence-led.",
  ],
  averageMatchingTime: "Availability-led after academic and mode review",
} satisfies AdditionalCityConfig;

export const ahmedabadCityPage = buildAdditionalIndianIbCityPage(config);
