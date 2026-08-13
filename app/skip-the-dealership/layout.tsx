import type { Metadata } from "next";
import { generateMetadata as generateMetadataHelper } from "@/lib/metadataHelper";

export async function generateMetadata(): Promise<Metadata> {
  return generateMetadataHelper({
    title: "Skip The Dealership | Finance Cars Online in Canada - Carma Credit",
    description: "Finance your next car online without dealership pressure. Get pre-approved and explore flexible options with Carma Credit. Fast, simple, and transparent.",
    canonicalPath: "/skip-the-dealership",
  });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
