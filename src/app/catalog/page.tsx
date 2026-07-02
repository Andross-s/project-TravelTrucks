// Catalog page ("/catalog"): camper list with filters and infinite-scroll loading.
"use client";

import { useState } from "react";
import Filters from "@/components/Filters/Filters";
import CamperList from "@/components/CamperList/CamperList";
import LoadMoreButton from "@/components/LoadMoreButton/LoadMoreButton";
import Spinner from "@/components/Spinner/Spinner";
import { useCampersQuery } from "@/hooks/useCampersQuery";
import type { CampersFilters } from "@/types/camper";
import styles from "./page.module.css";

export default function CatalogPage() {
  const [filters, setFilters] = useState<CampersFilters>({});
  const {
    campers,
    isLoading,
    isFetching,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useCampersQuery(filters);

  return (
    <main className={`container ${styles.page}`}>
      <aside className={styles.sidebar}>
        <Filters
          onApply={setFilters}
          isLoading={isFetching && !isFetchingNextPage}
        />
      </aside>

      <div className={styles.content}>
        {isLoading && (
          <div className={styles.state}>
            <Spinner size={40} color="#829b91" secondaryColor="rgba(130, 155, 145, 0.4)" />
          </div>
        )}

        {isError && (
          <p className={styles.state}>
            Something went wrong while loading campers. Please try again.
          </p>
        )}

        {!isLoading && !isError && campers.length === 0 && (
          <p className={styles.state}>No campers found for these filters.</p>
        )}

        {!isLoading && !isError && campers.length > 0 && (
          <>
            <CamperList campers={campers} />
            {hasNextPage && (
              <LoadMoreButton
                onClick={() => fetchNextPage()}
                isLoading={isFetchingNextPage}
              />
            )}
          </>
        )}
      </div>
    </main>
  );
}
