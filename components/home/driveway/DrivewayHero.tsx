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
      {/* Desktop */}
      <div className="relative mx-auto hidden max-w-[1440px] lg:grid lg:min-h-[420px] lg:grid-cols-[1fr_minmax(460px,1.15fr)] lg:items-end xl:min-h-[460px]">
        <div className="relative z-10 self-center py-8 pl-8 pr-6 xl:py-10 xl:pl-24 xl:pr-8">
          <motion.h1
            {...enter(0.05, 32)}
            className="m-0 mb-2 max-w-[640px] text-left text-[44px] font-bold leading-[1.1] tracking-[-0.02em] text-white xl:text-[56px] 2xl:text-[64px]"
          >
            Auto Done <span className="text-[#FF8D7D]">Easy</span>
          </motion.h1>
          <motion.p
            {...enter(0.18)}
            className="mb-5 max-w-[520px] text-left text-[17px] font-normal leading-normal text-white xl:mb-6 xl:text-[19px]"
          >
            Get pre-approved or sell your car — fast, simple, and stress-free.
          </motion.p>

          <motion.div
            {...enter(0.3)}
            className="flex flex-row flex-wrap items-center gap-3 xl:gap-4"
          >
            <Link
              href="/financing"
              className="inline-flex h-[48px] items-center justify-center rounded-full border-2 border-white bg-white px-8 text-[16px] font-semibold text-[#00af66] transition-transform duration-300 hover:scale-[1.03] hover:opacity-90 xl:h-[54px] xl:px-10 xl:text-[18px]"
            >
              Get Pre-Approved
            </Link>
            <Link
              href="/trade-in-my-car"
              className="inline-flex h-[48px] items-center justify-center rounded-full border-2 border-white bg-transparent px-8 text-[16px] font-semibold text-white transition-transform duration-300 hover:scale-[1.03] hover:opacity-90 xl:h-[54px] xl:px-10 xl:text-[18px]"
            >
              Sell My Car
            </Link>
          </motion.div>
        </div>

        <motion.div
          {...enter(0.2, 36, 20)}
          className="relative z-0 flex h-full min-h-[360px] items-end justify-end xl:min-h-[420px]"
        >
          <Image
            src={HERO_IMAGES.desktop}
            alt="White Mercedes and black BMW luxury cars"
            width={1280}
            height={720}
            priority
            unoptimized
            className="h-auto w-full max-w-[700px] object-contain object-bottom xl:max-w-[760px]"
          />
        </motion.div>
      </div>

      {/* Mobile / tablet */}
      <div className="flex flex-col items-center px-4 pb-0 pt-6 text-center sm:px-6 sm:pt-8 lg:hidden">
        <motion.h1
          {...enter(0.05, 28)}
          className="m-0 mb-2 text-[clamp(1.75rem,6.5vw,2.35rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white"
        >
          Welcome to Auto Done <span className="text-[#FF8D7D]">Easy</span>
        </motion.h1>
        <motion.p
          {...enter(0.16)}
          className="mb-5 max-w-[36rem] text-[15px] font-normal text-white sm:mb-6 sm:text-[17px]"
        >
          Get pre-approved or sell your car — fast, simple, and stress-free.
        </motion.p>

        <motion.div
          {...enter(0.28)}
          className="mb-3 flex w-full max-w-[400px] flex-col gap-3"
        >
          <Link
            href="/financing"
            className="inline-flex h-[48px] w-full items-center justify-center whitespace-nowrap rounded-full border-2 border-white bg-white px-6 text-[16px] font-semibold text-[#00af66] transition-transform duration-300 active:scale-[0.98] sm:h-[52px] sm:text-[17px]"
          >
            Get Pre-Approved
          </Link>
          <Link
            href="/trade-in-my-car"
            className="inline-flex h-[48px] w-full items-center justify-center whitespace-nowrap rounded-full border-2 border-white bg-transparent px-6 text-[16px] font-semibold text-white transition-transform duration-300 active:scale-[0.98] sm:h-[52px] sm:text-[17px]"
          >
            Sell My Car
          </Link>
        </motion.div>

        <motion.div {...enter(0.35, 28)} className="mt-1 w-full max-w-[440px]">
          <Image
            src={HERO_IMAGES.mobile}
            alt="White Mercedes and black BMW luxury cars"
            width={900}
            height={620}
            priority
            unoptimized
            className="mx-auto h-auto w-full object-contain object-bottom"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default DrivewayHero;
