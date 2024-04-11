import { Col, Flex, Pagination, Row } from "antd";
import TableHeader from "./components/TableHeader";
import coinCommodityList from "@/mocks/CoinCommodity";

import "./style.scss";
import { useState } from "react";
import ItemCard from "./components/ItemCard";

export default function ItemTable() {
  const [dataList] = useState(coinCommodityList);

  const handleChangePagination = (page: number, pageSize: number | undefined) => {
    console.log("handleChangePagination", page, pageSize);
  };

  // const handleChangeSortType = (value: SortType) => {
  //   console.log("handleChangeSortType", value);
  // };

  return (
    <Flex className="item-table" vertical>
      <TableHeader className="item-table__header" />
      <Row className="item-table__content" gutter={[10, 10]}>
        {dataList.map((item) => (
          <Col key={item.id} span={6}>
            <ItemCard item={item} />
          </Col>
        ))}
      </Row>
      <Pagination
        className="item-table__pagination"
        current={2}
        total={500}
        onChange={handleChangePagination}
        showQuickJumper
      />
    </Flex>
  );
}
