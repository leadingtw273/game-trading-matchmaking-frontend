import { AppstoreFilled, MenuOutlined } from "@ant-design/icons";
import { Flex, Radio, Select } from "antd";

import { TableDisplayMode, TableSortType } from "@/enums";

import "./style.scss";

type TableHeaderProps = {
  itemCount?: number;
  displayMode?: TableDisplayMode;
  onChangeSortType?: (value: TableSortType) => void;
  onChangeDisplayMode?: (value: TableDisplayMode) => void;
};
export default function TableHeader(props: TableHeaderProps) {
  const { itemCount = 0, displayMode = TableDisplayMode.GRID, onChangeSortType, onChangeDisplayMode } = props;

  const handleChangeSortType = (value: TableSortType) => {
    onChangeSortType?.(value);
  };

  const handleChangeDisplayMode = (value: TableDisplayMode) => {
    onChangeDisplayMode?.(value);
  };

  return (
    <Flex className="table-header" align="center" justify="space-between">
      <div className="table-header__result-count">
        共<span className="count">{itemCount}</span>項搜尋結果
      </div>
      <Flex align="center" gap={28}>
        <div className="table-header__sort-type">
          <span className="label">排序</span>
          <Select
            className="selector"
            popupMatchSelectWidth={false}
            defaultValue={TableSortType.RECENT_UPDATE}
            onChange={handleChangeSortType}
            size="small"
            options={[
              { value: TableSortType.RECENT_UPDATE, label: "最近更新" },
              { value: TableSortType.AMOUNT_DESC, label: "金額大到小" },
              { value: TableSortType.AMOUNT_ASC, label: "金額小到大" },
            ]}
          />
        </div>
        <div className="table-header__show-style">
          <span className="label">排列方式</span>
          <Radio.Group
            className="radio"
            value={displayMode}
            buttonStyle="solid"
            size="small"
            onChange={(e) => handleChangeDisplayMode(e.target.value)}
          >
            <Flex gap={6}>
              <Radio.Button value={TableDisplayMode.GRID}>
                <AppstoreFilled />
              </Radio.Button>
              <Radio.Button value={TableDisplayMode.LIST}>
                <MenuOutlined />
              </Radio.Button>
            </Flex>
          </Radio.Group>
        </div>
      </Flex>
    </Flex>
  );
}
