"use client";

import { useEffect, useRef, useState } from "react";
import { PageShell } from "@/components/layout";
import { getConstants } from "@/constants";
import { useAppConfig } from "@/app/providers";
import Link from "next/link";
import { Phone } from "lucide-react";

/** Live carmacredit.ca contact embed: templates/render/2, ~650px */
const LIVE_CONTACT_FORM_URL = "https://carma.zopsoftware.com/api/templates/render/2";
const MIN_HEIGHT = 650;
const DEFAULT_HEIGHT = 650;

const HOURS = [
  { label: "Monday – Friday:", time: "10am – 7pm" },
  { label: "Saturday:", time: "11am – 6pm" },
  { label: "Sunday:", time: "12pm – 5pm" },
] as const;

export default function ContactUs() {
  const appConfig = useAppConfig();
  const { SITE_CONFIG } = getConstants(appConfig);
  const contactFormUrl = SITE_CONFIG?.urls.contactUsBaseUrl || LIVE_CONTACT_FORM_URL;
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "https://cardora.zopsoftware.com") {
        return;
      }
      const { type, value, element_id } = event.data || {};
      if (
        type === "css" &&
        element_id === "contact_us" &&
        typeof value === "number"
      ) {
        const iframe = document.getElementById(element_id) as HTMLIFrameElement | null;
        if (iframe) {
          iframe.style.height = `${value}px`;
        }
      }
    };
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <PageShell>
      <div className="dw-font bg-white px-4 py-10 text-[#121212] sm:px-6 lg:mt-4 lg:px-10 xl:px-24 lg:py-14">
        <div className="mx-auto grid w-full max-w-[1350px] grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="m-0 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#1451b5] md:text-[15px]">
              Contact us
            </p>
            <h1 className="mt-3 max-w-xl text-[clamp(1.75rem,5vw,3rem)] font-bold leading-[1.15] tracking-[-0.03em] text-[#121212]">
              Got a question? We&apos;re here to help.
            </h1>

            <h2 className="mb-2 mt-8 text-[22px] font-bold tracking-[-0.02em] text-[#121212] md:text-[24px]">
              Call Now
            </h2>
            <Link
              href="tel:1-855-979-3500"
              className="mt-1 inline-flex items-center gap-2 text-[15px] font-semibold text-[#121212] hover:text-[#1451b5] md:text-[16px]"
            >
              <Phone className="h-5 w-5 shrink-0" strokeWidth={2.25} />
              1-855-979-3500
            </Link>

            <h2 className="mb-3 mt-8 text-[22px] font-bold tracking-[-0.02em] text-[#121212] md:text-[24px]">
              Our Hours
            </h2>
            <ul className="m-0 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-[#353535] md:text-[16px]">
              {HOURS.map((row) => (
                <li key={row.label}>
                  <span className="font-semibold text-[#121212]">{row.label}</span> {row.time}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full min-w-0 overflow-hidden rounded-2xl bg-white shadow-[0_16px_50px_rgba(18,18,18,0.14)] ring-1 ring-black/5">
            <iframe
              id="contact_us"
              src={contactFormUrl}
              className="w-full rounded-2xl"
              style={{ minHeight: "650px", height: "650px" }}
              title="Contact Us"
              allow="payment"
            />
          </div>
        </div>
      </div>
    </PageShell>
  );
}
