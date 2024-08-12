import { CurrencyConst, TransactionConst } from "@/consts";
import { TransactionEnum } from "@/enums";
import { TransactionItem } from "@/types";
import { getOptionsLabel } from "@/utils";
import { CoinCommodity } from "@/views/Market/Coin";
import { Col, Flex, Row, Tag } from "antd";

import "./style.scss";

type DetailContentProps = {
  item: TransactionItem<CoinCommodity>;
};
export default function DetailContent(props: DetailContentProps) {
  const { item } = props;
  const { type: transactionType, commodity } = item;
  const isSale = transactionType === TransactionEnum.Type.SALE;
  const currencyFormatter = new Intl.NumberFormat("zh-TW").format;

  return (
    <Flex className="detail-content coin" style={{ padding: "4px 0" }} gap={10} vertical>
      <Flex gap={8}>
        <span className="detail-content__label">{isSale ? "庫存" : "需求"}</span>
        <span className="detail-content__value">{currencyFormatter(commodity.amount)}金</span>
      </Flex>
      <Flex gap={8}>
        <span className="detail-content__label">最低{isSale ? "購買" : "收購"}</span>
        <span className="detail-content__value">
          {currencyFormatter(commodity.transMinLimit)}
          {getOptionsLabel(commodity.coinRatio.currency, CurrencyConst.getTypeOptions())}
        </span>
      </Flex>
      <Flex gap={8}>
        <span className="detail-content__label">交易方式</span>
        <span className="detail-content__value">
          <div className="split-dot">
            {item.methods.map<React.ReactNode>((method) => (
              <span key={method}>{getOptionsLabel(method, TransactionConst.getMethodOptions())}</span>
            ))}
          </div>
        </span>
      </Flex>
      <Row className="detail-content__tags" gutter={[4, 4]}>
        {item.commodity.tags.map((tag) => (
          <Col key={tag}>
            <Tag>{tag}</Tag>
          </Col>
        ))}
      </Row>
    </Flex>
  );
}
