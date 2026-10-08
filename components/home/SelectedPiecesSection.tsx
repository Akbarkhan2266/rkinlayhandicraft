"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import ExhibitionCard from "@/components/ui/ExhibitionCard";
import FadeIn from "@/components/ui/FadeIn";
import { EXHIBITION_PIECES } from "@/data/content";
import { CategoryType } from "@/types";

export default function SelectedPiecesSection() {
  const [selectedFilter, setSelectedFilter] = useState<CategoryType>("ALL");

  const filteredPieces =
    selectedFilter === "ALL"
      ? EXHIBITION_PIECES
      : EXHIBITION_PIECES.filter((p) => p.category === selectedFilter);

  const categories: { label: string; value: CategoryType }[] = [
    { label: "All", value: "ALL" },
    { label: "Tables", value: "TABLE" },
    { label: "Floors", value: "FLOOR" },
    { label: "Stairs", value: "STAIRS" },
    { label: "Walls", value: "WALL" },
  ];

  return (
    <section className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin py-space-xl lg:py-28">
      <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
        <div>
          <span className="font-label-caps text-label-caps uppercase tracking-[0.22em] text-secondary block mb-space-xs">
            Exhibition Catalogue
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
            Selected Pieces.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mt-space-xs">
            A glimpse into our collection of handcrafted marble inlay pieces
            across all four lapidary disciplines.
          </p>
        </div>

        {/* Filter Pills with active layout animation */}
        <div className="flex flex-wrap items-center gap-space-xs">
          <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant mr-1">
            Filter Disciplines:
          </span>
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedFilter(cat.value)}
              className={`relative px-3 py-1 rounded-full font-label-caps text-label-caps uppercase tracking-wider transition-colors duration-200 cursor-pointer ${
                selectedFilter === cat.value
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container hover:bg-surface-container-high text-on-surface"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Editorial Product Grid with AnimatePresence */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
        <AnimatePresence mode="popLayout">
          {filteredPieces.map((piece) => (
            <ExhibitionCard key={piece.id} piece={piece} />
          ))}
        </AnimatePresence>
      </motion.div>

      <FadeIn className="mt-space-xl flex justify-center">
        <Link
          className="inline-flex items-center gap-space-xs px-space-xl py-space-sm rounded-full bg-surface-container-highest hover:bg-primary hover:text-on-primary text-primary transition-all duration-300 font-label-md text-label-md uppercase tracking-wider shadow-sm"
          href="/collections"
        >
          View All Collections{" "}
          <span className="material-symbols-outlined text-[16px]">
            arrow_forward
          </span>
        </Link>
      </FadeIn>
    </section>
  );
}
