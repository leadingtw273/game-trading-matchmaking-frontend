import { useState } from "react";
import { Checkbox, Col, Divider, Flex, Form, InputNumber, Row, Select, theme } from "antd";
import TextArea from "antd/es/input/TextArea";
import { DownOutlined } from "@ant-design/icons";

import { SelectTag } from "@/components/BaseField";
import { CharacterConst, TransactionConst } from "@/consts";
import { CharacterEnum, CurrencyEnum, TransactionEnum } from "@/enums";
import { CharacterCommodity } from "@/types";

import InnerSkillSelectTag from "./components/InnerSkillSelectTag";

import "./style.scss";

export type CharacterPurchaseCommodityFormValues = {
  innerSkillList: CharacterEnum.InnerSkillType[];
  bodyTypeList: CharacterEnum.BodyType[];
  campList: CharacterEnum.CampType[];
  info: Array<keyof CharacterCommodity["info"]>;
  price: {
    currency: CurrencyEnum.Type;
    value?: number;
  };
  transactionMethod: TransactionEnum.Method[];
  gearScoreMap: Record<CharacterEnum.GearType, number | undefined>;
  tags: string[];
  remark?: string;
};

interface ICharacterPurchaseCommodityFormProps {
  show: boolean;
  name: string;
}
export default function CharacterPurchaseCommodityForm(props: ICharacterPurchaseCommodityFormProps) {
  const { show, name } = props;
  const [form] = Form.useForm<CharacterPurchaseCommodityFormValues>();
  const selectedTags = Form.useWatch("tags", form);
  const { token } = theme.useToken();
  const [innerSkillLength, setInnerSkillLength] = useState(0);

  return (
    <Form
      name={name}
      form={form}
      className="character-purchase-commodity-form"
      style={{ display: show ? "block" : "none" }}
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
      onFieldsChange={(changedFields) => {
        if (changedFields.some((field) => field.name[0] === "innerSkills")) {
          setInnerSkillLength(changedFields[0].value?.length ?? 0);
        }
      }}
    >
      <div className="sub-title">基本資料</div>
      <Row style={{ padding: "10px 20px" }} gutter={[5, 5]}>
        <Col span={24}>
          <Form.Item style={{ margin: 0 }} label="收購心法" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} required>
            <Flex style={{ marginBottom: 5 }} justify="space-between" align="center">
              <div className="tips">心法為主，至多選五項</div>
              <div>
                <span style={{ color: innerSkillLength > 0 ? token.colorPrimary : "" }}>
                  {innerSkillLength > 0 ? innerSkillLength : "-"}
                </span>{" "}
                / 5
              </div>
            </Flex>
            <Form.Item
              name="innerSkillList"
              initialValue={[]}
              rules={[{ required: true, message: "請選擇至少一個心法" }]}
              noStyle
            >
              <InnerSkillSelectTag />
            </Form.Item>
          </Form.Item>
        </Col>
        <Divider style={{ margin: "8px 0" }} />
        <Col span={12}>
          <Form.Item
            name="bodyTypeList"
            initialValue={[]}
            label="體型"
            rules={[{ required: true, message: "請選擇體型" }]}
            required
          >
            <SelectTag options={CharacterConst.getBodyTypeOptions()} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="campList"
            initialValue={[]}
            label="陣營"
            rules={[{ required: true, message: "請選擇陣營" }]}
            required
          >
            <SelectTag options={CharacterConst.getCampTypeOptions()} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="info" initialValue={[]} label="角色狀態">
            <Checkbox.Group>
              <Flex gap={5} wrap="wrap">
                <Checkbox value="noDebt">無負債</Checkbox>
                <Checkbox value="needChangeName">需改名</Checkbox>
                <Checkbox value="needTransferred">需轉移</Checkbox>
                <Checkbox value="needFullLevel">需滿等</Checkbox>
              </Flex>
            </Checkbox.Group>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="售價" required>
            <Flex gap={10}>
              <Form.Item name={["price", "currency"]} initialValue="TWD" noStyle>
                <Select style={{ width: 90 }} options={[{ label: "台幣", value: "TWD" }]} />
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
            initialValue={[]}
            label="交易方式"
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
      </Row>
      <div className="sub-title">裝備需求·標籤</div>
      <Row style={{ padding: "10px 20px" }} gutter={[5, 8]}>
        <Col span={24}>
          <Form.Item label="裝備需求" style={{ margin: 0 }} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
            <div className="tips" style={{ marginBottom: 10 }}>
              請選擇對應的心法與裝備類型填入裝分，若無則不必填寫
            </div>
            <Flex style={{ width: "100%" }} gap={40}>
              <Form.Item
                style={{ width: "100%" }}
                name={["gearScoreMap", CharacterEnum.GearType.PVP]}
                label="PVP 裝分"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 14 }}
                rules={[{ type: "number", min: 0, message: "請輸入正確裝分" }]}
              >
                <InputNumber style={{ width: "100%" }} controls={false} suffix="以上" />
              </Form.Item>
              <Form.Item
                style={{ width: "100%" }}
                name={["gearScoreMap", CharacterEnum.GearType.PVE]}
                label="PVE 裝分"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 14 }}
                rules={[{ type: "number", min: 0, message: "請輸入正確裝分" }]}
              >
                <InputNumber style={{ width: "100%" }} controls={false} suffix="以上" />
              </Form.Item>
            </Flex>
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label="標籤" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
            <div className="tips" style={{ marginBottom: 10 }}>
              優先顯示前三項標籤
            </div>
            <Form.Item name="tags" initialValue={[]}>
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
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item name="remark" label="備註" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
            <TextArea rows={5} placeholder="請輸入備註" />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
