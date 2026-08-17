"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Handshake, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/layout";
import { Reveal, Stagger, StaggerItem } from "@/components/common/motion";

const CTA_PRIMARY =
  "inline-flex items-center justify-center rounded-full border-2 border-[#007aff] bg-[#007aff] px-8 py-3.5 text-[16px] font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:opacity-90";

const CTA_SECONDARY =
  "inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent px-8 py-3.5 text-[16px] font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-white/10";

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Trusted Service",
    text: "We make selling your car simple and straightforward — with clear offers, honest communication, and a process built around getting you paid fairly.",
    href: "/trade-in-my-car",
    cta: "Get Your Offer",
  },
  {
    icon: Handshake,
    title: "Fair Cash Offers",
    text: "Get a real online offer based on your vehicle and local market data. No private-sale stress, no endless tire-kickers, no guessing games.",
    href: "/trade-in-my-car",
    cta: "Sell My Car",
  },
  {
    icon: BadgeCheck,
    title: "Simple Process",
    text: "Enter your details, receive an offer, book a quick inspection, and get paid. We keep selling your car easy, safe, and stress-free.",
    href: "/how-it-works",
    cta: "How It Works",
  },
] as const;

export default function AboutUsPage() {
  return (
    <PageShell>
      <main className="dw-font min-h-screen overflow-x-clip bg-white text-[#121212]">
        {/* Hero — Canada Drives style, Carma green */}
        <section className="relative bg-[#007aff] px-4 pb-14 pt-14 sm:px-6 md:px-10 md:pb-20 md:pt-20">
          <div className="mx-auto max-w-[1100px]">
            <Reveal y={18}>
              <p className="mb-4 text-[15px] font-semibold tracking-wide text-white/90 md:text-[16px]">
                About Us
              </p>
              <h1 className="max-w-[920px] text-[clamp(2rem,5.2vw,3.75rem)] font-bold leading-[1.12] tracking-[-0.03em] text-white">
                Our Mission Is To Be the Easiest Place To Sell Your Car in
                Canada.
              </h1>
            </Reveal>
          </div>
        </section>

        {/* Pillars — white cards on dark band, clear of green */}
        <section className="relative bg-[#121212] px-4 pb-16 pt-10 sm:px-6 md:px-10 md:pb-24 md:pt-14">
          <div className="mx-auto max-w-[1100px]">
            <Stagger className="grid gap-5 md:grid-cols-3 md:gap-6">
              {PILLARS.map((item) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={item.title}>
                    <article className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-[0_16px_40px_rgba(0,0,0,0.18)] md:p-8">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#E8F2FF] text-[#007aff]">
                        <Icon className="h-6 w-6" strokeWidth={2.25} />
                      </div>
                      <h2 className="mb-3 text-[22px] font-bold tracking-[-0.02em] text-[#121212] md:text-[24px]">
                        {item.title}
                      </h2>
                      <p className="mb-6 flex-1 text-[15px] leading-[1.65] text-[#555] md:text-[16px]">
                        {item.text}
                      </p>
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#007aff] underline decoration-[#007aff]/40 underline-offset-4 transition-opacity hover:opacity-80"
                      >
                        {item.cta}
                        <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                      </Link>
                    </article>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>

          {/* Story */}
          <div className="mx-auto mt-16 grid max-w-[1100px] items-center gap-10 md:mt-24 lg:grid-cols-2 lg:gap-14">
            <Reveal x={-24}>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-[1.15] tracking-[-0.03em] text-white">
                We&apos;re Changing the Car Selling Experience
              </h2>
              <p className="mt-5 text-[16px] leading-[1.7] text-white/80 md:text-[18px]">
                Our focus is on making selling your car easy, efficient, and
                enjoyable — without the hassle of private sales.
              </p>
              <p className="mt-4 text-[16px] leading-[1.7] text-white/80 md:text-[18px]">
                Sell directly to Carma Credit for a safe, convenient alternative
                to listing privately. Get an instant online offer, book an
                inspection, and walk away paid — often the same day.
              </p>
              <Link href="/trade-in-my-car" className={`${CTA_PRIMARY} mt-8`}>
                Get Your Instant Offer
              </Link>
            </Reveal>

            <Reveal x={24} delay={0.1} className="relative">
              <div className="overflow-hidden rounded-2xl bg-[#1c1c1c] shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
                <Image
                  src="/about-us/who-we-are.png"
                  alt="Customer completing a sell-my-car offer on their phone"
                  width={806}
                  height={729}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Customers / trust strip */}
        <section className="bg-white px-4 py-16 sm:px-6 md:px-10 md:py-24">
          <div className="mx-auto grid max-w-[1100px] items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal x={-24} className="order-2 overflow-hidden rounded-2xl lg:order-1">
              <Image
                src="/about-us/our-customers.png"
                alt="Carma Credit customers selling their vehicles with confidence"
                width={806}
                height={729}
                className="h-auto w-full object-cover"
              />
            </Reveal>

            <Reveal x={24} delay={0.1} className="order-1 lg:order-2">
              <p className="mb-3 text-[14px] font-semibold uppercase tracking-[0.08em] text-[#007aff]">
                Our customers
              </p>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.03em] text-[#121212]">
                Integrity and transparency in every sale
              </h2>
              <p className="mt-5 text-[16px] leading-[1.7] text-[#454545] md:text-[18px]">
                We put honesty at the heart of every interaction — online, on
                the phone, or in person. You get clear offers and a process you
                can trust, so selling your car feels confident from start to
                finish.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact-us" className={CTA_PRIMARY}>
                  Contact Us
                </Link>
                <Link
                  href="/faq"
                  className="inline-flex items-center justify-center rounded-full border-2 border-[#121212] bg-transparent px-8 py-3.5 text-[16px] font-semibold text-[#121212] transition-all duration-300 hover:scale-[1.03] hover:bg-[#121212] hover:text-white"
                >
                  Read FAQs
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#007aff] px-4 py-16 sm:px-6 md:px-10 md:py-20">
          <Reveal className="mx-auto max-w-[900px] text-center">
            <h2 className="text-[clamp(1.85rem,4vw,3rem)] font-bold leading-[1.15] tracking-[-0.03em] text-white">
              The Easiest Way to Sell Your Car
            </h2>
            <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-relaxed text-white/90 md:text-[18px]">
              Get a real offer online in minutes — no listings, no lowball
              strangers, no pressure.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/financing"
                className="inline-flex items-center justify-center rounded-full border-2 border-white bg-white px-8 py-3.5 text-[16px] font-semibold text-[#007aff] transition-all duration-300 hover:scale-[1.03] hover:opacity-90"
              >
                Get Pre-Approved
              </Link>
              <Link href="/trade-in-my-car" className={CTA_SECONDARY}>
                Sell My Car
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
    </PageShell>
  );
}
