import BaseCommodityModal from "@/components/BaseCommodityModal";
import { CoinCommodity, CommodityItem, TransactionItem } from "@/types";

import DetailContent from "./components/DetailContent";
import HeaderContent from "./components/HeaderContent";

type CoinCommodityModalProps = {
  show: boolean;
  item: TransactionItem<CommodityItem<unknown>> | null;
  onClose: () => void;
};
export default function CoinCommodityModal(props: CoinCommodityModalProps) {
  const { show, item, onClose } = props;

  return (
    <BaseCommodityModal
      show={show}
      item={item}
      renderHeader={(item) => <HeaderContent item={item as TransactionItem<CoinCommodity>} />}
      renderDetail={(item) => <DetailContent item={item as TransactionItem<CoinCommodity>} />}
      onClose={onClose}
    />
  );
}
