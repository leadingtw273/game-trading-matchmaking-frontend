import { Button, Flex, Form, Input, Select } from "antd";
import { SelectTag } from "@/components/BaseField";
import { Currency, Transaction } from "@/enums";

import "./style.scss";
import { StockType } from "./enum";
import { useForm } from "antd/es/form/Form";

type FormValues = {
  sellCurrency: {
    currency: Currency.Type;
    value: number;
  } | null;
  transaction: Transaction.Method | null;
  stock: StockType | null;
};

type SideFormProps = {
  transactionType: Transaction.Type;
  onSubmit: (values: FormValues) => void;
};
export default function SideForm(props: SideFormProps) {
  const { onSubmit } = props;
  const [form] = useForm<FormValues>();

  const handleSubmit = (values: FormValues) => {
    // do transaction
    onSubmit(values);
  };

  const currencyOptions = Object.values(Currency.Type).map((currency) => ({
    value: currency,
    label: "1" + Currency.Label[currency],
  }));

  return (
    <Form<FormValues>
      className="side-form"
      form={form}
      labelCol={{ span: 6 }}
      labelAlign="left"
      onFinish={handleSubmit}
    >
      <Flex className="side-form_wrapper" align="center" justify="space-between" vertical>
        <Flex className="side-form_content" gap={8} vertical>
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
        </Flex>
        <Flex className="side-form_action" gap={10}>
          <Button className="form-reset" onClick={() => form.resetFields()}>
            重置
          </Button>
          <Button className="form-confirm" onClick={() => form.submit()}>
            確認
          </Button>
        </Flex>
      </Flex>
    </Form>
  );
}
