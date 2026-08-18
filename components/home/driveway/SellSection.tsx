"use client";

import { TradeQuoteForm } from "@/components/common";
import { Reveal } from "./motion";

const SellSection = () => {
  return (
    <section className="dw-font w-full bg-[#1451b5] px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:pb-8 lg:pt-12 xl:px-[120px]">
      <div className="mx-auto flex max-w-[1100px] flex-col items-stretch gap-8 sm:gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <Reveal className="flex w-full max-w-[560px] flex-col items-start justify-center text-left lg:flex-1 lg:max-w-none" x={-24}>
          <h2 className="mb-3 w-full text-left text-[clamp(1.35rem,6.2vw,3.25rem)] font-bold leading-tight text-white sm:mb-4">
            What’s my car worth?
          </h2>
          <p className="w-full max-w-[520px] text-left text-[16px] leading-relaxed text-white/95 sm:text-[18px] md:text-[20px]">
            We’ve got a tried-and-true system for getting you a guaranteed, no-haggle
            price for your vehicle. Sell with confidence and collect cash for your ride.
          </p>
        </Reveal>

        <Reveal delay={0.12} x={24} className="w-full max-w-[440px] shrink-0">
          <TradeQuoteForm />
        </Reveal>
      </div>
    </section>
  );
};

export default SellSection;
