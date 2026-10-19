import type { Metadata } from 'next';
import AboutClient from '@/components/customer-care/AboutClient';

export const metadata: Metadata = {
  title: "About Us & Company Profile",
  description:
    "Learn about The Meaning of Quality Trading Establishment (Sultan), founded in 2015 in Riyadh, Saudi Arabia. Leading B2B wholesale importer of industrial fasteners, adhesives, and sealants.",
  alternates: {
    canonical: "https://www.moq.com.sa/customer-care/about",
  },
  openGraph: {
    title: "About Us & Company Profile | Meaning of Quality (Sultan)",
    description:
      "Wholesale trading and importing establishment founded in 2015 in Riyadh, Saudi Arabia, operating under the brand name 'Sultan'.",
    url: "https://www.moq.com.sa/customer-care/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
