"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CONTACT_CONTENT } from "@/data/contactContent";

export default function ExemplarsInResidenceSection() {
  const { exemplars } = CONTACT_CONTENT;

  return (
    <section className="w-full bg-surface py-16 lg:py-24 border-b border-surface-container-highest">
      <div className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12 lg:mb-16">
          <div className="lg:col-span-6">
            <span className="font-label-caps text-label-caps uppercase tracking-[0.22em] text-secondary font-semibold block mb-2">
              {exemplars.kicker}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary tracking-tight leading-[1.12]">
              {exemplars.heading}
            </h2>
          </div>

          <div className="lg:col-span-6">
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
              {exemplars.description}
            </p>
          </div>
        </div>

        {/* 2 Big Exemplar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {exemplars.pieces.map((piece, idx) => (
            <motion.div
              key={piece.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.7,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col rounded-2xl bg-surface-container-low border border-surface-container-highest overflow-hidden shadow-sm group hover:shadow-md transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-surface-container">
                <Image
                  src={piece.image}
                  alt={piece.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-surface-container-highest mb-4">
                    <span className="font-label-caps text-[10px] tracking-[0.2em] uppercase text-secondary font-semibold">
                      {piece.category}
                    </span>
                    <span className="font-sans text-[11px] uppercase tracking-wider text-on-surface-variant font-medium">
                      {piece.location}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-primary font-normal tracking-tight mb-3">
                    {piece.title}
                  </h3>

                  <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-6">
                    {piece.description}
                  </p>
                </div>

                {/* Bottom Spec & Action */}
                <div className="pt-4 border-t border-surface-container-highest flex items-center justify-between gap-4">
                  <span className="font-label-caps text-[11px] uppercase tracking-widest text-primary font-semibold">
                    {piece.dimension}
                  </span>

                  <a
                    href={`https://wa.me/917351586553?text=${piece.inquiryMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-label-caps text-[11px] uppercase tracking-widest text-secondary hover:text-primary font-bold group/link transition-colors"
                  >
                    <span>Inquire Piece</span>
                    <span className="material-symbols-outlined text-[15px] group-hover/link:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
