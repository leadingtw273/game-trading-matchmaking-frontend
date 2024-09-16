import SideForm from "./components/SideForm";
import TransactionTable, { TableSubmitParams } from "@/components/TransactionTable";
import { CurrencyEnum, TableDisplayModeEnum, TransactionEnum } from "@/enums";
import { StockType } from "./components/SideForm/enum";
import { CoinCommodity, TransactionItem } from "@/types";
import CommodityContent from "./components/CommodityContent";
import { useEffect, useState } from "react";
import coinCommodityList from "@/mocks/CoinCommodity";
import { useLocation } from "react-router-dom";
import CoinCommodityModal from "@/components/Modal/CoinCommodityModal";

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
  const { state } = useLocation() as { state?: { transactionType?: TransactionEnum.Type } };
  const [clickItemData, setClickItemData] = useState<TransactionItem<CoinCommodity> | null>(null);
  const [dataList, setDataList] = useState<TransactionItem<CoinCommodity>[]>([]);

  useEffect(() => {
    const list = requestList<TransactionItem<CoinCommodity>[]>(state?.transactionType ?? TransactionEnum.Type.SALE);
    setDataList(list);
  }, [state?.transactionType]);

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
        defaultTransactionType={state?.transactionType ?? TransactionEnum.Type.SALE}
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
      <CoinCommodityModal show={clickItemData != null} item={clickItemData} onClose={handleCloseCommodityModal} />
    </>
  );
}
