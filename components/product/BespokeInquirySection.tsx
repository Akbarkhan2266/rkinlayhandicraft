"use client";

import { motion } from "framer-motion";
import { CollectionItem } from "@/data/collectionsContent";

export default function BespokeInquirySection({ item }: { item: CollectionItem }) {
  return (
    <section className="w-full bg-surface py-20 lg:py-28 border-t border-surface-container-highest">
      <div className="w-full max-w-4xl mx-auto px-margin-mobile lg:px-margin text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-label-caps text-label-caps uppercase tracking-[0.24em] text-secondary font-semibold block mb-3">
            BESPOKE ARCHITECTURAL ADVISORY
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl text-primary tracking-tight leading-[1.15] mb-4 sm:mb-5">
            Require Specific Dimensions or
            <br />
            <span className="italic font-normal text-secondary">
              Bespoke Crest Inlays?
            </span>
          </h2>

          <p className="font-body-md text-sm sm:text-base lg:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8">
            We collaborate directly with interior designers, architects, and collectors to craft
            bespoke heirloom pieces tailored to your exact floorplan drawings.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href={`https://wa.me/917351586553?text=Hello%20RK%20Inlay%2C%20I%20would%20like%20to%20initiate%20a%20bespoke%20commission%20similar%20to%20${encodeURIComponent(item.title)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-primary text-on-primary hover:bg-secondary hover:text-on-secondary transition-all duration-300 shadow-md group cursor-pointer text-xs font-label-caps tracking-wider uppercase font-bold"
            >
              <span className="material-symbols-outlined text-[18px]">
                architecture
              </span>
              <span>Initiate Bespoke Commission</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>

            <a
              href={`mailto:akhan656500@gmail.com?subject=Architectural%20Inquiry%20-%20${encodeURIComponent(item.title)}&body=Hello%20RK%20Inlay%20Atelier%2C%0A%0AI%20would%20like%20to%20share%20architectural%20drawings%20for%20a%20custom%20commission.`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-full bg-surface-container border border-surface-container-highest text-primary hover:bg-surface-container-high transition-colors duration-200 font-label-caps text-xs tracking-wider uppercase font-semibold"
            >
              <span className="material-symbols-outlined text-[16px] text-secondary">
                mail
              </span>
              <span>Email Architectural Plans</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
