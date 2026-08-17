"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Header, Footer } from "@/components/layout";

export const RESOURCE_LINKS = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Rebuild Your Credit", href: "/rebuild-your-credit" },
  { label: "Understanding Auto Financing", href: "/understanding-auto-financing" },
  { label: "FAQ", href: "/faq" },
  { label: "What do I need", href: "/what-do-i-need" },
] as const;

type ResourcePageProps = {
  title: string;
  eyebrow?: string;
  intro?: string;
  children: React.ReactNode;
};

const ResourcePage = ({ title, eyebrow, intro, children }: ResourcePageProps) => {
  const pathname = usePathname();

  return (
    <>
      <Header />
      <main className="dw-font min-h-screen bg-white">
        <section className="bg-[#007aff] px-4 py-12 text-white md:px-8 md:py-16">
          <div className="mx-auto max-w-[960px]">
            {eyebrow && (
              <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-white/80">
                {eyebrow}
              </p>
            )}
            <h1 className="text-[32px] font-bold leading-tight md:text-[44px]">{title}</h1>
            {intro && (
              <p className="mt-4 max-w-[640px] text-[16px] leading-relaxed text-white/95 md:text-[18px]">
                {intro}
              </p>
            )}
          </div>
        </section>

        <nav className="border-b border-[#E6E6E6] bg-[#F4F6F7] px-4 md:px-8">
          <div className="mx-auto flex max-w-[960px] gap-2 overflow-x-auto py-3">
            {RESOURCE_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`shrink-0 rounded-full px-4 py-2 text-[14px] font-semibold transition-colors ${
                    active
                      ? "bg-[#007aff] text-white"
                      : "bg-white text-[#353535] hover:text-[#007aff]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>

        <section className="px-4 py-12 md:px-8 md:py-16">
          <div className="mx-auto max-w-[960px] space-y-8 text-[#353535]">{children}</div>
          <div className="mx-auto mt-12 max-w-[960px]">
            <Link
              href="/financing"
              className="inline-flex h-12 items-center justify-center rounded-full border-2 border-[#007aff] bg-[#007aff] px-8 text-[16px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              Get Pre-Approved
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ResourcePage;
