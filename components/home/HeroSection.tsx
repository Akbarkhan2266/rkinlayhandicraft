"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IMAGES } from "@/data/content";

export default function HeroSection() {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin pt-space-md lg:pt-space-lg pb-space-xl">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md mb-space-lg">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="font-label-caps text-label-caps text-secondary tracking-[0.24em] uppercase block mb-space-xs">
            Agra, India • Heritage Pietra Dura Atelier
          </span>
          <h1 className="font-headline-lg text-headline-lg lg:text-[4.75rem] text-primary tracking-tight leading-[1.04] italic">
            Marble,
            <br />
            <span className="font-normal not-italic">Crafted Into Art.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-sm max-w-lg">
            Handcrafted marble inlay from Agra, created for timeless interiors
            and architectural spaces across the globe.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-space-sm sm:gap-space-md pt-space-xs lg:pt-0"
        >
          <Link
            className="group inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-full bg-primary text-on-primary hover:bg-secondary transition-all duration-300"
            href="/collections"
          >
            <span className="font-label-md text-label-md uppercase tracking-wider">
              Explore Collections
            </span>
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform duration-300">
              arrow_forward
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Asymmetric 4-Category Composition */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-stretch">
        {/* 01 FLOORS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-7 flex"
        >
          <Link
            href="/collections?category=FLOOR"
            className="group relative w-full bg-surface-container overflow-hidden rounded-xl min-h-[460px] lg:min-h-[580px] flex flex-col justify-end p-space-lg shadow-sm"
          >
            <Image
              src={IMAGES.floor}
              alt="Agra makrana marble floor with intricate pietra dura lapidary medallion"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
            <div className="relative z-10 flex items-end justify-between text-on-primary">
              <div>
                <span className="font-label-caps text-label-caps tracking-[0.2em] uppercase text-secondary-fixed block mb-space-xs">
                  01 / Architectural
                </span>
                <span className="font-headline-md text-headline-md tracking-tight block">
                  Floors &amp; Medallions
                </span>
                <p className="font-body-sm text-body-sm text-surface-container-highest max-w-sm mt-space-xs opacity-90">
                  Palatial central medallions, bespoke tessellations, and floral
                  borders.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed group-hover:translate-x-1 transition-transform duration-300">
                Explore{" "}
                <span className="material-symbols-outlined text-[14px]">
                  arrow_forward
                </span>
              </span>
            </div>
          </Link>
        </motion.div>

        {/* 02 TABLES */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-5 flex"
        >
          <Link
            href="/collections?category=TABLE"
            className="group relative w-full bg-surface-container overflow-hidden rounded-xl min-h-[460px] lg:min-h-[580px] flex flex-col justify-end p-space-lg shadow-sm"
          >
            <Image
              src={IMAGES.table}
              alt="Handcrafted round Pietra Dura marble dining table with malachite and lapis inlays"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/25 to-transparent"></div>
            <div className="relative z-10 flex items-end justify-between text-on-primary">
              <div>
                <span className="font-label-caps text-label-caps tracking-[0.2em] uppercase text-secondary-fixed block mb-space-xs">
                  02 / Furniture
                </span>
                <span className="font-headline-md text-headline-md tracking-tight block">
                  Table Tops &amp; Consoles
                </span>
                <p className="font-body-sm text-body-sm text-surface-container-highest max-w-xs mt-space-xs opacity-90">
                  Dining rounds, centerpieces, and consoles cut from virgin
                  Makrana stone.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed group-hover:translate-x-1 transition-transform duration-300">
                Explore{" "}
                <span className="material-symbols-outlined text-[14px]">
                  arrow_forward
                </span>
              </span>
            </div>
          </Link>
        </motion.div>

        {/* 03 STAIRS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-5 flex"
        >
          <Link
            href="/collections?category=STAIRS"
            className="group relative w-full bg-surface-container overflow-hidden rounded-xl min-h-[420px] lg:min-h-[500px] flex flex-col justify-end p-space-lg shadow-sm"
          >
            <Image
              src={IMAGES.stairs}
              alt="Sculptural marble spiral staircase with gemstone inlays on risers"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/25 to-transparent"></div>
            <div className="relative z-10 flex items-end justify-between text-on-primary">
              <div>
                <span className="font-label-caps text-label-caps tracking-[0.2em] uppercase text-secondary-fixed block mb-space-xs">
                  03 / Sculptural
                </span>
                <span className="font-headline-md text-headline-md tracking-tight block">
                  Stairs &amp; Risers
                </span>
                <p className="font-body-sm text-body-sm text-surface-container-highest max-w-xs mt-space-xs opacity-90">
                  Integrated lapis and malachite risers carved for sweeping
                  helical staircases.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed group-hover:translate-x-1 transition-transform duration-300">
                Explore{" "}
                <span className="material-symbols-outlined text-[14px]">
                  arrow_forward
                </span>
              </span>
            </div>
          </Link>
        </motion.div>

        {/* 04 WALLS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-7 flex"
        >
          <Link
            href="/collections?category=WALLS"
            className="group relative w-full bg-surface-container overflow-hidden rounded-xl min-h-[420px] lg:min-h-[500px] flex flex-col justify-end p-space-lg shadow-sm"
          >
            <Image
              src={IMAGES.wall}
              alt="Monumental handcrafted marble wall panel feature with botanical floral inlay"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
            <div className="relative z-10 flex items-end justify-between text-on-primary">
              <div>
                <span className="font-label-caps text-label-caps tracking-[0.2em] uppercase text-secondary-fixed block mb-space-xs">
                  04 / Vertical Surfaces
                </span>
                <span className="font-headline-md text-headline-md tracking-tight block">
                  Wall Panels &amp; Niches
                </span>
                <p className="font-body-sm text-body-sm text-surface-container-highest max-w-sm mt-space-xs opacity-90">
                  Collector-grade botanical panels inspired by royal Mughal
                  alcoves and architraves.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed group-hover:translate-x-1 transition-transform duration-300">
                Explore{" "}
                <span className="material-symbols-outlined text-[14px]">
                  arrow_forward
                </span>
              </span>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
