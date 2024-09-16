import CommodityModal from "@/components/CommodityModal";
import { CoinCommodity, CommodityItem, TransactionItem } from "@/types";
import HeaderContent from "./components/HeaderContent";
import DetailContent from "./components/DetailContent";

type CoinCommodityModalProps = {
  show: boolean;
  item: TransactionItem<CommodityItem<unknown>> | null;
  onClose: () => void;
};
export default function CoinCommodityModal(props: CoinCommodityModalProps) {
  const { show, item, onClose } = props;

  return (
    <CommodityModal
      show={show}
      item={item}
      renderHeader={(item) => <HeaderContent item={item as TransactionItem<CoinCommodity>} />}
      renderDetail={(item) => <DetailContent item={item as TransactionItem<CoinCommodity>} />}
      onClose={onClose}
    />
  );
}
