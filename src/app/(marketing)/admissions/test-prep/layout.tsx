import type { Metadata } from "next";

// page.tsx is a client component, so its metadata lives here. Without it the
// page inherited the homepage title, description and canonical.
export const metadata: Metadata = {
  title: { absolute: "SAT, GRE, GMAT, IELTS & TOEFL Test Prep Tutors | IBGram" },
  description:
    "1:1 test prep tutoring for SAT, GRE, GMAT, IELTS, TOEFL, ACT, AP, PTE and more, with diagnostic mocks, targeted drills and score tracking.",
  alternates: { canonical: "/admissions/test-prep" },
};

export default function TestPrepLayout({ children }: { children: React.ReactNode }) {
  return children;
}
