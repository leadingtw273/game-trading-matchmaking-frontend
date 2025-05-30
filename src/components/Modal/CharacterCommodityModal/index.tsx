import BaseCommodityModal from "@/components/BaseCommodityModal";
import { CharacterCommodity, CommodityItem, TransactionItem } from "@/types";

import DetailContent from "./components/DetailContent";
import HeaderContent from "./components/HeaderContent";

type CharacterCommodityModalProps = {
  show: boolean;
  item: TransactionItem<CommodityItem<unknown>> | null;
  onClose: () => void;
};
export default function CharacterCommodityModal(props: CharacterCommodityModalProps) {
  const { show, item, onClose } = props;

  return (
    <BaseCommodityModal
      show={show}
      item={item}
      renderHeader={(item) => <HeaderContent item={item as TransactionItem<CharacterCommodity>} />}
      renderDetail={(item) => <DetailContent item={item as TransactionItem<CharacterCommodity>} />}
      onClose={onClose}
    />
  );
}
