import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button, Input } from "antd";

import logo from "@/assets/logo_thin.png";

import "./style.scss";

export default function TheNavbar() {
  const navigate = useNavigate();

  const handlePressSearch = (value: string) => {
    console.log("[test] Navbar search", value);
    navigate("/search", { state: { search: value } });
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
        <Link className="menus-logo" to="/">
          <img src={logo} alt="logo-text" />
        </Link>
        <div className="menus-items">
          <NavLink className="item" to="/market/coin">
            買賣金幣
          </NavLink>
          <NavLink className="item" to="/market/appearance">
            買賣外觀
          </NavLink>
          <NavLink className="item" to="/market/character">
            買賣角色
          </NavLink>
        </div>
      </div>
      <div className="the-navbar__actions actions">
        <Input
          className="actions-search"
          placeholder="搜尋"
          prefix={<span className="material-symbols-outlined">search</span>}
          onPressEnter={(e) => handlePressSearch(e.currentTarget.value)}
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
