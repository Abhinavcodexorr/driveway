"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

/** Scroll to top whenever the user navigates to a new page/route. */
export default function ScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Keep in-page hash jumps working (e.g. #section)
    if (window.location.hash) return;

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, searchParams]);

  return null;
}
