"use client";

import { PageShell } from "@/components/layout";
import { Reveal } from "@/components/common/motion";
import FaqAccordion from "@/components/common/FaqAccordion";
import { FAQS } from "@/constants/faqs";

export default function FaqPage() {
  return (
    <PageShell>
      <main className="min-h-screen bg-white">
        <section className="relative overflow-hidden px-4 pb-8 pt-10 md:px-8 md:pb-10 md:pt-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(ellipse_at_top,_rgba(0,122,255,0.10),_transparent_65%)]"
          />
          <Reveal className="relative mx-auto max-w-[900px] text-center">
            <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#007aff]">
              Help center
            </p>
            <h1 className="mb-3 text-[clamp(1.75rem,6vw,3rem)] font-bold tracking-tight text-zinc-900">
              Frequently asked questions
            </h1>
            <p className="mx-auto max-w-xl text-[15px] leading-relaxed text-zinc-500 sm:text-[16px]">
              You&apos;ve got questions? We&apos;ve got answers about financing, credit, and getting
              approved with Carma Credit.
            </p>
          </Reveal>
        </section>

        <section className="px-4 pb-14 md:px-8 md:pb-20">
          <div className="mx-auto max-w-[900px]">
            <FaqAccordion faqs={FAQS} />
          </div>
        </section>
      </main>
    </PageShell>
  );
}
