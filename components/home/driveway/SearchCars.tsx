"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Reveal } from "./motion";

const SearchCars = () => {
  const router = useRouter();
  const [condition, setCondition] = useState<"used" | "new">("used");
  const [query, setQuery] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Carma Credit focuses on financing — route search to pre-approval
    router.push("/financing");
  };

  return (
    <section className="dw-font w-full bg-[#081848] px-6 py-12">
      <Reveal className="mx-auto max-w-[1100px]">
        <h2 className="mb-8 text-center text-[28px] font-bold text-white md:text-[32px]">
          Get Pre-Approved
        </h2>

        <form
          onSubmit={onSubmit}
          className="mx-auto flex max-w-[900px] flex-col items-stretch gap-4 md:flex-row md:items-center md:justify-center"
        >
          <div
            role="group"
            className="mx-auto flex h-[52px] w-full max-w-[220px] overflow-hidden rounded-full bg-[#d9d9d9] p-1 md:mx-0 md:w-[220px]"
          >
            <button
              type="button"
              aria-pressed={condition === "used"}
              onClick={() => setCondition("used")}
              className={`flex-1 rounded-full text-[16px] font-semibold transition-colors ${
                condition === "used"
                  ? "bg-white text-[#081848]"
                  : "bg-transparent text-[#353535]"
              }`}
            >
              Used
            </button>
            <button
              type="button"
              aria-pressed={condition === "new"}
              onClick={() => setCondition("new")}
              className={`flex-1 rounded-full text-[16px] font-semibold transition-colors ${
                condition === "new"
                  ? "bg-white text-[#081848]"
                  : "bg-transparent text-[#353535]"
              }`}
            >
              New
            </button>
          </div>

          <div className="relative w-full flex-1">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search makes and models"
              aria-label="Search makes and models"
              className="h-[52px] w-full rounded-[12px] border-0 bg-white px-5 pr-14 text-[16px] text-[#353535] outline-none placeholder:text-[#9a9a9a]"
            />
            <button
              type="submit"
              aria-label="Get Pre-Approved"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#353535] transition-colors hover:text-[#00af66]"
            >
              <Search className="h-5 w-5" strokeWidth={2} />
            </button>
          </div>
        </form>
      </Reveal>
    </section>
  );
};

export default SearchCars;
