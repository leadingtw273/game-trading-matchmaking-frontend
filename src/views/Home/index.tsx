import { Flex } from "antd";
import logo from "@/assets/logo.png";
import SearchCard from "./components/SearchCard";
// import CommodityCarousel from "./components/CommodityCarousel";
// import MerchantCarousel from "./components/MerchantCarousel";
import "./style.scss";

Component.displayName = "Home";
export function Component() {
  return (
    <Flex className="home-page" gap={40} justify="center" align="center" vertical>
      <Flex className="search-block" align="center" vertical>
        <img className="search-block_logo" src={logo} alt="logo-text" />
        <SearchCard />
      </Flex>
      {/* <CommodityCarousel title="最新販賣" />
      <CommodityCarousel title="最新收購" /> */}
      {/* <MerchantCarousel title="外觀商專區" />
      <MerchantCarousel title="代練專區" /> */}
    </Flex>
  );
}
