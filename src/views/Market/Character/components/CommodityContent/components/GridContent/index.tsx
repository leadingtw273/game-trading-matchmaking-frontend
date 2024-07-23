import { Col, Divider, Flex, Row, Tag } from "antd";
import { TransactionItem } from "@/types";
import { TransactionEnum } from "@/enums";
import { CharacterCommodity } from "@/views/Market/Character";

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
        <>
          <img className="grid-content__image" src={commodity.imageList[0]} />
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
              <span>{commodity.level}</span>
            </div>
          </div>
          <Row className="grid-content__tags" justify="center" gutter={[4, 4]}>
            {commodity.tags.slice(0, 3).map((tag) => (
              <Col key={tag}>
                <Tag>{tag}</Tag>
              </Col>
            ))}
          </Row>
        </>
      )}
      {/* <div className="grid-content__main">
        <img className="image" src={categoryImageMap[commodity.category]} />
        <div className="content">
          <div className="tip">{isSale ? "販賣" : "收購"}外觀</div>
          <div className="name">{commodity.name}</div>
          <div className="price">
            {`${getOptionsLabel(commodity.price.currency, CurrencyConst.getTypeOptions())} ${currencyFormatter(
              commodity.price.value
            )}`}
          </div>
        </div>
      </div> */}
      {/* <div className="grid-content__divider" /> */}
      {/* <div className="grid-content__content">
        <Flex gap={8}>
          <span className="info__label">類型</span>
          <span className="info__value">{getOptionsLabel(commodity.category, AppearanceConst.getTypeOptions())}</span>
        </Flex>
        <Tooltip
          placement="bottomLeft"
          color="#B6AB99"
          getPopupContainer={(triggerNode) => triggerNode.parentElement as HTMLElement}
          title={item.methods
            .map<React.ReactNode>((method) => (
              <span key={method}>{getOptionsLabel(method, TransactionConst.getMethodOptions())}</span>
            ))
            .reduce((prev, curr) => [prev, <span className="decorate-dot" key={curr?.toString()} />, curr])}
        >
          <Flex gap={8}>
            <span className="info__label">交易方式</span>
            <span className="info__value">
              {item.methods.length > 2 ? (
                <>
                  {item.methods
                    .slice(0, 2)
                    .map<React.ReactNode>((method) => (
                      <span key={method}>{getOptionsLabel(method, TransactionConst.getMethodOptions())}</span>
                    ))
                    .reduce((prev, curr) => [prev, <span className="decorate-dot" key={curr?.toString()} />, curr])}
                  ...
                </>
              ) : (
                item.methods
                  .map<React.ReactNode>((method) => (
                    <span key={method}>{getOptionsLabel(method, TransactionConst.getMethodOptions())}</span>
                  ))
                  .reduce((prev, curr) => [prev, <span className="decorate-dot" key={curr?.toString()} />, curr])
              )}
            </span>
          </Flex>
        </Tooltip>
      </div> */}

      {/* <Row className="grid-content__tags" justify="center" gutter={[4, 4]}>
        {commodity.tags.slice(0, 3).map((tag) => (
          <Col key={tag}>
            <Tag>{tag}</Tag>
          </Col>
        ))}
      </Row> */}
    </div>
  );
}
