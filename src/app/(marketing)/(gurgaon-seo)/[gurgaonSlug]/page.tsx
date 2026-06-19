import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GurgaonSeoLanding } from "@/components/gurgaon-seo/GurgaonSeoLanding";
import {
  buildGurgaonSeoMetadata,
  getAllGurgaonSeoPages,
  getGurgaonSeoPage,
  getGurgaonSeoStaticParams,
} from "@/lib/gurgaon-seo";

type PageProps = { params: Promise<{ gurgaonSlug: string }> };

// Only the 200 known slugs render; everything else 404s.
export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return getGurgaonSeoStaticParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { gurgaonSlug } = await params;
  const page = getGurgaonSeoPage(gurgaonSlug);
  if (!page) return {};
  return buildGurgaonSeoMetadata(page);
}

export default async function GurgaonSeoLandingPage({ params }: PageProps) {
  const { gurgaonSlug } = await params;
  const page = getGurgaonSeoPage(gurgaonSlug);
  if (!page) notFound();

  // Related links: other pages in the same locality (different subject/board), capped at 4.
  const related = getAllGurgaonSeoPages()
    .filter((candidate) => candidate.locality === page.locality && candidate.slug !== page.slug)
    .slice(0, 4)
    .map((candidate) => ({ label: candidate.h1, href: candidate.path }));

  return <GurgaonSeoLanding page={page} related={related} />;
}
