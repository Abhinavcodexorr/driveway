"use client";

import Image from "next/image";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Reveal } from "@/components/common/motion";

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white font-[Arial,Helvetica,sans-serif] text-black">
        <Reveal y={16}>
          <section
            className="relative flex min-h-[220px] items-center bg-cover bg-center px-4 py-12 md:min-h-[280px] md:px-8 md:py-16"
            style={{ backgroundImage: "url('/about-us/hero.png')" }}
          >
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 mx-auto w-full max-w-[1140px] text-white">
              <h1 className="mb-3 text-[32px] font-bold leading-tight md:text-[36px]">
                About Carma
              </h1>
              <p className="max-w-[640px] text-[14px] leading-[1.7] text-white/95 md:text-[16px]">
                A fast and convenient way to research and find a vehicle that is right for you.
              </p>
            </div>
          </section>
        </Reveal>

        <section className="bg-[#f7f7f7] px-4 py-14 md:px-8 md:py-20">
          <div className="mx-auto max-w-[1140px] space-y-16 md:space-y-20">
            <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-12">
              <Reveal x={-24} className="lg:col-span-2">
                <h2 className="mb-5 text-[22px] font-bold uppercase leading-snug tracking-wide md:text-[26px]">
                  Your Gateway to Great Deals from Trusted Dealerships
                </h2>
                <p className="mb-4 text-[14px] leading-[1.7] text-[#333]">
                  Carma is not a car dealership — we help you find the best deals by connecting you
                  with dealerships in your area.
                </p>
                <p className="text-[14px] leading-[1.7] text-[#333]">
                  Carma is a lead generation company. We do not sell vehicles directly. Instead, we
                  help customers by matching them with verified and licensed car dealerships across
                  Canada to ensure a safe and trusted car buying experience.
                </p>
              </Reveal>
              <Reveal x={24} delay={0.1} scale className="overflow-hidden rounded-[12px] lg:col-span-3">
                <Image
                  src="/about-us/who-we-are.png"
                  alt="About Carma Credit"
                  width={806}
                  height={729}
                  className="h-auto w-full object-cover"
                  priority
                />
              </Reveal>
            </div>

            <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-12">
              <Reveal x={-24} scale className="order-2 overflow-hidden rounded-[12px] lg:order-1 lg:col-span-3">
                <Image
                  src="/about-us/our-customers.png"
                  alt="Our customers"
                  width={806}
                  height={729}
                  className="h-auto w-full object-cover"
                />
              </Reveal>
              <Reveal x={24} delay={0.1} className="order-1 lg:order-2 lg:col-span-2">
                <h2 className="mb-5 text-[22px] font-bold uppercase leading-snug tracking-wide md:text-[26px]">
                  Our customers
                </h2>
                <p className="mb-6 text-[14px] leading-[1.7] text-[#333]">
                  We put integrity and transparency at the heart of every interaction with you,
                  whether that interaction is online, on the phone, or in person. We are committed
                  to bringing clarity to each decision you make so you can feel confident about
                  buying the car you love – and enjoy the ride while you do it.
                </p>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center rounded-[3px] border-[1.6px] border-[#00af66] bg-[#00af66] px-5 py-2.5 text-[16px] font-normal uppercase tracking-wide text-white transition-all duration-300 hover:scale-[1.03] hover:opacity-90"
                >
                  Contact Us
                </Link>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
