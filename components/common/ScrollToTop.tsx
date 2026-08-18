"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function forceScrollTop() {
  const html = document.documentElement;
  const previous = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";

  window.scrollTo(0, 0);
  html.scrollTop = 0;
  document.body.scrollTop = 0;

  requestAnimationFrame(() => {
    window.scrollTo(0, 0);
    html.scrollTop = 0;
    document.body.scrollTop = 0;
    html.style.scrollBehavior = previous;
  });
}

/** Scroll to top whenever the user navigates to a new page/route. */
export default function ScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    if (window.location.hash) return;

    forceScrollTop();
    const retry = window.setTimeout(forceScrollTop, 80);
    return () => window.clearTimeout(retry);
  }, [pathname, searchParams]);

  return null;
}
