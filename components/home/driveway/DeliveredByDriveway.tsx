"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./motion";

const SOCIAL_IMAGES = [
  "/driveway/delivered/07.png",
  "/driveway/delivered/08.png",
  "/driveway/delivered/09.png",
  "/driveway/delivered/01.jpg",
  "/driveway/delivered/10.png",
  "/driveway/delivered/02.jpg",
  "/driveway/delivered/03.jpg",
  "/driveway/delivered/04.jpg",
  "/driveway/delivered/05.jpg",
  "/driveway/delivered/06.jpg",
] as const;

const INSTAGRAM_URL = "https://www.instagram.com/driveway_hq/";

const DeliveredByDriveway = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-social-card]");
    const step = card ? card.offsetWidth : 240;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="dw-font w-full overflow-hidden bg-[#F9F7F2] px-4 pb-5 pt-12 sm:px-6 md:px-10 md:pb-11 md:pt-16 xl:px-12 xl:pt-24">
      <Reveal className="mx-auto mb-6 max-w-[904px] text-left md:mb-8 md:text-center">
        <h2 className="mb-4 text-[28px] font-bold leading-[1.2] tracking-[-0.5px] text-[#353535] md:mb-6 md:text-[32px] xl:text-[39px] xl:tracking-[-1.2px]">
          Delivered by Driveway
        </h2>
        <p className="m-0 text-[16px] leading-relaxed text-[#353535] md:text-[18px]">
          Chronicles of the moment the keys are handed over in your driveway, the
          daily drive, or feeling your vacation vibes. Use{" "}
          <strong className="font-bold">#DeliveredByDriveway</strong> for a chance
          to be featured in our happy drivers gallery.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="relative mx-auto max-w-[1304px] pb-7 xl:px-16 xl:pb-[60px]">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => scrollBy(-1)}
          className="absolute left-0 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#d0d0d0] bg-white text-[#1451B5] shadow-sm transition-colors hover:bg-[#1451B5] hover:text-white md:flex xl:left-2"
        >
          <ChevronLeft className="h-7 w-7" strokeWidth={1.5} />
        </button>

        <button
          type="button"
          aria-label="Next slide"
          onClick={() => scrollBy(1)}
          className="absolute right-0 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#d0d0d0] bg-white text-[#1451B5] shadow-sm transition-colors hover:bg-[#1451B5] hover:text-white md:flex xl:right-2"
        >
          <ChevronRight className="h-7 w-7" strokeWidth={1.5} />
        </button>

        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-1 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:gap-4 [&::-webkit-scrollbar]:hidden"
        >
          {SOCIAL_IMAGES.map((src, i) => (
            <Link
              key={`${src}-${i}`}
              data-social-card
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-[169px] w-[169px] shrink-0 snap-start overflow-hidden rounded-2xl sm:h-[185px] sm:w-[185px] md:h-[225px] md:w-[225px] xl:h-[225px] xl:w-[225px]"
            >
              <Image
                src={src}
                alt="#DeliveredByDriveway"
                fill
                sizes="225px"
                className="object-cover transition-transform duration-300 hover:scale-[1.03]"
              />
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default DeliveredByDriveway;
