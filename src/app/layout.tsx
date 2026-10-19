import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "./providers";
import CartDrawer from "@/components/cart/CartDrawer";
import { Toaster } from "sonner"; // ✅ ADD THIS

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.moq.com.sa"),
  title: {
    default: "Meaning of Quality | Industrial Fasteners, Adhesives & Sealants (Sultan)",
    template: "%s | Meaning of Quality (Sultan)",
  },
  description:
    "Wholesale supplier of Sultan brand industrial fasteners, brad nails, PVA wood glue, PU foam, and sealants across Saudi Arabia. Central warehouse in Riyadh.",
  keywords: [
    "Meaning of Quality",
    "Sultan Fasteners",
    "مؤسسة معنى الجودة للتجارة",
    "سلطان",
    "Brad Nails Saudi Arabia",
    "غراء خشب سلطان",
    "مسامير براد",
    "PVA Wood Glue Riyadh",
    "PU Foam wholesale",
    "F10 brad nails",
    "ST18 steel nails",
  ],
  authors: [{ name: "The Meaning of Quality Trading Establishment" }],
  creator: "The Meaning of Quality Trading Establishment",
  publisher: "The Meaning of Quality Trading Establishment",
  alternates: {
    canonical: "https://www.moq.com.sa",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_SA"],
    url: "https://www.moq.com.sa",
    siteName: "Meaning of Quality (Sultan)",
    title: "Meaning of Quality | Industrial Fasteners & Adhesives (Sultan)",
    description:
      "Wholesale distributor of premium Sultan brad nails, concrete fasteners, PVA wood glue, and PU foam in Saudi Arabia.",
    images: [
      {
        url: "/images/logo/canvas1.png",
        width: 600,
        height: 200,
        alt: "The Meaning of Quality Trading (Sultan)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meaning of Quality (Sultan)",
    description:
      "Industrial fasteners, brad nails, adhesives, and PU foam wholesale distributor in Saudi Arabia.",
    images: ["/images/logo/canvas1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "WholesaleStore"],
      "@id": "https://www.moq.com.sa/#organization",
      name: "The Meaning of Quality Trading Establishment",
      alternateName: [
        "Meaning of Quality",
        "مؤسسة معنى الجودة للتجارة",
        "Sultan",
        "سلطان",
        "MOQ Trading",
      ],
      url: "https://www.moq.com.sa",
      logo: "https://www.moq.com.sa/images/logo/canvas1.png",
      telephone: "+966590019826",
      foundingDate: "2015",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Al Jazeerah District",
        addressLocality: "Riyadh",
        addressCountry: "SA",
      },
      sameAs: [
        "https://www.linkedin.com/company/moqtradingest/",
        "https://www.instagram.com/moqtrading2016/",
        "https://www.facebook.com/MOQTradingEst",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.moq.com.sa/#website",
      url: "https://www.moq.com.sa",
      name: "Meaning of Quality",
      publisher: {
        "@id": "https://www.moq.com.sa/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />

          {/* ✅ Beautiful alerts live here */}
          <Toaster
            position="top-right"
            richColors
            closeButton
            expand
          />
        </Providers>
      </body>
    </html>
  );
}
