import { AppearanceEnum, CharacterEnum, TransactionEnum } from "@/enums";
import { CurrencyPrice, CurrencyRatio, IdType } from "@/types";

export type CommodityItem<Type> = {
  id: IdType;
  type: TransactionEnum.Commodity;
  remark: string;
  tags: Array<string>;
} & Type;

export type CoinCommodity = CommodityItem<{
  coinRatio: CurrencyRatio;
  amount: number;
  transMinLimit: number;
}>;

export type AppearanceCommodity = CommodityItem<{
  name: string;
  price: CurrencyPrice;
  amount: number;
  category: AppearanceEnum.Type;
}>;

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
