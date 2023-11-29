import logoText from "@/assets/logo-text.png";
import { Button, Input } from "antd";
import "./style.scss";

export default function TheNavbar() {
  const handlePressSearch = () => {
    console.log("[test] Navbar search");
  };

  const handleClickSend = () => {
    console.log("[test] Navbar send");
  };

  const handleClickFavorite = () => {
    console.log("[test] Navbar favorite");
  };

  return (
    <div className="the-navbar">
      <div className="the-navbar__menus menus">
        <img className="menus-logo" src={logoText} alt="logo-text" />
        <div className="menus-items">
          <div className="item">買賣金幣</div>
          <div className="item">買賣外觀</div>
          <div className="item">買賣角色</div>
        </div>
      </div>
      <div className="the-navbar__actions actions">
        <Input
          className="actions-search"
          placeholder="搜尋"
          prefix={<span className="material-symbols-outlined">search</span>}
          onPressEnter={handlePressSearch}
        />
        <Button
          className="actions-item"
          type="text"
          shape="circle"
          icon={<span className="material-symbols-outlined">send</span>}
          onClick={handleClickSend}
        />
        <Button
          className="actions-item"
          type="text"
          shape="circle"
          icon={<span className="material-symbols-outlined">favorite</span>}
          onClick={handleClickFavorite}
        />
      </div>
    </div>
  );
}
