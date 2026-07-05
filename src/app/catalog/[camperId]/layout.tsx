import type { Metadata } from "next";
import { getCamperById } from "@/services/campers";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ camperId: string }>;
}): Promise<Metadata> {
  const { camperId } = await params;

  try {
    const camper = await getCamperById(camperId);
    return {
      title: `${camper.name} | TravelTrucks`,
      description: camper.description,
    };
  } catch {
    return {
      title: "Camper details | TravelTrucks",
      description: "Detailed information about this campervan.",
    };
  }
}

export default function CamperDetailsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
