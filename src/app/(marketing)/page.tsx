import { Hero } from "@/components/home/Hero";
import { TrustIndicators } from "@/components/home/TrustIndicators";
import { TutorDiscovery } from "@/components/home/TutorDiscovery";
import { AIToolsShowcase } from "@/components/home/AIToolsShowcase";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { SuccessStories } from "@/components/home/SuccessStories";
import { SEOPlatformInfo } from "@/components/home/SEOPlatformInfo";
import { FAQSection } from "@/components/home/FAQSection";
import { CourseExplorer } from "@/components/home/CourseExplorer";
import { BlogInsights } from "@/components/home/BlogInsights";

export const dynamic = "force-static";
export const revalidate = 3600; // revalidate every 1 hour

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
