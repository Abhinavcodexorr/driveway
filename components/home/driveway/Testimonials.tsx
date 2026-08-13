"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Link from "next/link";
import { DW_TESTIMONIALS } from "./constants";
import { easeOut, Reveal } from "./motion";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const total = DW_TESTIMONIALS.length;
  const current = DW_TESTIMONIALS[index];
  const reduce = useReducedMotion();

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 5000);
    return () => clearInterval(id);
  }, [total]);

  return (
    <section
      id="driveway-reviews"
      className="dw-font relative w-full bg-[#184F56] px-4 py-12 text-white md:px-6 md:py-14"
    >
      <div className="relative mx-auto max-w-[1100px] px-10 md:px-[60px]">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => setIndex((i) => (i - 1 + total) % total)}
          className="absolute left-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-transparent text-white transition-transform hover:scale-110 md:left-1.5"
        >
          <ChevronLeft className="h-7 w-7" strokeWidth={1.5} />
        </button>

        <button
          type="button"
          aria-label="Next slide"
          onClick={() => setIndex((i) => (i + 1) % total)}
          className="absolute right-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-transparent text-white transition-transform hover:scale-110 md:right-1.5"
        >
          <ChevronRight className="h-7 w-7" strokeWidth={1.5} />
        </button>

        <Reveal className="mx-auto w-full max-w-[637px] text-left md:text-center">
          <div className="mb-4 flex justify-start gap-0.5 md:justify-center" aria-label="5 out of 5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-[#FF8D7D] text-[#FF8D7D]" />
            ))}
          </div>

          <div className="relative min-h-[180px] md:min-h-[160px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: easeOut }}
              >
                <h3 className="mb-2 text-[24px] font-bold leading-tight md:text-[28px]">
                  <span className="mr-2 inline-block align-top text-[44px] leading-none">
                    “
                  </span>
                  {current.title}
                </h3>

                <p className="mx-auto mb-4 max-w-[640px] text-[16px] leading-[1.5] text-white md:text-[18px]">
                  {current.text}
                </p>

                <Link
                  href="/about-us"
                  className="inline-flex items-center text-[16px] font-semibold text-white underline underline-offset-4"
                >
                  {current.name}
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>

      <div className="mt-6 flex items-center justify-center gap-[11px]">
        {DW_TESTIMONIALS.map((t, i) => (
          <button
            key={`${t.name}-${i}`}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index ? "true" : undefined}
            onClick={() => setIndex(i)}
            className={`h-2 cursor-pointer transition-all duration-300 ${
              i === index
                ? "w-6 rounded-[20px] bg-white"
                : "w-2 rounded-full bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
