/* =========================
   Trade-In Page
   Allows users to get a vehicle valuation offer.
   Sections:
   - Hero with quote form (By Vehicle / VIN toggle)
   - "How it works" step-by-step with image
   - FAQ accordion
   - GetInTouch → Footer
========================= */

"use client";

import { useState } from "react";
import { FileText, Mail, CalendarCheck, CarFrontIcon } from "lucide-react";
import Image from "next/image";

// Layout
import { Header, Footer } from "@/components/layout";

// Shared components
import { GetInTouch } from "@/components/common";
import FaqAccordion from "@/components/common/FaqAccordion";

// Assets
import { getConstants } from "@/constants";
import { useAppConfig } from "@/app/providers";

const SELL_HERO_IMAGE = "/sell-my-car-carma-offer-hd.png";

/* Static Data */
const steps = [
  {
    icon: CarFrontIcon,
    title: "Find your car",
    description: "Enter your VIN or vehicle details to find the car you want to sell.",
  },
  {
    icon: FileText,
    title: "Tell us about your car",
    description: "Answer some quick questions about your car and its condition, and provide your details so we can contact you.",
  },
  {
    icon: Mail,
    title: "We'll send you an offer",
    description: "If no additional information is required, you'll receive our offer for your car in one business day.",
  },
  {
    icon: CalendarCheck,
    title: "Book an inspection and get paid",
    description: "If you choose to accept our offer, you can book an inspection to confirm your car's condition and get paid.",
  },
];

const faqs = [
  {
    q: "How does selling my car work?",
    a: "Selling your car is fast and easy. Simply enter your vehicle details, get an instant online offer, schedule a quick inspection, and get paid on the spot. No obligations, no pushy salespeople.",
  },
  {
    q: "What documents do I need to sell my car?",
    a: "You'll need: Valid government ID, Vehicle Ownership, All keys & fobs. If your car has a loan or lease, bring the payoff letter and we'll handle the rest.",
  },
  {
    q: "Do you buy cars that still have a loan or financing on them?",
    a: "Yes! We'll pay off your existing loan or lease directly with the bank. If your car is worth more than the payoff, you keep the difference. If it's worth less, we'll guide you on the best options.",
  },
  {
    q: "How long is my online offer valid for?",
    a: "Your offer is valid for 7 days. This gives you enough time to compare options without feeling rushed.",
  },
  {
    q: "How quickly do I get paid?",
    a: "You get paid the same day you bring your car in. Payment can be made via EMT, cheque, or direct deposit—whichever is easiest for you.",
  },
  {
    q: "Do I need to buy a car to sell you mine?",
    a: "Not at all. We buy cars even if you're not purchasing one from us. Many customers simply want cash or want to get rid of an unused vehicle.",
  },
  {
    q: "How do you determine my vehicle's value?",
    a: "We use real-time market data, vehicle history, condition reports, and recent sales in your area to give you an accurate and competitive offer. No guesswork—just transparent pricing.",
  },
  {
    q: "What if I owe more on my car than it's worth?",
    a: "This is very common. We can still buy your car. We'll calculate the shortfall and help you determine the best way to clear the loan.",
  },
];

