// amenityIcons: maps each Amenity value to a react-icons icon for vehicle-detail badges.
import {
  TbAirConditioning,
  TbBath,
  TbToolsKitchen2,
  TbDeviceTv,
  TbRadio,
  TbFridge,
  TbMicrowave,
  TbGasStation,
  TbDroplet,
} from "react-icons/tb";
import type { IconType } from "react-icons";
import type { Amenity } from "@/types/camper";

const AMENITY_ICONS: Record<Amenity, IconType> = {
  ac: TbAirConditioning,
  bathroom: TbBath,
  kitchen: TbToolsKitchen2,
  tv: TbDeviceTv,
  radio: TbRadio,
  refrigerator: TbFridge,
  microwave: TbMicrowave,
  gas: TbGasStation,
  water: TbDroplet,
};

export function getAmenityIcon(amenity: Amenity): IconType {
  return AMENITY_ICONS[amenity];
}
