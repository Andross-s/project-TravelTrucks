// Base HTTP client configured for https://campers-api.goit.study/docs.

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!BASE_URL) {
  throw new Error("NEXT_PUBLIC_API_BASE_URL is not set");
}

export type QueryParams = Record<
  string,
  string | number | boolean | undefined | null
>;

function buildQueryString(params?: QueryParams): string {
  if (!params) return "";

  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null || value === "") continue;
    search.append(key, String(value));
  }

  const query = search.toString();
  return query ? `?${query}` : "";
}

export class ApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

export async function apiFetch<T>(
  path: string,
  init?: RequestInit & { params?: QueryParams }
): Promise<T> {
  const { params, ...requestInit } = init ?? {};
  const url = `${BASE_URL}${path}${buildQueryString(params)}`;

  const response = await fetch(url, {
    ...requestInit,
    headers: {
      "Content-Type": "application/json",
      ...requestInit.headers,
    },
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new ApiError(
      response.status,
      body || `Request to ${path} failed with status ${response.status}`
    );
  }

  const text = await response.text();
  return (text ? JSON.parse(text) : undefined) as T;
}
