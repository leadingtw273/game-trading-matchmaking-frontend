import { useState } from "react";
import { Button, Flex } from "antd";

import BaseCarousel from "@/components/BaseCarousel";

import ItemCard from "./MerchantCard";

import "./style.scss";

interface IMerchantCarouselProps {
  title: string;
}

export default function MerchantCarousel(props: IMerchantCarouselProps) {
  const { title } = props;
  const [merchantList] = useState([
    {
      id: 1,
      image:
        "https://s3-alpha-sig.figma.com/img/3448/23e2/a2051ecd6accdc196e976861ba7f859a?Expires=1704672000&Signature=F-DiBo7LDYt9p9jDzdn9EshSXQCMO6flpE-yw4sGftuFz5g8NvtEhjjquQcP3wC-EgjeeZqP84GaNN817sgXuWc4btgEgIpXsT2LFOkp244rF-7p1EtdNI6afKLIyhaOhR1zQHfkcrVsgYobREm~7XdQntF0Y-w58P5Do-jzsCG3g4pd-En0UtTSlqyH0Anh47MkbxgJcordDKj48hRTmvX4l94fKRTFmR5TbbwN6IANL-N4LJp41~XMQ71xrTmA1QR32fNUzwAr3zPeNnTkULApB7sGYmNhJe2k1PMdFp3J373dRDlhjV0SYKqKxfV4D8fqfiP1lw2soACN5lh0fA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 2,
      image:
        "https://s3-alpha-sig.figma.com/img/3448/23e2/a2051ecd6accdc196e976861ba7f859a?Expires=1704672000&Signature=F-DiBo7LDYt9p9jDzdn9EshSXQCMO6flpE-yw4sGftuFz5g8NvtEhjjquQcP3wC-EgjeeZqP84GaNN817sgXuWc4btgEgIpXsT2LFOkp244rF-7p1EtdNI6afKLIyhaOhR1zQHfkcrVsgYobREm~7XdQntF0Y-w58P5Do-jzsCG3g4pd-En0UtTSlqyH0Anh47MkbxgJcordDKj48hRTmvX4l94fKRTFmR5TbbwN6IANL-N4LJp41~XMQ71xrTmA1QR32fNUzwAr3zPeNnTkULApB7sGYmNhJe2k1PMdFp3J373dRDlhjV0SYKqKxfV4D8fqfiP1lw2soACN5lh0fA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 3,
      image:
        "https://s3-alpha-sig.figma.com/img/3448/23e2/a2051ecd6accdc196e976861ba7f859a?Expires=1704672000&Signature=F-DiBo7LDYt9p9jDzdn9EshSXQCMO6flpE-yw4sGftuFz5g8NvtEhjjquQcP3wC-EgjeeZqP84GaNN817sgXuWc4btgEgIpXsT2LFOkp244rF-7p1EtdNI6afKLIyhaOhR1zQHfkcrVsgYobREm~7XdQntF0Y-w58P5Do-jzsCG3g4pd-En0UtTSlqyH0Anh47MkbxgJcordDKj48hRTmvX4l94fKRTFmR5TbbwN6IANL-N4LJp41~XMQ71xrTmA1QR32fNUzwAr3zPeNnTkULApB7sGYmNhJe2k1PMdFp3J373dRDlhjV0SYKqKxfV4D8fqfiP1lw2soACN5lh0fA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 4,
      image:
        "https://s3-alpha-sig.figma.com/img/3448/23e2/a2051ecd6accdc196e976861ba7f859a?Expires=1704672000&Signature=F-DiBo7LDYt9p9jDzdn9EshSXQCMO6flpE-yw4sGftuFz5g8NvtEhjjquQcP3wC-EgjeeZqP84GaNN817sgXuWc4btgEgIpXsT2LFOkp244rF-7p1EtdNI6afKLIyhaOhR1zQHfkcrVsgYobREm~7XdQntF0Y-w58P5Do-jzsCG3g4pd-En0UtTSlqyH0Anh47MkbxgJcordDKj48hRTmvX4l94fKRTFmR5TbbwN6IANL-N4LJp41~XMQ71xrTmA1QR32fNUzwAr3zPeNnTkULApB7sGYmNhJe2k1PMdFp3J373dRDlhjV0SYKqKxfV4D8fqfiP1lw2soACN5lh0fA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 5,
      image:
        "https://s3-alpha-sig.figma.com/img/3448/23e2/a2051ecd6accdc196e976861ba7f859a?Expires=1704672000&Signature=F-DiBo7LDYt9p9jDzdn9EshSXQCMO6flpE-yw4sGftuFz5g8NvtEhjjquQcP3wC-EgjeeZqP84GaNN817sgXuWc4btgEgIpXsT2LFOkp244rF-7p1EtdNI6afKLIyhaOhR1zQHfkcrVsgYobREm~7XdQntF0Y-w58P5Do-jzsCG3g4pd-En0UtTSlqyH0Anh47MkbxgJcordDKj48hRTmvX4l94fKRTFmR5TbbwN6IANL-N4LJp41~XMQ71xrTmA1QR32fNUzwAr3zPeNnTkULApB7sGYmNhJe2k1PMdFp3J373dRDlhjV0SYKqKxfV4D8fqfiP1lw2soACN5lh0fA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 6,
      image:
        "https://s3-alpha-sig.figma.com/img/3448/23e2/a2051ecd6accdc196e976861ba7f859a?Expires=1704672000&Signature=F-DiBo7LDYt9p9jDzdn9EshSXQCMO6flpE-yw4sGftuFz5g8NvtEhjjquQcP3wC-EgjeeZqP84GaNN817sgXuWc4btgEgIpXsT2LFOkp244rF-7p1EtdNI6afKLIyhaOhR1zQHfkcrVsgYobREm~7XdQntF0Y-w58P5Do-jzsCG3g4pd-En0UtTSlqyH0Anh47MkbxgJcordDKj48hRTmvX4l94fKRTFmR5TbbwN6IANL-N4LJp41~XMQ71xrTmA1QR32fNUzwAr3zPeNnTkULApB7sGYmNhJe2k1PMdFp3J373dRDlhjV0SYKqKxfV4D8fqfiP1lw2soACN5lh0fA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
  ]);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    gap: 24,
    speed: 500,
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Flex className="merchant-carousel" gap={24} vertical>
      <Flex justify="space-between" align="center">
        <div className="merchant-carousel_title">{title}</div>
        <Button className="merchant-carousel_more-action" type="link">
          查看販賣中全部
          <span className="material-symbols-outlined">chevron_right</span>
        </Button>
      </Flex>
      <BaseCarousel afterChange={onChange} {...settings}>
        {merchantList.map((merchant) => (
          <ItemCard key={merchant.id} {...merchant} />
        ))}
      </BaseCarousel>
    </Flex>
  );
}
