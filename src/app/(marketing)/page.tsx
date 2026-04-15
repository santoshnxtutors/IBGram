import nextDynamic from "next/dynamic";
import { Hero } from "@/components/home/Hero";

const TrustIndicators = nextDynamic(() => import("@/components/home/TrustIndicators").then((mod) => mod.TrustIndicators));
const CourseExplorer = nextDynamic(() => import("@/components/home/CourseExplorer").then((mod) => mod.CourseExplorer));
const TutorDiscovery = nextDynamic(() => import("@/components/home/TutorDiscovery").then((mod) => mod.TutorDiscovery));
const AIToolsShowcase = nextDynamic(() => import("@/components/home/AIToolsShowcase").then((mod) => mod.AIToolsShowcase));
const ReviewsSection = nextDynamic(() => import("@/components/home/ReviewsSection").then((mod) => mod.ReviewsSection));
const SuccessStories = nextDynamic(() => import("@/components/home/SuccessStories").then((mod) => mod.SuccessStories));
const SEOPlatformInfo = nextDynamic(() => import("@/components/home/SEOPlatformInfo").then((mod) => mod.SEOPlatformInfo));
const FAQSection = nextDynamic(() => import("@/components/home/FAQSection").then((mod) => mod.FAQSection));
const BlogInsights = nextDynamic(() => import("@/components/home/BlogInsights").then((mod) => mod.BlogInsights));

export const dynamic = "force-static";
export const revalidate = 3600;

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TrustIndicators />
      <CourseExplorer />
      <TutorDiscovery />
      <AIToolsShowcase />
      <ReviewsSection />
      <SuccessStories />
      <SEOPlatformInfo />
      <BlogInsights />
      <FAQSection />
    </div>
  );
}
