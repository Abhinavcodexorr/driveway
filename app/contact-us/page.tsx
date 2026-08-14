"use client";

import { GetInTouch } from "@/components/common";
import { Footer, Header } from "@/components/layout";
import Image from "next/image";
import callIcon from "@/assets/icons/call_icon.svg";
import envelopIcon from "@/assets/icons/envelop_icon.svg";
import { getConstants } from "@/constants";
import { useAppConfig } from "@/app/providers";
import Link from "next/link";

export default function ContactUs() {
  const appConfig = useAppConfig();
  const SITE_CONFIG = getConstants(appConfig).SITE_CONFIG;
  const contactFormUrl = SITE_CONFIG?.urls.contactUsBaseUrl;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white px-3 py-10 font-sans text-gray-900 lg:mt-24 lg:px-24">
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Side */}
          <div className="space-y-8">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-[42px] lg:mt-10 lg:max-w-xl">
              Got a question? We’re here to help.
            </h1>
            <div className="space-y-7 lg:w-[480px] lg:space-y-4">
              {/* Call Card */}
              <Link
                href={`tel:${appConfig.dealership.sales_number_1}`}
                className="group relative flex cursor-pointer justify-between overflow-hidden rounded-md border border-gray-200 bg-white p-6"
              >
                <div className="absolute inset-0 bg-[#2f413936] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10">
                  <h2 className="mb-1 text-xl font-bold text-gray-900">Call us</h2>
                  <p className="text-gray-600">Call Us Anytime Now</p>
                </div>

                <div className="relative z-10 flex h-[55px] w-[55px] items-center justify-center rounded-full bg-brand-green">
                  <Image
                    src={callIcon}
                    alt="Call icon"
                    width={27}
                    height={27}
                    className="object-contain"
                  />
                </div>
              </Link>

              {/* Email Card */}
              <Link
                href={`mailto:${appConfig.dealership.email_1}`}
                className="group relative flex cursor-pointer justify-between overflow-hidden rounded-md border border-gray-200 bg-white p-6"
              >
                <div className="absolute inset-0 bg-[#2f413936] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10">
                  <h2 className="mb-1 text-xl font-bold text-gray-900">Email</h2>
                  <p className="text-gray-600">Send Us an Email</p>
                </div>

                <div className="relative z-10 flex h-[55px] w-[55px] items-center justify-center rounded-full bg-brand-green">
                  <Image
                    src={envelopIcon}
                    alt="Email icon"
                    width={27}
                    height={27}
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>
          </div>

          {/* Right Side: Form Container */}
          <div className="rounded-2xl border border-gray-100 bg-white px-4 pb-8 pt-8 shadow-[0_2px_18px_rgba(0,0,0,0.1)] sm:p-6">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">
              Let’s Get You on the Road
            </h2>
            <div className="h-[520px] w-full overflow-hidden rounded-2xl sm:h-[600px]">
              {contactFormUrl ? (
                <iframe
                  src={contactFormUrl}
                  title="Contact Us"
                  allow="payment"
                  className="block h-full w-full rounded-2xl border-0"
                  style={{ height: "100%", minHeight: "520px" }}
                />
              ) : (
                <div className="flex h-full items-center justify-center text-gray-500">
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
