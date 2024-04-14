import { Col, Flex, Row, Tag, Tooltip } from "antd";
import { CoinCommodity, TransactionItem } from "@/types";
import CoinImage from "@/assets/icon/coin.png";
import CardDividerImage from "@/assets/decorate/market-card_divider.svg";

import "./style.scss";
import { Currency, Transaction } from "@/enums";

type ItemCardProps = {
  className?: string;
  item: TransactionItem<CoinCommodity>;
};
export default function ItemCard(props: ItemCardProps) {
  const { item } = props;
  const { commodity } = item;
  console.log(item);
  return (
    <Flex className="item-card" justify="center" align="center" gap={5} vertical>
      <Flex className="item-card__main card-main" gap={5} align="center" vertical>
        <img className="card-main__image" src={CoinImage} />
        <div className="card-main__tip">販賣金幣</div>
        <div className="card-main__name">{`1${commodity.coinRatio.currency} : ${commodity.coinRatio.ratio}金`}</div>
      </Flex>
      <img src={CardDividerImage} />
      <Flex className="item-card__info" gap={8} vertical>
        <Flex gap={8}>
          <span className="card-info__label">庫存</span>
          <span className="card-info__value">{commodity.amount}金</span>
        </Flex>
        <Flex gap={8}>
          <span className="card-info__label">最低購買</span>
          <span className="card-info__value">
            {commodity.transMinLimit}
            {Currency.Label[commodity.coinRatio.currency]}
          </span>
        </Flex>
        <Flex gap={8}>
          <span className="card-info__label">交易方式</span>
          <span className="card-info__value">
            {item.methods.length > 2 ? (
              <Tooltip
                placement="bottom"
                color="#b6ab99"
                title={item.methods.map((method) => Transaction.MethodLabel[method]).join(" ")}
              >
                {item.methods
                  .slice(0, 2)
                  .map((method) => Transaction.MethodLabel[method])
                  .join(" ")}
                ...
              </Tooltip>
            ) : (
              item.methods.map((method) => Transaction.MethodLabel[method]).join(" ")
            )}
          </span>
        </Flex>
      </Flex>
      <Row className="item-card__tags" justify="center" gutter={[4, 4]}>
        {commodity.tags.slice(3).map((tag) => (
          <Col key={tag}>
            <Tag color="#e2d4bb">{tag}</Tag>
          </Col>
        ))}
      </Row>
    </Flex>
  );
}
