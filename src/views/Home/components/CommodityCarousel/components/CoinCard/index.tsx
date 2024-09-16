import { useState } from "react";
import { Flex, Image } from "antd";

import AvatarEmpty from "@/assets/avatar_empty.svg";
import CoinCommodityModal from "@/components/Modal/CoinCommodityModal";
import { CurrencyConst } from "@/consts";
import { TransactionEnum } from "@/enums";
import { CoinCommodity, TransactionItem } from "@/types";
import { getOptionsLabel } from "@/utils";

import "./style.scss";

interface ICoinCardProps {
  data: TransactionItem<CoinCommodity>;
}
export default function CoinCard(props: ICoinCardProps) {
  const { data } = props;
  const isSale = data.type === TransactionEnum.Type.SALE;
  const currencyFormatter = new Intl.NumberFormat("zh-TW").format;
  const [showCommodityModal, setShowCommodityModal] = useState<boolean>(false);

  const handleClickItem = () => {
    setShowCommodityModal(true);
  };

  const handleCloseCommodityModal = () => {
    setShowCommodityModal(false);
  };

  return (
    <>
      <div className="coin-card_wrapper" onClick={handleClickItem}>
        <Flex className="coin-card" vertical>
          <Image
            className="coin-card_image"
            width="100%"
            height={200}
            src={data.postedBy.avatarUrl}
            fallback={AvatarEmpty}
            preview={false}
          />
          <Flex className="coin-card_content" gap={8} vertical>
            <div className="coin-card_title">
              {isSale ? "庫存" : "需求"} {currencyFormatter(data.commodity.amount)}金
            </div>
            <div className="coin-card_sub-title">
              {isSale ? "賣家" : "買家"} {data.postedBy.nickname}
            </div>
            <Flex justify="end" align="center">
              <div className="coin-card_prize">
                {`1${getOptionsLabel(
                  data.commodity.coinRatio.currency,
                  CurrencyConst.getTypeOptions()
                )} : ${currencyFormatter(data.commodity.coinRatio.value)}金`}
              </div>
            </Flex>
          </Flex>
        </Flex>
      </div>
      <CoinCommodityModal show={showCommodityModal} item={data} onClose={handleCloseCommodityModal} />
    </>
  );
}
