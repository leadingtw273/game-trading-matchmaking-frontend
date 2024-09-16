import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Image } from "antd";

import ImageEmpty from "@/assets/image_empty.svg";
import CharacterCommodityModal from "@/components/Modal/CharacterCommodityModal";
import { CurrencyConst } from "@/consts";
import { TransactionEnum } from "@/enums";
import { CharacterCommodity, TransactionItem } from "@/types";
import { getOptionsLabel } from "@/utils";

import "./style.scss";

interface ICharacterCardProps {
  data: TransactionItem<CharacterCommodity>;
}
export default function CharacterCard(props: ICharacterCardProps) {
  const { data } = props;
  const isSale = data.type === TransactionEnum.Type.SALE;
  const currencyFormatter = new Intl.NumberFormat("zh-TW").format;
  const navigate = useNavigate();
  const [showCommodityModal, setShowCommodityModal] = useState<boolean>(false);

  const handleClickItem = () => {
    if (data.type === TransactionEnum.Type.SALE) navigate(`/character/${data.id}`, { state: { item: data } });
    else setShowCommodityModal(true);
  };

  const handleCloseCommodityModal = () => {
    setShowCommodityModal(false);
  };

  return (
    <>
      <div className="character-card_wrapper" onClick={handleClickItem}>
        <Flex className="character-card" vertical>
          <Image
            className="character-card_image"
            width="100%"
            height={200}
            src={data.commodity.imageList?.[0]}
            fallback={ImageEmpty}
            preview={false}
          />
          <Flex className="character-card_content" gap={8} vertical>
            <div className="character-card_title">門派</div>
            <div className="character-card_sub-title">體型 陣營 120等</div>
            <Flex justify="space-between" align="center">
              <div className="character-card_posted-by">
                {isSale ? "賣家" : "買家"} {data.postedBy.nickname}
              </div>
              <div className="character-card_prize">
                {getOptionsLabel(data.commodity.price.currency, CurrencyConst.getTypeOptions())}{" "}
                {currencyFormatter(data.commodity.price.value)}
              </div>
            </Flex>
          </Flex>
        </Flex>
      </div>

      {data.type === TransactionEnum.Type.PURCHASE && (
        <CharacterCommodityModal show={showCommodityModal} item={data} onClose={handleCloseCommodityModal} />
      )}
    </>
  );
}
