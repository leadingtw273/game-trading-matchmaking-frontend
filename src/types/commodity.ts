import { TransactionEnum } from "@/enums";
import { IdType } from "@/types";

export type CommodityItem<Type> = {
  id: IdType;
  type: TransactionEnum.Commodity;
  remark: string;
  tags: Array<string>;
} & Type;
