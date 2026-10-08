import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import CraftsmanshipLineageSection from "@/components/about/CraftsmanshipLineageSection";
import AccreditationSection from "@/components/about/AccreditationSection";
import AtelierTenetsSection from "@/components/about/AtelierTenetsSection";
import AtelierInvitationSection from "@/components/about/AtelierInvitationSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the history, master lineage, and national accreditation of RK Inlay Handicraft. Preserving the imperial Pietra Dura marble inlay arts of Agra, India since 1988.",
};

export default function AboutPage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col w-full max-w-full overflow-x-hidden">
      <Header />
      <main className="w-full max-w-full overflow-x-hidden pt-20 bg-surface min-h-[calc(100vh-80px)] flex-1">
        <AboutHeroSection />
        <CraftsmanshipLineageSection />
        <AccreditationSection />
        <AtelierTenetsSection />
        <AtelierInvitationSection />
      </main>
      <Footer />
    </div>
  );
}
