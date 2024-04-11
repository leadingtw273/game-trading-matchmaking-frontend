import { Transaction } from "@/enums";
import { CoinRatio, IdType } from "@/types";

export type CommodityItem<Type> = {
  id: IdType;
  type: Transaction.Commodity;
  remark: string;
} & Type;

export type CoinCommodity = CommodityItem<Coin>;

type Coin = {
  coinRatio: CoinRatio;
  amount: number;
  tags: Array<string>;
  transMinLimit: number;
};
