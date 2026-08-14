"use client";

import Image from "next/image";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Reveal, Stagger, StaggerItem } from "@/components/common/motion";

const CTA =
  "inline-flex items-center justify-center rounded-[3px] border-[1.6px] border-[#00af66] bg-[#00af66] px-5 py-2.5 text-[16px] font-normal uppercase tracking-wide text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.03]";

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white font-[Arial,Helvetica,sans-serif] text-black">
        <section className="bg-white px-4 pb-10 pt-8 md:px-8 md:pb-14 md:pt-12">
          <div className="mx-auto grid max-w-[1140px] items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal x={-30} className="order-2 overflow-hidden rounded-[28px] lg:order-1">
              <Image
                src="/how-it-works/hero.png"
                alt="Car on an open road"
                width={488}
                height={592}
                className="h-auto w-full object-cover"
                priority
              />
            </Reveal>
            <Reveal x={30} delay={0.1} className="order-1 lg:order-2">
              <h1 className="text-[28px] font-bold leading-[1.1] tracking-[-0.02em] sm:text-[36px] md:text-[56px] lg:text-[64px]">
                Applying for a car loan with confidence
              </h1>
              <p className="mt-5 max-w-[480px] text-[14px] leading-[1.7] text-[#333]">
                Complete our online car loan application in minutes to pre-approve for the car of
                your choice. We offer financing options for all credit situations.
              </p>
              <Link href="/financing" className={`${CTA} mt-7`}>
                Get started
              </Link>
            </Reveal>
          </div>
        </section>

        <section className="px-4 py-6 md:px-8">
          <Reveal className="mx-auto max-w-[1350px] rounded-[20px] bg-[#f8f8f8] px-4 py-10 md:px-10 md:py-[70px]">
            <p className="mb-3 text-center text-[16px] font-semibold uppercase tracking-wide text-[#008765]">
              How It Works
            </p>
            <h2 className="mx-auto mb-4 max-w-[820px] text-center text-[28px] font-bold leading-tight md:text-[42px]">
              A convenient way to get approved for your auto loan
            </h2>
            <p className="mx-auto mb-10 max-w-[720px] text-center text-[14px] leading-[1.7] text-[#636363]">
              Complete our car loan application online, and one of our team members will call you
              to discuss your financing and vehicle options.
            </p>

            <Reveal delay={0.1} className="relative mx-auto mb-4 hidden max-w-[924px] md:block">
              <Image
                src="/how-it-works/line.png"
                alt=""
                width={924}
                height={94}
                className="h-auto w-full"
              />
            </Reveal>

            <Stagger className="mx-auto grid max-w-[1100px] gap-8 md:grid-cols-3 md:gap-6">
              {[
                {
                  title: "Apply Online",
                  text: "We won’t take “you’re declined” as an answer! We promise to secure you the best car loan approval at the lowest rate.",
                },
                {
                  title: "Get Approved",
                  text: "Receive lightning-fast credit approval from our dedicated and qualified team. We provide approval for all credit types.",
                },
                {
                  title: "Drive Away",
                  text: "Get ready for the best part! Grab the keys and start enjoying your new or used vehicle!",
                },
              ].map((step) => (
                <StaggerItem key={step.title} className="px-2 text-center">
                  <h3 className="mb-3 text-[24px] font-bold uppercase tracking-wide">
                    {step.title}
                  </h3>
                  <p className="mx-auto max-w-[300px] text-[14px] leading-[1.7] text-[#333]">
                    {step.text}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>

            <div className="mt-10 flex justify-center">
              <Link href="/financing" className={CTA}>
                Get started
              </Link>
            </div>
          </Reveal>
        </section>

        <section className="bg-white px-4 py-14 md:px-8 md:py-20">
          <div className="mx-auto grid max-w-[1140px] items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal x={-24} scale className="overflow-hidden rounded-[28px]">
              <Image
                src="/how-it-works/hard-work.jpg"
                alt="Customer getting help with financing"
                width={592}
                height={592}
                className="h-auto w-full object-cover"
              />
            </Reveal>
            <Reveal x={24} delay={0.12}>
              <p className="mb-3 text-[16px] font-semibold uppercase tracking-wide text-[#008765]">
                Let us do the hard work
              </p>
              <h2 className="mb-5 text-[28px] font-bold leading-[1.15] tracking-[-0.02em] md:text-[52px] lg:text-[64px]">
                We’re here for you at every stage
              </h2>
              <p className="mb-8 max-w-[480px] text-[14px] leading-[1.7] text-[#333]">
                Our experts will help guide you through the car loan process including reviewing
                options, selecting coverage, and completing necessary paperwork.
              </p>
              <Link href="/contact-us" className={CTA}>
                Learn more
              </Link>
            </Reveal>
          </div>
        </section>

        <section className="bg-white px-4 pb-16 md:px-8 md:pb-24">
          <div className="mx-auto grid max-w-[1140px] items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal x={-24} scale className="overflow-hidden rounded-[28px]">
              <Image
                src="/how-it-works/savings.png"
                alt="Person applying for a car loan online"
                width={592}
                height={780}
                className="h-auto w-full object-cover"
              />
            </Reveal>
            <Reveal x={24} delay={0.12}>
              <p className="mb-3 text-[16px] font-semibold uppercase tracking-wide text-[#008765]">
                Lets get started
              </p>
              <h2 className="mb-5 text-[28px] font-bold leading-[1.15] tracking-[-0.02em] md:text-[52px] lg:text-[64px]">
                Discover how much you could save on your car loan
              </h2>
              <p className="mb-8 max-w-[480px] text-[14px] leading-[1.7] text-[#333]">
                Ready to get started? Talk to a real human today.
              </p>
              <Link href="/financing" className={CTA}>
                Get started
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
