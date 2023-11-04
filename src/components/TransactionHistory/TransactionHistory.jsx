import {
  TransactionTable,
  TableThead,
  TableTr,
  TableTh,
  TableBody,
  TableTd,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TableThead>
        <TableTr>
          <TableTh>Type</TableTh>
          <TableTh>Amount</TableTh>
          <TableTh>Currency</TableTh>
        </TableTr>
      </TableThead>

      <TableBody>
        {items.map(item => {
          return (
            <TableRow
              key={item.id}
              id={item.id}
              type={item.type}
              currency={item.currency}
              amount={item.amount}
            />
          );
        })}
      </TableBody>
    </TransactionTable>
  );
};

const TableRow = ({ type, amount, currency }) => {
  return (
    <TableTr>
      <TableTd>{type}</TableTd>
      <TableTd>{amount}</TableTd>
      <TableTd>{currency}</TableTd>
    </TableTr>
  );
};
