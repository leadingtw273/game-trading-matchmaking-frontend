/* eslint-disable @typescript-eslint/no-explicit-any */
import SideForm from "./components/SideForm";
import TransactionTable from "@/components/TransactionTable";
import ItemTable from "./components/ItemTable";

Component.displayName = "MarketCoin";
export function Component() {
  const handleSubmit = (values: any) => {
    console.log("handleSubmit", values);
  };

  return (
    <TransactionTable
      renderForm={(type) => <SideForm transactionType={type} onSubmit={handleSubmit} />}
      renderContent={(type) => <ItemTable transactionType={type} />}
    />
  );
}
