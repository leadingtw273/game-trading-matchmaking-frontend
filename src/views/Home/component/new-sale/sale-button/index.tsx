//views/Home/component/new-sale/sale-button/index.tsx
import { Button,Flex } from 'antd';
import React from 'react';
import './style.scss';

    const Salebtn: React.FC = () => 

    <Flex gap="small" wrap="wrap">
        <Button className="ant-sale-btn">外觀</Button>
        <Button className="ant-sale-btn">角色</Button>
        <Button className="ant-sale-btn">金幣</Button>
    </Flex>


export default Salebtn;
