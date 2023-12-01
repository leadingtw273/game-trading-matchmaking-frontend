import { Button } from "antd";
import "./style.scss";
import { Link } from "react-router-dom";

export default function TheFooter() {
  return (
    <footer className="the-footer">
      <span className="the-footer__copyright">Copyright 2023 @大唐俠士互助協會</span>
      <div className="the-footer__link">
        <Link to="/contact">
          <Button type="link">｜聯絡我們｜</Button>
        </Link>
        <Link to="https://jx3tc.xoyobox.com/" target="_blank">
          <Button type="link">｜劍網三官網｜</Button>
        </Link>
      </div>
    </footer>
  );
}
