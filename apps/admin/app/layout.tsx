import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Admin Portal | Green Nepal Agricultural Farm",
    template: "%s | Farm Admin",
  },
  description: "Secure CMS and management portal for Green Nepal Agricultural Farm.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-color.svg", media: "(prefers-color-scheme: light)" },
      { url: "/icon-white.svg", media: "(prefers-color-scheme: dark)" },
    ],
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
    <html lang="en">
      <body className="min-h-screen bg-slate-50/50 text-slate-900 antialiased selection:bg-farm-500 selection:text-forest-dark">
        {children}
      </body>
    </html>
  );
}
