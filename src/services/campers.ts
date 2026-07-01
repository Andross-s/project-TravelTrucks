// API functions for fetching the camper list and a single camper by id.
import { apiFetch } from "@/services/api";
import type {
  BookingRequestPayload,
  BookingRequestResponse,
  CamperDetails,
  CampersFilters,
  CampersListResponse,
  FiltersResponse,
  Review,
} from "@/types/camper";

export function getCampers(
  filters: CampersFilters = {},
  page = 1,
  perPage = 4
): Promise<CampersListResponse> {
  return apiFetch<CampersListResponse>("/campers", {
    params: { ...filters, page, perPage },
  });
}

export function getCamperById(id: string): Promise<CamperDetails> {
  return apiFetch<CamperDetails>(`/campers/${id}`);
}

export function getCamperReviews(id: string): Promise<Review[]> {
  return apiFetch<Review[]>(`/campers/${id}/reviews`);
}

export function getCampersFilters(): Promise<FiltersResponse> {
  return apiFetch<FiltersResponse>("/campers/filters");
}

export function createBookingRequest(
  id: string,
  payload: BookingRequestPayload
): Promise<BookingRequestResponse> {
  return apiFetch<BookingRequestResponse>(`/campers/${id}/booking-requests`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
