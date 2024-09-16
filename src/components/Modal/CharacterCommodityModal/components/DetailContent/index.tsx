import { Col, Flex, Row, Tag } from "antd";

import { CharacterConst, TransactionConst } from "@/consts";
import { CharacterCommodity, TransactionItem } from "@/types";
import { getOptionsLabel } from "@/utils";

import "./style.scss";

type DetailContentProps = {
  item: TransactionItem<CharacterCommodity>;
};
export default function DetailContent(props: DetailContentProps) {
  const { item } = props;
  const { commodity } = item;

  return (
    <Flex className="detail-content appearance" style={{ padding: "4px 0" }} gap={10} vertical>
      <Flex gap={8}>
        <span className="detail-content__label">收購體型</span>
        <span className="detail-content__value">
          <div className="split-dot">
            {commodity.bodyTypeList.map((bodyType) => (
              <span key={bodyType}>{getOptionsLabel(bodyType, CharacterConst.getBodyTypeOptions())}</span>
            ))}
          </div>
        </span>
      </Flex>
      <Flex gap={8}>
        <span className="detail-content__label">陣營</span>
        <span className="detail-content__value">
          <div className="split-dot">
            {commodity.campList.map((camp) => (
              <span key={camp}>{getOptionsLabel(camp, CharacterConst.getCampTypeOptions())}</span>
            ))}
          </div>
        </span>
      </Flex>
      <Flex gap={8}>
        <span className="detail-content__label">裝備</span>
        <span className="detail-content__value">
          <div className="split-dot">
            {commodity.gearScoreList.map((gearScore) => (
              <span key={gearScore.type + "_" + gearScore.score}>
                {gearScore.type} 裝分{Math.floor(gearScore.score / 10000)}W+
              </span>
            ))}
          </div>
        </span>
      </Flex>
      <Flex gap={8}>
        <span className="detail-content__label">角色狀態</span>
        <span className="detail-content__value">
          <div className="split-dot">
            {Object.entries(commodity.info)
              .filter(([, active]) => active)
              .map(([status]) => (
                <span key={status}>{getOptionsLabel(status, CharacterConst.getInfoTypeOptions())}</span>
              ))}
          </div>
        </span>
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
