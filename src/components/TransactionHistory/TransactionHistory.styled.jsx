import styled from 'styled-components';

export const TransactionTable = styled.table`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  background-color: ${p => p.theme.colors.white};
  border: 2px solid ${p => p.theme.colors.blue};
  border-radius: ${p => p.theme.radii.md};
  overflow: hidden;
  border-collapse: collapse;
  padding: ${p => p.theme.spacing(2)};
  box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
  -webkit-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
  -moz-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
`;

export const TableThead = styled.thead`
  background-color: ${p => p.theme.colors.blue};
  color: ${p => p.theme.colors.white};
  text-transform: uppercase;
`;

export const TableTr = styled.tr`
  &:nth-child(2n) {
    background-color: ${p => p.theme.colors.lightblue};
  }
  &:hover {
    background-color: ${p => p.theme.colors.shadowblue};
  }
`;

export const TableTh = styled.th`
  padding: ${p => p.theme.spacing(3)};
  border: 1px solid ${p => p.theme.colors.white};
`;

export const TableBody = styled.tbody`
  color: ${p => p.theme.colors.gray};
  text-align: center;
`;

export const TableTd = styled.td`
  padding: ${p => p.theme.spacing(3)};
  border: 1px solid ${p => p.theme.colors.blue};
`;
