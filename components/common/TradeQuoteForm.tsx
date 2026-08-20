"use client";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "https://cardora.zopsoftware.com") {
        return;
      }
      const data = event.data;
      if (
        !data ||
        typeof data !== "object" ||
        data.type !== "css" ||
        typeof data.value !== "number" ||
        typeof data.element_id !== "string"
      ) {
        return;
      }
      const iframe = document.getElementById(data.element_id) as HTMLIFrameElement | null;
      if (iframe) {
        iframe.style.height = `${Math.ceil(data.value)}px`;
      }
    };
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div
      className={`w-full max-w-full rounded-2xl border border-border-lightGray/80 bg-white p-4 pb-8 shadow-xl sm:p-5 md:max-w-[440px] md:p-8 md:pb-10 ${className}`}
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

      <div className="w-full overflow-hidden">
        <iframe
          key={mode}
          id={mode === "vehicle" ? "trade_form_with_autodropdown" : "trade_form_with_vin"}
          src={TRADE_FORMS[mode].url}
          title={mode === "vehicle" ? "Trade Form By Vehicle" : "Trade Form By VIN"}
          width="100%"
          scrolling="no"
          className="w-full border-0 block transition-[height] duration-300 ease-out"
          style={{
            height: mode === "vehicle" ? "447px" : "327px",
            minHeight: mode === "vehicle" ? "447px" : "327px",
          }}
        />
      </div>
    </div>
  );
};

export default TradeQuoteForm;
