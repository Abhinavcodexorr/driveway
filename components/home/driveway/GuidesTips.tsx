"use client";

import Image from "next/image";
import Link from "next/link";
import { DW_GUIDES } from "./constants";
import { Reveal, Stagger, StaggerItem } from "./motion";

type Guide = (typeof DW_GUIDES)[number];

const GuideCard = ({
  guide,
  variant,
}: {
  guide: Guide;
  variant: "lg" | "md" | "sm";
}) => {
  const isLg = variant === "lg";
  const isSm = variant === "sm";
  const showDescription = !isSm;

  return (
    <Link
      href={guide.href}
      className={`group relative block h-full min-h-[220px] cursor-pointer overflow-hidden rounded-[20px] text-white no-underline md:rounded-[24px] ${
        isLg
          ? "min-h-[420px] lg:min-h-[640px]"
          : isSm
            ? "min-h-[220px] lg:min-h-[300px]"
            : "min-h-[240px] lg:min-h-[300px]"
      }`}
    >
      <Image
        src={guide.image}
        alt=""
        fill
        sizes={
          isLg
            ? "(max-width: 1023px) 100vw, 50vw"
            : "(max-width: 1023px) 50vw, 25vw"
        }
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent"
        aria-hidden
      />

      <div
        className={`absolute inset-x-0 bottom-0 z-10 flex flex-col ${
          isLg
            ? "p-6 md:p-8 lg:p-10"
            : isSm
              ? "p-5 md:p-6"
              : "p-5 md:p-7"
        }`}
      >
        <h3
          className={`m-0 font-bold leading-[1.2] tracking-[-0.02em] text-white ${
            isLg
              ? "mb-3 text-[24px] md:text-[28px] lg:text-[32px]"
              : isSm
                ? "mb-3 text-[18px] md:text-[20px]"
                : "mb-2 text-[20px] md:text-[24px] lg:text-[26px]"
          }`}
        >
          {guide.title}
        </h3>

        {showDescription && (
          <p
            className={`m-0 mb-4 line-clamp-3 font-normal leading-[1.45] text-white/95 ${
              isLg
                ? "max-w-[520px] text-[15px] md:text-[17px]"
                : "text-[14px] md:text-[15px]"
            }`}
          >
            {guide.description}
          </p>
        )}

        <span
          className={`font-bold text-white underline underline-offset-4 decoration-white ${
            isSm ? "mt-0 text-[15px]" : "text-[15px] md:text-[16px]"
          }`}
        >
          Explore More
        </span>
      </div>
    </Link>
  );
};

const GuidesTips = () => {
  const [featured, medium, ...smalls] = DW_GUIDES;

  return (
    <section className="dw-font flex w-full flex-col items-center bg-[#F5F5F5] px-4 py-10 sm:px-6 md:px-10 md:py-14 xl:px-[72px] xl:py-16">
      <Reveal className="mb-8 w-full max-w-[1320px] text-center md:mb-12 xl:mb-14">
        <h2 className="mb-4 text-[29px] font-bold leading-[1.2] tracking-[-0.6px] text-[#353535] md:text-[33px] xl:mb-5 xl:text-[39px] xl:tracking-[-1.2px]">
          Guides & Tips
        </h2>
        <p className="m-0 mx-auto max-w-[720px] text-[16px] leading-relaxed text-[#353535] md:text-[18px]">
          Everything you need to know about buying, selling, and maintaining your
          car.
        </p>
      </Reveal>

      <Stagger className="grid w-full max-w-[1320px] grid-cols-1 gap-4 md:gap-5 lg:grid-cols-2 lg:grid-rows-[minmax(300px,1fr)_minmax(300px,1fr)]">
        <StaggerItem className="lg:row-span-2">
          <GuideCard guide={featured} variant="lg" />
        </StaggerItem>

        <StaggerItem>
          <GuideCard guide={medium} variant="md" />
        </StaggerItem>

        <StaggerItem className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5">
          {smalls.map((guide) => (
            <GuideCard key={guide.title} guide={guide} variant="sm" />
          ))}
        </StaggerItem>
      </Stagger>

      <Reveal delay={0.15} className="mt-8 flex w-full justify-center md:mt-10 xl:mt-12">
        <Link
          href="/about-us"
          className="inline-flex h-12 cursor-pointer items-center justify-center rounded-full border-2 border-[#007aff] bg-[#007aff] px-8 text-[16px] font-semibold leading-none text-white no-underline transition-transform duration-300 hover:scale-[1.03] hover:border-[#0066d6] hover:bg-[#0066d6]"
        >
          Read More Articles
        </Link>
      </Reveal>
    </section>
  );
};

export default GuidesTips;
