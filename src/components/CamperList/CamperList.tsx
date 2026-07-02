// CamperList: renders the list of CamperCard items on the catalog page.
import type { Camper } from "@/types/camper";
import CamperCard from "@/components/CamperCard/CamperCard";
import styles from "./CamperList.module.css";

interface CamperListProps {
  campers: Camper[];
}

const CamperList = ({ campers }: CamperListProps) => {
  return (
    <ul className={styles.list}>
      {campers.map((camper) => (
        <CamperCard key={camper.id} camper={camper} />
      ))}
    </ul>
  );
};

export default CamperList;
