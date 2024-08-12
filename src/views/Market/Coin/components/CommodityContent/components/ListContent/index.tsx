import { Col, Flex, Row, Tag } from "antd";
import dayjs from "dayjs";
import { TransactionItem } from "@/types";
import CoinImage from "@/assets/icon/coin.svg";
import { TransactionEnum } from "@/enums";
import { CoinCommodity } from "@/views/Market/Coin";

import "./style.scss";
import { getOptionsLabel } from "@/utils";
import { ContactInfoConst, CurrencyConst, TransactionConst } from "@/consts";

type CommodityContentProps = {
  transactionType: TransactionEnum.Type;
  item: TransactionItem<CoinCommodity>;
};
export default function CommodityContent(props: CommodityContentProps) {
  const { transactionType, item } = props;
  const { commodity } = item;
  const isSale = transactionType === TransactionEnum.Type.SALE;
  const currencyFormatter = new Intl.NumberFormat("zh-TW").format;

  return (
    <div className="coin list-content">
      <div className="list-content__main">
        <img className="image" src={CoinImage} />
        <div className="content">
          <div className="content__tip">{isSale ? "販賣" : "收購"}金幣</div>
          <div className="content__name">
            {`1${getOptionsLabel(commodity.coinRatio.currency, CurrencyConst.getTypeOptions())} : ${currencyFormatter(
              commodity.coinRatio.value
            )}金`}
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
                {getOptionsLabel(commodity.coinRatio.currency, CurrencyConst.getTypeOptions())}
              </span>
            </Flex>
            <Flex gap={8}>
              <span className="label">交易方式</span>
              <span className="value split-dot">
                {item.methods.map((method) => (
                  <span key={method}>{getOptionsLabel(method, TransactionConst.getMethodOptions())}</span>
                ))}
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
              <span className="value split-dot">
                {item.postedBy.contacts.map(({ name }) => (
                  <span key={name}>{getOptionsLabel(name, ContactInfoConst.getTypeOptions())}</span>
                ))}
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
