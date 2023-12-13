import styled from "styled-components";

const ErrorContainer = styled.div`
  color: red;
  margin: 20px 0;
  text-align: center;
`;

interface ErrorComponentProps {
  message: string;
}

export const ErrorComponent = ({ message }: ErrorComponentProps) => {
  return <ErrorContainer>{message}</ErrorContainer>;
};
