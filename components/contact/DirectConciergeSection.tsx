"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CONTACT_CONTENT } from "@/data/contactContent";

export default function DirectConciergeSection() {
  const { concierge } = CONTACT_CONTENT;

  return (
    <section className="w-full bg-surface-container-low py-16 lg:py-24 border-b border-surface-container-highest">
      <div className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12 lg:mb-16">
          <div className="lg:col-span-7">
            <span className="font-label-caps text-label-caps uppercase tracking-[0.22em] text-secondary font-semibold block mb-2">
              {concierge.kicker}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary tracking-tight leading-[1.12]">
              {concierge.heading}
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
              {concierge.subtitle}
            </p>
          </div>
        </div>

        {/* Content Grid: Contact Cards + Heritage Studio Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Direct Atelier Access Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col gap-6 justify-between"
          >
            {/* 1. Physical Atelier Address Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-surface border border-surface-container-highest shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-surface-container-highest mb-4">
                <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-secondary font-semibold">
                  {concierge.address.title}
                </span>
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  location_on
                </span>
              </div>

              <div className="mb-4">
                <h3 className="font-serif text-xl sm:text-2xl text-primary font-normal leading-snug">
                  {concierge.address.line1}
                  <br />
                  {concierge.address.line2}
                </h3>
                <p className="font-body-sm text-xs sm:text-[13px] text-on-surface-variant mt-2 leading-relaxed">
                  {concierge.address.note}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={concierge.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-on-primary hover:bg-secondary hover:text-on-secondary transition-all duration-300 shadow-xs group"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    map
                  </span>
                  <span className="font-label-caps text-[11px] uppercase tracking-wider font-semibold">
                    Open in Google Maps
                  </span>
                </a>

                <a
                  href={`tel:${concierge.address.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-surface-container-highest text-primary hover:border-secondary hover:text-secondary transition-all duration-300 shadow-xs"
                >
                  <span className="material-symbols-outlined text-[16px] text-secondary">
                    call
                  </span>
                  <span className="font-sans text-xs font-semibold tracking-wider">
                    {concierge.address.phone}
                  </span>
                </a>
              </div>
            </div>

            {/* 2. Dual Cards: WhatsApp & Client Inquiries Email */}
           

            {/* 3. Atelier Working Hours Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-surface border border-surface-container-highest shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-surface-container-highest mb-4">
                <div className="inline-flex items-center gap-2 text-secondary">
                  <span className="material-symbols-outlined text-[20px]">
                    schedule
                  </span>
                  <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] font-semibold">
                    {concierge.hours.title}
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-secondary-fixed/50 font-label-caps text-[10px] uppercase tracking-wider text-secondary font-bold">
                  {concierge.hours.badge}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                <span className="font-serif text-xl sm:text-2xl text-primary font-normal">
                  {concierge.hours.days}
                </span>
                <span className="font-serif text-lg sm:text-xl text-secondary font-medium">
                  {concierge.hours.time}
                </span>
              </div>

              <p className="font-body-sm text-xs sm:text-[13px] text-on-surface-variant leading-relaxed">
                {concierge.hours.note}
              </p>
            </div>
          </motion.div>

          {/* Right Column: Heritage Studio Live Drafting Table Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="relative w-full h-full min-h-[480px] lg:min-h-[580px] rounded-2xl overflow-hidden shadow-xl border border-surface-container-highest group">
              <Image
                src={concierge.heritageCard.image}
                alt={concierge.heritageCard.title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

              {/* Badge top-left */}
              <div className="absolute top-5 left-5 z-10">
                <span className="px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 font-label-caps text-[10px] tracking-[0.2em] uppercase text-white font-semibold shadow-sm">
                  {concierge.heritageCard.badge}
                </span>
              </div>

              {/* Bottom text overlay */}
              <div className="absolute bottom-6 inset-x-6 z-10">
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-2">
                  {concierge.heritageCard.title}
                </h3>
                <p className="font-body-sm text-xs sm:text-sm text-white/80 leading-relaxed mb-4">
                  {concierge.heritageCard.description}
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white font-label-caps text-[10px] tracking-widest uppercase">
                  {concierge.heritageCard.statusPill}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
