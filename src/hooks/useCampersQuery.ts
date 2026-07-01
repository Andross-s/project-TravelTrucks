// useCampersQuery: useInfiniteQuery hook for paginated camper fetching on the catalog page.
"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { getCampers } from "@/services/campers";
import type { CampersFilters, CampersListResponse } from "@/types/camper";

const PER_PAGE = 4;

export function useCampersQuery(filters: CampersFilters = {}) {
  const query = useInfiniteQuery<CampersListResponse>({
    queryKey: ["campers", filters],
    queryFn: ({ pageParam }) =>
      getCampers(filters, pageParam as number, PER_PAGE),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
  });

  const campers = query.data?.pages.flatMap((page) => page.campers) ?? [];
  const total = query.data?.pages.at(-1)?.total ?? 0;

  return {
    ...query,
    campers,
    total,
  };
}
