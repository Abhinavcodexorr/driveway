"use client";

import { FaqAccordion, Reveal } from "@/components/common";
import { FAQS } from "@/constants/faqs";

const HomeFaq = () => {
  return (
    <section id="faq" className="dw-font w-full bg-white px-4 py-14 sm:px-6 md:px-10 md:py-20">
      <div className="mx-auto max-w-[900px]">
        <Reveal className="mb-8 text-center md:mb-10">
          <h2 className="mb-3 text-[clamp(1.75rem,3.8vw,2.75rem)] font-bold leading-[1.15] tracking-[-0.03em] text-[#121212]">
            Frequently asked questions
          </h2>
          <p className="mx-auto max-w-xl text-[15px] leading-relaxed text-[#5C574F] sm:text-[16px]">
            You&apos;ve got questions? We&apos;ve got answers about financing, credit, and getting
            approved with Carma Credit.
          </p>
        </Reveal>

        <FaqAccordion faqs={FAQS} />
      </div>
    </section>
  );
};

export default HomeFaq;
