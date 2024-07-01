import { TransactionEnum } from "@/enums";
import { CommodityItem, IdType, TimeStamp, UserInfo } from "@/types";

export type TransactionItem<Item extends CommodityItem<unknown>> = {
  id: IdType;
  type: TransactionEnum.Type;
  status: TransactionEnum.Status;
  methods: Array<TransactionEnum.Method>;
  commodity: Item;
  postedBy: UserInfo;
  createdAt: TimeStamp;
  updatedAt: TimeStamp;
};
