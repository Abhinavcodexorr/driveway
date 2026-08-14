"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Reveal } from "./motion";

/** Driveway Registered State options — full name + short form */
const STATES = [
  { code: "AL", name: "Alabama" },
  { code: "AK", name: "Alaska" },
  { code: "AZ", name: "Arizona" },
  { code: "AR", name: "Arkansas" },
  { code: "CA", name: "California" },
  { code: "CO", name: "Colorado" },
  { code: "CT", name: "Connecticut" },
  { code: "DE", name: "Delaware" },
  { code: "FL", name: "Florida" },
  { code: "GA", name: "Georgia" },
  { code: "HI", name: "Hawaii" },
  { code: "ID", name: "Idaho" },
  { code: "IL", name: "Illinois" },
  { code: "IN", name: "Indiana" },
  { code: "IA", name: "Iowa" },
  { code: "KS", name: "Kansas" },
  { code: "KY", name: "Kentucky" },
  { code: "LA", name: "Louisiana" },
  { code: "ME", name: "Maine" },
  { code: "MD", name: "Maryland" },
  { code: "MA", name: "Massachusetts" },
  { code: "MI", name: "Michigan" },
  { code: "MN", name: "Minnesota" },
  { code: "MS", name: "Mississippi" },
  { code: "MO", name: "Missouri" },
  { code: "MT", name: "Montana" },
  { code: "NE", name: "Nebraska" },
  { code: "NV", name: "Nevada" },
  { code: "NH", name: "New Hampshire" },
  { code: "NJ", name: "New Jersey" },
  { code: "NM", name: "New Mexico" },
  { code: "NY", name: "New York" },
  { code: "NC", name: "North Carolina" },
  { code: "ND", name: "North Dakota" },
  { code: "OH", name: "Ohio" },
  { code: "OK", name: "Oklahoma" },
  { code: "OR", name: "Oregon" },
  { code: "PA", name: "Pennsylvania" },
  { code: "RI", name: "Rhode Island" },
  { code: "SC", name: "South Carolina" },
  { code: "SD", name: "South Dakota" },
  { code: "TN", name: "Tennessee" },
  { code: "TX", name: "Texas" },
  { code: "UT", name: "Utah" },
  { code: "VT", name: "Vermont" },
  { code: "VA", name: "Virginia" },
  { code: "WA", name: "Washington" },
  { code: "DC", name: "Washington, D.C." },
  { code: "WV", name: "West Virginia" },
  { code: "WI", name: "Wisconsin" },
  { code: "WY", name: "Wyoming" },
] as const;

const SellSection = () => {
  const router = useRouter();
  const [tab, setTab] = useState<"plate" | "vin">("plate");
  const [plate, setPlate] = useState("");
  const [state, setState] = useState("");
  const [vin, setVin] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (tab === "plate") {
      if (plate) params.set("plate", plate);
      if (state) params.set("state", state);
    } else if (vin) {
      params.set("vin", vin);
    }
    const qs = params.toString();
    router.push(qs ? `/trade-in-my-car?${qs}` : "/trade-in-my-car");
  };

  return (
    <section className="dw-font w-full bg-[#00af66] px-4 py-10 sm:px-6 sm:py-12 lg:px-16 lg:pb-8 lg:pt-12 xl:px-[120px]">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-8 sm:gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
        <Reveal className="w-full max-w-[480px] text-center lg:text-left" x={-24}>
          <h2 className="mb-3 text-[clamp(1.75rem,5vw,2.5rem)] font-bold leading-tight text-white sm:mb-4">
            What’s my car worth?
          </h2>
          <p className="text-[15px] leading-relaxed text-white/95 sm:text-[16px] md:text-[18px]">
            We’ve got a tried-and-true system for getting you a guaranteed, no-haggle
            price for your vehicle. Trade in and trade up, or collect some cash for
            your ride.
          </p>
        </Reveal>

        <Reveal delay={0.12} x={24} className="w-full max-w-[480px]">
        <form
          onSubmit={onSubmit}
          className="w-full overflow-hidden rounded-lg bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
        >
          <div className="relative flex border-b border-gray-200">
            <button
              type="button"
              role="tab"
              aria-selected={tab === "plate"}
              onClick={() => setTab("plate")}
              className={`flex-1 py-4 text-[15px] font-semibold transition-colors ${
                tab === "plate" ? "text-[#00af66]" : "text-[#666]"
              }`}
            >
              License Plate
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={tab === "vin"}
              onClick={() => setTab("vin")}
              className={`flex-1 py-4 text-[15px] font-semibold transition-colors ${
                tab === "vin" ? "text-[#00af66]" : "text-[#666]"
              }`}
            >
              VIN
            </button>
            <span
              className="absolute bottom-0 h-[3px] bg-[#00af66] transition-all duration-200"
              style={{
                width: "50%",
                left: tab === "plate" ? "0%" : "50%",
              }}
            />
          </div>

          <div className="space-y-4 bg-[#f4f6f7] p-5">
            {tab === "plate" ? (
              <>
                <div>
                  <label htmlFor="plate" className="mb-1 block text-[13px] font-medium text-[#353535]">
                    Plate Number
                  </label>
                  <input
                    id="plate"
                    value={plate}
                    onChange={(e) => setPlate(e.target.value)}
                    placeholder="ABCD46"
                    className="h-12 w-full rounded-md border border-gray-300 bg-white px-3 text-[15px] outline-none focus:border-[#00af66]"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="mb-1 block text-[13px] font-medium text-[#353535]">
                    Registered State
                  </label>
                  <select
                    id="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="h-12 w-full rounded-md border border-gray-300 bg-white px-3 text-[15px] outline-none focus:border-[#00af66]"
                  >
                    <option value="">State</option>
                    {STATES.map((s) => (
                      <option key={s.code} value={s.code}>
                        {s.name} ({s.code})
                      </option>
                    ))}
                  </select>
                </div>
              </>
            ) : (
              <div>
                <label htmlFor="vin" className="mb-1 block text-[13px] font-medium text-[#353535]">
                  VIN
                </label>
                <input
                  id="vin"
                  value={vin}
                  onChange={(e) => setVin(e.target.value)}
                  placeholder="Enter 17-character VIN"
                  className="h-12 w-full rounded-md border border-gray-300 bg-white px-3 text-[15px] outline-none focus:border-[#00af66]"
                />
              </div>
            )}

            <button
              type="submit"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#00af66] text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              Get an Offer
            </button>
          </div>
        </form>
        </Reveal>
      </div>
    </section>
  );
};

export default SellSection;
