// useCamperReviewsQuery: fetches reviews for a single camper.
"use client";

import { useQuery } from "@tanstack/react-query";
import { getCamperReviews } from "@/services/campers";

export function useCamperReviewsQuery(id: string) {
  return useQuery({
    queryKey: ["camperReviews", id],
    queryFn: () => getCamperReviews(id),
    enabled: !!id,
  });
}
