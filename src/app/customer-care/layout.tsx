import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: "Customer Care & Corporate Policies | Meaning of Quality",
    template: "%s | Meaning of Quality (Sultan)",
  },
  description:
    "Customer care, terms of business, privacy, returns, and corporate policies of The Meaning of Quality Trading Establishment in Saudi Arabia.",
  alternates: {
    canonical: "https://www.moq.com.sa/customer-care",
  },
};

export default function CustomerCareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
