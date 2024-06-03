import { Col, Flex, Row, Tag, Tooltip } from "antd";
import dayjs from "dayjs";
import { CoinCommodity, TransactionItem } from "@/types";
import CoinImage from "@/assets/icon/coin.svg";
import { Currency, TableDisplayMode, Transaction } from "@/enums";

type ItemCardProps = {
  mode: TableDisplayMode;
  item: TransactionItem<CoinCommodity>;
};
export default function ItemCard(props: ItemCardProps) {
  const { mode, item } = props;
  const { commodity } = item;
  const isListMode = mode === TableDisplayMode.LIST;
  const isSale = item.type === Transaction.Type.SALE;
  const currencyFormatter = new Intl.NumberFormat("zh-TW").format;

  const renderGridContent = () => (
    <div className="item-card mode-grid">
      <div className="item-card__main">
        <div className="card-main">
          <img className="card-main__image" src={CoinImage} />
          <div className="card-main__content">
            <div className="card-main__tip">{isSale ? "販賣" : "收購"}金幣</div>
            <div className="card-main__name">
              {`1${Currency.Label[commodity.coinRatio.currency]} : ${currencyFormatter(commodity.coinRatio.ratio)}金`}
            </div>
          </div>
        </div>
      </div>
      <div className="item-card__divider" />
      <div className="item-card__content">
        <div className="card-content">
          <Flex gap={25} className="card-content__wrapper">
            <div className="card-content__info">
              <Flex gap={8}>
                <span className="info__label">{isSale ? "庫存" : "需求"}</span>
                <span className="info__value">{currencyFormatter(commodity.amount)}金</span>
              </Flex>
              <Flex gap={8}>
                <span className="info__label">最低{isSale ? "購買" : "收購"}</span>
                <span className="info__value">
                  {currencyFormatter(commodity.transMinLimit)}
                  {Currency.Label[commodity.coinRatio.currency]}
                </span>
              </Flex>
              <Tooltip
                placement="bottomLeft"
                color="#B6AB99"
                getPopupContainer={(triggerNode) => triggerNode.parentElement as HTMLElement}
                title={item.methods
                  .map<React.ReactNode>((method) => <span key={method}>{Transaction.MethodLabel[method]}</span>)
                  .reduce((prev, curr) => [prev, <span className="decorate-dot" key={curr?.toString()} />, curr])}
              >
                <Flex gap={8}>
                  <span className="info__label">交易方式</span>
                  <span className="info__value">
                    {item.methods.length > 2 ? (
                      <>
                        {item.methods
                          .slice(0, 2)
                          .map<React.ReactNode>((method) => <span key={method}>{Transaction.MethodLabel[method]}</span>)
                          .reduce((prev, curr) => [
                            prev,
                            <span className="decorate-dot" key={curr?.toString()} />,
                            curr,
                          ])}
                        ...
                      </>
                    ) : (
                      item.methods
                        .map<React.ReactNode>((method) => <span key={method}>{Transaction.MethodLabel[method]}</span>)
                        .reduce((prev, curr) => [prev, <span className="decorate-dot" key={curr?.toString()} />, curr])
                    )}
                  </span>
                </Flex>
              </Tooltip>
            </div>
          </Flex>
        </div>
      </div>

      <Row className="item-card__tags" justify="center" gutter={[4, 4]}>
        {commodity.tags.slice(0, 3).map((tag) => (
          <Col key={tag}>
            <Tag>{tag}</Tag>
          </Col>
        ))}
      </Row>
    </div>
  );

  const renderListContent = () => (
    <div className="item-card mode-list">
      <div className="item-card__main">
        <div className="card-main">
          <img className="card-main__image" src={CoinImage} />
          <div className="card-main__content">
            <div className="card-main__tip">{isSale ? "販賣" : "收購"}金幣</div>
            <div className="card-main__name">
              {`1${Currency.Label[commodity.coinRatio.currency]} : ${currencyFormatter(commodity.coinRatio.ratio)}金`}
            </div>
          </div>
        </div>
      </div>
      <div className="item-card__content">
        <div className="card-content">
          <Flex gap={25} className="card-content__wrapper">
            <div className="card-content__info">
              <Flex gap={8}>
                <span className="info__label">{isSale ? "庫存" : "需求"}</span>
                <span className="info__value">{currencyFormatter(commodity.amount)}金</span>
              </Flex>
              <Flex gap={8}>
                <span className="info__label">最低{isSale ? "購買" : "收購"}</span>
                <span className="info__value">
                  {currencyFormatter(commodity.transMinLimit)}
                  {Currency.Label[commodity.coinRatio.currency]}
                </span>
              </Flex>
              <Flex gap={8}>
                <span className="info__label">交易方式</span>
                <span className="info__value">
                  {item.methods
                    .map<React.ReactNode>((method) => <span key={method}>{Transaction.MethodLabel[method]}</span>)
                    .reduce((prev, curr) => [prev, <span className="decorate-dot" key={curr?.toString()} />, curr])}
                </span>
              </Flex>
            </div>
            <div className="card-content__info">
              <Flex gap={8}>
                <span className="info__label">{isSale ? "賣家" : "買家"}</span>
                <span className="info__value">{item.postedBy.nickname}</span>
              </Flex>
              <Flex gap={8}>
                <span className="info__label">聯絡方式</span>
                <span className="info__value">
                  {item.postedBy.contacts
                    .map<React.ReactNode>(({ name }) => <span key={name}>{name}</span>)
                    .reduce((prev, curr) => [prev, <span className="decorate-dot" key={curr?.toString()} />, curr])}
                </span>
              </Flex>
              <Flex gap={8}>
                <span className="info__label">更新時間</span>
                <span className="info__value">{dayjs(item.updatedAt).format("YYYY/MM/DD")}</span>
              </Flex>
            </div>
          </Flex>
          <Row className="card-content__tags" gutter={[4, 4]}>
            {commodity.tags.map((tag) => (
              <Col key={tag}>
                <Tag>{tag}</Tag>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );

  return isListMode ? renderListContent() : renderGridContent();
}
