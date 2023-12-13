export interface Payout {
  dateAndTime: string;
  status: "Pending" | "Completed" | "Paid";
  value: string;
  username: string;
}

export interface Metadata {
  page: number;
  limit: number;
  totalCount: number;
}

export interface PayoutsResponse {
  data: Payout[];
  metadata: Metadata;
}

export interface PaginationProps {
  currentPage: number;
  metadata: { totalCount: number; limit: number };
  goToPage: (pageNumber: number) => void;
}

export type StatusType = Pick<Payout, 'status'>;
