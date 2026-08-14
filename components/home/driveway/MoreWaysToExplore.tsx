"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./motion";

const MoreWaysToExplore = () => {
  return (
    <section className="dw-font flex w-full justify-center bg-[#E3E9EA]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-5 px-4 py-10 sm:gap-6 sm:px-6 sm:py-12 lg:flex-row lg:gap-8 lg:px-16 xl:px-24">
        <Reveal x={-28}>
          <Image
            src="/driveway/airstream-illustration.svg"
            alt=""
            aria-hidden
            width={248}
            height={122}
            className="h-auto w-[min(248px,70vw)] shrink-0 object-contain"
          />
        </Reveal>

        <Reveal delay={0.1} className="flex w-full flex-col items-stretch gap-4 text-center sm:items-start sm:text-left lg:flex-1 lg:flex-row lg:items-center lg:gap-3">
          <div className="flex flex-1 flex-col gap-3 sm:gap-4">
            <h2 className="m-0 text-[20px] font-bold leading-[1.3] text-[#353535] sm:text-[22px] md:text-[25px] md:leading-[32.5px]">
              More ways to Explore
            </h2>
            <p className="m-0 text-[15px] leading-[1.5] text-[#353535] sm:text-[16px] md:text-[18px] md:leading-[27px]">
              Looking for an RV? We can connect you with Airstream Adventures as
              part of the Lithia network.
            </p>
          </div>

          <Link
            href="https://www.airstreamadventures.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex w-full shrink-0 cursor-pointer items-center justify-center whitespace-nowrap rounded-full px-8 py-3.5 text-[16px] font-semibold leading-[1.5] text-[#00af66] transition-transform duration-300 hover:scale-[1.03] hover:bg-[rgba(31,31,31,0.1)] sm:w-auto sm:px-12 sm:py-4 sm:text-[18px] md:text-[20px] md:leading-[30px] after:absolute after:inset-0 after:rounded-full after:border-2 after:border-[#00af66] after:content-['']"
          >
            Discover More
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default MoreWaysToExplore;
