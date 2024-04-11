/** 交易類型 */
export enum Type {
  /** 購買 */
  SALE = "sale",
  /** 販售 */
  PURCHASE = "purchase",
}

/** 交易狀態 */
export enum Status {
  /** 未完成 */
  UNFINISHED = "unfinished",
  /** 已完成 */
  FINISHED = "finished",
  /** 已取消 */
  CANCELLED = "cancelled",
}

/** 交易商品 */
export enum Commodity {
  /** 外觀 */
  Skin = "skin",
  /** 角色 */
  Character = "character",
  /** 金幣 */
  Coin = "coin",
}

/** 交易方式 */
export enum Method {
  /** 匯款 */
  BANK_TRANSFER = "BANK_TRANSFER",
  /** line pay */
  LINE_PAY = "LINE_PAY",
  /** 8591 */
  THIRD_PARTY = "8591",
}
