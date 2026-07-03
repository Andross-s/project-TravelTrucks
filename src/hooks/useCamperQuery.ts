// useCamperQuery: fetches a single camper by id for the camper details page.
"use client";

import { useQuery } from "@tanstack/react-query";
import { getCamperById } from "@/services/campers";

export function useCamperQuery(id: string) {
  return useQuery({
    queryKey: ["camper", id],
    queryFn: () => getCamperById(id),
    enabled: !!id,
  });
}
