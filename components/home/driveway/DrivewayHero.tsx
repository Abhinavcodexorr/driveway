"use client";

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
    <section className="dw-font relative w-full overflow-x-clip bg-[#1451b5] pb-0">
      <div className="relative mx-auto flex w-full max-w-[1440px] min-w-0 flex-col lg:grid lg:min-h-[420px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-end lg:pb-0 xl:min-h-[460px]">
        <div className="relative z-10 min-w-0 px-6 pt-12 pb-8 sm:px-8 sm:pt-14 sm:pb-10 md:pl-12 lg:self-center lg:px-0 lg:py-12 lg:pl-12 lg:pr-2 xl:py-14 xl:pl-24 xl:pr-8">
          <motion.h1
            {...enter(0.05, 28)}
            className="m-0 mb-4 -translate-y-1 whitespace-nowrap text-left text-[clamp(2.15rem,9.6vw,2.5rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:mb-4 lg:-translate-y-2 lg:mb-3 lg:text-[clamp(1.35rem,4.4vw,4.85rem)] lg:leading-[1.08] lg:tracking-[-0.03em]"
          >
            Welcome to <span className="text-[#FF8D7D]">Carma</span>
          </motion.h1>
          <motion.p
            {...enter(0.16)}
            className="mb-6 max-w-[560px] text-left text-[1.25rem] font-normal leading-[1.5] text-white sm:mb-7 sm:text-[1.3125rem] lg:mb-6 lg:text-[clamp(1rem,2.2vw,1.4rem)] lg:leading-snug xl:mb-8"
          >
            Get pre-approved or sell your car — fast, simple, and stress-free.
          </motion.p>
          <motion.div
            {...enter(0.28)}
            className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 xl:gap-4"
          >
            <Link
              href="/financing"
              className="inline-flex h-[64px] w-full items-center justify-center whitespace-nowrap rounded-full border-2 border-white bg-white px-8 text-[18px] font-semibold text-[#1451b5] transition-transform duration-300 hover:scale-[1.03] hover:opacity-90 sm:h-14 sm:w-auto sm:px-8 sm:text-[17px] xl:h-[58px] xl:px-10 xl:text-[20px]"
            >
              Get Pre-Approved
            </Link>
            <Link
              href="/trade-in-my-car"
              className="inline-flex h-[64px] w-full items-center justify-center whitespace-nowrap rounded-full border-2 border-white bg-transparent px-8 text-[18px] font-semibold text-white transition-transform duration-300 hover:scale-[1.03] hover:opacity-90 sm:h-14 sm:w-auto sm:px-8 sm:text-[17px] xl:h-[58px] xl:px-10 xl:text-[20px]"
            >
              Sell My Car
            </Link>
          </motion.div>
        </div>

        <motion.div
          {...enter(0.2)}
          className="relative z-0 -mb-px flex min-w-0 items-end justify-center px-0 pb-0 pt-0 lg:mb-0 lg:items-end lg:justify-end lg:self-end lg:overflow-visible lg:px-0 lg:pb-0 lg:pr-3 lg:pt-0 xl:pr-8"
        >
          <img
            src={HERO_IMAGES.mobile}
            alt="Smiling woman using her phone next to a white Lamborghini Urus"
            width={1318}
            height={1015}
            decoding="async"
            fetchPriority="high"
            className="block h-auto w-full max-w-full object-contain object-bottom lg:hidden"
          />
          <img
            src={HERO_IMAGES.desktop}
            alt="Smiling woman using her phone next to a white Lamborghini Urus"
            width={1318}
            height={1015}
            decoding="async"
            fetchPriority="high"
            className="hidden h-auto w-full max-w-none object-contain object-bottom lg:block"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default DrivewayHero;
