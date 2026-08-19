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
                    src={SITE_CONFIG?.urls.thankYouTradeIn}
                    scrolling="no"
                    style={{ minHeight: `${iframeHeight}px`, height: `${iframeHeight}px` }}
                    className="w-full border-0 transition-[height] duration-300 ease-out overflow-hidden"
                    title="Express Checkout - Finance"
                    allow="payment"
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