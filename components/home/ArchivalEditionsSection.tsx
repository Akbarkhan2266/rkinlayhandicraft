"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import { ARCHIVAL_EDITIONS } from "@/data/content";

export default function ArchivalEditionsSection() {
  return (
    <section className="w-full bg-surface-container py-space-xl lg:py-28">
      <div className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-md mb-space-lg">
          <div>
            <span className="font-label-caps text-label-caps uppercase tracking-[0.24em] text-secondary block mb-space-xs">
              Archival Editions
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              More to Explore.
            </h2>
          </div>
          <Link
            className="inline-flex items-center gap-space-xs font-label-md text-label-md uppercase tracking-wider text-primary hover:text-secondary transition-colors"
            href="/collections"
          >
            View Full Catalogue{" "}
            <span className="material-symbols-outlined text-[16px]">
              arrow_forward
            </span>
          </Link>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {ARCHIVAL_EDITIONS.map((edition, idx) => (
            <motion.div
              key={edition.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4 }}
              className="bg-surface rounded-lg p-space-md hover:shadow-md transition-shadow duration-300 border border-surface-container-highest/40 flex flex-col justify-between"
            >
              <div>
                <Link
                  href={edition.slug ? `/collections/${edition.slug}` : `/collections?category=${edition.category}`}
                  className="block aspect-[4/3] rounded overflow-hidden mb-space-sm bg-surface-container-high relative"
                >
                  <Image
                    src={edition.image}
                    alt={edition.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </Link>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-headline-sm text-headline-sm text-primary">
                    <Link
                      href={edition.slug ? `/collections/${edition.slug}` : `/collections?category=${edition.category}`}
                      className="hover:text-secondary transition-colors"
                    >
                      {edition.title}
                    </Link>
                  </h4>
                  <span className="font-label-caps text-label-caps uppercase tracking-wider text-secondary">
                    {edition.category}
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
                  {edition.desc}
                </p>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-surface-container-highest/30">
                <span className="font-label-md text-label-md text-primary font-medium">
                  {edition.price}
                </span>
                <Link
                  href={edition.slug ? `/collections/${edition.slug}` : `/collections?category=${edition.category}`}
                  className="inline-flex items-center gap-1 font-label-caps text-[11px] uppercase tracking-wider text-secondary hover:text-primary font-semibold transition-colors"
                >
                  Explore Piece
                  <span className="material-symbols-outlined text-[14px]">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
