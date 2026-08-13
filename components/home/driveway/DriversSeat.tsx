"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { easeOut, Reveal } from "./motion";

type Card = {
  heading: string;
  title: string;
  subheading: string;
  color: string;
  /** vertical = tall narrow accent; horizontal = wide short accent behind image */
  orientation: "vertical" | "horizontal";
  image: string;
  imageAlt: string;
  listItems: string[];
  ctas: { label: string; href: string; variant: "primary" | "secondary" | "tertiary" }[];
};

const CARDS: Card[] = [
  {
    heading: "Finance",
    title: "No commitment required.",
    subheading: "Get pre-approved to see rates and terms for cars that fit your budget.",
    color: "#FF8D7D",
    orientation: "vertical",
    image: "/driveway/drivers-seat/finance.jpg",
    imageAlt: "Woman looking at Carma Credit on her mobile phone",
    listItems: [
      "100% online lending",
      "We help you get approved",
      "Pre-approval does not impact your credit score",
    ],
    ctas: [
      { label: "Get Pre-Approved", href: "/financing", variant: "primary" },
      { label: "Learn More", href: "/financing", variant: "tertiary" },
    ],
  },
  {
    heading: "Pre-Approve",
    title: "Know your budget before you buy.",
    subheading: "See real rates and terms with no impact to your credit score.",
    color: "#EBE3D5",
    orientation: "horizontal",
    image: "/driveway/drivers-seat/shop.jpg",
    imageAlt: "Family ready for their next vehicle adventure",
    listItems: [
      "Fast online pre-approval",
      "Personalized financing options for your situation",
      "Transparent terms with no obligation",
    ],
    ctas: [
      { label: "Get Pre-Approved", href: "/financing", variant: "primary" },
      { label: "Payment Calculator", href: "/payment-calculator", variant: "secondary" },
    ],
  },
  {
    heading: "Sell or Trade",
    title: "Have a trade-in? We pay top dollar.",
    subheading: "Cut out the negotiations and get an offer within minutes.",
    color: "#184F56",
    orientation: "vertical",
    image: "/driveway/drivers-seat/sell.jpg",
    imageAlt: "Woman handing keys to her sold car to a Carma Credit valet",
    listItems: [
      "Instant offer, valid for 7 days",
      "Quick vehicle verification from the comfort of your home.",
      "We pick up your car and you get paid",
    ],
    ctas: [{ label: "Get an Offer", href: "/trade-in-my-car", variant: "primary" }],
  },
  {
    heading: "Service",
    title: "Protect your ride, nationwide",
    subheading: "Service through Carma Credit makes car maintenance a breeze.",
    color: "#6D94D6",
    orientation: "horizontal",
    image: "/driveway/drivers-seat/service.png",
    imageAlt: "Carma Credit service worker helping a customer",
    listItems: [
      "Locations across the country",
      "Set your preferred service center with a Carma Credit account",
      "Schedule routine maintenance and in-warranty work",
    ],
    ctas: [{ label: "Log In & Get Started", href: "/service", variant: "primary" }],
  },
];

