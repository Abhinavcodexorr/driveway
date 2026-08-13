"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./motion";

const AboutDriveway = () => {
  return (
    <section
      className="dw-font w-full bg-[#F5F5F5] px-4 pt-0 md:px-10"
      style={{
        background:
          "linear-gradient(0deg, #F9F7F2 32px, #00af66 32px, #00af66 calc(100% - 32px), #F5F5F5 calc(100% - 32px), #F5F5F5 100%)",
      }}
    >
      <div className="mx-auto flex min-h-[600px] w-full max-w-[1062px] flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10 xl:gap-12">
        <Reveal
          x={-28}
          className="order-2 w-full pb-12 lg:order-1 lg:max-w-[460px] lg:pb-16 xl:max-w-[482px]"
        >
          <h2 className="mb-2 text-[28px] font-bold leading-[1.2] tracking-[-0.5px] text-white md:mb-4 md:text-[32px] lg:mt-12 lg:mb-4 xl:mt-24 xl:mb-6 xl:text-[39px] xl:tracking-[-1.2px]">
            About Carma Credit
          </h2>

          <div className="space-y-4 lg:max-h-[375px] lg:overflow-hidden">
            <p className="m-0 text-[16px] leading-relaxed text-white md:text-[18px] md:leading-[1.5]">
              Carma Credit makes auto financing simple. Get pre-approved online,
              explore flexible payment options, and move forward with confidence—
              without the pressure of traditional dealership financing. We help
              drivers find rates and terms that fit their budget so buying or
              refinancing a vehicle feels clear and stress-free.
            </p>
            <p className="m-0 text-[16px] leading-relaxed text-white md:text-[18px] md:leading-[1.5]">
              From pre-approval to trade-in support and ongoing ownership
              tools, our journey is powered by people, transparency, and a
              commitment to making vehicle financing easy for everyone.
            </p>
          </div>

          <Link
            href="/about-us"
            className="mt-2 inline-block cursor-pointer px-1 py-0.5 text-[16px] font-semibold text-white no-underline transition-opacity hover:opacity-80 md:mt-4 md:text-[18px] xl:mt-6"
          >
            <span className="border-b border-white pb-0.5">Learn More</span>
          </Link>
        </Reveal>

        <Reveal x={28} delay={0.1} className="order-1 w-full shrink-0 lg:order-2 lg:w-[445px] xl:w-[540px]">
          <Image
            src="/driveway/about-driveway.jpg"
            alt="Carma Credit team helping customers with their vehicle"
            width={1059}
            height={706}
            className="mt-8 h-[300px] w-full rounded-2xl object-cover object-top sm:h-[385px] md:h-[374px] lg:mt-0 lg:h-auto lg:min-h-[582px] xl:min-h-[705px]"
          />
        </Reveal>
      </div>
    </section>
  );
};

export default AboutDriveway;
