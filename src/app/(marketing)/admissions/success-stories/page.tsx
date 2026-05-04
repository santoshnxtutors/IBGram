import type { Metadata } from "next";
import SuccessStoriesPage from "../successstories";

export const metadata: Metadata = {
  title: "Success Stories | IB Gram",
  description:
    "Animated, image-free admissions success stories that highlight university outcomes, student journeys, and family guidance.",
  alternates: {
    canonical: "/admissions/success-stories",
  },
};

export default function Page() {
  return <SuccessStoriesPage />;
}
