import { IPrize } from "@/types/common";
import "./style.scss";
import coinSvg from "./coin.svg";
import userSvg from "./userimg.svg";
import heartOutline from "./heart-outline.svg";
import heartFilled from "./heart-filled.svg";
import { useState } from "react";

interface ICurrencyCardProps {
  currencyAmount: string;
  price: IPrize;
  paymentMethods: string[];
  postDate: string;
  stock: string;
  sellerNote: string;
  smalltrade: string;
  imageUrl: string;
  contactInfo: {
    discord: string;
    line: string;
    facebook: string;
    gameid: string;
  };
}

export default function CurrencyCard(props: ICurrencyCardProps) {
  const { currencyAmount, paymentMethods, postDate, sellerNote, contactInfo, stock, smalltrade } = props;

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="currency-card-background">
      <div className="currency-card">
        <div className="currency-card_header">
          <div className="currency-card_header_img">
            <img src={coinSvg} alt="Currency" className="currency-image" />
          </div>
          <div className="currency-card_header_text">
            <div className="sell">販賣金幣</div>
            <div className="currency-amount">100台幣比:{currencyAmount}</div>
          </div>
          <div className="card-mark" onClick={toggleFavorite}>
            <img src={isFavorite ? heartFilled : heartOutline} alt="Favorite" />
          </div>
        </div>

        <div className="currency-card-divider">
          <div className="line"></div>
          <div className="diamond"></div>
          <div className="line"></div>
        </div>
        <div className="currency-card_body">
          <div className="currency-card_body_header">
            <div className="sell-title">
              <div className="sell-title-group">
                <div className="stock-info">
                  <span>庫存</span> {stock}
                </div>
                <div className="currency-payment-methods">
                  <span>交易方式:</span>
                  {paymentMethods.map((method, index) => (
                    <span key={index} className="payment-method">
                      {method}
                    </span>
                  ))}
                </div>
              </div>
              <div className="sell-title-group">
                <div className="small-trade-info">
                  <span>小額交易</span> {smalltrade}
                </div>
                <div className="currency-post-date">
                  <span>更新時間</span>
                  {postDate}
                </div>
              </div>
            </div>
            <div className="currency-seller-note">
              <div className="sellerNote">{sellerNote}</div>
            </div>
          </div>
          <div className="currency-card_body_footer">
            <div className="sell-user">
              <div className="user-div">
                <div className="user-image-container">
                  <img src={userSvg} className="user-image" />
                  <div className="online-status"></div>
                  <div className="online-status-background"></div>
                </div>
                <div className="game-nickname">{contactInfo.gameid}</div>
              </div>
            </div>
            <div className="currency-contact-info">
              <div className="sell-title-group">
                <div className="sell-title-gameid">
                  <div>遊戲暱稱</div> {contactInfo.gameid}
                </div>
                <div className="sell-title-discord">
                  <div>Discord</div> {contactInfo.discord}
                </div>
              </div>
              <div className="sell-title-group">
                <div className="sell-title-line">
                  <div>
                    LINE<span></span>ID
                  </div>{" "}
                  {contactInfo.line}
                </div>
                <div className="sell-title-facebook">
                  <div>FB</div> {contactInfo.facebook}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
