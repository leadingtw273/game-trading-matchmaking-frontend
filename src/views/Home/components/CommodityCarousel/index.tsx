import { useState } from "react";
import BaseCarousel from "@/components/BaseCarousel";
import ItemCard from "./CommodityCard";
import "./style.scss";
import { Button, Flex } from "antd";
import { Currency, Transaction } from "@/enums";

interface ICommodityCarouselProps {
  title: string;
}

export default function CommodityCarousel(props: ICommodityCarouselProps) {
  const { title } = props;
  const [type, setType] = useState<Transaction.Commodity>(Transaction.Commodity.Appearance);
  const [commodities] = useState([
    {
      id: 1,
      name: "月絨絨‧明橙",
      price: {
        currency: Currency.Type.TWD,
        ratio: 600,
      },
      image:
        "https://s3-alpha-sig.figma.com/img/3448/23e2/a2051ecd6accdc196e976861ba7f859a?Expires=1704672000&Signature=F-DiBo7LDYt9p9jDzdn9EshSXQCMO6flpE-yw4sGftuFz5g8NvtEhjjquQcP3wC-EgjeeZqP84GaNN817sgXuWc4btgEgIpXsT2LFOkp244rF-7p1EtdNI6afKLIyhaOhR1zQHfkcrVsgYobREm~7XdQntF0Y-w58P5Do-jzsCG3g4pd-En0UtTSlqyH0Anh47MkbxgJcordDKj48hRTmvX4l94fKRTFmR5TbbwN6IANL-N4LJp41~XMQ71xrTmA1QR32fNUzwAr3zPeNnTkULApB7sGYmNhJe2k1PMdFp3J373dRDlhjV0SYKqKxfV4D8fqfiP1lw2soACN5lh0fA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      seller: "@salse_name",
    },
    {
      id: 2,
      name: "月絨絨‧明橙",
      price: {
        currency: Currency.Type.TWD,
        ratio: 600,
      },
      image:
        "https://s3-alpha-sig.figma.com/img/3448/23e2/a2051ecd6accdc196e976861ba7f859a?Expires=1704672000&Signature=F-DiBo7LDYt9p9jDzdn9EshSXQCMO6flpE-yw4sGftuFz5g8NvtEhjjquQcP3wC-EgjeeZqP84GaNN817sgXuWc4btgEgIpXsT2LFOkp244rF-7p1EtdNI6afKLIyhaOhR1zQHfkcrVsgYobREm~7XdQntF0Y-w58P5Do-jzsCG3g4pd-En0UtTSlqyH0Anh47MkbxgJcordDKj48hRTmvX4l94fKRTFmR5TbbwN6IANL-N4LJp41~XMQ71xrTmA1QR32fNUzwAr3zPeNnTkULApB7sGYmNhJe2k1PMdFp3J373dRDlhjV0SYKqKxfV4D8fqfiP1lw2soACN5lh0fA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      seller: "@salse_name",
    },
    {
      id: 3,
      name: "月絨絨‧明橙",
      price: {
        currency: Currency.Type.TWD,
        ratio: 600,
      },
      image:
        "https://s3-alpha-sig.figma.com/img/3448/23e2/a2051ecd6accdc196e976861ba7f859a?Expires=1704672000&Signature=F-DiBo7LDYt9p9jDzdn9EshSXQCMO6flpE-yw4sGftuFz5g8NvtEhjjquQcP3wC-EgjeeZqP84GaNN817sgXuWc4btgEgIpXsT2LFOkp244rF-7p1EtdNI6afKLIyhaOhR1zQHfkcrVsgYobREm~7XdQntF0Y-w58P5Do-jzsCG3g4pd-En0UtTSlqyH0Anh47MkbxgJcordDKj48hRTmvX4l94fKRTFmR5TbbwN6IANL-N4LJp41~XMQ71xrTmA1QR32fNUzwAr3zPeNnTkULApB7sGYmNhJe2k1PMdFp3J373dRDlhjV0SYKqKxfV4D8fqfiP1lw2soACN5lh0fA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      seller: "@salse_name",
    },
    {
      id: 4,
      name: "月絨絨‧明橙",
      price: {
        currency: Currency.Type.TWD,
        ratio: 600,
      },
      image:
        "https://s3-alpha-sig.figma.com/img/3448/23e2/a2051ecd6accdc196e976861ba7f859a?Expires=1704672000&Signature=F-DiBo7LDYt9p9jDzdn9EshSXQCMO6flpE-yw4sGftuFz5g8NvtEhjjquQcP3wC-EgjeeZqP84GaNN817sgXuWc4btgEgIpXsT2LFOkp244rF-7p1EtdNI6afKLIyhaOhR1zQHfkcrVsgYobREm~7XdQntF0Y-w58P5Do-jzsCG3g4pd-En0UtTSlqyH0Anh47MkbxgJcordDKj48hRTmvX4l94fKRTFmR5TbbwN6IANL-N4LJp41~XMQ71xrTmA1QR32fNUzwAr3zPeNnTkULApB7sGYmNhJe2k1PMdFp3J373dRDlhjV0SYKqKxfV4D8fqfiP1lw2soACN5lh0fA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      seller: "@salse_name",
    },
    {
      id: 5,
      name: "月絨絨‧明橙",
      price: {
        currency: Currency.Type.TWD,
        ratio: 600,
      },
      image:
        "https://s3-alpha-sig.figma.com/img/3448/23e2/a2051ecd6accdc196e976861ba7f859a?Expires=1704672000&Signature=F-DiBo7LDYt9p9jDzdn9EshSXQCMO6flpE-yw4sGftuFz5g8NvtEhjjquQcP3wC-EgjeeZqP84GaNN817sgXuWc4btgEgIpXsT2LFOkp244rF-7p1EtdNI6afKLIyhaOhR1zQHfkcrVsgYobREm~7XdQntF0Y-w58P5Do-jzsCG3g4pd-En0UtTSlqyH0Anh47MkbxgJcordDKj48hRTmvX4l94fKRTFmR5TbbwN6IANL-N4LJp41~XMQ71xrTmA1QR32fNUzwAr3zPeNnTkULApB7sGYmNhJe2k1PMdFp3J373dRDlhjV0SYKqKxfV4D8fqfiP1lw2soACN5lh0fA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      seller: "@salse_name",
    },
    {
      id: 6,
      name: "月絨絨‧明橙",
      price: {
        currency: Currency.Type.TWD,
        ratio: 600,
      },
      image:
        "https://s3-alpha-sig.figma.com/img/3448/23e2/a2051ecd6accdc196e976861ba7f859a?Expires=1704672000&Signature=F-DiBo7LDYt9p9jDzdn9EshSXQCMO6flpE-yw4sGftuFz5g8NvtEhjjquQcP3wC-EgjeeZqP84GaNN817sgXuWc4btgEgIpXsT2LFOkp244rF-7p1EtdNI6afKLIyhaOhR1zQHfkcrVsgYobREm~7XdQntF0Y-w58P5Do-jzsCG3g4pd-En0UtTSlqyH0Anh47MkbxgJcordDKj48hRTmvX4l94fKRTFmR5TbbwN6IANL-N4LJp41~XMQ71xrTmA1QR32fNUzwAr3zPeNnTkULApB7sGYmNhJe2k1PMdFp3J373dRDlhjV0SYKqKxfV4D8fqfiP1lw2soACN5lh0fA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      seller: "@salse_name",
    },
  ]);
  const labelMap = {
    [Transaction.Commodity.Appearance]: "外觀",
    [Transaction.Commodity.Character]: "角色",
    [Transaction.Commodity.Coin]: "金幣",
  };

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    variableWidth: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const handleClickType = (type: Transaction.Commodity) => {
    setType(type);
  };

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Flex className="commodity-carousel" gap={24} vertical>
      <div className="commodity-carousel_title">{title}</div>
      <Flex justify="space-between" align="center">
        <Flex className="commodity-carousel_type-action" gap={16}>
          <Button onClick={() => handleClickType(Transaction.Commodity.Appearance)}>外觀</Button>
          <Button onClick={() => handleClickType(Transaction.Commodity.Character)}>角色</Button>
          <Button onClick={() => handleClickType(Transaction.Commodity.Coin)}>金幣</Button>
        </Flex>
        <Button className="commodity-carousel_more-action" type="link">
          查看販賣中{labelMap[type]}
          <span className="material-symbols-outlined">chevron_right</span>
        </Button>
      </Flex>
      <BaseCarousel afterChange={onChange} {...settings}>
        {commodities.map((commodity) => (
          <ItemCard key={commodity.id} {...commodity} />
        ))}
      </BaseCarousel>
    </Flex>
  );
}
