import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactHeroSection from "@/components/contact/ContactHeroSection";
import DirectConciergeSection from "@/components/contact/DirectConciergeSection";
import ExemplarsInResidenceSection from "@/components/contact/ExemplarsInResidenceSection";
import TajganjExperienceSection from "@/components/contact/TajganjExperienceSection";
import TajganjMapSection from "@/components/contact/TajganjMapSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Direct concierge for bespoke marble inlay commissions and private visits to our Tajganj lapidary workshop in Agra, India. Connect via phone, WhatsApp, or schedule an in-person studio consultation.",
};

export default function ContactPage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col w-full max-w-full overflow-x-hidden">
      <Header />
      <main className="w-full max-w-full overflow-x-hidden pt-20 bg-surface min-h-[calc(100vh-80px)] flex-1">
        <ContactHeroSection />
        <DirectConciergeSection />
        <ExemplarsInResidenceSection />
        <TajganjExperienceSection />
        <TajganjMapSection />
      </main>
      <Footer />
    </div>
  );
}
