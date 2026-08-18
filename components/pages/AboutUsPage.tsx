"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, MapPin, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/layout";
import { Reveal, Stagger, StaggerItem } from "@/components/common/motion";

const CTA_SECONDARY =
  "inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent px-8 py-3.5 text-[16px] font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-white/10";

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Trusted Service",
    text: "We have provided over one million Canadians a simple and easy way to get approved for a car loan or sell their car.",
    href: "/financing",
    cta: "Get Pre-Approved",
  },
  {
    icon: MapPin,
    title: "National Network",
    text: "We work with partner dealerships across the country to help make it easy for you to find a quality car close to home.",
  },
  {
    icon: BadgeCheck,
    title: "Simple Process",
    text: "Whether you are shopping for a new car or selling your current car we make it easy, safe, and stress-free.",
    href: "/how-it-works",
    cta: "How It Works",
  },
] as const;

export default function AboutUsPage() {
  return (
    <PageShell>
      <main className="dw-font min-h-screen overflow-x-clip bg-white text-[#121212]">
        <section
          className="relative px-4 pb-14 pt-14 sm:px-6 md:px-10 md:pb-20 md:pt-20"
          style={{ backgroundColor: "#1451b5" }}
        >
          <div className="mx-auto max-w-[1100px]">
            <Reveal y={18}>
              <p className="mb-4 text-[15px] font-semibold tracking-wide text-white/90 md:text-[16px]">
                About Us
              </p>
              <h1 className="max-w-[920px] text-[clamp(2rem,5.2vw,3.75rem)] font-bold leading-[1.12] tracking-[-0.03em] text-white">
                Our Mission Is To Be the Easiest Place To Buy and Sell Your Car in
                Canada.
              </h1>
            </Reveal>
          </div>
        </section>

        <section className="relative bg-[#121212] px-4 pb-16 pt-10 sm:px-6 md:px-10 md:pb-24 md:pt-14">
          <div className="mx-auto max-w-[1100px]">
            <Stagger className="grid gap-5 md:grid-cols-3 md:gap-6">
              {PILLARS.map((item) => {
                const Icon = item.icon;
                const hasCta = "href" in item && "cta" in item;
                return (
                  <StaggerItem key={item.title}>
                    <article className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-[0_16px_40px_rgba(0,0,0,0.18)] md:p-8">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#E8F2FF] text-[#1451b5]">
                        <Icon className="h-6 w-6" strokeWidth={2.25} />
                      </div>
                      <h2 className="mb-3 text-[22px] font-bold tracking-[-0.02em] text-[#121212] md:text-[24px]">
                        {item.title}
                      </h2>
                      <p className="mb-6 flex-1 text-[15px] leading-[1.65] text-[#555] md:text-[16px]">
                        {item.text}
                      </p>
                      {hasCta ? (
                        <Link
                          href={item.href}
                          className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#1451b5] underline decoration-[#1451b5]/40 underline-offset-4 transition-opacity hover:opacity-80"
                        >
                          {item.cta}
                          <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                        </Link>
                      ) : null}
                    </article>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>

          <div className="mx-auto mt-16 grid max-w-[1100px] items-center gap-10 md:mt-24 lg:grid-cols-2 lg:gap-14">
            <Reveal x={-24}>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-[1.15] tracking-[-0.03em] text-white">
                We&apos;re Changing the Car Shopping &amp; Selling Experience
              </h2>
              <p className="mt-5 text-[16px] leading-[1.7] text-white/80 md:text-[18px]">
                Our focus is on making car shopping and selling easy, efficient,
                and enjoyable.
              </p>
              <p className="mt-4 text-[16px] leading-[1.7] text-white/80 md:text-[18px]">
                If you are shopping for a car we&apos;ll help you{" "}
                <Link
                  href="/financing"
                  className="font-semibold text-white underline decoration-white/40 underline-offset-4 hover:opacity-80"
                >
                  get pre-approved
                </Link>{" "}
                for financing first, and then one of our local partner
                dealerships will help you get into a car that fits your
                pre-approved budget.
              </p>
              <p className="mt-4 text-[16px] leading-[1.7] text-white/80 md:text-[18px]">
                If you are selling your car you can sell it directly to us! We
                provide a safe and convenient alternative to selling your car
                privately. You can get your instant online offer{" "}
                <Link
                  href="/trade-in-my-car"
                  className="font-semibold text-white underline decoration-white/40 underline-offset-4 hover:opacity-80"
                >
                  here
                </Link>
                .
              </p>
            </Reveal>

            <Reveal x={24} delay={0.1} className="relative">
              <div className="overflow-hidden rounded-2xl bg-[#1c1c1c] shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
                <Image
                  src="/about-us/who-we-are.png"
                  alt="Customer applying to get pre-approved on their smartphone"
                  width={806}
                  height={729}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section
          className="px-4 py-16 sm:px-6 md:px-10 md:py-20"
          style={{ backgroundColor: "#1451b5" }}
        >
          <Reveal className="mx-auto max-w-[900px] text-center">
            <h2 className="text-[clamp(1.85rem,4vw,3rem)] font-bold leading-[1.15] tracking-[-0.03em] text-white">
              The Easiest Way to Buy or Sell a Car
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/financing"
                className="inline-flex items-center justify-center rounded-full border-2 border-white bg-white px-8 py-3.5 text-[16px] font-semibold text-[#1451b5] transition-all duration-300 hover:scale-[1.03] hover:opacity-90"
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
