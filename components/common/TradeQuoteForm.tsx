"use client";

import { useState } from "react";
import { getConstants } from "@/constants";
import { useAppConfig } from "@/app/providers";

type TradeMode = "vehicle" | "vin";

type TradeQuoteFormProps = {
  className?: string;
};

const TradeQuoteForm = ({ className = "" }: TradeQuoteFormProps) => {
  const appConfig = useAppConfig();
  const { SITE_CONFIG } = getConstants(appConfig);
  const [mode, setMode] = useState<TradeMode>("vehicle");

  const TRADE_FORMS = {
    vehicle: {
      url: SITE_CONFIG.urls.tradeFormByVehicle,
      minHeight: 447,
    },
    vin: {
      url: SITE_CONFIG.urls.tradeFormByVin,
      minHeight: 327,
    },
  };

  return (
    <div
      className={`w-full max-w-[440px] rounded-2xl border border-border-lightGray/80 bg-white p-5 pb-8 shadow-xl md:p-8 md:pb-10 ${className}`}
    >
      <div className="mb-6 flex cursor-pointer border-b border-border-standard">
        <button
          type="button"
          onClick={() => setMode("vehicle")}
          className={`relative flex-1 cursor-pointer pb-3 text-center text-[16px] font-bold transition-all md:text-[18px] ${
            mode === "vehicle" ? "text-gray-900" : "text-gray-500"
          }`}
        >
          By Vehicle
          {mode === "vehicle" && (
            <div className="absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full bg-brand2" />
          )}
        </button>

        <button
          type="button"
          onClick={() => setMode("vin")}
          className={`relative flex-1 cursor-pointer pb-3 text-center text-[16px] font-bold transition-all md:text-[18px] ${
            mode === "vin" ? "text-gray-900" : "text-gray-500"
          }`}
        >
          VIN
          {mode === "vin" && (
            <div className="absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full bg-primary-green2" />
          )}
        </button>
      </div>

      <div
        className="w-full overflow-hidden"
        style={{ height: TRADE_FORMS[mode].minHeight }}
      >
        <iframe
          key={mode}
          src={TRADE_FORMS[mode].url}
          title={mode === "vehicle" ? "Trade Form By Vehicle" : "Trade Form By VIN"}
          width="100%"
          height={TRADE_FORMS[mode].minHeight}
          scrolling="no"
          className="block w-full border-0"
          style={{
            height: TRADE_FORMS[mode].minHeight,
            overflow: "hidden",
          }}
        />
      </div>
    </div>
  );
};

export default TradeQuoteForm;
