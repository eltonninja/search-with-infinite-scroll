import { PaginationProps } from "../types";
import { PageButton, PageNumber, PaginationContainer } from "./styled";

export const PaginationComponent = ({
  currentPage,
  metadata,
  goToPage,
}: PaginationProps) => {
  const totalPages = Math.ceil(metadata.totalCount / metadata.limit);

  return (
    <PaginationContainer>
      <PageButton
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </PageButton>
      <PageNumber>
        Page {currentPage} of {totalPages}
      </PageNumber>
      <PageButton
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        Next
      </PageButton>
    </PaginationContainer>
  );
};
