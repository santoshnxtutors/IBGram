import nextDynamic from "next/dynamic";
import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustIndicators } from "@/components/home/TrustIndicators";
import { AIToolsShowcase } from "@/components/home/AIToolsShowcase";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { SEOPlatformInfo } from "@/components/home/SEOPlatformInfo";
import { BlogInsights } from "@/components/home/BlogInsights";
import { getPublicHomepageReviews, getPublicSuccessStories } from "@/lib/cms/public-reviews";
import { getPublicHomepageFaqs } from "@/lib/cms/public-faqs";
import { getVisibleTutorsForPage } from "@/lib/cms/tutor-visibility";

const CourseExplorer = nextDynamic(() => import("@/components/home/CourseExplorer").then((mod) => mod.CourseExplorer));
const TutorDiscovery = nextDynamic(() => import("@/components/home/TutorDiscovery").then((mod) => mod.TutorDiscovery));
const SuccessStories = nextDynamic(() => import("@/components/home/SuccessStories").then((mod) => mod.SuccessStories));
const FAQSection = nextDynamic(() => import("@/components/home/FAQSection").then((mod) => mod.FAQSection));

export const dynamic = "force-static";
export const revalidate = 3600;

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const homepageJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "IB Gram",
    url: "https://www.ibgram.com/",
    logo: "https://www.ibgram.com/ibgramlogo.png",
    description:
      "IB Gram helps families connect with IB and IGCSE tutors for PYP, MYP, DP and IGCSE subjects across home, online and hybrid learning.",
    areaServed: ["India", "United Arab Emirates", "Singapore", "United Kingdom", "United States"],
    sameAs: ["https://www.ibgram.com/"],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "IB Gram",
    url: "https://www.ibgram.com/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.ibgram.com/tutors?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
];

export default async function Home() {
  const [reviewItems, storyItems, faqItems, visibleTutors] = await Promise.all([
    getPublicHomepageReviews(),
    getPublicSuccessStories(),
    getPublicHomepageFaqs(),
    getVisibleTutorsForPage("/"),
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageJsonLd) }}
      />
      <Hero />
      <TrustIndicators />
      <div className="cv-auto-section">
        <CourseExplorer />
      </div>
      <div className="cv-auto-section">
        <TutorDiscovery tutors={visibleTutors ?? undefined} />
      </div>
      <div className="cv-auto-section">
        <AIToolsShowcase />
      </div>
      <div className="cv-auto-section">
        <ReviewsSection items={reviewItems ?? undefined} />
      </div>
      <div className="cv-auto-section">
        <SuccessStories items={storyItems ?? undefined} />
      </div>
      <div className="cv-auto-section">
        <SEOPlatformInfo />
      </div>
      <div className="cv-auto-section">
        <BlogInsights />
      </div>
      <div className="cv-auto-section">
        <FAQSection items={faqItems ?? undefined} />
      </div>
    </div>
  );
}
