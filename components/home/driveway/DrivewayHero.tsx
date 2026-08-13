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
      <div className="relative mx-auto hidden max-w-[1440px] lg:grid lg:min-h-[597px] lg:grid-cols-[1fr_minmax(420px,46%)] lg:items-end">
        <div className="relative z-10 self-center pb-10 pl-16 pr-8 pt-[72px] xl:pl-24">
          <motion.h1
            {...enter(0.05, 32)}
            className="m-0 mb-2 max-w-[640px] text-left text-[64px] font-bold leading-[1.1] tracking-[-0.02em] text-white xl:text-[76px]"
          >
            Auto Done <span className="text-[#FF8D7D]">Easy</span>
          </motion.h1>
          <motion.p
            {...enter(0.18)}
            className="mb-8 max-w-[520px] text-left text-[20px] font-normal leading-normal text-white"
          >
            We make car financing and ownership a breeze.
          </motion.p>

          <motion.div
            {...enter(0.3)}
            className="mb-5 flex flex-row flex-wrap items-center gap-4"
          >
            <Link
              href="/financing"
              className="inline-flex h-[62px] items-center justify-center rounded-full bg-white px-12 text-[20px] font-semibold text-[#00af66] transition-transform duration-300 hover:scale-[1.03] hover:opacity-90"
            >
              Get Pre-Approved
            </Link>
            <Link
              href="/trade-in-my-car"
              className="inline-flex h-[62px] items-center justify-center rounded-full border-2 border-white bg-transparent px-12 text-[20px] font-semibold text-white transition-transform duration-300 hover:scale-[1.03] hover:opacity-90"
            >
              Sell or Trade
            </Link>
          </motion.div>

          <motion.div
            {...enter(0.42)}
            className="flex items-center gap-2 text-left text-[18px] text-white"
          >
            <span>or</span>
            <Link href="/payment-calculator" className="font-semibold underline underline-offset-4">
              Payment Calculator
            </Link>
          </motion.div>
        </div>

        <motion.div
          {...enter(0.2, 0, 40)}
          className="relative z-0 flex h-full min-h-[520px] items-end justify-end"
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

      {/* Mobile layout — centered copy + image below */}
      <div className="flex flex-col items-center px-6 pt-10 text-center lg:hidden">
        <motion.h1
          {...enter(0.05, 28)}
          className="m-0 mb-3 text-[41px] font-bold leading-[1.1] tracking-[-0.02em] text-white"
        >
          Welcome to Auto Done <span className="text-[#FF8D7D]">Easy</span>
        </motion.h1>
        <motion.p {...enter(0.16)} className="mb-8 text-[18px] font-normal text-white">
          We make car financing and ownership a breeze.
        </motion.p>

        <motion.div {...enter(0.28)} className="mb-4 flex w-full max-w-[400px] flex-col gap-3">
          <Link
            href="/financing"
            className="inline-flex h-[59px] w-full items-center justify-center rounded-full bg-white px-12 text-[18px] font-semibold text-[#00af66] transition-transform duration-300 active:scale-[0.98]"
          >
            Get Pre-Approved
          </Link>
          <Link
            href="/trade-in-my-car"
            className="inline-flex h-[59px] w-full items-center justify-center rounded-full border-2 border-white bg-transparent px-12 text-[18px] font-semibold text-white transition-transform duration-300 active:scale-[0.98]"
          >
            Sell or Trade
          </Link>
        </motion.div>

        <motion.div
          {...enter(0.4)}
          className="mb-2 flex items-center gap-2 text-[18px] text-white"
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
