/**
 * 商品類型
 */
export enum CommodityType {
  Skin = "skin",
  Character = "character",
  Coin = "coin",
}

/**
 * 幣種
 */
export enum Currency {
  NTD = "NTD",
}

/**
 * 價格
 */
export interface IPrize {
  currency: Currency;
  value: number;
}
