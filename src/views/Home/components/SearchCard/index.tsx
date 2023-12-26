import { Button, Card, Input, Tabs, TabsProps } from "antd";
import "./style.scss";

export default function SearchCard() {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "外觀",
    },
    {
      key: "2",
      label: "角色",
    },
    {
      key: "3",
      label: "金幣",
    },
  ];

  return (
    <Card className="search-card">
      <Tabs defaultActiveKey="1" items={items} tabBarStyle={{ color: "red" }} />
      <Input placeholder="搜尋" prefix={<span className="icon material-symbols-outlined">search</span>} />
      <Button type="primary">搜尋</Button>
    </Card>
  );
}
