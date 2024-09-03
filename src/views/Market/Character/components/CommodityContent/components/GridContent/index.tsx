import { Col, Divider, Flex, Row, Tag } from "antd";
import { CharacterCommodity, TransactionItem } from "@/types";
import { TransactionEnum } from "@/enums";

import "./style.scss";
import { CurrencyConst, CharacterConst } from "@/consts";
import { getOptionsLabel } from "@/utils";
import InnerSkillTag from "../InnerSkillTag";

type GridContentProps = {
  transactionType: TransactionEnum.Type;
  item: TransactionItem<CharacterCommodity>;
};
export default function GridContent(props: GridContentProps) {
  const { transactionType, item } = props;
  const { commodity } = item;
  const currencyFormatter = new Intl.NumberFormat("zh-TW").format;

  return (
    <div className="commodity grid-content">
      {transactionType === TransactionEnum.Type.SALE && (
        <div className="sale-type">
          <img className="grid-content__image" src={commodity.imageList?.[0]} />
          <div className="grid-content__main">
            <Flex gap={4}>
              {commodity.innerSkillList.map((innerSkill) => (
                <InnerSkillTag key={innerSkill} innerSkill={innerSkill}></InnerSkillTag>
              ))}
            </Flex>
            <div className="price">
              {`${getOptionsLabel(commodity.price.currency, CurrencyConst.getTypeOptions())} ${currencyFormatter(
                commodity.price.value
              )}`}
            </div>
            <div className="text">
              <span>{getOptionsLabel(commodity.bodyTypeList[0], CharacterConst.getBodyTypeOptions())}</span>
              <Divider type="vertical" style={{ height: "100%", borderColor: "#bbb" }} />
              <span>{getOptionsLabel(commodity.campList[0], CharacterConst.getCampTypeOptions())}</span>
              <Divider type="vertical" style={{ height: "100%", borderColor: "#bbb" }} />
              <span>{commodity.level}等</span>
            </div>
          </div>
          <Row className="grid-content__tags" justify="center" gutter={[4, 4]}>
            {commodity.tags.slice(0, 3).map((tag) => (
              <Col key={tag}>
                <Tag>{tag}</Tag>
              </Col>
            ))}
          </Row>
        </div>
      )}
      {transactionType === TransactionEnum.Type.PURCHASE && (
        <div className="purchase-type">
          <div className="grid-content__main">
            <Flex gap="4px 6px" wrap="wrap-reverse" style={{ padding: "0 16px" }} justify="center">
              {commodity.innerSkillList
                .slice()
                .reverse()
                .map((innerSkill) => (
                  <InnerSkillTag key={innerSkill} innerSkill={innerSkill}></InnerSkillTag>
                ))}
            </Flex>
            <div className="price">
              {`${getOptionsLabel(commodity.price.currency, CurrencyConst.getTypeOptions())} ${currencyFormatter(
                commodity.price.value
              )}`}
            </div>
          </div>
          <div className="grid-content__divider" />
          <div className="grid-content__content">
            <div className="split-dot">
              {commodity.bodyTypeList.map((bodyType) => (
                <span key={bodyType}>{getOptionsLabel(bodyType, CharacterConst.getBodyTypeOptions())}</span>
              ))}
            </div>
            <Flex align="center">
              <div className="split-dot">
                {commodity.campList.map((camp) => (
                  <span key={camp}>{getOptionsLabel(camp, CharacterConst.getCampTypeOptions())}</span>
                ))}
              </div>
              <Divider type="vertical" style={{ height: "100%", borderColor: "#bbb" }} />
              <div className="split-dot">
                {commodity.gearScoreList
                  .map(({ type }) => type)
                  .map((type) => (
                    <span key={type}>{type}</span>
                  ))}
              </div>
            </Flex>
            <div className="split-dot">
              {Object.entries(commodity.info)
                .filter(([, active]) => active)
                .map(([status]) => (
                  <span key={status}>{getOptionsLabel(status, CharacterConst.getInfoTypeOptions())}</span>
                ))}
            </div>
          </div>
          <Row className="grid-content__tags" justify="center" gutter={[4, 4]}>
            {commodity.tags.slice(0, 3).map((tag) => (
              <Col key={tag}>
                <Tag>{tag}</Tag>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
}
