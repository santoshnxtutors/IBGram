import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare Tutors | IB Gram",
  description: "Side-by-side comparison of selected tutors.",
  robots: { index: false, follow: false },
};

export default function TutorCompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
