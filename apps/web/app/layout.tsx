import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "../components/LenisProvider";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_WEB_URL) {
    const url = process.env.NEXT_PUBLIC_WEB_URL;
    return url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
  }
  if (process.env.VERCEL_URL) {
    const url = process.env.VERCEL_URL;
    return url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
  }
  return process.env.NODE_ENV === "production"
    ? "https://greennepalkrishi.com"
    : "http://localhost:3000";
};

const siteUrl = getBaseUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "./",
  },
  title: {
    default: "Green Nepal Agricultural Farm | Commercial Organic Agriculture",
    template: "%s | Green Nepal Agricultural Farm",
  },
  description:
    "Leading organic agriculture in Nepal specializing in high-yield crops, polyhouse cultivation, and empowering local farming communities.",
  keywords: [
    "Green Nepal Agricultural Farm",
    "Nepal Agriculture",
    "Commercial Farming Nepal",
    "Organic Produce Kathmandu",
    "Surkhet Agriculture",
    "Birendranagar Farm",
    "Fresh Vegetables Nepal",
    "Sustainable Farm Nepal",
  ],
  authors: [{ name: "Green Nepal Agricultural Farm" }],
  creator: "Green Nepal Agricultural Farm",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Green Nepal Agricultural Farm",
    description:
      "Cultivating quality, sustainability, and fresh agricultural produce across Nepal.",
    siteName: "Green Nepal Agricultural Farm",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Green Nepal Agricultural Farm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Nepal Agricultural Farm | Commercial Organic Agriculture",
    description:
      "Leading organic agriculture in Nepal specializing in high-yield crops, polyhouse cultivation, and empowering local farming communities.",
    images: ["/opengraph-image.jpg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Green Nepal Agricultural Farm",
  alternateName: "Green Nepal Krishi",
  url: siteUrl,
  logo: `${siteUrl}/icon-color.svg`,
  description:
    "Leading organic agricultural enterprise in Nepal specializing in high-yield crops, polyhouse cultivation, and sustainable farming.",
  email: "wholesale@greennepalagricultural.com",
  telephone: "+977 1-4720198",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Birendranagar & Kathmandu Valley",
    addressLocality: "Surkhet",
    addressRegion: "Karnali Province",
    addressCountry: "NP",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+977 1-4720198",
      contactType: "sales",
      areaServed: "NP",
      availableLanguage: ["Nepali", "English"],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable} overflow-x-clip`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-background text-text font-sans selection:bg-krishi-mint selection:text-krishi-mint-text w-full max-w-full">
        <LenisProvider>
          <Navbar />
          <main className="flex-1 w-full max-w-full overflow-x-hidden">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
