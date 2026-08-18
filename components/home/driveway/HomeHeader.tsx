"use client";

import { useEffect, useRef, useState, type ComponentType, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  Building2,
  ChevronDown,
  CircleHelp,
  ClipboardList,
  FileText,
  Menu,
  Phone,
  Settings2,
  Star,
  X,
} from "lucide-react";
import Logo from "@/components/common/Logo";
import { DW_NAV } from "./constants";
import { easeOut } from "./motion";

const PHONE_DISPLAY = "1-855-979-3500";
const PHONE_HREF = "tel:+18559793500";

type NavIcon =
  | "howItWorks"
  | "credit"
  | "financing"
  | "faq"
  | "docs"
  | "about"
  | "reviews"
  | "contact";

const NAV_ICONS: Record<
  NavIcon,
  ComponentType<{ className?: string; strokeWidth?: number }>
> = {
  howItWorks: Settings2,
  credit: ClipboardList,
  financing: BookOpen,
  faq: CircleHelp,
  docs: FileText,
  about: Building2,
  reviews: Star,
  contact: Phone,
};

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
    closeTimer.current = setTimeout(() => setActiveNav(null), 140);
  };

  const navLinkClass =
    "relative flex h-[64px] xl:h-[77px] items-center px-2 xl:px-3 text-[15px] xl:text-[18px] font-semibold leading-none whitespace-nowrap text-[#353535] transition-colors hover:text-[#1451b5]";

  const handleHashNav = (href: string, e: MouseEvent) => {
    const hashIndex = href.indexOf("#");
    if (hashIndex === -1 || pathname !== "/") return;
    const el = document.getElementById(href.slice(hashIndex + 1));
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", href);
  };

  return (
    <header className="dw-font sticky top-0 z-50 w-full bg-white shadow-[0_1px_0_rgba(0,0,0,0.08)]">
      {/* Desktop / tablet landscape */}
      <div className="relative mx-auto hidden h-[64px] max-w-[1440px] items-center px-4 xl:flex xl:h-[77px] xl:px-10">
        <Link href="/" aria-label="Carma Credit home" className="mr-4 flex h-8 shrink-0 items-center overflow-hidden xl:mr-8">
          <Logo />
        </Link>

        <nav className="flex min-w-0 flex-1 items-center justify-start gap-0.5 xl:gap-2">
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
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={() => setActiveNav(isOpen ? null : item.label)}
                  className={`${navLinkClass} cursor-pointer gap-1 ${
                    isOpen ? "text-[#1451b5]" : ""
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 xl:h-4 xl:w-4 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    strokeWidth={2}
                  />
                </button>

                {/* Compact dropdown card (Canada Drives style) */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.18, ease: easeOut }}
                      className="absolute left-1/2 top-full z-50 w-[min(360px,calc(100vw-2rem))] -translate-x-1/2 pt-2"
                      onMouseEnter={() => openMenu(item.label)}
                      onMouseLeave={scheduleClose}
                    >
                      {/* Caret */}
                      <div
                        aria-hidden
                        className="absolute left-1/2 top-[2px] z-10 h-3.5 w-3.5 -translate-x-1/2 rotate-45 rounded-[2px] border-l border-t border-[#E8E8E8] bg-white shadow-[-2px_-2px_4px_rgba(0,0,0,0.03)]"
                      />

                      <div className="relative rounded-2xl border border-[#E8E8E8] bg-white p-3 shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
                        <ul className="m-0 flex list-none flex-col gap-0.5 p-0">
                          {item.items.map((sub) => {
                            const Icon =
                              NAV_ICONS[(sub as { icon?: NavIcon }).icon as NavIcon] || FileText;
                            const description =
                              (sub as { description?: string }).description || "";

                            return (
                              <li key={sub.label}>
                                <Link
                                  href={sub.href}
                                  onClick={(e) => {
                                    setActiveNav(null);
                                    handleHashNav(sub.href, e);
                                  }}
                                  className="flex items-start gap-3 rounded-xl px-3 py-3 no-underline transition-colors hover:bg-[#F5F7F8]"
                                >
                                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E8F2FF] text-[#1451b5]">
                                    <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
                                  </span>
                                  <span className="min-w-0">
                                    <span className="block text-[15px] font-semibold leading-snug text-[#2B2B2B]">
                                      {sub.label}
                                    </span>
                                    {description ? (
                                      <span className="mt-0.5 block text-[13px] font-normal leading-snug text-[#6B7280]">
                                        {description}
                                      </span>
                                    ) : null}
                                  </span>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        <div className="ml-2 flex shrink-0 items-center xl:ml-4">
          <a
            href={PHONE_HREF}
            className="flex items-center gap-1.5 text-[14px] font-semibold text-[#1451b5] transition-opacity hover:opacity-80 xl:gap-2 xl:text-[17px]"
          >
            <Phone className="h-[18px] w-[18px] xl:h-[20px] xl:w-[20px]" strokeWidth={1.8} />
            <span className="hidden xl:inline">{PHONE_DISPLAY}</span>
            <span className="xl:hidden">Call</span>
          </a>
        </div>
      </div>

      {/* Mobile / tablet */}
      <div className="flex h-[56px] items-center justify-between gap-3 px-3 sm:px-4 xl:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 cursor-pointer items-center justify-center text-[#1451b5]"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <Link href="/" aria-label="Carma Credit home" className="flex h-8 min-w-0 flex-1 items-center justify-center overflow-hidden">
          <Logo />
        </Link>

        <a
          href={PHONE_HREF}
          className="flex h-10 w-10 items-center justify-center text-[#1451b5]"
          aria-label={`Call ${PHONE_DISPLAY}`}
        >
          <Phone className="h-6 w-6" strokeWidth={1.6} />
        </a>
      </div>

      {mobileOpen && (
        <nav className="absolute left-0 top-full z-50 max-h-[calc(100dvh-56px)] w-full overflow-y-auto overscroll-contain border-b border-gray-100 bg-white px-4 py-2 shadow-lg xl:hidden">
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
                  <div className="flex flex-col gap-1 pb-4">
                    {item.items.map((sub) => {
                      const Icon =
                        NAV_ICONS[(sub as { icon?: NavIcon }).icon as NavIcon] || FileText;
                      const description =
                        (sub as { description?: string }).description || "";
                      return (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={(e) => {
                            setMobileOpen(false);
                            handleHashNav(sub.href, e);
                          }}
                          className="flex items-start gap-3 rounded-xl px-2 py-2.5 hover:bg-[#F5F7F8]"
                        >
                          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E8F2FF] text-[#1451b5]">
                            <Icon className="h-4 w-4" strokeWidth={2} />
                          </span>
                          <span>
                            <span className="block text-[15px] font-semibold text-[#2B2B2B]">
                              {sub.label}
                            </span>
                            {description ? (
                              <span className="mt-0.5 block text-[13px] text-[#6B7280]">
                                {description}
                              </span>
                            ) : null}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
          <a
            href={PHONE_HREF}
            className="my-4 flex h-11 w-full items-center justify-center gap-2 rounded-full border-2 border-[#1451b5] text-[15px] font-semibold text-[#1451b5]"
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
