import { Col, Flex, Row, Tag } from "antd";
import dayjs from "dayjs";
import { TransactionItem } from "@/types";
import { AppearanceEnum, CurrencyEnum, TransactionEnum } from "@/enums";
import { AppearanceCommodity } from "@/views/Market/Appearance";
import CoatImage from "@/assets/icon/coat.svg";
import GiftBoxImage from "@/assets/icon/giftBox.svg";
import HairImage from "@/assets/icon/hair.svg";
import HangingPetImage from "@/assets/icon/hangingPet.svg";
import HarnessImage from "@/assets/icon/harness.svg";
import MountImage from "@/assets/icon/mount.svg";
import OtherImage from "@/assets/icon/other.svg";

import "./style.scss";

type CommodityContentProps = {
  transactionType: TransactionEnum.Type;
  item: TransactionItem<AppearanceCommodity>;
};
export default function CommodityContent(props: CommodityContentProps) {
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
    <div className="appearance list-content">
      <div className="list-content__main">
        <img className="image" src={categoryImageMap[commodity.category]} />
        <div className="content">
          <div className="content__tip">{isSale ? "販賣" : "收購"}金幣</div>
          <div className="content__name">{commodity.name}</div>
        </div>
      </div>
      <div className="list-content__content">
        <Flex gap={25} className="info">
          <div className="info__column">
            <Flex gap={8}>
              <span className="label">類型</span>
              <span className="value">{AppearanceEnum.Label[commodity.category]}</span>
            </Flex>
            <Flex gap={8}>
              <span className="label">{isSale ? "庫存數量" : "需求數量"}</span>
              <span className="value">{commodity.amount}</span>
            </Flex>
            <Flex gap={8}>
              <span className="label">交易方式</span>
              <span className="value">
                {item.methods
                  .map<React.ReactNode>((method) => <span key={method}>{TransactionEnum.MethodLabel[method]}</span>)
                  .reduce((prev, curr) => [prev, <span className="decorate-dot" key={curr?.toString()} />, curr])}
              </span>
            </Flex>
          </div>
          <div className="info__column">
            <Flex gap={8}>
              <span className="label">{isSale ? "賣家" : "買家"}</span>
              <span className="value">{item.postedBy.nickname}</span>
            </Flex>
            <Flex gap={8}>
              <span className="label">聯絡方式</span>
              <span className="value">
                {item.postedBy.contacts
                  .map<React.ReactNode>(({ name }) => <span key={name}>{name}</span>)
                  .reduce((prev, curr) => [prev, <span className="decorate-dot" key={curr?.toString()} />, curr])}
              </span>
            </Flex>
            <Flex gap={8}>
              <span className="label">更新時間</span>
              <span className="value">{dayjs(item.updatedAt).format("YYYY/MM/DD")}</span>
            </Flex>
          </div>
        </Flex>
        <Row className="tags" gutter={[4, 4]}>
          {commodity.tags.map((tag) => (
            <Col key={tag}>
              <Tag>{tag}</Tag>
            </Col>
          ))}
        </Row>
      </div>

      <div className="list-content__prize">
        <div className="currency">{CurrencyEnum.Label[commodity.price.currency]}</div>
        <div className="amount">{currencyFormatter(commodity.price.value)}</div>
      </div>
    </div>
  );
}
