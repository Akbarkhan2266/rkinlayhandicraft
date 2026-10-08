"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ZERO_POROSITY_SECTION } from "@/data/collectionsContent";

export default function ZeroPorositySection() {
  const content = ZERO_POROSITY_SECTION;

  return (
    <section className="w-full bg-surface-container-low py-20 lg:py-28 border-t border-surface-container-highest">
      <div className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Workshop Lapidary Craft Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl border border-surface-container-highest group">
              <Image
                src={content.image}
                alt="Lapidary precision craft in Makrana marble"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 z-10">
                <span className="px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 font-label-caps text-[10px] tracking-[0.2em] uppercase text-white font-semibold">
                  HISTORIC TAJ MAHAL FORMULA
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Petrographic Analysis & Science */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              <span className="font-label-caps text-label-caps uppercase tracking-[0.24em] text-secondary font-semibold block mb-3">
                {content.kicker}
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary tracking-tight leading-[1.12] mb-6">
                {content.heading}{" "}
                <span className="italic font-normal text-secondary">
                  {content.headingItalic}
                </span>
              </h2>

              <p className="font-body-md text-base text-on-surface-variant leading-relaxed mb-8">
                {content.description}
              </p>

              {/* 3 Scientific Principles */}
              <div className="space-y-6 mb-8">
                {content.bullets.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <span className="w-6 h-6 rounded-full bg-secondary/15 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-secondary text-[15px]">
                        verified
                      </span>
                    </span>
                    <div>
                      <h4 className="font-label-caps text-xs uppercase tracking-wider text-primary font-bold mb-1">
                        {b.title}
                      </h4>
                      <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                        {b.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Petrographic Analysis Link */}
              <a
                href="#petrographic"
                className="inline-flex items-center gap-2 font-label-caps text-xs tracking-wider uppercase text-secondary hover:text-primary font-bold group transition-colors"
              >
                <span>{content.linkText}</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
