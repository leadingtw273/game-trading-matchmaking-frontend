import BaseCommodityModal from "@/components/BaseCommodityModal";
import { AppearanceCommodity, CommodityItem, TransactionItem } from "@/types";

import DetailContent from "./components/DetailContent";
import HeaderContent from "./components/HeaderContent";

type AppearanceCommodityModalProps = {
  show: boolean;
  item: TransactionItem<CommodityItem<unknown>> | null;
  onClose: () => void;
};
export default function AppearanceCommodityModal(props: AppearanceCommodityModalProps) {
  const { show, item, onClose } = props;

  return (
    <BaseCommodityModal
      show={show}
      item={item}
      renderHeader={(item) => <HeaderContent item={item as TransactionItem<AppearanceCommodity>} />}
      renderDetail={(item) => <DetailContent item={item as TransactionItem<AppearanceCommodity>} />}
      onClose={onClose}
    />
  );
}
