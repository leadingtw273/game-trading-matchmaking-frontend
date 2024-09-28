import { cloneDeep } from "lodash-es";
import { useEffect } from "react";
import { Checkbox, Col, Flex, Form, InputNumber, Row, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { DownOutlined } from "@ant-design/icons";

import { CurrencyConst, TransactionConst } from "@/consts";
import { CurrencyEnum, TransactionEnum } from "@/enums";
import { getOptionsLabel } from "@/utils";

import "./style.scss";

export type CoinCommodityFormValues = {
  coinRatio: {
    currency: CurrencyEnum.Type;
    value?: number;
  };
  amount?: number;
  transMinLimit?: number;
  transactionMethod: TransactionEnum.Method[];
  tags: string[];
  remark?: string;
};

export type CoinCommodityValidFormProps = CoinCommodityFormValues & {
  coinRatio: {
    currency: CurrencyEnum.Type;
    value: number;
  };
  amount: number;
  transMinLimit: number;
};

interface ICoinCommodityFormProps {
  show: boolean;
  name: string;
  transactionType: TransactionEnum.Type;
}
export default function CoinCommodityForm(props: ICoinCommodityFormProps) {
  const { show, name, transactionType } = props;
  const [form] = Form.useForm<CoinCommodityFormValues>();
  const selectedCurrency = Form.useWatch(["coinRatio", "currency"], form);
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
      className="coin-commodity-form"
      style={{ padding: "20px 30px", display: show ? "block" : "none" }}
      labelAlign="left"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
      colon={false}
    >
      <Row gutter={[0, 20]}>
        <Col span={12}>
          <Form.Item label="幣值" required>
            <Flex gap={10} align="center">
              <Form.Item name={["coinRatio", "currency"]} initialValue={CurrencyEnum.Type.TWD} noStyle>
                <Select
                  style={{ width: "auto" }}
                  popupMatchSelectWidth={false}
                  options={[
                    { label: "1台幣", value: CurrencyEnum.Type.TWD },
                    { label: "1美金", value: CurrencyEnum.Type.USD },
                    { label: "1越南盾", value: CurrencyEnum.Type.VND },
                  ]}
                />
              </Form.Item>
              <span className="ratio-symbol">:</span>
              <Form.Item
                name={["coinRatio", "value"]}
                rules={[
                  { required: true, message: "請輸入金額" },
                  { type: "number", min: 0, message: "請輸入正確金額" },
                ]}
                required
                noStyle
              >
                <InputNumber style={{ width: "100%" }} suffix="金" controls={false} />
              </Form.Item>
            </Flex>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="amount"
            label={transactionType === TransactionEnum.Type.SALE ? "庫存" : "需求"}
            rules={[
              { required: true, message: "請輸入數量" },
              { type: "number", min: 0, message: "請輸入正確數量" },
            ]}
            required
          >
            <InputNumber style={{ width: "100%" }} suffix="磚" controls={false} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="transMinLimit"
            label={transactionType === TransactionEnum.Type.SALE ? "最低購買" : "最低收購"}
            rules={[
              { required: true, message: "請輸入最低金額" },
              { type: "number", min: 0, message: "請輸入正確金額" },
            ]}
            required
          >
            <InputNumber
              style={{ width: "100%" }}
              suffix={getOptionsLabel(selectedCurrency, CurrencyConst.getTypeOptions())}
              controls={false}
            />
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
