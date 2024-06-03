import { Col, Flex, Pagination, Row } from "antd";
import { CustomScroll } from "react-custom-scroll";
import TableHeader from "./components/TableHeader";
import coinCommodityList from "@/mocks/CoinCommodity";

import { useEffect, useState } from "react";
import ItemCard from "./components/ItemCard";
import { TableDisplayMode, TableSortType, Transaction } from "@/enums";
import { CoinCommodity, TransactionItem } from "@/types";

type ItemTableProps = {
  transactionType: Transaction.Type;
};
export default function ItemTable(props: ItemTableProps) {
  const { transactionType } = props;
  const [displayMode, setDisplayMode] = useState<TableDisplayMode>(TableDisplayMode.GRID);
  const [dataList, setDataList] = useState<TransactionItem<CoinCommodity>[]>(coinCommodityList);

  useEffect(() => {
    const list = requestList(transactionType);
    setDataList(list);
  }, [transactionType]);

  const requestList = (transactionType: Transaction.Type) => {
    // TODO: fetch data from server
    return coinCommodityList.filter((item) => item.type === transactionType).slice(0, 8);
  };

  const handleChangePagination = (page: number, pageSize: number | undefined) => {
    console.log("handleChangePagination", page, pageSize);
  };

  const handleChangeSortType = (value: TableSortType) => {
    console.log("handleChangeSortType", value);
  };

  const handleChangeDisplayMode = (value: TableDisplayMode) => {
    setDisplayMode(value);
  };

  return (
    <Flex className="item-table" vertical>
      <div className="item-table__header">
        <TableHeader
          itemCount={dataList.length}
          displayMode={displayMode}
          onChangeSortType={handleChangeSortType}
          onChangeDisplayMode={handleChangeDisplayMode}
        />
      </div>
      <div className="item-table__content">
        <CustomScroll heightRelativeToParent="100%">
          <Row gutter={[10, 10]}>
            {dataList.map((item) => (
              <Col key={item.id} span={displayMode === TableDisplayMode.GRID ? 6 : 24}>
                <ItemCard mode={displayMode} item={item} />
              </Col>
            ))}
          </Row>
        </CustomScroll>
      </div>
      <div className="item-table__pagination">
        <Pagination current={2} total={500} onChange={handleChangePagination} showQuickJumper />
      </div>
    </Flex>
  );
}
