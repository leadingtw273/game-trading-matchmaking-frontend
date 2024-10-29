import axios from "axios";
import classNames from "classnames";
import { useState } from "react";
import { App, Avatar, Button, Flex, Image, Spin, theme, UploadProps } from "antd";
import Upload, { UploadChangeParam, UploadFile } from "antd/es/upload";
import { CloseOutlined, LoadingOutlined, PlusOutlined } from "@ant-design/icons";

import ImageEmpty from "@/assets/icon/empty_image.svg";
import { ImgurResponse } from "@/types";

import "./style.scss";

const IMGUR_CLIENT_ID = "1a22d08802813be";

const { Dragger: UploadDragger } = Upload<ImgurResponse>;

type UploadCharacterImageProps = {
  value?: UploadFile<ImgurResponse>[];
  onChange?: (value: UploadFile<ImgurResponse>[]) => void;
};
export default function UploadCharacterImage(props: UploadCharacterImageProps) {
  const { value: fileList = [], onChange } = props;
  const { message } = App.useApp();
  const { token } = theme.useToken();
  const [previewImageList, setPreviewImageList] = useState<UploadFile<ImgurResponse>[]>([]);
  const hasPreviewImages = previewImageList.length > 0;

  const UploadImageRequest: UploadProps<ImgurResponse>["customRequest"] = async ({ file, onSuccess, onError }) => {
    if (fileList.filter(({ status }) => status === "done").length >= 7) {
      message.error("最多只能上傳7張圖片");
      return;
    }

    try {
      const response = await axios.post<ImgurResponse>(
        "https://api.imgur.com/3/image",
        {
          image: file,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Client-ID ${IMGUR_CLIENT_ID}`,
          },
        }
      );

      message.success("圖片上傳成功");
      onSuccess?.(response.data, file);
    } catch (error) {
      if (error instanceof Error) {
        message.error("圖片上傳失敗");
        onError?.(error);
      }
    }
  };

  const handleUploadChange = (info: UploadChangeParam<UploadFile<ImgurResponse>>) => {
    onChange?.(info.fileList);
    setPreviewImageList(info.fileList);
  };

  const handleClickDeleteImage = (uid: string) => {
    onChange?.(fileList.filter((file) => file.uid !== uid));
    setPreviewImageList((prev) => prev.filter((file) => file.uid !== uid));
  };

  return (
    <div className="upload-character-image">
      {hasPreviewImages && (
        <Flex style={{ marginBottom: 5, padding: "0 6px" }} gap={4}>
          {previewImageList.map((file) => (
            <Flex
              key={file.uid}
              className={classNames("preview-card", file.status === "error" && "error")}
              align="center"
              justify="center"
            >
              {(file.status === "done" || file.status === "error") && (
                <>
                  <Button
                    className="preview-card__delete"
                    shape="circle"
                    icon={<CloseOutlined />}
                    onClick={() => handleClickDeleteImage(file.uid)}
                  />
                  <Image
                    className="preview-card__image"
                    src={file.status !== "error" ? file.response?.data.link : ImageEmpty}
                    preview={false}
                    style={{ marginRight: 10 }}
                  />
                </>
              )}
              {file.status === "uploading" && <Spin indicator={<LoadingOutlined spin />} size="large" />}
            </Flex>
          ))}
        </Flex>
      )}
      <UploadDragger
        name="file"
        showUploadList={false}
        maxCount={7}
        fileList={fileList}
        className={classNames("upload-dragger", hasPreviewImages && "has-preview")}
        customRequest={UploadImageRequest}
        onChange={handleUploadChange}
        multiple
      >
        {!hasPreviewImages && <Image src={ImageEmpty} height={96} width={96} preview={false} />}
        <div className="upload-tip">
          <Flex gap={6} align="center" justify="center" className="upload-tip__title">
            <Avatar style={{ backgroundColor: token.colorPrimary }} size="small" icon={<PlusOutlined />} />
            拖放圖片到這裡
          </Flex>
          <div className="upload-tip__text">
            可上載JPG檔案格式的圖片，建議使用500 x 500像素的圖片，最多7張，第一張圖片為預覽圖
          </div>
        </div>
      </UploadDragger>
    </div>
  );
}
