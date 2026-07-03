// CamperReviews: list of user reviews on the camper details page.
"use client";

import { useCamperReviewsQuery } from "@/hooks/useCamperReviewsQuery";
import Spinner from "@/components/Spinner/Spinner";
import StarRating from "@/components/StarRating/StarRating";
import styles from "./CamperReviews.module.css";

interface CamperReviewsProps {
  camperId: string;
}

const CamperReviews = ({ camperId }: CamperReviewsProps) => {
  const { data: reviews, isLoading, isError } = useCamperReviewsQuery(camperId);

  return (
    <div className={styles.wrapper}>
      {isLoading && (
        <div className={styles.state}>
          <Spinner
            size={32}
            color="#829b91"
            secondaryColor="rgba(130, 155, 145, 0.4)"
          />
        </div>
      )}

      {isError && (
        <p className={styles.state}>
          Something went wrong while loading reviews. Please try again.
        </p>
      )}

      {!isLoading && !isError && reviews?.length === 0 && (
        <p className={styles.state}>No reviews yet.</p>
      )}

      {!isLoading && !isError && reviews && reviews.length > 0 && (
        <ul className={styles.list}>
          {reviews.map((review) => (
            <li key={review.id} className={styles.review}>
              <div className={styles.header}>
                <div className={styles.avatar}>
                  {review.reviewer_name.charAt(0).toUpperCase()}
                </div>
                <div className={styles.reviewerInfo}>
                  <span className={styles.name}>{review.reviewer_name}</span>
                  <StarRating rating={review.reviewer_rating} />
                </div>
              </div>

              <div className={styles.content}>
                <p className={styles.comment}>{review.comment}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CamperReviews;
