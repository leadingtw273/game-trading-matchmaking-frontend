import { cloneDeep } from "lodash-es";
import { useEffect } from "react";
import { Checkbox, Col, Flex, Form, Input, InputNumber, Row, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { DownOutlined } from "@ant-design/icons";

import { AppearanceConst, TransactionConst } from "@/consts";
import { CurrencyEnum, TransactionEnum } from "@/enums";

import "./style.scss";

export type AppearanceCommodityFormValues = {
  price: {
    currency: CurrencyEnum.Type;
    value?: number;
  };
  category?: number;
  name?: string;
  amount?: number;
  transactionMethod: TransactionEnum.Method[];
  tags: string[];
  remark?: string;
};

export type AppearanceCommodityValidFormProps = AppearanceCommodityFormValues & {
  coinRatio: {
    currency: CurrencyEnum.Type;
    value: number;
  };
  category: number;
  name: string;
  amount: number;
};

interface IAppearanceCommodityFormProps {
  show: boolean;
  name: string;
  transactionType: TransactionEnum.Type;
}
export default function AppearanceCommodityForm(props: IAppearanceCommodityFormProps) {
  const { show, name, transactionType } = props;
  const [form] = Form.useForm<AppearanceCommodityFormValues>();
  const selectedTags = Form.useWatch("tags", form);

  useEffect(() => {
    if (show) return;

    const originValues = cloneDeep(form.getFieldsValue());
    form.resetFields();
    form.setFieldsValue(originValues);
  }, [form, show]);

  return (
    <Form
      name={name}
      form={form}
      className="appearance-commodity-form"
      style={{ padding: "20px 30px", display: show ? "block" : "none" }}
      labelAlign="left"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
      colon={false}
      requiredMark={(label, { required }) => (
        <>
          {label}
          {required && <span style={{ color: "red", marginLeft: 3 }}>*</span>}
        </>
      )}
    >
      <Row gutter={[0, 20]}>
        <Col span={12}>
          <Form.Item label={"幣值"} required>
            <Flex gap={10}>
              <Form.Item name="category" rules={[{ required: true, message: "請選擇外觀類型" }]} noStyle>
                <Select
                  style={{ width: "auto" }}
                  popupMatchSelectWidth={false}
                  placeholder="外觀類型"
                  options={AppearanceConst.getTypeOptions()}
                />
              </Form.Item>
              <Form.Item name="name" rules={[{ required: true, message: "請輸入外觀名稱" }]} noStyle>
                <Input placeholder="外觀名稱" />
              </Form.Item>
            </Flex>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="amount"
            label={transactionType === TransactionEnum.Type.SALE ? "庫存" : "收購數量"}
            rules={[
              { required: true, message: "請輸入數量" },
              { type: "number", min: 0, message: "請輸入正確數量" },
            ]}
            required
          >
            <InputNumber style={{ width: "100%" }} controls={false} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label={transactionType === TransactionEnum.Type.SALE ? "販售金額" : "收購預算"} required>
            <Flex gap={10}>
              <Form.Item name={["price", "currency"]} initialValue="TWD" noStyle>
                <Select
                  style={{ width: "auto" }}
                  popupMatchSelectWidth={false}
                  options={[
                    { label: "台幣", value: CurrencyEnum.Type.TWD },
                    { label: "美金", value: CurrencyEnum.Type.USD },
                    { label: "越南盾", value: CurrencyEnum.Type.VND },
                  ]}
                />
              </Form.Item>
              <Form.Item
                name={["price", "value"]}
                rules={[
                  { required: true, message: "請輸入金額" },
                  { type: "number", min: 0, message: "請輸入正確金額" },
                ]}
                noStyle
              >
                <InputNumber style={{ width: "100%" }} suffix="元" controls={false} />
              </Form.Item>
            </Flex>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="transactionMethod"
            label="交易方式"
            initialValue={[]}
            rules={[{ required: true, message: "請選擇交易方式" }]}
            required
          >
            <Checkbox.Group>
              <Flex gap={5} wrap="wrap">
                {TransactionConst.getMethodOptions().map((method) => (
                  <Checkbox key={method.value} value={method.value}>
                    {method.label}
                  </Checkbox>
                ))}
              </Flex>
            </Checkbox.Group>
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item name="tags" label="標籤" initialValue={[]} labelCol={{ span: 3 }} wrapperCol={{ span: 24 }}>
            <Select
              mode="tags"
              maxCount={10}
              maxTagTextLength={4}
              placeholder="請輸入標籤，上限 10 個"
              suffixIcon={
                <>
                  <span>{selectedTags?.length ?? 0} / 10</span>
                  <DownOutlined />
                </>
              }
            />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item name="remark" label="備註" labelCol={{ span: 3 }} wrapperCol={{ span: 24 }}>
            <TextArea rows={5} placeholder="請輸入備註" />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
