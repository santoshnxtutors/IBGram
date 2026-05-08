import type { GeneratedFaq } from "@/lib/page-generator/types";
import type { GurgaonLocalPlace } from "./gurgaon.types";

const SAFE_AVAILABILITY = "Availability depends on subject, grade level, schedule, exact location and preferred tutoring mode.";

export function buildGurgaonFaqs(place: GurgaonLocalPlace): GeneratedFaq[] {
  const nearOrIn = place.pageType === "sector" ? "in" : "near";
  const homeAnswer =
    place.pageType === "society"
      ? `Home tutoring may be reviewed for families in and around this residential community, but IB Gram does not claim official association with the society. ${SAFE_AVAILABILITY}`
      : `Home tutoring may be available ${nearOrIn} ${place.name} when tutor travel, timing and subject fit are practical. ${SAFE_AVAILABILITY}`;

  return [
    {
      question: `How can I find IB tutors ${nearOrIn} ${place.name} Gurugram?`,
      answer: `Share the student's programme, subject level, school timeline, current challenge and preferred mode. IB Gram can help parents check tutor availability for this locality based on subject, programme level, schedule and exact location.`,
    },
    {
      question: `Is IB home tutoring available ${nearOrIn} ${place.name}?`,
      answer: homeAnswer,
    },
    {
      question: `Can students ${nearOrIn} ${place.name} get IB Math AA or Math AI support?`,
      answer: `Yes, Math AA and Math AI requests can be reviewed for HL or SL support. The match depends on the student's current topics, assessment deadlines, desired pace and whether home, online or hybrid tutoring is more practical.`,
    },
    {
      question: `Do tutors support IB Physics, Chemistry, Biology and Economics ${nearOrIn} ${place.name}?`,
      answer: `IB Gram can review sciences, Economics, English and other subjects for PYP, MYP and DP students. Less common subject and level combinations may be better handled online if a stronger specialist match is not close by.`,
    },
    {
      question: `Can tutors help with IA, EE, TOK and school assignments?`,
      answer: `Tutors can guide topic clarity, structure, research planning, revision and concept understanding. They should not write assessed work for the student, and academic honesty boundaries remain important.`,
    },
    {
      question: `Which nearby Gurugram locations are useful alternatives to ${place.name}?`,
      answer: `Parents often compare ${[...place.nearbyAreas.slice(0, 3), ...place.nearbySectors.slice(0, 2)].join(", ")} and nearby online options when choosing a practical IB tutor match.`,
    },
    {
      question: `Is IB Gram officially affiliated with ${place.name}, nearby societies or schools?`,
      answer:
        "No. IB Gram is an independent tutoring platform and does not claim official association with a society, RWA, builder, school or community unless specifically stated.",
    },
  ];
}
