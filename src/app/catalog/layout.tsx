import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catalog | TravelTrucks",
  description:
    "Browse our camper catalog and filter by location, body form, engine and transmission to find your perfect campervan.",
};

export default function CatalogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
