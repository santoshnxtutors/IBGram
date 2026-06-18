import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Tutor } from "@/lib/tutor-data";
import { getPublicTutorsFromDb } from "@/lib/cms/public-tutors";
import { getTutorReviewsForPublic } from "@/lib/cms/public-reviews";
import { getTutorReachPagesForTutor } from "@/lib/cms/tutor-reach";
import { JsonLd } from "@/components/seo-city/JsonLd";
import { absoluteUrl } from "@/lib/seo/slug-utils";
import TutorProfileClient from "./TutorProfileClient";

export const dynamic = "force-dynamic";
export const revalidate = 300;

type TutorProfileProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: TutorProfileProps): Promise<Metadata> {
  const { id } = await params;
  const tutor = await findPublicTutor(decodeURIComponent(id));

  if (!tutor) {
    return { title: "Tutor not found | IB Gram", robots: { index: false, follow: false } };
  }

  const profileUrl = getTutorProfileUrl(tutor);
  const description = getTutorDescription(tutor);
  const image = tutor.image ? absoluteUrl(tutor.image) : undefined;

  return {
    title: `${tutor.name} | ${tutor.subject} Tutor | IB Gram`,
    description,
    alternates: { canonical: profileUrl },
    robots: { index: true, follow: true },
    openGraph: {
      type: "profile",
      url: profileUrl,
      title: `${tutor.name} | IB Gram Tutor`,
      description,
      siteName: "IB Gram",
      ...(image ? { images: [{ url: image, alt: tutor.name }] } : {}),
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title: `${tutor.name} | IB Gram Tutor`,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}

export default async function TutorProfilePage({ params }: TutorProfileProps) {
  const { id } = await params;
  const tutor = await findPublicTutor(decodeURIComponent(id));

  if (!tutor) notFound();

  const reviews = (await getTutorReviewsForPublic(String(tutor.id))) ?? [];

  const reachPages = (await getTutorReachPagesForTutor(String(tutor.id))).map((p) => ({
    slug: p.slug,
    board: p.board,
    subject: p.subject,
    mode: p.mode,
    city: p.city,
  }));

  const profileUrl = getTutorProfileUrl(tutor);
  const tutorImage = tutor.image ? absoluteUrl(tutor.image) : undefined;
  const description = getTutorDescription(tutor);

  const webpageSchema = {
    "@type": "WebPage",
    "@id": `${profileUrl}#webpage`,
    url: profileUrl,
    name: `${tutor.name} | ${tutor.subject} Tutor`,
    description,
    inLanguage: "en",
    breadcrumb: { "@id": `${profileUrl}#breadcrumb` },
    mainEntity: { "@id": `${profileUrl}#person` },
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "@id": `${profileUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Tutors", item: absoluteUrl("/tutors/") },
      { "@type": "ListItem", position: 3, name: tutor.name, item: profileUrl },
    ],
  };

  const personSchema = {
    "@type": "Person",
    "@id": `${profileUrl}#person`,
    name: tutor.name,
    url: profileUrl,
    image: tutorImage,
    jobTitle: `${tutor.subject} tutor`,
    description,
    knowsAbout: [tutor.subject, tutor.curriculum, tutor.grade, ...tutor.tags].filter(Boolean),
  };

  const tutorServiceSchema = {
    "@type": "Service",
    "@id": `${profileUrl}#tutoring`,
    name: `${tutor.name} ${tutor.subject} tutoring`,
    description,
    image: tutorImage,
    url: profileUrl,
    serviceType: `${tutor.subject} tutoring`,
    areaServed: tutor.primaryCity || "India",
    brand: { "@type": "Organization", name: "IB Gram", url: absoluteUrl("/") },
    provider: { "@id": `${profileUrl}#person` },
  };

  const faqSchema =
    tutor.faqs && tutor.faqs.length > 0
      ? {
          "@type": "FAQPage",
          mainEntity: tutor.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }
      : null;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [webpageSchema, breadcrumbSchema, personSchema, tutorServiceSchema, ...(faqSchema ? [faqSchema] : [])],
        }}
      />
      <TutorProfileClient tutor={tutor} reviews={reviews} reachPages={reachPages} />
    </>
  );
}

async function findPublicTutor(idOrSlug: string): Promise<Tutor | undefined> {
  const dbTutors = await getPublicTutorsFromDb();
  return dbTutors?.find((tutor) => String(tutor.id) === idOrSlug || tutor.slug === idOrSlug);
}

function getTutorProfileUrl(tutor: Tutor): string {
  return absoluteUrl(`/tutor-profile/${tutor.slug ?? tutor.id}/`);
}

function getTutorDescription(tutor: Tutor): string {
  return tutor.bio || tutor.about || `${tutor.name} is an IB and IGCSE tutor for ${tutor.subject}.`;
}
