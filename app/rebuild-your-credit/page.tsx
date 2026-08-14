"use client";

import Image from "next/image";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Reveal, Stagger, StaggerItem } from "@/components/common/motion";

const CTA =
  "inline-flex items-center justify-center rounded-[3px] border-[1.6px] border-[#00af66] bg-[#00af66] px-5 py-2.5 text-[16px] font-normal uppercase tracking-wide text-white transition-all duration-300 hover:scale-[1.03] hover:opacity-90";

export default function RebuildYourCreditPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white font-[Arial,Helvetica,sans-serif] text-black">
        <section className="px-4 pt-6 md:px-8 md:pt-8">
          <Reveal y={20} className="relative mx-auto flex min-h-[320px] max-w-[1350px] items-center overflow-hidden rounded-[20px] bg-cover bg-center px-4 py-10 md:min-h-[662px] md:px-14 md:py-16"
            style={{ backgroundImage: "url('/rebuild-your-credit/hero-bg.png')" }}
          >
            <div className="absolute inset-0 bg-black/35" />
            <div className="relative z-10 max-w-[720px] text-white">
              <p className="mb-3 text-[16px] font-semibold uppercase tracking-wide">
                Why Good Credit Is Important
              </p>
              <h1 className="mb-5 text-[28px] font-bold leading-[1.15] tracking-[-0.02em] md:text-[52px] lg:text-[64px]">
                How To Rebuild Your Credit Score?
              </h1>
              <p className="mb-8 max-w-[560px] text-[14px] leading-[1.7] text-white/95">
                There are a lot of factors that go into determining your credit score. Payment
                history, outstanding debt, and credit utilization are just a few of the things that
                can impact your score.
              </p>
              <Link href="/financing" className={CTA}>
                Get Started
              </Link>
            </div>
          </Reveal>
        </section>

        {/* Things you can do + image */}
        <section className="bg-white px-4 py-10 md:px-8 md:py-14">
          <div className="mx-auto grid max-w-[1140px] items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="mb-3 text-[16px] font-semibold uppercase tracking-wide text-[#008765]">
                Want to rebuild your credit score?
              </p>
              <h2 className="mb-5 text-[28px] font-bold leading-tight md:text-[42px]">
                Things you can do to rebuild your credit score
              </h2>
              <p className="mb-8 text-[14px] leading-[1.7] text-[#333]">
                Start by making sure you make all of your payments on time. This will show lenders
                that you’re reliable and capable of repaying your debts. You should also try to keep
                your balances low. This shows that you’re not overextending yourself financially and
                that you’re able to manage your debts responsibly.
              </p>
              <Link href="/financing" className={CTA}>
                Get started
              </Link>
            </div>
            <div className="overflow-hidden rounded-[28px]">
              <Image
                src="/rebuild-your-credit/credit-score.png"
                alt="Credit score improvement"
                width={488}
                height={592}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Mint tip band */}
        <section className="bg-[#c8efe5] px-4 py-12 md:px-8 md:py-16">
          <p className="mx-auto max-w-[900px] text-center text-[16px] leading-[1.8] text-[#333] md:text-[18px]">
            Last but not least, don’t apply for new credit too often. Every time you apply for
            credit, it results in a hard inquiry on your credit report. This can temporarily lower
            your score. So, if you’re planning on applying for a car loan or another type of credit,
            make sure you do it in a way that won’t hurt your score too much.
          </p>
        </section>

        {/* How long does bad credit last */}
        <section className="bg-white px-4 py-10 md:px-8 md:py-14">
          <div className="mx-auto max-w-[1140px]">
            <h2 className="mb-10 text-center text-[28px] font-bold leading-tight md:text-[42px]">
              How Long Does ‘Bad Credit’ Last?
            </h2>
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <p className="text-[14px] leading-[1.7] text-[#333]">
                Bad credit can stay on your record for six to seven years. However, the exact length
                of time is also dependent on the credit bureau. Equifax Canada counts from the date
                the debt is first assigned to a collection agency.
              </p>
              <p className="text-[14px] leading-[1.7] text-[#333]">
                If you have bad credit, it’s important to take steps to improve your credit rating.
                This will help you qualify for better loan terms and interest rates in the future.
                You can improve your credit rating by paying your bills on time, maintaining a good
                credit history, and using a credit monitoring service.
              </p>
            </div>
          </div>
        </section>

        {/* How do I rebuild + image */}
        <section className="bg-white px-4 pb-14 md:px-8 md:pb-20">
          <div className="mx-auto grid max-w-[1140px] items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h2 className="mb-5 text-[28px] font-bold leading-tight md:text-[42px]">
                How Do I Rebuild My Credit Score?
              </h2>
              <p className="mb-8 text-[14px] leading-[1.7] text-[#333]">
                If you have experienced a drop in your credit score, it is important to take steps
                to rebuild it. A low credit score can impact your ability to obtain new lines of
                credit and loans, and can even lead to higher interest rates.
              </p>
              <Link href="/financing" className={CTA}>
                Get Started
              </Link>
            </div>
            <div className="overflow-hidden rounded-[28px]">
              <Image
                src="/rebuild-your-credit/credit.png"
                alt="Rebuilding credit"
                width={1024}
                height={966}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Key things — mint section */}
        <section className="bg-[#c8efe5] px-4 py-10 md:px-8 md:py-14">
          <div className="mx-auto max-w-[1140px]">
            <h2 className="mb-10 text-center text-[28px] font-bold leading-tight md:text-[42px]">
              There are a few key things you can do to start rebuilding your credit:
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                "Make sure you are current on all of your existing debts and payments. This includes any accounts that are not reported to the credit bureaus.",
                "Obtain new forms of credit. This may seem counterintuitive, but obtaining new lines of credit is one of the best ways to start rebuilding your credit score.",
                "Use your new lines of credit responsibly. Once you have obtained new lines of credit, it is important to use them wisely. This means making payments on time and keeping your balances low.",
              ].map((text) => (
                <p key={text.slice(0, 24)} className="text-[14px] leading-[1.7] text-[#333]">
                  – {text}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-10 md:px-8 md:py-14">
          <Stagger className="mx-auto grid max-w-[1140px] gap-6 sm:grid-cols-2">
            {[
              {
                icon: "/rebuild-your-credit/icon-1.png",
                text: "Apply today for a car loan and get your credit score moving in the right direction!",
              },
              {
                icon: "/rebuild-your-credit/icon-2.png",
                text: "See how much you can afford to pay each month with our car loan calculator.",
              },
              {
                icon: "/rebuild-your-credit/icon-3.png",
                text: "Our lenders are currently offering great rates, so now is the time to apply.",
              },
              {
                icon: "/rebuild-your-credit/icon-4.png",
                text: "We have thousands of dealerships across Canada that we work with, so finding the perfect car for you will be easy.",
              },
            ].map((card) => (
              <StaggerItem
                key={card.text}
                className="flex items-start gap-4 rounded-[12px] border border-[#E6E6E6] p-5 transition-shadow duration-300 hover:shadow-md md:p-6"
              >
                <Image
                  src={card.icon}
                  alt=""
                  width={64}
                  height={64}
                  className="h-12 w-12 shrink-0 object-contain md:h-14 md:w-14"
                />
                <p className="text-[15px] font-semibold leading-snug text-[#333] md:text-[16px]">
                  {card.text}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>
      </main>
      <Footer />
    </>
  );
}
