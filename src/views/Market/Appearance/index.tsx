import SideForm from "./components/SideForm";
import TransactionTable from "@/components/TransactionTable";
import { CurrencyEnum, TableDisplayModeEnum, TransactionEnum, AppearanceEnum } from "@/enums";
import { CurrencyPrice, CommodityItem, TransactionItem } from "@/types";
import CommodityContent from "./components/CommodityContent";
import { useEffect, useState } from "react";
import appearanceCommodityList from "./mocks/AppearanceCommodity";

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
  transaction: TransactionEnum.Method[] | null;
};

Component.displayName = "MarketAppearance";
export function Component() {
  const [dataList, setDataList] = useState<TransactionItem<AppearanceCommodity>[]>([]);

  useEffect(() => {
    const list = requestList<TransactionItem<AppearanceCommodity>[]>(TransactionEnum.Type.SALE);
    setDataList(list);
  }, []);

  const requestList = <Response,>(transactionType: TransactionEnum.Type): Response => {
    // TODO: fetch data from server
    return appearanceCommodityList.filter((item) => item.type === transactionType).slice(0, 8) as Response;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSearch = (values: any) => {
    console.log("handleSearch", values);
  };

  return (
    <TransactionTable<FormValues, AppearanceCommodity>
      defaultTransactionType={TransactionEnum.Type.SALE}
      dataSource={dataList}
      renderForm={(type) => <SideForm transactionType={type} />}
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
