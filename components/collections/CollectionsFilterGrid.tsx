"use client";

import { useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  CATEGORY_TABS,
  COLLECTION_ITEMS,
  CollectionCategory,
} from "@/data/collectionsContent";

function getCategoryFromParam(param: string | null): CollectionCategory {
  if (!param) return "ALL";
  const upper = param.toUpperCase();
  if (upper === "FLOOR" || upper === "FLOORS") return "FLOOR";
  if (upper === "TABLE" || upper === "TABLES") return "TABLE";
  if (upper === "STAIRS" || upper === "STAIR") return "STAIRS";
  if (upper === "TEMPLE" || upper === "TEMPLES") return "TEMPLE";
  if (upper === "WALLS" || upper === "WALL") return "WALLS";
  if (upper === "MARBLE" || upper === "SLABS") return "MARBLE";
  return "ALL";
}

function CollectionsFilterGridInner() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState<CollectionCategory | null>(null);

  const activeCategory = selectedCategory ?? getCategoryFromParam(categoryParam);

  const filteredItems =
    activeCategory === "ALL"
      ? COLLECTION_ITEMS
      : COLLECTION_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="catalog" className="w-full bg-surface-container-low py-12 lg:py-20">
      <div className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        {/* Category Filter Pills & Indicator */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 mb-8 border-b border-surface-container-highest">
          {/* 6 Categories + All Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORY_TABS.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-4 py-2 rounded-full font-label-caps text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-primary text-on-primary shadow-sm"
                      : "bg-surface hover:bg-surface-container text-on-surface-variant hover:text-primary border border-surface-container-highest"
                  }`}
                >
                  {tab.label}
                  <span
                    className={`ml-1.5 text-[10px] ${
                      isActive ? "text-secondary-fixed" : "text-on-surface-variant/70"
                    }`}
                  >
                    ({tab.count})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Indicator Badge */}
          <div className="hidden sm:inline-flex items-center gap-2 text-on-surface-variant text-xs font-sans">
            <span className="material-symbols-outlined text-secondary text-[16px]">
              filter_list
            </span>
            <span className="tracking-wide">
              Showing{" "}
              <strong className="text-primary font-semibold">
                {filteredItems.length}
              </strong>{" "}
              masterworks
            </span>
          </div>
        </div>

        {/* Dynamic Items Grid */}
        <motion.div layout className="space-y-8">
          {activeCategory === "ALL" ? (
            /* EXACT EDITORIAL LAYOUT - 2 COLS ON SM & MD, 2 & 3 COLS ON LG */
            <div className="space-y-8">
              {/* Featured Showcase: 6 Palatial Centerpieces (Floors, Tables, Walls, Stairs, Temples) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
                {COLLECTION_ITEMS.slice(0, 6).map((item) => (
                  <CollectionCard key={item.id} item={item} isFeatured />
                ))}
              </div>

              {/* Architectural & Sacred Suites: 9 Masterworks (Radha Krishna Mandir, Floor Borders, Runners, Alcoves, Risers, Tables, Slabs) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {COLLECTION_ITEMS.slice(6).map((item) => (
                  <CollectionCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          ) : (
            /* FILTERED VIEW: 2 COLUMNS ON SM & MD, 3 COLUMNS ON LG */
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <AnimatePresence>
                {filteredItems.map((item) => (
                  <CollectionCard key={item.id} item={item} />
                ))}
              </AnimatePresence>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function CollectionCard({
  item,
  isFeatured = false,
}: {
  item: (typeof COLLECTION_ITEMS)[0];
  isFeatured?: boolean;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col rounded-2xl bg-surface border border-surface-container-highest overflow-hidden shadow-sm group hover:shadow-md transition-all duration-300"
    >
      {/* Image Container with Badges */}
      <Link
        href={`/collections/${item.id}`}
        className={`relative w-full block overflow-hidden bg-surface-container ${
          isFeatured ? "aspect-[16/10]" : "aspect-[4/3]"
        }`}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes={
            isFeatured
              ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Top-left Badge */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
          <span className="px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 font-label-caps text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.18em] uppercase text-white font-semibold">
            {item.badge}
          </span>
        </div>
      </Link>

      {/* Content Details */}
      <div className="p-5 sm:p-6 lg:p-7 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center justify-between pb-2.5 border-b border-surface-container mb-3">
            <span className="font-label-caps text-[10px] tracking-[0.2em] uppercase text-secondary font-semibold">
              {item.categoryLabel}
            </span>
            <span className="font-sans text-xs text-primary font-bold">
              {item.price}
            </span>
          </div>

          <Link href={`/collections/${item.id}`} className="block group/title">
            <h3
              className={`font-serif text-primary group-hover/title:text-secondary transition-colors font-normal tracking-tight mb-2.5 ${
                isFeatured ? "text-xl sm:text-2xl lg:text-3xl" : "text-lg sm:text-xl lg:text-2xl"
              }`}
            >
              {item.title}
            </h3>
          </Link>

          <p className="font-body-sm text-xs sm:text-[13px] text-on-surface-variant leading-relaxed mb-6">
            {item.description}
          </p>
        </div>

        {/* Spec Row & Actions */}
        <div className="pt-4 border-t border-surface-container-highest flex items-center justify-between gap-2 sm:gap-3">
          <span className="font-label-caps text-[9px] sm:text-[10px] uppercase tracking-wider text-on-surface-variant font-semibold truncate">
            {item.spec}
          </span>

          <Link
            href={`/collections/${item.id}`}
            className="inline-flex items-center gap-1 font-label-caps text-[9px] sm:text-[10px] tracking-widest uppercase text-primary hover:text-secondary font-bold group/link transition-colors shrink-0"
          >
            <span>View Details</span>
            <span className="material-symbols-outlined text-[13px] sm:text-[14px] group-hover/link:translate-x-0.5 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function CollectionsFilterGrid() {
  return (
    <Suspense
      fallback={
        <div className="w-full py-16 text-center text-on-surface-variant font-sans text-xs tracking-wider uppercase">
          Loading Collections Catalogue...
        </div>
      }
    >
      <CollectionsFilterGridInner />
    </Suspense>
  );
}
