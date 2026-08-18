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
    <section className="dw-font relative w-full overflow-x-clip bg-[#1451b5]">
      <div className="relative mx-auto flex w-full max-w-[1440px] min-w-0 flex-col lg:grid lg:min-h-[420px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-center lg:pb-6 xl:min-h-[460px]">
        <div className="relative z-10 min-w-0 py-8 pl-4 pr-4 sm:py-10 sm:pl-8 sm:pr-6 md:pl-12 lg:py-12 lg:pr-2 xl:py-14 xl:pl-24 xl:pr-8">
          <motion.h1
            {...enter(0.05, 28)}
            className="m-0 mb-2 text-left text-[clamp(1.2rem,3.7vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-white sm:mb-3 lg:whitespace-nowrap"
          >
            Auto Done <span className="text-[#FF8D7D]">Easy</span>
          </motion.h1>
          <motion.p
            {...enter(0.16)}
            className="mb-4 max-w-[520px] text-left text-[clamp(0.8rem,2.05vw,1.25rem)] font-normal leading-snug text-white sm:mb-6 sm:leading-normal xl:mb-7"
          >
            Get pre-approved or sell your car — fast, simple, and stress-free.
          </motion.p>
          <motion.div
            {...enter(0.28)}
            className="flex flex-col items-stretch gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 xl:gap-4"
          >
            <Link
              href="/financing"
              className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-full border-2 border-white bg-white px-4 text-[13px] font-semibold text-[#1451b5] transition-transform duration-300 hover:scale-[1.03] hover:opacity-90 sm:h-12 sm:px-7 sm:text-[16px] xl:h-[54px] xl:px-10 xl:text-[18px]"
            >
              Get Pre-Approved
            </Link>
            <Link
              href="/trade-in-my-car"
              className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-full border-2 border-white bg-transparent px-4 text-[13px] font-semibold text-white transition-transform duration-300 hover:scale-[1.03] hover:opacity-90 sm:h-12 sm:px-7 sm:text-[16px] xl:h-[54px] xl:px-10 xl:text-[18px]"
            >
              Sell My Car
            </Link>
          </motion.div>
        </div>

        <motion.div
          {...enter(0.2)}
          className="relative z-0 flex min-w-0 items-center justify-center px-3 pb-4 pt-1 sm:px-5 sm:pb-5 lg:justify-end lg:pr-3 lg:pt-0 xl:pr-8"
        >
          <Image
            src={HERO_IMAGES.mobile}
            alt="White Mercedes and black BMW luxury cars"
            width={1400}
            height={460}
            priority
            unoptimized
            className="h-auto w-full max-w-full object-contain object-bottom lg:hidden"
            sizes="100vw"
          />
          <Image
            src={HERO_IMAGES.desktop}
            alt="White Mercedes and black BMW luxury cars"
            width={1800}
            height={640}
            priority
            unoptimized
            className="hidden h-auto w-full max-w-none object-contain object-center lg:block"
            sizes="(min-width: 1024px) 64vw, 100vw"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default DrivewayHero;
