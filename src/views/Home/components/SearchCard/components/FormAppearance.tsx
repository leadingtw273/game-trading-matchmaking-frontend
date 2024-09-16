import { useNavigate } from "react-router-dom";
import { Button, Col, Form, Input, message, Row, Select } from "antd";

import { AppearanceConst } from "@/consts";
import { AppearanceEnum } from "@/enums";

type FormValues = {
  type: AppearanceEnum.Type;
  name: string;
};

export default function FormAppearance() {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const handleSubmit = (values: FormValues) => {
    try {
      if (values.type == null && (values.name == null || values.name === "")) throw new Error("請輸入條件");

      navigate(`/market/appearance`, { state: values });
    } catch (error) {
      if (error instanceof Error)
        messageApi.open({
          type: "warning",
          content: error.message,
        });
    }
  };

  return (
    <Form<FormValues> name="appearanceForm" onFinish={handleSubmit}>
      <Row gutter={[16, 24]} justify="center">
        <Col span={12}>
          <Form.Item name="type" noStyle>
            <Select options={AppearanceConst.getTypeOptions()} placeholder="外觀類型" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="name" noStyle>
            <Input placeholder="外觀名稱" />
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
