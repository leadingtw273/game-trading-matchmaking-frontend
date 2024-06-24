import { Col, Flex, Row, Tag } from "antd";
import dayjs from "dayjs";
import { CoinCommodity, TransactionItem } from "@/types";
import CoinImage from "@/assets/icon/coin.svg";
import { Currency, Transaction } from "@/enums";

import "./style.scss";

type CommodityContentProps = {
  transactionType: Transaction.Type;
  item: TransactionItem<CoinCommodity>;
};
export default function CommodityContent(props: CommodityContentProps) {
  const { transactionType, item } = props;
  const { commodity } = item;
  const isSale = transactionType === Transaction.Type.SALE;
  const currencyFormatter = new Intl.NumberFormat("zh-TW").format;

  return (
    <div className="list-content">
      <div className="list-content__main">
        <img className="image" src={CoinImage} />
        <div className="content">
          <div className="content__tip">{isSale ? "販賣" : "收購"}金幣</div>
          <div className="content__name">
            {`1${Currency.Label[commodity.coinRatio.currency]} : ${currencyFormatter(commodity.coinRatio.ratio)}金`}
          </div>
        </div>
      </div>
      <div className="list-content__content">
        <Flex gap={25} className="info">
          <div className="info__column">
            <Flex gap={8}>
              <span className="label">{isSale ? "庫存" : "需求"}</span>
              <span className="value">{currencyFormatter(commodity.amount)}金</span>
            </Flex>
            <Flex gap={8}>
              <span className="label">最低{isSale ? "購買" : "收購"}</span>
              <span className="value">
                {currencyFormatter(commodity.transMinLimit)}
                {Currency.Label[commodity.coinRatio.currency]}
              </span>
            </Flex>
            <Flex gap={8}>
              <span className="label">交易方式</span>
              <span className="value">
                {item.methods
                  .map<React.ReactNode>((method) => <span key={method}>{Transaction.MethodLabel[method]}</span>)
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
    </div>
  );
}
