import "./style.scss";

interface IMerchantCardProps {
  image: string;
}

export default function MerchantCard(props: IMerchantCardProps) {
  const { image } = props;
  return (
    <div className="merchant-card_wrapper">
      <img className="merchant-card" alt="example" src={image} />
    </div>
  );
}
