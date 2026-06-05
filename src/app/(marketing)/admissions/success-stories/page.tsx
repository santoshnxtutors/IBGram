import type { Metadata } from "next";
import SuccessStoriesPage from "../successstories";

export const metadata: Metadata = {
  title: "Success Stories | IB Gram",
  description:
    "Admissions success stories from students IB Gram has supported — their programmes and the universities they joined.",
  alternates: {
    canonical: "/admissions/success-stories",
  },
};

export default function Page() {
  return <SuccessStoriesPage />;
}
