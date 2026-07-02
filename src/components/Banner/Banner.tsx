// Banner: home page hero section with the primary call-to-action.
"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import Spinner from "@/components/Spinner/Spinner";
import styles from "./Banner.module.css";

const Banner = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleViewNow = () => {
    startTransition(() => {
      router.push("/catalog");
    });
  };

  return (
    <section className={`container ${styles.hero}`}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h1 className={styles.title}>Campers of your dreams</h1>
          <p className={styles.text}>
            You can find everything you want in our catalog
          </p>
        </div>
        <button
          type="button"
          className={styles.button}
          onClick={handleViewNow}
          disabled={isPending}
        >
          {isPending ? <Spinner /> : "View Now"}
        </button>
      </div>
    </section>
  );
};

export default Banner;
