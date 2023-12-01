import { Outlet } from "react-router-dom";
import TheNavbar from "@/components/TheNavbar";
import TheFooter from "@/components/TheFooter";

Component.displayName = "Layout";
export function Component() {
  return (
    <>
      <TheNavbar />
      <Outlet />
      <TheFooter />
    </>
  );
}
