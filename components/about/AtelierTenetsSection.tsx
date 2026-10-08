"use client";

import { motion } from "framer-motion";
import { ABOUT_CONTENT } from "@/data/aboutContent";

export default function AtelierTenetsSection() {
  const { tenets } = ABOUT_CONTENT;

  return (
    <section className="w-full bg-[#11110f] text-[#fcf9f2] py-20 lg:py-28 overflow-hidden border-t border-white/10">
      <div className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-14 lg:mb-18"
        >
          <div className="lg:col-span-7">
            <span className="font-label-caps text-label-caps uppercase tracking-[0.24em] text-secondary-fixed block mb-3 font-semibold">
              {tenets.kicker}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.12]">
              {tenets.heading}{" "}
              <span className="italic font-normal text-secondary-fixed">
                {tenets.headingItalic}
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="font-body-md text-sm sm:text-base text-tertiary-fixed-dim leading-relaxed">
              {tenets.intro}
            </p>
          </div>
        </motion.div>

        {/* 4 Tenets Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tenets.items.map((tenet, idx) => (
            <motion.div
              key={tenet.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group p-6 sm:p-7 rounded-xl bg-white/[0.03] border border-white/10 hover:border-secondary/60 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-2xl text-secondary-fixed font-light block mb-4">
                  {tenet.number}
                </span>

                <h3 className="font-serif text-xl sm:text-2xl text-white font-normal tracking-tight mb-3">
                  {tenet.title}
                </h3>

                <p className="font-body-sm text-xs sm:text-sm text-tertiary-fixed-dim leading-relaxed">
                  {tenet.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <span className="font-label-caps text-[10px] tracking-[0.2em] uppercase text-secondary-fixed font-medium">
                  {tenet.tag}
                </span>
                <span className="material-symbols-outlined text-secondary-fixed text-[16px] group-hover:translate-x-1 transition-transform duration-300">
                  arrow_forward
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
