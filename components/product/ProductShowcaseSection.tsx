"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CollectionItem } from "@/data/collectionsContent";

export default function ProductShowcaseSection({ item }: { item: CollectionItem }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedDimension, setSelectedDimension] = useState(0);
  const [selectedMaterial, setSelectedMaterial] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [origin] = useState(() => (typeof window !== "undefined" ? window.location.origin : ""));

  const currentImage = item.gallery[selectedImageIndex] || {
    url: item.image,
    label: "01. PRIMARY PERSPECTIVE",
  };

  const selectedDim = item.dimensions?.[selectedDimension];
  const selectedMat = item.materials?.[selectedMaterial];
  const fullImageUrl = origin ? `${origin}${currentImage.url}` : currentImage.url;

  const whatsappInquiryMessage = `*RK INLAY ATELIER - COMMISSION INQUIRY*
━━━━━━━━━━━━━━━━━━━━━
*Piece:* ${item.title}
*Archive Record:* ${item.archiveRecord}
*Category:* ${item.categoryLabel}
${selectedDim ? `*Selected Dimensions:* ${selectedDim.label} (${selectedDim.sublabel})` : ""}
${selectedMat ? `*Selected Marble Base:* ${selectedMat.name} (${selectedMat.subtext})` : ""}
*Benchmark Price:* ${item.price}
*Selected View:* ${currentImage.label}
*Image Reference:* ${fullImageUrl}
━━━━━━━━━━━━━━━━━━━━━
Hello RK Inlay, I am inquiring about commissioning this piece with the exact specifications and image reference above. Please provide delivery lead time, custom sizing options, and booking details.`;

  const whatsappInquiryUrl = `https://wa.me/917351586553?text=${encodeURIComponent(whatsappInquiryMessage)}`;

  return (
    <section className="w-full bg-surface py-6 sm:py-10 lg:py-16">
      <div className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* ================= LEFT COLUMN: IMAGERY & CERTIFICATION ================= */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-6">
            {/* Main Stage Image - Enlarged for mobile with aspect-[4/5] */}
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[16/11] w-full rounded-2xl overflow-hidden shadow-xl border border-surface-container-highest bg-surface-container group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage.url}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={currentImage.url}
                    alt={`${item.title} - ${currentImage.label}`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className={`object-cover transition-transform duration-700 ${
                      isZoomed ? "scale-150 cursor-zoom-out" : "group-hover:scale-105 cursor-zoom-in"
                    }`}
                    onClick={() => setIsZoomed(!isZoomed)}
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/25 pointer-events-none" />

              {/* Masterpiece Edition Tag top-left */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10 flex flex-wrap gap-2 max-w-[80%]">
                <span className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 font-label-caps text-[9px] sm:text-[10px] tracking-[0.16em] sm:tracking-[0.2em] uppercase text-white font-semibold shadow-xs">
                  {item.editionBadge}
                </span>
              </div>

              {/* Top-right Material Spec Tag (Tablet & Desktop) */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 hidden sm:block">
                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-black/10 font-label-caps text-[9px] tracking-wider uppercase text-primary font-bold shadow-xs">
                  MAKRANA GRADE-A • 98.6% CALCITE
                </span>
              </div>

              {/* Bottom Interactive Bar */}
              <div className="absolute bottom-3 sm:bottom-4 inset-x-3 sm:inset-x-4 z-10 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <button
                    onClick={() => setIsZoomed(!isZoomed)}
                    className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white hover:bg-black/95 transition-colors font-label-caps text-[9px] sm:text-[10px] tracking-wider uppercase cursor-pointer shadow-xs"
                    aria-label="Toggle zoom"
                  >
                    <span className="material-symbols-outlined text-[14px] sm:text-[16px]">
                      {isZoomed ? "zoom_out" : "zoom_in"}
                    </span>
                    <span>{isZoomed ? "RESET" : "ZOOM"}</span>
                  </button>

                  <a
                    href={`https://wa.me/917351586553?text=${encodeURIComponent(
                      `Hello RK Inlay, please send 1:1 scale CAD (.DWG) drawing for ${item.title} (${item.archiveRecord}). Image reference: ${fullImageUrl}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white hover:bg-black/95 transition-colors font-label-caps text-[9px] sm:text-[10px] tracking-wider uppercase shadow-xs"
                  >
                    <span className="material-symbols-outlined text-[14px] sm:text-[16px]">
                      architecture
                    </span>
                    <span>1:1 CAD</span>
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-sans text-[11px] text-white/80 font-medium hidden md:inline truncate max-w-[200px]">
                    {currentImage.label}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white/90 font-label-caps text-[9px] sm:text-[10px] uppercase tracking-wider font-medium shrink-0">
                    {selectedImageIndex + 1} / {item.gallery?.length || 1}
                  </span>
                </div>
              </div>
            </div>

            {/* Thumbnail Switcher (Clean responsive horizontal strip) */}
            {item.gallery && item.gallery.length > 1 && (
              <div className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto pb-1 scrollbar-none w-full">
                {item.gallery.map((img, idx) => {
                  const isSelected = selectedImageIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedImageIndex(idx);
                        setIsZoomed(false);
                      }}
                      className={`relative flex-1 min-w-[85px] sm:min-w-0 sm:flex-initial sm:w-28 aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all duration-300 text-left group cursor-pointer shrink-0 ${
                        isSelected
                          ? "border-secondary ring-2 ring-secondary/30 shadow-md scale-[1.02]"
                          : "border-surface-container-highest opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img.url}
                        alt={img.label}
                        fill
                        sizes="(max-width: 640px) 30vw, 15vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-1.5 inset-x-1.5 z-10">
                        <span className="font-label-caps text-[8px] sm:text-[9px] uppercase tracking-wider text-white font-semibold truncate block">
                          {img.label}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Certified Parchin Kari Lapidary Art Guarantee Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-surface-container-low border border-surface-container-highest shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-secondary/15 flex items-center justify-center shrink-0 mt-0.5 text-secondary">
                  <span className="material-symbols-outlined text-[18px] sm:text-[20px]">
                    verified
                  </span>
                </span>
                <div>
                  <h4 className="font-serif text-sm sm:text-base text-primary font-bold tracking-tight">
                    Certified Parchin Kari Lapidary Art
                  </h4>
                  <p className="font-body-sm text-[11px] sm:text-xs text-on-surface-variant mt-0.5 leading-relaxed">
                    Authenticated under Master Lapidary Guild of Agra &amp; UNESCO Craft Intangible Heritage parameters.
                  </p>
                </div>
              </div>

              <span className="px-2.5 py-1 rounded-full bg-secondary-fixed text-secondary font-label-caps text-[9px] sm:text-[10px] uppercase tracking-widest font-bold shrink-0 self-start sm:self-auto">
                GI REGISTERED
              </span>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: SPECS, PRICING & INQUIRY ================= */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Status Header Badge & Archive Record */}
              <div className="flex flex-wrap items-center gap-2 mb-2.5">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-secondary/10 border border-secondary/20 font-label-caps text-[9px] sm:text-[10px] tracking-[0.16em] uppercase text-secondary font-bold">
                  MADE TO ORDER • TAJGANJ, AGRA
                </span>
                <span className="font-label-caps text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">
                  RECORD • {item.archiveRecord}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-primary tracking-tight leading-[1.14] mb-2 sm:mb-3">
                {item.title}
              </h1>

              <p className="font-serif italic text-sm sm:text-base lg:text-lg text-secondary leading-relaxed mb-5 sm:mb-6">
                {item.italicSubtitle}
              </p>

              {/* Atelier Commission Benchmark Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-surface-container-low border border-surface-container-highest shadow-xs mb-5 sm:mb-6">
                <div className="flex items-center justify-between pb-2 border-b border-surface-container-highest mb-2.5 gap-2">
                  <span className="font-label-caps text-[9px] sm:text-[10px] tracking-[0.18em] uppercase text-secondary font-bold">
                    ATELIER BENCHMARK
                  </span>
                  <span className="font-label-caps text-[9px] sm:text-[10px] uppercase tracking-wider text-on-surface-variant font-medium">
                    GLOBAL FREIGHT
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mb-1.5 flex-wrap">
                  <span className="font-serif text-2xl sm:text-3xl lg:text-4xl text-primary font-normal">
                    {item.price}
                  </span>
                  <span className="font-sans text-[11px] sm:text-xs text-on-surface-variant">
                    onwards (Ex-Agra Studio)
                  </span>
                </div>

                <p className="font-body-sm text-[11px] sm:text-xs text-on-surface-variant leading-relaxed">
                  {item.priceNote}
                </p>
              </div>

              {/* Diameter & Seating Capacity Selector */}
              {item.dimensions && item.dimensions.length > 0 && (
                <div className="mb-5 sm:mb-6">
                  <div className="flex items-center justify-between pb-2 border-b border-surface-container-highest mb-2.5 gap-2">
                    <span className="font-label-caps text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-secondary font-bold">
                      DIAMETER &amp; SEATING CAPACITY
                    </span>
                    <span className="font-sans text-[11px] text-on-surface-variant hidden xs:inline">
                      Standard Height: 76 cm (30 in)
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {item.dimensions.map((dim, idx) => {
                      const isSelected = selectedDimension === idx;
                      return (
                        <button
                          key={idx}
                          onClick={() => setSelectedDimension(idx)}
                          className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                            isSelected
                              ? "bg-surface-container border-primary shadow-xs ring-1 ring-primary/20"
                              : "bg-surface border-surface-container-highest hover:border-secondary"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-0.5">
                            <span className="font-serif text-sm font-bold text-primary">
                              {dim.label}
                            </span>
                            <span className="font-label-caps text-[9px] uppercase tracking-wider text-secondary font-semibold">
                              {dim.sublabel}
                            </span>
                          </div>
                          {dim.capacity && (
                            <span className="font-sans text-[11px] text-on-surface-variant block">
                              {dim.capacity}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Marble Substrate Base Selector */}
              {item.materials && item.materials.length > 0 && (
                <div className="mb-5 sm:mb-6">
                  <span className="font-label-caps text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-secondary font-bold block mb-2.5">
                    MARBLE SUBSTRATE BASE
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {item.materials.map((mat, idx) => {
                      const isSelected = selectedMaterial === idx;
                      return (
                        <button
                          key={idx}
                          onClick={() => setSelectedMaterial(idx)}
                          className={`p-2.5 sm:p-3 rounded-xl border flex items-center gap-2.5 sm:gap-3 transition-all duration-200 cursor-pointer text-left ${
                            isSelected
                              ? "bg-surface-container border-primary shadow-xs ring-1 ring-primary/20"
                              : "bg-surface border-surface-container-highest hover:border-secondary"
                          }`}
                        >
                          <span
                            className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg border border-neutral-300 shadow-xs shrink-0"
                            style={{ backgroundColor: mat.colorHex }}
                          />
                          <div className="min-w-0">
                            <span className="font-label-caps text-[10px] uppercase tracking-wider text-primary font-bold block truncate">
                              {mat.name}
                            </span>
                            <span className="font-sans text-[11px] text-on-surface-variant block truncate">
                              {mat.subtext}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Material & Craftsmanship Bullet Points */}
              <div className="space-y-2.5 sm:space-y-3 mb-6 p-3.5 sm:p-4 rounded-xl bg-surface-container-low border border-surface-container-highest">
                {item.bulletPoints.map((bp, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-secondary text-[16px] shrink-0 mt-0.5">
                      verified
                    </span>
                    <span className="font-body-sm text-xs sm:text-[13px] text-on-surface-variant leading-relaxed">
                      {bp}
                    </span>
                  </div>
                ))}
              </div>

              {/* Primary Action Buttons */}
              <div className="space-y-2.5 sm:space-y-3 mb-5">
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 sm:py-4 rounded-full bg-primary text-on-primary hover:bg-secondary hover:text-on-secondary transition-all duration-300 shadow-md group cursor-pointer"
                >
                  <svg
                    className="w-4 h-4 fill-current shrink-0 group-hover:scale-110 transition-transform"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2ZM12.04 3.67C14.24 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.67 20.16 9.32 19.8 8.14 19.11L7.86 18.94L4.74 19.76L5.57 16.72L5.38 16.42C4.62 15.21 4.22 13.82 4.22 11.91C4.22 7.37 7.92 3.67 12.04 3.67ZM16.57 14.28C16.32 14.16 15.1 13.56 14.87 13.48C14.65 13.4 14.48 13.36 14.32 13.6C14.16 13.85 13.69 14.4 13.54 14.56C13.4 14.73 13.25 14.75 13 14.63C12.75 14.5 11.97 14.25 11.04 13.42C10.32 12.78 9.83 11.98 9.69 11.73C9.55 11.49 9.68 11.35 9.8 11.23C9.91 11.12 10.05 10.94 10.17 10.8C10.3 10.65 10.34 10.55 10.42 10.39C10.5 10.22 10.46 10.08 10.4 9.96C10.34 9.83 9.85 8.63 9.64 8.13C9.44 7.64 9.24 7.71 9.09 7.7C8.95 7.69 8.78 7.69 8.62 7.69C8.45 7.69 8.18 7.75 7.95 8C7.73 8.25 7.09 8.84 7.09 10.06C7.09 11.27 7.98 12.44 8.1 12.6C8.22 12.77 9.83 15.25 12.3 16.31C12.89 16.56 13.34 16.71 13.7 16.83C14.29 17.02 14.83 16.99 15.26 16.93C15.74 16.86 16.74 16.32 16.95 15.73C17.15 15.15 17.15 14.65 17.09 14.55C17.03 14.44 16.88 14.38 16.57 14.28Z"
                    />
                  </svg>
                  <span className="font-label-caps text-xs sm:text-[13px] tracking-wider uppercase font-bold text-center">
                    Enquire on WhatsApp (+91 7351586553)
                  </span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>

               
              </div>

              {/* Direct Concierge Line */}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
