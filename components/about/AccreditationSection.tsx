"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ABOUT_CONTENT } from "@/data/aboutContent";

export default function AccreditationSection() {
  const { accreditation } = ABOUT_CONTENT;

  return (
    <section className="w-full bg-surface py-16 lg:py-24 border-t border-surface-container-highest">
      <div className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        {/* Header & Badge */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
            <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-secondary font-semibold">
              {accreditation.badge}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary tracking-tight leading-[1.15] mb-4">
            {accreditation.heading}{" "}
            <span className="italic font-normal text-secondary">
              {accreditation.headingItalic}
            </span>
          </h2>

          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            {accreditation.subtitle}
          </p>
        </motion.div>

        {/* Master Accreditation Certificate & Heritage Transcript Container */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl bg-surface-container-low border border-surface-container-highest p-6 sm:p-8 lg:p-10 shadow-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Certificate Presentation */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="relative w-full max-w-[540px] aspect-[4/3] rounded-lg overflow-hidden p-2 sm:p-3 bg-white shadow-md border-2 border-surface-container-highest">
                <div className="relative w-full h-full rounded border border-neutral-300 overflow-hidden">
                  <Image
                    src={accreditation.certificateImage}
                    alt="Official Govt of India Accreditation Certificate"
                    fill
                    sizes="(max-width: 1024px) 100vw, 540px"
                    className="object-contain p-1"
                  />
                </div>
              </div>
              <p className="font-body-sm text-[12px] sm:text-xs text-on-surface-variant/75 text-center mt-3 max-w-md italic">
                {accreditation.certificateCaption}
              </p>
            </div>

            {/* Right: Official Heritage Transcript */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-surface-container-highest mb-4">
                  <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-secondary font-semibold">
                    {accreditation.transcriptHeader}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-secondary font-medium">
                    <span className="material-symbols-outlined text-[15px]">
                      verified
                    </span>
                    Govt. Certified
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-primary font-normal tracking-tight mb-5">
                  {accreditation.transcriptTitle}
                </h3>

                {/* Metadata Table */}
                <div className="divide-y divide-surface-container-highest/60 text-sm font-sans mb-6">
                  {accreditation.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="py-2.5 grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 items-baseline"
                    >
                      <span className="sm:col-span-4 font-label-caps text-[11px] uppercase tracking-wider text-on-surface-variant font-medium">
                        {detail.label}
                      </span>
                      <span className="sm:col-span-8 text-[13px] sm:text-sm text-primary font-medium">
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Callout Assurance Pill */}
              <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-surface border border-secondary/20 shadow-sm">
                <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">
                  workspace_premium
                </span>
                <p className="font-body-sm text-xs sm:text-[13px] text-on-surface-variant leading-snug">
                  {accreditation.assuranceText}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
