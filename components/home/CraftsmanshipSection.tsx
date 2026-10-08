"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import { PROCESS_STEPS } from "@/data/content";

export default function CraftsmanshipSection() {
  return (
    <section
      className="w-full bg-primary text-on-primary py-space-xl lg:py-28 relative overflow-hidden"
      id="craftsmanship"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin relative z-10">
        <FadeIn className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg mb-space-xl">
          <div>
            <span className="font-label-caps text-label-caps uppercase tracking-[0.24em] text-secondary-fixed block mb-space-xs">
              The Parchin Kari Discipline
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-primary tracking-tight italic">
              Made by Hand.
              <br />
              <span className="not-italic font-normal text-surface-container-high">
                Finished with Precision.
              </span>
            </h2>
          </div>
          <p className="font-body-md text-body-md text-tertiary-fixed-dim max-w-md">
            True Pietra Dura (<em>Parchin Kari</em>) cannot be automated. Each
            floral curve is chiseled by hand into virgin marble with traditional
            bow-drills and emery diamond wheels.
          </p>
        </FadeIn>

        {/* 5-Step Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-gutter">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4 }}
              className="bg-primary-container p-space-lg rounded-lg flex flex-col justify-between min-h-[280px] border border-white/5 hover:border-secondary/40 transition-colors duration-300 shadow-lg"
            >
              <div>
                <span className="font-headline-sm text-headline-sm text-secondary-fixed block mb-space-xs">
                  {step.step}
                </span>
                <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-primary block mb-space-sm">
                  {step.title}
                </span>
                <p className="font-body-sm text-body-sm text-tertiary-fixed-dim leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="pt-space-md text-[11px] font-label-caps uppercase tracking-widest text-on-secondary-container">
                {step.badge}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
