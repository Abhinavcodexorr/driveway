"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./motion";

const MoreWaysToExplore = () => {
  return (
    <section className="dw-font flex w-full justify-center bg-[#E3E9EA]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-6 px-6 py-12 lg:flex-row lg:gap-8 lg:px-24">
        <Reveal x={-28}>
          <Image
            src="/driveway/airstream-illustration.svg"
            alt=""
            aria-hidden
            width={248}
            height={122}
            className="h-[122px] w-[248px] shrink-0 object-contain"
          />
        </Reveal>

        <Reveal delay={0.1} className="flex w-full flex-col items-start gap-4 lg:flex-1 lg:flex-row lg:items-center lg:gap-3">
          <div className="flex flex-1 flex-col gap-4">
            <h2 className="m-0 text-[22px] font-bold leading-[1.3] text-[#353535] md:text-[25px] md:leading-[32.5px]">
              More ways to Explore
            </h2>
            <p className="m-0 text-[16px] leading-[1.5] text-[#353535] md:text-[18px] md:leading-[27px]">
              Looking for an RV? We can connect you with Airstream Adventures as
              part of the Lithia network.
            </p>
          </div>

          <Link
            href="https://www.airstreamadventures.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap rounded-full px-12 py-4 text-[18px] font-semibold leading-[1.5] text-[#1451B5] transition-transform duration-300 hover:scale-[1.03] hover:bg-[rgba(31,31,31,0.1)] md:text-[20px] md:leading-[30px] after:absolute after:inset-0 after:rounded-full after:border after:border-[#1451B5] after:content-['']"
          >
            Discover More
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default MoreWaysToExplore;
