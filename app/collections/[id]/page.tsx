import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductBreadcrumbs from "@/components/product/ProductBreadcrumbs";
import ProductShowcaseSection from "@/components/product/ProductShowcaseSection";
import CuratedWorksSection from "@/components/product/CuratedWorksSection";
import BespokeInquirySection from "@/components/product/BespokeInquirySection";
import { COLLECTION_ITEMS } from "@/data/collectionsContent";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return COLLECTION_ITEMS.map((item) => ({
    id: item.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const item = COLLECTION_ITEMS.find((piece) => piece.id === id);

  if (!item) {
    return {
      title: "Piece Not Found | RK Inlay Handicraft Agra",
    };
  }

  return {
    title: item.title,
    description: `${item.title} - ${item.italicSubtitle} Handcrafted in Makrana white marble by master artisans in Agra, India.`,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const item = COLLECTION_ITEMS.find((piece) => piece.id === id);

  if (!item) {
    notFound();
  }

  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col w-full max-w-full overflow-x-hidden">
      <Header />
      <main className="w-full max-w-full overflow-x-hidden pt-20 bg-surface min-h-[calc(100vh-80px)] flex-1">
        <ProductBreadcrumbs item={item} />
        <ProductShowcaseSection item={item} />
        <CuratedWorksSection currentItem={item} />
        <BespokeInquirySection item={item} />
      </main>
      <Footer />
    </div>
  );
}
