import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Form, Input, Select, Space } from "antd";

import { SelectTag } from "@/components/BaseField";
import { CurrencyConst } from "@/consts";
import { CurrencyEnum, TransactionEnum } from "@/enums";

import { StockType } from "./enum";

type LocationState = {
  currency: CurrencyEnum.Type;
  ratio: string;
};

export default function SideForm() {
  const form = Form.useFormInstance();
  const { state } = useLocation() as { state: LocationState | undefined };

  useEffect(() => {
    if (state != null) form.setFieldsValue(state);
  }, [form, state]);

  return (
    <>
      <Form.Item name="sellCurrency" label="幣值" colon={false}>
        <Space>
          <Form.Item name="currency" style={{ minWidth: "80px" }} initialValue={CurrencyEnum.Type.TWD}>
            <Select options={CurrencyConst.getTypeOptions()} popupMatchSelectWidth={false} />
          </Form.Item>
          <span style={{ color: "#AEAEAE", fontWeight: "bold" }}>:</span>
          <Form.Item name="ratio">
            <Input placeholder={"請輸入"} suffix="金" />
          </Form.Item>
        </Space>
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
      <Form.Item name="transactionMethod" label="交易方式" colon={false}>
        <SelectTag
          options={[
            { label: "匯款", value: TransactionEnum.Method.BANK_TRANSFER },
            { label: "LinePay", value: TransactionEnum.Method.LINE_PAY },
            { label: "8591", value: TransactionEnum.Method.THIRD_PARTY_8591 },
          ]}
        />
      </Form.Item>
    </>
  );
}