/* Page Component */
const TradeIn = () => {
  const appConfig = useAppConfig();
  const { SITE_CONFIG } = getConstants(appConfig);
  const [mode, setMode] = useState<"vehicle" | "vin">("vehicle");

  const TRADE_FORMS = {
    vehicle: {
      url: SITE_CONFIG.urls.tradeFormByVehicle,
      minHeight: 447,
    },
    vin: {
      url: SITE_CONFIG.urls.tradeFormByVin,
      minHeight: 327,
    },
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-background">
      <Header />

      {/* Hero / Quote form */}
      <section className="relative w-full px-4 lg:mt-6 lg:px-24">
        <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-6 px-0 pb-5 pt-4 md:px-9 lg:flex-row lg:items-start lg:gap-10 lg:pt-8">
          <div className="w-full text-left lg:w-auto">
            <h1 className="max-w-xl text-[28px] font-bold leading-[1.1] tracking-tight text-gray-950 sm:text-[34px] md:text-[44px] lg:text-[66px]">
              Sell my car the easy way.
            </h1>
            <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-black sm:text-[18px] lg:mt-6 lg:text-[23px]">
              Fast, seamless and secure. It&apos;s the way everyone{" "}
              <br className="hidden lg:inline" /> deserves.
            </p>
          </div>

          {/* Mobile graphic */}
          <div className="pointer-events-none relative block w-full px-0 lg:hidden">
            <div className="relative flex h-[180px] w-full flex-col items-center justify-center overflow-visible">
              <div className="absolute inset-x-0 top-14 z-10 flex w-full -translate-y-1/2 justify-center">
                <svg
                  className="h-full w-full"
                  viewBox="0 0 1440 500"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 0,310 C 350,310 400,340 648,313 C 800,295 1000,270 1440,310"
                    fill="none"
                    stroke="var(--color-primary-green3)"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="relative flex flex-col items-center">
                <div className="relative z-0 flex h-28 w-[38px] items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-green2/15 to-primary-green2/20" />
                  <div className="absolute inset-y-0 w-full bg-trade-gradient" />
                  <div className="absolute inset-y-4 w-[2px]">
                    <div
                      className="h-full w-full opacity-80"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(to bottom, white 0px, white 4px, transparent 4px, transparent 8px)",
                      }}
                    />
                  </div>
                </div>

                <div className="absolute top-[37%] z-20 flex items-center justify-center">
                  <div className="h-6 w-6 rounded-full border-[3.5px] border-primary-green2 bg-white shadow-md" />
                </div>

                <div className="z-20 mt-1 rounded-xl border border-background-greenGradientBorder/40 bg-background-greenCard px-8 py-3 text-center shadow-md">
                  <div className="text-[9px] font-bold uppercase tracking-wider text-gray-500">
                    Jan 9, 2026
                  </div>
                  <div className="mt-0.5 text-xl font-black text-gray-900">$18,400</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Form */}
          <div className="z-10 w-full max-w-[440px] rounded-2xl border border-border-lightGray/80 bg-white p-5 pb-8 shadow-xl md:p-8 md:pb-10 lg:mr-7 lg:justify-self-end">
            <div className="mb-6 flex cursor-pointer border-b border-border-standard">
              <button
                type="button"
                onClick={() => setMode("vehicle")}
                className={`relative flex-1 cursor-pointer pb-3 text-center text-[16px] font-bold transition-all md:text-[18px] ${
                  mode === "vehicle" ? "text-gray-900" : "text-gray-500"
                }`}
              >
                By Vehicle
                {mode === "vehicle" && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full bg-brand2" />
                )}
              </button>

              <button
                type="button"
                onClick={() => setMode("vin")}
                className={`relative flex-1 cursor-pointer pb-3 text-center text-[16px] font-bold transition-all md:text-[18px] ${
                  mode === "vin" ? "text-gray-900" : "text-gray-500"
                }`}
              >
                VIN
                {mode === "vin" && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full bg-primary-green2" />
                )}
              </button>
            </div>

            <div
              className="w-full overflow-hidden"
              style={{ height: TRADE_FORMS[mode].minHeight }}
            >
              <iframe
                key={mode}
                src={TRADE_FORMS[mode].url}
                title={mode === "vehicle" ? "Trade Form By Vehicle" : "Trade Form By VIN"}
                width="100%"
                height={TRADE_FORMS[mode].minHeight}
                scrolling="no"
                className="block w-full border-0"
                style={{
                  height: TRADE_FORMS[mode].minHeight,
                  overflow: "hidden",
                }}
              />
            </div>
          </div>
        </div>

        {/* Desktop wave graphic */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 hidden w-full lg:block">
          <div className="absolute z-10 w-full lg:-bottom-5 xl:-bottom-14 2xl:-bottom-20">
            <svg
              className="pointer-events-none z-10 h-full w-full"
              viewBox="0 0 1440 500"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 0,310 C 350,310 400,340 648,313 C 800,295 1000,270 1440,310"
                fill="none"
                stroke="var(--color-primary-green3)"
                strokeWidth="12"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="absolute bottom-0 left-1/2 z-10 flex -translate-x-16 flex-col items-center">
            <div className="relative flex h-96 w-[44px] items-end justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-primary-green2/15 to-primary-green2/20" />
              <div className="absolute inset-y-0 rounded-full bg-trade-gradient" />
              <div className="absolute inset-y-6 w-[2px]">
                <div
                  className="h-full w-full opacity-80"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(to bottom, white 0px, white 6px, transparent 6px, transparent 12px)",
                  }}
                />
              </div>
            </div>

            <div className="absolute bottom-[29%] z-20 flex items-center justify-center">
              <div className="h-8 w-8 rounded-full border-[4px] border-primary-green2 bg-white shadow-md" />
            </div>

            <div className="absolute top-full left-1/2 -mt-5 h-32 w-[44px] -translate-x-1/2 bg-gradient-to-b from-background-greenGradientMid/50 to-transparent" />

            <div className="z-20 -translate-y-4 rounded-xl bg-background-greenCard px-9 py-4 text-center shadow-md">
              <div className="text-[10px] uppercase tracking-wider text-gray-500">Jan 9, 2026</div>
              <div className="mt-0.5 text-2xl font-black text-gray-900">$18,400</div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto w-full -mt-5 lg:mt-0 lg:px-24">
        <div className="mx-auto px-4 py-8 lg:max-w-[1400px] lg:px-0 lg:py-10">
          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1fr_1.1fr] lg:gap-10 lg:pl-10">
            <div className="relative h-[300px] w-full overflow-hidden rounded-[24px] sm:h-[400px] md:rounded-[32px] lg:h-auto lg:min-h-full">
              <Image
                src={SELL_HERO_IMAGE}
                alt="Get a cash offer to sell my car with Carma Credit"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                loading="lazy"
                className="object-cover object-center"
              />
            </div>

            <div className="lg:pr-16">
              <h2 className="text-[28px] font-bold tracking-tight text-zinc-900 md:text-[36px] lg:text-[44px]">
                How it works
              </h2>

              <div className="mt-4 space-y-4">
                {steps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.title}
                      className="flex items-start justify-between gap-4 rounded-2xl border border-zinc-100 bg-white px-4 py-4 shadow-lg md:px-6"
                    >
                      <div>
                        <h3 className="text-[19px] font-bold text-zinc-900 md:text-[22px]">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-[15px] leading-relaxed text-black md:text-[17px]">
                          {step.description}
                        </p>
                      </div>

                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center text-zinc-500 md:h-9 md:w-9">
                        <Icon className="h-full w-full stroke-[1.5]" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mb-2 w-full px-3 lg:mb-12 lg:mt-0 lg:px-24">
        <div className="mx-auto max-w-[1400px] px-2 py-4 md:px-9 lg:py-2">
          <div className="mb-5 text-center md:mb-6">
            <h2 className="text-[28px] font-semibold leading-tight text-foreground md:text-[36px] lg:text-[44px]">
              Popular selling questions
            </h2>
          </div>

          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <GetInTouch />
      <Footer />
    </div>
  );
};

export default TradeIn;
