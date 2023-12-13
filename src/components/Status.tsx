import styled, { css } from 'styled-components';
import { StatusType } from '../types';

const StatusStyles = {
  Pending: css`
    background-color: ${props => props.theme.colors.primary};
  `,
  Paid: css`
    background-color: ${props => props.theme.colors.secondary};
  `,
  Completed: css`
    background-color: ${props => props.theme.colors.success};
  `,
};

const StatusIndicator = styled.span<StatusType>`
  display: inline-block;
  padding: 0.25em 0.75em;
  font-size: 0.875em;
  font-weight: bold;
  border-radius: 4px;
  text-align: center;
  margin: 0.5em 0;
  ${props => StatusStyles[props.status] || css`
    background-color: ${props => props.theme.colors.gray};
    color: #1A1D1F;
  `};
`;

const StatusComponent = ({ status }: StatusType) => (
  <StatusIndicator status={status}>
    {status}
  </StatusIndicator>
);

export default StatusComponent;
