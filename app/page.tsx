import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AtelierLegacySection from "@/components/home/AtelierLegacySection";
import SelectedPiecesSection from "@/components/home/SelectedPiecesSection";
import CollectionsSpreadsSection from "@/components/home/CollectionsSpreadsSection";
import CraftsmanshipSection from "@/components/home/CraftsmanshipSection";
import WhyRkInlaySection from "@/components/home/WhyRkInlaySection";
import ArchivalEditionsSection from "@/components/home/ArchivalEditionsSection";
// import BespokeCommissionSection from "@/components/home/BespokeCommissionSection";
import BrandStatementSection from "@/components/home/BrandStatementSection";
import FaqSection from "@/components/home/FaqSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export const metadata: Metadata = {
  title: "RK Inlay | Agra Marble Inlay Atelier",
  description:
    "Handcrafted marble inlay from Agra, India. Preserving the imperial legacy of Pietra Dura lapidary arts through master heirloom architectural editions.",
};

export default function Home() {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col w-full max-w-full overflow-x-hidden">
      <Header />
      <main className="w-full max-w-full overflow-x-hidden pt-20 bg-surface min-h-[calc(100vh-80px)] flex-1">
        <HeroSection />
        <AtelierLegacySection />
        <SelectedPiecesSection />
        <CollectionsSpreadsSection />
        <CraftsmanshipSection />
        <WhyRkInlaySection />
        <ArchivalEditionsSection />
        {/* <BespokeCommissionSection /> */}
        <BrandStatementSection />
        {/* <FaqSection /> */}
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
