import { Form, Input, Select, Space } from "antd";
import { SelectTag } from "@/components/BaseField";
import { CharacterEnum, CurrencyEnum, TransactionEnum } from "@/enums";
import { CharacterConst, CurrencyConst } from "@/consts";
import { useEffect } from "react";

export default function SideForm() {
  const form = Form.useFormInstance();
  const currentSect = Form.useWatch("sect", form);

  useEffect(() => {
    // Reset innerSkill when sect changes
    form.setFieldsValue({ innerSkill: undefined });
  }, [currentSect, form]);

  return (
    <>
      <Form.Item name="sect" label="門派">
        <Select options={CharacterConst.getSectOptions()} placeholder="請選擇" allowClear />
      </Form.Item>
      <Form.Item name="innerSkill" label="心法" shouldUpdate>
        <Select options={CharacterConst.getInnerSkillOptionsBySect(currentSect)} placeholder="請選擇" allowClear />
      </Form.Item>
      <Form.Item name="bodyType" label="體型" colon={false}>
        <SelectTag options={CharacterConst.getBodyTypeOptions()} />
      </Form.Item>
      <Form.Item name="camp" label="陣營" colon={false}>
        <SelectTag options={CharacterConst.getCampTypeOptions()} />
      </Form.Item>
      <Form.Item name="gearType" label="裝備類型" colon={false}>
        <SelectTag
          options={[
            { label: CharacterEnum.GearType.PVP, value: CharacterEnum.GearType.PVP },
            { label: CharacterEnum.GearType.PVE, value: CharacterEnum.GearType.PVE },
          ]}
        />
      </Form.Item>
      <Form.Item label="裝分" colon={false}>
        <Space>
          <Form.Item name={["gearScore", "min"]} noStyle>
            <Input placeholder="最低" suffix="w" />
          </Form.Item>
          ~
          <Form.Item name={["gearScore", "max"]} noStyle>
            <Input placeholder="最高" suffix="w" />
          </Form.Item>
        </Space>
      </Form.Item>
      <Form.Item label="資歷" colon={false}>
        <Space>
          <Form.Item name={["accomplishmentScore", "min"]} noStyle>
            <Input placeholder="最低" />
          </Form.Item>
          ~
          <Form.Item name={["accomplishmentScore", "max"]} noStyle>
            <Input placeholder="最高" />
          </Form.Item>
        </Space>
      </Form.Item>
      <Form.Item label="金額" colon={false}>
        <Space>
          <Form.Item
            name={["prizeRange", "currency"]}
            style={{ minWidth: "80px" }}
            initialValue={CurrencyEnum.Type.TWD}
          >
            <Select options={CurrencyConst.getTypeOptions()} popupMatchSelectWidth={false} />
          </Form.Item>
          <Form.Item name={["prizeRange", "value"]}>
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
