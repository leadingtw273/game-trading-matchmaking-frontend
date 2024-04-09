import { Flex, Pagination } from "antd";
import TableHeader from "./components/TableHeader";

import "./style.scss";

export default function ItemTable() {
  const handleChangePagination = (page: number, pageSize: number | undefined) => {
    console.log("handleChangePagination", page, pageSize);
  };

  // const handleChangeSortType = (value: SortType) => {
  //   console.log("handleChangeSortType", value);
  // };

  return (
    <Flex className="item-table" vertical>
      <TableHeader className="item-table__header" />
      <div className="item-table__content">content</div>
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
