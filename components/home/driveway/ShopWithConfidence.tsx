"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./motion";

const STEPS = [
  "Apply for financing online using our simple application.",
  "We’ll match you with a local dealership who will show you vehicle options you are pre-approved for.",
  "Pick the car you want and drive away! No more wasted time. No more rejection.",
] as const;

const ShopWithConfidence = () => {
  return (
    <section className="dw-font w-full bg-white px-6 py-12 sm:py-16 lg:py-[100px]">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-10 sm:flex-row sm:items-center sm:gap-12 lg:gap-16">
        <Reveal x={-20} className="order-1 w-full sm:w-1/2">
          <h2 className="mb-8 max-w-[495px] text-[28px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#4a4a4a] sm:text-[32px] lg:mb-10 lg:text-[36px] lg:leading-[44px]">
            Shop For a Car With Confidence
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
            alt="Shop with confidence"
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
