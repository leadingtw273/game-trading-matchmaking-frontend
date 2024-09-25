import { Checkbox, Col, Flex, Form, Input, Row, Select } from "antd";
import TextArea from "antd/es/input/TextArea";

import { TransactionEnum } from "@/enums";

import "./style.scss";

interface ICoinCommodityFormProps {
  transactionType: TransactionEnum.Type;
}
export default function CoinCommodityForm(props: ICoinCommodityFormProps) {
  const { transactionType } = props;

  return (
    <div className="coin-commodity-form">
      <Form labelAlign="left" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} colon={false}>
        <Row style={{ padding: "10px 20px" }} gutter={[5, 12]}>
          <Col span={12}>
            <Form.Item label={"幣值"} required>
              <Flex gap={10}>
                <Form.Item name="currency" initialValue="TWD" noStyle>
                  <Select style={{ width: 90 }} options={[{ label: "1 台幣", value: "TWD" }]} />
                </Form.Item>
                <Form.Item required noStyle>
                  <Input suffix="元" />
                </Form.Item>
              </Flex>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label={transactionType === TransactionEnum.Type.SALE ? "庫存" : "收購金額"} required>
              <Input suffix="金" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label={transactionType === TransactionEnum.Type.SALE ? "最低購買" : "最低收購"} required>
              <Input suffix="台幣" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="交易方式" required>
              <Checkbox.Group>
                <Checkbox>匯款</Checkbox>
                <Checkbox>Line Pay</Checkbox>
                <Checkbox>點卡</Checkbox>
                <Checkbox>其他</Checkbox>
              </Checkbox.Group>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="標籤" labelCol={{ span: 3 }} wrapperCol={{ span: 20 }}>
              <Select mode="tags" maxCount={10} placeholder="請輸入標籤，上限 10 個" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="備註" labelCol={{ span: 3 }} wrapperCol={{ span: 20 }}>
              <TextArea rows={5} placeholder="請輸入備註" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
