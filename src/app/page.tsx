import { CatalogSection } from "@/components/CatalogSection";
import { DeliverySection } from "@/components/DeliverySection";
import { Footer } from "@/components/Footer";
import { FreshnessSection } from "@/components/FreshnessSection";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { LeadFormSection } from "@/components/LeadFormSection";
import { SubscriptionSection } from "@/components/SubscriptionSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-ink text-cream selection:bg-crema selection:text-ink">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FreshnessSection />
        <CatalogSection />
        <SubscriptionSection />
        <DeliverySection />
        <LeadFormSection />
      </main>
      <Footer />
    </div>
  );
}
