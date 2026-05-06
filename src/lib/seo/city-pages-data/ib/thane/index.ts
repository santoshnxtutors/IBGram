import { buildAdditionalIndianIbCityPage } from "../build-city-page";
import type { AdditionalCityConfig } from "../types";

const config = {
  cityId: "THA001",
  cityName: "Thane",
  citySlug: "thane",
  stateName: "Maharashtra",
  latitude: 19.2183,
  longitude: 72.9781,
  priorityScore: 8.4,
  demandScore: 79,
  demandBand: "medium",
  contentUniquenessScore: 89,
  academicEnvironment:
    "Thane's IB tutoring demand is closely linked to Mumbai's premium school ecosystem, with families balancing suburban commutes, society living and access to specialist tutors.",
  parentContext:
    "Parents often compare Thane home tutoring with Mumbai and Navi Mumbai online specialist availability for DP subjects.",
  tutoringPracticality:
    "Home tutoring can be practical inside Hiranandani Estate, Pokhran Road and Ghodbunder Road clusters, while online support widens access to Mumbai-area specialists.",
  localExamFocus:
    "May 2026 and November 2026 DP preparation, with Math, sciences, Economics, English and IA support commonly reviewed.",
  premiumAreas: [
    { name: "Hiranandani Estate", slug: "hiranandani-estate", description: "Premium society-led area where families often request home review, DP Math and hybrid tutoring.", landmarks: ["Patlipada", "Ghodbunder Road"] },
    { name: "Ghodbunder Road", slug: "ghodbunder-road", description: "Long residential corridor where online and hybrid support can reduce travel pressure.", landmarks: ["Kasarvadavali", "Waghbil"] },
    { name: "Pokhran Road", slug: "pokhran-road", description: "Established Thane pocket for MYP, English, Math and structured weekly tutoring.", landmarks: ["Vasant Vihar", "Upvan"] },
    { name: "Vasant Vihar", slug: "vasant-vihar", description: "Useful for families seeking consistent support, parent updates and exam planning.", landmarks: ["Majiwada", "Pokhran Road"] },
    { name: "Majiwada", slug: "majiwada", description: "Central Thane node where hybrid tutoring can connect students to Mumbai and Navi Mumbai specialists.", landmarks: ["Viviana Mall", "Eastern Express Highway"] },
  ],
  nearbyAreas: ["Waghbil", "Kasarvadavali", "Patlipada", "Upvan", "Manpada", "Kolshet", "Eastern Express Highway"],
  nearbyCities: [
    { cityName: "Mumbai", citySlug: "mumbai", description: "Mumbai is the closest major comparison market for specialist IB tutoring." },
    { cityName: "Navi Mumbai", citySlug: "navi-mumbai", description: "Navi Mumbai is relevant for nearby online and hybrid tutor availability." },
    { cityName: "Pune", citySlug: "pune", description: "Pune is useful for Maharashtra families comparing city-wise IB support." },
  ],
  schoolClusters: [
    { name: "Hiranandani Estate learner cluster", slug: "hiranandani-estate-learner-cluster", area: "Hiranandani Estate and Patlipada", description: "Families often need Math, science and hybrid tutoring that works around society schedules.", typicalNeeds: ["Math AA HL", "Physics", "Hybrid tutoring"] },
    { name: "Ghodbunder Road school families", slug: "ghodbunder-road-school-families", area: "Ghodbunder Road and Waghbil", description: "Online support helps students access Mumbai-area specialists without adding long travel.", typicalNeeds: ["Online DP", "Chemistry", "IA planning"] },
    { name: "Pokhran Road and Vasant Vihar corridor", slug: "pokhran-road-vasant-vihar-corridor", area: "Pokhran Road and Vasant Vihar", description: "Requests often include MYP support, English writing and parent-visible progress.", typicalNeeds: ["MYP support", "English A", "Parent updates"] },
  ],
  schoolNeeds: [
    "Mumbai-region tutor matching across Thane, Mumbai and Navi Mumbai.",
    "Society-aware home tutoring review and online specialist access.",
    "DP Math and science support with exam-style practice.",
    "MYP criteria, English writing and IA guidance within academic honesty limits.",
  ],
  strongSubjects: ["Math AA HL", "Physics", "Chemistry"],
  moderateSubjects: ["Math AI HL", "Biology", "Economics", "English A"],
  subjectDemand: {
    math: "Math AA and Math AI support in Thane is reviewed through local and wider Mumbai-region specialist availability.",
    science: "Physics, Chemistry and Biology tutoring focuses on concepts, data handling and timed exam practice.",
    humanities: "Economics, Business Management and Psychology support can strengthen examples, diagrams and essay structure.",
    language: "English A, English B, Hindi, Marathi, French and other languages are reviewed according to availability.",
  },
  proofThemes: [
    "Thane parents often ask for Mumbai-level subject depth without daily cross-city travel.",
    "Hybrid tutoring is useful when home accountability and online specialist support both matter.",
    "DP students commonly need IA planning and exam practice before school deadlines stack up.",
  ],
  averageMatchingTime: "Availability-led after Mumbai-region fit review",
} satisfies AdditionalCityConfig;

export const thaneCityPage = buildAdditionalIndianIbCityPage(config);
