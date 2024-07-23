// import { Col, Flex, Row, Tag } from "antd";
// import dayjs from "dayjs";
// import { TransactionItem } from "@/types";
// import { AppearanceEnum, TransactionEnum } from "@/enums";
// import { CharacterCommodity } from "@/views/Market/Character";

import "./style.scss";
// import { AppearanceConst, CurrencyConst, TransactionConst } from "@/consts";
// import { getOptionsLabel } from "@/utils";

// type CommodityContentProps = {
//   transactionType: TransactionEnum.Type;
//   item: TransactionItem<CharacterCommodity>;
// };
export default function CommodityContent() {
  // const { transactionType, item } = props;
  // const { commodity } = item;
  // const isSale = transactionType === TransactionEnum.Type.SALE;
  // const currencyFormatter = new Intl.NumberFormat("zh-TW").format;

  return (
    <div className="commodity list-content">
      {/* <div className="list-content__main">
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
              <span className="value">{getOptionsLabel(commodity.category, AppearanceConst.getTypeOptions())}</span>
            </Flex>
            <Flex gap={8}>
              <span className="label">{isSale ? "庫存數量" : "需求數量"}</span>
              <span className="value">{commodity.amount}</span>
            </Flex>
            <Flex gap={8}>
              <span className="label">交易方式</span>
              <span className="value">
                {item.methods
                  .map<React.ReactNode>((method) => (
                    <span key={method}>{getOptionsLabel(method, TransactionConst.getMethodOptions())}</span>
                  ))
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
        <div className="currency">{getOptionsLabel(commodity.price.currency, CurrencyConst.getTypeOptions())}</div>
        <div className="amount">{currencyFormatter(commodity.price.value)}</div>
      </div> */}
    </div>
  );
}
