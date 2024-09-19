import { Outlet } from "react-router-dom";

import FloatPostButton from "@/components/FloatPostButton";
import TheFooter from "@/components/TheFooter";
import TheNavbar from "@/components/TheNavbar";

Component.displayName = "Layout";
export function Component() {
  return (
    <>
      <TheNavbar />
      <Outlet />
      <FloatPostButton />
      <TheFooter />
    </>
  );
}
