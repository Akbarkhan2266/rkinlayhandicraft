"use client";

import { motion } from "framer-motion";
import { CONTACT_CONTENT } from "@/data/contactContent";

export default function TajganjExperienceSection() {
  const { experience } = CONTACT_CONTENT;

  return (
    <section className="w-full bg-surface-container-low py-16 lg:py-24 border-b border-surface-container-highest">
      <div className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        {/* Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="font-label-caps text-label-caps uppercase tracking-[0.22em] text-secondary font-semibold block mb-2">
            {experience.kicker}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary tracking-tight leading-[1.12] mb-4">
            {experience.heading}
          </h2>
          <p className="font-body-md text-base sm:text-lg text-on-surface-variant leading-relaxed">
            {experience.subtitle}
          </p>
        </div>

        {/* 3 Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {experience.steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="p-6 sm:p-8 rounded-2xl bg-surface border border-surface-container-highest shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Number Circle Badge */}
                <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-serif text-sm font-medium mb-6">
                  {step.number}
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-primary font-normal tracking-tight mb-3">
                  {step.title}
                </h3>

                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Tag at bottom */}
              <div className="pt-6 mt-6 border-t border-surface-container-highest flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[16px]">
                  verified
                </span>
                <span className="font-label-caps text-[10px] tracking-[0.18em] uppercase text-secondary font-semibold">
                  {step.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
