"use client";

import type { ReactNode } from "react";
import GetInTouch from "@/components/common/GetInTouch";
import Header from "./Header";
import Footer from "./Footer";

type PageShellProps = {
  children: ReactNode;
  showGetInTouch?: boolean;
  mainClassName?: string;
};

export default function PageShell({
  children,
  showGetInTouch = false,
  mainClassName,
}: PageShellProps) {
  return (
    <>
      <Header />
      {mainClassName ? <main className={mainClassName}>{children}</main> : children}
      {showGetInTouch && <GetInTouch />}
      <Footer />
    </>
  );
}
