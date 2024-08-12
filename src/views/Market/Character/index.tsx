import SideForm from "./components/SideForm";
import TransactionTable, { TableSubmitParams } from "@/components/TransactionTable";
import { CurrencyEnum, TableDisplayModeEnum, TransactionEnum, CharacterEnum } from "@/enums";
import { CurrencyPrice, CommodityItem, TransactionItem } from "@/types";
import CommodityContent from "./components/CommodityContent";
import { useEffect, useState } from "react";
import characterCommodityList from "./mocks/CharacterCommodity";

export type CharacterCommodity = CommodityItem<{
  sectList: CharacterEnum.SectType[]; // 門派
  innerSkillList: CharacterEnum.InnerSkillType[]; // 心法
  bodyTypeList: CharacterEnum.BodyType[]; // 體型
  campList: CharacterEnum.CampType[]; // 陣營
  level: number; // 等級
  info: {
    noDebt: boolean; // 無負債
    needChangeName: boolean; // 需改名
    needTransferred: boolean; // 需轉移
    needFullLevel: boolean; // 需滿等
  };
  price: CurrencyPrice; // 價格
  imageList: string[] | null; // 圖片
  gearScoreList: {
    // 裝分
    innerSkill: CharacterEnum.InnerSkillType | null;
    type: CharacterEnum.GearType;
    score: number;
  }[];
  battleRank: number | null; // 戰階
  arenaScoreList:
    | {
        // 競技場分數
        type: CharacterEnum.ArenaType;
        score: number;
      }[]
    | null;
  estateRank: number | null; // 家園分數
  endlessBattleValue: {
    // 百戰值
    energy: number;
    stamina: number;
  } | null;
  accomplishmentScore: number | null; // 資歷
  petScore: number | null; // 寵物分數
  skinCount:
    | {
        // 外觀數量
        type: CharacterEnum.SkinType;
        value: number;
      }[]
    | null;
}>;

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
  const [, setClickItemData] = useState<TransactionItem<CharacterCommodity> | null>(null);
  const [dataList, setDataList] = useState<TransactionItem<CharacterCommodity>[]>([]);

  useEffect(() => {
    const list = requestList<TransactionItem<CharacterCommodity>[]>(TransactionEnum.Type.SALE);
    setDataList(list);
  }, []);

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
    setClickItemData(item);
  };

  // const handleCloseCommodityModal = () => {
  //   setClickItemData(null);
  // };

  return (
    <TransactionTable<FormValues, CharacterCommodity>
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
  );
}
