"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CONTACT_CONTENT } from "@/data/contactContent";

export default function TajganjMapSection() {
  const { map } = CONTACT_CONTENT;

  return (
    <section className="w-full bg-surface py-16 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl bg-surface-container-low border border-surface-container-highest p-6 sm:p-8 lg:p-12 shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Historical Context & Directions */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="font-label-caps text-label-caps uppercase tracking-[0.24em] text-secondary font-semibold block mb-2">
                  {map.kicker}
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary tracking-tight leading-[1.12] mb-4">
                  {map.heading}
                </h2>

                <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed mb-6">
                  {map.description}
                </p>

                {/* Proximity Bullets */}
                <div className="space-y-3.5 mb-8">
                  {map.points.map((pt, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-secondary/15 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-secondary text-[14px]">
                          {pt.icon}
                        </span>
                      </div>
                      <span className="font-sans text-xs sm:text-sm text-primary font-medium">
                        {pt.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={map.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-on-primary hover:bg-secondary hover:text-on-secondary transition-all duration-300 shadow-xs group"
                >
                  <span className="material-symbols-outlined text-[16px] group-hover:rotate-45 transition-transform duration-300">
                    near_me
                  </span>
                  <span className="font-label-caps text-[11px] uppercase tracking-wider font-semibold">
                    Get Detailed Directions
                  </span>
                </a>

                <a
                  href={`tel:${map.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-surface-container-highest text-primary hover:border-secondary hover:text-secondary transition-all duration-300 shadow-xs"
                >
                  <span className="material-symbols-outlined text-[16px] text-secondary">
                    call
                  </span>
                  <span className="font-sans text-xs font-semibold tracking-wider">
                    {map.phone}
                  </span>
                </a>
              </div>
            </div>

            {/* Right Column: Styled Agra & Tajganj Cartographic Map with Marker Card */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-2xl overflow-hidden shadow-lg border-2 border-surface-container-highest bg-[#f6f3eb]">
                <Image
                  src={map.mapImage}
                  alt="Tajganj Agra Workshop Location Map"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />

                {/* Subtle vignette border */}
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 pointer-events-none" />

                {/* Floating Atelier Location Card */}
                <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-10 max-w-[270px] sm:max-w-[300px]">
                  <div className="p-4 sm:p-5 rounded-xl bg-white/95 backdrop-blur-md border border-neutral-300 shadow-xl flex flex-col items-center text-center">
                    {/* Pin Icon with animated pulse */}
                    <div className="relative mb-2 flex items-center justify-center">
                      <span className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                        <span className="material-symbols-outlined text-[20px]">
                          location_on
                        </span>
                      </span>
                    </div>

                    <h4 className="font-serif text-base sm:text-lg text-primary font-bold tracking-tight">
                      {map.pinTitle}
                    </h4>

                    <p className="font-sans text-[11px] sm:text-xs text-neutral-600 mt-1 mb-2.5">
                      {map.pinAddress}
                    </p>

                    <span className="px-2.5 py-1 rounded-full bg-secondary-fixed text-secondary font-label-caps text-[9px] uppercase tracking-wider font-bold">
                      {map.pinHours}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
