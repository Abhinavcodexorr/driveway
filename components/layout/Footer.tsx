/* =========================
   Footer Component (Layout)
   Renders the site-wide footer with:
   - Link columns (Resources, About Us, Follow Us)
   - Contact / address block
   - Copyright bar with privacy/terms links
========================= */

"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import Image from "next/image";
import zlogo from "@/assets/brand/zlogo.png";
import { useAppConfig } from "@/app/providers";
import { usePathname } from "next/navigation";
import { fallbackValue, defaultAppConfig } from "@/lib/appConfig";

import { getConstants } from "@/constants";
import { Reveal } from "@/components/common/motion";


/* Component */
const Footer = () => {
  const appConfig = useAppConfig();
  const defaultD = defaultAppConfig.dealership;
  const d = appConfig.dealership;
  const { SITE_CONFIG } = getConstants(appConfig);

  // Apply fallback logic for all dealership fields
  const safeD = {
    dealership_name: fallbackValue(d.dealership_name, defaultD.dealership_name),
    dealership_logo: fallbackValue(d.dealership_logo, defaultD.dealership_logo),
    full_address_1: fallbackValue(d.full_address_1, defaultD.full_address_1),
    city_1: fallbackValue(d.city_1, defaultD.city_1),
    province_1: fallbackValue(d.province_1, defaultD.province_1),
    postal_code_1: fallbackValue(d.postal_code_1, defaultD.postal_code_1),
    country_1: fallbackValue(d.country_1, defaultD.country_1),
    address_1_bar: fallbackValue(d.address_1_bar, defaultD.address_1_bar),
    address_2_bar: fallbackValue(d.address_2_bar, defaultD.address_2_bar),
    address_map_url_1: fallbackValue(d.address_map_url_1, defaultD.address_map_url_1),
    social_media_facebook: fallbackValue(d.social_media_facebook, defaultD.social_media_facebook),
    social_media_instagram: fallbackValue(d.social_media_instagram, defaultD.social_media_instagram),
    social_media_tiktok: fallbackValue(d.social_media_tiktok, defaultD.social_media_tiktok),
    social_media_youtube: fallbackValue(d.social_media_youtube, defaultD.social_media_youtube),
  };
  
  const columns = [
    {
      title: "Resources",
      links: [
        { label: "How It Works", href: "/how-it-works", external: false },
        { label: "Rebuild Your Credit", href: "/rebuild-your-credit", external: false },
        { label: "Understanding Auto Financing", href: "/understanding-auto-financing", external: false },
        { label: "FAQ", href: "/faq", external: false },
        { label: "What do I need", href: "/what-do-i-need", external: false },
      ],
    },
    {
      title: "About Us",
      links: [
        { label: "Home", href: "/", external: false },
        { label: "Get Pre-Approved", href: "/financing", external: false },
        { label: "Sell my Car", href: "/trade-in-my-car", external: false },
        { label: "Car Finance", href: "/financing", external: false },
        // { label: "Payment Calculator", href: "/payment-calculator", external: false },
        { label: "About Us", href: "/about-us", external: false },
        { label: "Contact Us", href: "/contact-us", external: false },
      ],
    },
    {
      title: "Follow Us",
      links: [
        { label: "Facebook", href: safeD.social_media_facebook, external: true },
        { label: "Instagram", href: safeD.social_media_instagram, external: true },
        { label: "TikTok", href: safeD.social_media_tiktok, external: true },
        { label: "YouTube", href: safeD.social_media_youtube, external: true },
      ],
    },
  ];
  
  // FIX: Prioritize the share link (address_1_bar) over the embed url for redirection
  const mapsUrl = safeD.address_1_bar || safeD.address_2_bar || safeD.address_map_url_1;
  const pathname = usePathname();

  return (
    <footer className="w-full border-t-0 bg-neutral-charcoal font-[Lato,sans-serif]">
      <Reveal y={20} className="mx-auto max-w-[1600px] px-4 pt-10 pb-5 sm:px-5 lg:px-10 lg:pt-14">

        {/* Link columns grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-[16px] font-bold uppercase tracking-[1px] text-white sm:mb-5 sm:text-[18px]">
                {col.title}
              </h3>
              <ul className="space-y-2.5 sm:space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[14px] uppercase text-white transition-colors sm:text-[15px]"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-[14px] uppercase text-white transition-colors sm:text-[15px]"
                        onClick={(e) => {
                          if (
                            pathname === "/inventory" &&
                            link.href.startsWith("/inventory")
                          ) {
                            e.preventDefault();
                            window.location.href = link.href;
                          }
                        }}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact / address column */}
          <div>
            <h3 className="mb-4 text-[16px] font-bold uppercase tracking-[1px] text-white sm:mb-5 sm:text-[18px]">
              Contact Us
            </h3>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-white/85" />
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white"
              >
                <address className="cursor-pointer text-[14px] leading-relaxed not-italic sm:text-[15px]">
                  {safeD.full_address_1.trim()},
                  <br />
                  {safeD.city_1}, {safeD.province_1}
                  <br />
                  {safeD.postal_code_1}
                </address>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12">
          <hr className="border-dark-border" />
        </div>

        {/* Copyright bar */}
        <div className="flex flex-col items-center justify-between gap-4 px-0 pb-5 pt-6 text-center md:flex-row md:items-start md:px-2 md:text-left">
          <div className="text-[12px] uppercase text-white sm:text-[13px]">
            © {new Date().getFullYear()} {safeD.dealership_name}. <br />
            <span className="mt-1 flex flex-wrap items-center justify-center gap-2 md:justify-start">
              All rights reserved. Powered by
              <a
                href="https://www.zopdealer.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={zlogo}
                  alt="Zop Dealer"
                  width={20}
                  height={20}
                  style={{
                    width: "auto",
                    height: "auto",
                    maxWidth: "100%",
                  }}
                />
              </a>
            </span>
          </div>
          <p className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1 text-[12px] uppercase text-white sm:text-[12.5px] md:justify-end">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <span aria-hidden>|</span>
            <Link href="/terms-conditions" className="hover:text-white">Terms & Conditions</Link>
            <span aria-hidden>|</span>
            <Link target="_blank" href={`/sitemap`} className="hover:text-white">Site Map</Link>
          </p>
        </div>
      </Reveal>
    </footer>
  );
};

export default Footer;