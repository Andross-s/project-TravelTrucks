// Root layout: wraps all pages with <html>/<body>, global providers (TanStack Query)
// and persistent UI (Header/Footer) — to be implemented.
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TravelTrucks",
  description: "Camper rental catalog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
