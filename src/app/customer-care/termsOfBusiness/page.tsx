import type { Metadata } from 'next';
import TermsOfBusinessClient from '@/components/customer-care/TermsOfBusinessClient';

export const metadata: Metadata = {
  title: "Terms of Business",
  description:
    "Official Terms of Business for B2B commercial purchases, wholesale orders, payments, warranties, and delivery terms with Meaning of Quality Trading Est. in Saudi Arabia.",
  alternates: {
    canonical: "https://www.moq.com.sa/customer-care/termsOfBusiness",
  },
  openGraph: {
    title: "Terms of Business | Meaning of Quality (Sultan)",
    description:
      "Commercial terms of business governing B2B purchases, quotes, payments, and product deliveries.",
    url: "https://www.moq.com.sa/customer-care/termsOfBusiness",
  },
};

export default function TermsOfBusinessPage() {
  return <TermsOfBusinessClient />;
}
