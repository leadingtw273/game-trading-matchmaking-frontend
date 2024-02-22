// Test/index.tsx
import CurrencyCard from "../Market/Coin/CoinCard/index"; // 确保路径正确
import { IPrize, Currency } from "@/types/common"; // 导入IPrize和Currency类型

// 创建一个假的货币卡属性
const fakeProps = {
  stock: "200,000金",
  smalltrade: "可",
  currencyAmount: "300金幣",
  price: { currency: Currency.NTD, value: 200000 } as IPrize, // 使用Currency枚举类型
  paymentMethods: ["LinePay", "匯款", "8591", "其他"],
  postDate: "2023/12/21",
  sellerNote: "本號交易 幣源：副本、百戰疏影圖、外觀買賣 可小額，當天交易",
  imageUrl: "path_to_your_image.png", // 确保这是一个有效的图片路径
  contactInfo: {
    gameid: "梨子酒酒",
    discord: "user#99",
    line: "nashiiiiiiiiii",
    facebook: "梨子99",
  },
};

// 定义CurrencyCardProps以确保类型正确
interface ICurrencyCardProps {
  currencyAmount: string;
  price: IPrize;
  paymentMethods: string[];
  postDate: string;
  sellerNote: string;
  imageUrl: string;
  contactInfo: {
    discord: string;
    line: string;
    facebook: string;
  };
}
Component.displayName = "Test";

export function Component() {
  return <CurrencyCard {...(fakeProps as ICurrencyCardProps)} />;
}
