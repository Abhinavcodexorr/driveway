"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { easeOut } from "./motion";

/** Soft page enter animation on route change */
export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();

  // No page transition on sell/trade or finance pages
  if (
    reduce ||
    pathname?.startsWith("/trade-in-my-car") ||
    pathname?.startsWith("/financing") ||
    pathname?.startsWith("/finance")
  ) {
    return <>{children}</>;
  }

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: easeOut }}
      className="flex min-h-full flex-1 flex-col"
    >
      {children}
    </motion.div>
  );
}
