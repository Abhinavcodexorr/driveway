"use client";

import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type PageShellProps = {
  children: ReactNode;
  showGetInTouch?: boolean;
  mainClassName?: string;
};

export default function PageShell({
  children,
  showGetInTouch,
  mainClassName,
}: PageShellProps) {
  return (
    <>
      <Header />
      {mainClassName ? <main className={mainClassName}>{children}</main> : children}
      <Footer />
    </>
  );
}

