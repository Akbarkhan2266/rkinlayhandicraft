"use client";

import { motion } from "framer-motion";
import { CAD_BLUEPRINT_SECTION } from "@/data/collectionsContent";

export default function CadBlueprintSection() {
  const content = CAD_BLUEPRINT_SECTION;

  return (
    <section className="w-full bg-[#11110f] text-[#fcf9f2] py-20 lg:py-28 border-t border-white/10">
      <div className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
        >
          {/* Left Column: Heading, Subtitle & Action Buttons */}
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.12] mb-5">
              {content.heading}
              <br />
              <span className="italic font-normal text-secondary-fixed">
                {content.headingItalic}
              </span>
            </h2>

            <p className="font-body-md text-base sm:text-lg text-tertiary-fixed-dim leading-relaxed mb-8 max-w-2xl">
              {content.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={content.primaryButtonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-secondary-fixed text-on-secondary-fixed hover:bg-white hover:text-black transition-all duration-300 shadow-md group"
              >
                <span className="material-symbols-outlined text-[18px]">
                  upload_file
                </span>
                <span className="font-label-caps text-xs tracking-wider uppercase font-bold">
                  {content.primaryButtonText}
                </span>
              </a>

              <a
                href={content.secondaryButtonPhone}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 border border-white/20 text-white hover:border-secondary-fixed hover:text-secondary-fixed transition-all duration-300 font-label-caps text-xs tracking-wider uppercase font-semibold"
              >
                <span className="material-symbols-outlined text-[16px]">
                  call
                </span>
                <span>{content.secondaryButtonText}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Studio Specifications Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.04] border border-white/10 shadow-lg">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <span className="font-label-caps text-xs uppercase tracking-[0.2em] text-secondary-fixed font-bold">
                  Technical Support
                </span>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-label-caps text-[10px] tracking-wider uppercase font-bold">
                  {content.statusBadge}
                </div>
              </div>

              <div className="space-y-4">
                {content.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-fixed text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span className="font-sans text-xs sm:text-sm text-tertiary-fixed-dim leading-snug">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-6 mt-6 border-t border-white/10">
                <p className="font-body-sm text-[11px] sm:text-xs text-white/50 italic leading-relaxed">
                  White-glove export crating, dry-lay photo approvals before
                  shipment, and on-site master artisan supervision available worldwide.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
