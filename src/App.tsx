import { ConfigProvider } from "antd";
import Router from "@/routers";

export default function APP() {
  return (
    <ConfigProvider componentSize={"middle"}>
      <Router />
    </ConfigProvider>
  );
}
