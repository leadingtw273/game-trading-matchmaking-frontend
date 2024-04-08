import { ConfigProvider } from "antd";
import Router from "@/routers";

export default function APP() {
  return (
    <ConfigProvider
      componentSize={"middle"}
      autoInsertSpaceInButton={false}
      theme={{
        token: {
          fontFamily: "Noto Sans TC, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
          colorPrimary: "#E2D4BB",
          colorInfo: "#b6ab99",
          colorSuccess: "#ffc700",
          colorWarning: "#ed9e00",
          colorError: "#d10002",
        },
      }}
    >
      <Router />
    </ConfigProvider>
  );
}
