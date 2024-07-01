import { CurrencyEnum } from "@/enums";

/** 識別碼類型 */
export type IdType = string;

/** 時間戳記 */
export type TimeStamp = number;

/** 幣種比值 */
export type CurrencyRatio = {
  /** 幣種 */
  currency: CurrencyEnum.Type;
  /** 比值 */
  value: number;
};

/** 幣種價格 */
export type CurrencyPrice = {
  /** 幣種 */
  currency: CurrencyEnum.Type;
  /** 價格 */
  value: number;
};
