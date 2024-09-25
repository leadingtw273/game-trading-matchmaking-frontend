import { useNavigate } from "react-router-dom";
import { App, Button, Col, Form, Input, Row, Select } from "antd";

import { CurrencyConst } from "@/consts";
import { CurrencyEnum } from "@/enums";

type FormValues = {
  currency: CurrencyEnum.Type;
  ratio: string;
};

export default function FormCoin() {
  const navigate = useNavigate();
  const { message } = App.useApp();

  const handleSubmit = (values: FormValues) => {
    try {
      if (values.currency == null) throw new Error("請選擇幣種");
      if (values.ratio == null || values.ratio === "") throw new Error("請輸入幣值");

      navigate(`/market/coin`, { state: values });
    } catch (error) {
      if (error instanceof Error)
        message.open({
          type: "warning",
          content: error.message,
        });
    }
  };

  return (
    <Form<FormValues> name="coinForm" onFinish={handleSubmit}>
      <Row gutter={[16, 24]} justify="center">
        <Col span={12}>
          <Form.Item name="currency" noStyle>
            <Select options={CurrencyConst.getTypeOptions()} placeholder="幣種" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="ratio" noStyle>
            <Input placeholder="幣值" />
          </Form.Item>
        </Col>
        <Col>
          <Button type="text" htmlType="submit">
            搜尋
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
