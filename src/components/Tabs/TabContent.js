import { shortDate } from "common/formatter";
import { capitalizeFirstLetter } from "common/helper";

import { Table, Td, Th, CliclableTh } from "./style";

const TabContent = ({ data, type, onSort, sortType }) => {
  const totalPending = data.reduce((acc, t) => acc + t.amount, 0);

  return (
    <Table>
      <thead>
        <tr>
          <CliclableTh onClick={onSort}>
            Date
            {sortType ? "↓" : "↑"}
          </CliclableTh>
          <Th>Transaction</Th>
          <Th>Amount</Th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ date, description, amount }, index) => {
          return (
            <tr key={index}>
              <Td>{shortDate(date)}</Td>
              <Td>{description}</Td>
              <Td>${amount}</Td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <Td>
            <b>Total {capitalizeFirstLetter(type)} Repayments</b>
          </Td>
          <Td />
          <Td>${totalPending.toFixed(2)}</Td>
        </tr>
      </tfoot>
    </Table>
  );
};

export default TabContent;
