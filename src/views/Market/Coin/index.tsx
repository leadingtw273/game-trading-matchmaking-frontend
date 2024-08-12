import CommodityCard from "@/components/CommodityModal";
import SideForm from "./components/SideForm";
import TransactionTable, { TableSubmitParams } from "@/components/TransactionTable";
import { CurrencyEnum, TableDisplayModeEnum, TransactionEnum } from "@/enums";
import { StockType } from "./components/SideForm/enum";
import { CurrencyRatio, CommodityItem, TransactionItem } from "@/types";
import CommodityContent from "./components/CommodityContent";
import { useEffect, useState } from "react";
import coinCommodityList from "./mocks/CoinCommodity";
import ModalContent from "./components/ModalContent";

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
  const [clickItemData, setClickItemData] = useState<TransactionItem<CoinCommodity> | null>(null);
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

  const handleClickItem = (item: TransactionItem<CoinCommodity>) => {
    console.log("handleClickItem", item);
    setClickItemData(item);
  };

  const handleCloseCommodityModal = () => {
    setClickItemData(null);
  };

  return (
    <>
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
        onClickItem={handleClickItem}
      />
      <CommodityCard
        show={clickItemData != null}
        item={clickItemData}
        renderHeader={(item) => <ModalContent.Header item={item as TransactionItem<CoinCommodity>} />}
        renderDetail={(item) => <ModalContent.Detail item={item as TransactionItem<CoinCommodity>} />}
        onClose={handleCloseCommodityModal}
      />
    </>
  );
}
