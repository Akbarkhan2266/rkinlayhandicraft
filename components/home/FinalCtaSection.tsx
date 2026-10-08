"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { IMAGES } from "@/data/content";

export default function FinalCtaSection() {
  return (
    <section
      className="w-full bg-primary text-on-primary py-space-xl lg:py-24"
      id="contact"
    >
      <div className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <FadeIn className="bg-primary-container rounded-2xl p-space-lg lg:p-space-xl overflow-hidden relative border border-white/5 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-7">
              <span className="font-label-caps text-label-caps uppercase tracking-[0.24em] text-secondary-fixed block mb-space-xs">
                Private Commission
              </span>
              <h2 className="font-headline-lg text-headline-lg lg:text-[3.25rem] text-on-primary tracking-tight italic leading-tight">
                Bring Marble Into
                <br />
                <span className="not-italic font-normal">Your Space.</span>
              </h2>
              <p className="font-body-md text-body-md text-tertiary-fixed-dim mt-space-sm mb-space-lg max-w-lg leading-relaxed">
                Explore our complete collection or speak directly with our
                design atelier about commissioning an heirloom piece tailored to
                your architectural blueprints.
              </p>
              <div className="flex flex-wrap items-center gap-space-sm">
                <Link
                  className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-full bg-secondary-fixed text-on-secondary-fixed hover:bg-surface transition-all duration-300 font-label-md text-label-md uppercase tracking-wider font-semibold"
                  href="/collections"
                >
                  Explore Collections{" "}
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </Link>
                <a
                  className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-full bg-white text-primary hover:bg-[#25D366] hover:text-white transition-all duration-300 font-label-md text-label-md uppercase tracking-wider font-semibold"
                  href="https://wa.me/917351586553?text=Hello%20RK%20Inlay%2C%20I%20would%20like%20to%20enquire%20about%20your%20marble%20inlay%20collections."
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    chat
                  </span>
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 mt-space-md lg:mt-0">
              <div className="aspect-square rounded-xl overflow-hidden bg-primary/40 relative shadow-2xl">
                <Image
                  src={IMAGES.wall}
                  alt="Agra Fort botanical wall panel showcase"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed">
                    Atelier RK Inlay • Agra, India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
