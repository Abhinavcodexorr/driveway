"use client";

import { useEffect, useState } from "react";
import { PageShell } from "@/components/layout";
import { useAppConfig } from "@/app/providers";
import { getConstants } from "@/constants";
import { Lock, Mail, Smartphone } from "lucide-react";

export default function ThankYouTradeIn() {
    const appConfig = useAppConfig();
    const { SITE_CONFIG } = getConstants(appConfig);
    const [iframeHeight, setIframeHeight] = useState<number>(550);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, []);

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            // Only accept messages from the Cardora iframe
            if (event.origin !== "https://cardora.zopsoftware.com") {
                return;
            }

            const data = event.data;

            if (
                data &&
                typeof data === "object" &&
                data.type === "css" &&
                data.element_id === "document_upload_form" &&
                typeof data.value === "number"
            ) {
                setIframeHeight(Math.ceil(data.value) + 24);
            }
        };

        window.addEventListener("message", handleMessage);

        return () => {
            window.removeEventListener("message", handleMessage);
        };
    }, []);

    return (
        <PageShell showGetInTouch>

            <div className="lg:mt-20 pt-10 lg:pt-20 lg:pb-10 px-4 pb-6 lg:px-44 w-full flex flex-col justify-center items-center bg-gradient-to-b from-prequalify-blue to-white">
                <h1 className="lg:text-[40px] text-[26px] text-center font-semibold leading-none text-brand">
                    Your Vehicle Value Is Being
                    <br />
                    Calculated
                </h1>

                <p className="text-center font-medium max-w-xl text-[17px] mt-4">
                    Our smart pricing system is analyzing your vehicle details and
                    matching them with real-time market data. A Carma Credit specialist will
                    contact you shortly to review your offer and next steps.
                </p>
            </div>

            <div className="w-full lg:px-80 px-4 pb-2 mb-2">
                <iframe
                    id="document_upload_form"
                    src={SITE_CONFIG?.urls.thankYouTradeIn}
                    className="w-full border-0 block transition-[height] duration-300 ease-out"
                    title="Express Checkout - Finance"
                    allow="payment"
                    scrolling="no"
                    style={{
                        height: `${iframeHeight}px`,
                    }}
                />
            </div>

            <div className="mx-auto w-fit mb-8">
                <ul className="flex flex-col items-center gap-[6px] text-[13px] font-light leading-[1.4] text-neutral-mediumGray3">
                    <li className="inline-flex items-center gap-[4px]">
                        <Lock size={15} strokeWidth={2} />
                        <span>Safe • Encrypted • Takes under a minute</span>
                    </li>

                    <li className="inline-flex items-center gap-[4px]">
                        <Mail size={14} strokeWidth={2} />
                        <span>A confirmation email has been sent to your inbox.</span>
                    </li>

                    <li className="inline-flex items-center gap-[4px]">
                        <Smartphone size={14} strokeWidth={2} />
                        <span>One of our Carma Credit specialists will reach out shortly with the next steps.</span>
                    </li>
                </ul>
            </div>
        </PageShell>
    );
}