"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ABOUT_CONTENT } from "@/data/aboutContent";

export default function AboutHeroSection() {
  const { hero } = ABOUT_CONTENT;

  return (
    <section className="relative w-full bg-surface pt-10 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        {/* Top Header Information */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="font-label-caps text-label-caps uppercase tracking-[0.24em] text-secondary font-semibold">
              {hero.kicker}
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[4rem] text-primary tracking-tight leading-[1.08] mb-6">
            {hero.heading}{" "}
            <span className="italic font-normal text-secondary block sm:inline">
              {hero.headingItalic}
            </span>
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
            {hero.description}
          </p>
        </motion.div>

        {/* 4 Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-12 mb-12 lg:mt-16 lg:mb-16 border-y border-surface-container-highest"
        >
          {hero.stats.map((stat, idx) => (
            <div
              key={idx}
              className={`py-6 sm:py-8 px-4 sm:px-6 flex flex-col justify-between ${
                idx !== 0 ? "md:border-l border-surface-container-highest" : ""
              } ${idx % 2 === 1 ? "border-l border-surface-container-highest md:border-l" : ""}`}
            >
              <div>
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary font-normal tracking-tight block">
                  {stat.value}
                </span>
                <span className="font-label-caps text-label-caps uppercase tracking-[0.18em] text-secondary font-medium mt-2 block">
                  {stat.label}
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                {stat.subtext}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Workshop Master Artisan Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[2.35/1] rounded-2xl overflow-hidden shadow-2xl border border-surface-container-highest group"
        >
          <Image
            src={hero.heroImage}
            alt={hero.heroImageAlt}
            fill
            priority
            sizes="(max-width: 1440px) 100vw, 1440px"
            className="object-cover object-[center_35%] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Caption Overlay */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10">
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white/90">
              <span className="font-sans text-[11px] sm:text-xs tracking-wider uppercase">
                {hero.heroImageCaption}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
