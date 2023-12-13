import styled from "styled-components";

export const Table = styled.table`
  width: 97%;
  border-collapse: collapse;
  margin: auto;
  margin-top: 12px;
`;

export const TableHeader = styled.th`
  text-align: left;
  color: #555;
  padding: 10px 0;
  font-size: 12px;
`;

export const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: #ffffff;
  }

  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableCell = styled.td`
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

export const SearchInput = styled.input`
  margin: 10px 0;
  padding: 8px;
  width: 200px;
  background-color: white;
`;

export const Pagination = styled.div`
  margin-top: 10px;
`;

export const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Rectangle = styled.div`
  width: 16px;
  height: 32px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 4px;
  margin-right: 8px;
`;

export const HeadingText = styled.h3`
  font-size: 1.5em;
  color: ${(props) => props.theme.colors.text};
`;

export const HistoryTableContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  padding-left: 20px;
  padding-right: 20px;
  min-height: 100vh;
`;

export const Container = styled.div`
  font-family: "Inter", sans-serif;
  background-color: #f8f8f8;
  padding: 32px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const PageButton = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  background-color: #a0a0a0;
  border: 1px solid #ddd;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: default;
  }
`;

export const PageNumber = styled.span`
  margin: 0 10px;
`;