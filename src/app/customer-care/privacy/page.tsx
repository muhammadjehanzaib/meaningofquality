import type { Metadata } from 'next';
import PrivacyClient from '@/components/customer-care/PrivacyClient';

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Official Privacy Policy of The Meaning of Quality Trading Establishment explaining our data protection and confidentiality standards for B2B commercial transactions in Saudi Arabia.",
  alternates: {
    canonical: "https://www.moq.com.sa/customer-care/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Meaning of Quality (Sultan)",
    description:
      "Data handling and confidentiality standards for B2B customers and business partners.",
    url: "https://www.moq.com.sa/customer-care/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyClient />;
}
