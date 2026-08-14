"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Logo from "@/components/common/Logo";
import { DW_NAV } from "./constants";
import { easeOut } from "./motion";

const PHONE_DISPLAY = "(855) 514-5500";
const PHONE_HREF = "tel:+18555145500";

const HomeHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
    setActiveNav(null);
    setMobileExpanded(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveNav(label);
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveNav(null), 160);
  };

  const navLinkClass =
    "relative flex h-[64px] xl:h-[77px] items-center px-2 xl:px-3 text-[15px] xl:text-[18px] font-semibold leading-none whitespace-nowrap text-[#353535] transition-colors hover:text-[#00af66]";

  return (
    <header className="dw-font sticky top-0 z-50 w-full bg-white shadow-[0_1px_0_rgba(0,0,0,0.08)]">
      {/* Desktop / tablet landscape */}
      <div className="relative mx-auto hidden h-[64px] max-w-[1440px] items-center px-4 lg:flex xl:h-[77px] xl:px-10">
        <Link href="/" aria-label="Carma Credit home" className="mr-4 shrink-0 xl:mr-8">
          <Logo />
        </Link>

        <nav
          className="flex min-w-0 flex-1 items-center justify-start gap-0.5 xl:gap-2"
          onMouseLeave={scheduleClose}
        >
          {DW_NAV.map((item) => {
            const hasMenu = item.items.length > 0;
            const isOpen = activeNav === item.label;

            if (!hasMenu) {
              return (
                <Link key={item.label} href={item.href} className={navLinkClass}>
                  {item.label}
                </Link>
              );
            }

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => openMenu(item.label)}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={() => setActiveNav(isOpen ? null : item.label)}
                  className={`${navLinkClass} cursor-pointer gap-1 ${
                    isOpen ? "text-[#00af66]" : ""
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 xl:h-4 xl:w-4 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    strokeWidth={2}
                  />
                  {isOpen && (
                    <span className="absolute bottom-[14px] left-2 right-2 h-[3px] rounded-full bg-[#00af66] xl:bottom-[18px] xl:left-3 xl:right-3" />
                  )}
                </button>
              </div>
            );
          })}
        </nav>

        <div className="ml-2 flex shrink-0 items-center xl:ml-4">
          <a
            href={PHONE_HREF}
            className="flex items-center gap-1.5 text-[14px] font-semibold text-[#00af66] transition-opacity hover:opacity-80 xl:gap-2 xl:text-[17px]"
          >
            <Phone className="h-[18px] w-[18px] xl:h-[20px] xl:w-[20px]" strokeWidth={1.8} />
            <span className="hidden xl:inline">{PHONE_DISPLAY}</span>
            <span className="xl:hidden">Call</span>
          </a>
        </div>
      </div>

      {/* Desktop dropdown */}
      <AnimatePresence>
        {activeNav &&
          (DW_NAV.find((n) => n.label === activeNav)?.items.length ?? 0) > 0 && (
            <motion.div
              key={activeNav}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: easeOut }}
              className="absolute left-0 right-0 top-[64px] z-40 hidden border-t border-[#E6E6E6] bg-[#F4F6F7] shadow-[0_8px_24px_rgba(0,0,0,0.08)] lg:block xl:top-[77px]"
              onMouseEnter={() => activeNav && openMenu(activeNav)}
              onMouseLeave={scheduleClose}
            >
              <div className="mx-auto flex max-w-[1440px] gap-10 px-4 py-6 xl:px-10 xl:py-8">
                <div>
                  <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#8A8A8A] xl:mb-4">
                    {activeNav}
                  </p>
                  <ul className="m-0 flex list-none flex-col gap-3 p-0">
                    {DW_NAV.find((n) => n.label === activeNav)?.items.map((sub, i) => (
                      <motion.li
                        key={sub.label}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25, delay: 0.04 * i, ease: easeOut }}
                      >
                        <Link
                          href={sub.href}
                          onClick={() => setActiveNav(null)}
                          className="text-[16px] font-semibold text-[#00af66] no-underline transition-opacity hover:underline hover:opacity-80 xl:text-[18px]"
                        >
                          {sub.label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
      </AnimatePresence>

      {/* Mobile / tablet */}
      <div className="flex h-[56px] items-center justify-between gap-3 px-3 sm:px-4 lg:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 cursor-pointer items-center justify-center text-[#00af66]"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <Link href="/" aria-label="Carma Credit home" className="min-w-0 flex-1 flex justify-center">
          <span className="max-w-[160px] sm:max-w-[200px]">
            <Logo />
          </span>
        </Link>

        <a
          href={PHONE_HREF}
          className="flex h-10 w-10 items-center justify-center text-[#00af66]"
          aria-label={`Call ${PHONE_DISPLAY}`}
        >
          <Phone className="h-6 w-6" strokeWidth={1.6} />
        </a>
      </div>

      {mobileOpen && (
        <nav className="absolute left-0 top-full z-50 max-h-[calc(100dvh-56px)] w-full overflow-y-auto overscroll-contain border-b border-gray-100 bg-white px-4 py-2 shadow-lg lg:hidden">
          {DW_NAV.map((item) => {
            const hasMenu = item.items.length > 0;
            const expanded = mobileExpanded === item.label;

            if (!hasMenu) {
              return (
                <div key={item.label} className="border-b border-gray-100">
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3.5 text-[16px] font-semibold text-[#353535] sm:py-4 sm:text-[17px]"
                  >
                    {item.label}
                  </Link>
                </div>
              );
            }

            return (
              <div key={item.label} className="border-b border-gray-100">
                <button
                  type="button"
                  onClick={() => setMobileExpanded(expanded ? null : item.label)}
                  className="flex w-full cursor-pointer items-center justify-between py-3.5 text-left text-[16px] font-semibold text-[#353535] sm:py-4 sm:text-[17px]"
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
                  />
                </button>
                {expanded && (
                  <div className="flex flex-col gap-3 pb-4 pl-2">
                    {item.items.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-[15px] font-medium text-[#00af66]"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <a
            href={PHONE_HREF}
            className="my-4 flex h-11 w-full items-center justify-center gap-2 rounded-full border border-[#00af66] text-[15px] font-semibold text-[#00af66]"
          >
            <Phone className="h-4 w-4" strokeWidth={2} />
            {PHONE_DISPLAY}
          </a>
        </nav>
      )}
    </header>
  );
};

export default HomeHeader;
