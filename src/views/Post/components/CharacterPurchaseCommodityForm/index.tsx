import { useState } from "react";
import { Checkbox, Col, Divider, Flex, Form, Input, Row, Select, theme } from "antd";
import TextArea from "antd/es/input/TextArea";

import { SelectTag } from "@/components/BaseField";
import { CharacterConst } from "@/consts";

import InnerSkillSelectTag from "./components/InnerSkillSelectTag";

import "./style.scss";

export type CharacterPurchaseCommodityFormValues = {
  username: string;
};

export default function CharacterPurchaseCommodityForm() {
  const [form] = Form.useForm<CharacterPurchaseCommodityFormValues>();
  const { token } = theme.useToken();
  const [innerSkillLength, setInnerSkillLength] = useState(0);

  return (
    <div className="character-purchase-commodity-form">
      <Form
        form={form}
        labelAlign="left"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        colon={false}
        onFieldsChange={(changedFields) => {
          if (changedFields.some((field) => field.name[0] === "innerSkills")) {
            setInnerSkillLength(changedFields[0].value?.length ?? 0);
          }
        }}
      >
        <div className="sub-title">基本資料</div>
        <Row style={{ padding: "10px 20px" }} gutter={[5, 5]}>
          <Col span={24}>
            <Form.Item
              style={{ margin: 0 }}
              label="收購心法"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              required
            >
              <Flex style={{ marginBottom: 5 }} justify="space-between" align="center">
                <div className="tips">心法為主，至多選五項</div>
                <div>
                  <span style={{ color: innerSkillLength > 0 ? token.colorPrimary : "" }}>
                    {innerSkillLength > 0 ? innerSkillLength : "-"}
                  </span>{" "}
                  / 5
                </div>
              </Flex>
              <Form.Item name="innerSkills" noStyle>
                <InnerSkillSelectTag />
              </Form.Item>
            </Form.Item>
          </Col>
          <Divider style={{ margin: "8px 0" }} />
          <Col span={12}>
            <Form.Item name="bodyType" label="體型" required>
              <SelectTag options={CharacterConst.getBodyTypeOptions()} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="陣營" required>
              <SelectTag options={CharacterConst.getCampTypeOptions()} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="角色狀態" required>
              <Checkbox.Group>
                <Checkbox>無負債</Checkbox>
                <Checkbox>需改名</Checkbox>
                <Checkbox>需轉移</Checkbox>
              </Checkbox.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="售價" required>
              <Flex gap={10}>
                <Form.Item name="currency" initialValue="TWD" noStyle>
                  <Select style={{ width: 90 }} options={[{ label: "台幣", value: "TWD" }]} />
                </Form.Item>
                <Form.Item required noStyle>
                  <Input style={{ width: 200 }} suffix="元" />
                </Form.Item>
              </Flex>
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
        </Row>
        <div className="sub-title">裝備需求·標籤</div>
        <Row style={{ padding: "10px 20px" }} gutter={[5, 8]}>
          <Col span={24}>
            <Form.Item label="裝備需求" style={{ margin: 0 }} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
              <div className="tips" style={{ marginBottom: 10 }}>
                請選擇對應的心法與裝備類型填入裝分，若無則不必填寫
              </div>
              <Flex style={{ width: "100%" }} gap={40}>
                <Form.Item style={{ width: "100%" }} label="PVP 裝分" labelCol={{ span: 6 }} wrapperCol={{ span: 10 }}>
                  <Input suffix="以上" />
                </Form.Item>
                <Form.Item style={{ width: "100%" }} label="PVE 裝分" labelCol={{ span: 6 }} wrapperCol={{ span: 10 }}>
                  <Input suffix="以上" />
                </Form.Item>
              </Flex>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="標籤" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
              <div className="tips" style={{ marginBottom: 10 }}>
                優先顯示前三項標籤
              </div>
              <Select mode="tags" maxCount={10} placeholder="請輸入標籤，上限 10 個" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="備註" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
              <TextArea rows={5} placeholder="請輸入備註" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
