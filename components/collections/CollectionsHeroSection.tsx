"use client";

import { motion } from "framer-motion";

export default function CollectionsHeroSection() {
  return (
    <section className="w-full bg-surface pt-10 pb-8 lg:pt-14 lg:pb-12 border-b border-surface-container-highest">
      <div className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Top Kicker & Certification Tag */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <span className="font-label-caps text-label-caps uppercase tracking-[0.24em] text-secondary font-semibold">
              AGRA ATELIER CATALOGUE • ARCHIVAL EDITIONS
            </span>
            <div className="inline-flex items-center self-start sm:self-auto px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
              <span className="font-label-caps text-[10px] uppercase tracking-wider text-secondary font-semibold">
                100% HAND CHISELED BY SHILP GURUS
              </span>
            </div>
          </div>

          {/* Heading & Subtitle Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[4.25rem] text-primary tracking-tight leading-[1.08]">
                Masterworks in Stone.
                <br />
                <span className="italic font-normal text-secondary">
                  The Complete Collections.
                </span>
              </h1>
            </div>

            <div className="lg:col-span-4">
              <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Every piece represents hundreds to thousands of hours of traditional
                lapidary chiseling. Explore our permanent architectural portfolio
                across six core disciplines from the Agra corridor.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
