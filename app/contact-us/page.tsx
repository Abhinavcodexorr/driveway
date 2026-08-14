"use client";

import { useEffect, useRef, useState } from "react";
import { GetInTouch } from "@/components/common";
import { Footer, Header } from "@/components/layout";
import Image from "next/image";
import callIcon from "@/assets/icons/call_icon.svg";
import envelopIcon from "@/assets/icons/envelop_icon.svg";
import { getConstants } from "@/constants";
import { useAppConfig } from "@/app/providers";
import Link from "next/link";

/** Match cardora.ca contact embed (~580px), then auto-fit to form content */
const MIN_HEIGHT = 480;
const DEFAULT_HEIGHT = 580;

export default function ContactUs() {
  const appConfig = useAppConfig();
  const SITE_CONFIG = getConstants(appConfig).SITE_CONFIG;
  const contactFormUrl = SITE_CONFIG?.urls.contactUsBaseUrl;
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(DEFAULT_HEIGHT);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const data = event.data;
      if (
        data &&
        typeof data === "object" &&
        data.type === "css" &&
        (data.element_id === "contact_us" || data.element_id === "contact_form") &&
        typeof data.value === "number"
      ) {
        setHeight(Math.max(MIN_HEIGHT, Math.ceil(data.value) + 8));
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <>
      <Header />
      <div className="bg-white px-4 py-8 font-sans text-gray-900 sm:px-6 lg:mt-8 lg:px-24 lg:py-10">
        <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Left — same pattern as cardora.ca */}
          <div className="space-y-6 lg:space-y-8">
            <h1 className="max-w-xl text-[28px] font-bold leading-tight text-gray-900 sm:text-[36px] lg:text-[42px]">
              Got a question? We’re here to help.
            </h1>

            <div className="flex max-w-[480px] flex-col gap-4">
              <Link
                href={`tel:${appConfig.dealership.sales_number_1 || "+18555145500"}`}
                className="group relative flex items-center justify-between overflow-hidden rounded-md border border-gray-200 bg-white p-5 sm:p-6"
              >
                <div className="absolute inset-0 bg-[#2f413936] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10">
                  <h2 className="mb-0.5 text-lg font-bold text-gray-900 sm:text-xl">Call us</h2>
                  <p className="text-[15px] text-gray-600">Call Us Anytime Now</p>
                </div>
                <div className="relative z-10 flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-brand-green sm:h-[55px] sm:w-[55px]">
                  <Image src={callIcon} alt="" width={26} height={26} className="object-contain" />
                </div>
              </Link>

              <Link
                href={`mailto:${appConfig.dealership.email_1 || ""}`}
                className="group relative flex items-center justify-between overflow-hidden rounded-md border border-gray-200 bg-white p-5 sm:p-6"
              >
                <div className="absolute inset-0 bg-[#2f413936] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10">
                  <h2 className="mb-0.5 text-lg font-bold text-gray-900 sm:text-xl">Email</h2>
                  <p className="text-[15px] text-gray-600">Send Us an Email</p>
                </div>
                <div className="relative z-10 flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-brand-green sm:h-[55px] sm:w-[55px]">
                  <Image src={envelopIcon} alt="" width={26} height={26} className="object-contain" />
                </div>
              </Link>
            </div>
          </div>

          {/* Right — form card sized like cardora.ca */}
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_2px_18px_rgba(0,0,0,0.08)] sm:p-6">
            <h2 className="mb-4 text-[22px] font-bold text-gray-900 sm:mb-5 sm:text-[28px]">
              Let’s Get You on the Road
            </h2>

            <div className="w-full overflow-hidden">
              {contactFormUrl ? (
                <iframe
                  ref={iframeRef}
                  id="contact_form"
                  name="iframe_a"
                  src={`${contactFormUrl}?`}
                  title="Contact Us"
                  scrolling="no"
                  allow="payment"
                  className="contact-us block w-full border-0"
                  style={{
                    height: `${height}px`,
                    minHeight: MIN_HEIGHT,
                    border: "none",
                  }}
                />
              ) : (
                <div className="flex h-[280px] items-center justify-center text-gray-500">
                  Contact form is temporarily unavailable.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <GetInTouch />
      <Footer />
    </>
  );
}
