"use client";

import { PageShell } from "@/components/layout";
import { getConstants } from "@/constants";
import { useAppConfig } from "@/app/providers";
import { useParams } from "next/navigation";

const TradeInVehicle = () => {
  const appConfig = useAppConfig();
  const { SITE_CONFIG } = getConstants(appConfig);
  const params = useParams();
  const vehicleId = params.vehicle;

  console.log("vehicle id is ", SITE_CONFIG.urls.tradeInMyCarVehicle);

  return (
    <div className="min-h-screen overflow-x-clip bg-background">
      <PageShell showGetInTouch>

      {/* Vehicle Trade-In Content Section */}
      <section className="w-full relative px-4 lg:px-24 mt-6 lg:mt-10">
        <div className="mx-auto max-w-[900px] px-2 md:px-9 md:py-5 md:pb-14 pb-5 ">
          {/* Iframe Container */}
            <iframe
              src={SITE_CONFIG.urls.tradeInMyCarVehicle}
              title="Sell my Car form"
              width="100%"
              height="600"
              className="border-0 cursor-pointer rounded-lg"
            />
        </div>
      </section>
      </PageShell>
    </div>
  );
};

export default TradeInVehicle;
