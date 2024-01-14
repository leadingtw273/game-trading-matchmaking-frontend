// views/home/components/search-card/index.tsx
import { /*Button,*/ Input } from "antd";
import React from 'react';
import './style.scss';

const SearchCard: React.FC = () => {
  return (
    
<div className="search-card-image">
  <h1>
    <div className="text-frame">
      <div className="text-1">外觀</div>
      <div className="text-2">角色</div>
      <div className="text-3">金幣</div>
    </div>
  </h1>
    <div className="search-text-box">

      <Input placeholder="搜尋" prefix={<span className="icon material-symbols-outlined">search</span>} />

    </div>
</div>
  );
};

export default SearchCard;



