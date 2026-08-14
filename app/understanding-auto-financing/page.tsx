"use client";

import { Header, Footer } from "@/components/layout";
import { Reveal, Stagger, StaggerItem } from "@/components/common/motion";

const TERMS = [
  {
    term: "APR (Annual Percentage Rate):",
    def: " this is the rate of how much it costs to borrow money over the course of a year, plus other fees like loan origination fees and the cost of GAP. This means your APR will be higher than your interest rate in most cases.",
  },
  {
    term: "Auto loan:",
    def: " this is the specific loan taken out to finance the purchase of a vehicle.",
  },
  {
    term: "Balloon payment:",
    def: " this is a large, lump sum payment that is typically made at the end of a loan’s term. It is used to lower monthly payments throughout the life of the loan, but you will owe the remaining balance of the loan in full at the end of its term.",
  },
  {
    term: "Buy here pay here:",
    def: " this is a type of dealership that offers financing for car buyers. These dealerships typically have higher interest rates and may not report your payments to the credit bureaus, so it is important to do your research before going this route.",
  },
  {
    term: "Capitalized cost reduction:",
    def: " this is money that you put towards the purchase of your vehicle that lowers the amount you finance. This could be a down payment, trade-in value, or cash rebate.",
  },
  {
    term: "Collateral:",
    def: " this is something of value that is used to secure a loan. In the case of an auto loan, the collateral is typically the vehicle itself.",
  },
  {
    term: "Cosigner:",
    def: " this is someone who agrees to sign a loan with you and is legally responsible for repaying the debt if you default on the loan.",
  },
  {
    term: "Credit score:",
    def: " this is a numerical representation of your creditworthiness, based on your credit history. A higher credit score means you are less of a risk to lenders and will likely qualify for lower interest rates.",
  },
  {
    term: "Down payment:",
    def: " this is money that you put towards the purchase of your vehicle upfront. The larger your down payment, the less you will have to finance and the lower your monthly payments will be.",
  },
  {
    term: "GAP (Guaranteed Auto Protection):",
    def: " this is insurance that covers the difference between what you owe on your loan and the actual cash value of your vehicle in the event of a total loss.",
  },
  {
    term: "Interest:",
    def: " this is the cost of borrowing money and is typically expressed as a percentage rate. The higher your interest rate, the more you will pay in interest over the life of your loan.",
  },
  {
    term: "Loan term:",
    def: " this is the length of time you have to repay your loan, typically expressed in months or years. A shorter loan term will have higher monthly payments but you will pay less in interest over the life of the loan. A longer loan term will have lower monthly payments but you will pay more in interest over the life of the loan.",
  },
  {
    term: "LTV (Loan-to-Value):",
    def: " this is a measure of how much you are borrowing relative to the value of your vehicle. It is typically expressed as a percentage and is used to determine your interest rate. The higher your LTV, the higher your interest rate will be.",
  },
  {
    term: "Principal:",
    def: " this is the amount of money you borrowed and does not include interest or other fees.",
  },
  {
    term: "Trade-in:",
    def: " this is when you use your old vehicle as part of the purchase price of your new vehicle. The value of your trade-in will be deducted from the total purchase price of your new vehicle.",
  },
];

export default function UnderstandingAutoFinancingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white font-[Arial,Helvetica,sans-serif] text-black">
        <section className="px-4 pt-6 md:px-8 md:pt-8">
          <Reveal
            y={20}
            className="relative mx-auto flex min-h-[280px] max-w-[1350px] items-center justify-center overflow-hidden rounded-[20px] bg-cover bg-center px-4 py-10 md:min-h-[589px] md:px-14 md:py-16"
            style={{
              backgroundImage: "url('/understanding-auto-financing/banner.jpeg')",
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 mx-auto max-w-[820px] text-center text-white">
              <h1 className="mb-5 text-[28px] font-bold leading-[1.15] tracking-[-0.02em] md:text-[52px] lg:text-[64px]">
                Understanding auto financing
              </h1>
              <p className="mx-auto max-w-[700px] text-[14px] leading-[1.7] text-white/95">
                When you are thinking about your auto loan, the following terms are good to know
                about and understand. These terms often come up in the finance process and are used
                in the monthly payment calculations, define different parties in the financial
                contract, measure values related to the loan like your credit score, and other
                similar things. These are some of the main terms to focus on, and you can find a
                comprehensive list further down in the glossary.
              </p>
            </div>
          </Reveal>
        </section>

        <section className="px-4 pb-[70px] pt-12 md:px-8 md:pt-16">
          <div className="mx-auto max-w-[1089px]">
            <Reveal>
              <h2 className="mb-8 text-[28px] font-bold leading-tight md:text-[42px]">
                Common Refinance Terms and Definitions
              </h2>
            </Reveal>

            <Stagger className="space-y-5">
              {TERMS.map((item) => (
                <StaggerItem key={item.term}>
                  <p className="text-[14px] leading-[1.7] text-[#333]">
                    <strong className="font-bold text-black">{item.term}</strong>
                    <span className="font-normal">{item.def}</span>
                  </p>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.1}>
              <p className="mt-8 text-[14px] leading-[1.7] text-[#333]">
                When you’re in the market for a new car, it’s important to understand all of the
                jargon that comes along with auto financing. With this glossary of key terms, you’ll
                be able to navigate the world of auto financing with confidence.
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
