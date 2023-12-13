const API_URL =
  "https://theseus-staging.lithium.ventures/api/v1/analytics/tech-test";

export const fetchPayouts = async ({
  page = 1,
  limit = 10,
  searchTerm = "",
}: {
  page?: number;
  limit?: number;
  searchTerm?: string;
}) => {
  const response = await fetch(
    `${API_URL}/${
      searchTerm ? "search" : "payouts"
    }?page=${page}&limit=${limit}&query=${searchTerm}`
  );
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  const data = await response.json();
  return searchTerm ? data : data.data;
};
