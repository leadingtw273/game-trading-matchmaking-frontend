import { TableDisplayModeEnum } from "@/enums";

import "./style.scss";

type ItemCardWrapperProps = {
  displayMode: TableDisplayModeEnum;
  children: React.ReactNode;
  onClick: () => void;
};
export default function ItemCardWrapper(props: ItemCardWrapperProps) {
  const { displayMode, children, onClick } = props;

  return (
    <div
      className={["item-card", displayMode === TableDisplayModeEnum.LIST ? "mode-list" : "mode-grid"].join(" ")}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
