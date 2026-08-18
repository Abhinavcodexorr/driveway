/* =========================
   Financing Page
   Embeds the Cardora financing application form
   via an iframe. Listens for postMessage events
   from the iframe to dynamically resize the iframe
   height, preventing scroll bars inside the embed.
========================= */

"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

// Layout
import { PageShell } from "@/components/layout";

// Config
import { getConstants } from "@/constants";
import { useAppConfig } from "@/app/providers";

/*  Constants */
const MIN_HEIGHT      = 540;
const FALLBACK_HEIGHT = 720;

/*  Page Component */
const Finance = () => {
  const appConfig = useAppConfig();
  const { SITE_CONFIG } = getConstants(appConfig);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState<number>(FALLBACK_HEIGHT);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  // Listen for height updates from the embedded financing form
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const data = event.data;
      if (
        data &&
        typeof data === "object" &&
        data.type === "css" &&
        (data.element_id === "finance_form" ||
          data.element_id === "financing_form") &&
        typeof data.value === "number"
      ) {
        setHeight(Math.max(MIN_HEIGHT, Math.ceil(data.value) + 8));
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="bg-background">
      <PageShell>

      <section className="py-4 md:py-6">
        <div className="mx-auto max-w-[1100px] px-4 md:px-6">
          <div className="overflow-hidden">
            <iframe
              ref={iframeRef}
              id="finance_form"
              src={`${SITE_CONFIG.urls.financeRenderApiUrl}?`}
              name="iframe_a"
              title="Carma Credit financing application"
              scrolling="no"
              className="credit-application w-full block transition-[height] duration-300 ease-out border-0"
              style={{
                minHeight: MIN_HEIGHT,
                height: `${height}px`,
              }}
            />
          </div>
        </div>
      </section>
      </PageShell>
    </div>
  );
};

export default Finance;
