"use client";

import Image from "next/image";
import Link from "next/link";
import { RECOMMENDED_CARS } from "./constants";
import { Reveal, Stagger, StaggerItem } from "./motion";

const RecommendedCars = () => {
  return (
    <section className="dw-font w-full bg-[#081848] px-6 pb-16 pt-4">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <h2 className="mb-14 text-center text-[24px] font-bold text-white md:mb-16 md:text-[28px]">
            Pre-Owned Cars You Might Like
          </h2>
        </Reveal>

        <Stagger
          as="ul"
          className="mx-auto grid max-w-[1000px] list-none grid-cols-1 gap-12 p-0 md:grid-cols-3 md:gap-8"
        >
          {RECOMMENDED_CARS.map((car) => (
            <StaggerItem key={car.name} as="li" className="relative pt-14">
              <Link
                href={car.href}
                className="group relative flex flex-col items-center rounded-[20px] bg-white px-4 pb-6 pt-16 text-center shadow-sm transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="pointer-events-none absolute -top-10 left-1/2 w-[90%] max-w-[260px] -translate-x-1/2 transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={car.image}
                    alt={car.name}
                    width={256}
                    height={120}
                    className="h-auto w-full object-contain"
                  />
                </div>
                <h3 className="mb-2 text-[20px] font-bold text-[#121212]">{car.name}</h3>
                <span className="text-[15px] font-medium text-[#00af66] underline-offset-2 group-hover:underline">
                  Get Pre-Approved
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default RecommendedCars;
