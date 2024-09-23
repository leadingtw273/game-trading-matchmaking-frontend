import { Checkbox, Col, Form, Input, Row } from "antd";

import "./style.scss";

export default function PosterInfoForm() {
  return (
    <div className="poster-info-form">
      <Form labelAlign="left" labelCol={{ span: 6 }} wrapperCol={{ span: 12 }} colon={false}>
        <Row gutter={[5, 12]}>
          <Col span={24}>
            <Checkbox style={{ margin: 10 }}>記住資料下次自動套入</Checkbox>
          </Col>
          <Col span={24}>
            <span className="label">基本資料</span>
          </Col>
          <Col span={12}>
            <Form.Item label="名稱" required>
              <Input placeholder="請輸入顯示名稱" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="遊戲 ID" required>
              <Input placeholder="請輸入遊戲內 ID" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <span className="label">連絡方式</span>
          </Col>
          <Col span={12}>
            <Form.Item label="Discord" required>
              <Input placeholder="請輸入 Discord ID" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Line ID" required>
              <Input placeholder="請輸入 Line ID" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Facebook" required>
              <Input placeholder="請輸入 Facebook 名稱" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
