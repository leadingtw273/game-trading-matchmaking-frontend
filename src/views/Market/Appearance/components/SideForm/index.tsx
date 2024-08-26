import { Form, Input, Select, Space } from "antd";
import { SelectTag } from "@/components/BaseField";
import { CurrencyEnum, TransactionEnum, AppearanceEnum } from "@/enums";
import { AppearanceConst, CurrencyConst } from "@/consts";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

type LocationState = {
  type: AppearanceEnum.Type;
  name: string;
};

export default function SideForm() {
  const form = Form.useFormInstance();
  const { state } = useLocation() as { state: LocationState | undefined };

  useEffect(() => {
    if (state != null) form.setFieldsValue(state);
  }, [form, state]);

  return (
    <>
      <Form.Item name="type" label="外觀類型" initialValue={AppearanceEnum.Type.GIFT_BOX}>
        <Select options={AppearanceConst.getTypeOptions()} placeholder="請選擇" />
      </Form.Item>
      <Form.Item name="name" label="外觀名稱">
        <Input placeholder="請輸入" />
      </Form.Item>
      <Form.Item name="maxPrize" label="販售價格" colon={false}>
        <Space>
          <Form.Item name="currency" style={{ minWidth: "80px" }} initialValue={CurrencyEnum.Type.TWD}>
            <Select options={CurrencyConst.getTypeOptions()} popupMatchSelectWidth={false} />
          </Form.Item>
          <Form.Item name="value">
            <Input placeholder="請輸入" suffix="以下" />
          </Form.Item>
        </Space>
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
