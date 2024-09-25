import { useEffect, useMemo } from "react";
import { App, Avatar, Checkbox, Col, Flex, Form, Image, Input, Row, Select, theme, Upload, UploadFile } from "antd";
import TextArea from "antd/es/input/TextArea";
import { UploadChangeParam } from "antd/es/upload";
import { PlusOutlined } from "@ant-design/icons";

import ImageEmpty from "@/assets/image_empty.svg";
import { SelectTag } from "@/components/BaseField";
import { CharacterConst } from "@/consts";

import "./style.scss";

export default function CharacterSaleCommodityForm() {
  const { message } = App.useApp();
  const { token } = theme.useToken();
  const [form] = Form.useForm();
  const currentSect = Form.useWatch("sect", form);
  const innerSkillOptions = useMemo(() => CharacterConst.getInnerSkillOptionsBySect(currentSect), [currentSect]);

  useEffect(() => {
    // Reset innerSkill when sect changes
    if (currentSect != null) {
      form.setFieldsValue({ innerSkill: undefined });
    }
  }, [currentSect, form]);

  const handleChangeImageUpload = (info: UploadChangeParam<UploadFile<unknown>>) => {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const handleDropImageUpload = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("Dropped files", e.dataTransfer.files);
  };

  return (
    <div className="character-sale-commodity-form">
      <Form form={form} labelAlign="left" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} colon={false}>
        <div className="sub-title">基本資料</div>
        <Row style={{ padding: "10px 20px" }} gutter={[5, 8]}>
          <Col span={12}>
            <Form.Item label="門派心法" required>
              <Flex gap={10}>
                <Form.Item name="sect" noStyle>
                  <Select style={{ width: 110 }} placeholder="選擇門派" options={CharacterConst.getSectOptions()} />
                </Form.Item>
                <Form.Item name="innerSkill" noStyle>
                  <Select style={{ width: 110 }} placeholder="選擇心法" options={innerSkillOptions} />
                </Form.Item>
              </Flex>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="體型" required>
              <SelectTag options={CharacterConst.getBodyTypeOptions()} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="陣營" required>
              <SelectTag options={CharacterConst.getCampTypeOptions()} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="等級" required>
              <Input style={{ width: 300 }} suffix="等" />
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
          <Col span={24}>
            <Upload.Dragger
              name="file"
              multiple={true}
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              onChange={handleChangeImageUpload}
              onDrop={handleDropImageUpload}
            >
              <Image src={ImageEmpty} height={96} width={96} preview={false} />
              <div className="upload-tip">
                <Flex gap={6} align="center" justify="center" className="upload-tip__title">
                  <Avatar style={{ backgroundColor: token.colorPrimary }} size="small" icon={<PlusOutlined />} />
                  拖放圖片到這裡
                </Flex>
                <div className="upload-tip__text">
                  可上載JPG檔案格式的圖片，建議使用500 x 500像素的圖片，最多7張，第一張圖片為預覽圖
                </div>
              </div>
            </Upload.Dragger>
          </Col>
        </Row>
        {innerSkillOptions.length > 0 && (
          <>
            <div className="sub-title">裝備分數</div>
            <Row style={{ padding: "10px 20px" }} gutter={[5, 8]}>
              <Col span={24}>
                <span className="tips">請選擇對應的心法與裝備類型填入裝分，若無則不必填寫</span>
              </Col>
              {innerSkillOptions.map((innerSkill) => (
                <>
                  <Col span={12} key={innerSkill.value + "_PVP"}>
                    <Form.Item
                      label={
                        <Flex style={{ width: "100%" }} justify="space-between">
                          <span>{innerSkill.label}</span>
                          <span>PVP</span>
                        </Flex>
                      }
                      labelCol={{ span: 8 }}
                      wrapperCol={{ span: 14 }}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={12} key={innerSkill.value + "_PVE"}>
                    <Form.Item
                      label={
                        <Flex style={{ width: "100%" }} justify="space-between">
                          <span>{innerSkill.label}</span>
                          <span>PVE</span>
                        </Flex>
                      }
                      labelCol={{ span: 8 }}
                      wrapperCol={{ span: 14 }}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </>
              ))}
            </Row>
          </>
        )}
        <div className="sub-title">副本·陣營·百戰·家園</div>
        <Row style={{ padding: "10px 20px" }} gutter={[5, 8]}>
          <Col span={12}>
            <Form.Item label="戰階分數">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item style={{ margin: 0 }} label="名劍段位" wrapperCol={{ span: 18 }}>
              <Flex gap={20}>
                <Form.Item label="2v2">
                  <Input />
                </Form.Item>
                <Form.Item label="3v3">
                  <Input />
                </Form.Item>
                <Form.Item label="5v5">
                  <Input />
                </Form.Item>
              </Flex>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="家園分數">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item style={{ margin: 0 }} label="百戰精耐" wrapperCol={{ span: 18 }}>
              <Flex gap={20}>
                <Form.Item label={<span className="label__energy">精</span>}>
                  <Input />
                </Form.Item>
                <Form.Item label={<span className="label__endurance">耐</span>}>
                  <Input />
                </Form.Item>
              </Flex>
            </Form.Item>
          </Col>
        </Row>
        <div className="sub-title">資歷·寵物·外觀·標籤·備註</div>
        <Row style={{ padding: "10px 20px" }} gutter={[5, 8]}>
          <Col span={12}>
            <Form.Item label="資歷分數" required>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="寵物分數" required>
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="外觀" style={{ margin: 0 }} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} required>
              <div className="tips" style={{ marginBottom: 10 }}>
                請填入數量，若有亮點外觀可於下方標籤處特別註明
              </div>
              <Flex style={{ width: "100%" }} gap={40}>
                <Form.Item label="髮型">
                  <Input suffix="單位" />
                </Form.Item>
                <Form.Item label="體型">
                  <Input suffix="單位" />
                </Form.Item>
                <Form.Item label="臉型">
                  <Input suffix="單位" />
                </Form.Item>
                <Form.Item label="交互">
                  <Input suffix="單位" />
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
