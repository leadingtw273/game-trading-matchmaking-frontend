import { Flex } from "antd";
import CoinIcon from "@/assets/icon/coin.svg";
import { CoinCommodity } from "@/views/Market/Coin";
import { TransactionItem } from "@/types";
import { TransactionEnum } from "@/enums";
import { getOptionsLabel } from "@/utils";
import { CurrencyConst } from "@/consts";

import "./style.scss";

type HeaderContentProps = {
  item: TransactionItem<CoinCommodity>;
};
export default function HeaderContent(props: HeaderContentProps) {
  const { item } = props;
  const { type: transactionType, commodity } = item;
  const isSale = transactionType === TransactionEnum.Type.SALE;
  const currencyFormatter = new Intl.NumberFormat("zh-TW").format;

  return (
    <Flex className="header-content coin" style={{ padding: "8px 0" }} gap={16}>
      <img style={{ width: 80 }} src={CoinIcon} />
      <Flex justify="center" gap={5} vertical>
        <span className="header-content__title" style={{ marginBottom: 5 }}>
          {isSale ? "販賣" : "收購"}金幣
        </span>
        <span className="header-content__price">
          {`1${getOptionsLabel(commodity.coinRatio.currency, CurrencyConst.getTypeOptions())} : ${currencyFormatter(
            commodity.coinRatio.value
          )}金`}
        </span>
      </Flex>
    </Flex>
  );
}
