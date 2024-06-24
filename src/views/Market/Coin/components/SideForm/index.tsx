import { Flex, Form, Input, Select } from "antd";
import { SelectTag } from "@/components/BaseField";
import { Currency, Transaction } from "@/enums";

import { StockType } from "./enum";

type SideFormProps = {
  transactionType: Transaction.Type;
};
export default function SideForm(props: SideFormProps) {
  const { transactionType } = props;
  console.log("transactionType", transactionType);

  const currencyOptions = Object.values(Currency.Type).map((currency) => ({
    value: currency,
    label: "1" + Currency.Label[currency],
  }));

  return (
    <>
      <Form.Item name="sellCurrency" label="幣值" colon={false}>
        <Flex align="center" gap={5}>
          <Form.Item name="currency" style={{ minWidth: "80px" }} initialValue={Currency.Type.TWD}>
            <Select options={currencyOptions} popupMatchSelectWidth={false} />
          </Form.Item>
          <span style={{ color: "#AEAEAE", fontWeight: "bold" }}>:</span>
          <Form.Item name="ratio">
            <Input placeholder={"請輸入"} suffix="金" />
          </Form.Item>
        </Flex>
      </Form.Item>
      <Form.Item name="stock" label="庫存/需求" colon={false}>
        <Select<StockType>
          placeholder={"請選擇"}
          options={[
            { label: ">1磚", value: StockType.MAX_1W },
            { label: "1磚~10磚", value: StockType.MIN_1W_MAX_10W },
            { label: "10磚~100磚", value: StockType.MIN_10W_MAX_100W },
            { label: "<100磚", value: StockType.MIN_100W },
          ]}
        />
      </Form.Item>
      <Form.Item name="transaction" label="交易方式" colon={false}>
        <SelectTag<Transaction.Method | null>
          options={[
            { label: "匯款", value: Transaction.Method.BANK_TRANSFER },
            { label: "LinePay", value: Transaction.Method.LINE_PAY },
            { label: "8591", value: Transaction.Method.THIRD_PARTY_8591 },
          ]}
        />
      </Form.Item>
    </>
  );
}
