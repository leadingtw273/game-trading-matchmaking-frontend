import { TransactionEnum } from "@/enums";

/** 付費方式類型 */
export const getMethodOptions = () => [
  { label: "付費信", value: TransactionEnum.Method.PAID_LETTER },
  { label: "玩家交易", value: TransactionEnum.Method.PLAYER_TRADE },
  { label: "匯款", value: TransactionEnum.Method.BANK_TRANSFER },
  { label: "line pay", value: TransactionEnum.Method.LINE_PAY },
  { label: "8591", value: TransactionEnum.Method.THIRD_PARTY_8591 },
];
