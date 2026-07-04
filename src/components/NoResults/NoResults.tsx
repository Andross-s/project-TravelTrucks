// NoResults: empty state shown when a filter search returns zero campers.
import styles from "./NoResults.module.css";

interface NoResultsProps {
  onClear: () => void;
}

const NoResults = ({ onClear }: NoResultsProps) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.illustration}
        src="/campersImage/no-results.png"
        alt=""
      />
      <h2 className={styles.title}>No campers found</h2>
      <p className={styles.description}>
        We couldn`t find any campers that match your filters.
        <br />
        Try adjusting your search or clearing some filters.
      </p>
      <div className={styles.actions}>
        <button type="button" className={styles.clearButton} onClick={onClear}>
          <img
            className={styles.clearIcon}
            src="/campersImage/close.svg"
            alt=""
          />
          Clear filters
        </button>
        <button
          type="button"
          className={styles.viewAllButton}
          onClick={onClear}
        >
          View all campers
        </button>
      </div>
    </div>
  );
};

export default NoResults;
