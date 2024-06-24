import { TableDisplayMode } from "@/enums";

import "./style.scss";

type ItemCardWrapperProps = {
  displayMode: TableDisplayMode;
  children: React.ReactNode;
};
export default function ItemCardWrapper(props: ItemCardWrapperProps) {
  const { displayMode, children } = props;

  return (
    <div className={["item-card", displayMode === TableDisplayMode.LIST ? "mode-list" : "mode-grid"].join(" ")}>
      {children}
    </div>
  );
}
