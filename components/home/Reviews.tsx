/* =========================
   Reviews Component (Home)
   Compact customer review carousel.
========================= */

"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

import google from "@/assets/brand/google.png";
import googleReview from "@/assets/brand/Goolge-Review-Logo.jpg";
import { getConstants } from "@/constants";
import { useAppConfig } from "@/app/providers";
import { Reveal } from "@/components/common";

type Review = {
  name: string;
  text: string;
  image: string;
};

const reviews: Review[] = [
  {
    name: "It's Jerry",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Bought a 2021 Jetta Highline from Cardora and the experience was amazing—thanks to Sam. He stepped in personally and resolved everything with professionalism and genuine care.",
  },
  {
    name: "Shimul Rajput",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Just bought my first car and Sam was amazing! Supportive, quick to respond, and made the whole process easy and stress-free. Highly recommended!",
  },
  {
    name: "Katie McWade",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Sam worked hard to get us the best rate and turned a stressful process into something seamless. We are incredibly happy with our newly purchased vehicle.",
  },
  {
    name: "Gary Williams",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    text: "Amazing experience dealing with Sam and his team. I highly recommend them for any vehicle purchase and will definitely be back for my next upgrade.",
  },
  {
    name: "Inderjeet",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    text: "Sam was knowledgeable, patient, and helpful throughout. He even went out of his way to find the perfect car. Stress-free and enjoyable from start to finish.",
  },
];

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=cardora#lrd=0x882b3f8957c9a033:0x9a07057d8dafccb0,1";

const Reviews = () => {
  const appConfig = useAppConfig();
  const { SITE_CONFIG } = getConstants(appConfig);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);
  const paused = useRef(false);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 767) setSlidesToShow(1);
      else if (window.innerWidth < 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getScrollAmount = () => {
    if (!scrollRef.current) return 0;
    const firstChild = scrollRef.current.querySelector("[data-slide]");
    return firstChild ? firstChild.clientWidth : scrollRef.current.clientWidth / slidesToShow;
  };

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current || isScrolling.current) return;

    const container = scrollRef.current;
    const scrollAmount = getScrollAmount();
    isScrolling.current = true;

    const targetScrollLeft =
      dir === "left" ? container.scrollLeft - scrollAmount : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: targetScrollLeft,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = getScrollAmount();
    const singleSetWidth = scrollAmount * reviews.length;
    container.scrollLeft = singleSetWidth;

    const handleScrollEnd = () => {
      if (!container) return;
      const currentScrollAmount = getScrollAmount();
      const currentSetWidth = currentScrollAmount * reviews.length;

      if (container.scrollLeft >= currentSetWidth * 2 - 10) {
        container.style.scrollBehavior = "auto";
        container.scrollLeft = container.scrollLeft - currentSetWidth;
        container.style.scrollBehavior = "smooth";
      } else if (container.scrollLeft <= currentScrollAmount) {
        container.style.scrollBehavior = "auto";
        container.scrollLeft = container.scrollLeft + currentSetWidth;
        container.style.scrollBehavior = "smooth";
      }

      isScrolling.current = false;
    };

    container.addEventListener("scrollend", handleScrollEnd);
    return () => container.removeEventListener("scrollend", handleScrollEnd);
  }, [slidesToShow]);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) scroll("right");
    }, 6000);
    return () => clearInterval(id);
  }, [slidesToShow]);

  const arrowClass =
    "flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#d0d0d0] bg-white text-[#007aff] shadow-sm transition-colors hover:border-[#007aff] hover:bg-[#007aff] hover:text-white";

  return (
    <section
      id="reviews"
      className="dw-font w-full bg-[#F3F8F5] py-10 md:py-14"
      onMouseEnter={() => {
        paused.current = true;
      }}
      onMouseLeave={() => {
        paused.current = false;
      }}
    >
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <Reveal className="mx-auto mb-7 max-w-[720px] text-center md:mb-8">
          <h2 className="text-[clamp(1.75rem,5vw,2.75rem)] font-bold leading-[1.2] tracking-[-0.6px] text-[#121212]">
            People love {SITE_CONFIG?.dealership.name}
          </h2>

          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center gap-2.5 rounded-full border border-black/8 bg-white px-4 py-2 shadow-[0_4px_18px_rgba(0,0,0,0.06)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,122,255,0.16)]"
          >
            <Image src={google} alt="Google" className="h-5 w-[64px] object-contain" />
            <span className="flex items-center gap-0.5" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-[#F4B400] text-[#F4B400]" />
              ))}
            </span>
            <span className="text-[13px] font-semibold text-[#121212]">5.0 (33)</span>
          </a>
        </Reveal>

        <div className="relative md:px-[52px]">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Previous review"
            className={`${arrowClass} absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 md:flex`}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            ref={scrollRef}
            className="w-full snap-x snap-mandatory overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="flex w-full items-stretch py-1">
              {duplicatedReviews.map((r, index) => (
                <div
                  key={`${r.name}-${index}`}
                  data-slide
                  className={`snap-center shrink-0 px-2 ${
                    slidesToShow === 1 ? "w-full" : slidesToShow === 2 ? "w-1/2" : "w-1/3"
                  }`}
                >
                  <article className="flex h-full flex-col rounded-xl border border-black/5 bg-white p-4 shadow-[0_6px_20px_rgba(16,24,40,0.05)] transition-shadow duration-300 hover:shadow-[0_10px_24px_rgba(0,122,255,0.12)] md:p-5">
                    <div className="flex items-center gap-3">
                      <Image
                        src={r.image}
                        alt={r.name}
                        width={44}
                        height={44}
                        className="h-11 w-11 rounded-full object-cover"
                      />
                      <div className="min-w-0">
                        <h3 className="truncate text-[15px] font-bold text-[#121212]">{r.name}</h3>
                        <div className="mt-0.5 flex gap-0.5" aria-label="5 out of 5 stars">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-[#F4B400] text-[#F4B400]" />
                          ))}
                        </div>
                      </div>
                    </div>

                    <p className="mt-3 line-clamp-4 text-[14px] leading-relaxed text-[#4a4a4a]">
                      {r.text}
                    </p>

                    <div className="mt-3 flex items-center gap-1.5 pt-1">
                      <Image src={googleReview} alt="" className="h-4 w-4 object-contain" />
                      <span className="text-[12px] font-semibold text-[#6b6b6b]">Google Review</span>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Next review"
            className={`${arrowClass} absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 md:flex`}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4 flex items-center justify-center gap-4 md:hidden">
          <button type="button" onClick={() => scroll("left")} aria-label="Previous review" className={arrowClass}>
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button type="button" onClick={() => scroll("right")} aria-label="Next review" className={arrowClass}>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
