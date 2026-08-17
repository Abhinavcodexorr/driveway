"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { HERO_IMAGES } from "./constants";
import { easeOut } from "./motion";

const DrivewayHero = () => {
  const reduce = useReducedMotion();

  const enter = (delay = 0, y = 24, x = 0) =>
    reduce
      ? undefined
      : {
          initial: { opacity: 0, y, x },
          animate: { opacity: 1, y: 0, x: 0 },
          transition: { duration: 0.65, delay, ease: easeOut },
        };

  return (
    <section className="dw-font relative w-full overflow-x-clip bg-[#007aff]">
      <div className="relative mx-auto grid w-full max-w-[1440px] min-w-0 grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] items-end">
        <div className="relative z-10 min-w-0 self-center py-5 pl-3 pr-1 sm:py-7 sm:pl-6 sm:pr-3 md:pl-10 xl:py-10 xl:pl-24 xl:pr-8">
          <motion.h1
            {...enter(0.05, 32)}
            className="m-0 mb-1.5 max-w-[640px] text-left text-[clamp(1.15rem,4.2vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white sm:mb-2 sm:text-[clamp(1.6rem,4vw,3.5rem)]"
          >
            Auto Done <span className="text-[#FF8D7D]">Easy</span>
          </motion.h1>
          <motion.p
            {...enter(0.18)}
            className="mb-3 max-w-[520px] text-left text-[clamp(0.7rem,2.1vw,1.2rem)] font-normal leading-snug text-white sm:mb-5 sm:leading-normal xl:mb-6 xl:text-[19px]"
          >
            Get pre-approved or sell your car — fast, simple, and stress-free.
          </motion.p>

          <motion.div
            {...enter(0.3)}
            className="flex flex-col items-stretch gap-2 min-[380px]:flex-row min-[380px]:flex-wrap min-[380px]:items-center sm:gap-3 xl:gap-4"
          >
            <Link
              href="/financing"
              className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full border-2 border-white bg-white px-3 text-[11px] font-semibold text-[#007aff] transition-transform duration-300 hover:scale-[1.03] hover:opacity-90 sm:h-[48px] sm:px-6 sm:text-[15px] xl:h-[54px] xl:px-10 xl:text-[18px]"
            >
              Get Pre-Approved
            </Link>
            <Link
              href="/trade-in-my-car"
              className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full border-2 border-white bg-transparent px-3 text-[11px] font-semibold text-white transition-transform duration-300 hover:scale-[1.03] hover:opacity-90 sm:h-[48px] sm:px-6 sm:text-[15px] xl:h-[54px] xl:px-10 xl:text-[18px]"
            >
              Sell My Car
            </Link>
          </motion.div>
        </div>

        <motion.div
          {...enter(0.2)}
          className="relative z-0 flex min-h-0 min-w-0 items-end justify-end self-end pr-1 sm:pr-3 xl:pr-4"
        >
          <Image
            src={HERO_IMAGES.desktop}
            alt="White Mercedes and black BMW luxury cars"
            width={1536}
            height={1024}
            priority
            unoptimized
            className="h-auto w-full max-w-[760px] object-contain object-bottom"
            sizes="(max-width: 640px) 55vw, (max-width: 1280px) 50vw, 760px"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default DrivewayHero;
