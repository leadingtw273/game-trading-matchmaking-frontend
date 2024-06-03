import { useState } from "react";
import { Flex } from "antd";
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

        <Flex className="transaction-table__main" vertical>
          <Flex
            className={[
              "main-tabs",
              transactionType === Transaction.Type.SALE ? "decorate-left" : "decorate-right",
            ].join(" ")}
            align="center"
          >
            <div
              className={["main-tabs__item", transactionType === Transaction.Type.SALE ? "active" : ""].join(" ")}
              onClick={() => setTransactionType(Transaction.Type.SALE)}
            >
              販售中
            </div>
            <div
              className={["main-tabs__item", transactionType === Transaction.Type.PURCHASE ? "active" : ""].join(" ")}
              onClick={() => setTransactionType(Transaction.Type.PURCHASE)}
            >
              收購中
            </div>
          </Flex>
          <div className="main-content">{renderContent(transactionType)}</div>
        </Flex>
      </Flex>
    </Flex>
  );
}
