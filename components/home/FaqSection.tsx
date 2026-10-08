"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import { FAQS } from "@/data/content";

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="w-full bg-surface py-space-xl lg:py-28" id="faq">
      <div className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <FadeIn className="lg:col-span-4">
            <span className="font-label-caps text-label-caps uppercase tracking-[0.24em] text-secondary block mb-space-xs">
              Concierge Information
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              Questions, Answered.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs mb-space-md">
              Before commissioning, review how we deliver bespoke marble
              craftsmanship worldwide with secure white-glove logistics.
            </p>
            <a
              className="inline-flex items-center gap-space-xs font-label-md text-label-md uppercase tracking-wider text-secondary hover:text-primary transition-colors"
              href="https://wa.me/917351586553?text=Hello%20RK%20Inlay%2C%20I%20have%20a%20question%20regarding%20marble%20inlay%20commissions."
              rel="noopener noreferrer"
              target="_blank"
            >
              Ask an Atelier Specialist{" "}
              <span className="material-symbols-outlined text-[16px]">
                arrow_forward
              </span>
            </a>
          </FadeIn>

          <div className="lg:col-span-8 space-y-space-sm">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  onClick={() => toggleFaq(index)}
                  className="bg-surface-container-low rounded-lg p-space-md cursor-pointer transition-colors duration-200 border border-surface-container-highest/40 hover:bg-surface-container"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-headline-sm text-headline-sm text-primary tracking-tight pr-4">
                      {faq.question}
                    </h4>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="material-symbols-outlined text-secondary"
                    >
                      {isOpen ? "remove" : "add"}
                    </motion.span>
                  </div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-space-sm text-on-surface-variant font-body-md text-body-md max-w-2xl">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
