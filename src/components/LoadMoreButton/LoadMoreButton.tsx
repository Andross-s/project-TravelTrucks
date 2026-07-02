// LoadMoreButton: triggers fetching the next page of campers (useInfiniteQuery) on the catalog page.
import Spinner from "@/components/Spinner/Spinner";
import styles from "./LoadMoreButton.module.css";

interface LoadMoreButtonProps {
  onClick: () => void;
  isLoading?: boolean;
}

const LoadMoreButton = ({ onClick, isLoading }: LoadMoreButtonProps) => {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? <Spinner color="#101828" secondaryColor="rgba(16, 24, 40, 0.4)" /> : "Load more"}
    </button>
  );
};

export default LoadMoreButton;
