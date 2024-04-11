import { useState } from "react";
import { Flex, Radio } from "antd";
import { Transaction } from "@/enums";

import "./style.scss";

type TransactionTableProps = {
  renderForm: (transactionType: Transaction.Type) => React.ReactNode;
  renderContent: (transactionType: Transaction.Type) => React.ReactNode;
};
export default function TransactionTable(props: TransactionTableProps) {
  const { renderForm, renderContent } = props;
  const [transactionType, setTransactionType] = useState<Transaction.Type>(Transaction.Type.SALE);

  return (
    <Flex className="transaction-table" align="center" justify="center">
      <Flex className="transaction-table__wrapper" gap={20}>
        <div className="transaction-table__side">{renderForm(transactionType)}</div>

        <Flex className="transaction-table__main" gap={5} vertical>
          <Radio.Group
            className="main-tabs"
            value={transactionType}
            onChange={(e) => setTransactionType(e.target.value)}
          >
            <Radio.Button value={Transaction.Type.SALE}>販售中</Radio.Button>
            <Radio.Button value={Transaction.Type.PURCHASE}>收購中</Radio.Button>
          </Radio.Group>
          <div className="main-content">{renderContent(transactionType)}</div>
        </Flex>
      </Flex>
    </Flex>
  );
}
