/* =========================
   Footer Component (Layout)
   Driveway-matched UI with Carma Credit links:
   - Brand + tagline
   - Link columns (Resources, Company, Contact)
   - Legal bar
========================= */

"use client";

import Link from "next/link";
import Image from "next/image";
import zlogo from "@/assets/brand/zlogo.png";
import { useAppConfig } from "@/app/providers";
import { usePathname } from "next/navigation";
import { fallbackValue, defaultAppConfig } from "@/lib/appConfig";
import { Phone } from "lucide-react";

const LINK = "text-[14px] font-medium leading-[24.5px] text-[#A1B9E1] transition-colors hover:text-white";
const HEADING = "mb-6 text-[18px] font-bold text-[#E3EAF6]";
const PHONE_DISPLAY = "1-855-979-3500";
const PHONE_HREF = "tel:+18559793500";

const Footer = () => {
  const appConfig = useAppConfig();
  const defaultD = defaultAppConfig.dealership;
  const d = appConfig.dealership;

  const safeD = {
    dealership_name: fallbackValue(d.dealership_name, defaultD.dealership_name),
  };

  const columns = [
    {
      title: "Resources",
      links: [
        { label: "How It Works", href: "/how-it-works" },
        { label: "Rebuild Your Credit", href: "/rebuild-your-credit" },
        { label: "Understanding Auto Financing", href: "/understanding-auto-financing" },
        { label: "FAQ", href: "/faq" },
        { label: "What do I need", href: "/what-do-i-need" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Get Pre-Approved", href: "/financing" },
        { label: "Sell my Car", href: "/trade-in-my-car" },
        { label: "About Us", href: "/about-us" },
        { label: "Contact Us", href: "/contact-us" },
      ],
    },
  ];

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
                className="!h-7 !w-auto !max-w-[118px] object-contain object-left brightness-0 invert sm:!h-8 sm:!max-w-[128px]"
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
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-14 sm:gap-x-20 sm:gap-y-16 lg:max-w-[720px] lg:grid-cols-3 lg:justify-self-end lg:gap-x-24">
            {columns
              .filter((col) => col.links.length > 0)
              .map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h2 className={HEADING}>{col.title}</h2>
                <ul className="flex flex-col gap-3.5">
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
              <a href={PHONE_HREF} className={`${LINK} inline-flex items-center gap-2`}>
                <Phone className="h-5 w-5 shrink-0" strokeWidth={2.25} />
                {PHONE_DISPLAY}
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
