import { Flex, Form, Input, Select } from "antd";
import { SelectTag } from "@/components/BaseField";
import { CurrencyEnum, TransactionEnum, AppearanceEnum } from "@/enums";

type SideFormProps = {
  transactionType: TransactionEnum.Type;
};
export default function SideForm(props: SideFormProps) {
  const { transactionType } = props;
  console.log("transactionType", transactionType);

  const currencyOptions = Object.values(CurrencyEnum.Type).map((currency) => ({
    value: currency,
    label: CurrencyEnum.Label[currency],
  }));

  return (
    <>
      <Form.Item name="type" label="外觀類型" initialValue={AppearanceEnum.Type.GIFT_BOX}>
        <Select
          options={[
            { label: AppearanceEnum.Label.GIFT_BOX, value: AppearanceEnum.Type.GIFT_BOX },
            { label: AppearanceEnum.Label.CLOAK, value: AppearanceEnum.Type.CLOAK },
            { label: AppearanceEnum.Label.COAT, value: AppearanceEnum.Type.COAT },
            { label: AppearanceEnum.Label.HAIR, value: AppearanceEnum.Type.HAIR },
            { label: AppearanceEnum.Label.HARNESS, value: AppearanceEnum.Type.HARNESS },
            { label: AppearanceEnum.Label.MOUNT, value: AppearanceEnum.Type.MOUNT },
            { label: AppearanceEnum.Label.HANGING_PET, value: AppearanceEnum.Type.HANGING_PET },
            { label: AppearanceEnum.Label.OTHER, value: AppearanceEnum.Type.OTHER },
          ]}
        />
      </Form.Item>
      <Form.Item name="name" label="外觀名稱">
        <Input placeholder="請輸入" />
      </Form.Item>
      <Form.Item name="maxPrize" label="販售價格" colon={false}>
        <Flex align="center" gap={5}>
          <Form.Item name="currency" style={{ minWidth: "80px" }} initialValue={CurrencyEnum.Type.TWD}>
            <Select options={currencyOptions} popupMatchSelectWidth={false} />
          </Form.Item>
          <Form.Item name="value">
            <Input placeholder="請輸入" suffix="以下" />
          </Form.Item>
        </Flex>
      </Form.Item>
      <Form.Item name="transaction" label="交易方式" colon={false}>
        <SelectTag<TransactionEnum.Method | null>
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
