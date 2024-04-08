/* eslint-disable @typescript-eslint/no-explicit-any */
import SaleForm from "./components/SaleForm";
import PurchaseForm from "./components/PurchaseForm";
import TransactionTable from "@/components/TransactionTable";
import { Transaction } from "@/enums";

Component.displayName = "MarketCoin";
export function Component() {
  const handleSubmitSale = (values: any) => {
    console.log("handleSubmitSale", values);
  };

  const handleSubmitPurchase = (values: any) => {
    console.log("handleSubmitPurchase", values);
  };

  return (
    <TransactionTable
      renderForm={(type) =>
        type === Transaction.Type.SALE ? (
          <SaleForm onSubmit={handleSubmitSale} />
        ) : (
          <PurchaseForm onSubmit={handleSubmitPurchase} />
        )
      }
      renderContent={() => "content"}
    />
  );
}
