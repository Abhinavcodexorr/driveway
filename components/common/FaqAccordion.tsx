"use client";

import { useId, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  q?: string;
  question?: string;
  a?: ReactNode;
  answer?: ReactNode;
}

interface FaqAccordionProps {
  faqs: FAQItem[];
  /** Index open on first render. Pass null to start fully collapsed. */
  defaultOpen?: number | null;
  className?: string;
}

export default function FaqAccordion({
  faqs,
  defaultOpen = 0,
  className = "",
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);
  const reactId = useId();

  return (
    <div className={`space-y-3 ${className}`.trim()}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const questionText = faq.q || faq.question || "";
        const answerText = faq.a ?? faq.answer;
        const panelId = `${reactId}-panel-${index}`;
        const buttonId = `${reactId}-button-${index}`;

        return (
          <div
            key={`${questionText}-${index}`}
            className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${
              isOpen
                ? "border-[#00af66]/35 bg-white shadow-[0_8px_28px_rgba(0,175,102,0.08)]"
                : "border-zinc-200/90 bg-[#f7f8f8] hover:border-zinc-300 hover:bg-white"
            }`}
          >
            <button
              id={buttonId}
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full cursor-pointer items-start gap-3 px-4 py-4 text-left sm:items-center sm:gap-4 sm:px-5 sm:py-5 md:px-6"
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span
                className={`min-w-0 flex-1 text-[16px] font-semibold leading-snug transition-colors duration-300 sm:text-[17px] md:text-[19px] ${
                  isOpen ? "text-zinc-900" : "text-zinc-600 group-hover:text-zinc-800"
                }`}
              >
                {questionText}
              </span>

              <span
                className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 sm:mt-0 sm:h-9 sm:w-9 ${
                  isOpen
                    ? "bg-[#00af66] text-white"
                    : "bg-white text-zinc-500 ring-1 ring-zinc-200 group-hover:text-[#00af66] group-hover:ring-[#00af66]/30"
                }`}
              >
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ease-out ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  strokeWidth={2.25}
                />
              </span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-[#00af66]/15 px-4 pb-5 pt-0 sm:px-5 md:px-6">
                  <div className="pt-4 text-[15px] leading-relaxed text-zinc-600 sm:text-[16px] md:leading-[1.7]">
                    {answerText}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
