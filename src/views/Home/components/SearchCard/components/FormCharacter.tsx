import { CharacterConst } from "@/consts";
import { CharacterEnum } from "@/enums";
import { Button, Col, Form, message, Row, Select } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type FormValues = {
  sect: CharacterEnum.SectType;
  innerSkill: CharacterEnum.InnerSkillType;
  bodyType: CharacterEnum.BodyType;
};

export default function FormCharacter() {
  const [form] = Form.useForm();
  const currentSect = Form.useWatch("sect", form);
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    // Reset innerSkill when sect changes
    form.setFieldsValue({ innerSkill: undefined });
  }, [currentSect, form]);

  const handleSubmit = (values: FormValues) => {
    try {
      if (values.sect == null && values.innerSkill == null && values.bodyType == null) throw new Error("請輸入條件");

      navigate(`/market/character`, { state: { ...values, bodyType: [values.bodyType] } });
    } catch (error) {
      if (error instanceof Error)
        messageApi.open({
          type: "warning",
          content: error.message,
        });
    }
  };

  return (
    <Form<FormValues> name="characterForm" form={form} onFinish={handleSubmit}>
      <Row gutter={[16, 24]} justify="center">
        <Col span={8}>
          <Form.Item name="sect" noStyle>
            <Select options={CharacterConst.getSectOptions()} placeholder="門派" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="innerSkill" noStyle shouldUpdate>
            <Select options={CharacterConst.getInnerSkillOptionsBySect(currentSect)} placeholder="心法" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="bodyType" noStyle>
            <Select options={CharacterConst.getBodyTypeOptions()} placeholder="體型" />
          </Form.Item>
        </Col>
        <Col>
          <Button type="text" htmlType="submit">
            搜尋
          </Button>
        </Col>
      </Row>
      {contextHolder}
    </Form>
  );
}
