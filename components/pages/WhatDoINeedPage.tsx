"use client";

import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/layout";
import { Reveal } from "@/components/common/motion";

const CTA =
  "inline-flex items-center justify-center rounded-full border-2 border-[#1451b5] bg-[#1451b5] px-5 py-2.5 text-[16px] font-normal uppercase tracking-wide text-white transition-all duration-300 hover:scale-[1.03] hover:opacity-90";

const STEPS = [
  {
    step: "Step 1",
    title: "Employment & Income",
    text: "You will need to have been employed at your current job for at least three months. Additionally, you must make at least $1800 per month. Other forms of income may also be accepted by some lenders.",
    image: "/what-do-i-need/step-1.png",
    imageLeft: true,
  },
  {
    step: "Step 2",
    title: "Driver’s License",
    text: "You will need to have a valid driver’s license. This is because lenders know that customers are more likely to pay back their car loan if they can legally drive.",
    image: "/what-do-i-need/step-2.png",
    imageLeft: false,
  },
  {
    step: "Step 3",
    title: "Bank Account",
    text: "You will need to have a bank account. The lender will want to be able to take the payment out of your bank account each month. The easiest way to do this is to get a void cheque or stamped pre-authorized payment form.",
    image: "/what-do-i-need/step-3.png",
    imageLeft: true,
  },
  {
    step: "Step 4",
    title: "Down Payment",
    text: "Although it is not always necessary, a down payment can often help your chances of getting a loan. The less you have to finance, the more likely the lender will be to approve your loan.",
    image: "/what-do-i-need/step-4.png",
    imageLeft: false,
  },
  {
    step: "Step 5",
    title: "Current Address",
    text: "In order to complete your loan documents, you must provide the lender with your current address along with address details including your monthly rent or mortgage payment.",
    image: "/what-do-i-need/step-5.png",
    imageLeft: true,
  },
  {
    step: "Step 6",
    title: "Contact Details",
    text: "You will be required to provide your full name, date of birth, phone number and email address to apply for a car loan.",
    image: "/what-do-i-need/step-6.png",
    imageLeft: false,
  },
];

export default function WhatDoINeedPage() {
  return (
    <PageShell>
      <main className="min-h-screen bg-white font-[Arial,Helvetica,sans-serif] text-black">
        <section className="px-4 pt-6 md:px-8 md:pt-8">
          <Reveal
            y={20}
            className="relative mx-auto flex min-h-[280px] max-w-[1350px] items-center overflow-hidden rounded-[20px] bg-cover bg-[center_30%] px-4 py-10 sm:min-h-[360px] md:min-h-[480px] md:px-14 md:py-16 lg:min-h-[582px]"
            style={{ backgroundImage: "url('/what-do-i-need/hero.jpeg')" }}
          >
            <div className="absolute inset-0 bg-black/45" />
            <div className="relative z-10 max-w-[720px] text-white">
              <p className="mb-3 text-[16px] font-semibold uppercase tracking-wide">
                What Is Needed
              </p>
              <h1 className="mb-5 text-[28px] font-bold leading-[1.15] tracking-[-0.02em] md:text-[52px] lg:text-[64px]">
                Auto financing documents: Which docs to use and why
              </h1>
              <p className="max-w-[560px] text-[14px] leading-[1.7] text-white/95">
                At Carma Credit we’ll need some documents from you to make the process go smoothly.
                Learn more about these documents and why we need them.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Save thousands */}
        <section className="bg-white px-4 py-10 md:px-8 md:py-14">
          <div className="mx-auto grid max-w-[1140px] items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="mb-3 text-[16px] font-semibold uppercase tracking-wide text-[#008765]">
                Finance With Carma
              </p>
              <h2 className="mb-5 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] md:text-[48px] lg:text-[56px]">
                You could save thousands of dollars on your car loan *
              </h2>
              <p className="mb-8 text-[14px] leading-[1.7] text-[#333]">
                What would you do with extra money in your wallet each month?
              </p>
              <Link href="/financing" className={CTA}>
                Get started
              </Link>
            </div>
            <div className="overflow-hidden rounded-[28px]">
              <Image
                src="/what-do-i-need/save-dollar.png"
                alt="Save on your car loan"
                width={488}
                height={592}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Easy process intro */}
        <section className="bg-white px-4 pb-10 md:px-8">
          <div className="mx-auto max-w-[800px] text-center">
            <p className="mb-3 text-[16px] font-semibold uppercase tracking-wide text-[#008765]">
              Easy Process In 6 Steps
            </p>
            <h2 className="mb-4 text-[32px] font-bold leading-tight md:text-[42px]">
              An easy way to finance your Car
            </h2>
            <p className="text-[14px] leading-[1.7] text-[#333]">
              Transparent financing that could put money back in your wallet, with offers from our
              network of trusted lenders.
            </p>
          </div>
        </section>

        {/* 6 steps */}
        <section className="bg-white px-4 pb-8 md:px-8">
          <div className="mx-auto max-w-[1140px] space-y-12 md:space-y-14">
            {STEPS.map((item) => (
              <div
                key={item.step}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                <Reveal
                  x={item.imageLeft ? -24 : 24}
                  scale
                  className={`overflow-hidden rounded-[28px] ${
                    item.imageLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={488}
                    height={380}
                    className="h-auto w-full object-cover"
                  />
                </Reveal>
                <Reveal
                  x={item.imageLeft ? 24 : -24}
                  delay={0.1}
                  className={item.imageLeft ? "lg:order-2" : "lg:order-1"}
                >
                  <p className="mb-2 text-[16px] font-semibold uppercase tracking-wide text-[#008765]">
                    {item.step}
                  </p>
                  <h3 className="mb-4 text-[28px] font-bold leading-tight md:text-[36px]">
                    {item.title}
                  </h3>
                  <p className="text-[14px] leading-[1.7] text-[#333]">{item.text}</p>
                </Reveal>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom testimonial CTA */}
        <section className="bg-white px-4 py-10 md:px-8 md:py-14">
          <div className="mx-auto grid max-w-[1140px] items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="overflow-hidden rounded-[28px]">
              <Image
                src="/what-do-i-need/card.png"
                alt="Customer savings with Carma Credit"
                width={488}
                height={592}
                className="h-auto w-full object-cover"
              />
            </div>
            <div>
              <p className="mb-3 text-[16px] font-semibold uppercase tracking-wide text-[#008765]">
                Finance With Carma
              </p>
              <h2 className="mb-5 text-[28px] font-bold leading-[1.15] tracking-[-0.02em] md:text-[40px] lg:text-[48px]">
                They got my interest rate cut by half and my monthly payment reduced by $70 a month.
              </h2>
              <p className="mb-8 text-[14px] leading-[1.7] text-[#333]">
                What would you do with extra money in your wallet each month?
              </p>
              <Link href="/financing" className={CTA}>
                Get started
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
