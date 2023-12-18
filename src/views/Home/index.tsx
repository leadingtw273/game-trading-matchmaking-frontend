import logo from "@/assets/logo.png";
import "./style.scss";
import { Button, Card, Input, Tabs, TabsProps } from "antd";

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

Component.displayName = "Home";
export function Component() {
  return (
    <div className="home">
      <div className="search-block">
        <img className="search-block_logo" src={logo} alt="logo-text" />
        <Card className="search-block_card">
          <Tabs defaultActiveKey="1" items={items} tabBarStyle={{ color: "red" }} />
          <Input placeholder="搜尋" prefix={<span className="icon material-symbols-outlined">search</span>} />
          <Button type="primary">搜尋</Button>
        </Card>
      </div>
      <div>橫向卡片列表</div>
      <div>橫向卡片列表</div>
      <div>橫向卡片列表</div>
      <div>橫向卡片列表</div>
      <div>橫向卡片列表</div>
      <div>橫向卡片列表</div>
      <div>橫向卡片列表</div>
      <div>橫向卡片列表</div>
      <div>橫向卡片列表</div>
      <div>橫向卡片列表</div>
      <div>橫向卡片列表</div>
      <div>橫向卡片列表</div>
      <div>橫向卡片列表</div>
      <div>橫向卡片列表</div>
      <div>橫向卡片列表</div>
      <div>橫向卡片列表</div>
      <div>橫向卡片列表</div>
      <div>橫向卡片列表</div>
      <div>橫向卡片列表</div>
      <div>橫向卡片列表</div>
      <div>橫向卡片列表</div>
      <div>橫向卡片列表</div>
      <div>橫向卡片列表</div>
      <div>橫向卡片列表</div>
      <div>橫向卡片列表</div>
      <div>橫向卡片列表</div>
      <div>橫向卡片列表</div>
      <div>橫向卡片列表</div>
      <div>橫向卡片列表</div>
      <div>橫向卡片列表</div>
      <div>橫向卡片列表</div>
      <div>橫向卡片列表</div>
      <div>橫向卡片列表</div>
      <div>橫向卡片列表</div>
    </div>
  );
}
