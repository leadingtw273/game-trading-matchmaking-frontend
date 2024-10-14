import { Checkbox, Col, Flex, Form, FormInstance, Input, Row } from "antd";

import { ContactInfoEnum } from "@/enums";

import "./style.scss";

export type PosterInfoFormValues = {
  storeData: boolean;
  nickname?: string;
  gameId?: string;
  contacts: { name: ContactInfoEnum.Type; value?: string }[];
};

export type PosterInfoValidFormProps = PosterInfoFormValues & {
  nickname: string;
  gameId: string;
};

interface IPosterInfoFormProps {
  form: FormInstance<PosterInfoFormValues>;
}
export default function PosterInfoForm(props: IPosterInfoFormProps) {
  const { form } = props;

  return (
    <Form
      name="poster-info-form"
      form={form}
      style={{ padding: "10px 20px" }}
      labelAlign="left"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 12 }}
      colon={false}
      requiredMark={(label, { required }) => (
        <>
          {label}
          {required && <span style={{ color: "red", marginLeft: 3 }}>*</span>}
        </>
      )}
    >
      <Form.Item name="storeData" valuePropName="checked" initialValue={true} noStyle>
        <Checkbox style={{ margin: 10 }}>記住資料下次自動套入</Checkbox>
      </Form.Item>
      <div className="label">基本資料</div>
      <Row gutter={[0, 24]} style={{ padding: 12 }}>
        <Col span={12}>
          <Form.Item name="nickname" label="名稱" rules={[{ required: true, message: "請輸入顯示名稱" }]} required>
            <Input placeholder="請輸入顯示名稱" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="gameId" label="遊戲 ID" rules={[{ required: true, message: "請輸入遊戲ID" }]} required>
            <Input placeholder="請輸入遊戲內 ID" />
          </Form.Item>
        </Col>
      </Row>
      <Form.List
        name="contacts"
        initialValue={[
          { name: ContactInfoEnum.Type.DISCORD },
          { name: ContactInfoEnum.Type.LINE },
          { name: ContactInfoEnum.Type.FACEBOOK },
        ]}
        rules={[
          {
            validator: async (_, values: PosterInfoFormValues["contacts"]) => {
              if (values.filter(({ value }) => value && value !== "").length < 1)
                return Promise.reject(new Error("(至少輸入一個連絡方式)"));
            },
          },
        ]}
      >
        {(_fields, _operation, { errors }) => (
          <>
            <Flex>
              <div className="label" style={{ marginRight: 10 }}>
                連絡方式
              </div>
              <Form.ErrorList className="tip_contacts-error" errors={errors} />
            </Flex>
            <Row gutter={[0, 24]} style={{ padding: 12 }}>
              <Col span={12}>
                <Form.Item name={[0, "value"]} label="Discord">
                  <Input placeholder="請輸入 Discord ID" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name={[1, "value"]} label="Line ID">
                  <Input placeholder="請輸入 Line ID" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name={[2, "value"]} label="Facebook">
                  <Input placeholder="請輸入 Facebook 名稱" />
                </Form.Item>
              </Col>
            </Row>
          </>
        )}
      </Form.List>
    </Form>
  );
}
