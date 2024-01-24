//views/Home/component/new-sale/index.tsx
import React from 'react';
import './style.scss';
import Salebtn from "./sale-button"

const sale: React.FC = () => {
  return (
    
    <>
    <div className="newsale-text">
      最新販賣
    </div>
    <Salebtn />
    </>

  );
};

export default sale;
