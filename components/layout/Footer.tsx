import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full bg-primary text-inverse-on-surface overflow-hidden pt-space-xl pb-space-lg border-t border-white/5">
      <div className="pointer-events-none absolute inset-x-0 bottom-2 sm:bottom-0 flex justify-center select-none overflow-hidden">
        <span className="font-serif text-[18vw] sm:text-[14vw] lg:text-[16vw] font-semibold leading-none tracking-wider uppercase whitespace-nowrap text-white/10 sm:text-white/5">
          RK INLAY
        </span>
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-lg lg:gap-gutter pb-space-xl">
          <div className="lg:col-span-5 flex flex-col justify-start pr-0 lg:pr-space-lg">
            <span className="font-headline-md text-headline-md text-on-primary tracking-tight mb-space-xs">
              RK INLAY HANDICRAFT
            </span>
            <p className="font-body-md text-body-md text-tertiary-fixed-dim max-w-sm mb-space-md">
              Handcrafted marble inlay from Agra, India. Preserving the
              imperial legacy of Pietra Dura lapidary arts through master
              heirloom architectural editions.
            </p>
            <div className="inline-flex items-center gap-space-xs text-secondary-fixed font-label-caps text-label-caps uppercase tracking-widest">
              <span className="material-symbols-outlined text-[14px]">
                location_on
              </span>
              <span>Agra • Uttar Pradesh • India</span>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col">
            <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-secondary-fixed mb-space-md">
              Collections
            </span>
            <nav className="flex flex-col space-y-space-sm">
              <Link
                className="font-body-sm text-body-sm text-tertiary-fixed-dim hover:text-on-primary transition-colors duration-200"
                href="/collections"
              >
                Floors &amp; Medallions
              </Link>
              <Link
                className="font-body-sm text-body-sm text-tertiary-fixed-dim hover:text-on-primary transition-colors duration-200"
                href="/collections"
              >
                Table Tops &amp; Consoles
              </Link>
              <Link
                className="font-body-sm text-body-sm text-tertiary-fixed-dim hover:text-on-primary transition-colors duration-200"
                href="/collections"
              >
                Stairs &amp; Risers
              </Link>
              <Link
                className="font-body-sm text-body-sm text-tertiary-fixed-dim hover:text-on-primary transition-colors duration-200"
                href="/collections"
              >
                Wall Panels &amp; Niches
              </Link>
              <Link
                className="font-body-sm text-body-sm text-tertiary-fixed-dim hover:text-on-primary transition-colors duration-200"
                href="/collections"
              >
                Bespoke Mandirs &amp; Marble Slabs
              </Link>
            </nav>
          </div>

          <div className="lg:col-span-2 flex flex-col">
            <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-secondary-fixed mb-space-md">
              Company
            </span>
            <nav className="flex flex-col space-y-space-sm">
              <Link
                className="font-body-sm text-body-sm text-tertiary-fixed-dim hover:text-on-primary transition-colors duration-200"
                href="/"
              >
                Home
              </Link>
              <Link
                className="font-body-sm text-body-sm text-tertiary-fixed-dim hover:text-on-primary transition-colors duration-200"
                href="/about"
              >
                About the Atelier
              </Link>
              <Link
                className="font-body-sm text-body-sm text-tertiary-fixed-dim hover:text-on-primary transition-colors duration-200"
                href="/#craftsmanship"
              >
                The Craftsmanship
              </Link>
              <Link
                className="font-body-sm text-body-sm text-tertiary-fixed-dim hover:text-on-primary transition-colors duration-200"
                href="/contact"
              >
                Contact &amp; Visit
              </Link>
              <Link
                className="font-body-sm text-body-sm text-tertiary-fixed-dim hover:text-on-primary transition-colors duration-200"
                href="/contact"
              >
                Agra Workshop
              </Link>
            </nav>
          </div>

          <div className="lg:col-span-2 flex flex-col">
            <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-secondary-fixed mb-space-md">
              Concierge
            </span>
            <div className="flex flex-col space-y-space-sm font-body-sm text-body-sm text-tertiary-fixed-dim">
              <a
                className="hover:text-on-primary transition-colors duration-200"
                href="https://wa.me/917351586553"
                rel="noopener noreferrer"
                target="_blank"
              >
                WhatsApp Concierge
              </a>
              <a
                className="hover:text-on-primary transition-colors duration-200"
                href="https://instagram.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                Instagram Portfolio
              </a>
              <a
                className="hover:text-on-primary transition-colors duration-200"
                href="mailto:akhan656500@gmail.com"
              >
                Email Atelier
              </a>
              <span className="pt-space-xs text-on-tertiary-container text-body-sm">
                By Appointment Only
              </span>
            </div>
          </div>
        </div>

        <div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm text-tertiary-fixed-dim font-body-sm text-body-sm border-t border-white/5">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} RK INLAY HANDICRAFT. All rights
            reserved. Agra, India.
          </p>
          <p className="font-label-caps text-label-caps uppercase tracking-widest text-on-tertiary-container">
            Parchin Kari Heritage
          </p>
        </div>
      </div>
    </footer>
  );
}
