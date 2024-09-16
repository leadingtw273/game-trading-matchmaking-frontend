import "./style.scss";
import { AppearanceCommodity, TransactionItem } from "@/types";
import { Flex, Image } from "antd";
import AvatarEmpty from "@/assets/avatar_empty.svg";
import { getOptionsLabel } from "@/utils";
import { AppearanceConst, CurrencyConst } from "@/consts";
import { TransactionEnum } from "@/enums";
import AppearanceCommodityModal from "@/components/Modal/AppearanceCommodityModal";
import { useState } from "react";

interface IAppearanceCardProps {
  data: TransactionItem<AppearanceCommodity>;
}
export default function AppearanceCard(props: IAppearanceCardProps) {
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
      <div className="appearance-card_wrapper" onClick={handleClickItem}>
        <Flex className="appearance-card" vertical>
          <Image
            className="appearance-card_image"
            width="100%"
            height={200}
            src={data.postedBy.avatarUrl}
            fallback={AvatarEmpty}
            preview={false}
          />
          <Flex className="appearance-card_content" gap={8} vertical>
            <div className="appearance-card_title">{data.commodity.name}</div>
            <div className="appearance-card_sub-title">
              類型 {getOptionsLabel(data.commodity.category, AppearanceConst.getTypeOptions())}
            </div>
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
      <AppearanceCommodityModal show={showCommodityModal} item={data} onClose={handleCloseCommodityModal} />
    </>
  );
}
