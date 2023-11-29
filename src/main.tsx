import React from "react";
import ReactDOM from "react-dom/client";
import TheNavbar from "@/components/TheNavbar";
import "./styles/global.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TheNavbar />
  </React.StrictMode>
);
