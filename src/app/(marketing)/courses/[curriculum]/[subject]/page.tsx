import type { Metadata } from "next";
import { GeneratedPageRenderer } from "@/components/generated-pages/GeneratedPageRenderer";
import { getDbGeneratedSeoPageByPath } from "@/lib/cms/generated-pages-db";
import { buildGeneratedMetadata } from "@/lib/page-generator/metadata-generator";
import type { GeneratedSeoPage } from "@/lib/page-generator/types";
import { getVisibleTutorsForPage } from "@/lib/cms/tutor-visibility";
import { absoluteUrl } from "@/lib/seo/slug-utils";
import CoursePageClient from "./course-page-client";
import { CourseTutorSection } from "./course-tutor-section";
import { getCourseSubjectContent } from "./subject-content";
import { SubjectPageView } from "./SubjectPageView";

export const revalidate = 3600;
export const dynamicParams = true;

type CourseProps = { params: Promise<{ curriculum: string; subject: string }> };

function pathFor(curriculum: string, subject: string) {
  return `/courses/${curriculum.toLowerCase()}/${subject.toLowerCase()}/`;
}

// A DB-backed course page is only preferred over the static content module when
// it actually carries editorial content. Stub rows (the old auto-seeded ones
// with cityName: "Ib", no FAQs and almost no body) should fall through to the
// rich SubjectPageView instead of rendering a near-empty templated layout.
function isRichDbPage(page: GeneratedSeoPage): boolean {
  const wordCount = page.quality?.wordCount ?? 0;
  const hasFaqs = (page.faqs?.length ?? 0) >= 4;
  const hasBlocks = (page.contentBlocks?.length ?? 0) >= 3;
  return wordCount >= 800 && hasFaqs && hasBlocks;
}

export async function generateMetadata({ params }: CourseProps): Promise<Metadata> {
  const { curriculum, subject } = await params;
  const dbPage = await getDbGeneratedSeoPageByPath(pathFor(curriculum, subject), ["subject"]);
  if (dbPage && isRichDbPage(dbPage)) return buildGeneratedMetadata(dbPage);

  const content = getCourseSubjectContent(curriculum, subject);
  if (content) {
    return {
      title: content.metaTitle,
      description: content.metaDescription,
      keywords: content.metaKeywords,
      alternates: { canonical: pathFor(curriculum, subject) },
      robots: { index: true, follow: true },
      openGraph: {
        type: "article",
        url: absoluteUrl(pathFor(curriculum, subject)),
        title: content.metaTitle,
        description: content.metaDescription,
        siteName: "IB Gram",
      },
      twitter: {
        card: "summary_large_image",
        title: content.metaTitle,
        description: content.metaDescription,
      },
    };
  }

  return {
    title: `${subject.replace(/-/g, " ")} tutor (${curriculum.toUpperCase()}) | IB Gram`,
    description: `Verified ${curriculum.toUpperCase()} ${subject.replace(/-/g, " ")} tutors with home, online and hybrid options.`,
    alternates: { canonical: pathFor(curriculum, subject) },
  };
}

export default async function CoursePage({ params }: CourseProps) {
  const { curriculum, subject } = await params;
  const pagePath = pathFor(curriculum, subject);
  const visibleTutors = await getVisibleTutorsForPage(pagePath);

  const dbPage = await getDbGeneratedSeoPageByPath(pagePath, ["subject"]);
  if (dbPage && isRichDbPage(dbPage)) {
    return (
      <>
        <GeneratedPageRenderer page={dbPage} />
        <CourseTutorSection curriculum={curriculum} subjectSlug={subject} tutors={visibleTutors ?? undefined} />
      </>
    );
  }

  const content = getCourseSubjectContent(curriculum, subject);
  if (content) {
    return <SubjectPageView curriculum={curriculum} subject={subject} content={content} visibleTutors={visibleTutors ?? undefined} />;
  }

  return <CoursePageClient visibleTutors={visibleTutors ?? undefined} />;
}
