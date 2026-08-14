"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./motion";

const PRIVATE = [
  "Weeks of listings and tire-kickers",
  "Awkward meetups with strangers",
  "Lowball offers and no-shows",
  "Paperwork and payment risk",
] as const;

const CARMA = [
  "Instant online offer in minutes",
  "Safe drop-off — no strangers",
  "Fair market-based pricing",
  "Same-day payment when you sell",
] as const;

const DeliveredByDriveway = () => {
  return (
    <section className="dw-font w-full bg-[#F9F7F2] px-4 py-14 sm:px-6 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1120px]">
        <Reveal className="mx-auto mb-10 max-w-[680px] text-center md:mb-12">
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#00af66]">
            Why sell with Carma
          </p>
          <h2 className="text-[clamp(1.75rem,3.8vw,2.75rem)] font-bold leading-[1.15] tracking-[-0.03em] text-[#121212]">
            Private sale headaches? We take them off your plate.
          </h2>
        </Reveal>

        <div className="grid items-stretch gap-5 lg:grid-cols-[1fr_1.05fr] lg:gap-8">
          {/* Comparison cards */}
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:gap-5">
            <StaggerItem>
              <article className="h-full rounded-2xl border border-[#E6E2DA] bg-white/70 p-6 md:p-7">
                <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#8A857C]">
                  Selling privately
                </p>
                <ul className="m-0 space-y-3.5 p-0 list-none">
                  {PRIVATE.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] leading-snug text-[#5C574F] md:text-[16px]">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F1EDEA] text-[#9A9288]">
                        <X className="h-3.5 w-3.5" strokeWidth={2.5} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>

            <StaggerItem>
              <article className="h-full rounded-2xl border-2 border-[#00af66]/25 bg-white p-6 shadow-[0_12px_40px_rgba(0,175,102,0.08)] md:p-7">
                <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#00af66]">
                  Selling with Carma Credit
                </p>
                <ul className="m-0 space-y-3.5 p-0 list-none">
                  {CARMA.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] font-medium leading-snug text-[#1A1A1A] md:text-[16px]">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EEF8F3] text-[#00af66]">
                        <Check className="h-3.5 w-3.5" strokeWidth={2.75} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/trade-in-my-car"
                  className="mt-7 inline-flex h-12 w-full items-center justify-center rounded-full border-2 border-[#00af66] bg-[#00af66] px-6 text-[15px] font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:opacity-90 sm:w-auto"
                >
                  Get my offer
                </Link>
              </article>
            </StaggerItem>
          </Stagger>

          {/* Visual */}
          <Reveal x={28} delay={0.12} className="relative min-h-[320px] overflow-hidden rounded-2xl bg-[#00af66] lg:min-h-full">
            <Image
              src="/sell-my-car-carma-offer-hd.png"
              alt="Get a cash offer for your car with Carma Credit"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent p-6 pt-16 md:p-8">
              <p className="m-0 text-[18px] font-bold leading-snug text-white md:text-[22px]">
                Your car. A real offer.
                <br />
                Cash in your pocket.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default DeliveredByDriveway;
