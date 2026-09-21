import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Admin Portal | Green Nepal Krishi Farm",
    template: "%s | Farm Admin",
  },
  description: "Secure CMS and management portal for Green Nepal Krishi Farm.",
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
