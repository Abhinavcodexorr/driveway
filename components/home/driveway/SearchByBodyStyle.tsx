"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "./motion";

const BODY_STYLES = [
  {
    title: "Used Sedans",
    image: "/driveway/body/sedan.svg",
    bodyType: ["Sedan", "Sedan 4 Dr."],
  },
  {
    title: "Used SUVs",
    image: "/driveway/body/suv.svg",
    bodyType: ["SUV", "Sport Utility Vehicle", "SUV-Crossover", "Suvs", "Sport Utility 4-Door"],
  },
  {
    title: "Used Trucks",
    image: "/driveway/body/truck.svg",
    bodyType: ["Pickup Truck", "Truck", "Pickup-Truck", "Trucks"],
  },
  {
    title: "Used Hatchbacks",
    image: "/driveway/body/hatchback.svg",
    bodyType: ["Hatchback", "Hatchback 2 Dr."],
  },
  {
    title: "Used Coupes",
    image: "/driveway/body/coupe.svg",
    bodyType: ["Coupe", "Coupes", "Coupe 2-Door"],
  },
  {
    title: "Used Convertibles",
    image: "/driveway/body/convertible.svg",
    bodyType: ["Convertible", "Convertibles"],
  },
  {
    title: "Used Minivans",
    image: "/driveway/body/minivan.svg",
    bodyType: ["Van", "Minivan-Van", "minivan", "Minivan"],
  },
  {
    title: "Used Wagons",
    image: "/driveway/body/wagon.svg",
    bodyType: ["Wagon", "Wagons"],
  },
] as const;

const BRANDS = [
  { title: "Toyota", image: "/driveway/brands/toyota.png" },
  { title: "Ford", image: "/driveway/brands/ford.png" },
  { title: "Honda", image: "/driveway/brands/honda.png" },
  { title: "Nissan", image: "/driveway/brands/nissan.png" },
  { title: "Jeep", image: "/driveway/brands/jeep.png" },
  { title: "Chevrolet", image: "/driveway/brands/chevrolet.png" },
  { title: "Hyundai", image: "/driveway/brands/hyundai.png" },
  { title: "Mercedes-Benz", image: "/driveway/brands/mercedes-benz.png" },
  { title: "BMW", image: "/driveway/brands/bmw.png" },
  { title: "Lexus", image: "/driveway/brands/lexus.png" },
  { title: "Audi", image: "/driveway/brands/audi.png" },
  { title: "Cadillac", image: "/driveway/brands/cadillac.png" },
  { title: "Kia", image: "/driveway/brands/kia.png" },
  { title: "Volvo", image: "/driveway/brands/volvo.png" },
  { title: "Mazda", image: "/driveway/brands/mazda.png" },
  { title: "Lincoln", image: "/driveway/brands/lincoln.png" },
] as const;

/** Driveway row-major order (4 columns) */
const MODELS = [
  "Honda Civic",
  "Honda Accord",
  "Dodge Charger",
  "Ram 1500",
  "Ford F150",
  "Ford Mustang",
  "Toyota Camry",
  "Chevy Camaro",
  "Chevy Silverado",
  "Nissan Altima",
  "Toyota Corolla",
  "Hyundai Elantra",
  "Jeep Wrangler",
  "Ford Focus",
  "Chevy Equinox",
  "Chevy Cruze",
  "Honda CR-V",
  "Chevy Malibu",
  "Ford Fusion",
  "Ford Escape",
  "Hyundai Sonata",
  "Jeep Cherokee",
  "Toyota Tacoma",
  "BMW 3-Series",
  "Ford Explorer",
  "Toyota RAV4",
  "Chevy Tahoe",
  "Chrysler 200",
] as const;

const SearchByBodyStyle = () => {
  return (
    <section className="dw-font w-full bg-white px-4 py-12 md:px-10 md:py-16 xl:px-[120px] xl:py-24">
      <div className="mx-auto w-full max-w-[1075px] space-y-12 md:space-y-16">
        {/* Search by Body Style */}
        <div>
          <Reveal>
            <h2 className="mb-8 text-[24px] font-bold leading-tight text-[#353535] md:mb-10 md:text-[28px]">
              Search by Body Style
            </h2>
          </Reveal>
          <Stagger
            as="ul"
            className="m-0 grid list-none grid-cols-2 gap-x-4 gap-y-8 p-0 sm:grid-cols-3 md:grid-cols-4 md:gap-x-6 md:gap-y-10"
          >
            {BODY_STYLES.map((item) => (
              <StaggerItem key={item.title} as="li">
                <Link
                  href="/financing"
                  className="group flex cursor-pointer flex-col items-center text-center no-underline transition-transform duration-300 hover:-translate-y-1"
                >
                  <Image
                    src={item.image}
                    alt=""
                    width={109}
                    height={51}
                    className="mb-3 h-[51px] w-[109px] object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="text-[15px] font-normal text-[#00af66] underline underline-offset-2 md:text-[16px]">
                    {item.title}
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Search by Brand */}
        <div>
          <Reveal>
            <h2 className="mb-8 text-[24px] font-bold leading-tight text-[#353535] md:mb-10 md:text-[28px]">
              Search by Brand
            </h2>
          </Reveal>
          <Stagger
            as="ul"
            className="m-0 grid list-none grid-cols-2 gap-x-3 gap-y-6 p-0 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 md:gap-x-4 md:gap-y-8"
          >
            {BRANDS.map((brand) => (
              <StaggerItem key={brand.title} as="li">
                <Link
                  href="/financing"
                  className="group flex cursor-pointer flex-col items-center text-center no-underline"
                >
                  <div className="mb-2 flex aspect-square w-full items-center justify-center rounded-lg border border-[#E1E1E1] bg-white p-3 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#00af66]">
                    <Image
                      src={brand.image}
                      alt={brand.title}
                      width={80}
                      height={80}
                      className="h-auto max-h-[56px] w-auto max-w-full object-contain md:max-h-[64px]"
                    />
                  </div>
                  <span className="text-[12px] font-normal text-[#353535] md:text-[13px]">
                    {brand.title}
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Search by Popular Models */}
        <div>
          <Reveal>
            <h2 className="mb-8 text-[24px] font-bold leading-tight text-[#353535] md:mb-10 md:text-[28px]">
              Search by Popular Models
            </h2>
          </Reveal>
          <Stagger
            as="ul"
            className="m-0 grid list-none grid-cols-2 gap-x-4 gap-y-3 p-0 sm:grid-cols-3 md:grid-cols-4 md:gap-x-8 md:gap-y-3.5"
          >
            {MODELS.map((model) => (
              <StaggerItem key={model} as="li">
                <Link
                  href="/financing"
                  className="cursor-pointer text-[15px] font-normal text-[#00af66] underline underline-offset-2 transition-colors hover:text-[#0C316D] md:text-[16px]"
                >
                  {model}
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
};

export default SearchByBodyStyle;