const DriversSeat = () => {
  const [index, setIndex] = useState(0);
  const total = CARDS.length;
  const card = CARDS[index];
  const reduce = useReducedMotion();

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 7000);
    return () => clearInterval(id);
  }, [total]);

  return (
    <section
      id="drivers-seat"
      className="dw-font w-full bg-[#F5F5F5] pt-12 pb-10 md:pt-16 lg:pt-24"
    >
      <div className="mx-auto max-w-[1440px] px-4 md:px-6">
        <Reveal className="mx-auto max-w-[420px] md:max-w-none">
          <h2 className="text-left text-[32px] font-bold leading-[1.2] tracking-[-0.6px] text-[#121212] md:text-center md:text-[40px] md:tracking-[-1.2px] lg:text-[56px] lg:tracking-[-1.5px]">
            You’re in the driver’s seat
          </h2>
          <p className="mt-4 mb-6 text-left text-[16px] leading-[1.5] text-[#353535] md:mb-6 md:text-center md:text-[18px] lg:mb-8 lg:mt-6">
            Wherever you adventure, we&apos;re here to help you navigate.
          </p>
        </Reveal>

        {/* Carousel: arrows sit left/right of card (Driveway DWCarousel padding 0 60px) */}
        <div className="relative px-0 md:px-[60px]">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => setIndex((i) => (i - 1 + total) % total)}
            className="absolute left-1 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#d0d0d0] bg-white text-[#00af66] shadow-sm transition-colors hover:bg-[#00af66] hover:text-white md:left-4 xl:left-12"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Next slide"
            onClick={() => setIndex((i) => (i + 1) % total)}
            className="absolute right-1 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#d0d0d0] bg-white text-[#00af66] shadow-sm transition-colors hover:bg-[#00af66] hover:text-white md:right-4 xl:right-12"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* White card — desktop: copy left, image right */}
          <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: easeOut }}
            className="mx-auto w-full max-w-[420px] bg-white px-4 py-8 text-[#353535] min-[420px]:px-6 md:flex md:max-w-none md:flex-row-reverse md:justify-center md:px-10 md:py-11"
          >
            {/* Image with colored accent behind */}
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
                className={[
                  "absolute z-[1] rounded-lg",
                  card.orientation === "vertical"
                    ? "h-full w-[58%] md:w-[76%] lg:w-[58%] xl:w-[76%] 2xl:w-[58%]"
                    : "h-[81%] w-full xl:h-[76%] 2xl:h-[81%]",
                ].join(" ")}
                style={{ backgroundColor: card.color }}
              />
              <div className="relative z-[2] h-[81%] w-full">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  className="rounded-2xl object-cover"
                  sizes="(max-width: 768px) 100vw, 636px"
                  priority={index === 0}
                />
              </div>
            </div>

            {/* Copy */}
            <div className="relative flex flex-col justify-center md:mr-12 md:w-[332px] md:shrink-0 lg:mr-[70px] lg:w-[415px] xl:mr-[90px] xl:w-[453px] 2xl:mr-[112px] 2xl:w-[438px]">
              <p className="text-[16px] font-medium uppercase tracking-[1px] text-[#184F56]">
                {card.heading}
              </p>
              <h3 className="mb-4 mt-2 min-h-[70px] text-[29px] font-bold leading-[1.2] tracking-[-0.6px] text-[#121212] md:min-h-0 md:text-[33px] md:tracking-[-0.7px] xl:mt-4 xl:text-[39px] xl:tracking-[-1.2px]">
                {card.title}
              </h3>
              <p className="mb-4 text-[15px] leading-relaxed text-[#353535] md:mb-5">
                {card.subheading}
              </p>

              <ul className="mb-6 list-none space-y-2 p-0 md:mb-6 md:ml-4">
                {card.listItems.map((item) => (
                  <li key={item} className="flex items-start pb-2 xl:max-w-[400px] 2xl:max-w-[442px]">
                    <Check
                      className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-[#184F56]"
                      strokeWidth={3}
                    />
                    <span className="text-[15px] leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center justify-start gap-y-3">
                {card.ctas.map((cta, i) => {
                  if (cta.variant === "tertiary") {
                    return (
                      <Link
                        key={cta.label}
                        href={cta.href}
                        className="text-[15px] font-semibold text-[#00af66] underline underline-offset-4"
                      >
                        {cta.label}
                      </Link>
                    );
                  }
                  if (cta.variant === "secondary") {
                    return (
                      <Link
                        key={cta.label}
                        href={cta.href}
                        className="inline-flex items-center justify-center rounded-full border-2 border-[#00af66] px-8 py-3 text-[16px] font-semibold text-[#00af66]"
                      >
                        {cta.label}
                      </Link>
                    );
                  }
                  return (
                    <Link
                      key={cta.label}
                      href={cta.href}
                      className={`inline-flex items-center justify-center rounded-full bg-[#00af66] px-8 py-3 text-[16px] font-semibold text-white hover:bg-[#009554] ${
                        i === 0 ? "mr-4 max-w-[200px]" : ""
                      }`}
                    >
                      {cta.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots below card (Driveway pagination) */}
        <div className="flex items-center justify-center gap-[11px] px-4 pb-4 pt-4">
          {CARDS.map((c, i) => (
            <button
              key={c.heading}
              type="button"
              aria-label={`Go to ${c.heading}`}
              aria-current={i === index ? "true" : undefined}
              onClick={() => setIndex(i)}
              className={`h-2 cursor-pointer transition-all duration-300 ${
                i === index
                  ? "w-6 rounded-[20px] bg-[#00af66]"
                  : "w-2 rounded-full bg-[#c5c5c5]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DriversSeat;
