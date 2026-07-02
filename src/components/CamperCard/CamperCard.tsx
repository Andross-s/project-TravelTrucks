// CamperCard: single camper preview card (image, name, price, features) for the catalog list.
import Image from "next/image";
import Link from "next/link";
import type { Camper } from "@/types/camper";
import { formatLabel } from "@/utils/formatLabel";
import styles from "./CamperCard.module.css";

interface CamperCardProps {
  camper: Camper;
}

const CamperCard = ({ camper }: CamperCardProps) => {
  return (
    <li className={styles.card}>
      <Image
        className={styles.image}
        src={camper.coverImage}
        alt={camper.name}
        width={290}
        height={310}
      />
      <div className={styles.content}>
        <div className={styles.headerRow}>
          <h3 className={styles.name}>{camper.name}</h3>
          <span className={styles.price}>&euro;{camper.price}</span>
        </div>

        <div className={styles.metaRow}>
          <span className={styles.meta}>
            <img
              className={styles.metaIcon}
              src="/campersImage/Rating.svg"
              alt=""
            />
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

        <p className={styles.description}>{camper.description}</p>

        <div className={styles.badges}>
          <span className={styles.badge}>
            <img
              className={styles.badgeIcon}
              src="/campersImage/petrol.svg"
              alt=""
            />
            {formatLabel(camper.engine)}
          </span>
          <span className={styles.badge}>
            <img
              className={styles.badgeIcon}
              src="/campersImage/automatic.svg"
              alt=""
            />
            {formatLabel(camper.transmission)}
          </span>
          <span className={styles.badge}>
            <img
              className={styles.badgeIcon}
              src="/campersImage/alcove.svg"
              alt=""
            />
            {formatLabel(camper.form)}
          </span>
        </div>

        <Link
          href={`/catalog/${camper.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.showMoreButton}
        >
          Show more
        </Link>
      </div>
    </li>
  );
};

export default CamperCard;
