import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CollectionsHeroSection from "@/components/collections/CollectionsHeroSection";
import CollectionsFilterGrid from "@/components/collections/CollectionsFilterGrid";
import SacredSanctuariesSection from "@/components/collections/SacredSanctuariesSection";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Explore our complete architectural marble inlay portfolio across six core disciplines: imperial floor medallions, dining tables, stair risers, bespoke mandir shrines, wall panels, and virgin Makrana marble slabs from Agra, India.",
};

export default function CollectionsPage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col w-full max-w-full overflow-x-hidden">
      <Header />
      <main className="w-full max-w-full overflow-x-hidden pt-20 bg-surface min-h-[calc(100vh-80px)] flex-1">
        <CollectionsHeroSection />
        <CollectionsFilterGrid />
        <SacredSanctuariesSection />
      </main>
      <Footer />
    </div>
  );
}
