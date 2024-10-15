import { useEffect, useMemo } from "react";
import { Checkbox, Col, Flex, Form, InputNumber, Row, Select, UploadFile } from "antd";
import TextArea from "antd/es/input/TextArea";
import { DownOutlined } from "@ant-design/icons";

import { SelectTag } from "@/components/BaseField";
import UploadCharacterImage from "@/components/BaseField/UploadCharacterImage";
import { CharacterConst, TransactionConst } from "@/consts";
import { CharacterEnum, CurrencyEnum, TransactionEnum } from "@/enums";
import { CharacterCommodity, ImgurResponse } from "@/types";

import "./style.scss";

export type CharacterSaleCommodityFormValues = {
  sect?: CharacterEnum.SectType;
  innerSkillList: CharacterEnum.InnerSkillType[];
  bodyTypeList: CharacterEnum.BodyType[];
  campList: CharacterEnum.CampType[];
  level?: number;
  info: Array<keyof CharacterCommodity["info"]>;
  transactionMethod: TransactionEnum.Method[];
  price: {
    currency: CurrencyEnum.Type;
    value?: number;
  };
  imageList: UploadFile<ImgurResponse>[];
  gearScoreMap?: Record<CharacterEnum.InnerSkillType, Record<CharacterEnum.GearType, number | undefined>>;
  battleRankScore?: number;
  arenaScoreMap: Record<CharacterEnum.ArenaType, number | undefined>;
  estateRankScore?: number;
  endlessBattleValue: {
    energy?: number;
    stamina?: number;
  };
  accomplishmentScore?: number;
  petScore?: number;
  skinCountMap: Record<CharacterEnum.SkinType, number | undefined>;
  tags: string[];
  remark?: string;
};

