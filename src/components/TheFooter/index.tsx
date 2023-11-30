import { Button } from "antd";
import "./style.scss";

export default function TheFooter() {
  return (
    <footer className="the-footer">
      <span className="the-footer__copyright">Copyright 2023 @大唐俠士互助協會</span>
      <div className="the-footer__link">
        <Button type="link">｜開發團隊｜</Button>
        <Button type="link">｜聯絡我們｜</Button>
        <Button type="link">｜劍網三官網｜</Button>
      </div>
    </footer>
  );
}
