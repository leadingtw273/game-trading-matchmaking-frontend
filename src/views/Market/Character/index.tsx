import CommodityCard from "@/components/CommodityModal";
import SideForm from "./components/SideForm";
import TransactionTable, { TableSubmitParams } from "@/components/TransactionTable";
import { CurrencyEnum, TableDisplayModeEnum, TransactionEnum, CharacterEnum } from "@/enums";
import { CharacterCommodity, TransactionItem } from "@/types";
import CommodityContent from "./components/CommodityContent";
import { useEffect, useState } from "react";
import characterCommodityList from "@/mocks/CharacterCommodity";
import ModalContent from "../Character/components/ModalContent";
import { useLocation, useNavigate } from "react-router-dom";

type FormValues = {
  sect: CharacterEnum.SectType | null;
  innerSkill: CharacterEnum.InnerSkillType | null;
  bodyType: CharacterEnum.BodyType[];
  camp: CharacterEnum.CampType[];
  gearType: CharacterEnum.GearType[];
  gearScore: {
    max: number;
    min: number;
  };
  accomplishmentScore: {
    max: number;
    min: number;
  };
  prizeRange: {
    currency: CurrencyEnum.Type;
    value: number;
  } | null;
  transactionMethod: TransactionEnum.Method[] | null;
};

Component.displayName = "MarketCharacter";
export function Component() {
  const navigate = useNavigate();
  const { state } = useLocation() as { state?: { transactionType?: TransactionEnum.Type } };
  const [clickItemData, setClickItemData] = useState<TransactionItem<CharacterCommodity> | null>(null);
  const [dataList, setDataList] = useState<TransactionItem<CharacterCommodity>[]>([]);

  useEffect(() => {
    const list = requestList<TransactionItem<CharacterCommodity>[]>(
      state?.transactionType ?? TransactionEnum.Type.SALE
    );
    setDataList(list);
  }, [state?.transactionType]);

  const requestList = <Response,>(transactionType: TransactionEnum.Type): Response => {
    // TODO: fetch data from server
    return characterCommodityList.filter((item) => item.type === transactionType).slice(0, 8) as Response;
  };

  const handleSearch = (values: TableSubmitParams<FormValues>) => {
    console.log("handleSearch", values);

    const list = requestList<TransactionItem<CharacterCommodity>[]>(values.transactionType);
    setDataList(list);
  };

  const handleClickItem = (item: TransactionItem<CharacterCommodity>) => {
    console.log("handleClickItem", item);
    if (item.type === TransactionEnum.Type.SALE) navigate(`/character/${item.id}`, { state: { item } });
    else setClickItemData(item);
  };

  const handleCloseCommodityModal = () => {
    setClickItemData(null);
  };

  return (
    <>
      <TransactionTable<FormValues, CharacterCommodity>
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
      {clickItemData?.type === TransactionEnum.Type.PURCHASE && (
        <CommodityCard
          show={clickItemData != null}
          item={clickItemData}
          renderHeader={(item) => <ModalContent.Header item={item as TransactionItem<CharacterCommodity>} />}
          renderDetail={(item) => <ModalContent.Detail item={item as TransactionItem<CharacterCommodity>} />}
          onClose={handleCloseCommodityModal}
        />
      )}
    </>
  );
}
