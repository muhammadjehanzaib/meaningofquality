import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Meaning of Quality | Industrial Fasteners, Adhesives & Sealants (Sultan)",
  description:
    "Leading B2B wholesale distributor of Sultan brand 18-gauge straight brad nails, concrete steel nails, PVA wood glue, and PU foam in Saudi Arabia. Riyadh warehouse dispatch.",
  alternates: {
    canonical: "https://www.moq.com.sa",
  },
  openGraph: {
    title: "Meaning of Quality | Industrial Fasteners & Adhesives (Sultan)",
    description:
      "Wholesale distributor of premium Sultan brad nails, concrete fasteners, PVA wood glue, and PU foam in Saudi Arabia.",
    url: "https://www.moq.com.sa",
    siteName: "Meaning of Quality (Sultan)",
  },
};

export default function Home() {
  return <HomeClient />;
}
