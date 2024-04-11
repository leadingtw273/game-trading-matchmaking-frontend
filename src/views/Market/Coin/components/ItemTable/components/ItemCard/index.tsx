import { CoinCommodity, TransactionItem } from "@/types";

import "./style.scss";

type ItemCardProps = {
  className?: string;
  item: TransactionItem<CoinCommodity>;
};
export default function ItemCard(props: ItemCardProps) {
  const { item } = props;
  return <div className="item-card">{item.id}</div>;
}
