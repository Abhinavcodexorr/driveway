"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, ShieldCheck, Scale } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { Reveal, Stagger, StaggerItem } from "@/components/common/motion";

const CTA_PRIMARY =
  "inline-flex items-center justify-center rounded-full border-2 border-[#00af66] bg-[#00af66] px-8 py-3.5 text-[16px] font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:opacity-90";

const CTA_SECONDARY =
  "inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent px-8 py-3.5 text-[16px] font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-white/10";

const BENEFITS = [
  {
    icon: Scale,
    title: "No Lowball Offers",
    text: "We wouldn’t offer a price we don’t expect you to accept. We use thousands of data points to calculate a fair market price.",
  },
  {
    icon: Clock3,
    title: "Faster",
    text: "On average it takes 4+ weeks to sell a car privately. Get your online offer instantly and sell your car to us in under a day.",
  },
  {
    icon: ShieldCheck,
    title: "Safer",
    text: "No meeting strangers. When it’s time to hand over the keys, drop off your car at a convenient location and get paid.",
  },
] as const;

type Step = {
  title: string;
  text: string;
  link?: { href: string; label: string };
};

const STEPS: Step[] = [
  {
    title: "Step 1: Get Your Instant Online Offer",
    text: "Complete our online appraisal form in minutes to see your offer. No lowball offers here!",
    link: { href: "/trade-in-my-car", label: "Get My Offer" },
  },
  {
    title: "Step 2: Verify Your Offer",
    text: "We’ll contact you to review your vehicle details and verify your offer — clear, transparent, and no pressure.",
  },
  {
    title: "Step 3: Drop Off Your Car, Get Paid",
    text: "If you’re happy with your offer, we’ll schedule a convenient date and location for drop-off — and you’ll get paid!",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main className="dw-font min-h-screen overflow-hidden bg-white text-[#121212]">
        {/* Hero */}
        <section className="bg-[#00af66] px-4 py-14 sm:px-6 md:px-10 md:py-20">
          <div className="mx-auto max-w-[1100px]">
            <Reveal y={16}>
              <p className="mb-4 text-[15px] font-semibold tracking-wide text-white/90 md:text-[16px]">
                How It Works
              </p>
              <h1 className="max-w-[900px] text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[1.12] tracking-[-0.03em] text-white">
                The Easiest Way to Sell Your Car.
              </h1>
            </Reveal>
          </div>
        </section>

        {/* Selling benefits */}
        <section className="bg-white px-4 py-14 sm:px-6 md:px-10 md:py-20">
          <div className="mx-auto max-w-[1100px]">
            <Reveal y={16} className="max-w-[640px]">
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-[1.15] tracking-[-0.03em] text-[#121212]">
                Selling a Car
              </h2>
              <p className="mt-3 text-[17px] leading-relaxed text-[#555] md:text-[18px]">
                Skip the hassle of selling your car privately.
              </p>
            </Reveal>

            <Stagger className="mt-10 grid gap-6 md:mt-12 md:grid-cols-3 md:gap-8">
              {BENEFITS.map((item) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={item.title}>
                    <article className="h-full rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-7 md:p-8">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF8F3] text-[#00af66]">
                        <Icon className="h-6 w-6" strokeWidth={2.25} />
                      </div>
                      <h3 className="mb-3 text-[22px] font-bold tracking-[-0.02em] text-[#121212]">
                        {item.title}
                      </h3>
                      <p className="text-[15px] leading-[1.65] text-[#555] md:text-[16px]">
                        {item.text}
                      </p>
                    </article>
                  </StaggerItem>
                );
              })}
            </Stagger>

            <Reveal delay={0.1} className="mt-10 flex justify-start md:mt-12">
              <Link href="/trade-in-my-car" className={CTA_PRIMARY}>
                Get My Offer
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Steps — Canada Drives style panel */}
        <section className="bg-[#121212] px-4 py-14 sm:px-6 md:px-10 md:py-20">
          <div className="mx-auto max-w-[1100px]">
            <Reveal className="overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.25)] lg:grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="px-7 py-10 sm:px-10 md:px-12 md:py-14">
                <h2 className="mb-8 text-[clamp(1.5rem,3vw,2.1rem)] font-bold leading-[1.2] tracking-[-0.02em] text-[#2B2B2B] md:mb-10">
                  Selling Your Car — How It Works
                </h2>

                <div className="space-y-8 md:space-y-10">
                  {STEPS.map((step) => (
                    <div key={step.title}>
                      <h3 className="mb-2 text-[18px] font-bold text-[#2B2B2B] md:text-[20px]">
                        {step.title}
                      </h3>
                      <p className="text-[15px] leading-[1.7] text-[#666] md:text-[16px]">
                        {step.text}
                        {step.link ? (
                          <>
                            {" "}
                            <Link
                              href={step.link.href}
                              className="font-semibold text-[#00af66] underline decoration-[#00af66]/40 underline-offset-4 transition-opacity hover:opacity-80"
                            >
                              {step.link.label}
                            </Link>
                          </>
                        ) : null}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[280px] lg:min-h-full">
                <Image
                  src="/how-it-works/hero.png"
                  alt="Selling your car with Carma Credit"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Extra trust strip */}
        <section className="bg-white px-4 py-14 sm:px-6 md:px-10 md:py-20">
          <div className="mx-auto grid max-w-[1100px] items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal x={-24} className="overflow-hidden rounded-2xl">
              <Image
                src="/how-it-works/hard-work.jpg"
                alt="Carma Credit team helping customers sell their car"
                width={592}
                height={592}
                className="h-auto w-full object-cover"
              />
            </Reveal>
            <Reveal x={24} delay={0.1}>
              <p className="mb-3 text-[14px] font-semibold uppercase tracking-[0.08em] text-[#00af66]">
                We handle the hard parts
              </p>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.03em] text-[#121212]">
                From offer to payday, we&apos;re with you
              </h2>
              <p className="mt-5 max-w-[480px] text-[16px] leading-[1.7] text-[#454545] md:text-[17px]">
                Our team guides you through every step — reviewing your offer,
                arranging drop-off, and making sure you get paid smoothly and
                fairly.
              </p>
              <Link href="/contact-us" className={`${CTA_PRIMARY} mt-8`}>
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" strokeWidth={2.5} />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#00af66] px-4 py-16 sm:px-6 md:px-10 md:py-20">
          <Reveal className="mx-auto max-w-[900px] text-center">
            <h2 className="text-[clamp(1.85rem,4vw,3rem)] font-bold leading-[1.15] tracking-[-0.03em] text-white">
              The Easiest Way to Sell Your Car
            </h2>
            <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-relaxed text-white/90 md:text-[18px]">
              Get a real online offer in minutes — no listings, no strangers, no
              waiting weeks.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/financing"
                className="inline-flex items-center justify-center rounded-full border-2 border-white bg-white px-8 py-3.5 text-[16px] font-semibold text-[#00af66] transition-all duration-300 hover:scale-[1.03] hover:opacity-90"
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
      <Footer />
    </>
  );
}
