"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { COLLECTION_ITEMS, CollectionItem } from "@/data/collectionsContent";

export default function CuratedWorksSection({ currentItem }: { currentItem: CollectionItem }) {
  // Pick 3 related or complementary pieces different from current item
  const ensemblePieces = COLLECTION_ITEMS.filter((i) => i.id !== currentItem.id).slice(0, 3);

  return (
    <section className="w-full bg-surface-container-low py-16 lg:py-24 border-t border-surface-container-highest">
      <div className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-8 border-b border-surface-container-highest">
          <div>
            <span className="font-label-caps text-label-caps uppercase tracking-[0.24em] text-secondary font-semibold block mb-2">
              HARMONIOUS ENSEMBLE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-primary tracking-tight">
              Curated Works from the Atelier
            </h2>
          </div>

          <Link
            href="/collections"
            className="inline-flex items-center gap-1.5 font-label-caps text-xs tracking-wider uppercase text-secondary hover:text-primary font-bold group transition-colors self-start sm:self-auto"
          >
            <span>Explore Entire Catalog</span>
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>

        {/* 3 Ensemble Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ensemblePieces.map((piece, idx) => (
            <motion.div
              key={piece.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col rounded-2xl bg-surface border border-surface-container-highest overflow-hidden shadow-sm group hover:shadow-md transition-all duration-300"
            >
              <Link
                href={`/collections/${piece.id}`}
                className="relative aspect-[4/3] w-full overflow-hidden bg-surface-container block"
              >
                <Image
                  src={piece.image}
                  alt={piece.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </Link>

              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <span className="font-label-caps text-[10px] tracking-[0.2em] uppercase text-secondary font-semibold block mb-2">
                    {piece.badge}
                  </span>

                  <Link href={`/collections/${piece.id}`}>
                    <h3 className="font-serif text-xl text-primary hover:text-secondary transition-colors font-normal tracking-tight mb-2">
                      {piece.title}
                    </h3>
                  </Link>

                  <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed mb-4">
                    {piece.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-surface-container-highest flex items-center justify-between">
                  <span className="font-serif text-sm text-primary font-bold">
                    {piece.price}
                  </span>

                  <Link
                    href={`/collections/${piece.id}`}
                    className="font-label-caps text-[10px] tracking-wider uppercase text-secondary hover:text-primary font-bold"
                  >
                    View Piece →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
