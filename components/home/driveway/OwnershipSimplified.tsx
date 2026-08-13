"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "./motion";

const FEATURES = [
  {
    heading: "Car care essentials",
    description: "From scheduling and tracking service to managing your care plans.",
    icon: "/driveway/ico-protection.svg",
  },
  {
    heading: "Vehicle value tracking",
    description: "Keep tabs on your vehicle's value and equity.",
    icon: "/driveway/ico-docs.svg",
  },
  {
    heading: "Personalized experience",
    description: "Manage your details, import your vehicle history, and adjust your preferences.",
    icon: "/driveway/ico-tools.svg",
  },
  {
    heading: "Future shopping needs",
    description: "When it's time for your next vehicle, shop with ease.",
    icon: "/driveway/ico-accident.svg",
  },
] as const;

const OwnershipSimplified = () => {
  return (
    <section
      id="ownership-simplified"
      className="dw-font w-full bg-[#F4F6F7] px-6 py-14 md:py-16 lg:px-16 xl:px-24"
    >
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal x={-36} className="order-2 flex justify-center lg:order-1 lg:justify-start">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/driveway/ownership-phones.svg"
            alt="Phone mockups showing ownership services"
            width={380}
            height={499}
            className="h-auto w-full max-w-[380px] object-contain"
          />
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <h2 className="mb-4 text-[32px] font-bold leading-tight text-[#121212] md:text-[40px]">
              Ownership <span className="text-[#FF8D7D]">simplified</span>
            </h2>
            <p className="mb-8 max-w-[520px] text-[16px] leading-relaxed text-[#353535] md:text-[18px]">
              From your parking spot to the miles of road ahead, navigate every aspect of your
              vehicle ownership journey all in one place with Carma Credit.
            </p>
          </Reveal>

          <Stagger as="ul" className="mb-8 list-none space-y-5 p-0">
            {FEATURES.map((item) => (
              <StaggerItem key={item.heading} as="li" className="flex items-start gap-4">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.icon}
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                  />
                </div>
                <div>
                  <h3 className="mb-1 text-[17px] font-bold text-[#121212]">{item.heading}</h3>
                  <p className="text-[15px] leading-snug text-[#353535]">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.15}>
            <Link
              href="/service"
              className="inline-flex h-[52px] items-center justify-center rounded-full bg-[#00af66] px-10 text-[16px] font-semibold text-white transition-transform duration-300 hover:scale-[1.03] hover:opacity-90"
            >
              Join Carma Credit
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default OwnershipSimplified;
