import { AppearanceConst, TransactionConst } from "@/consts";
import { TransactionEnum } from "@/enums";
import { AppearanceCommodity, TransactionItem } from "@/types";
import { getOptionsLabel } from "@/utils";
import { Col, Flex, Row, Tag } from "antd";

import "./style.scss";

type DetailContentProps = {
  item: TransactionItem<AppearanceCommodity>;
};
export default function DetailContent(props: DetailContentProps) {
  const { item } = props;
  const { type: transactionType, commodity } = item;
  const isSale = transactionType === TransactionEnum.Type.SALE;

  return (
    <Flex className="detail-content appearance" style={{ padding: "4px 0" }} gap={10} vertical>
      <Flex gap={8}>
        <span className="detail-content__label">外觀類型</span>
        <span className="detail-content__value">
          {getOptionsLabel(commodity.category, AppearanceConst.getTypeOptions())}
        </span>
      </Flex>
      <Flex gap={8}>
        <span className="detail-content__label">{isSale ? "庫存數量" : "需求數量"}</span>
        <span className="detail-content__value">{commodity.amount}</span>
      </Flex>
      <Flex gap={8}>
        <span className="detail-content__label">交易方式</span>
        <span className="detail-content__value">
          <div className="split-dot">
            {item.methods.map((method) => (
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
