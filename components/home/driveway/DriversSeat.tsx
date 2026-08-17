"use client";

import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Reveal } from "./motion";

const CARD = {
  heading: "Finance",
  title: "No commitment required.",
  subheading: "Get pre-approved to see rates and terms for cars that fit your budget.",
  color: "#FF8D7D",
  image: "/driveway/drivers-seat/finance.jpg",
  imageAlt: "Woman looking at Carma Credit on her mobile phone",
  listItems: [
    "100% online lending",
    "We help you get approved",
    "Pre-approval does not impact your credit score",
  ],
};

const DriversSeat = () => {
  return (
    <section
      id="drivers-seat"
      className="dw-font w-full bg-[#F5F5F5] pt-10 pb-8 md:pt-14 lg:pt-16 lg:pb-12"
    >
      <div className="mx-auto max-w-[1440px] px-4 md:px-6">
        <Reveal className="mx-auto max-w-[420px] md:max-w-none">
          <h2 className="text-left text-[clamp(1.75rem,6vw,3.5rem)] font-bold leading-[1.2] tracking-[-0.6px] text-[#121212] md:text-center md:tracking-[-1.2px] lg:tracking-[-1.5px]">
            You’re in the driver’s seat
          </h2>
          <p className="mt-4 mb-6 text-left text-[16px] leading-[1.5] text-[#353535] md:mb-8 md:text-center md:text-[18px] lg:mb-10 lg:mt-6">
            Wherever you adventure, we&apos;re here to help you navigate.
          </p>
        </Reveal>

        <Reveal>
          <article className="mx-auto w-full max-w-[420px] bg-white px-4 py-8 text-[#353535] min-[420px]:px-6 md:flex md:max-w-none md:flex-row-reverse md:justify-center md:px-10 md:py-11">
            <div
              className={[
                "relative mx-auto my-4 flex h-[203px] w-full items-center justify-center",
                "min-[420px]:h-[262px]",
                "md:mx-0 md:h-[324px] md:w-[460px]",
                "xl:h-[444px] xl:w-[421px]",
                "2xl:h-[448px] 2xl:w-[636px]",
              ].join(" ")}
            >
              <div
                aria-hidden
                className="absolute z-[1] h-full w-[58%] rounded-lg md:w-[76%] lg:w-[58%] xl:w-[76%] 2xl:w-[58%]"
                style={{ backgroundColor: CARD.color }}
              />
              <div className="relative z-[2] h-[81%] w-full">
                <Image
                  src={CARD.image}
                  alt={CARD.imageAlt}
                  fill
                  className="rounded-2xl object-cover"
                  sizes="(max-width: 768px) 100vw, 636px"
                  priority
                />
              </div>
            </div>

            <div className="relative flex flex-col justify-center md:mr-12 md:w-[332px] md:shrink-0 lg:mr-[70px] lg:w-[415px] xl:mr-[90px] xl:w-[453px] 2xl:mr-[112px] 2xl:w-[438px]">
              <p className="text-[16px] font-medium uppercase tracking-[1px] text-[#184F56]">
                {CARD.heading}
              </p>
              <h3 className="mb-4 mt-2 min-h-[70px] text-[29px] font-bold leading-[1.2] tracking-[-0.6px] text-[#121212] md:min-h-0 md:text-[33px] md:tracking-[-0.7px] xl:mt-4 xl:text-[39px] xl:tracking-[-1.2px]">
                {CARD.title}
              </h3>
              <p className="mb-4 text-[15px] leading-relaxed text-[#353535] md:mb-5">
                {CARD.subheading}
              </p>

              <ul className="mb-6 list-none space-y-2 p-0 md:mb-6 md:ml-4">
                {CARD.listItems.map((item) => (
                  <li key={item} className="flex items-start pb-2 xl:max-w-[400px] 2xl:max-w-[442px]">
                    <Check
                      className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-[#184F56]"
                      strokeWidth={3}
                    />
                    <span className="text-[15px] leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/financing"
                className="inline-flex w-full items-center justify-center rounded-full border-2 border-[#007aff] bg-[#007aff] px-8 py-3 text-[16px] font-semibold text-white hover:border-[#0066d6] hover:bg-[#0066d6] sm:w-auto"
              >
                Get Pre-Approved
              </Link>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
};

export default DriversSeat;