interface ICharacterSaleCommodityFormProps {
  show: boolean;
  name: string;
}
export default function CharacterSaleCommodityForm(props: ICharacterSaleCommodityFormProps) {
  const { show, name } = props;
  const [form] = Form.useForm<CharacterSaleCommodityFormValues>();
  const selectedTags = Form.useWatch("tags", form);
  const currentSect = Form.useWatch("sect", form);
  const innerSkillOptions = useMemo(
    () => (currentSect != null ? CharacterConst.getInnerSkillOptionsBySect(currentSect) : []),
    [currentSect]
  );

  useEffect(() => {
    // Reset innerSkill when sect changes
    if (currentSect != null) {
      form.setFieldsValue({ innerSkillList: innerSkillOptions.map(({ value }) => value) });
    }
  }, [currentSect, form, innerSkillOptions]);

  return (
    <Form
      name={name}
      form={form}
      className="character-sale-commodity-form"
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
    >
      <div className="sub-title">基本資料</div>
      <Row style={{ padding: "10px 28px" }} gutter={[5, 20]}>
        <Col span={12}>
          <Form.Item label="門派心法" required>
            <Flex gap={10}>
              <Form.Item name="sect" rules={[{ required: true, message: "請選擇門派" }]} noStyle>
                <Select placeholder="選擇門派" options={CharacterConst.getSectOptions()} />
              </Form.Item>
              <Form.Item name="innerSkillList" initialValue={[]} noStyle hidden>
                <Select options={innerSkillOptions} />
              </Form.Item>
            </Flex>
          </Form.Item>
        </Col>
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
            initialValue={[CharacterEnum.CampType.NEUTRAL]}
            label="陣營"
            rules={[{ required: true, message: "請選擇陣營" }]}
            required
          >
            <SelectTag options={CharacterConst.getCampTypeOptions()} multiple={false} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="level"
            label="等級"
            rules={[
              { required: true, message: "請輸入等級" },
              { type: "number", min: 0, message: "請輸入正確等級" },
            ]}
            required
          >
            <InputNumber style={{ width: "100%" }} suffix="等" controls={false} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="info" initialValue={[]} label="角色狀態">
            <Checkbox.Group>
              <Flex gap={5} wrap="wrap">
                <Checkbox value="noDebt">無負債</Checkbox>
                <Checkbox value="needChangeName">需改名</Checkbox>
                <Checkbox value="needTransferred">需轉移</Checkbox>
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
        <Col span={24} style={{ height: "fit-content" }}>
          <Form.Item name="imageList" initialValue={[]} noStyle>
            <UploadCharacterImage />
          </Form.Item>
        </Col>
      </Row>
      {innerSkillOptions.length > 0 && (
        <>
          <div className="sub-title">裝備分數</div>
          <div style={{ padding: "10px 28px" }}>
            <div className="tips" style={{ marginBottom: 20 }}>
              請選擇對應的心法與裝備類型填入裝分，若無則不必填寫
            </div>
            {innerSkillOptions.map((innerSkill) => (
              <Flex key={innerSkill.value} style={{ marginTop: 20 }} gap={5}>
                <Form.Item
                  className="inner-skill__gear-score"
                  name={["gearScoreMap", innerSkill.value, CharacterEnum.GearType.PVP]}
                  label={
                    <Flex style={{ width: "100%" }} justify="space-between">
                      <span>{innerSkill.label}</span>
                      <span>PVP</span>
                    </Flex>
                  }
                  labelCol={{ span: 7 }}
                  wrapperCol={{ span: 15 }}
                  rules={[{ type: "number", min: 0, message: "請輸入正確裝分" }]}
                >
                  <InputNumber style={{ width: "100%" }} controls={false} />
                </Form.Item>
                <Form.Item
                  className="inner-skill__gear-score"
                  name={["gearScoreMap", innerSkill.value, CharacterEnum.GearType.PVE]}
                  label={
                    <Flex style={{ width: "100%" }} justify="space-between">
                      <span>{innerSkill.label}</span>
                      <span>PVE</span>
                    </Flex>
                  }
                  labelCol={{ span: 7 }}
                  wrapperCol={{ span: 15 }}
                  rules={[{ type: "number", min: 0, message: "請輸入正確裝分" }]}
                >
                  <InputNumber style={{ width: "100%" }} controls={false} />
                </Form.Item>
              </Flex>
            ))}
          </div>
        </>
      )}
      <div className="sub-title">副本·陣營·百戰·家園</div>
      <Row style={{ padding: "10px 28px" }} gutter={[5, 20]}>
        <Col span={12}>
          <Form.Item
            name="battleRankScore"
            label="戰階分數"
            rules={[{ type: "number", min: 0, message: "請輸入正確分數" }]}
          >
            <InputNumber style={{ width: "100%" }} controls={false} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item style={{ margin: 0 }} label="名劍分數" wrapperCol={{ span: 18 }}>
            <Flex gap={20}>
              <Form.Item
                name={["arenaScoreMap", CharacterEnum.ArenaType.TWO_VS_TWO]}
                label="2v2"
                rules={[{ type: "number", min: 0, message: "請輸入正確分數" }]}
              >
                <InputNumber style={{ width: "100%" }} controls={false} />
              </Form.Item>
              <Form.Item
                name={["arenaScoreMap", CharacterEnum.ArenaType.THREE_VS_THREE]}
                label="3v3"
                rules={[{ type: "number", min: 0, message: "請輸入正確分數" }]}
              >
                <InputNumber style={{ width: "100%" }} controls={false} />
              </Form.Item>
              <Form.Item
                name={["arenaScoreMap", CharacterEnum.ArenaType.FIVE_VS_FIVE]}
                label="5v5"
                rules={[{ type: "number", min: 0, message: "請輸入正確分數" }]}
              >
                <InputNumber style={{ width: "100%" }} controls={false} />
              </Form.Item>
            </Flex>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="estateRankScore"
            label="家園分數"
            rules={[{ type: "number", min: 0, message: "請輸入正確分數" }]}
          >
            <InputNumber style={{ width: "100%" }} controls={false} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item style={{ margin: 0 }} label="百戰精耐" wrapperCol={{ span: 18 }}>
            <Flex gap={20}>
              <Form.Item
                name={["endlessBattleValue", "energy"]}
                label={<span className="label__energy">精</span>}
                rules={[{ type: "number", min: 0, message: "請輸入正確數值" }]}
              >
                <InputNumber style={{ width: "100%" }} controls={false} />
              </Form.Item>
              <Form.Item
                name={["endlessBattleValue", "stamina"]}
                label={<span className="label__endurance">耐</span>}
                rules={[{ type: "number", min: 0, message: "請輸入正確數值" }]}
              >
                <InputNumber style={{ width: "100%" }} controls={false} />
              </Form.Item>
            </Flex>
          </Form.Item>
        </Col>
      </Row>
      <div className="sub-title">資歷·寵物·外觀·標籤·備註</div>
      <Row style={{ padding: "10px 28px" }} gutter={[5, 20]}>
        <Col span={12}>
          <Form.Item
            name="accomplishmentScore"
            label="資歷分數"
            rules={[{ type: "number", min: 0, message: "請輸入正確數值" }]}
          >
            <InputNumber style={{ width: "100%" }} controls={false} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="petScore" label="寵物分數" rules={[{ type: "number", min: 0, message: "請輸入正確數值" }]}>
            <InputNumber style={{ width: "100%" }} controls={false} />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label="外觀" style={{ margin: 0 }} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
            <div className="tips" style={{ marginBottom: 10 }}>
              請填入數量，若有亮點外觀可於下方標籤處特別註明
            </div>
            <Flex style={{ width: "100%" }} gap={40}>
              <Form.Item name={["skinCountMap", CharacterEnum.SkinType.HAIR]} label="髮型">
                <InputNumber style={{ width: "100%" }} controls={false} suffix="單位" />
              </Form.Item>
              <Form.Item name={["skinCountMap", CharacterEnum.SkinType.BODY]} label="體型">
                <InputNumber style={{ width: "100%" }} controls={false} suffix="單位" />
              </Form.Item>
              <Form.Item name={["skinCountMap", CharacterEnum.SkinType.FACE]} label="臉型">
                <InputNumber style={{ width: "100%" }} controls={false} suffix="單位" />
              </Form.Item>
              <Form.Item name={["skinCountMap", CharacterEnum.SkinType.INTERACTION]} label="交互">
                <InputNumber style={{ width: "100%" }} controls={false} suffix="單位" />
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
