import { Currency } from "@/enums";

/** 識別碼類型 */
export type IdType = string;

/** 時間戳記 */
export type TimeStamp = number;

/** 幣種比值 */
export type CoinRatio = {
  /** 幣種 */
  currency: Currency.Type;
  /** 比值 */
  ratio: number;
};
