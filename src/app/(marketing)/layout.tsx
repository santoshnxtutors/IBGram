import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LenisRuntime } from "@/components/providers/LenisProvider";
import { AiAssistantFloatingWidget } from "@/components/layout/AiAssistantFloatingWidget";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <AiAssistantFloatingWidget />
      <LenisRuntime />
    </div>
  );
}
