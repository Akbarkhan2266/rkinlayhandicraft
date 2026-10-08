"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isCollections = pathname === "/collections";
  const isAbout = pathname === "/about";
  const isContact = pathname === "/contact";

  return (
    <header className="fixed top-0 inset-x-0 w-full z-50 bg-surface/85 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-2 md:gap-gutter">
        {/* Mobile Left: Menu Toggle Button */}
        <div className="flex items-center justify-start flex-1 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center p-2 -ml-2 text-primary hover:text-secondary transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-[26px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Brand Logo: Centered on mobile, left-aligned on desktop */}
        <Link
          className="group flex flex-col justify-center select-none items-center text-center md:items-start md:text-left shrink-0"
          href="/"
        >
          <span className="font-headline-sm text-[1.2rem] sm:text-headline-sm text-primary tracking-tight leading-none group-hover:text-secondary transition-colors duration-300">
            RK INLAY
          </span>
          <span className="font-label-caps text-[0.625rem] sm:text-label-caps text-secondary tracking-[0.22em] mt-1 sm:mt-space-xs uppercase">
            Handicraft • Agra
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-space-lg">
          <Link
            aria-current={isHome ? "page" : undefined}
            className={`relative py-1 font-label-md text-label-md transition-colors duration-200 uppercase tracking-widest after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-secondary after:transition-all after:duration-300 ${
              isHome
                ? "text-primary font-medium after:w-full"
                : "text-on-surface-variant hover:text-primary after:w-0 hover:after:w-full"
            }`}
            href="/"
          >
            Home
          </Link>
          <Link
            aria-current={isCollections ? "page" : undefined}
            className={`relative py-1 font-label-md text-label-md transition-colors duration-200 uppercase tracking-widest after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-secondary after:transition-all after:duration-300 ${
              isCollections
                ? "text-primary font-medium after:w-full"
                : "text-on-surface-variant hover:text-primary after:w-0 hover:after:w-full"
            }`}
            href="/collections"
          >
            Collections
          </Link>
          <Link
            aria-current={isAbout ? "page" : undefined}
            className={`relative py-1 font-label-md text-label-md transition-colors duration-200 uppercase tracking-widest after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-secondary after:transition-all after:duration-300 ${
              isAbout
                ? "text-primary font-medium after:w-full"
                : "text-on-surface-variant hover:text-primary after:w-0 hover:after:w-full"
            }`}
            href="/about"
          >
            About
          </Link>
          <Link
            aria-current={isContact ? "page" : undefined}
            className={`relative py-1 font-label-md text-label-md transition-colors duration-200 uppercase tracking-widest after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-secondary after:transition-all after:duration-300 ${
              isContact
                ? "text-primary font-medium after:w-full"
                : "text-on-surface-variant hover:text-primary after:w-0 hover:after:w-full"
            }`}
            href="/contact"
          >
            Contact
          </Link>
        </nav>

        {/* Right Section: WhatsApp CTA Button (Desktop & Mobile) */}
        <div className="flex items-center justify-end flex-1 md:flex-initial">
          <a
            className="group inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-on-primary hover:bg-secondary hover:text-on-secondary transition-all duration-300 shadow-[0_1px_8px_rgba(0,0,0,0.04)] md:w-auto md:h-auto md:px-space-md md:py-space-sm md:gap-space-xs"
            href="https://wa.me/917351586553"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Contact us on WhatsApp"
          >
            <svg
              className="w-5 h-5 md:w-4 md:h-4 fill-current transition-transform duration-300 group-hover:scale-110 shrink-0"
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
            <span className="hidden md:inline font-label-caps text-label-caps uppercase tracking-wider">
              WhatsApp
            </span>
          </a>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-surface border-b border-surface-container-highest px-margin-mobile py-space-md shadow-lg">
          <nav className="flex flex-col space-y-space-sm">
            <Link
              onClick={() => setMobileMenuOpen(false)}
              className={`font-label-md text-label-md py-2 border-b border-surface-container ${
                isHome ? "text-primary font-bold" : "text-on-surface-variant hover:text-primary"
              }`}
              href="/"
            >
              Home
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              className={`font-label-md text-label-md py-2 border-b border-surface-container ${
                isCollections
                  ? "text-primary font-bold"
                  : "text-on-surface-variant hover:text-primary"
              }`}
              href="/collections"
            >
              Collections
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              className={`font-label-md text-label-md py-2 border-b border-surface-container ${
                isAbout ? "text-primary font-bold" : "text-on-surface-variant hover:text-primary"
              }`}
              href="/about"
            >
              About
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              className={`font-label-md text-label-md py-2 ${
                isContact ? "text-primary font-bold" : "text-on-surface-variant hover:text-primary"
              }`}
              href="/contact"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
