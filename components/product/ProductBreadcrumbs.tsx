"use client";

import Link from "next/link";
import { CollectionItem } from "@/data/collectionsContent";

export default function ProductBreadcrumbs({ item }: { item: CollectionItem }) {
  return (
    <nav className="w-full bg-surface pt-4 sm:pt-6 pb-3 sm:pb-4 border-b border-surface-container-highest overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <ol className="flex items-center gap-1.5 sm:gap-2 font-label-caps text-[9px] sm:text-[11px] uppercase tracking-[0.16em] sm:tracking-[0.2em] text-on-surface-variant overflow-x-auto scrollbar-none whitespace-nowrap py-0.5">
          <li className="shrink-0">
            <Link href="/" className="hover:text-primary transition-colors">
              Archive
            </Link>
          </li>
          <li className="text-secondary/60 shrink-0">/</li>
          <li className="shrink-0">
            <Link href="/collections" className="hover:text-primary transition-colors">
              Collections
            </Link>
          </li>
          <li className="text-secondary/60 shrink-0">/</li>
          <li className="shrink-0">
            <Link
              href={`/collections?category=${item.category}`}
              className="hover:text-primary transition-colors"
            >
              {item.categoryLabel}
            </Link>
          </li>
          <li className="text-secondary/60 shrink-0">/</li>
          <li className="text-primary font-bold truncate max-w-[140px] xs:max-w-[200px] sm:max-w-none shrink-0">
            {item.title}
          </li>
        </ol>
      </div>
    </nav>
  );
}
