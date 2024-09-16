import { Tabs } from "antd";

import FormAppearance from "./components/FormAppearance";
import FormCharacter from "./components/FormCharacter";
import FormCoin from "./components/FormCoin";

import "./style.scss";

export default function SearchCard() {
  return (
    <div className="search-card">
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            key: "1",
            label: "金幣",
            children: <FormCoin />,
          },
          {
            key: "2",
            label: "外觀",
            children: <FormAppearance />,
          },
          {
            key: "3",
            label: "角色",
            children: <FormCharacter />,
          },
        ]}
      />
    </div>
  );
}
