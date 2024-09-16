import CommodityModal from "@/components/CommodityModal";
import { CharacterCommodity, CommodityItem, TransactionItem } from "@/types";
import HeaderContent from "./components/HeaderContent";
import DetailContent from "./components/DetailContent";

type CharacterCommodityModalProps = {
  show: boolean;
  item: TransactionItem<CommodityItem<unknown>> | null;
  onClose: () => void;
};
export default function CharacterCommodityModal(props: CharacterCommodityModalProps) {
  const { show, item, onClose } = props;

  return (
    <CommodityModal
      show={show}
      item={item}
      renderHeader={(item) => <HeaderContent item={item as TransactionItem<CharacterCommodity>} />}
      renderDetail={(item) => <DetailContent item={item as TransactionItem<CharacterCommodity>} />}
      onClose={onClose}
    />
  );
}
