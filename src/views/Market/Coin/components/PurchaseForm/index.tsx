import { Button, Flex, Form } from "antd";
import { InputCoin, SelectOption, SelectTag } from "@/components/BaseField";
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

type PurchaseProps = {
  onSubmit: (values: FormValues) => void;
};
export default function PurchaseForm(props: PurchaseProps) {
  const { onSubmit } = props;
  const [form] = useForm<FormValues>();

  const handleSubmit = (values: FormValues) => {
    // do transaction
    onSubmit(values);
  };

  return (
    <Form<FormValues> className="purchase-form" form={form} onFinish={handleSubmit}>
      <Flex align="center" style={{ height: "100%" }} justify="space-between" vertical>
        <Flex gap={18} vertical>
          <Form.Item name="sellCurrency" label="收購幣值" colon={false}>
            <InputCoin
              placeholder="遊戲幣"
              options={Object.values(Currency.Type).map((currency) => ({
                value: currency,
                label: `1${Currency.Label[currency]}`,
              }))}
              hasNoLimit
            />
          </Form.Item>
          <Form.Item name="transaction" label="交易方式" colon={false}>
            <SelectTag<Transaction.Method | null>
              options={[
                { label: "匯款", value: Transaction.Method.BANK_TRANSFER },
                { label: "LinePay", value: Transaction.Method.LINE_PAY },
                { label: "8591", value: Transaction.Method.THIRD_PARTY_8591 },
              ]}
              hasNoLimit
            />
          </Form.Item>
          <Form.Item name="stock" label="需&emsp;&emsp;求" colon={false}>
            <SelectOption<StockType | null>
              options={[
                { label: ">1磚", value: StockType.MAX_1W },
                { label: "1磚~10磚", value: StockType.MIN_1W_MAX_10W },
                { label: "10磚~100磚", value: StockType.MIN_10W_MAX_100W },
                { label: "<100磚", value: StockType.MIN_100W },
              ]}
              hasNoLimit
            />
          </Form.Item>
        </Flex>
        <Flex gap={10} className="action">
          <Button className="action-reset" onClick={() => form.resetFields()}>
            重置
          </Button>
          <Button className="action-confirm" onClick={() => form.submit()}>
            確認
          </Button>
        </Flex>
      </Flex>
    </Form>
  );
}
