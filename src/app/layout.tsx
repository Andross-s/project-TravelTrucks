// Root layout: wraps all pages with <html>/<body>, global providers (TanStack Query)
// and persistent UI (Header).
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header/Header";
import QueryProvider from "@/providers/QueryProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TravelTrucks",
  description: "Camper rental catalog",
  icons: {
    icon: "/campersImage/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <Toaster position="top-right" />
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
