"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Heart, Menu, User, X } from "lucide-react";
import Logo from "@/components/common/Logo";
import { useWishlist } from "@/context/WishlistContext";
import { useDrawer } from "@/context/DrawerContext";
import { DW_NAV } from "./constants";

const SHOP_BODY_STYLES = [
  { label: "SUV", image: "/driveway/body/suv.svg", href: "/inventory/?q=SUV" },
  { label: "Truck", image: "/driveway/body/truck.svg", href: "/inventory/?q=Truck" },
  { label: "Sedan", image: "/driveway/body/sedan.svg", href: "/inventory/?q=Sedan" },
  { label: "Hatchback", image: "/driveway/body/hatchback.svg", href: "/inventory/?q=Hatchback" },
  { label: "Coupe", image: "/driveway/body/coupe.svg", href: "/inventory/?q=Coupe" },
  { label: "Convertible", image: "/driveway/body/convertible.svg", href: "/inventory/?q=Convertible" },
  { label: "Minivan", image: "/driveway/body/minivan.svg", href: "/inventory/?q=Minivan" },
  { label: "Wagon", image: "/driveway/body/wagon.svg", href: "/inventory/?q=Wagon" },
] as const;

const HomeHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { wishlist, isHydrated } = useWishlist();
  const { openWishlistDrawer } = useDrawer();
  const count = isHydrated ? wishlist?.length : 0;

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

  return (
    <header className="dw-font sticky top-0 z-50 w-full bg-white shadow-[0_1px_0_rgba(0,0,0,0.08)]">
      {/* Desktop — Driveway-matched */}
      <div className="relative mx-auto hidden h-[77px] max-w-[1440px] items-center px-6 lg:flex xl:px-10">
        <Link
          href="/"
          aria-label="Cardora home"
          className="mr-8 shrink-0 [&_img]:h-[36px] [&_img]:w-auto"
        >
          <Logo />
        </Link>

        <nav
          className="flex min-w-0 flex-1 items-center gap-1 xl:gap-2"
          onMouseLeave={scheduleClose}
        >
          {DW_NAV.map((item) => {
            const isOpen = activeNav === item.label;
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
                  className={`relative flex h-[77px] cursor-pointer items-center gap-1.5 px-3 text-[18px] font-semibold leading-none transition-colors ${
                    isOpen ? "text-[#1451B5]" : "text-[#353535] hover:text-[#1451B5]"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    strokeWidth={2}
                  />
                  {isOpen && (
                    <span className="absolute bottom-[18px] left-3 right-3 h-[3px] rounded-full bg-[#1451B5]" />
                  )}
                </button>
              </div>
            );
          })}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-5">
          <button
            type="button"
            onClick={openWishlistDrawer}
            className="relative flex cursor-pointer items-center text-[#1451B5] transition-opacity hover:opacity-80"
            aria-label="My Favorites"
          >
            <Heart className="h-[26px] w-[26px]" strokeWidth={1.6} />
            {isHydrated && count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#1451B5] px-1 text-[10px] font-semibold text-white">
                {count}
              </span>
            )}
          </button>
          <Link
            href="/contact-us"
            aria-label="Account"
            className="text-[#1451B5] transition-opacity hover:opacity-80"
          >
            <User className="h-[26px] w-[26px]" strokeWidth={1.6} />
          </Link>
          <Link
            href="/financing"
            className="inline-flex h-[37px] cursor-pointer items-center justify-center rounded-full bg-[#1451B5] px-6 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            Make a Payment
          </Link>
        </div>
      </div>

      {/* Desktop dropdown panel */}
      {activeNav && (
        <div
          className="absolute left-0 right-0 top-[77px] z-40 hidden border-t border-[#E6E6E6] bg-[#F4F6F7] shadow-[0_8px_24px_rgba(0,0,0,0.08)] lg:block"
          onMouseEnter={() => activeNav && openMenu(activeNav)}
          onMouseLeave={scheduleClose}
        >
          <div className="mx-auto flex max-w-[1440px] gap-10 px-6 py-8 xl:px-10">
            {activeNav === "Shop" ? (
              <>
                <div className="min-w-[220px] border-r border-[#D8DDE3] pr-10">
                  <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#8A8A8A]">
                    Shop All
                  </p>
                  <ul className="m-0 flex list-none flex-col gap-3 p-0">
                    <li>
                      <Link
                        href="/inventory"
                        onClick={() => setActiveNav(null)}
                        className="text-[20px] font-bold text-[#1451B5] no-underline hover:underline"
                      >
                        Shop Used Cars
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/inventory"
                        onClick={() => setActiveNav(null)}
                        className="text-[20px] font-bold text-[#1451B5] no-underline hover:underline"
                      >
                        Shop New Cars
                      </Link>
                    </li>
                    <li className="pt-2">
                      <Link
                        href="/skip-the-dealership"
                        onClick={() => setActiveNav(null)}
                        className="text-[16px] font-medium text-[#353535] no-underline hover:text-[#1451B5]"
                      >
                        How Buying A Car Works
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex-1">
                  <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#8A8A8A]">
                    Browse by Body Style
                  </p>
                  <ul className="m-0 grid list-none grid-cols-2 gap-x-8 gap-y-4 p-0 md:grid-cols-4">
                    {SHOP_BODY_STYLES.map((body) => (
                      <li key={body.label}>
                        <Link
                          href={body.href}
                          onClick={() => setActiveNav(null)}
                          className="flex items-center gap-3 text-[16px] font-medium text-[#353535] no-underline hover:text-[#1451B5]"
                        >
                          <Image
                            src={body.image}
                            alt=""
                            width={56}
                            height={28}
                            className="h-7 w-14 object-contain"
                          />
                          {body.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <div>
                <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#8A8A8A]">
                  {activeNav}
                </p>
                <ul className="m-0 flex list-none flex-col gap-3 p-0">
                  {DW_NAV.find((n) => n.label === activeNav)?.items.map((sub) => (
                    <li key={sub.label}>
                      <Link
                        href={sub.href}
                        onClick={() => setActiveNav(null)}
                        className="text-[18px] font-semibold text-[#1451B5] no-underline hover:underline"
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile */}
      <div className="flex h-[57px] items-center justify-between px-4 lg:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="cursor-pointer text-[#1451B5]"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <Link href="/" aria-label="Cardora home" className="[&_img]:h-[28px] [&_img]:w-auto">
          <Logo />
        </Link>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={openWishlistDrawer}
            className="relative cursor-pointer text-[#1451B5]"
            aria-label="My Favorites"
          >
            <Heart className="h-6 w-6" strokeWidth={1.6} />
            {isHydrated && count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#1451B5] px-1 text-[10px] font-semibold text-white">
                {count}
              </span>
            )}
          </button>
          <Link href="/contact-us" aria-label="Account" className="text-[#1451B5]">
            <User className="h-6 w-6" strokeWidth={1.6} />
          </Link>
        </div>
      </div>

      {mobileOpen && (
        <nav className="absolute left-0 top-full z-50 max-h-[calc(100vh-57px)] w-full overflow-y-auto border-b border-gray-100 bg-white px-4 py-2 shadow-lg lg:hidden">
          {DW_NAV.map((item) => {
            const expanded = mobileExpanded === item.label;
            return (
              <div key={item.label} className="border-b border-gray-100">
                <button
                  type="button"
                  onClick={() => setMobileExpanded(expanded ? null : item.label)}
                  className="flex w-full cursor-pointer items-center justify-between py-4 text-left text-[17px] font-semibold text-[#353535]"
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
                        className="text-[15px] font-medium text-[#1451B5]"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <Link
            href="/financing"
            onClick={() => setMobileOpen(false)}
            className="my-4 inline-flex h-[44px] w-full items-center justify-center rounded-full bg-[#1451B5] text-[15px] font-semibold text-white"
          >
            Make a Payment
          </Link>
        </nav>
      )}
    </header>
  );
};

export default HomeHeader;
