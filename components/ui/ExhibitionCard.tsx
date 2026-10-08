"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExhibitionPiece } from "@/types";

interface ExhibitionCardProps {
  piece: ExhibitionPiece;
}

export default function ExhibitionCard({ piece }: ExhibitionCardProps) {
  const detailUrl = piece.slug
    ? `/collections/${piece.slug}`
    : `/collections?category=${piece.category}`;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-surface-container-low rounded-lg p-space-md flex flex-col justify-between hover:bg-surface-container transition-all duration-300 border border-surface-container-highest/30 shadow-sm"
    >
      <div>
        <Link href={detailUrl} className="block aspect-square w-full overflow-hidden rounded bg-surface relative mb-space-md">
          <Image
            src={piece.image}
            alt={piece.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <span className="absolute top-space-sm left-space-sm px-2 py-0.5 bg-surface/90 backdrop-blur font-label-caps text-label-caps tracking-widest uppercase text-primary">
            {piece.category}
          </span>
        </Link>

        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block">
          {piece.spec}
        </span>
        <h3 className="font-headline-sm text-headline-sm text-primary tracking-tight mt-1 mb-2">
          <Link href={detailUrl} className="hover:text-secondary transition-colors">
            {piece.title}
          </Link>
        </h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
          {piece.desc}
        </p>
      </div>

      <div className="pt-space-sm flex items-center justify-between border-t border-surface-container-highest/30 gap-2">
        <span className="font-label-md text-label-md text-primary font-medium">
          {piece.price}
        </span>
        <Link
          href={detailUrl}
          className="inline-flex items-center gap-1 font-label-caps text-label-caps uppercase tracking-widest text-secondary hover:text-primary transition-colors font-semibold"
        >
          View Details
          <span className="material-symbols-outlined text-[14px]">
            arrow_forward
          </span>
        </Link>
      </div>
    </motion.article>
  );
}
