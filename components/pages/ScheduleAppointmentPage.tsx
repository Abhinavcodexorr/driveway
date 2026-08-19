"use client";

import { useEffect, useState } from "react";
import { PageShell } from "@/components/layout";
import { getConstants } from "@/constants";
import { useAppConfig } from "@/app/providers";

const TradeInVehicle = () => {
  const appConfig = useAppConfig();
  const { SITE_CONFIG } = getConstants(appConfig);
  const [iframeHeight, setIframeHeight] = useState<number>(550);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const data = event.data;
      if (!data) return;

      let newHeight: number | null = null;
      if (typeof data === "number" && data > 100) {
        newHeight = data;
      } else if (typeof data === "object") {
        if (typeof data.height === "number" && data.height > 0) {
          newHeight = data.height;
        } else if (typeof data.value === "number" && data.value > 0) {
          newHeight = data.value;
        } else if (typeof data.scrollHeight === "number" && data.scrollHeight > 0) {
          newHeight = data.scrollHeight;
        } else if (data.payload && typeof data.payload.height === "number") {
          newHeight = data.payload.height;
        }
      }

      if (newHeight && newHeight > 200) {
        setIframeHeight(Math.max(550, Math.ceil(newHeight) + 10));
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <PageShell showGetInTouch>

      {/* Vehicle Trade-In Content Section */}
      <section className="w-full relative px-4 lg:px-24 mt-4 lg:mt-10 mb-0">
        <div className="mx-auto max-w-[900px] px-2 md:px-6 py-0">
          {/* Iframe Container */}
            <iframe
              src={SITE_CONFIG.urls.scheduleAnAppointmentWithExpert}
              title="scheduleAnAppointmentWithExpert"
              width="100%"
              scrolling="no"
              style={{ minHeight: `${iframeHeight}px`, height: `${iframeHeight}px` }}
              className="border-0 cursor-pointer rounded-lg w-full transition-[height] duration-300 ease-out overflow-hidden"
            />
        </div>
      </section>
      </PageShell>
    </div>
  );
};

export default TradeInVehicle;
