"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SACRED_MANDIR_SECTION } from "@/data/collectionsContent";

export default function SacredSanctuariesSection() {
  const content = SACRED_MANDIR_SECTION;

  return (
    <section className="w-full bg-surface py-20 lg:py-28 border-t border-surface-container-highest">
      <div className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative & Specifications */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <span className="font-label-caps text-label-caps uppercase tracking-[0.24em] text-secondary font-semibold block mb-3">
                {content.kicker}
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary tracking-tight leading-[1.12] mb-6">
                {content.heading}
                <br />
                <span className="italic font-normal text-secondary">
                  {content.headingItalic}
                </span>
              </h2>

              <p className="font-body-md text-base text-on-surface-variant leading-relaxed mb-8">
                {content.description}
              </p>

              {/* 4 Architectural Specifications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {content.specs.map((spec, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-surface-container-low border border-surface-container-highest"
                  >
                    <span className="font-label-caps text-[10px] tracking-[0.2em] uppercase text-secondary font-bold block mb-1">
                      {spec.label}
                    </span>
                    <span className="font-sans text-xs text-primary font-medium leading-snug">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div>
                <a
                  href={content.buttonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-primary text-on-primary hover:bg-secondary hover:text-on-secondary transition-all duration-300 shadow-md group"
                >
                  <span className="font-label-caps text-xs tracking-wider uppercase font-semibold">
                    {content.buttonText}
                  </span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform duration-300">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-Res Temple Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-surface-container-highest group">
              <Image
                src={content.image}
                alt="Bespoke Makrana Marble Mandir Shrine"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 z-10">
                <span className="px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 font-label-caps text-[10px] tracking-[0.2em] uppercase text-white font-semibold shadow-sm">
                  VASTU &amp; SHILPA SHASTRA CERTIFIED
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
