// TypeScript types for Camper, Review and related catalog/filter data.

export type Amenity =
  | "ac"
  | "bathroom"
  | "kitchen"
  | "tv"
  | "radio"
  | "refrigerator"
  | "microwave"
  | "gas"
  | "water";

export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
  amenities: Amenity[];
  coverImage: string;
  totalReviews: number;
  createdAt: string;
  updatedAt: string;
}

export interface GalleryImage {
  id: string;
  camperId: string;
  thumb: string;
  original: string;
  order: number;
}

export type CamperDetails = Omit<Camper, "coverImage"> & {
  gallery: GalleryImage[];
};

export interface Review {
  id: string;
  camperId: string;
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
  createdAt: string;
}

export interface CampersListResponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: Camper[];
}

export interface FiltersResponse {
  forms: string[];
  transmissions: string[];
  engines: string[];
}

// Query params accepted by GET /campers. Amenity/equipment filtering is not
// supported server-side (confirmed against the live API), so it is
// deliberately omitted here — filter by `Camper.amenities` client-side instead.
export interface CampersFilters {
  location?: string;
  form?: string;
  transmission?: string;
  engine?: string;
}

export interface BookingRequestPayload {
  name: string;
  email: string;
}

export interface BookingRequestResponse {
  message: string;
}
