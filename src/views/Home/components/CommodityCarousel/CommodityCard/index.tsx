import { IPrize } from "@/types/common";
import "./style.scss";

interface ICommodityCardProps {
  name: string;
  price: IPrize;
  image: string;
  seller: string;
}

export default function CommodityCard(props: ICommodityCardProps) {
  const { name, price, image, seller } = props;
  return (
    <div className="commodity-card_wrapper">
      <div className="commodity-card">
        <img className="commodity-card_image" alt="example" src={image} />
        <div className="commodity-card_content">
          <div className="commodity-card_title">{name}</div>
          <div className="commodity-card_name">賣家名稱({seller})</div>
          <div className="commodity-card_prize">
            {price.currency} {price.value}
          </div>
        </div>
      </div>
    </div>
  );
}
