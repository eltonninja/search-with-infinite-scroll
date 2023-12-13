import React, { useState, useEffect, useRef, useCallback } from "react";
import * as API from "../lib/api";
import { Payout } from "../types";
import {
  Table,
  SearchInput,
  Container,
  TableHeader,
  TableCell,
  HeadingContainer,
  Rectangle,
  HeadingText,
} from "../components/styled";
import { Spinner } from "../components/Spinner";
import StatusComponent from "../components/Status";
import { formatDate } from "../lib/functions";
import { ErrorComponent } from "../components/Error";
import { useDebounce } from "use-debounce";
interface PayoutRowProps {
  payout: Payout;
  ref?: React.Ref<HTMLTableRowElement>;
}

const EmptyRow = () => (
  <tr>
    <TableCell colSpan={4}>No Data</TableCell>
  </tr>
);

const PayoutRow: React.FC<PayoutRowProps> = React.forwardRef(
  ({ payout }, ref) => {
    return (
      <tr ref={ref}>
        <TableCell>{formatDate(payout.dateAndTime)}</TableCell>
        <TableCell>{payout.username}</TableCell>
        <TableCell>
          <StatusComponent status={payout.status} />
        </TableCell>
        <TableCell>{payout.value}</TableCell>
      </tr>
    );
  }
);

export const PayoutHistory = () => {
  const [payouts, setPayouts] = useState<Payout[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const observer = useRef<IntersectionObserver>();

  const lastPayoutElementRef = useCallback(
    (node: HTMLElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (debouncedSearchTerm) return;
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, debouncedSearchTerm]
  );
  useEffect(() => {
    if (debouncedSearchTerm) {
      setPage(1);
    }

    const fetchPayouts = async () => {
      setLoading(true);
      setError(null);
      try {
        const newData = await API.fetchPayouts({
          page: page,
          searchTerm: debouncedSearchTerm,
        });
        setPayouts((prevPayouts) =>
          debouncedSearchTerm || page === 1
            ? newData
            : [...prevPayouts, ...newData]
        );
        setLoading(false);
      } catch (error: any) {
        console.log(error.message);
        setError("Failed to load data");
        setLoading(false);
      }
    };

    fetchPayouts();
  }, [page, debouncedSearchTerm]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Container>
      <div>
        <h1>Payout</h1>
      </div>
      <HeadingContainer>
        <Rectangle />
        <HeadingText>Payout History</HeadingText>
      </HeadingContainer>
      <SearchInput
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search by username"
      />
      <Table>
        <thead>
          <tr>
            <TableHeader>Date & Time</TableHeader>
            <TableHeader>Username</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Value</TableHeader>
          </tr>
        </thead>
        <tbody>
          {payouts.length ? (
            payouts.map((payout, index) => {
              if (payouts.length === index + 1) {
                return (
                  <PayoutRow
                    ref={lastPayoutElementRef}
                    key={index}
                    payout={payout}
                  />
                );
              } else {
                return <PayoutRow key={index} payout={payout} />;
              }
            })
          ) : (
            <EmptyRow />
          )}
        </tbody>
      </Table>
      {loading && <Spinner />}
      {error && <ErrorComponent message={error} />}
    </Container>
  );
};
