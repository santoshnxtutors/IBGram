/**
 * Seed reviews shown when the CMS has none. Kept in a plain module, not in the "use client"
 * ReviewsSection, so server components (the country and city landing pages) import the real
 * array instead of a client-reference proxy.
 */
export type Review = {
  id: number | string;
  name: string;
  location: string;
  rating: number;
  text: string;
};

export const fallbackReviews: Review[] = [
  {
    id: 1,
    name: "Parent of a DP Math AA student",
    location: "Gurugram",
    rating: 5,
    text: "The tutor understood the Math AA HL syllabus and helped us turn revision into a weekly plan. The parent updates were clear and practical.",
  },
  {
    id: 2,
    name: "IGCSE Physics student",
    location: "Dubai",
    rating: 5,
    text: "I liked that sessions started with the topics I was actually stuck on. The practice sets made it easier to ask better questions in class.",
  },
  {
    id: 3,
    name: "Parent of an IB Economics student",
    location: "Online",
    rating: 5,
    text: "IB Gram helped us compare tutor options without pressure. We chose someone who could support essays, case studies and exam timing.",
  },
  {
    id: 4,
    name: "MYP student family",
    location: "Bangalore",
    rating: 5,
    text: "The support felt steady rather than rushed. The tutor focused on foundations first, then moved into school assessments and project work.",
  },
];
