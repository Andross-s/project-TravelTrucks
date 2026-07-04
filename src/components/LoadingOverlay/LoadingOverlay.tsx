// LoadingOverlay: shown over the previous camper list while a filter refetch is in flight.
import Spinner from "@/components/Spinner/Spinner";
import styles from "./LoadingOverlay.module.css";

const LoadingOverlay = () => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.card}>
        <Spinner
          size={72}
          color="#829b91"
          secondaryColor="rgba(130, 155, 145, 0.4)"
        />
        <p className={styles.title}>Loading tracks...</p>
        <p className={styles.description}>
          Please wait while we fetch the best travel trucks for you.
        </p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
