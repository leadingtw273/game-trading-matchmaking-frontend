import { Flex } from "antd";

import logo from "@/assets/logo.png";
import { TransactionEnum } from "@/enums";

import CommodityCarousel from "./components/CommodityCarousel";
import SearchCard from "./components/SearchCard";

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
      <CommodityCarousel transactionType={TransactionEnum.Type.SALE} />
      <CommodityCarousel transactionType={TransactionEnum.Type.PURCHASE} />
      {/* <MerchantCarousel title="外觀商專區" />
      <MerchantCarousel title="代練專區" /> */}
    </Flex>
  );
}
