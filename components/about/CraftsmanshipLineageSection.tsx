"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ABOUT_CONTENT } from "@/data/aboutContent";

export default function CraftsmanshipLineageSection() {
  const { lineage } = ABOUT_CONTENT;

  return (
    <section className="w-full bg-surface-container-low py-16 lg:py-24 border-t border-surface-container-highest">
      <div className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Lineage Narrative & Quote */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col justify-between h-full"
          >
            <div>
              <span className="font-label-caps text-label-caps uppercase tracking-[0.22em] text-secondary font-semibold block mb-3">
                {lineage.kicker}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary tracking-tight leading-[1.12] mb-6">
                {lineage.heading}
                <br />
                <span className="italic font-normal text-secondary">
                  {lineage.headingItalic}
                </span>
              </h2>

              <div className="space-y-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                <p>{lineage.paragraph1}</p>
                <p>{lineage.paragraph2}</p>
              </div>
            </div>

            {/* Pull Quote Box */}
            <div className="mt-8 lg:mt-10 p-6 sm:p-7 rounded-xl bg-surface border border-surface-container-highest shadow-sm relative">
              <span className="font-serif text-4xl text-secondary/40 leading-none block select-none -mt-2 mb-1">
                “
              </span>
              <blockquote className="font-serif italic text-lg sm:text-xl text-primary leading-snug">
                {lineage.quote}
              </blockquote>
            </div>
          </motion.div>

          {/* Right Column: Close-up Craftsmanship Lapidary Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl border border-surface-container-highest group">
              <Image
                src={lineage.image}
                alt="Lapidary precision craftsmanship"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* Lapidary Precision Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 font-label-caps text-[10px] tracking-[0.2em] uppercase text-white font-semibold shadow-sm">
                  {lineage.imageBadge}
                </span>
              </div>
            </div>

            {/* Caption Under Image */}
            <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant/80 mt-3 italic tracking-wide">
              {lineage.imageCaption}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
