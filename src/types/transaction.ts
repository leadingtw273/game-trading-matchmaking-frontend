import { Transaction } from "@/enums";
import { CommodityItem, IdType, TimeStamp, UserInfo } from "@/types";

export type TransactionItem<Item extends CommodityItem<unknown>> = {
  id: IdType;
  type: Transaction.Type;
  status: Transaction.Status;
  methods: Array<Transaction.Method>;
  commodity: Item;
  postedBy: UserInfo;
  createdAt: TimeStamp;
  updatedAt: TimeStamp;
};
