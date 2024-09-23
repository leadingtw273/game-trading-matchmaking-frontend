import { Outlet, useLocation } from "react-router-dom";

import FloatPostButton from "@/components/FloatPostButton";
import TheFooter from "@/components/TheFooter";
import TheNavbar from "@/components/TheNavbar";

Component.displayName = "Layout";
export function Component() {
  const location = useLocation();

  return (
    <>
      <TheNavbar />
      <Outlet />
      {location.pathname !== "/post" && <FloatPostButton />}
      <TheFooter />
    </>
  );
}
