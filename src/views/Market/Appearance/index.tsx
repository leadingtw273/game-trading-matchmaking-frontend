import SideForm from "./components/SideForm";
import TransactionTable, { TableSubmitParams } from "@/components/TransactionTable";
import { CurrencyEnum, TableDisplayModeEnum, TransactionEnum, AppearanceEnum } from "@/enums";
import { AppearanceCommodity, TransactionItem } from "@/types";
import CommodityContent from "./components/CommodityContent";
import { useEffect, useState } from "react";
import appearanceCommodityList from "@/mocks/AppearanceCommodity";
import { useLocation } from "react-router-dom";
import AppearanceCommodityModal from "@/components/Modal/AppearanceCommodityModal";

type FormValues = {
  type: AppearanceEnum.Type;
  name: string | null;
  maxPrize: {
    currency: CurrencyEnum.Type;
    value: number;
  } | null;
  transactionMethod: TransactionEnum.Method[] | null;
};

Component.displayName = "MarketAppearance";
export function Component() {
  const { state } = useLocation() as { state?: { transactionType?: TransactionEnum.Type } };
  const [clickItemData, setClickItemData] = useState<TransactionItem<AppearanceCommodity> | null>(null);
  const [dataList, setDataList] = useState<TransactionItem<AppearanceCommodity>[]>([]);

  useEffect(() => {
    const list = requestList<TransactionItem<AppearanceCommodity>[]>(
      state?.transactionType ?? TransactionEnum.Type.SALE
    );
    setDataList(list);
  }, [state?.transactionType]);

  const requestList = <Response,>(transactionType: TransactionEnum.Type): Response => {
    // TODO: fetch data from server
    return appearanceCommodityList.filter((item) => item.type === transactionType).slice(0, 8) as Response;
  };

  const handleSearch = (values: TableSubmitParams<FormValues>) => {
    console.log("handleSearch", values);

    const list = requestList<TransactionItem<AppearanceCommodity>[]>(values.transactionType);
    setDataList(list);
  };

  const handleClickItem = (item: TransactionItem<AppearanceCommodity>) => {
    console.log("handleClickItem", item);
    setClickItemData(item);
  };

  const handleCloseCommodityModal = () => {
    setClickItemData(null);
  };

  return (
    <>
      <TransactionTable<FormValues, AppearanceCommodity>
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
      <AppearanceCommodityModal show={clickItemData != null} item={clickItemData} onClose={handleCloseCommodityModal} />
    </>
  );
}
