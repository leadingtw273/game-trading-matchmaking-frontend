import { Flex } from "antd";
import { CharacterCommodity } from "@/views/Market/Character";
import { TransactionItem } from "@/types";
import { getOptionsLabel } from "@/utils";
import { CurrencyConst } from "@/consts";

import "./style.scss";
import InnerSkillTag from "../../../CommodityContent/components/InnerSkillTag";

type HeaderContentProps = {
  item: TransactionItem<CharacterCommodity>;
};
export default function HeaderContent(props: HeaderContentProps) {
  const { item } = props;
  const { commodity } = item;
  const currencyFormatter = new Intl.NumberFormat("zh-TW").format;

  return (
    <Flex className="header-content appearance" style={{ padding: "8px 0" }} gap={16}>
      <Flex justify="center" gap={10} align="center" vertical>
        <Flex style={{ padding: "0 25px" }} gap="5px 10px" wrap="wrap" justify="center">
          {commodity.innerSkillList.map((innerSkill) => (
            <InnerSkillTag key={innerSkill} innerSkill={innerSkill}></InnerSkillTag>
          ))}
        </Flex>
        <span className="header-content__price">
          {`${getOptionsLabel(commodity.price.currency, CurrencyConst.getTypeOptions())} ${currencyFormatter(
            commodity.price.value
          )}`}
        </span>
      </Flex>
    </Flex>
  );
}
