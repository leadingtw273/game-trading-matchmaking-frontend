import { Col, Flex, Row, Tag, Tooltip } from "antd";

import CoatImage from "@/assets/icon/appearance/coat.svg";
import GiftBoxImage from "@/assets/icon/appearance/giftBox.svg";
import HairImage from "@/assets/icon/appearance/hair.svg";
import HangingPetImage from "@/assets/icon/appearance/hangingPet.svg";
import HarnessImage from "@/assets/icon/appearance/harness.svg";
import MountImage from "@/assets/icon/appearance/mount.svg";
import OtherImage from "@/assets/icon/appearance/other.svg";
import { AppearanceConst, CurrencyConst, TransactionConst } from "@/consts";
import { AppearanceEnum, TransactionEnum } from "@/enums";
import { AppearanceCommodity, TransactionItem } from "@/types";
import { getOptionsLabel } from "@/utils";

import "./style.scss";

type GridContentProps = {
  transactionType: TransactionEnum.Type;
  item: TransactionItem<AppearanceCommodity>;
};
export default function GridContent(props: GridContentProps) {
  const { transactionType, item } = props;
  const { commodity } = item;
  const isSale = transactionType === TransactionEnum.Type.SALE;
  const currencyFormatter = new Intl.NumberFormat("zh-TW").format;

  const categoryImageMap = {
    [AppearanceEnum.Type.GIFT_BOX]: GiftBoxImage,
    [AppearanceEnum.Type.CLOAK]: CoatImage,
    [AppearanceEnum.Type.COAT]: CoatImage,
    [AppearanceEnum.Type.HAIR]: HairImage,
    [AppearanceEnum.Type.HARNESS]: HarnessImage,
    [AppearanceEnum.Type.MOUNT]: MountImage,
    [AppearanceEnum.Type.HANGING_PET]: HangingPetImage,
    [AppearanceEnum.Type.OTHER]: OtherImage,
  };

  return (
    <div className="appearance grid-content">
      <div className="grid-content__main">
        <img className="image" src={categoryImageMap[commodity.category]} />
        <div className="content">
          <div className="tip">{isSale ? "販賣" : "收購"}外觀</div>
          <div className="name">{commodity.name}</div>
          <div className="price">
            {`${getOptionsLabel(commodity.price.currency, CurrencyConst.getTypeOptions())} ${currencyFormatter(
              commodity.price.value
            )}`}
          </div>
        </div>
      </div>
      <div className="grid-content__divider" />
      <div className="grid-content__content">
        <Flex gap={8}>
          <span className="info__label">類型</span>
          <span className="info__value">{getOptionsLabel(commodity.category, AppearanceConst.getTypeOptions())}</span>
        </Flex>
        <Tooltip
          placement="bottomLeft"
          color="#B6AB99"
          getPopupContainer={(triggerNode) => triggerNode.parentElement as HTMLElement}
          title={
            <div className="split-dot">
              {item.methods.map((method) => (
                <span key={method}>{getOptionsLabel(method, TransactionConst.getMethodOptions())}</span>
              ))}
            </div>
          }
        >
          <Flex gap={8}>
            <span className="info__label">交易方式</span>
            <span className="info__value">
              {item.methods.length > 2 ? (
                <div className="split-dot">
                  {item.methods.slice(0, 2).map((method) => (
                    <span key={method}>{getOptionsLabel(method, TransactionConst.getMethodOptions())}</span>
                  ))}
                  ...
                </div>
              ) : (
                <div className="split-dot">
                  {item.methods.map((method) => (
                    <span key={method}>{getOptionsLabel(method, TransactionConst.getMethodOptions())}</span>
                  ))}
                </div>
              )}
            </span>
          </Flex>
        </Tooltip>
      </div>

      <Row className="grid-content__tags" justify="center" gutter={[4, 4]}>
        {commodity.tags.slice(0, 3).map((tag) => (
          <Col key={tag}>
            <Tag>{tag}</Tag>
          </Col>
        ))}
      </Row>
    </div>
  );
}
