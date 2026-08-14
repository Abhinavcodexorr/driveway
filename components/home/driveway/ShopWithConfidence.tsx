"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./motion";

const STEPS = [
  "Apply for financing online in minutes with our simple application.",
  "We’ll review your credit and find options that fit your budget and situation.",
  "Get pre-approved and move forward with confidence — no wasted time, no rejection surprises.",
] as const;

const ShopWithConfidence = () => {
  return (
    <section className="dw-font w-full bg-white px-4 py-10 sm:px-6 sm:py-16 lg:py-[100px]">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-8 sm:flex-row sm:items-center sm:gap-12 lg:gap-16">
        <Reveal x={-20} className="order-1 w-full sm:w-1/2">
          <h2 className="mb-6 max-w-[495px] text-[clamp(1.5rem,4vw,2.25rem)] font-semibold leading-[1.2] tracking-[-0.01em] text-[#4a4a4a] sm:mb-8 lg:mb-10 lg:leading-[44px]">
            Get Approved With Confidence
          </h2>

          <Stagger className="flex flex-col gap-5">
            {STEPS.map((step) => (
              <StaggerItem key={step} className="relative">
                <div className="absolute left-[6px] top-[4px] flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#00af66] text-[#00af66]">
                  <ChevronRight className="h-3.5 w-3.5" strokeWidth={3} />
                </div>
                <p className="m-0 ml-[45px] text-[16px] leading-normal text-[#4a4a4a]">
                  {step}
                </p>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-10">
            <Link
              href="/financing"
              className="inline-flex h-[50px] w-full items-center justify-center rounded-[6px] bg-[#00af66] text-[16px] font-semibold text-white shadow-[0_4px_14px_rgba(0, 175, 102,0.28)] transition-all duration-300 hover:scale-[1.03] hover:opacity-90 sm:w-[275px]"
            >
              Get Pre-Approved
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.12} x={20} scale className="order-2 w-full sm:w-1/2">
          <Image
            src="/canadadrives/shop-with-confidence.webp"
            alt="Get approved with confidence at Carma Credit"
            width={1060}
            height={824}
            className="mx-auto h-auto w-full max-w-[530px] object-contain"
            priority={false}
          />
        </Reveal>
      </div>
    </section>
  );
};

export default ShopWithConfidence;
