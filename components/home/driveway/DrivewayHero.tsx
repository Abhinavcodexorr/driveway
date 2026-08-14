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
    <section className="dw-font relative w-full overflow-hidden bg-[#00af66]">
      {/* Desktop layout — left copy + right lifestyle image */}
      <div className="relative mx-auto hidden max-w-[1440px] lg:grid lg:min-h-[520px] lg:grid-cols-[1fr_minmax(360px,46%)] lg:items-end xl:min-h-[597px]">
        <div className="relative z-10 self-center pb-8 pl-8 pr-6 pt-14 xl:pb-10 xl:pl-24 xl:pr-8 xl:pt-[72px]">
          <motion.h1
            {...enter(0.05, 32)}
            className="m-0 mb-2 max-w-[640px] text-left text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-white xl:text-[64px] 2xl:text-[76px]"
          >
            Auto Done <span className="text-[#FF8D7D]">Easy</span>
          </motion.h1>
          <motion.p
            {...enter(0.18)}
            className="mb-6 max-w-[520px] text-left text-[18px] font-normal leading-normal text-white xl:mb-8 xl:text-[20px]"
          >
            We make car financing and ownership a breeze.
          </motion.p>

          <motion.div
            {...enter(0.3)}
            className="mb-5 flex flex-row flex-wrap items-center gap-3 xl:gap-4"
          >
            <Link
              href="/financing"
              className="inline-flex h-[52px] items-center justify-center rounded-full bg-white px-8 text-[17px] font-semibold text-[#00af66] transition-transform duration-300 hover:scale-[1.03] hover:opacity-90 xl:h-[62px] xl:px-12 xl:text-[20px]"
            >
              Get Pre-Approved
            </Link>
            <Link
              href="/trade-in-my-car"
              className="inline-flex h-[52px] items-center justify-center rounded-full border-2 border-white bg-transparent px-8 text-[17px] font-semibold text-white transition-transform duration-300 hover:scale-[1.03] hover:opacity-90 xl:h-[62px] xl:px-12 xl:text-[20px]"
            >
              Sell or Trade
            </Link>
          </motion.div>

          <motion.div
            {...enter(0.42)}
            className="flex items-center gap-2 text-left text-[16px] text-white xl:text-[18px]"
          >
            <span>or</span>
            <Link href="/payment-calculator" className="font-semibold underline underline-offset-4">
              Payment Calculator
            </Link>
          </motion.div>
        </div>

        <motion.div
          {...enter(0.2, 0, 40)}
          className="relative z-0 flex h-full min-h-[420px] items-end justify-end xl:min-h-[520px]"
        >
          <Image
            src={HERO_IMAGES.desktop}
            alt="Happy customer with their car"
            width={665}
            height={544}
            priority
            className="h-auto w-full max-w-[665px] object-contain object-bottom"
          />
        </motion.div>
      </div>

      {/* Mobile / tablet layout */}
      <div className="flex flex-col items-center px-4 pb-0 pt-8 text-center sm:px-6 sm:pt-10 lg:hidden">
        <motion.h1
          {...enter(0.05, 28)}
          className="m-0 mb-3 text-[clamp(1.85rem,7vw,2.55rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white"
        >
          Welcome to Auto Done <span className="text-[#FF8D7D]">Easy</span>
        </motion.h1>
        <motion.p
          {...enter(0.16)}
          className="mb-6 max-w-[36rem] text-[16px] font-normal text-white sm:mb-8 sm:text-[18px]"
        >
          We make car financing and ownership a breeze.
        </motion.p>

        <motion.div
          {...enter(0.28)}
          className="mb-4 flex w-full max-w-[400px] flex-col gap-3"
        >
          <Link
            href="/financing"
            className="inline-flex h-[52px] w-full items-center justify-center whitespace-nowrap rounded-full bg-white px-6 text-[16px] font-semibold text-[#00af66] transition-transform duration-300 active:scale-[0.98] sm:h-[56px] sm:text-[17px]"
          >
            Get Pre-Approved
          </Link>
          <Link
            href="/trade-in-my-car"
            className="inline-flex h-[52px] w-full items-center justify-center whitespace-nowrap rounded-full border-2 border-white bg-transparent px-6 text-[16px] font-semibold text-white transition-transform duration-300 active:scale-[0.98] sm:h-[56px] sm:text-[17px]"
          >
            Sell or Trade
          </Link>
        </motion.div>

        <motion.div
          {...enter(0.4)}
          className="mb-2 flex items-center gap-2 text-[16px] text-white sm:text-[18px]"
        >
          <span>or</span>
          <Link href="/payment-calculator" className="font-semibold underline underline-offset-4">
            Payment Calculator
          </Link>
        </motion.div>

        <motion.div {...enter(0.35, 36)} className="mt-2 w-full max-w-[380px]">
          <Image
            src={HERO_IMAGES.mobile}
            alt="Happy customer with their car"
            width={380}
            height={296}
            priority
            className="mx-auto h-auto w-full object-contain object-bottom"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default DrivewayHero;
