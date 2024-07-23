import { CurrencyEnum } from "@/enums";

/** 幣別類型 */
export const getTypeOptions = () => [
  { label: "金", value: CurrencyEnum.Type.COIN },
  { label: "台幣", value: CurrencyEnum.Type.TWD },
  { label: "美金", value: CurrencyEnum.Type.USD },
  { label: "越南盾", value: CurrencyEnum.Type.VND },
];
