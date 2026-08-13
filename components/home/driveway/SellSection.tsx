"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Reveal } from "./motion";

const PROVINCES = [
  "AB", "BC", "MB", "NB", "NL", "NS", "NT", "NU", "ON", "PE", "QC", "SK", "YT",
];

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
    <section className="dw-font w-full bg-[#0C316D] px-6 py-12 lg:px-[180px] lg:pb-8 lg:pt-12">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
        <Reveal className="max-w-[480px] text-center lg:text-left" x={-24}>
          <h2 className="mb-4 text-[32px] font-bold leading-tight text-white md:text-[40px]">
            What’s my car worth?
          </h2>
          <p className="text-[16px] leading-relaxed text-white/95 md:text-[18px]">
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
                tab === "plate" ? "text-[#1451B5]" : "text-[#666]"
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
                tab === "vin" ? "text-[#1451B5]" : "text-[#666]"
              }`}
            >
              VIN
            </button>
            <span
              className="absolute bottom-0 h-[3px] bg-[#1451B5] transition-all duration-200"
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
                    className="h-12 w-full rounded-md border border-gray-300 bg-white px-3 text-[15px] outline-none focus:border-[#1451B5]"
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
                    className="h-12 w-full rounded-md border border-gray-300 bg-white px-3 text-[15px] outline-none focus:border-[#1451B5]"
                  >
                    <option value="">State</option>
                    {PROVINCES.map((p) => (
                      <option key={p} value={p}>
                        {p}
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
                  className="h-12 w-full rounded-md border border-gray-300 bg-white px-3 text-[15px] outline-none focus:border-[#1451B5]"
                />
              </div>
            )}

            <button
              type="submit"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#1451B5] text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
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
