import type { Metadata } from 'next';
import ContactClient from '@/components/customer-care/ContactClient';

export const metadata: Metadata = {
  title: "Customer Care & Contact Us",
  description:
    "Contact The Meaning of Quality Trading Establishment in Riyadh, Saudi Arabia. Inquire about wholesale fasteners, brad nails, PVA glues, corporate orders, and delivery schedules.",
  alternates: {
    canonical: "https://www.moq.com.sa/customer-care",
  },
  openGraph: {
    title: "Customer Care & Contact Us | Meaning of Quality (Sultan)",
    description:
      "Get in touch with The Meaning of Quality Trading Establishment in Riyadh, Saudi Arabia. Phone, WhatsApp, and office location.",
    url: "https://www.moq.com.sa/customer-care",
  },
};

export default function CustomerCarePage() {
  return <ContactClient />;
}
