//views/home/components/search-card/index.tsx
import { Card, Tabs,TabsProps,Input,Button} from "antd";
import React from 'react';
import './style.scss';
import searchDecorate from './search-decorate.png'

const SearchCard: React.FC = () => {

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '外觀',

    },
    {
      key: '2',
      label: '角色',

    },
    {
      key: '3',
      label: '金幣',

    },
  ];
  return (
    <Card className="search-card">
      <Tabs defaultActiveKey="1" items={items} tabBarStyle={{ color: "red" }} />
      <Input size="large" placeholder="搜尋"  prefix={<span className="icon material-symbols-outlined">search</span>} />
      <Button type="primary">搜尋</Button>
      
      <img className="search-card_decorate decorate-1" src={searchDecorate} />
      <img className="search-card_decorate decorate-2" src={searchDecorate} />
      <img className="search-card_decorate decorate-3" src={searchDecorate} />
    </Card>

  );
};

export default SearchCard;



