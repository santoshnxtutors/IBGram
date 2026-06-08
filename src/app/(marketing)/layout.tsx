import { DeferredHeader } from "@/components/layout/DeferredHeader";
import { Footer } from "@/components/layout/Footer";
import { MarketingDeferredWidgets } from "@/components/layout/MarketingDeferredWidgets";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <DeferredHeader />
      <main className="flex-1">{children}</main>
      <Footer />
      <MarketingDeferredWidgets />
    </div>
  );
}
