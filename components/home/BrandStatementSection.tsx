"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

export default function BrandStatementSection() {
  return (
    <section className="w-full bg-surface-container-low py-space-xl lg:py-32">
      <div className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="material-symbols-outlined text-secondary text-[36px] mb-space-sm">
              diamond
            </span>
          </motion.div>
          <FadeIn delay={0.1}>
            <blockquote className="font-headline-lg text-headline-lg lg:text-[3.25rem] text-primary tracking-tight leading-[1.2] italic mb-space-md">
              “From the marble workshops of Agra to spaces that deserve
              something timeless.”
            </blockquote>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              RK Inlay Handicraft combines centuries of Agra lapidary heritage
              with contemporary architectural sensibilities to create marble
              pieces that endure for generations without loss of brilliance.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
