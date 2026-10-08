"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import { IMAGES, EXCELLENCE_POINTS } from "@/data/content";

export default function WhyRkInlaySection() {
  return (
    <section className="w-full bg-surface py-space-xl lg:py-28 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          {/* Visual feature with artisan at work */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] rounded-xl overflow-hidden bg-surface-container relative shadow-md">
              <Image
                src={IMAGES.working}
                alt="Agra master lapidary artisan hand-carving intricate Pietra Dura marble inlay"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 hidden sm:block bg-surface-container-low p-space-md rounded-lg shadow-xl max-w-xs border border-surface-container-highest"
            >
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block">
                Atelier Certificate
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Every architectural commission is serialized and accompanied by
                mineral authenticity certification.
              </p>
            </motion.div>
          </motion.div>

          {/* Editorial numbered list */}
          <div className="lg:col-span-7 lg:pl-space-lg mt-space-lg lg:mt-0">
            <FadeIn>
              <span className="font-label-caps text-label-caps uppercase tracking-[0.24em] text-secondary block mb-space-xs">
                The Standard of Excellence
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mb-space-lg">
                Craftsmanship You Can See.
              </h2>
            </FadeIn>

            <div className="space-y-space-md">
              {EXCELLENCE_POINTS.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`py-space-sm ${
                    idx !== EXCELLENCE_POINTS.length - 1
                      ? "border-b border-surface-container-highest/60"
                      : ""
                  }`}
                >
                  <span className="font-label-caps text-label-caps text-secondary block mb-1">
                    {point.index}
                  </span>
                  <h4 className="font-headline-sm text-headline-sm text-primary mb-1">
                    {point.title}
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {point.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
