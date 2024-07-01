import { TableDisplayModeEnum } from "@/enums";

import "./style.scss";

type ItemCardWrapperProps = {
  displayMode: TableDisplayModeEnum;
  children: React.ReactNode;
};
export default function ItemCardWrapper(props: ItemCardWrapperProps) {
  const { displayMode, children } = props;

  return (
    <div className={["item-card", displayMode === TableDisplayModeEnum.LIST ? "mode-list" : "mode-grid"].join(" ")}>
      {children}
    </div>
  );
}
