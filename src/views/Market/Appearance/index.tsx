import CommodityCard from "@/components/CommodityModal";
import SideForm from "./components/SideForm";
import TransactionTable, { TableSubmitParams } from "@/components/TransactionTable";
import { CurrencyEnum, TableDisplayModeEnum, TransactionEnum, AppearanceEnum } from "@/enums";
import { CurrencyPrice, CommodityItem, TransactionItem } from "@/types";
import CommodityContent from "./components/CommodityContent";
import { useEffect, useState } from "react";
import appearanceCommodityList from "./mocks/AppearanceCommodity";
import ModalContent from "./components/ModalContent";

export type AppearanceCommodity = CommodityItem<{
  name: string;
  price: CurrencyPrice;
  amount: number;
  category: AppearanceEnum.Type;
}>;

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
  const [clickItemData, setClickItemData] = useState<TransactionItem<AppearanceCommodity> | null>(null);
  const [dataList, setDataList] = useState<TransactionItem<AppearanceCommodity>[]>([]);

  useEffect(() => {
    const list = requestList<TransactionItem<AppearanceCommodity>[]>(TransactionEnum.Type.SALE);
    setDataList(list);
  }, []);

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
        renderHeader={(item) => <ModalContent.Header item={item as TransactionItem<AppearanceCommodity>} />}
        renderDetail={(item) => <ModalContent.Detail item={item as TransactionItem<AppearanceCommodity>} />}
        onClose={handleCloseCommodityModal}
      />
    </>
  );
}
