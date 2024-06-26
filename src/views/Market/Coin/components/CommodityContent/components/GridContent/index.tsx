import { Col, Flex, Row, Tag, Tooltip } from "antd";
import { TransactionItem } from "@/types";
import CoinImage from "@/assets/icon/coin.svg";
import { CurrencyEnum, TransactionEnum } from "@/enums";
import { CoinCommodity } from "@/views/Market/Coin";

import "./style.scss";

type GridContentProps = {
  transactionType: TransactionEnum.Type;
  item: TransactionItem<CoinCommodity>;
};
export default function GridContent(props: GridContentProps) {
  const { transactionType, item } = props;
  const { commodity } = item;
  const isSale = transactionType === TransactionEnum.Type.SALE;
  const currencyFormatter = new Intl.NumberFormat("zh-TW").format;

  return (
    <div className="coin grid-content">
      <div className="grid-content__main">
        <img className="image" src={CoinImage} />
        <div className="content">
          <div className="tip">{isSale ? "販賣" : "收購"}金幣</div>
          <div className="name">
            {`1${CurrencyEnum.Label[commodity.coinRatio.currency]} : ${currencyFormatter(commodity.coinRatio.value)}金`}
          </div>
        </div>
      </div>
      <div className="grid-content__divider" />
      <div className="grid-content__content">
        <Flex gap={8}>
          <span className="info__label">{isSale ? "庫存" : "需求"}</span>
          <span className="info__value">{currencyFormatter(commodity.amount)}金</span>
        </Flex>
        <Flex gap={8}>
          <span className="info__label">最低{isSale ? "購買" : "收購"}</span>
          <span className="info__value">
            {currencyFormatter(commodity.transMinLimit)}
            {CurrencyEnum.Label[commodity.coinRatio.currency]}
          </span>
        </Flex>
        <Tooltip
          placement="bottomLeft"
          color="#B6AB99"
          getPopupContainer={(triggerNode) => triggerNode.parentElement as HTMLElement}
          title={item.methods
            .map<React.ReactNode>((method) => <span key={method}>{TransactionEnum.MethodLabel[method]}</span>)
            .reduce((prev, curr) => [prev, <span className="decorate-dot" key={curr?.toString()} />, curr])}
        >
          <Flex gap={8}>
            <span className="info__label">交易方式</span>
            <span className="info__value">
              {item.methods.length > 2 ? (
                <>
                  {item.methods
                    .slice(0, 2)
                    .map<React.ReactNode>((method) => <span key={method}>{TransactionEnum.MethodLabel[method]}</span>)
                    .reduce((prev, curr) => [prev, <span className="decorate-dot" key={curr?.toString()} />, curr])}
                  ...
                </>
              ) : (
                item.methods
                  .map<React.ReactNode>((method) => <span key={method}>{TransactionEnum.MethodLabel[method]}</span>)
                  .reduce((prev, curr) => [prev, <span className="decorate-dot" key={curr?.toString()} />, curr])
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
