// StarRating: renders a numeric rating as a 5-star scale using the existing rating SVGs.
import styles from "./StarRating.module.css";

interface StarRatingProps {
  rating: number;
  className?: string;
}

const StarRating = ({ rating, className }: StarRatingProps) => {
  const filledCount = Math.round(rating);

  return (
    <span className={`${styles.stars} ${className ?? ""}`}>
      {Array.from({ length: 5 }, (_, index) => (
        <img
          key={index}
          className={styles.star}
          src={
            index < filledCount
              ? "/campersImage/Rating.svg"
              : "/campersImage/Rating-empty.svg"
          }
          alt=""
        />
      ))}
    </span>
  );
};

export default StarRating;
