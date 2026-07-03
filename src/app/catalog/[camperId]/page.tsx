// Camper details page ("/catalog/[camperId]"): gallery, reviews and booking form.
"use client";

import { useParams } from "next/navigation";
import { useCamperQuery } from "@/hooks/useCamperQuery";
import CamperGallery from "@/components/CamperGallery/CamperGallery";
import CamperReviews from "@/components/CamperReviews/CamperReviews";
import BookingForm from "@/components/BookingForm/BookingForm";
import VehicleDetails from "@/components/VehicleDetails/VehicleDetails";
import StarRating from "@/components/StarRating/StarRating";
import Spinner from "@/components/Spinner/Spinner";
import styles from "./page.module.css";

export default function CamperDetailsPage() {
  const { camperId } = useParams<{ camperId: string }>();
  const { data: camper, isLoading, isError } = useCamperQuery(camperId);

  if (isLoading) {
    return (
      <main className={`container ${styles.page}`}>
        <div className={styles.state}>
          <Spinner
            size={40}
            color="#829b91"
            secondaryColor="rgba(130, 155, 145, 0.4)"
          />
        </div>
      </main>
    );
  }

  if (isError || !camper) {
    return (
      <main className={`container ${styles.page}`}>
        <p className={styles.state}>
          Something went wrong while loading this camper. Please try again.
        </p>
      </main>
    );
  }

  return (
    <main className={`container ${styles.page}`}>
      <div className={styles.grid}>
        <div className={styles.topRow}>
          <CamperGallery gallery={camper.gallery} camperName={camper.name} />

          <div className={styles.infoCard}>
            <div className={styles.infoCardContent}>
              <h1 className={styles.name}>{camper.name}</h1>

              <div className={styles.metaRow}>
                <span className={styles.meta}>
                  <StarRating rating={camper.rating} />
                  {camper.rating} ({camper.totalReviews} Reviews)
                </span>
                <span className={styles.meta}>
                  <img
                    className={styles.metaIcon}
                    src="/campersImage/map.svg"
                    alt=""
                  />
                  {camper.location}
                </span>
              </div>

              <p className={styles.price}>&euro;{camper.price}</p>
              <p className={styles.description}>{camper.description}</p>
            </div>
            <VehicleDetails camper={camper} />
          </div>
        </div>

        <div className={styles.bottomRow}>
          <h2 className={styles.title}>Reviews</h2>

          <div className={styles.reviewsContainer}>
            <CamperReviews camperId={camper.id} />
            <BookingForm camperId={camper.id} />
          </div>
        </div>
      </div>
    </main>
  );
}
