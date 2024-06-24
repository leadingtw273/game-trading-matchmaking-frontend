/* eslint-disable @typescript-eslint/no-explicit-any */
import SideForm from "./components/SideForm";
import TransactionTable from "@/components/TransactionTable";
import { Currency, TableDisplayMode, Transaction } from "@/enums";
import { StockType } from "./components/SideForm/enum";
import { CoinRatio, CommodityItem } from "@/types";
import CommodityContent from "./components/CommodityContent";

type FormValues = {
  sellCurrency: {
    currency: Currency.Type;
    value: number;
  } | null;
  transaction: Transaction.Method | null;
  stock: StockType | null;
};

type Coin = {
  coinRatio: CoinRatio;
  amount: number;
  tags: Array<string>;
  transMinLimit: number;
};

Component.displayName = "MarketCoin";
export function Component() {
  const handleSubmit = (values: any) => {
    console.log("handleSubmit", values);
  };

  return (
    <TransactionTable<FormValues, CommodityItem<Coin>>
      renderForm={(type) => <SideForm transactionType={type} />}
      renderCardContent={(type, mode, item) =>
        mode === TableDisplayMode.GRID ? (
          <CommodityContent.Grid transactionType={type} item={item} />
        ) : (
          <CommodityContent.List transactionType={type} item={item} />
        )
      }
      onSubmit={handleSubmit}
    />
  );
}
