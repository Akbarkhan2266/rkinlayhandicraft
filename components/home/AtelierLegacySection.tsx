"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import StatCard from "@/components/ui/StatCard";
import FadeIn from "@/components/ui/FadeIn";
import { STAT_ITEMS } from "@/data/content";

export default function AtelierLegacySection() {
  return (
    <section
      className="w-full bg-surface-container-low py-space-xl lg:py-28"
      id="about"
    >
      <div className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <FadeIn className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start pb-space-lg">
          <div className="lg:col-span-6">
            <span className="font-label-caps text-label-caps uppercase tracking-[0.22em] text-secondary block mb-space-xs">
              The Atelier Legacy
            </span>
            <h2 className="font-headline-lg text-headline-lg lg:text-[3.5rem] text-primary tracking-tight leading-[1.12]">
              Where Agra’s Marble
              <br />
              <span className="italic text-secondary">Becomes Art.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-space-md">
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Rooted in the rich marble craftsmanship of Agra, RK Inlay
              Handicraft brings together natural stone, traditional artistry,
              and microscopic lapidary tolerance to create heirloom pieces made
              to become permanent fixtures of the world’s most refined
              architectural spaces.
            </p>
            <div className="mt-space-md flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-space-sm text-on-surface">
                <span className="w-8 h-[1px] bg-secondary"></span>
                <span className="font-label-md text-label-md uppercase tracking-wider text-secondary">
                  Four Centuries of Lapidary Lineage
                </span>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 font-label-caps text-xs tracking-wider uppercase text-primary hover:text-secondary transition-colors font-semibold group"
              >
                Our Heritage &amp; Artisans
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* Architectural Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter pt-space-lg">
          {STAT_ITEMS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <StatCard stat={stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
