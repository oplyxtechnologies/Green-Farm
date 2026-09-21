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

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_WEB_URL || "http://localhost:3000"),
  title: {
    default: "Green Nepal Agricultural Farm | Commercial Organic Agriculture in Nepal",
    template: "%s | Green Nepal Agricultural Farm",
  },
  description:
    "Leading commercial agricultural enterprise in Nepal specializing in high-yield organic crops, sustainable polyhouse cultivation, and empowering local farming communities.",
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
    url: "https://greennepalkrishi.com",
    title: "Green Nepal Agricultural Farm | Commercial Organic Agriculture",
    description:
      "Cultivating quality, sustainability, and fresh agricultural produce across Nepal.",
    siteName: "Green Nepal Agricultural Farm",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/icon-color.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased bg-background text-text font-sans selection:bg-krishi-mint selection:text-krishi-mint-text overflow-x-hidden w-full max-w-full">
        <LenisProvider>
          <Navbar />
          <main className="flex-1 w-full max-w-full overflow-x-hidden">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
