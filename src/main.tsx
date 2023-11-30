import React from "react";
import ReactDOM from "react-dom/client";
import TheNavbar from "@/components/TheNavbar";
import TheFooter from "@/components/TheFooter";
import Home from "@/views/Home";
import "./styles/global.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TheNavbar />
    <Home />
    <TheFooter />
  </React.StrictMode>
);
