import { Transaction } from "@/enums";
import { CoinRatio, IdType } from "@/types";

export type CommodityItem<Type> = {
  id: IdType;
  type: Transaction.Commodity;
  remark: string;
} & Type;

export type CoinCommodity = CommodityItem<Coin>;
export type AppearanceCommodity = CommodityItem<Appearance>;
export type CharacterCommodity = CommodityItem<Character>;

type Coin = {
  coinRatio: CoinRatio;
  amount: number;
  tags: Array<string>;
  transMinLimit: number;
};

type Appearance = {
  coinRatio: CoinRatio;
  amount: number;
  tags: Array<string>;
  transMinLimit: number;
};

type Character = {
  coinRatio: CoinRatio;
  amount: number;
  tags: Array<string>;
  transMinLimit: number;
};
