import SideForm from "./components/SideForm";
import TransactionTable, { TableSubmitParams } from "@/components/TransactionTable";
import { CurrencyEnum, TableDisplayModeEnum, TransactionEnum } from "@/enums";
import { StockType } from "./components/SideForm/enum";
import { CurrencyRatio, CommodityItem, TransactionItem } from "@/types";
import CommodityContent from "./components/CommodityContent";
import { useEffect, useState } from "react";
import coinCommodityList from "./mocks/CoinCommodity";

export type CoinCommodity = CommodityItem<{
  coinRatio: CurrencyRatio;
  amount: number;
  transMinLimit: number;
}>;

type FormValues = {
  sellCurrency: {
    currency: CurrencyEnum.Type;
    value: number;
  } | null;
  transactionMethod: TransactionEnum.Method | null;
  stock: StockType | null;
};

Component.displayName = "MarketCoin";
export function Component() {
  const [dataList, setDataList] = useState<TransactionItem<CoinCommodity>[]>([]);

  useEffect(() => {
    const list = requestList<TransactionItem<CoinCommodity>[]>(TransactionEnum.Type.SALE);
    setDataList(list);
  }, []);

  const requestList = <Response,>(transactionType: TransactionEnum.Type): Response => {
    // TODO: fetch data from server
    return coinCommodityList.filter((item) => item.type === transactionType).slice(0, 8) as Response;
  };

  const handleSearch = (values: TableSubmitParams<FormValues>) => {
    console.log("handleSearch", values);

    const list = requestList<TransactionItem<CoinCommodity>[]>(values.transactionType);
    setDataList(list);
  };

  return (
    <TransactionTable<FormValues, CoinCommodity>
      defaultTransactionType={TransactionEnum.Type.SALE}
      dataSource={dataList}
      renderForm={() => <SideForm />}
      renderCardContent={(type, mode, item) =>
        mode === TableDisplayModeEnum.GRID ? (
          <CommodityContent.Grid transactionType={type} item={item} />
        ) : (
          <CommodityContent.List transactionType={type} item={item} />
        )
      }
      onSearch={handleSearch}
    />
  );
}
