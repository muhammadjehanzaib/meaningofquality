import type { Metadata } from 'next';
import ReturnsClient from '@/components/customer-care/ReturnsClient';

export const metadata: Metadata = {
  title: "Return & Exchange Policy",
  description:
    "Official B2B return, exchange, inspection, and refund policy for wholesale purchases with The Meaning of Quality Trading Establishment in Saudi Arabia.",
  alternates: {
    canonical: "https://www.moq.com.sa/customer-care/returns",
  },
  openGraph: {
    title: "Return & Exchange Policy | Meaning of Quality (Sultan)",
    description:
      "B2B return and exchange guidelines for corporate clients across Saudi Arabia.",
    url: "https://www.moq.com.sa/customer-care/returns",
  },
};

export default function ReturnsPage() {
  return <ReturnsClient />;
}
