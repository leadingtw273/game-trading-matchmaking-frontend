import { Flex } from "antd";

import CoatImage from "@/assets/icon/appearance/coat.svg";
import GiftBoxImage from "@/assets/icon/appearance/giftBox.svg";
import HairImage from "@/assets/icon/appearance/hair.svg";
import HangingPetImage from "@/assets/icon/appearance/hangingPet.svg";
import HarnessImage from "@/assets/icon/appearance/harness.svg";
import MountImage from "@/assets/icon/appearance/mount.svg";
import OtherImage from "@/assets/icon/appearance/other.svg";
import { CurrencyConst } from "@/consts";
import { AppearanceEnum, TransactionEnum } from "@/enums";
import { AppearanceCommodity, TransactionItem } from "@/types";
import { getOptionsLabel } from "@/utils";

import "./style.scss";

type HeaderContentProps = {
  item: TransactionItem<AppearanceCommodity>;
};
export default function HeaderContent(props: HeaderContentProps) {
  const { item } = props;
  const { type: transactionType, commodity } = item;
  const isSale = transactionType === TransactionEnum.Type.SALE;
  const currencyFormatter = new Intl.NumberFormat("zh-TW").format;

  const categoryImageMap = {
    [AppearanceEnum.Type.GIFT_BOX]: GiftBoxImage,
    [AppearanceEnum.Type.CLOAK]: CoatImage,
    [AppearanceEnum.Type.COAT]: CoatImage,
    [AppearanceEnum.Type.HAIR]: HairImage,
    [AppearanceEnum.Type.HARNESS]: HarnessImage,
    [AppearanceEnum.Type.MOUNT]: MountImage,
    [AppearanceEnum.Type.HANGING_PET]: HangingPetImage,
    [AppearanceEnum.Type.OTHER]: OtherImage,
  };

  return (
    <Flex className="header-content appearance" style={{ padding: "8px 0" }} gap={16}>
      <img style={{ width: 80 }} src={categoryImageMap[commodity.category]} />
      <Flex justify="center" gap={5} vertical>
        <span className="header-content__title" style={{ marginBottom: 5 }}>
          {isSale ? "販賣" : "收購"}外觀
        </span>
        <div className="header-content__text">{commodity.name}</div>
        <span className="header-content__price">
          {`${getOptionsLabel(commodity.price.currency, CurrencyConst.getTypeOptions())} ${currencyFormatter(
            commodity.price.value
          )}`}
        </span>
      </Flex>
    </Flex>
  );
}
