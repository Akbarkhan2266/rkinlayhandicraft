"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import { IMAGES } from "@/data/content";

export default function CollectionsSpreadsSection() {
  return (
    <section
      className="w-full bg-surface-container-low py-space-xl lg:py-28"
      id="collections"
    >
      <div className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <FadeIn className="text-center max-w-xl mx-auto mb-space-xl">
          <span className="font-label-caps text-label-caps uppercase tracking-[0.24em] text-secondary block mb-space-xs">
            Architectural Expressions
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
            Four Expressions of Marble.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
            Every category represents centuries of specialized lapidary
            technique adapted for contemporary high architecture.
          </p>
        </FadeIn>

        <div className="space-y-24">
          {/* 01 FLOORS: Image Left, Text Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center"
            id="collection-floors"
          >
            <div className="lg:col-span-7 overflow-hidden rounded-xl bg-surface-container-high aspect-[16/10] relative group shadow-sm">
              <Image
                src={IMAGES.floor}
                alt="Sprawling Makrana marble palace floor with central Pietra Dura medallion"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 bg-primary/80 backdrop-blur px-3 py-1.5 rounded text-on-primary font-label-caps text-label-caps tracking-widest uppercase">
                Residence • New Delhi
              </div>
            </div>
            <div className="lg:col-span-5 lg:pl-space-md">
              <span className="font-label-caps text-label-caps uppercase tracking-[0.22em] text-secondary block mb-space-xs">
                01 / ARCHITECTURAL FLOORING
              </span>
              <h3 className="font-headline-md text-headline-md text-primary tracking-tight leading-snug">
                Intricate marble surfaces designed to transform interiors.
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm mb-space-md">
                From grand central medallions measuring over five meters to
                repeating perimeter tessellations, our flooring installations
                are cut and assembled with zero-grout lapidary alignment. Crafted
                using Makrana white marble, emerald malachite, and lapis lazuli.
              </p>
              <div className="space-y-space-xs py-space-sm mb-space-md">
                <div className="flex justify-between font-body-sm text-body-sm py-1 border-b border-surface-container-highest">
                  <span className="text-on-surface-variant">
                    Recommended Scale
                  </span>
                  <span className="text-primary font-medium">
                    Grand Foyers, Living Salons, Courtyards
                  </span>
                </div>
                <div className="flex justify-between font-body-sm text-body-sm py-1 border-b border-surface-container-highest">
                  <span className="text-on-surface-variant">
                    Base Substrate
                  </span>
                  <span className="text-primary font-medium">
                    Makrana Pure White Marble (Grade A)
                  </span>
                </div>
              </div>
              <Link
                className="inline-flex items-center gap-space-xs font-label-md text-label-md uppercase tracking-wider text-primary hover:text-secondary transition-colors"
                href="/collections?category=FLOOR"
              >
                Explore Flooring Collection{" "}
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </motion.div>

          {/* 02 TABLES: Text Left, Image Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center"
            id="collection-tables"
          >
            <div className="lg:col-span-5 lg:pr-space-md order-2 lg:order-1">
              <span className="font-label-caps text-label-caps uppercase tracking-[0.22em] text-secondary block mb-space-xs">
                02 / PIETRA DURA TABLES
              </span>
              <h3 className="font-headline-md text-headline-md text-primary tracking-tight leading-snug">
                Functional furniture elevated with handcrafted stone inlay.
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm mb-space-md">
                Our round dining tables and console surfaces present
                museum-calibre bouquets chiseled directly into solid marble
                slabs. Each table top requires up to 1,200 individual gemstone
                petals, each ground to less than a hair&apos;s width.
              </p>
              <div className="space-y-space-xs py-space-sm mb-space-md">
                <div className="flex justify-between font-body-sm text-body-sm py-1 border-b border-surface-container-highest">
                  <span className="text-on-surface-variant">
                    Gemstone Palette
                  </span>
                  <span className="text-primary font-medium">
                    Lapis, Malachite, Jasper, Coral, Agate
                  </span>
                </div>
                <div className="flex justify-between font-body-sm text-body-sm py-1 border-b border-surface-container-highest">
                  <span className="text-on-surface-variant">Dimensions</span>
                  <span className="text-primary font-medium">
                    Custom 24&quot; to 84&quot; Diameter
                  </span>
                </div>
              </div>
              <Link
                className="inline-flex items-center gap-space-xs font-label-md text-label-md uppercase tracking-wider text-primary hover:text-secondary transition-colors"
                href="/collections?category=TABLE"
              >
                Explore Table Tops{" "}
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="lg:col-span-7 overflow-hidden rounded-xl bg-surface-container-high aspect-[16/10] relative group order-1 lg:order-2 shadow-sm">
              <Image
                src={IMAGES.table}
                alt="Handcrafted round Pietra Dura marble dining table with malachite and lapis inlays"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 bg-primary/80 backdrop-blur px-3 py-1.5 rounded text-on-primary font-label-caps text-label-caps tracking-widest uppercase">
                Penthouse Saloon • Mumbai
              </div>
            </div>
          </motion.div>

          {/* 03 STAIRS: Image Left, Text Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center"
            id="collection-stairs"
          >
            <div className="lg:col-span-7 overflow-hidden rounded-xl bg-surface-container-high aspect-[16/10] relative group shadow-sm">
              <Image
                src={IMAGES.stairs}
                alt="Sculptural marble spiral staircase with gemstone inlays on risers"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 bg-primary/80 backdrop-blur px-3 py-1.5 rounded text-on-primary font-label-caps text-label-caps tracking-widest uppercase">
                Private Villa • Dubai
              </div>
            </div>
            <div className="lg:col-span-5 lg:pl-space-md">
              <span className="font-label-caps text-label-caps uppercase tracking-[0.22em] text-secondary block mb-space-xs">
                03 / STAIRS &amp; RISERS
              </span>
              <h3 className="font-headline-md text-headline-md text-primary tracking-tight leading-snug">
                Architectural details where craftsmanship meets structure.
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm mb-space-md">
                Helical and straight architectural staircases custom-cut with
                continuous inlaid gemstone ribbons on vertical risers. Designed
                in coordination with leading architects to incorporate
                concealed linear warm LED channels.
              </p>
              <div className="space-y-space-xs py-space-sm mb-space-md">
                <div className="flex justify-between font-body-sm text-body-sm py-1 border-b border-surface-container-highest">
                  <span className="text-on-surface-variant">Engineering</span>
                  <span className="text-primary font-medium">
                    Laser-measured helical curved treads
                  </span>
                </div>
                <div className="flex justify-between font-body-sm text-body-sm py-1 border-b border-surface-container-highest">
                  <span className="text-on-surface-variant">Finish</span>
                  <span className="text-primary font-medium">
                    Honed anti-slip tread with mirror-polished risers
                  </span>
                </div>
              </div>
              <Link
                className="inline-flex items-center gap-space-xs font-label-md text-label-md uppercase tracking-wider text-primary hover:text-secondary transition-colors"
                href="/collections?category=STAIRS"
              >
                Explore Staircase Suites{" "}
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </motion.div>

          {/* 04 WALLS: Text Left, Image Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center"
            id="collection-walls"
          >
            <div className="lg:col-span-5 lg:pr-space-md order-2 lg:order-1">
              <span className="font-label-caps text-label-caps uppercase tracking-[0.22em] text-secondary block mb-space-xs">
                04 / WALL PANELS &amp; NICHES
              </span>
              <h3 className="font-headline-md text-headline-md text-primary tracking-tight leading-snug">
                Statement marble panels and decorative surfaces.
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm mb-space-md">
                Designed as permanent architectural frescoes, our vertical
                marble panels feature classical floral vases, arabesque
                medallions, and symmetrical Mughal alcove borders carved into
                pure black Belgian stone and Makrana marble.
              </p>
              <div className="space-y-space-xs py-space-sm mb-space-md">
                <div className="flex justify-between font-body-sm text-body-sm py-1 border-b border-surface-container-highest">
                  <span className="text-on-surface-variant">Mounting</span>
                  <span className="text-primary font-medium">
                    Concealed French cleat or flush masonry setting
                  </span>
                </div>
                <div className="flex justify-between font-body-sm text-body-sm py-1 border-b border-surface-container-highest">
                  <span className="text-on-surface-variant">Thickness</span>
                  <span className="text-primary font-medium">
                    18mm to 30mm solid natural slab
                  </span>
                </div>
              </div>
              <Link
                className="inline-flex items-center gap-space-xs font-label-md text-label-md uppercase tracking-wider text-primary hover:text-secondary transition-colors"
                href="/collections?category=WALLS"
              >
                Explore Wall Panels{" "}
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="lg:col-span-7 overflow-hidden rounded-xl bg-surface-container-high aspect-[16/10] relative group order-1 lg:order-2 shadow-sm">
              <Image
                src={IMAGES.wall}
                alt="Agra Fort botanical wall panel in black and white marble"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 bg-primary/80 backdrop-blur px-3 py-1.5 rounded text-on-primary font-label-caps text-label-caps tracking-widest uppercase">
                Hôtel Particulier • Paris
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
