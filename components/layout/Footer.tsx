/* =========================
   Footer Component (Layout)
   Driveway-matched UI with Carma Credit links:
   - Brand + tagline + social icons
   - Link columns (Company, Contact)
   - Legal bar
========================= */

"use client";

import Link from "next/link";
import Image from "next/image";
import zlogo from "@/assets/brand/zlogo.png";
import { useAppConfig } from "@/app/providers";
import { usePathname } from "next/navigation";
import { fallbackValue, defaultAppConfig } from "@/lib/appConfig";

const LINK = "text-[14px] font-medium leading-[24.5px] text-[#A1B9E1] transition-colors hover:text-white";
const HEADING = "mb-4 text-[18px] font-bold text-[#E3EAF6]";
const ICON = "h-6 w-6";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M14 13.5h2.5l.5-3H14V8.5c0-.8.2-1.3 1.4-1.3H17V4.5c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2V10.5H8v3h2.6V19.5H14v-6Z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm10 1.8H7A2.2 2.2 0 0 0 4.8 7v10A2.2 2.2 0 0 0 7 19.2h10a2.2 2.2 0 0 0 2.2-2.2V7A2.2 2.2 0 0 0 17 4.8ZM12 8.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8Zm4.35-3.05a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9Z" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M23 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C19.2 5.4 12 5.4 12 5.4s-7.2 0-8.8.4c-.9.2-1.6.9-1.8 1.8C1 9 1 12.2 1 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 1.6.4 8.8.4 8.8.4s7.2 0 8.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6ZM9.8 15.5v-6.6l6.3 3.3-6.3 3.3Z" />
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.81-4.18 2.89 2.89 0 0 1 2.81-1.81c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.16 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.73a8.18 8.18 0 0 0 4.76 1.52V6.8a4.84 4.84 0 0 1-1-.11Z" />
  </svg>
);

const Footer = () => {
  const appConfig = useAppConfig();
  const defaultD = defaultAppConfig.dealership;
  const d = appConfig.dealership;

  const safeD = {
    dealership_name: fallbackValue(d.dealership_name, defaultD.dealership_name),
    full_address_1: fallbackValue(d.full_address_1, defaultD.full_address_1),
    city_1: fallbackValue(d.city_1, defaultD.city_1),
    province_1: fallbackValue(d.province_1, defaultD.province_1),
    postal_code_1: fallbackValue(d.postal_code_1, defaultD.postal_code_1),
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
      title: "Company",
      links: [
        { label: "Home", href: "/" },
        { label: "Get Pre-Approved", href: "/financing" },
        { label: "Sell my Car", href: "/trade-in-my-car" },
        { label: "About Us", href: "/about-us" },
        { label: "Contact Us", href: "/contact-us" },
      ],
    },
  ];

  const socials = [
    { label: "Facebook", href: safeD.social_media_facebook, Icon: FacebookIcon },
    { label: "Instagram", href: safeD.social_media_instagram, Icon: InstagramIcon },
    { label: "YouTube", href: safeD.social_media_youtube, Icon: YoutubeIcon },
    { label: "TikTok", href: safeD.social_media_tiktok, Icon: TikTokIcon },
  ].filter((s) => s.href);

  const mapsUrl = safeD.address_1_bar || safeD.address_2_bar || safeD.address_map_url_1;
  const pathname = usePathname();

  return (
    <footer className="dw-font w-full bg-[rgb(8,32,72)]">
      <div className="mx-auto max-w-[1440px] px-5 pb-6 pt-14 sm:px-8 lg:px-[72px] lg:pb-8 lg:pt-20">
        <div className="grid gap-x-8 gap-y-12 lg:grid-cols-[minmax(220px,0.9fr)_minmax(0,2.1fr)] lg:gap-x-12">
          <div className="max-w-[340px]">
            <Link href="/" aria-label="Carma Credit home" className="inline-block">
              <Image
                src="/carma-logo-footer.png"
                alt="Carma"
                width={120}
                height={32}
                className="!h-7 !w-auto !max-w-[118px] object-contain object-left sm:!h-8 sm:!max-w-[128px]"
                sizes="128px"
                unoptimized
                style={{ height: 28, width: "auto", maxWidth: 128 }}
              />
            </Link>
            <p className="mt-4 text-[16px] leading-relaxed text-white">
              The convenient way to get pre-approved or sell your car, wherever you are.
            </p>
            <p className="mt-3 text-[18px] text-white">
              Auto Done <span className="text-[#FF8D7D]">Easy</span>
            </p>
            {socials.length > 0 && (
              <div className="mt-5 flex items-center gap-1">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} opens in a new window`}
                    className="flex h-11 w-11 items-center justify-center text-white/90 transition-colors hover:text-white"
                  >
                    <Icon className={ICON} />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-16 lg:max-w-[560px] lg:justify-self-end">
            {columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h2 className={HEADING}>{col.title}</h2>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className={LINK}
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
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <nav aria-label="Contact">
              <h2 className={HEADING}>Contact</h2>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${LINK} block max-w-[220px]`}
              >
                {safeD.full_address_1.trim()}, {safeD.city_1}, {safeD.province_1}{" "}
                {safeD.postal_code_1}
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:mt-16 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-2">
            <Link href="/privacy-policy" className={LINK}>
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className={LINK}>
              Terms &amp; Conditions
            </Link>
          </div>
          <p className="flex flex-wrap items-center gap-2 text-[13px] font-medium text-[#A1B9E1]">
            © {new Date().getFullYear()} {safeD.dealership_name}. Powered by
            <a
              href="https://www.zopdealer.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Image
                src={zlogo}
                alt="Zop Dealer"
                width={20}
                height={20}
                style={{ width: "auto", height: "auto", maxWidth: "100%" }}
              />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
