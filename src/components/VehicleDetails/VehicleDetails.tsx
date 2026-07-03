// VehicleDetails: badges (engine/transmission/form/amenities) and spec table for a camper.
import type { CamperDetails } from "@/types/camper";
import { formatLabel } from "@/utils/formatLabel";
import { getAmenityIcon } from "@/utils/amenityIcons";
import styles from "./VehicleDetails.module.css";

interface VehicleDetailsProps {
  camper: CamperDetails;
}

const SPEC_ROWS: Array<{ label: string; getValue: (camper: CamperDetails) => string }> = [
  { label: "Form", getValue: (camper) => formatLabel(camper.form) },
  { label: "Length", getValue: (camper) => camper.length },
  { label: "Width", getValue: (camper) => camper.width },
  { label: "Height", getValue: (camper) => camper.height },
  { label: "Tank", getValue: (camper) => camper.tank },
  { label: "Consumption", getValue: (camper) => camper.consumption },
];

const VehicleDetails = ({ camper }: VehicleDetailsProps) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Vehicle details</h2>

      <div className={styles.badges}>
        <span className={styles.badge}>
          <img className={styles.badgeIcon} src="/campersImage/automatic.svg" alt="" />
          {formatLabel(camper.transmission)}
        </span>
        <span className={styles.badge}>
          <img className={styles.badgeIcon} src="/campersImage/petrol.svg" alt="" />
          {formatLabel(camper.engine)}
        </span>
        {camper.amenities.map((amenity) => {
          const Icon = getAmenityIcon(amenity);
          return (
            <span key={amenity} className={styles.badge}>
              <Icon className={styles.badgeIcon} />
              {formatLabel(amenity)}
            </span>
          );
        })}
        <span className={styles.badge}>
          <img className={styles.badgeIcon} src="/campersImage/alcove.svg" alt="" />
          {formatLabel(camper.form)}
        </span>
      </div>

      <dl className={styles.specList}>
        {SPEC_ROWS.map(({ label, getValue }) => (
          <div key={label} className={styles.specRow}>
            <dt className={styles.specLabel}>{label}</dt>
            <dd className={styles.specValue}>{getValue(camper)}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default VehicleDetails;
