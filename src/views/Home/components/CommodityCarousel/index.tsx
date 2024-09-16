import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Flex } from "antd";

import BaseCarousel from "@/components/BaseCarousel";
import { TransactionEnum } from "@/enums";
import appearanceCommodityList from "@/mocks/AppearanceCommodity";
import CharacterCommodityList from "@/mocks/CharacterCommodity";
import CoinCommodityList from "@/mocks/CoinCommodity";
import { AppearanceCommodity, CharacterCommodity, CoinCommodity, CommodityItem, TransactionItem } from "@/types";

import AppearanceCard from "./components/AppearanceCard";
import CharacterCard from "./components/CharacterCard";
import CoinCard from "./components/CoinCard";

import "./style.scss";

type Response = TransactionItem<CommodityItem<CoinCommodity | AppearanceCommodity | CharacterCommodity>>[];

interface ICommodityCarouselProps {
  transactionType: TransactionEnum.Type;
}
export default function CommodityCarousel(props: ICommodityCarouselProps) {
  const { transactionType } = props;
  const navigate = useNavigate();
  const [commodityType, setCommodityType] = useState<TransactionEnum.Commodity>(TransactionEnum.Commodity.Appearance);
  const [dataList, setDataList] = useState<
    TransactionItem<CommodityItem<CoinCommodity | AppearanceCommodity | CharacterCommodity>>[]
  >([]);

  const transactionLabelMap = {
    [TransactionEnum.Type.SALE]: "販賣",
    [TransactionEnum.Type.PURCHASE]: "收購",
  };

  const commodityLabelMap = {
    [TransactionEnum.Commodity.Appearance]: "外觀",
    [TransactionEnum.Commodity.Character]: "角色",
    [TransactionEnum.Commodity.Coin]: "金幣",
  };

  useEffect(() => {
    const result = requestList(transactionType, commodityType);
    setDataList(result);
  }, [commodityType, transactionType]);

  const requestList = (transactionType: TransactionEnum.Type, commodityType: TransactionEnum.Commodity): Response => {
    // TODO: fetch data from server
    switch (commodityType) {
      case TransactionEnum.Commodity.Appearance:
        return appearanceCommodityList.filter((item) => item.type === transactionType).slice(0, 10) as Response;
      case TransactionEnum.Commodity.Character:
        return CharacterCommodityList.filter((item) => item.type === transactionType).slice(0, 10) as Response;
      case TransactionEnum.Commodity.Coin:
        return CoinCommodityList.filter((item) => item.type === transactionType).slice(0, 10) as Response;
      default:
        return [] as Response;
    }
  };

  const handleClickMore = () => {
    navigate(`/market/${commodityType}`, { state: { transactionType } });
  };

  const handleClickCommodityType = (type: TransactionEnum.Commodity) => {
    setCommodityType(type);
    const result = requestList(transactionType, type);
    setDataList(result);
  };

  return (
    <Flex className="commodity-carousel" gap={24} vertical>
      <div className="commodity-carousel_title">最新{transactionLabelMap[transactionType]}</div>

      <Flex justify="space-between" align="center">
        <Flex style={{ padding: "0 15px" }} gap={16}>
          <Button
            className={[
              "commodity-carousel_action-type",
              TransactionEnum.Commodity.Appearance === commodityType ? "active" : "",
            ].join(" ")}
            onClick={() => handleClickCommodityType(TransactionEnum.Commodity.Appearance)}
          >
            外觀
          </Button>
          <Button
            className={[
              "commodity-carousel_action-type",
              TransactionEnum.Commodity.Character === commodityType ? "active" : "",
            ].join(" ")}
            onClick={() => handleClickCommodityType(TransactionEnum.Commodity.Character)}
          >
            角色
          </Button>
          <Button
            className={[
              "commodity-carousel_action-type",
              TransactionEnum.Commodity.Coin === commodityType ? "active" : "",
            ].join(" ")}
            onClick={() => handleClickCommodityType(TransactionEnum.Commodity.Coin)}
          >
            金幣
          </Button>
        </Flex>
        <Button className="commodity-carousel_action-more" type="link" onClick={handleClickMore}>
          查看{transactionLabelMap[transactionType]}中{commodityLabelMap[commodityType]}
          <span className="material-symbols-outlined">chevron_right</span>
        </Button>
      </Flex>

      <BaseCarousel>
        {dataList.map((data) => {
          switch (commodityType) {
            case TransactionEnum.Commodity.Appearance:
              return <AppearanceCard key={data.id} data={data as TransactionItem<AppearanceCommodity>} />;
            case TransactionEnum.Commodity.Character:
              return <CharacterCard key={data.id} data={data as TransactionItem<CharacterCommodity>} />;
            case TransactionEnum.Commodity.Coin:
              return <CoinCard key={data.id} data={data as TransactionItem<CoinCommodity>} />;
            default:
              return null;
          }
        })}
      </BaseCarousel>
    </Flex>
  );
}
