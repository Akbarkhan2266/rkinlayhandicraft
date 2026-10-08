"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ABOUT_CONTENT } from "@/data/aboutContent";

export default function AtelierInvitationSection() {
  const { invitation } = ABOUT_CONTENT;

  return (
    <section className="w-full bg-surface py-20 lg:py-28 border-t border-surface-container-highest">
      <div className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Workshop Invitation & Location Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-label-caps text-label-caps uppercase tracking-[0.24em] text-secondary font-semibold">
                  {invitation.kicker}
                </span>
                <span className="w-6 h-[1px] bg-secondary/50" />
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary tracking-tight leading-[1.12] mb-6">
                {invitation.heading}
                <br />
                <span className="italic font-normal text-secondary">
                  {invitation.headingItalic}
                </span>
              </h2>

              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-8">
                {invitation.description}
              </p>

              {/* Contact / Workshop Details Cards */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-surface-container-low border border-surface-container-highest">
                  <span className="material-symbols-outlined text-secondary text-[22px] shrink-0 mt-0.5">
                    location_on
                  </span>
                  <div>
                    <span className="font-label-caps text-[10px] uppercase tracking-widest text-secondary font-bold block mb-1">
                      {invitation.addressTitle}
                    </span>
                    <p className="font-body-sm text-xs sm:text-sm text-primary leading-snug">
                      {invitation.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-surface-container-low border border-surface-container-highest">
                  <span className="material-symbols-outlined text-secondary text-[22px] shrink-0 mt-0.5">
                    schedule
                  </span>
                  <div>
                    <span className="font-label-caps text-[10px] uppercase tracking-widest text-secondary font-bold block mb-1">
                      {invitation.hoursTitle}
                    </span>
                    <p className="font-body-sm text-xs sm:text-sm text-primary leading-snug">
                      {invitation.hours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href={invitation.buttonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-primary text-on-primary hover:bg-secondary hover:text-on-secondary transition-all duration-300 shadow-md group"
                >
                  <span className="font-label-caps text-xs tracking-wider uppercase font-semibold">
                    {invitation.buttonText}
                  </span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform duration-300">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Two Vertical Showcase Images */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {invitation.showcases.map((showcase, idx) => (
              <div key={idx} className="flex flex-col group">
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-lg border border-surface-container-highest bg-surface-container">
                  <Image
                    src={showcase.image}
                    alt={showcase.caption}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 35vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Showcase Badge at bottom of image */}
                  <div className="absolute bottom-4 inset-x-4 z-10 flex justify-center">
                    <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 font-label-caps text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-white font-semibold text-center">
                      {showcase.badge}
                    </span>
                  </div>
                </div>

                <p className="font-body-sm text-[11px] sm:text-xs text-on-surface-variant/80 mt-2.5 text-center italic">
                  {showcase.caption}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
