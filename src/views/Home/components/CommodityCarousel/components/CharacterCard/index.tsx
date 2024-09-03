import "./style.scss";
import { Flex, Image } from "antd";
import ImageEmpty from "@/assets/image_empty.svg";
import { CharacterCommodity, TransactionItem } from "@/types";
import { TransactionEnum } from "@/enums";
import { CurrencyConst } from "@/consts";
import { getOptionsLabel } from "@/utils";

interface ICharacterCardProps {
  data: TransactionItem<CharacterCommodity>;
}
export default function CharacterCard(props: ICharacterCardProps) {
  const { data } = props;
  const isSale = data.type === TransactionEnum.Type.SALE;
  const currencyFormatter = new Intl.NumberFormat("zh-TW").format;

  return (
    <div className="character-card_wrapper">
      <Flex className="appearance-card" vertical>
        <Image
          className="appearance-card_image"
          width="100%"
          height={200}
          src={data.commodity.imageList?.[0]}
          fallback={ImageEmpty}
          preview={false}
        />
        <Flex className="appearance-card_content" gap={8} vertical>
          <div className="appearance-card_title">門派</div>
          <div className="appearance-card_sub-title">體型 陣營 120等</div>
          <Flex justify="space-between" align="center">
            <div className="appearance-card_posted-by">
              {isSale ? "賣家" : "買家"} {data.postedBy.nickname}
            </div>
            <div className="appearance-card_prize">
              {getOptionsLabel(data.commodity.price.currency, CurrencyConst.getTypeOptions())}{" "}
              {currencyFormatter(data.commodity.price.value)}
            </div>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}
