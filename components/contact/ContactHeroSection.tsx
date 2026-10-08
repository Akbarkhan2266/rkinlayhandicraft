"use client";

import { motion } from "framer-motion";
import { CONTACT_CONTENT } from "@/data/contactContent";

export default function ContactHeroSection() {
  const { hero } = CONTACT_CONTENT;

  return (
    <section className="w-full bg-surface pt-10 pb-14 lg:pt-14 lg:pb-20 border-b border-surface-container-highest">
      <div className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Kicker */}
          <span className="font-label-caps text-label-caps uppercase tracking-[0.24em] text-secondary font-semibold block mb-4">
            {hero.kicker}
          </span>

          {/* Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[4.25rem] text-primary tracking-tight leading-[1.08] mb-8">
            {hero.heading}
            <br />
            <span className="italic font-normal text-secondary">
              {hero.headingItalic}
            </span>
          </h1>

          {/* Subtitle & Studio Status Metadata Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-2">
            <div className="lg:col-span-8">
              <p className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
                {hero.description}
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="inline-flex flex-col border border-surface-container-highest bg-surface-container-low px-5 py-3 rounded-xl shadow-xs">
                <span className="font-label-caps text-[11px] uppercase tracking-[0.2em] text-primary font-bold">
                  {hero.studioBadge.status}
                </span>
                <span className="font-sans text-xs text-on-surface-variant tracking-wider mt-0.5">
                  {hero.studioBadge.location}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
